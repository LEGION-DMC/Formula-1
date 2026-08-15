const qualiData = [
    { driver1: "Андреа Кими Антонелли",
      score1: 7,
      score2: 4,
      driver2: "Джордж Расселл" },
    { driver1: "Шарль Леклер",
      score1: 6,
      score2: 5,
      driver2: "Льюис Хэмилтон" },
    { driver1: "Ландо Норрис",
      score1: 7,
      score2: 4,
      driver2: "Оскар Пиастри" },
    { driver1: "Макс Ферстаппен",
      score1: 8,
      score2: 3,
      driver2: "Иcаак Хаджар" },
    { driver1: "Лиам Лоусон",
      score1: 6,
      score2: 5,
      driver2: "Арвид Линдблад" },
    { driver1: "Нико Хюлькенберг",
      score1: 6,
      score2: 5,
      driver2: "Габриэл Бортолето" },
    { driver1: "Карлос Сайнс",
      score1: 9,
      score2: 2,
      driver2: "Александр Албон" },
    { driver1: "Эстебан Окон",
      score1: 3,
      score2: 8,
      driver2: "Оливер Берман" },
    { driver1: "Пьер Гасли",
      score1: 8,
      score2: 3,
      driver2: "Франко Колапинто" },
    { driver1: "Фернандо Алонсо",
      score1: 9,
      score2: 2,
      driver2: "Лэнс Стролл" },
    { driver1: "Серхио Перес",
      score1: 6,
      score2: 5,
      driver2: "Валттери Боттас" },
];

const penaltiesData = [
    { driver: "Оливер Берман", fines: 4 },
    { driver: "Александр Албон", fines: 3 },
    { driver: "Андреа Кими Антонелли", fines: 4 },
    { driver: "Льюис Хэмилтон", fines: 3 },
    { driver: "Лэнс Стролл", fines: 2 },
    { driver: "Карлос Сайнс", fines: 2 },
    { driver: "Оскар Пиастри", fines: 2 },
    { driver: "Лиам Лоусон", fines: 2 },
    { driver: "Габриэл Бортолето", fines: 2 },
    { driver: "Эстебан Окон", fines: 1 },
    { driver: "Франко Колапинто", fines: 1 },

    { driver: "Ландо Норрис", fines: 0 },
    { driver: "Макс Ферстаппен", fines: 0 },
    { driver: "Шарль Леклер", fines: 0 },
    { driver: "Иcаак Хаджар", fines: 0 },
    { driver: "Серхио Перес", fines: 0 },
    { driver: "Пьер Гасли", fines: 0 },
    { driver: "Фернандо Алонсо", fines: 0 },
    { driver: "Нико Хюлькенберг", fines: 0 },
    { driver: "Арвид Линдблад", fines: 0 },
    { driver: "Джордж Расселл", fines: 0 },
    { driver: "Валттери Боттас", fines: 0 },

    { driver: "Юки Цунода", fines: 0 }, // 3
    { driver: "Гуан Ю Чжоу", fines: 0 },
    { driver: "Джек Дуэн", fines: 0 },
];

const pitstopData = [
	{ gpId: "australia", driver: "russell", time: "2.17 " },
	{ gpId: "china", driver: "hamilton", time: "2.29" },
	{ gpId: "japan", driver: "hamilton", time: "2.00" },
	{ gpId: "saudi", driver: "none", time: "0.00" },
	{ gpId: "miami", driver: "lindblad", time: "2.08" },
	{ gpId: "canada", driver: "lawson", time: "2.20" },
	{ gpId: "monaco", driver: "antonelli", time: "2.17" },
	{ gpId: "barcelona", driver: "piastri", time: "2.13" },
	{ gpId: "austria", driver: "lindblad", time: "2.03" },
	{ gpId: "great-britain", driver: "russell", time: "2.18" },
	{ gpId: "belgium", driver: "leclerc", time: "2.30" },
	{ gpId: "hungary", driver: "lindblad", time: "1.99" },
	{ gpId: "netherlands", driver: "none", time: "0.00" },
	{ gpId: "italy", driver: "none", time: "0.00" },
	{ gpId: "madrid", driver: "none", time: "0.00" },
	{ gpId: "azerbaijan", driver: "none", time: "0.00" },
	{ gpId: "malaysia", driver: "none", time: "0.00" },
	{ gpId: "singapore", driver: "none", time: "0.00" },
	{ gpId: "usa", driver: "none", time: "0.00" },
	{ gpId: "mexico", driver: "none", time: "0.00" },
	{ gpId: "saopaulo", driver: "none", time: "0.00" },
	{ gpId: "vegas", driver: "none", time: "0.00" },
	{ gpId: "qatar", driver: "none", time: "0.00" },
	{ gpId: "abudhabi", driver: "none", time: "0.00" },
];

const lapRecordData = [
    { gpId: "madrid", driver: "none", time: "1:00.000" },
];

