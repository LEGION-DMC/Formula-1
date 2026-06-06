// Данные для рекорда лучших времён круга
const bestLapTimes = [
	/*
	{
        id: 1,
        track: "Гран-при Австралии",
        country: "au",
        team: "RedBull",
        teamLogo: "RedBull-m.png",
        driver: "Макс Ферстаппен",
        driverCountry: "nl",
        time: "1:22.091",
    },
	*/
];

// Данные для быстрейших пит-стопов
const fastestPitStops = [
    {
        id: 1,
        track: "Гран-при Австралии",
        country: "au",
        team: "Mercedes",
        teamLogo: "Mercedes-m.png",
        driver: "Джордж Расселл",
        driverCountry: "gb",
        time: "2.17s",
    },
    {
        id: 2,
        track: "Гран-при Китая",
        country: "cn",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver: "Льюис Хэмилтон",
        driverCountry: "gb",
        time: "2.29s",
    },
    {
        id: 3,
        track: "Гран-при Японии",
        country: "jp",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver: "Льюис Хэмилтон",
        driverCountry: "gb",
        time: "2.00s",
    },/*
    {
        id: 4,
        track: "Гран-при Бахрейна",
        country: "bh",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
    {
        id: 5,
        track: "Гран-при Саудовской Аравии",
        country: "sa",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },*/
    {
        id: 6,
        track: "Гран-при Майами",
        country: "us",
        team: "Racing Bulls",
        teamLogo: "RacingBulls-m.png",
        driver: "Арвид Линдблад",
        driverCountry: "gb",
        time: "2.08s",
    },
    {
        id: 7,
        track: "Гран-при Канады",
        country: "ca",
        team: "Racing Bulls",
        teamLogo: "RacingBulls-m.png",
        driver: "Лиам Лоусон",
        driverCountry: "nz",
        time: "2.20s",
    },
	/*
    {
        id: 8,
        track: "Гран-при Монако",
        country: "mc",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
    {
        id: 9,
        track: "Гран-при Барселоны-Каталонии",
        country: "es",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
    {
        id: 10,
        track: "Гран-при Австрии",
        country: "at",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
    {
        id: 11,
        track: "Гран-при Великобритании",
        country: "gb",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
    {
        id: 12,
        track: "Гран-при Бельгии",
        country: "be",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
    {
        id: 13,
        track: "Гран-при Венгрии",
        country: "hu",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
    {
        id: 14,
        track: "Гран-при Нидерландов",
        country: "nl",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
    {
        id: 15,
        track: "Гран-при Италии",
        country: "it",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },{
        id: 16,
        track: "Гран-при Мадрида",
        country: "es",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
    {
        id: 17,
        track: "Гран-при Азербайджана",
        country: "az",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
	{
        id: 18,
        track: "Гран-при Сингапура",
        country: "sg",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
	{
        id: 19,
        track: "Гран-при США",
        country: "us",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
	{
        id: 20,
        track: "Гран-при Мексики",
        country: "mx",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
	{
        id: 21,
        track: "Гран-при Сан-Паулу",
        country: "br",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
	{
        id: 22,
        track: "Гран-при Лас-Вегаса",
        country: "us",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
	{
        id: 23,
        track: "Гран-при Катара",
        country: "qa",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
	{
        id: 24,
        track: "Гран-при Абу-Даби",
        country: "ae",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },*/
];

