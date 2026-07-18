const qualiData = [
    { driver1: "Андреа Кими Антонелли", 
      score1: 6, 
      score2: 4,
      driver2: "Джордж Расселл" },
    { driver1: "Шарль Леклер", 
      score1: 6, 
      score2: 4,
      driver2: "Льюис Хэмилтон" },
    { driver1: "Ландо Норрис", 
      score1: 6, 
      score2: 4,
      driver2: "Оскар Пиастри" },
    { driver1: "Макс Ферстаппен", 
      score1: 7, 
      score2: 3,
      driver2: "Иcаак Хаджар" },
    { driver1: "Лиам Лоусон", 
      score1: 6, 
      score2: 4,
      driver2: "Арвид Линдблад" },
    { driver1: "Нико Хюлькенберг", 
      score1: 5, 
      score2: 5,
      driver2: "Габриэл Бортолето" },
    { driver1: "Карлос Сайнс", 
      score1: 8, 
      score2: 2,
      driver2: "Александр Албон" },
    { driver1: "Эстебан Окон", 
      score1: 2, 
      score2: 8,
      driver2: "Оливер Берман" },
    { driver1: "Пьер Гасли", 
      score1: 7, 
      score2: 3,
      driver2: "Франко Колапинто" },
    { driver1: "Фернандо Алонсо", 
      score1: 8, 
      score2: 2,
      driver2: "Лэнс Стролл" },
    { driver1: "Серхио Перес", 
      score1: 6, 
      score2: 4,
      driver2: "Валттери Боттас" },
];

const pitstopData = [
	{ gpId: "australia", driver: "russell", time: "2.17 " },
	{ gpId: "china", driver: "hamilton", time: "2.29" },
	{ gpId: "japan", driver: "hamilton", time: "2.00" },
	{ gpId: "bahrain", driver: "none", time: "0.00" },
	{ gpId: "saudi", driver: "none", time: "0.00" },
	{ gpId: "miami", driver: "lindblad", time: "2.08" },
	{ gpId: "canada", driver: "lawson", time: "2.20" },
	{ gpId: "monaco", driver: "antonelli", time: "2.17" },
	{ gpId: "barcelona", driver: "piastri", time: "2.13" },
	{ gpId: "austria", driver: "lindblad", time: "2.03" },
	{ gpId: "great-britain", driver: "russell", time: "2.18" },
	{ gpId: "belgium", driver: "none", time: "0.00" },
	{ gpId: "hungary", driver: "none", time: "0.00" },
	{ gpId: "netherlands", driver: "none", time: "0.00" },
	{ gpId: "italy", driver: "none", time: "0.00" },
	{ gpId: "madrid", driver: "none", time: "0.00" },
	{ gpId: "azerbaijan", driver: "none", time: "0.00" },
	{ gpId: "singapore", driver: "none", time: "0.00" },
	{ gpId: "usa", driver: "none", time: "0.00" },
	{ gpId: "mexico", driver: "none", time: "0.00" },
	{ gpId: "saopaulo", driver: "none", time: "0.00" },
	{ gpId: "vegas", driver: "none", time: "0.00" },
	{ gpId: "qatar", driver: "none", time: "0.00" },
	{ gpId: "abudhabi", driver: "none", time: "0.00" },
];

const penaltiesData = [
    { driver: "Оливер Берман", fines: 4 },
    { driver: "Александр Албон", fines: 3 },
    { driver: "Андреа Кими Антонелли", fines: 3 },
    { driver: "Льюис Хэмилтон", fines: 3 },
    { driver: "Пьер Гасли", fines: 2 },
    { driver: "Лэнс Стролл", fines: 2 },
    { driver: "Карлос Сайнс", fines: 2 },
    { driver: "Оскар Пиастри", fines: 2 },
    { driver: "Лиам Лоусон", fines: 2 },
    { driver: "Габриэл Бортолето", fines: 2 },
    { driver: "Шарль Леклер", fines: 1 },
    { driver: "Эстебан Окон", fines: 1 },
    { driver: "Франко Колапинто", fines: 1 },
	
    { driver: "Ландо Норрис", fines: 0 },
    { driver: "Макс Ферстаппен", fines: 0 },
    { driver: "Иcаак Хаджар", fines: 0 },
    { driver: "Серхио Перес", fines: 0 },
    { driver: "Фернандо Алонсо", fines: 0 },
    { driver: "Нико Хюлькенберг", fines: 0 },
    { driver: "Арвид Линдблад", fines: 0 },
    { driver: "Джордж Расселл", fines: 0 },
    { driver: "Валттери Боттас", fines: 0 },
	
    { driver: "Юки Цунода", fines: 3 },
    { driver: "Гуан Ю Чжоу", fines: 0 },
    { driver: "Джек Дуэн", fines: 0 },
];

const lapRecordData = [
    { gpId: "australia", driver: "russell", time: "0:00.000" },
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
    
    // Сбрасываем стили, которые могли остаться от других вкладок
    container.style.display = 'block';
    container.style.flexDirection = '';
    container.style.gap = '';
    container.style.padding = '20px';
    
    container.innerHTML = '';
    
    const grid = document.createElement('div');
    grid.className = 'stats-grid';
    
    grid.appendChild(createQualiTable());
    grid.appendChild(createPitstopTable());
    grid.appendChild(createPenaltiesTable());
    grid.appendChild(createLapRecordTable());
    
    container.appendChild(grid);
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
    
    qualiData.forEach(row => {
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
		const gpShort = gpName.replace('Гран-при ', '').replace('-Каталунии', '');
        
        // Проверяем, лучшее ли это время
        const currentTime = parseFloat(row.time);
        const isBest = !isNaN(currentTime) && currentTime === bestTime;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="pos-cell">${index + 1}</td>
			<td class="gp-cell">
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
    
    const validRecords = lapRecordData.filter(row => 
        row.driver !== 'none' && 
        row.time !== '0.00s' && 
        row.time !== '0:00.000'
    );
    
    if (validRecords.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="5" style="text-align:center;color:#666;padding:20px;">Нет данных</td>`;
        tbody.appendChild(tr);
    } else {
        validRecords.forEach((row, index) => {
            const driver = findDriverById(row.driver);
            if (!driver) return;
            
            const gpCountry = getGPCountry(row.gpId);
			const gpName = getGPName(row.gpId);           
			const gpShort = gpName.replace('Гран-при ', '');
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="pos-cell">${index + 1}</td>
				<td class="gp-cell">
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
                <td class="time-cell">${row.time}</td>
            `;
            tbody.appendChild(tr);
        });
    }
    
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