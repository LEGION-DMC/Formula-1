// Данные для лучших времён круга
const bestLapTimes = [
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
    {
        id: 9,
        track: "Гран-при Барселоны-Каталонии",
        country: "es",
        team: "McLaren",
        teamLogo: "McLaren-m.png",
        driver: "Оскар Пиастри",
        driverCountry: "au",
        time: "1:15.743",
    },
    {
        id: 16,
        track: "Гран-при Италии",
        country: "it",
        team: "McLaren",
        teamLogo: "McLaren-m.png",
        driver: "Ландо Норрис",
        driverCountry: "gb",
        time: "1:20.901",
    },
];

// Данные для быстрейших пит-стопов
const fastestPitStops = [
    {
        id: 1,
        track: "Гран-при Австралии",
        country: "au",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver: "Шарль Леклер",
        driverCountry: "mc",
        time: "2.32s",
    },
    {
        id: 2,
        track: "Гран-при Китая",
        country: "cn",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver: "Шарль Леклер",
        driverCountry: "mc",
        time: "2.05s",
    },
    {
        id: 3,
        track: "Гран-при Японии",
        country: "jp",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver: "Льюис Хэмилтон",
        driverCountry: "gb",
        time: "2.18s",
    },
    {
        id: 4,
        track: "Гран-при Бахрейна",
        country: "bh",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver: "Льюис Хэмилтон",
        driverCountry: "gb",
        time: "2.16s",
    },
    {
        id: 5,
        track: "Гран-при Саудовской Аравии",
        country: "sa",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver: "Шарль Леклер",
        driverCountry: "mc",
        time: "2.00s",
    },
    {
        id: 6,
        track: "Гран-при Майами",
        country: "us",
        team: "Sauber",
        teamLogo: "Sauber-m.png",
        driver: "Габриэл Бортолето",
        driverCountry: "br",
        time: "2.24s",
    },
    {
        id: 7,
        track: "Гран-при Эмилии Романьи",
        country: "it",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver: "Шарль Леклер",
        driverCountry: "mc",
        time: "2.04s",
    },
    {
        id: 8,
        track: "Гран-при Монако",
        country: "mc",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver: "Шарль Леклер",
        driverCountry: "mc",
        time: "2.00s",
    },
    {
        id: 9,
        track: "Гран-при Барселоны-Каталонии",
        country: "es",
        team: "Sauber",
        teamLogo: "Sauber-m.png",
        driver: "Габриэл Бортолето",
        driverCountry: "br",
        time: "2.13s",
    },
    {
        id: 10,
        track: "Гран-при Канады",
        country: "ca",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver: "Льюис Хэмилтон",
        driverCountry: "gb",
        time: "2.08s",
    },
    {
        id: 11,
        track: "Гран-при Австрии",
        country: "at",
        team: "McLaren",
        teamLogo: "McLaren-m.png",
        driver: "Оскар Пиастри",
        driverCountry: "au",
        time: "2.10s",
    },
    {
        id: 12,
        track: "Гран-при Великобритании",
        country: "gb",
        team: "Red Bull",
        teamLogo: "RedBull-m.png",
        driver: "Юки Цунода",
        driverCountry: "jp",
        time: "2.06s",
    },
    {
        id: 13,
        track: "Гран-при Бельгии",
        country: "be",
        team: "Red Bull",
        teamLogo: "RedBull-m.png",
        driver: "Юки Цунода",
        driverCountry: "jp",
        time: "2.17s",
    },
    {
        id: 14,
        track: "Гран-при Венгрии",
        country: "hu",
        team: "McLaren",
        teamLogo: "McLaren-m.png",
        driver: "Ландо Норрис",
        driverCountry: "gb",
        time: "1.94s",
    },
    {
        id: 15,
        track: "Гран-при Нидерландов",
        country: "nl",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver: "Шарль Леклер",
        driverCountry: "mc",
        time: "2.10s",
    },
    {
        id: 16,
        track: "Гран-при Италии",
        country: "it",
        team: "McLaren",
        teamLogo: "McLaren-m.png",
        driver: "Оскар Пиастри",
        driverCountry: "au",
        time: "1.91s",
    },
    {
        id: 17,
        track: "Гран-при Азербайджана",
        country: "az",
        team: "Red Bull",
        teamLogo: "RedBull-m.png",
        driver: "Юки Цунода",
        driverCountry: "jp",
        time: "2.14s",
    },
	{
        id: 18,
        track: "Гран-при Сингапура",
        country: "sg",
        team: "Red Bull",
        teamLogo: "RedBull-m.png",
        driver: "Юки Цунода",
        driverCountry: "jp",
        time: "2.05s",
    },
	{
        id: 19,
        track: "Гран-при США",
        country: "us",
        team: "Racing Bulls",
        teamLogo: "RacingBulls-m.png",
        driver: "Лиам Лоусон",
        driverCountry: "nz",
        time: "2.18s",
    },
	{
        id: 20,
        track: "Гран-при Мексики",
        country: "mx",
        team: "McLaren",
        teamLogo: "McLaren-m.png",
        driver: "Оскар Пиастри",
        driverCountry: "au",
        time: "2.10s",
    },
];