// Данные для счёта квалификаций пилотов в команде
const Cvala = [
    {
        id: 1,
        team: "McLaren",
        teamLogo: "McLaren-m.png",
        driver1: "Ландо Норрис",
        driverCountry1: "gb",
        cvala1: "2",
        driver2: "Оскар Пиастри",
        driverCountry2: "au",
        cvala2: "3",
    },
    {
        id: 2,
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver1: "Шарль Леклер",
        driverCountry1: "mc",
        cvala1: "4",
        driver2: "Льюис Хэмилтон",
        driverCountry2: "gb",
        cvala2: "1",
    },
    {
        id: 4,
        team: "Mercedes",
        teamLogo: "Mercedes-m.png",
        driver1: "Джордж Расселл",
        driverCountry1: "gb",
        cvala1: "2",
        driver2: "Кими Антонелли",
        driverCountry2: "it",
        cvala2: "3",
    },
    {
        id: 7,
        team: "Haas",
        teamLogo: "Haas-m.png",
        driver1: "Эстебан Окон",
        driverCountry1: "fr",
        cvala1: "1",
        driver2: "Оливер Берман",
        driverCountry2: "de",
        cvala2: "4",
    },
    {
        id: 3,
        team: "Red Bull",
        teamLogo: "RedBull-m.png",
        driver1: "Макс Ферстаппен",
        driverCountry1: "nl",
        cvala1: "3",
        driver2: "Исак Хаджар",
        driverCountry2: "fr",
        cvala2: "2",
    },
    {
        id: 6,
        team: "Alpine",
        teamLogo: "Alpine-m.png",
        driver1: "Пьер Гасли",
        driverCountry1: "fr",
        cvala1: "3",
        driver2: "Франко Колапинто",
        driverCountry2: "ar",
        cvala2: "2",
    },
    {
        id: 8,
        team: "Racing Bulls",
        teamLogo: "RacingBulls-m.png",
        driver1: "Лиам Лоусон",
        driverCountry1: "nz",
        cvala1: "3",
        driver2: "Арвид Линдблад",
        driverCountry2: "gb",
        cvala2: "2",
    },
    {
        id: 9,
        team: "Williams",
        teamLogo: "Williams-m.png",
        driver1: "Карлос Сайнс",
        driverCountry1: "es",
        cvala1: "4",
        driver2: "Александр Албон",
        driverCountry2: "th",
        cvala2: "1",
    },
    {
        id: 10,
        team: "Audi",
        teamLogo: "Audi-m.png",
        driver1: "Нико Хюлкенберг",
        driverCountry1: "de",
        cvala1: "3",
        driver2: "Габриэль Бортолето",
        driverCountry2: "br",
        cvala2: "2",
    },
    {
        id: 5,
        team: "Aston Martin",
        teamLogo: "AstonMartin-m.png",
        driver1: "Лэнс Стролл",
        driverCountry1: "ca",
        cvala1: "0",
        driver2: "Фернандо Алонсо",
        driverCountry2: "es",
        cvala2: "5",
    },
    {
        id: 11,
        team: "Cadillac",
        teamLogo: "Cadillac-m.png",
        driver1: "Серхио Перес",
        driverCountry1: "mx",
        cvala1: "3",
        driver2: "Валттери Боттас",
        driverCountry2: "fi",
        cvala2: "2",
    },
];

function getDriverTeamLogo(driverId) {
    const driver = driversData.find(d => d.id === driverId);
    return driver ? driver.teamLogo : 'F1.png';
}

function getDriverTeamName(driverId) {
    const driver = driversData.find(d => d.id === driverId);
    return driver ? driver.team : '';
}

