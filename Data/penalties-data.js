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
        
        // Пробуем найти таблицу
        const tableMatch = html.match(/<table[^>]*>([\s\S]*?)<\/table>/i);
        
        if (!tableMatch) {
            console.log('Таблица не найдена!');
            writePenaltiesFile([]);
            return;
        }
        
        const tableHtml = tableMatch[1];
        const rows = tableHtml.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || [];
        
        rows.forEach(row => {
            if (row.includes('<th')) return;
            
            const cells = row.match(/<td[^>]*>([\s\S]*?)<\/td>/gi) || [];
            
            if (cells.length >= 3) {
                const cleanCell = (html) => html.replace(/<[^>]*>/g, '').trim();
                
                const driverName = cleanCell(cells[1]);
                const fines = parseInt(cleanCell(cells[2]));
                
                if (driverName && !isNaN(fines) && driverName.length > 2) {
                    penalties.push({
                        driver: driverName,
                        fines: fines
                    });
                }
            }
        });
        
        console.log(`Найдено ${penalties.length} записей`);
        writePenaltiesFile(penalties);
    });
    
}).on('error', (err) => {
    console.error('Ошибка:', err.message);
    process.exit(1);
});

function writePenaltiesFile(penalties) {
    const now = new Date().toISOString();
    
    const content = `// Автоматически обновлено: ${now}
// Источник: https://f1report.ru/penalty/
const penaltiesData = ${JSON.stringify(penalties, null, 4)};
`;
    
    const filePath = path.join(__dirname, '..', 'data', 'penalties-data.js');
    
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Файл сохранён: ${filePath}`);
}