// Данные для счёта квалификаций пилотов в команде
const Cvala = [
    {
        id: 1,
        team: "McLaren",
        teamLogo: "McLaren-m.png",
        driver1: "Оскар Пиастри",
        driverCountry1: "au",
        cvala1: "10",
        driver2: "Ландо Норрис",
        driverCountry2: "gb",
        cvala2: "11",
    },
    {
        id: 2,
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver1: "Шарль Леклер",
        driverCountry1: "mc",
        cvala1: "16",
        driver2: "Льюис Хэмилтон",
        driverCountry2: "gb",
        cvala2: "5",
    },
    {
        id: 3,
        team: "Red Bull",
        teamLogo: "RedBull-m.png",
        driver1: "Макс Ферстаппен",
        driverCountry1: "nl",
        cvala1: "19",
        driver2: "Юки Цунода",
        driverCountry2: "jp",
        cvala2: "0",
    },
    {
        id: 4,
        team: "Mercedes",
        teamLogo: "Mercedes-m.png",
        driver1: "Джордж Расселл",
        driverCountry1: "gb",
        cvala1: "18",
        driver2: "Кими Антонелли",
        driverCountry2: "it",
        cvala2: "3",
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
        cvala2: "21",
    },
    {
        id: 6,
        team: "Alpine",
        teamLogo: "Alpine-m.png",
        driver1: "Пьер Гасли",
        driverCountry1: "fr",
        cvala1: "10",
        driver2: "Франко Колапинто",
        driverCountry2: "ar",
        cvala2: "5",
    },
    {
        id: 7,
        team: "Haas",
        teamLogo: "Haas-m.png",
        driver1: "Эстебан Окон",
        driverCountry1: "fr",
        cvala1: "8",
        driver2: "Оливер Берман",
        driverCountry2: "de",
        cvala2: "13",
    },
    {
        id: 8,
        team: "Racing Bulls",
        teamLogo: "RacingBulls-m.png",
        driver1: "Исак Хаджар",
        driverCountry1: "fr",
        cvala1: "14",
        driver2: "Лиам Лоусон",
        driverCountry2: "nz",
        cvala2: "5",
    },
    {
        id: 9,
        team: "Williams",
        teamLogo: "Williams-m.png",
        driver1: "Александр Албон",
        driverCountry1: "th",
        cvala1: "9",
        driver2: "Карлос Сайнс",
        driverCountry2: "es",
        cvala2: "11",
    },
    {
        id: 10,
        team: "Kick-Sauber",
        teamLogo: "Sauber-m.png",
        driver1: "Нико Хюлкенберг",
        driverCountry1: "de",
        cvala1: "10",
        driver2: "Габриэль Бортолето",
        driverCountry2: "br",
        cvala2: "11",
    }
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