// Рендеринг таблицы штрафов
function renderFinesTable() {
    const driversWithFines = driversData
        .filter(driver => driver.fine > 0)
        .sort((a, b) => b.fine - a.fine);
    
    if (driversWithFines.length === 0) {
        return `
            <div class="stats-table fines-table">
                <h2>Штрафы пилотов</h2>
                <div class="stats-table-content">
                    <div class="no-fines-message">Нет активных штрафов у пилотов</div>
                </div>
            </div>
        `;
    }
    
    let html = `
        <div class="stats-table fines-table">
            <h2>Штрафы пилотов</h2>
            <div class="stats-table-header">
                <div class="stats-col fines-driver">Пилот</div>
                <div class="stats-col fines-points">Штрафы</div>
            </div>
    `;
    
    driversWithFines.forEach(driver => {
        // Определяем класс для цвета текста штрафа
        let fineColorClass = '';
        if (driver.fine === 12) {
            fineColorClass = 'fine-red';
        } else if (driver.fine >= 8 && driver.fine <= 11) {
            fineColorClass = 'fine-yellow';
        } else {
            fineColorClass = 'fine-white';
        }
        
        html += `
            <div class="stats-table-row fines-row">
                <div class="stats-col fines-driver">
                    <img src="Images/Teams/${getDriverTeamLogo(driver.id)}" alt="${getDriverTeamName(driver.id)}" class="stats-team-logo fines-team-logo">
                    <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" class="stats-flag fines-flag">
                    <span class="fines-driver-name">${driver.name}</span>
                </div>
                <div class="stats-col fines-points">
                    <span class="fine-score ${fineColorClass}">${driver.fine} </span>
                </div>
            </div>
        `;
    });
    
    // Добавляем примечание внизу таблицы
    html += `
            <div class="fines-notes">
                <div class="fine-note">
                    <span class="fine-note-color white-note">⬤</span>
                    <span>- 1-7 штрафов</span>
                </div>
                <div class="fine-note">
                    <span class="fine-note-color yellow-note">⬤</span>
                    <span>- 8-11 штрафов (Предупреждение)</span>
                </div>
                <div class="fine-note">
                    <span class="fine-note-color red-note">⬤</span>
                    <span>- 12 штрафов (Дисквалификация)</span>
                </div>
            </div>
        </div>
    `;
    
    return html;
}

// Модифицируем функцию renderStats, добавив в неё таблицу штрафов
function renderStats() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="stats-container">
            <h1>Статистика текущего сезона</h1>
            
            <div class="stats-grid">
                <div class="stats-column">
                    <div class="stats-table" id="CvalaTable">
                        <h2>Зачёт квалификации пилотов в команде</h2>
                        <div class="stats-table-content"></div>
                    </div>

                    <div class="stats-table" id="lapTimesTable">
                        <h2>Рекорды лучшего времени круга</h2>
                        <div class="stats-table-content"></div>
                    </div>
                </div>
                
                <div class="stats-column">
                    <div class="stats-table" id="pitStopsTable">
                        <h2>Быстрейшие пит-стопы</h2>
                        <div class="stats-table-content"></div>
                    </div>
                    
                    <!-- Добавляем таблицу штрафов -->
                    <div id="finesTableContainer">
                        ${renderFinesTable()}
                    </div>
                </div>
            </div>
        </div>
    `;

    renderCvalaTable();
    renderLapTimesTable();
    renderPitStopsTable();
}

// Рендеринг таблицы лучших времён круга
function renderLapTimesTable() {
    const container = document.querySelector('#lapTimesTable .stats-table-content');
    
    // Проверяем, есть ли данные
    if (bestLapTimes.length === 0) {
        container.innerHTML = `
            <div class="no-fines-message">В текущем сезоне рекорд лучшего времени круга не установлен</div>
        `;
        return;
    }
    
    let html = `
        <div class="stats-table-header">
            <div class="stats-col position">#</div>
            <div class="stats-col track">Гран-При</div>
            <div class="stats-col driver">Пилот</div>
            <div class="stats-col team">Команда</div>
            <div class="stats-col time">Время</div>
        </div>
    `;
    
    bestLapTimes.forEach((item, index) => {
        html += `
            <div class="stats-table-row">
                <div class="stats-col position">${index + 1}</div>
                <div class="stats-col track">
                    <img src="Images/Flags/${item.country}.svg" alt="${item.country}" class="stats-flag">
                    ${item.track}
                </div>
                <div class="stats-col driver">
                    <img src="Images/Flags/${item.driverCountry}.svg" alt="${item.driverCountry}" class="stats-flag">
                    ${item.driver}
                </div>
                <div class="stats-col team">
                    <img src="Images/Teams/${item.teamLogo}" alt="${item.team}" class="stats-team-logo">
                    ${item.team}
                </div>
                <div class="stats-col time">${item.time}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Рендеринг таблицы пит-стопов
