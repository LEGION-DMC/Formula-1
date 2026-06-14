// Рекорд лучших времён круга
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

// Быстрейший пит-стопы
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
    {
        id: 8,
        track: "Гран-при Монако",
        country: "mc",
        team: "Mercedes",
        teamLogo: "Mercedes-m.png",
        driver: "Кими Антонелли",
        driverCountry: "it",
        time: "2.17s",
    },
	/*
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

// Счёт квалификаций пилотов в команде
const Cvala = [
    {
        id: 1,
        team: "Mercedes",
        teamLogo: "Mercedes-m.png",
        driver1: "Джордж Расселл",
        driverCountry1: "gb",
        cvala1: "3",
        driver2: "Андреа Кими Антонелли",
        driverCountry2: "it",
        cvala2: "4",
    },
    {
        id: 2,
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        driver1: "Шарль Леклер",
        driverCountry1: "mc",
        cvala1: "3",
        driver2: "Льюис Хэмилтон",
        driverCountry2: "gb",
        cvala2: "4",
    },
    {
        id: 3,
        team: "McLaren",
        teamLogo: "McLaren-m.png",
        driver1: "Ландо Норрис",
        driverCountry1: "gb",
        cvala1: "3",
        driver2: "Оскар Пиастри",
        driverCountry2: "au",
        cvala2: "4",
    },
    {
        id: 4,
        team: "Red Bull",
        teamLogo: "RedBull-m.png",
        driver1: "Макс Ферстаппен",
        driverCountry1: "nl",
        cvala1: "5",
        driver2: "Исак Хаджар",
        driverCountry2: "fr",
        cvala2: "2",
    },
    {
        id: 5,
        team: "Alpine",
        teamLogo: "Alpine-m.png",
        driver1: "Пьер Гасли",
        driverCountry1: "fr",
        cvala1: "4",
        driver2: "Франко Колапинто",
        driverCountry2: "ar",
        cvala2: "3",
    },
    {
        id: 6,
        team: "Racing Bulls",
        teamLogo: "RacingBulls-m.png",
        driver1: "Лиам Лоусон",
        driverCountry1: "nz",
        cvala1: "5",
        driver2: "Арвид Линдблад",
        driverCountry2: "gb",
        cvala2: "2",
    },
    {
        id: 7,
        team: "Haas",
        teamLogo: "Haas-m.png",
        driver1: "Эстебан Окон",
        driverCountry1: "fr",
        cvala1: "2",
        driver2: "Оливер Берман",
        driverCountry2: "de",
        cvala2: "5",
    },
    {
        id: 8,
        team: "Williams",
        teamLogo: "Williams-m.png",
        driver1: "Карлос Сайнс",
        driverCountry1: "es",
        cvala1: "5",
        driver2: "Александр Албон",
        driverCountry2: "th",
        cvala2: "2",
    },
    {
        id: 9,
        team: "Audi",
        teamLogo: "Audi-m.png",
        driver1: "Нико Хюлкенберг",
        driverCountry1: "de",
        cvala1: "5",
        driver2: "Габриэль Бортолето",
        driverCountry2: "br",
        cvala2: "2",
    },
    {
        id: 10,
        team: "Aston Martin",
        teamLogo: "AstonMartin-m.png",
        driver1: "Лэнс Стролл",
        driverCountry1: "ca",
        cvala1: "1",
        driver2: "Фернандо Алонсо",
        driverCountry2: "es",
        cvala2: "6",
    },
    {
        id: 11,
        team: "Cadillac",
        teamLogo: "Cadillac-m.png",
        driver1: "Серхио Перес",
        driverCountry1: "mx",
        cvala1: "5",
        driver2: "Валттери Боттас",
        driverCountry2: "fi",
        cvala2: "2",
    },
];

// Штрафные быллы пилотов
const driverFines = {
    "norris": 0,
    "verstappen": 0,
    "bortoletto": 2,
    "hadjar": 0,
    "gasly": 2,
    "perez": 0,
    "antonelli": 5,
    "alonso": 0,
    "leclerc": 1,
    "stroll": 4,
    "albon": 3,
    "hulkenberg": 0,
    "lawson": 2,
    "ocon": 1,
    "lindblad": 0,
    "colapinto": 1,
    "hamilton": 3,
    "sainz": 2,
    "russell": 0,
    "bottas": 0,
    "piastri": 4,
    "bearman": 8
};

function getDriverFine(driverId) {
    return driverFines[driverId] !== undefined ? driverFines[driverId] : 0;
}

function applyFinesToDrivers(driversArray) {
    if (!driversArray) return driversArray;
    
    driversArray.forEach(driver => {
        const fineValue = getDriverFine(driver.id);
        if (fineValue !== undefined) {
            driver.fine = fineValue;
        }
    });
    return driversArray;
}

function updateDriverFine(driverId, newFineValue) {
    if (driverFines[driverId] !== undefined) {
        driverFines[driverId] = newFineValue;
        
        // Обновляем штраф в глобальном массиве driversData, если он существует
        if (typeof driversData !== 'undefined') {
            const driver = driversData.find(d => d.id === driverId);
            if (driver) {
                driver.fine = newFineValue;
            }
        }
        
        return true;
    }
    return false;
}

function getAllFines() {
    return { ...driverFines };
}

window.getDriverFine = getDriverFine;
window.applyFinesToDrivers = applyFinesToDrivers;
window.updateDriverFine = updateDriverFine;
window.getAllFines = getAllFines;

function getDriverTeamLogo(driverId) {
    if (typeof driversData !== 'undefined') {
        const driver = driversData.find(d => d.id === driverId);
        return driver ? driver.teamLogo : 'F1.png';
    }
    return 'F1.png';
}

function getDriverTeamName(driverId) {
    if (typeof driversData !== 'undefined') {
        const driver = driversData.find(d => d.id === driverId);
        return driver ? driver.team : '';
    }
    return '';
}

function renderFinesTable() {
    // Проверяем, доступны ли данные пилотов
    if (typeof driversData === 'undefined') {
        return `
            <div class="stats-table fines-table">
                <h2>Штрафы пилотов</h2>
                <div class="stats-table-content">
                    <div class="no-fines-message">Данные пилотов не загружены</div>
                </div>
            </div>
        `;
    }
    
    // Собираем пилотов со штрафами из глобального массива driversData
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
        } else if (driver.fine >= 9 && driver.fine <= 11) {
            fineColorClass = 'fine-yellow';
        } else {
            fineColorClass = 'fine-white';
        }
        
        html += `
            <div class="stats-table-row fines-row">
                <div class="stats-col fines-driver">
                    <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="stats-team-logo fines-team-logo">
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
                    <span>Предупреждение: 1-8 штрафов</span>
                </div>
                <div class="fine-note">
                    <span class="fine-note-color yellow-note">⬤</span>
                    <span>Угроза дисквалификации: 9-11 штрафов</span>
                </div>
                <div class="fine-note">
                    <span class="fine-note-color red-note">⬤</span>
                    <span>Дисквалификация: 12 штрафов</span>
                </div>
            </div>
        </div>
    `;
    
    return html;
}

function renderStats() {
    // Применяем штрафы к пилотам перед рендерингом
    if (typeof driversData !== 'undefined') {
        applyFinesToDrivers(driversData);
    }
    
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

    // Подсчитываем количество, сумму времени и самый быстрый пит-стоп по командам
    const teamPitStopStats = {};
    fastestPitStops.forEach(item => {
        const timeNum = parseFloat(item.time.replace('s', ''));
        if (!teamPitStopStats[item.team]) {
            teamPitStopStats[item.team] = {
                count: 0,
                totalTime: 0,
                fastestTime: Infinity,
                fastestTimeStr: null,
                teamLogo: item.teamLogo
            };
        }
        teamPitStopStats[item.team].count++;
        teamPitStopStats[item.team].totalTime += timeNum;
        if (timeNum < teamPitStopStats[item.team].fastestTime) {
            teamPitStopStats[item.team].fastestTime = timeNum;
            teamPitStopStats[item.team].fastestTimeStr = item.time;
        }
    });

    let championTeam = null;
    let maxCount = -1;
    let minTotalTime = Infinity;
    let minFastestTime = Infinity;
    
    for (const [team, data] of Object.entries(teamPitStopStats)) {
        if (data.count > maxCount) {
            maxCount = data.count;
            minTotalTime = data.totalTime;
            minFastestTime = data.fastestTime;
            championTeam = { team, ...data };
        } else if (data.count === maxCount) {
            if (data.totalTime < minTotalTime) {
                minTotalTime = data.totalTime;
                minFastestTime = data.fastestTime;
                championTeam = { team, ...data };
            } else if (data.totalTime === minTotalTime && data.fastestTime < minFastestTime) {
                minFastestTime = data.fastestTime;
                championTeam = { team, ...data };
            }
        }
    }

    // Добавляем разделитель и чемпиона по пит-стопам
    if (championTeam) {
        html += `
            <div class="stats-divider-row"></div>
            <div class="stats-best-title">Чемпион лучших пит-стопов сезона</div>
            <div class="stats-table-row stats-best-row" style="display: flex; justify-content: center; align-items: center; gap: 20px;">
                <div class="stats-col" style="display: flex; align-items: center; gap: 8px;">
                    <img src="Images/Teams/${championTeam.teamLogo}" alt="${championTeam.team}" class="stats-team-logo" style="width: 25px; height: 20px;">
                    <span>${championTeam.team}</span>
                </div>
                    <span style="color: #e53935;">|</span>
                <div class="stats-col" style="display: flex; align-items: baseline; gap: 5px;">
                    <span>${championTeam.count}</span>
                    <span>${getDeclension(championTeam.count, 'Пит-стоп', 'Пит-стопа', 'Пит-стопов')}</span>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function getDeclension(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}

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

if (window.location.hash === '#stats') {
    renderStats();
}