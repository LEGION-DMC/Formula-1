// Данные для лучших времён круга
const bestLapTimes = [
    /*
	{
        id: 3,
        track: "Гран-при Японии",
        country: "jp",
        team: "Mercedes",
        teamLogo: "Mercedes-m.png",
        driver: "Кими Антонелли",
        driverCountry: "it",
        time: "1:30.965",
    },
	*/
];

// Данные для быстрейших пит-стопов
const fastestPitStops = [
    {
        id: 1,
        track: "Гран-при Австралии",
        country: "au",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
    {
        id: 2,
        track: "Гран-при Китая",
        country: "cn",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
    {
        id: 3,
        track: "Гран-при Японии",
        country: "jp",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
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
    },
    {
        id: 6,
        track: "Гран-при Майами",
        country: "us",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
    {
        id: 7,
        track: "Гран-при Канады",
        country: "ca",
        team: "---",
        teamLogo: "F1.png",
        driver: "---",
        driverCountry: "un",
        time: "0.00s",
    },
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
    },
];

// Данные для счёта квалификаций пилотов в команде
const Cvala = [
    {
        id: 1,
        team: "McLaren",
        teamLogo: "McLaren-m.png",
        driver1: "Ландо Норрис",
        driverCountry1: "gb",
        cvala1: "0",
        driver2: "Оскар Пиастри",
        driverCountry2: "au",
        cvala2: "0",
    },
    {
        id: 2,
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver1: "Шарль Леклер",
        driverCountry1: "mc",
        cvala1: "0",
        driver2: "Льюис Хэмилтон",
        driverCountry2: "gb",
        cvala2: "0",
    },
    {
        id: 3,
        team: "Red Bull",
        teamLogo: "RedBull-m.png",
        driver1: "Макс Ферстаппен",
        driverCountry1: "nl",
        cvala1: "0",
        driver2: "Исак Хаджар",
        driverCountry2: "fr",
        cvala2: "0",
    },
    {
        id: 4,
        team: "Mercedes",
        teamLogo: "Mercedes-m.png",
        driver1: "Джордж Расселл",
        driverCountry1: "gb",
        cvala1: "0",
        driver2: "Кими Антонелли",
        driverCountry2: "it",
        cvala2: "0",
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
        cvala2: "0",
    },
    {
        id: 6,
        team: "Alpine",
        teamLogo: "Alpine-m.png",
        driver1: "Пьер Гасли",
        driverCountry1: "fr",
        cvala1: "0",
        driver2: "Франко Колапинто",
        driverCountry2: "ar",
        cvala2: "0",
    },
    {
        id: 7,
        team: "Haas",
        teamLogo: "Haas-m.png",
        driver1: "Эстебан Окон",
        driverCountry1: "fr",
        cvala1: "0",
        driver2: "Оливер Берман",
        driverCountry2: "de",
        cvala2: "0",
    },
    {
        id: 8,
        team: "Racing Bulls",
        teamLogo: "RacingBulls-m.png",
        driver1: "Лиам Лоусон",
        driverCountry1: "nz",
        cvala1: "0",
        driver2: "Арвид Линдблад",
        driverCountry2: "gb",
        cvala2: "0",
    },
    {
        id: 9,
        team: "Williams",
        teamLogo: "Williams-m.png",
        driver1: "Карлос Сайнс",
        driverCountry1: "es",
        cvala1: "0",
        driver2: "Александр Албон",
        driverCountry2: "th",
        cvala2: "0",
    },
    {
        id: 10,
        team: "Audi",
        teamLogo: "Audi-m.png",
        driver1: "Нико Хюлкенберг",
        driverCountry1: "de",
        cvala1: "0",
        driver2: "Габриэль Бортолето",
        driverCountry2: "br",
        cvala2: "0",
    },
    {
        id: 11,
        team: "Cadillac",
        teamLogo: "Cadillac-m.png",
        driver1: "Серхио Перес",
        driverCountry1: "mx",
        cvala1: "0",
        driver2: "Валттери Боттас",
        driverCountry2: "fi",
        cvala2: "0",
    },
];

// Функция рендеринга страницы статистики
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