function renderPitStopsTable() {
    const container = document.querySelector('#pitStopsTable .stats-table-content');
    
    // Проверяем, есть ли данные
    if (fastestPitStops.length === 0) {
        container.innerHTML = `
            <div class="no-fines-message">В текущем сезоне время быстрейщего пит-стопа не установлено</div>
        `;
        return;
    }
    
    let html = `
        <div class="stats-table-header">
            <div class="stats-col position">#</div>
            <div class="stats-col track">Гран-При</div>
            <div class="stats-col team">Команда</div>
            <div class="stats-col driver">Пилот</div>
            <div class="stats-col time">Время</div>
        </div>
    `;
    
    fastestPitStops.forEach((item, index) => {
        html += `
            <div class="stats-table-row">
                <div class="stats-col position">${index + 1}</div>
                <div class="stats-col track">
                    <img src="Images/Flags/${item.country}.svg" alt="${item.country}" class="stats-flag">
                    ${item.track}
                </div>
                <div class="stats-col team">
                    <img src="Images/Teams/${item.teamLogo}" alt="${item.team}" class="stats-team-logo">
                    ${item.team}
                </div>
                <div class="stats-col driver">
                    <img src="Images/Flags/${item.driverCountry}.svg" alt="${item.driverCountry}" class="stats-flag">
                    ${item.driver}
                </div>
                <div class="stats-col time">${item.time}</div>
            </div>
        `;
    });

    // Находим лучший пит-стоп (с минимальным временем)
    let bestPitStop = null;
    let bestTimeValue = Infinity;
    
    fastestPitStops.forEach(item => {
        const timeNum = parseFloat(item.time.replace('s', ''));
        if (timeNum < bestTimeValue) {
            bestTimeValue = timeNum;
            bestPitStop = item;
        }
    });

    // Добавляем разделитель, заголовок и строку с лучшим пит-стопом сезона
    if (bestPitStop) {
        html += `
            <div class="stats-divider-row"></div>
            <div class="stats-best-title">Лучший пит-стоп сезона</div>
            <div class="stats-table-row stats-best-row">
                <div class="stats-col position"></div>
                <div class="stats-col track">
                    <img src="Images/Flags/${bestPitStop.country}.svg" alt="${bestPitStop.country}" class="stats-flag">
                    ${bestPitStop.track}
                </div>
                <div class="stats-col team">
                    <img src="Images/Teams/${bestPitStop.teamLogo}" alt="${bestPitStop.team}" class="stats-team-logo">
                    ${bestPitStop.team}
                </div>
                <div class="stats-col driver">
                    <img src="Images/Flags/${bestPitStop.driverCountry}.svg" alt="${bestPitStop.driverCountry}" class="stats-flag">
                    ${bestPitStop.driver}
                </div>
                <div class="stats-col time best-time">${bestPitStop.time}</div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

// Рендеринг таблицы счёта квалификаций
function renderCvalaTable() {
    const container = document.querySelector('#CvalaTable .stats-table-content');
    
    let html = `
        <div class="stats-table-header">
            <div class="stats-col team-logo"></div>
            <div class="stats-col driver driver1">Пилот</div>
            <div class="stats-col cvala">Счёт</div>
            <div class="stats-col driver driver2">Пилот</div>
            <div class="stats-col team-logo"></div>
        </div>
    `;
    
    Cvala.forEach((item) => {
        html += `
            <div class="stats-table-row">
                <div class="stats-col team-logo">
                    <img src="Images/Teams/${item.teamLogo}" alt="${item.team}" class="stats-team-logo">
                </div>
                <div class="stats-col driver driver1">
                    <img src="Images/Flags/${item.driverCountry1}.svg" alt="${item.driverCountry1}" class="stats-flag">
                    ${item.driver1}
                </div>
                <div class="stats-col cvala">
                    <span class="cvala-score">${item.cvala1}</span>
                    <span class="cvala-vs">:</span>
                    <span class="cvala-score">${item.cvala2}</span>
                </div>
                <div class="stats-col driver driver2">
                    <img src="Images/Flags/${item.driverCountry2}.svg" alt="${item.driverCountry2}" class="stats-flag">
                    ${item.driver2}
                </div>
                <div class="stats-col team-logo">
                    <img src="Images/Teams/${item.teamLogo}" alt="${item.team}" class="stats-team-logo">
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Инициализация при загрузке вкладки
if (window.location.hash === '#stats') {
    renderStats();

}