const enginePartsData = [
    { driver: "Оскар Пиастри", ice: 3, tc: 3, exh: 2, mguk: 1, es: 2, puce: 2, puanc: 3 },
    { driver: "Ландо Норрис", ice: 3, tc: 3, exh: 3, mguk: 2, es: 3, puce: 4, puanc: 4 },
    { driver: "Джордж Расселл", ice: 3, tc: 3, exh: 3, mguk: 2, es: 3, puce: 3, puanc: 5 },
    { driver: "Андреа Кими Антонелли", ice: 4, tc: 3, exh: 4, mguk: 2, es: 3, puce: 3, puanc: 5 },
    { driver: "Макс Ферстаппен", ice: 3, tc: 3, exh: 3, mguk: 2, es: 2, puce: 2, puanc: 3 },
    { driver: "Иcаак Хаджар", ice: 5, tc: 5, exh: 5, mguk: 2, es: 4, puce: 4, puanc: 5 },
    { driver: "Шарль Леклер", ice: 3, tc: 3, exh: 2, mguk: 3, es: 3, puce: 3, puanc: 4 },
    { driver: "Льюис Хэмилтон", ice: 3, tc: 3, exh: 2, mguk: 3, es: 3, puce: 3, puanc: 4 },
    { driver: "Александр Албон", ice: 3, tc: 3, exh: 3, mguk: 2, es: 3, puce: 3, puanc: 4 },
    { driver: "Карлос Сайнс", ice: 3, tc: 3, exh: 3, mguk: 2, es: 3, puce: 4, puanc: 4 },
    { driver: "Арвид Линдблад", ice: 2, tc: 2, exh: 2, mguk: 2, es: 2, puce: 2, puanc: 4 },
    { driver: "Лиам Лоусон", ice: 3, tc: 3, exh: 3, mguk: 2, es: 2, puce: 2, puanc: 4 },
    { driver: "Лэнс Стролл", ice: 3, tc: 3, exh: 3, mguk: 4, es: 5, puce: 5, puanc: 5 },
    { driver: "Фернандо Алонсо", ice: 3, tc: 3, exh: 2, mguk: 4, es: 5, puce: 5, puanc: 7 },
    { driver: "Эстебан Окон", ice: 3, tc: 3, exh: 2, mguk: 3, es: 3, puce: 3, puanc: 4 },
    { driver: "Оливер Берман", ice: 3, tc: 3, exh: 3, mguk: 3, es: 3, puce: 3, puanc: 3 },
    { driver: "Нико Хюлькенберг", ice: 3, tc: 3, exh: 3, mguk: 3, es: 1, puce: 1, puanc: 4 },
    { driver: "Габриэл Бортолето", ice: 2, tc: 2, exh: 2, mguk: 3, es: 2, puce: 3, puanc: 4 },
    { driver: "Пьер Гасли", ice: 3, tc: 3, exh: 3, mguk: 2, es: 2, puce: 2, puanc: 4 },
    { driver: "Франко Колапинто", ice: 3, tc: 3, exh: 2, mguk: 2, es: 3, puce: 3, puanc: 3 },
    { driver: "Серхио Перес", ice: 3, tc: 3, exh: 2, mguk: 3, es: 3, puce: 3, puanc: 3 },
    { driver: "Валттери Боттас", ice: 3, tc: 3, exh: 2, mguk: 3, es: 3, puce: 3, puanc: 3 },
];

function findDriverByName(fullName) {
    return driversData.find(d => d.name === fullName);
}

function findDriverById(id) {
    return driversData.find(d => d.id === id);
}

function getGPById(id) {
    if (typeof calendarData !== 'undefined') {
        return calendarData.find(g => g.id === id);
    }
    return null;
}

function getGPName(gpId) {
    const gp = getGPById(gpId);
    if (gp) {
        const track = getTrackById(gp.track);
        return track ? track.name : gpId;
    }
    return gpId;
}

function getGPCountry(gpId) {
    const gp = getGPById(gpId);
    if (gp) {
        const track = getTrackById(gp.track);
        return track ? track.country : 'xx';
    }
    return 'xx';
}

function syncPenaltiesToDrivers() {
    penaltiesData.forEach(penalty => {
        const driver = findDriverByName(penalty.driver);
        if (driver) {
            driver.fines = penalty.fines;
        }
    });
}

syncPenaltiesToDrivers();

function initStatsPage(container) {
    'use strict';

    container.style.display = 'block';
    container.style.flexDirection = '';
    container.style.gap = '';
    container.style.padding = '20px';
    container.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'stats-grid';

    const leftCol = document.createElement('div');
    leftCol.className = 'stats-left-col';
    leftCol.appendChild(createQualiTable());
    leftCol.appendChild(createPenaltiesTable());
    leftCol.appendChild(createEnginePartsTable());
    
    const rightCol = document.createElement('div');
    rightCol.className = 'stats-right-col';
    rightCol.appendChild(createPitstopTable());
    rightCol.appendChild(createLapRecordTable());
    
    grid.appendChild(leftCol);
    grid.appendChild(rightCol);
    
    container.appendChild(grid);

    // Минималистичная анимация
    animateStatsContent(container);
}

