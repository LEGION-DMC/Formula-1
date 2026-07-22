// scripts/fetch-penalties.js
const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://f1report.ru/penalty/';

console.log('Загружаем данные с f1report.ru...');

https.get(url, (res) => {
    let html = '';
    
    res.on('data', chunk => html += chunk);
    
    res.on('end', () => {
        console.log('Страница загружена, парсим...');
        
        const penalties = [];
        
        // Ищем основную таблицу со штрафами
        // На f1report.ru таблица имеет класс table или похожий
        const tableMatch = html.match(/<table[^>]*class="[^"]*table[^"]*"[^>]*>([\s\S]*?)<\/table>/i);
        
        if (!tableMatch) {
            console.log('Таблица не найдена!');
            // Создаём пустой файл, чтобы не сломать сайт
            writePenaltiesFile(penalties);
            return;
        }
        
        const tableHtml = tableMatch[1];
        
        // Ищем строки таблицы (пропускаем заголовок)
        const rows = tableHtml.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || [];
        
        rows.forEach(row => {
            // Пропускаем строки-заголовки
            if (row.includes('<th')) return;
            
            // Извлекаем ячейки
            const cells = row.match(/<td[^>]*>([\s\S]*?)<\/td>/gi) || [];
            
            if (cells.length >= 3) {
                // Очищаем от HTML-тегов
                const cleanCell = (html) => html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
                
                const position = cleanCell(cells[0]);  // Позиция
                const driverRaw = cells[1];            // Пилот (может содержать ссылку)
                const points = cleanCell(cells[2]);   // Штрафные баллы
                
                // Извлекаем имя пилота
                const driverName = driverRaw.replace(/<[^>]*>/g, '').trim();
                
                // Парсим количество штрафов
                const fines = parseInt(points);
                
                if (driverName && !isNaN(fines)) {
                    penalties.push({
                        driver: driverName,
                        fines: fines
                    });
                    
                    console.log(`  ${driverName}: ${fines} штрафов`);
                }
            }
        });
        
        // Убираем дубликаты (если есть)
        const uniquePenalties = [];
        const seen = new Set();
        penalties.forEach(p => {
            if (!seen.has(p.driver)) {
                seen.add(p.driver);
                uniquePenalties.push(p);
            }
        });
        
        console.log(`Найдено ${uniquePenalties.length} пилотов со штрафами`);
        writePenaltiesFile(uniquePenalties);
    });
    
}).on('error', (err) => {
    console.error('Ошибка загрузки:', err.message);
    process.exit(1);
});

function writePenaltiesFile(penalties) {
    const now = new Date().toISOString();
    
    const content = `// Автоматически обновлено: ${now}
// Источник: https://f1report.ru/penalty/
const penaltiesData = ${JSON.stringify(penalties, null, 4)};
`;
    
    const filePath = path.join(__dirname, '..', 'data', 'penalties-data.js');
    
    // Убедимся, что папка существует
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Файл сохранён: ${filePath}`);
}