function animateStatsContent(container) {
    const wrappers = container.querySelectorAll('.stats-table-wrapper');
    
    wrappers.forEach((wrapper, index) => {
        wrapper.style.opacity = '0';
        wrapper.style.transform = 'translateY(15px)';
        wrapper.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            wrapper.style.opacity = '1';
            wrapper.style.transform = 'translateY(0)';
        }, 150 + index * 80);
    });
}

function createQualiTable() {
    const wrapper = document.createElement('div');
    wrapper.className = 'stats-table-wrapper';

    const tableTitle = document.createElement('h3');
    tableTitle.className = 'stats-table-title';
    tableTitle.textContent = 'Квалификационный зачёт';
    wrapper.appendChild(tableTitle);

    const tableContainer = document.createElement('div');
    tableContainer.className = 'stats-table-container';

    const table = document.createElement('table');
    table.className = 'stats-table quali-table';

    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th colspan="3">Пилот</th>
            <th></th>
            <th colspan="3">Пилот</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    // Создаем карту команд с их очками для сортировки
    const teamPointsMap = {};
    if (typeof teamsData !== 'undefined') {
        teamsData.forEach(team => {
            teamPointsMap[team.shortName] = { points: 0, team: team.shortName };
        });
        
        // Подсчитываем очки команд из combinedStandings
        combinedStandings.forEach(entry => {
            const driver = findDriverById(entry.driver);
            if (driver && teamPointsMap[driver.team]) {
                teamPointsMap[driver.team].points += entry.points;
            }
        });
    }

    // Сортируем данные квалификации по очкам команд
    const sortedQualiData = [...qualiData].sort((a, b) => {
        const driver1a = findDriverByName(a.driver1);
        const driver1b = findDriverByName(b.driver1);
        
        if (!driver1a || !driver1b) return 0;
        
        const teamA = driver1a.team;
        const teamB = driver1b.team;
        
        const pointsA = teamPointsMap[teamA]?.points || 0;
        const pointsB = teamPointsMap[teamB]?.points || 0;
        
        return pointsB - pointsA;
    });

    sortedQualiData.forEach(row => {
        const driver1 = findDriverByName(row.driver1);
        const driver2 = findDriverByName(row.driver2);

        if (!driver1 || !driver2) return;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="driver-cell driver-cell-left stats-driver-clickable" data-driver-id="${driver1.id}">
                <img src="Images/Flags/${driver1.country}.svg" alt="" title="${getCountryName(driver1.country)}" class="stats-flag">
                    <span class="driver-fullname">${driver1.name}</span>
					<span class="driver-shortname">${driver1.namem}</span>
            </td>
            <td class="score-cell ${row.score1 > row.score2 ? 'winner' : row.score1 < row.score2 ? 'loser' : 'draw'}">${row.score1}</td>
            <td class="vs-cell stats-clickable" data-team="${driver1.team}">
                <img src="${getTeamLogo(driver1.team)}" alt="${driver1.team}" class="stats-team-logo" onerror="this.style.display='none'">
            </td>
            <td class="score-cell ${row.score2 > row.score1 ? 'winner' : row.score2 < row.score1 ? 'loser' : 'draw'}">${row.score2}</td>
            <td class="driver-cell driver-cell-right stats-driver-clickable" data-driver-id="${driver2.id}">
                    <span class="driver-fullname">${driver2.name}</span>
					<span class="driver-shortname">${driver2.namem}</span>
                <img src="Images/Flags/${driver2.country}.svg" alt="" title="${getCountryName(driver2.country)}" class="stats-flag">
            </td>
        `;
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    wrapper.appendChild(tableContainer);

    wrapper.addEventListener('click', (e) => {
        const driverCell = e.target.closest('.stats-driver-clickable');
        if (driverCell) {
            const driver = findDriverById(driverCell.dataset.driverId);
            if (driver) openDriverModal(driver);
            return;
        }
        const teamCell = e.target.closest('.stats-clickable');
        if (teamCell) {
            const teamData = getTeamData(teamCell.dataset.team);
            if (teamData) openTeamModal(teamData);
            return;
        }
    });

    return wrapper;
}

function createPitstopTable() {
    const wrapper = document.createElement('div');
    wrapper.className = 'stats-table-wrapper';

    const tableTitle = document.createElement('h3');
    tableTitle.className = 'stats-table-title';
    tableTitle.textContent = 'Лучшие пит-стопы сезона';
    wrapper.appendChild(tableTitle);

    const tableContainer = document.createElement('div');
    tableContainer.className = 'stats-table-container';

    const table = document.createElement('table');
    table.className = 'stats-table pitstop-table';

    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>#</th>
            <th>Гран-при</th>
            <th>Команда</th>
            <th>Пилот</th>
            <th>Время<span> (с)</span></th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    // Фильтруем валидные
    const validPitstops = pitstopData.filter(row =>
        row.driver !== 'none' && row.time !== '0.00' && row.time !== '0.00s'
    );

    // Находим лучшее (минимальное) время
    let bestTime = Infinity;
    validPitstops.forEach(row => {
        const t = parseFloat(row.time);
        if (!isNaN(t) && t < bestTime) bestTime = t;
    });

    validPitstops.forEach((row, index) => {
        const driver = findDriverById(row.driver);
        if (!driver) return;

        const gpCountry = getGPCountry(row.gpId);
        const gpName = getGPName(row.gpId);
        const gpShort = gpName.replace('Гран-при ', 'ГП ').replace('-Каталунии', '');

        // Проверяем, лучшее ли это время
        const currentTime = parseFloat(row.time);
        const isBest = !isNaN(currentTime) && currentTime === bestTime;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="pos-cell">${index + 1}</td>
            <td class="gp-cell gp-clickable" data-gp-id="${row.gpId}">
                <img src="Images/Flags/${gpCountry}.svg" alt="" class="stats-flag">
                <span class="gp-full">${gpName}</span>
                <span class="gp-short">${gpShort}</span>
            </td>
            <td class="team-cell stats-clickable" data-team="${driver.team}">
                <img src="${getTeamLogo(driver.team)}" alt="${driver.team}" class="stats-team-logo" onerror="this.style.display='none'">
            </td>
            <td class="driver-cell stats-driver-clickable" data-driver-id="${driver.id}">
                <img src="Images/Flags/${driver.country}.svg" alt="" title="${getCountryName(driver.country)}" class="stats-flag">
                <span class="driver-fullname">${driver.name}</span>
                <span class="driver-shortname">${driver.namem}</span>
            </td>
            <td class="time-cell ${isBest ? 'best-time' : ''}">${row.time}</td>
        `;
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    wrapper.appendChild(tableContainer);

    wrapper.addEventListener('click', (e) => {
        const driverCell = e.target.closest('.stats-driver-clickable');
        if (driverCell) {
            const driver = findDriverById(driverCell.dataset.driverId);
            if (driver) openDriverModal(driver);
            return;
        }
        const teamCell = e.target.closest('.stats-clickable');
        if (teamCell) {
            const teamData = getTeamData(teamCell.dataset.team);
            if (teamData) openTeamModal(teamData);
            return;
        }
        // Обработчик клика по названию Гран-при
        const gpCell = e.target.closest('.gp-clickable');
        if (gpCell) {
            const gpId = gpCell.dataset.gpId;
            const gp = getGPById(gpId);
            if (gp) {
                const track = getTrackById(gp.track);
                if (track && typeof openTrackModal === 'function') {
                    openTrackModal(track, gp);
                }
            }
            return;
        }
    });

    return wrapper;
}

function createPenaltiesTable() {
    const wrapper = document.createElement('div');
    wrapper.className = 'stats-table-wrapper';

    const tableTitle = document.createElement('h3');
    tableTitle.className = 'stats-table-title';
    tableTitle.textContent = 'Штрафы суперлицензии пилотов';
    wrapper.appendChild(tableTitle);

    const tableContainer = document.createElement('div');
    tableContainer.className = 'stats-table-container';

    const table = document.createElement('table');
    table.className = 'stats-table penalties-table';

    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Команда</th>
            <th>Пилот</th>
            <th>Штрафы</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    const sorted = [...penaltiesData]
        .filter(p => p.fines > 0)
        .sort((a, b) => b.fines - a.fines);

    sorted.forEach(row => {
        const driver = findDriverByName(row.driver);
        if (!driver) return;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="team-cell stats-clickable" data-team="${driver.team}">
                <img src="${getTeamLogo(driver.team)}" alt="${driver.team}" class="stats-team-logo" onerror="this.style.display='none'">
            </td>
            <td class="driver-cell stats-driver-clickable" data-driver-id="${driver.id}">
                <img src="Images/Flags/${driver.country}.svg" alt="" title="${getCountryName(driver.country)}" class="stats-flag">
                <span>${row.driver}</span>
            </td>
            <td class="fines-cell">${row.fines}</td>
        `;
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    wrapper.appendChild(tableContainer);

    wrapper.addEventListener('click', (e) => {
        const driverCell = e.target.closest('.stats-driver-clickable');
        if (driverCell) {
            const driver = findDriverById(driverCell.dataset.driverId);
            if (driver) openDriverModal(driver);
            return;
        }
        const teamCell = e.target.closest('.stats-clickable');
        if (teamCell) {
            const teamData = getTeamData(teamCell.dataset.team);
            if (teamData) openTeamModal(teamData);
            return;
        }
    });

    return wrapper;
}

const historicalDriversData = [
    { name: "Михаэль Шумахер", country: "de" },
    { name: "Хуан Пабло Монтойя", country: "co" },
    { name: "Педро де ла Роса", country: "es" },
    { name: "Даниэль Риккиардо", country: "au" },
    { name: "Себастьян Феттель", country: "de" },
];

function findHistoricalDriverByName(name) {
    // Прямое совпадение по полному имени
    let found = historicalDriversData.find(d => d.name === name);
    if (found) return found;
    
    // Поиск по фамилии (последнему слову)
    const searchName = name.trim();
    const lastName = searchName.split(' ').pop();
    
    // Проверяем, заканчивается ли имя на фамилию
    found = historicalDriversData.find(d => {
        const dLastName = d.name.split(' ').pop();
        return dLastName === lastName;
    });
    if (found) return found;
    
    // Для случаев типа "Де ла Роса" - ищем полное совпадение с фамилией
    found = historicalDriversData.find(d => {
        const dLastName = d.name.split(' ').pop();
        return dLastName === searchName;
    });
    if (found) return found;
    
    return null;
}

function createLapRecordTable() {
    const wrapper = document.createElement('div');
    wrapper.className = 'stats-table-wrapper';

    const tableTitle = document.createElement('h3');
    tableTitle.className = 'stats-table-title';
    tableTitle.textContent = 'Рекорды лучшего круга';
    wrapper.appendChild(tableTitle);

    const tableContainer = document.createElement('div');
    tableContainer.className = 'stats-table-container';

    const table = document.createElement('table');
    table.className = 'stats-table lap-record-table';

    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>#</th>
            <th>Гран-при</th>
            <th>Команда</th>
            <th>Пилот</th>
            <th>Время</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    // Получаем все прошедшие ГП (дата гонки < текущая дата и не отменены)
    const now = new Date();
    const pastGPs = calendarData.filter(gp => {
        const raceDate = new Date(gp.date);
        return raceDate < now && !gp.canceled;
    });

    if (pastGPs.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="5" style="text-align:center;color:#666;padding:20px;">Нет данных для текущего сезона</td>`;
        tbody.appendChild(tr);
    } else {
        // Создаем карту уже побитых рекордов
        const brokenRecords = {};
        lapRecordData.forEach(row => {
            if (row.driver !== 'none' && row.time !== '0.00s' && row.time !== '0:00.000') {
                brokenRecords[row.gpId] = row;
            }
        });

        let index = 1;
        pastGPs.forEach(gp => {
            // Проверяем, побит ли рекорд в этом сезоне
            const brokenRecord = brokenRecords[gp.id];
            
            let driver = null;
            let time = '';
            let teamName = '';
            let driverNameForDisplay = '';
            let driverShortNameForDisplay = '';
            let teamFromRecord = '';
            let recordYear = '';
            let driverCountry = '';
            let hasDriverId = false;
            let isBrokenRecord = false;
            let historicalDriver = null;

            if (brokenRecord) {
                // Рекорд побит — используем данные из lapRecordData
                driver = findDriverById(brokenRecord.driver);
                time = brokenRecord.time;
                isBrokenRecord = true;
                if (driver) {
                    teamName = driver.team;
                    driverNameForDisplay = driver.name;
                    driverShortNameForDisplay = driver.namem || driver.name;
                    driverCountry = driver.country;
                    hasDriverId = true;
                }
                recordYear = '2026';
            } else {
                // Рекорд НЕ побит — используем исторический рекорд из данных трассы
                const track = getTrackForGP(gp.id);
                if (!track) return;

                // Извлекаем имя пилота из lapRecord
                const recordParts = track.lapRecord.match(/\(([^,]+),/);
                const driverNameFromRecord = recordParts ? recordParts[1].trim() : 'Неизвестно';
                
                // Извлекаем только время
                const timeParts = track.lapRecord.match(/^([^\s(]+)/);
                time = timeParts ? timeParts[1].trim() : track.lapRecord;
                
                // Извлекаем команду из lapRecord
                const teamParts = track.lapRecord.match(/,\s*([^,)]+)(?:,|\))/);
                teamFromRecord = teamParts ? teamParts[1].trim() : '';
                
                // Извлекаем год из lapRecord
                const yearParts = track.lapRecord.match(/,\s*(\d{4})/);
                recordYear = yearParts ? yearParts[1].trim() : '';
                
                // Ищем пилота по фамилии в основном составе
                const searchTerms = driverNameFromRecord.toLowerCase().split(/\s+/);
                driver = driversData.find(d => {
                    const driverNameLower = d.name.toLowerCase();
                    return searchTerms.every(term => driverNameLower.includes(term));
                });
                
                // Если пилот найден в основном составе
                if (driver) {
                    driverNameForDisplay = driver.name;
                    driverShortNameForDisplay = driver.namem || driver.name;
                    driverCountry = driver.country;
                    hasDriverId = true;
                } else {
                    // Если не найден, ищем в исторических данных
                    historicalDriver = findHistoricalDriverByName(driverNameFromRecord);
                    if (historicalDriver) {
                        driverNameForDisplay = historicalDriver.name;
                        // Для исторических пилотов делаем сокращение по имени
                        const nameParts = historicalDriver.name.split(' ');
                        if (nameParts.length >= 2) {
                            driverShortNameForDisplay = nameParts[0].charAt(0) + '. ' + nameParts[nameParts.length - 1];
                        } else {
                            driverShortNameForDisplay = historicalDriver.name;
                        }
                        driverCountry = historicalDriver.country;
                    } else {
                        // Если пилот не найден нигде
                        driverNameForDisplay = driverNameFromRecord;
                        driverShortNameForDisplay = driverNameFromRecord;
                    }
                    hasDriverId = false;
                }
                
                // ВСЕГДА используем команду из рекорда
                teamName = teamFromRecord;
                
                // Пытаемся найти нормализованное название команды в teamsData
                if (typeof teamsData !== 'undefined') {
                    const foundTeam = teamsData.find(t => 
                        t.name === teamFromRecord || 
                        t.shortName === teamFromRecord
                    );
                    if (foundTeam) {
                        teamName = foundTeam.shortName;
                    }
                }
            }

            const gpCountry = getGPCountry(gp.id);
            const gpName = getGPName(gp.id);
            const gpShort = gpName.replace('Гран-при ', 'ГП ').replace('-Каталунии', '');

            // Получаем логотип команды
            const teamLogo = getTeamLogo(teamName);

            const tr = document.createElement('tr');
            
            // Проверяем, есть ли у нас пилот для клика
            const driverClickable = driver ? `stats-driver-clickable" data-driver-id="${driver.id}` : '';
            const teamClickable = (teamName && teamName !== 'Неизвестно' && teamName !== '') ? `stats-clickable" data-team="${teamName}` : '';
            
            // Получаем флаг пилота
            let flagHtml = '';
            if (driver) {
                // Пилот из основного состава
                flagHtml = `<img src="Images/Flags/${driver.country}.svg" alt="" title="${getCountryName(driver.country)}" class="stats-flag">`;
            } else if (driverCountry) {
                // Пилот из исторических данных
                flagHtml = `<img src="Images/Flags/${driverCountry}.svg" alt="" title="${getCountryName(driverCountry)}" class="stats-flag">`;
            }
            
            // Для всех строк добавляем класс с отступом, чтобы выровнять
            const driverCellClass = `driver-cell ${driverClickable}`;
            
            // Добавляем класс best-time для побитых рекордов
            const timeCellClass = `time-cell${isBrokenRecord ? ' best-time' : ''}`;
            
            tr.innerHTML = `
                <td class="pos-cell">${index}</td>
                <td class="gp-cell" data-gp-id="${gp.id}">
                    <img src="Images/Flags/${gpCountry}.svg" alt="" class="stats-flag">
                    <span class="gp-full">${gpName}</span>
                    <span class="gp-short">${gpShort}</span>
                </td>
                <td class="team-cell ${teamClickable}">
                    <div class="team-logo-wrapper">
                        <img src="${teamLogo}" alt="${teamName}" class="stats-team-logo" onerror="this.style.display='none'">
                        ${recordYear ? `<span class="team-year">(${recordYear})</span>` : ''}
                    </div>
                </td>
                <td class="${driverCellClass}">
                    ${flagHtml}
                    <span class="driver-fullname">${driverNameForDisplay}</span>
                    <span class="driver-shortname">${driverShortNameForDisplay}</span>
                </td>
                <td class="${timeCellClass}">${time}</td>
            `;
            tbody.appendChild(tr);
            index++;
        });

        // Если нет ни одного рекорда для показа
        if (tbody.children.length === 0) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td colspan="5" style="text-align:center;color:#666;padding:20px;">Нет данных для текущего сезона</td>`;
            tbody.appendChild(tr);
        }
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    wrapper.appendChild(tableContainer);

    wrapper.addEventListener('click', (e) => {
        const driverCell = e.target.closest('.stats-driver-clickable');
        if (driverCell) {
            const driverId = driverCell.dataset.driverId;
            if (driverId) {
                const driver = findDriverById(driverId);
                if (driver) openDriverModal(driver);
            }
            return;
        }
        const teamCell = e.target.closest('.stats-clickable');
        if (teamCell) {
            const teamData = getTeamData(teamCell.dataset.team);
            if (teamData) openTeamModal(teamData);
            return;
        }
        // Клик по ГП
        const gpCell = e.target.closest('.gp-cell');
        if (gpCell) {
            const gpId = gpCell.dataset.gpId;
            const gp = getGPById(gpId);
            if (gp) {
                const track = getTrackForGP(gp.id);
                if (track && typeof openTrackModal === 'function') {
                    openTrackModal(track, gp);
                }
            }
        }
    });

    return wrapper;
}

function createEnginePartsTable() {
    const wrapper = document.createElement('div');
    wrapper.className = 'stats-table-wrapper';

    const tableTitle = document.createElement('h3');
    tableTitle.className = 'stats-table-title';
    tableTitle.textContent = 'Замена элементов силовой установки';
    wrapper.appendChild(tableTitle);

    const tableContainer = document.createElement('div');
    tableContainer.className = 'stats-table-container';

    const table = document.createElement('table');
    table.className = 'stats-table engine-parts-table';

    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Команда</th>
            <th>Пилоты</th>
            <th title="Двигатель внутреннего сгорания">ICE</th>
            <th title="Турбонагнетатель">TC</th>
            <th title="Выхлопная система">EXH</th>
            <th title="Кинетический мотор-генератор">MGU-K</th>
            <th title="Накопитель энергии">ES</th>
            <th title="Блок управляющей электроники">PU-CE</th>
            <th title="Вспомогательные компоненты">PU-ANC</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    // Лимиты компонентов
    const limits = {
        ice: 4,
        tc: 4,
        exh: 4,
        mguk: 3,
        es: 3,
        puce: 3,
        puanc: 6
    };

    // Функция определения цвета для значения
    function getStatusClass(value, limit) {
        if (value > limit) return 'over-limit';
        if (value === limit) return 'at-limit';
        return '';
    }

    // Группируем данные по командам
    const teamsMap = {};
    enginePartsData.forEach(item => {
        const driver = findDriverByName(item.driver);
        if (!driver) return;
        if (!teamsMap[driver.team]) {
            teamsMap[driver.team] = [];
        }
        teamsMap[driver.team].push({ driver, data: item });
    });

    // Сортировка команд по позиции в Кубке конструкторов
    const teamPointsMap = {};
    if (typeof teamsData !== 'undefined') {
        teamsData.forEach(team => {
            teamPointsMap[team.shortName] = { points: 0, team: team.shortName };
        });
        
        if (typeof combinedStandings !== 'undefined') {
            combinedStandings.forEach(entry => {
                const driver = findDriverById(entry.driver);
                if (driver && teamPointsMap[driver.team]) {
                    teamPointsMap[driver.team].points += entry.points;
                }
            });
        }
    }

    const sortedTeams = Object.keys(teamsMap).sort((a, b) => {
        const pointsA = teamPointsMap[a]?.points || 0;
        const pointsB = teamPointsMap[b]?.points || 0;
        return pointsB - pointsA;
    });

    sortedTeams.forEach((teamName, teamIndex) => {
        const drivers = teamsMap[teamName];
        
        drivers.sort((a, b) => {
            const numA = parseInt(a.driver.number) || 0;
            const numB = parseInt(b.driver.number) || 0;
            return numA - numB;
        });
        
        // Получаем логотип команды
        const teamLogo = getTeamLogo(teamName);
        
        // Проходим по пилотам
        drivers.forEach(({ driver, data }, driverIndex) => {
            const tr = document.createElement('tr');
            
            // Для первого пилота добавляем rowspan
            let teamCellHTML = '';
            if (driverIndex === 0) {
                const rowspan = drivers.length;
                teamCellHTML = `
                    <td class="team-cell stats-clickable" data-team="${teamName}" rowspan="${rowspan}">
                        <img src="${teamLogo}" alt="${teamName}" class="stats-team-logo" onerror="this.style.display='none'">
                    </td>
                `;
            }
            
            tr.innerHTML = `
                ${teamCellHTML}
                <td class="driver-cell stats-driver-clickable" data-driver-id="${driver.id}" data-team="${teamName}">
                    <img src="Images/Flags/${driver.country}.svg" alt="" title="${getCountryName(driver.country)}" class="stats-flag">
                    <span class="driver-fullname">${driver.name}</span>
                    <span class="driver-shortname">${driver.namem}</span>
                </td>
                <td class="engine-cell ${getStatusClass(data.ice, limits.ice)}">${data.ice}</td>
                <td class="engine-cell ${getStatusClass(data.tc, limits.tc)}">${data.tc}</td>
                <td class="engine-cell ${getStatusClass(data.exh, limits.exh)}">${data.exh}</td>
                <td class="engine-cell ${getStatusClass(data.mguk, limits.mguk)}">${data.mguk}</td>
                <td class="engine-cell ${getStatusClass(data.es, limits.es)}">${data.es}</td>
                <td class="engine-cell ${getStatusClass(data.puce, limits.puce)}">${data.puce}</td>
                <td class="engine-cell ${getStatusClass(data.puanc, limits.puanc)}">${data.puanc}</td>
            `;
            tbody.appendChild(tr);
        });
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    wrapper.appendChild(tableContainer);

    // ====== ЛОГИКА HOVER ======
    // Используем делегирование событий на tbody
    let currentHighlightedTeam = null;
    
    tbody.addEventListener('mouseover', (e) => {
        // Находим ячейку команды или пилота
        const teamCell = e.target.closest('.team-cell');
        const driverCell = e.target.closest('.driver-cell');
        
        // Сначала очищаем все выделения, но не сразу
        clearHighlights();
        
        if (teamCell) {
            // Наведены на команду - подсвечиваем обоих пилотов
            const teamName = teamCell.dataset.team;
            currentHighlightedTeam = teamName;
            highlightTeamDrivers(teamName);
            // Подсвечиваем саму ячейку команды
            teamCell.classList.add('hovered');
        } else if (driverCell) {
            // Наведены на пилота - подсвечиваем всю его строку (кроме ячейки команды)
            const tr = driverCell.closest('tr');
            if (tr) {
                // Подсвечиваем ячейку пилота
                driverCell.classList.add('highlighted-single');
                // Подсвечиваем все ячейки engine-cell в этой строке
                const engineCells = tr.querySelectorAll('.engine-cell');
                engineCells.forEach(cell => {
                    cell.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                });
            }
        }
    });

    tbody.addEventListener('mouseout', (e) => {
        // Проверяем, что мышь действительно покинула элемент
        const relatedTarget = e.relatedTarget;
        if (relatedTarget && tbody.contains(relatedTarget)) {
            return; // Мышь перешла на другой элемент внутри tbody
        }
        // Если мышь покинула tbody, очищаем всё
        clearHighlights();
        currentHighlightedTeam = null;
    });

    // Обработчик для очистки при выходе из tbody
    tbody.addEventListener('mouseleave', () => {
        clearHighlights();
        currentHighlightedTeam = null;
    });

    // Функция очистки всех выделений
    function clearHighlights() {
        // Убираем подсветку с ячеек команды
        document.querySelectorAll('.engine-parts-table .team-cell.hovered').forEach(el => {
            el.classList.remove('hovered');
        });
        // Убираем подсветку с ячеек пилотов
        document.querySelectorAll('.engine-parts-table .driver-cell.highlighted-single').forEach(el => {
            el.classList.remove('highlighted-single');
        });
        document.querySelectorAll('.engine-parts-table .driver-cell.highlighted-with-team').forEach(el => {
            el.classList.remove('highlighted-with-team');
        });
        // Убираем подсветку с engine-cell
        document.querySelectorAll('.engine-parts-table .engine-cell').forEach(el => {
            el.style.backgroundColor = '';
        });
    }

    // Функция подсветки обоих пилотов команды
    function highlightTeamDrivers(teamName) {
        const driverCells = tbody.querySelectorAll('.driver-cell');
        driverCells.forEach(cell => {
            if (cell.dataset.team === teamName) {
                cell.classList.add('highlighted-with-team');
                // Подсвечиваем все engine-cell в этой строке
                const tr = cell.closest('tr');
                if (tr) {
                    const engineCells = tr.querySelectorAll('.engine-cell');
                    engineCells.forEach(engineCell => {
                        engineCell.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    });
                }
            }
        });
    }

    // Легенда
    const legend = document.createElement('div');
    legend.className = 'engine-legend';
    legend.innerHTML = `
        <span class="engine-legend-item">
            <span class="engine-legend-color at-limit"></span> Лимит достигнут
        </span>
        <span class="engine-legend-item">
            <span class="engine-legend-color over-limit"></span> Лимит превышен
        </span>
        <span style="color:#888;font-size:0.65rem;margin-left:5px;">
            Лимиты: ICE/TC/EXH:4, MGU-K/ES/PU-CE:3, PU-ANC:6
        </span>
    `;
    wrapper.appendChild(legend);

    // Примечание о штрафах
    const note = document.createElement('div');
    note.className = 'engine-note';
    note.innerHTML = `
        <span class="engine-note-icon">🛈</span>
        <span class="engine-note-text">
		•Установка сверх лимита - штраф: потеря 10 позиций, далее по 5.</br>
		•При сумме штрафов более 15 позиций - старт с последней позиции.
		</span>
    `;
    wrapper.appendChild(note);

    // Расшифровка сокращений (скрытая, только для мобильных)
    const abbrevNote = document.createElement('div');
    abbrevNote.className = 'engine-abbrev-note';
    abbrevNote.innerHTML = `
        <span class="engine-abbrev-text">
            <span class="abbrev-item"><span class="abbrev-code">ICE</span> - двигатель внутреннего сгорания</span>
            <span class="abbrev-item"><span class="abbrev-code">MGU-K</span> - кинетический мотор-генератор</span>
            <span class="abbrev-item"><span class="abbrev-code">TC</span> - турбонагнетатель</span>
            <span class="abbrev-item"><span class="abbrev-code">EXH</span> - выхлопная система</span>
            <span class="abbrev-item"><span class="abbrev-code">ES</span> - накопитель энергии</span>
            <span class="abbrev-item"><span class="abbrev-code">PU-CE</span> - блок управляющей электроники</span>
            <span class="abbrev-item"><span class="abbrev-code">PU-ANC</span> - вспомогательные компоненты</span>
        </span>
    `;
    wrapper.appendChild(abbrevNote);

    wrapper.addEventListener('click', (e) => {
        const driverCell = e.target.closest('.stats-driver-clickable');
        if (driverCell) {
            const driver = findDriverById(driverCell.dataset.driverId);
            if (driver) openDriverModal(driver);
            return;
        }
        const teamCell = e.target.closest('.stats-clickable');
        if (teamCell) {
            const teamData = getTeamData(teamCell.dataset.team);
            if (teamData) openTeamModal(teamData);
            return;
        }
    });

    return wrapper;
}