const detailedResults = { 
    "australia": {
        "russell": 25,
        "antonelli": 18,
        "leclerc": 15,
        "hamilton": 12,
        "norris": 10,
        "verstappen": 8,
        "bearman": 6,
        "lindblad": 4,
        "bortoletto": 2,
        "gasly": 1,
        "alonso": "dnf",
        "bottas": "dnf",
        "hadjar": "dnf",
        "piastri": "dns",
        "hulkenberg": "dns",
        "tsunoda": "dnp",
    },
    "china": {
        "antonelli": 25,
        "russell": 18,
        "hamilton": 15,
        "leclerc": 12,
        "bearman": 10,
        "gasly": 8,
        "lawson": 6,
        "hadjar": 4,
        "sainz": 2,
        "colapinto": 1,
        "verstappen": "dnf",
        "alonso": "dnf",
        "stroll": "dnf",
        "norris": "dns",
        "piastri": "dns",
        "bortoletto": "dns",
        "albon": "dns",
        "tsunoda": "dnp",
    },
    "japan": {
        "antonelli": 25,
        "piastri": 18,
        "leclerc": 15,
        "russell": 12,
        "norris": 10,
        "hamilton": 8,
        "gasly": 6,
        "verstappen": 4,
        "lawson": 2,
        "ocon": 1,
        "stroll": "dnf",
        "bearman": "dnf",
        "tsunoda": "dnp",
    },
    "saudi-arabia": {
        "000": 25,
        "000": 18,
        "000": 15,
        "000": 12,
        "000": 10,
        "000": 8,
        "000": 6,
        "000": 4,
        "000": 2,
        "000": 1,
    },
    "miami": {
        "antonelli": 25,
        "norris": 18,
        "piastri": 15,
        "russell": 12,
        "verstappen": 10,
        "hamilton": 8,
        "colapinto": 6,
        "leclerc": 4,
        "sainz": 2,
        "albon": 1,
        "hulkenberg": "dnf",
        "lawson": "dnf",
        "gasly": "dnf",
        "hadjar": "dnf",
        "tsunoda": "dnp",
    },
    "canada": {
        "antonelli": 25,
        "hamilton": 18,
        "verstappen": 15,
        "leclerc": 12,
        "hadjar": 10,
        "colapinto": 8,
        "lawson": 6,
        "gasly": 4,
        "sainz": 2,
        "bearman": 1,
        "perez": "dnf",
        "norris": "dnf",
        "russell": "dnf",
        "alonso": "dnf",
        "albon": "dnf",
        "lindblad": "dns",
        "tsunoda": "dnp",
    },
    "monaco": {
        "antonelli": 25,
        "hamilton": 18,
        "hadjar": 15,
        "piastri": 12,
        "lawson": 10,
        "lindblad": 8,
        "gasly": 6,
        "albon": 4,
        "ocon": 2,
        "alonso": 1,
        "sainz": "dnf",
        "leclerc": "dnf",
        "stroll": "dnf",
        "norris": "dnf",
        "bearman": "dnf",
        "bottas": "dnf",
        "verstappen": "dnf",
        "tsunoda": "dnp",
    },
    "barcelona": {
        "hamilton": 25,
        "russell": 18,
        "norris": 15,
        "verstappen": 12,
        "piastri": 10,
        "hadjar": 8,
        "gasly": 6,
        "lawson": 4,
        "lindblad": 2,
        "colapinto": 1,
        "leclerc": "dnf",
        "antonelli": "dnf",
        "bearman": "dnf",
        "albon": "dnf",
        "alonso": "dnf",
        "hulkenberg": "dnf",
        "bottas": "dnf",
        "stroll": "dnf",
        "tsunoda": "dnp",
    },
    "austria": {
        "russell": 25,
        "verstappen": 18,
        "antonelli": 15,
        "piastri": 12,
        "hamilton": 10,
        "hadjar": 8,
        "norris": 6,
        "leclerc": 4,
        "lawson": 2,
        "lindblad": 1,
        "stroll": "dnf",
        "sainz": "dnf",
        "perez": "dnf",
        "bottas": "dnf",
        "tsunoda": "dnp",
    },
    "great-britain": {
        "leclerc": 25,
        "russell": 18,
        "hamilton": 15,
        "norris": 12,
        "hadjar": 10,
        "lawson": 8,
        "lindblad": 6,
        "bortoletto": 4,
        "colapinto": 2,
        "gasly": 1,
        "hulkenberg": "dnf",
        "albon": "dnf",
        "verstappen": "dnf",
        "tsunoda": "dnp",
    },
    "belgium": {
        "antonelli": 25,
        "leclerc": 18,
        "verstappen": 15,
        "hamilton": 12,
        "piastri": 10,
        "hadjar": 8,
        "norris": 6,
        "bortoletto": 4,
        "lindblad": 2,
        "colapinto": 1,
        "stroll": "dnf",
        "perez": "dnf",
        "russell": "dnf",
        "tsunoda": "dnp",
    },
    "hungary": {
        "norris": 25,
        "verstappen": 18,
        "antonelli": 15,
        "leclerc": 12,
        "hamilton": 10,
        "hadjar": 8,
        "russell": 6,
        "lawson": 4,
        "hulkenberg": 2,
        "lindblad": 1,
        "bottas": "dnf",
        "perez": "dnf",
        "piastri": "dnf",
        "tsunoda": "dnp",
    },
    "netherlands": {
        "norris": 25,
        "antonelli": 18,
        "russell": 15,
        "hamilton": 12,
        "leclerc": 10,
        "piastri": 8,
        "lawson": 6,
        "hulkenberg": 4,
        "alonso": 2,
        "gasly": 1,
        "verstappen": "dnf",
        "bearman": "dnf",
        "stroll": "dnf",
        "ocon": "dnf",
        "bottas": "dnf",
        "albon": "dnf",
        "hadjar": "dnp",
		"tsunoda": { "points": 0, "team": "Racing Bulls" },
    },
    "italy": {
        "000": 25,
        "000": 18,
        "000": 15,
        "000": 12,
        "000": 10,
        "000": 8,
        "000": 6,
        "000": 4,
        "000": 2,
        "000": 1,
    },
    "spain": {
        "000": 25,
        "000": 18,
        "000": 15,
        "000": 12,
        "000": 10,
        "000": 8,
        "000": 6,
        "000": 4,
        "000": 2,
        "000": 1,
    },
    "azerbaijan": {
        "000": 25,
        "000": 18,
        "000": 15,
        "000": 12,
        "000": 10,
        "000": 8,
        "000": 6,
        "000": 4,
        "000": 2,
        "000": 1,
    },
    "singapore": {
        "000": 25,
        "000": 18,
        "000": 15,
        "000": 12,
        "000": 10,
        "000": 8,
        "000": 6,
        "000": 4,
        "000": 2,
        "000": 1,
    },
    "usa": {
        "000": 25,
        "000": 18,
        "000": 15,
        "000": 12,
        "000": 10,
        "000": 8,
        "000": 6,
        "000": 4,
        "000": 2,
        "000": 1,
    },
    "mexico": {
        "000": 25,
        "000": 18,
        "000": 15,
        "000": 12,
        "000": 10,
        "000": 8,
        "000": 6,
        "000": 4,
        "000": 2,
        "000": 1,
    },
    "brazil": {
        "000": 25,
        "000": 18,
        "000": 15,
        "000": 12,
        "000": 10,
        "000": 8,
        "000": 6,
        "000": 4,
        "000": 2,
        "000": 1,
    },
    "las-vegas": {
        "000": 25,
        "000": 18,
        "000": 15,
        "000": 12,
        "000": 10,
        "000": 8,
        "000": 6,
        "000": 4,
        "000": 2,
        "000": 1,
    },
    "qatar": {
        "000": 25,
        "000": 18,
        "000": 15,
        "000": 12,
        "000": 10,
        "000": 8,
        "000": 6,
        "000": 4,
        "000": 2,
        "000": 1,
    },
    "abu-dhabi": {
        "000": 25,
        "000": 18,
        "000": 15,
        "000": 12,
        "000": 10,
        "000": 8,
        "000": 6,
        "000": 4,
        "000": 2,
        "000": 1,
    },
};

const detailedSprintResults = {
    "china": {
        "russell": 8,
        "leclerc": 7,
        "hamilton": 6,
        "norris": 5,
        "antonelli": 4,
        "piastri": 3,
        "lawson": 2,
        "bearman": 1,
        "hulkenberg": "dnf",
        "bottas": "dnf",
        "lindblad": "dnf",
        "tsunoda": "dnp",
    },
    "miami": {
        "norris": 8,
        "piastri": 7,
        "leclerc": 6,
        "russell": 5,
        "verstappen": 4,
        "antonelli": 3,
        "hamilton": 2,
        "gasly": 1,
        "hulkenberg": "dns",
        "lindblad": "dns",
        "bortoletto": "dsq",
        "tsunoda": "dnp",
    },
    "canada": {
        "russell": 8,
        "norris": 7,
        "antonelli": 6,
        "piastri": 5,
        "leclerc": 4,
        "hamilton": 3,
        "verstappen": 2,
        "lindblad": 1,
        "alonso": "dnf",
        "tsunoda": "dnp",
    },
    "great-britain": {
        "antonelli": 8,
        "hamilton": 7,
        "norris": 6,
        "russell": 5,
        "leclerc": 4,
        "verstappen": 3,
        "piastri": 2,
        "lawson": 1,
        "tsunoda": "dnp",
    },
    "netherlands": {
        "russell": 8,
        "leclerc": 7,
        "norris": 6,
        "antonelli": 5,
        "piastri": 4,
        "verstappen": 3,
        "hamilton": 2,
        "gasly": 1,
        "hadjar": "dnp",
		"tsunoda": { "points": 0, "team": "Racing Bulls" },
    },
    "singapore": {
        "000": 8,
        "000": 7,
        "000": 6,
        "000": 5,
        "000": 4,
        "000": 3,
        "000": 2,
        "000": 1,
    },
};

const constructorPenalties = {
    "Mercedes": 0,
    "Ferrari": 0,
    "McLaren": 0,
    "Red Bull": 6,
    "Racing Bulls": -6,
    "Alpine": 0,
    "Haas": 0,
    "Audi": 0,
    "Williams": 0,
    "Aston Martin": 0,
    "Cadillac": 0,
};

const driverStandings = [];
const combinedStandings = [];

function calculateConstructorStandings() {
    const teams = {};
    if (typeof teamsData !== 'undefined') {
        teamsData.forEach(t => { 
            teams[t.shortName] = { 
                team: t.shortName, 
                points: 0, 
                color: t.color 
            }; 
        });
    }
    
    // Проходим по всем ГП
    Object.keys(detailedResults).forEach(gpId => {
        const gpResults = detailedResults[gpId];
        if (!gpResults) return;
        
        Object.entries(gpResults).forEach(([driverId, data]) => {
            if (driverId === "000") return;
            
            // Получаем очки пилота в этом ГП
            const points = getDriverResultValue(gpResults, driverId);
            if (typeof points !== 'number') return;
            
            // Определяем команду для этого пилота в этом ГП
            const driver = findDriverById(driverId);
            let teamName = null;
            
            // Проверяем, есть ли специальное указание команды в результатах
            const gpTeam = getDriverResultTeam(gpResults, driverId, null);
            if (gpTeam) {
                teamName = gpTeam;
            } else if (driver) {
                // Если пилот резервист, но у него нет указания команды - пропускаем
                if (driver.team.toLowerCase() === 'резерв' || driver.team.toLowerCase() === 'reserve') {
                    return;
                }
                teamName = driver.team;
            } else {
                return;
            }
            
            // Добавляем очки команде
            if (teams[teamName]) {
                teams[teamName].points += points;
            }
        });
    });
    
    // Добавляем очки спринтов
    Object.keys(detailedSprintResults).forEach(gpId => {
        const spResults = detailedSprintResults[gpId];
        if (!spResults) return;
        
        Object.entries(spResults).forEach(([driverId, data]) => {
            if (driverId === "000") return;
            
            // Получаем очки пилота в этом спринте
            const points = getDriverResultValue(spResults, driverId);
            if (typeof points !== 'number') return;
            
            // Определяем команду для этого пилота в этом спринте
            const driver = findDriverById(driverId);
            let teamName = null;
            
            // Проверяем, есть ли специальное указание команды в результатах
            const gpTeam = getDriverResultTeam(spResults, driverId, null);
            if (gpTeam) {
                teamName = gpTeam;
            } else if (driver) {
                // Если пилот резервист, но у него нет указания команды - пропускаем
                if (driver.team.toLowerCase() === 'резерв' || driver.team.toLowerCase() === 'reserve') {
                    return;
                }
                teamName = driver.team;
            } else {
                return;
            }
            
            // Добавляем очки команде
            if (teams[teamName]) {
                teams[teamName].points += points;
            }
        });
    });
    
    // Применяем штрафы/бонусы
    Object.keys(constructorPenalties).forEach(teamName => {
        if (teams[teamName]) {
            teams[teamName].points += constructorPenalties[teamName];
        }
    });
    
    return Object.values(teams).sort((a, b) => b.points - a.points);
}

function getTeamPosition(teamName) {
    const standings = calculateConstructorStandings();
    const index = standings.findIndex(t => t.team === teamName);
    return index >= 0 ? index + 1 : 999; // Если команда не найдена, возвращаем большое число
}

function calculateDriverStandings() {
    const pointsMap = {};
    
    // Добавляем ВСЕХ пилотов с 0 очков
    driversData.forEach(driver => {
        if (driver.team.toLowerCase() === 'резерв') return;
        pointsMap[driver.id] = 0;
    });
    
    // Добавляем резервистов, у которых есть результаты в гонках
    Object.values(detailedResults).forEach(gpResults => {
        Object.entries(gpResults).forEach(([driverId, data]) => {
            if (driverId === "000") return;
            const points = getDriverResultValue(gpResults, driverId);
            // Если пилота нет в pointsMap (резервист), добавляем его
            if (!pointsMap.hasOwnProperty(driverId)) {
                pointsMap[driverId] = 0;
            }
            if (typeof points === 'number') {
                pointsMap[driverId] += points;
            }
        });
    });
    
    driverStandings.length = 0;
    Object.entries(pointsMap).forEach(([id, pts]) => {
        driverStandings.push({ driver: id, points: pts });
    });
    
    // Используем новую функцию сортировки
    driverStandings.sort(compareDrivers);
}

function calculateCombinedStandings() {
    const pointsMap = {};
    
    // Добавляем ВСЕХ пилотов с 0 очков
    driversData.forEach(driver => {
        if (driver.team.toLowerCase() === 'резерв') return;
        pointsMap[driver.id] = 0;
    });
    
    // Добавляем резервистов, у которых есть результаты в гонках
    Object.values(detailedResults).forEach(gpResults => {
        Object.entries(gpResults).forEach(([driverId, data]) => {
            if (driverId === "000") return;
            const points = getDriverResultValue(gpResults, driverId);
            // Если пилота нет в pointsMap (резервист), добавляем его
            if (!pointsMap.hasOwnProperty(driverId)) {
                pointsMap[driverId] = 0;
            }
            if (typeof points === 'number') {
                pointsMap[driverId] += points;
            }
        });
    });
    
    // Добавляем очки спринтов
    Object.values(detailedSprintResults).forEach(spResults => {
        Object.entries(spResults).forEach(([driverId, data]) => {
            if (driverId === "000") return;
            const points = getDriverResultValue(spResults, driverId);
            // Если пилота нет в pointsMap (резервист), добавляем его
            if (!pointsMap.hasOwnProperty(driverId)) {
                pointsMap[driverId] = 0;
            }
            if (typeof points === 'number') {
                pointsMap[driverId] += points;
            }
        });
    });
    
    combinedStandings.length = 0;
    Object.entries(pointsMap).forEach(([id, pts]) => {
        combinedStandings.push({ driver: id, points: pts });
    });
    
    // Используем новую функцию сортировки
    combinedStandings.sort(compareDrivers);
}

function calculateSprintStandings() {
    const pointsMap = {};
    
    // Добавляем ВСЕХ пилотов с 0 очков
    driversData.forEach(driver => {
        if (driver.team.toLowerCase() === 'резерв') return;
        pointsMap[driver.id] = 0;
    });
    
    // Добавляем резервистов, у которых есть результаты в спринтах
    Object.values(detailedSprintResults).forEach(spResults => {
        Object.entries(spResults).forEach(([driverId, data]) => {
            if (driverId === "000") return;
            const points = getDriverResultValue(spResults, driverId);
            // Если пилота нет в pointsMap (резервист), добавляем его
            if (!pointsMap.hasOwnProperty(driverId)) {
                pointsMap[driverId] = 0;
            }
            if (typeof points === 'number') {
                pointsMap[driverId] += points;
            }
        });
    });
    
    sprintStandings.length = 0;
    Object.entries(pointsMap).forEach(([id, pts]) => {
        sprintStandings.push({ driver: id, points: pts });
    });
    
    // Используем новую функцию сортировки
    sprintStandings.sort(compareDrivers);
}

calculateDriverStandings();
calculateCombinedStandings();
const sprintStandings = [];
calculateSprintStandings();

function findDriverById(id) { return driversData.find(d => d.id === id); }

function getAllGPs() {
    if (typeof calendarData !== 'undefined') return calendarData.map(gp => gp.id);
    return Object.keys(detailedResults);
}

function getAllSprintGPs() {
    if (typeof calendarData !== 'undefined') return calendarData.filter(gp => gp.hasSprint).map(gp => gp.id);
    return Object.keys(detailedSprintResults);
}

function hasRealResults(gpId, isSprint = false) {
    const results = isSprint ? detailedSprintResults[gpId] : detailedResults[gpId];
    if (!results) return false;
    return Object.keys(results).some(key => 
        key !== "000" && results[key] !== undefined
    );
}

let isFirstRender = true;

function initResultsPage(container) {
    'use strict';
    calculateDriverStandings();
    calculateSprintStandings();
    calculateCombinedStandings();
    
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.gap = '0';
    container.style.padding = '0';
    
    const constructorsPanel = document.createElement('div');
    constructorsPanel.className = 'results-constructors-panel';
    const mainArea = document.createElement('div');
    mainArea.className = 'results-main-area';
    
    container.appendChild(constructorsPanel);
    container.appendChild(mainArea);
    
    let activeTeamFilter = null;
    let detailMode = { drivers: false, sprint: false };
    
    function refreshAll(animate = false) {
        mainArea.innerHTML = '';
        if (detailMode.drivers) renderDriverDetailedTable(mainArea, activeTeamFilter);
        else renderDriverStandings(mainArea, activeTeamFilter);
        if (detailMode.sprint) renderSprintDetailedTable(mainArea, activeTeamFilter);
        else renderSprintStandings(mainArea, activeTeamFilter);
        constructorsPanel.innerHTML = '';
        renderConstructorStandingsPanel(constructorsPanel, activeTeamFilter);
        
        // Запускаем анимацию только если указано
        if (animate) {
            animateResultsContent(container);
        } else {
            // Если анимация не нужна, просто делаем элементы видимыми
            makeAllVisible(container);
        }
        
        // Сбрасываем флаг после первого рендера
        if (isFirstRender) {
            isFirstRender = false;
        }
    }
    
    mainArea.addEventListener('click', (e) => {
        const detailBtn = e.target.closest('.results-detail-btn');
        if (detailBtn) {
            if (detailBtn.dataset.table === 'drivers') detailMode.drivers = !detailMode.drivers;
            else detailMode.sprint = !detailMode.sprint;
            // При нажатии на Подробнее - НЕ анимируем
            refreshAll(false);
            return;
        }
        
        const driverRow = e.target.closest('.results-driver-clickable');
        if (driverRow) {
            const driver = findDriverById(driverRow.dataset.driverId);
            if (driver) openDriverModal(driver);
            return;
        }
        
        const teamCell = e.target.closest('.results-team-cell');
        if (teamCell) {
            const teamData = getTeamData(teamCell.dataset.team);
            if (teamData) openTeamModal(teamData);
            return;
        }
    });
    
    constructorsPanel.addEventListener('click', (e) => {
        const row = e.target.closest('.constructor-row');
        if (!row) return;
        const team = row.dataset.team;
        activeTeamFilter = (activeTeamFilter === team) ? null : team;
        // При фильтрации команд - НЕ анимируем
        refreshAll(false);
    });
    
    // Первый рендер с анимацией
    refreshAll(true);
}

function makeAllVisible(container) {
    // Делаем видимой панель конструкторов
    const constructorPanel = container.querySelector('.results-constructors-panel');
    if (constructorPanel) {
        constructorPanel.style.opacity = '1';
        constructorPanel.style.transform = 'translateX(0)';
        constructorPanel.style.transition = 'none';
    }
    
    // Делаем видимыми блоки в главной области
    const sections = container.querySelectorAll('.results-section-block');
    sections.forEach((section) => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.style.transition = 'none';
    });
    
    // Делаем видимыми таблицы в детальном режиме
    const tables = container.querySelectorAll('.detailed-table-container');
    tables.forEach((table) => {
        table.style.opacity = '1';
        table.style.transition = 'none';
    });
}

function animateResultsContent(container) {
    // Сначала сбрасываем все стили для анимации
    const constructorPanel = container.querySelector('.results-constructors-panel');
    if (constructorPanel) {
        constructorPanel.style.opacity = '0';
        constructorPanel.style.transform = 'translateX(-15px)';
        constructorPanel.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    }
    
    const sections = container.querySelectorAll('.results-section-block');
    sections.forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(15px)';
        section.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
    
    const tables = container.querySelectorAll('.detailed-table-container');
    tables.forEach((table) => {
        table.style.opacity = '0';
        table.style.transition = 'opacity 0.4s ease';
    });
    
    // Запускаем анимацию с задержками
    setTimeout(() => {
        if (constructorPanel) {
            constructorPanel.style.opacity = '1';
            constructorPanel.style.transform = 'translateX(0)';
        }
    }, 100);
    
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 150 + index * 80);
    });
    
    tables.forEach((table, index) => {
        setTimeout(() => {
            table.style.opacity = '1';
        }, 200 + index * 80);
    });
}

function calculateRaceWinners() {
    const winners = {};
    const allGPs = getAllGPs();
    
    allGPs.forEach(gpId => {
        const results = detailedResults[gpId];
        if (!results) return;
        
        // Проверяем, есть ли реальные результаты
        const hasResults = Object.keys(results).some(key => 
            key !== "000" && results[key] !== undefined
        );
        if (!hasResults) return;
        
        // Находим победителя (пилота с 25 очками)
        for (const [driverId, points] of Object.entries(results)) {
            if (driverId === "000") continue;
            if (points === 25) {
                if (!winners[driverId]) {
                    winners[driverId] = { driverId, wins: 0 };
                }
                winners[driverId].wins += 1;
                break;
            }
        }
    });
    
    // Преобразуем в массив и сортируем по количеству побед
    const sortedWinners = Object.values(winners)
        .sort((a, b) => b.wins - a.wins)
        .map(entry => ({
            driver: findDriverById(entry.driverId),
            wins: entry.wins
        }))
        .filter(entry => entry.driver !== undefined);
    
    return sortedWinners;
}

function createSimpleTable(data, startIndex, filterTeam, isSprint = false) {
    const table = document.createElement('table');
    table.className = 'results-table';
    table.innerHTML = '<thead><tr><th>#</th><th>Пилот</th><th>Очки</th></tr></thead>';
    const tbody = document.createElement('tbody');
    
    data.forEach((entry, i) => {
        const driver = findDriverById(entry.driver);
        if (!driver) return;
        const pos = startIndex + i + 1;
        
        // Определяем команду для отображения
        const displayTeam = getDisplayTeamForDriver(driver, isSprint);
        
        const dimmed = filterTeam && displayTeam !== filterTeam;
        
        const tr = document.createElement('tr');
        if (dimmed) tr.className = 'filtered-out';
        
        if (!isSprint) {
            const totalPoints = entry.points;
			const raceEntry = driverStandings.find(s => s.driver === entry.driver);
			const racePoints = raceEntry ? raceEntry.points : 0;
			const sprintPoints = totalPoints - racePoints;

			tr.innerHTML = `
				<td class="results-pos">${pos}</td>
				<td class="results-driver results-driver-clickable" data-driver-id="${driver.id}">
					<img src="${getTeamLogo(displayTeam)}" class="results-team-logo" onerror="this.style.display='none'">
					<img src="Images/Flags/${driver.country}.svg" title="${getCountryName(driver.country)}" class="results-flag"> ${driver.name}
				</td>
				<td class="results-points">${totalPoints}</td>`;
            
            const pointsCell = tr.querySelector('.results-points');
            
            if (sprintPoints > 0) {
                tr.addEventListener('mouseenter', () => {
                    pointsCell.textContent = racePoints;
                    pointsCell.style.color = '#e10600';
                    pointsCell.style.fontWeight = 'bold';
                    pointsCell.title = `Только гонки: ${racePoints} (Спринты: ${sprintPoints})`;
                });
                
                tr.addEventListener('mouseleave', () => {
                    pointsCell.textContent = totalPoints;
                    pointsCell.style.color = '';
                    pointsCell.style.fontWeight = '';
                    pointsCell.title = `Всего: ${totalPoints} (Гонки: ${racePoints} + Спринты: ${sprintPoints})`;
                });
            }
        } else {
            tr.innerHTML = `
                <td class="results-pos">${pos}</td>
                <td class="results-driver results-driver-clickable" data-driver-id="${driver.id}">
                    <img src="${getTeamLogo(displayTeam)}" class="results-team-logo" onerror="this.style.display='none'">
                    <img src="Images/Flags/${driver.country}.svg" title="${getCountryName(driver.country)}" class="results-flag"> ${driver.name}
                </td>
                <td class="results-points">${entry.points}</td>`;
        }
        
        tbody.appendChild(tr);
    });
    
    table.appendChild(tbody);
    return table;
}

function renderDriverStandings(container, filterTeam) {
    const wrapper = document.createElement('div');
    wrapper.className = 'results-section-block';
    wrapper.innerHTML = `
        <div class="results-header-row">
            <h3 class="results-table-title">Личный зачёт</h3>
            <button class="results-detail-btn" data-table="drivers">Подробнее</button>
        </div>`;
    
    // Используем combinedStandings (уже отсортированы)
    const sorted = [...combinedStandings];
    const half = Math.ceil(sorted.length / 2);
    const cols = document.createElement('div');
    cols.className = 'results-columns';
    cols.appendChild(createSimpleTable(sorted.slice(0, half), 0, filterTeam, false));
    cols.appendChild(createSimpleTable(sorted.slice(half), half, filterTeam, false));
    wrapper.appendChild(cols);
    container.appendChild(wrapper);
}

function renderSprintStandings(container, filterTeam) {
    const wrapper = document.createElement('div');
    wrapper.className = 'results-section-block';
    wrapper.innerHTML = `
        <div class="results-header-row">
            <h3 class="results-table-title">Спринтерский зачёт</h3>
            <button class="results-detail-btn" data-table="sprint">Подробнее</button>
        </div>`;
    
    // Используем sprintStandings (уже отсортированы)
    const sorted = [...sprintStandings];
    const half = Math.ceil(sorted.length / 2);
    const cols = document.createElement('div');
    cols.className = 'results-columns';
    cols.appendChild(createSimpleTable(sorted.slice(0, half), 0, filterTeam, true));
    cols.appendChild(createSimpleTable(sorted.slice(half), half, filterTeam, true));
    wrapper.appendChild(cols);
    container.appendChild(wrapper);
}

function renderDriverDetailedTable(container, filterTeam) {
    const wrapper = document.createElement('div');
    wrapper.className = 'results-section-block';
    
    // Заголовок и кнопка
    const headerRow = document.createElement('div');
    headerRow.className = 'results-header-row';
    headerRow.innerHTML = `
        <h3 class="results-table-title">Личный зачёт — по этапам</h3>
        <button class="results-detail-btn active" data-table="drivers">Скрыть</button>
    `;
    wrapper.appendChild(headerRow);
    
    const allGPs = getAllGPs();
    // Используем combinedStandings (уже отсортированы)
    const sorted = [...combinedStandings];
    
    const tableContainer = document.createElement('div');
    tableContainer.className = 'detailed-table-container';
    
    // Левая фиксированная часть
    const fixedPart = document.createElement('div');
    fixedPart.className = 'detailed-fixed-part';
    
    let fixedHTML = '<div class="detailed-header-row"><div class="detailed-cell fixed-col-pos">#</div><div class="detailed-cell fixed-col-driver">Пилот</div></div>';
    
    sorted.forEach((entry, i) => {
        const driver = findDriverById(entry.driver);
        if (!driver) return;
        
        // Используем функцию для определения команды
        const displayTeam = getDisplayTeamForDriver(driver, false);
        
        const dimmed = filterTeam && displayTeam !== filterTeam;
        fixedHTML += `<div class="detailed-data-row ${dimmed ? 'filtered-out' : ''}" data-driver-id="${entry.driver}" data-row-index="${i}">
            <div class="detailed-cell fixed-col-pos">${i + 1}</div>
            <div class="detailed-cell fixed-col-driver results-driver-clickable" data-driver-id="${driver.id}">
                <img src="${getTeamLogo(displayTeam)}" class="results-team-logo" onerror="this.style.display='none'">
                <img src="Images/Flags/${driver.country}.svg" title="${getCountryName(driver.country)}" class="results-flag">
                <span class="driver-fullname">${driver.name}</span>
                <span class="driver-shortname">${driver.namem}</span>
            </div>
        </div>`;
    });
    fixedPart.innerHTML = fixedHTML;
    
    // Правая скроллящаяся часть
    const scrollPart = document.createElement('div');
    scrollPart.className = 'detailed-scroll-part';
    
    let scrollHTML = '<div class="detailed-header-row">';
    allGPs.forEach(gpId => {
        const country = getGPCountry(gpId);
        const noResults = !hasRealResults(gpId, false);
        scrollHTML += `<div class="detailed-cell gp-col ${noResults ? 'future-gp' : ''}"><img src="Images/Flags/${country}.svg" title="${getCountryName(country)}" class="results-flag"></div>`;
    });
    scrollHTML += '<div class="detailed-cell sum-col">Σ</div></div>';
    
    sorted.forEach((entry, i) => {
        const driver = findDriverById(entry.driver);
        if (!driver) return;
        
        // Используем функцию для определения команды
        const displayTeam = getDisplayTeamForDriver(driver, false);
        const dimmed = filterTeam && displayTeam !== filterTeam;
        
        scrollHTML += `<div class="detailed-data-row ${dimmed ? 'filtered-out' : ''}" data-driver-id="${entry.driver}" data-row-index="${i}">`;
        
        let total = 0;
        allGPs.forEach((gpId, colIndex) => {
            const results = detailedResults[gpId] || {};
            const value = getDriverResultValue(results, entry.driver);
            const gpTeam = getDriverResultTeam(results, entry.driver, displayTeam);
            
            const isDNF = value === 'dnf';
            const isDNS = value === 'dns';
            const isDSQ = value === 'dsq';
            const isDNP = value === 'dnp';
            
            const pts = (!isDNF && !isDNS && !isDSQ && !isDNP && typeof value === 'number') ? value : 0;
            total += pts;
            const noResults = !hasRealResults(gpId, false);
            
            const isDifferentTeam = gpTeam && gpTeam !== displayTeam;
            
            let cellClass = `detailed-cell gp-col ${noResults ? 'future-gp' : ''}`;
            if (isDifferentTeam) {
                cellClass += ' different-team';
            }
            
            if (isDNF) scrollHTML += `<div class="${cellClass} dnf" data-col="${colIndex}" data-gp-team="${gpTeam || ''}">DNF</div>`;
            else if (isDNS) scrollHTML += `<div class="${cellClass} dns" data-col="${colIndex}" data-gp-team="${gpTeam || ''}">DNS</div>`;
            else if (isDSQ) scrollHTML += `<div class="${cellClass} dsq" data-col="${colIndex}" data-gp-team="${gpTeam || ''}">DSQ</div>`;
            else if (isDNP) scrollHTML += `<div class="${cellClass} dnp" data-col="${colIndex}" data-gp-team="${gpTeam || ''}">DNP</div>`;
            else scrollHTML += `<div class="${cellClass}" data-col="${colIndex}" data-gp-team="${gpTeam || ''}">${pts > 0 ? pts : '-'}</div>`;
        });
        
        const sprintEntry = sprintStandings.find(s => s.driver === entry.driver);
        const sprintPoints = sprintEntry ? sprintEntry.points : 0;
        const combinedTotal = total + sprintPoints;
        
        scrollHTML += `<div class="detailed-cell sum-col" title="Гонки: ${total} + Спринты: ${sprintPoints}" data-col="sum">${combinedTotal}</div></div>`;
    });
    scrollPart.innerHTML = scrollHTML;
    
    tableContainer.appendChild(fixedPart);
    tableContainer.appendChild(scrollPart);
    wrapper.appendChild(tableContainer);

    // ПРИМЕЧАНИЕ О СИСТЕМЕ НАЧИСЛЕНИЯ ОЧКОВ
    const pointsNote = document.createElement('div');
    pointsNote.className = 'results-points-note';
    pointsNote.innerHTML = `
        <span class="points-note-icon">🛈 </span>
        <span class="points-note-text">Система начисления очков: <span>1:25 • 2:18 • 3:15 • 4:12 • 5:10 • 6:8 • 7:6 • 8:4 • 9:2 • 10:1</span></span>
    `;
    wrapper.appendChild(pointsNote);
    
    // ПРИМЕЧАНИЕ О DNF/DNS/DSQ/DNP
    const statusNote = document.createElement('div');
    statusNote.className = 'results-points-note2';
    statusNote.innerHTML = `
        <span class="points-note-icon2">🛈</span>
        <span class="points-note-text2">
            <span class="dnf-tag">DNF</span> — Did Not Finish (не финишировал)<br>
            <span class="dns-tag">DNS</span> — Did Not Start (не стартовал)<br>
            <span class="dsq-tag">DSQ</span> — Disqualified (дисквалифицирован)<br>
            <span class="dnp-tag">DNP</span> — Did Not Participate (не участвовал)
        </span>
    `;
    wrapper.appendChild(statusNote);

    container.appendChild(wrapper);
    
    // Добавляем обработчики событий после рендеринга
    addHoverHandlers(fixedPart, scrollPart);
}

function renderSprintDetailedTable(container, filterTeam) {
    const wrapper = document.createElement('div');
    wrapper.className = 'results-section-block';
    
    // Заголовок и кнопка
    const headerRow = document.createElement('div');
    headerRow.className = 'results-header-row';
    headerRow.innerHTML = `
        <h3 class="results-table-title">Спринтерский зачёт — по этапам</h3>
        <button class="results-detail-btn active" data-table="sprint">Скрыть</button>
    `;
    wrapper.appendChild(headerRow);
    
    const allSPs = getAllSprintGPs();
    // Используем sprintStandings (уже отсортированы)
    const sorted = [...sprintStandings];
    
    const tableContainer = document.createElement('div');
    tableContainer.className = 'detailed-table-container';
    
    // Левая фиксированная часть
    const fixedPart = document.createElement('div');
    fixedPart.className = 'detailed-fixed-part';
    
    let fixedHTML = '<div class="detailed-header-row"><div class="detailed-cell fixed-col-pos">#</div><div class="detailed-cell fixed-col-driver">Пилот</div></div>';
    
    sorted.forEach((entry, i) => {
        const driver = findDriverById(entry.driver);
        if (!driver) return;
        
        // Используем функцию для определения команды (для спринтов)
        const displayTeam = getDisplayTeamForDriver(driver, true);
        
        const dimmed = filterTeam && displayTeam !== filterTeam;
        fixedHTML += `<div class="detailed-data-row ${dimmed ? 'filtered-out' : ''}" data-driver-id="${entry.driver}" data-row-index="${i}">
            <div class="detailed-cell fixed-col-pos">${i + 1}</div>
            <div class="detailed-cell fixed-col-driver results-driver-clickable" data-driver-id="${driver.id}">
                <img src="${getTeamLogo(displayTeam)}" class="results-team-logo" onerror="this.style.display='none'">
                <img src="Images/Flags/${driver.country}.svg" title="${getCountryName(driver.country)}" class="results-flag">
                <span class="driver-fullname">${driver.name}</span>
                <span class="driver-shortname">${driver.namem}</span>
            </div>
        </div>`;
    });
    fixedPart.innerHTML = fixedHTML;
    
    // Правая скроллящаяся часть
    const scrollPart = document.createElement('div');
    scrollPart.className = 'detailed-scroll-part';
    
    let scrollHTML = '<div class="detailed-header-row">';
    allSPs.forEach(gpId => {
        const country = getGPCountry(gpId);
        const noResults = !hasRealResults(gpId, true);
        scrollHTML += `<div class="detailed-cell gp-col ${noResults ? 'future-gp' : ''}"><img src="Images/Flags/${country}.svg" title="${getCountryName(country)}" class="results-flag"></div>`;
    });
    scrollHTML += '<div class="detailed-cell sum-col">Σ</div></div>';
    
    sorted.forEach((entry, i) => {
        const driver = findDriverById(entry.driver);
        if (!driver) return;
        
        // Используем функцию для определения команды (для спринтов)
        const displayTeam = getDisplayTeamForDriver(driver, true);
        const dimmed = filterTeam && displayTeam !== filterTeam;
        
        scrollHTML += `<div class="detailed-data-row ${dimmed ? 'filtered-out' : ''}" data-driver-id="${entry.driver}" data-row-index="${i}">`;
        
        let total = 0;
		allSPs.forEach((gpId, colIndex) => {
			const results = detailedSprintResults[gpId] || {};
			const value = getDriverResultValue(results, entry.driver);
			const gpTeam = getDriverResultTeam(results, entry.driver, displayTeam);
			
			// Если пилота нет в результатах спринта - показываем "-"
			if (value === undefined || value === null || value === "") {
				const noResults = !hasRealResults(gpId, true);
				scrollHTML += `<div class="detailed-cell gp-col ${noResults ? 'future-gp' : ''}" data-col="${colIndex}">-</div>`;
				return;
			}
			
			const isDNF = value === 'dnf';
			const isDNS = value === 'dns';
			const isDSQ = value === 'dsq';
			const isDNP = value === 'dnp'; // НОВОЕ: проверка на DNP
			
			// Если значение 0 (число) - показываем прочерк
			if (typeof value === 'number' && value === 0) {
				const noResults = !hasRealResults(gpId, true);
				scrollHTML += `<div class="detailed-cell gp-col ${noResults ? 'future-gp' : ''}" data-col="${colIndex}" data-gp-team="${gpTeam || ''}">-</div>`;
				return;
			}
			
			// Если значение больше 0 - добавляем к сумме и показываем
			if (typeof value === 'number' && value > 0) {
				total += value;
				const noResults = !hasRealResults(gpId, true);
				const isDifferentTeam = gpTeam && gpTeam !== displayTeam;
				
				let cellClass = `detailed-cell gp-col ${noResults ? 'future-gp' : ''}`;
				if (isDifferentTeam) {
					cellClass += ' different-team';
				}
				
				scrollHTML += `<div class="${cellClass}" data-col="${colIndex}" data-gp-team="${gpTeam || ''}">${value}</div>`;
				return;
			}
			
			// Обработка DNF/DNS/DSQ/DNP
			const noResults = !hasRealResults(gpId, true);
			const isDifferentTeam = gpTeam && gpTeam !== displayTeam;
			
			let cellClass = `detailed-cell gp-col ${noResults ? 'future-gp' : ''}`;
			if (isDifferentTeam) {
				cellClass += ' different-team';
			}
			
			if (isDNF) scrollHTML += `<div class="${cellClass} dnf" data-col="${colIndex}" data-gp-team="${gpTeam || ''}">DNF</div>`;
			else if (isDNS) scrollHTML += `<div class="${cellClass} dns" data-col="${colIndex}" data-gp-team="${gpTeam || ''}">DNS</div>`;
			else if (isDSQ) scrollHTML += `<div class="${cellClass} dsq" data-col="${colIndex}" data-gp-team="${gpTeam || ''}">DSQ</div>`;
			else if (isDNP) scrollHTML += `<div class="${cellClass} dnp" data-col="${colIndex}" data-gp-team="${gpTeam || ''}">DNP</div>`; // НОВОЕ
			else scrollHTML += `<div class="${cellClass}" data-col="${colIndex}" data-gp-team="${gpTeam || ''}">-</div>`;
		});
        
        scrollHTML += `<div class="detailed-cell sum-col" data-col="sum">${total}</div></div>`;
    });
    scrollPart.innerHTML = scrollHTML;
    
    tableContainer.appendChild(fixedPart);
    tableContainer.appendChild(scrollPart);
    wrapper.appendChild(tableContainer);
    
    // ПРИМЕЧАНИЕ О СИСТЕМЕ НАЧИСЛЕНИЯ ОЧКОВ
    const pointsNote = document.createElement('div');
    pointsNote.className = 'results-points-note';
    pointsNote.innerHTML = `
        <span class="points-note-icon">🛈 </span>
        <span class="points-note-text">Система начисления очков: <span>1:8 • 2:7 • 3:6 • 4:5 • 5:4 • 6:3 • 7:2 • 8:1</span></span>
    `;
    wrapper.appendChild(pointsNote);
    
    // ПРИМЕЧАНИЕ О DNF/DNS/DSQ
	const statusNote = document.createElement('div');
	statusNote.className = 'results-points-note2';
	statusNote.innerHTML = `
		<span class="points-note-icon2">🛈</span>
		<span class="points-note-text2">
			<span class="dnf-tag">DNF</span> — Did Not Finish (не финишировал)<br>
			<span class="dns-tag">DNS</span> — Did Not Start (не стартовал)<br>
			<span class="dsq-tag">DSQ</span> — Disqualified (дисквалифицирован)<br>
			<span class="dnp-tag">DNP</span> — Did Not Participate (не участвовал)
		</span>
	`;
	wrapper.appendChild(statusNote);
    
    container.appendChild(wrapper);
    
    // Добавляем обработчики событий после рендеринга
    addHoverHandlers(fixedPart, scrollPart);
}

function addHoverHandlers(fixedPart, scrollPart) {
    const fixedRows = fixedPart.querySelectorAll('.detailed-data-row');
    const scrollRows = scrollPart.querySelectorAll('.detailed-data-row');
    const headerCells = scrollPart.querySelectorAll('.detailed-header-row .gp-col');
    const dataRows = scrollPart.querySelectorAll('.detailed-data-row');
    const allCells = scrollPart.querySelectorAll('.detailed-data-row .detailed-cell');
    
    // Функция для очистки всех подсветок
    function clearAllHighlights() {
        fixedRows.forEach(row => row.classList.remove('hovered-row'));
        scrollRows.forEach(row => row.classList.remove('hovered-row'));
        
        // Очищаем подсветку ячеек
        scrollPart.querySelectorAll('.detailed-cell').forEach(cell => {
            cell.classList.remove('highlighted-cell', 'column-highlighted');
        });
        
        // Очищаем подсветку хедера
        headerCells.forEach(cell => {
            cell.classList.remove('column-header-highlighted', 'column-highlighted');
        });
    }
    
    // Функция для подсветки колонки
    function highlightColumn(colIndex) {
        // Подсвечиваем хедер
        headerCells.forEach((headerCell, index) => {
            if (index === colIndex) {
                headerCell.classList.add('column-header-highlighted');
            }
        });
        
        // Подсвечиваем все ячейки в этой колонке
        dataRows.forEach(row => {
            const cell = row.querySelector(`.gp-col[data-col="${colIndex}"]`);
            if (cell) {
                cell.classList.add('column-highlighted');
            }
        });
    }
    
    // Обработчики для хедера ГП (подсветка всей колонки)
    headerCells.forEach((headerCell, colIndex) => {
        headerCell.addEventListener('mouseenter', function(e) {
            clearAllHighlights();
            highlightColumn(colIndex);
            this.classList.add('column-header-highlighted');
        });
        
        headerCell.addEventListener('mouseleave', function(e) {
            clearAllHighlights();
        });
    });
    
    // Обработчики для строк фиксированной части
    fixedRows.forEach((fixedRow, index) => {
        fixedRow.addEventListener('mouseenter', function(e) {
            clearAllHighlights();
            
            // Подсвечиваем строки в обеих частях
            this.classList.add('hovered-row');
            if (scrollRows[index]) {
                scrollRows[index].classList.add('hovered-row');
            }
        });
        
        fixedRow.addEventListener('mouseleave', function() {
            clearAllHighlights();
        });
    });
    
    // Обработчики для ячеек в скроллящейся части
    allCells.forEach(cell => {
        cell.addEventListener('mouseenter', function(e) {
            e.stopPropagation();
            clearAllHighlights();
            
            const row = this.closest('.detailed-data-row');
            const rowIndex = row ? row.dataset.rowIndex : null;
            const colIndex = this.dataset.col;
            
            // Подсвечиваем строки в обеих частях
            if (row) {
                row.classList.add('hovered-row');
                if (fixedRows[rowIndex]) {
                    fixedRows[rowIndex].classList.add('hovered-row');
                }
            }
            
            // Подсвечиваем колонку
            if (colIndex !== undefined && colIndex !== 'sum') {
                highlightColumn(parseInt(colIndex));
            }
            
            // Подсвечиваем саму ячейку
            this.classList.add('highlighted-cell');
        });
        
        cell.addEventListener('mouseleave', function(e) {
            e.stopPropagation();
            clearAllHighlights();
        });
    });
    
    // Обработчики для всей строки в скроллящейся части
    scrollRows.forEach((scrollRow, index) => {
        scrollRow.addEventListener('mouseenter', function(e) {
            if (e.target === this) {
                clearAllHighlights();
                this.classList.add('hovered-row');
                if (fixedRows[index]) {
                    fixedRows[index].classList.add('hovered-row');
                }
            }
        });
        
        scrollRow.addEventListener('mouseleave', function(e) {
            if (e.target === this && !this.contains(e.relatedTarget)) {
                clearAllHighlights();
            }
        });
    });
    
    // Добавляем обработчик для снятия подсветки при клике
    scrollPart.addEventListener('click', function(e) {
        const cell = e.target.closest('.detailed-cell');
        if (cell && cell.classList.contains('highlighted-cell')) {
            // Можно оставить или убрать подсветку — оставляем
        }
    });
}

function renderConstructorStandingsPanel(container, filterTeam) {
    container.innerHTML = '<h3 class="constructor-panel-title">Кубок конструкторов</h3>';
    
    const grid = document.createElement('div');
    grid.className = 'constructor-grid';
    
    const standings = calculateConstructorStandings();
    
    // 1 место — по центру вверху
    if (standings.length >= 1) {
        const topRow = createConstructorRow(standings[0], 1, filterTeam);
        topRow.className += ' constructor-row-top';
        container.appendChild(topRow);
    }
    
    // Левая колонка (2-6) — индексы 1-5
    const leftCol = document.createElement('div');
    leftCol.className = 'constructor-col';
    
    for (let i = 1; i <= 5 && i < standings.length; i++) {
        const row = createConstructorRow(standings[i], i + 1, filterTeam);
        leftCol.appendChild(row);
    }
    
    // Правая колонка (7-11) — индексы 6-10
    const rightCol = document.createElement('div');
    rightCol.className = 'constructor-col';
    
    for (let i = 6; i <= 10 && i < standings.length; i++) {
        const row = createConstructorRow(standings[i], i + 1, filterTeam);
        rightCol.appendChild(row);
    }
    
    grid.appendChild(leftCol);
    grid.appendChild(rightCol);
    container.appendChild(grid);
    
    // ДОБАВЛЯЕМ НОВУЮ ТАБЛИЦУ ПОБЕДИТЕЛЕЙ
    // ========================================
    const winnersDiv = document.createElement('div');
    winnersDiv.className = 'race-winners-section';
    
    const winnersTitle = document.createElement('h4');
    winnersTitle.className = 'race-winners-title';
    winnersTitle.textContent = 'Победители ГП сезона';
    winnersDiv.appendChild(winnersTitle);
    
    const winnersList = document.createElement('div');
    winnersList.className = 'race-winners-list';
    
    const winnersData = calculateRaceWinners();
    
    if (winnersData.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'race-winners-empty';
        emptyMsg.textContent = 'Нет данных о победителях';
        winnersList.appendChild(emptyMsg);
    } else {
        winnersData.forEach((winner, index) => {
            const row = document.createElement('div');
            row.className = 'race-winner-row';
            row.dataset.driverId = winner.driver.id; // Добавляем data-атрибут
            
            // Лого команды
            const teamLogo = document.createElement('img');
            teamLogo.className = 'race-winner-logo';
            teamLogo.src = getTeamLogo(winner.driver.team);
            teamLogo.onerror = function() { this.style.display = 'none'; };
            
            // Флаг
            const flag = document.createElement('img');
            flag.className = 'race-winner-flag';
            flag.src = `Images/Flags/${winner.driver.country}.svg`;
            flag.title = getCountryName(winner.driver.country);
            flag.onerror = function() { this.style.display = 'none'; };
            
            // Имя пилота
            const name = document.createElement('span');
            name.className = 'race-winner-name';
            name.textContent = winner.driver.name;
            
            // Количество побед
            const wins = document.createElement('span');
            wins.className = 'race-winner-wins';
            wins.textContent = winner.wins;
            
            row.appendChild(teamLogo);
            row.appendChild(flag);
            row.appendChild(name);
            row.appendChild(wins);
            
            // ДОБАВЛЯЕМ ОБРАБОТЧИК КЛИКА ДЛЯ ОТКРЫТИЯ МОДАЛЬНОГО ОКНА ПИЛОТА
            row.addEventListener('click', function(e) {
                e.stopPropagation();
                const driver = findDriverById(this.dataset.driverId);
                if (driver) {
                    openDriverModal(driver);
                }
            });
            
            // Добавляем курсор pointer для визуального отклика
            row.style.cursor = 'pointer';
            
            winnersList.appendChild(row);
        });
    }
    
    winnersDiv.appendChild(winnersList);
    container.appendChild(winnersDiv);
    
    // Добавляем обработчик правого клика для всех строк команд
    container.addEventListener('contextmenu', (e) => {
        const row = e.target.closest('.constructor-row');
        if (!row) return;
        
        e.preventDefault();
        const teamName = row.dataset.team;
        const teamData = getTeamData(teamName);
        if (teamData) {
            openTeamModal(teamData);
        }
    });
}

function createConstructorRow(team, pos, filterTeam) {
    const row = document.createElement('div');
    row.className = 'constructor-row';
    row.dataset.team = team.team;
    row.style.setProperty('--team-color', team.color);
    if (filterTeam === team.team) row.classList.add('active');
    if (filterTeam && team.team !== filterTeam) row.classList.add('filtered-out');
    row.innerHTML = `
        <span class="constructor-pos">${pos}</span>
        <img src="${getTeamLogo(team.team)}" class="constructor-logo" onerror="this.style.display='none'">
        <span class="constructor-name">${team.team}</span>
        <span class="constructor-points">${team.points}</span>`;
    return row;
}

function getDriverResultValue(results, driverId) {
    const value = results[driverId];
    // Если это объект с полем points
    if (value && typeof value === 'object' && value.points !== undefined) {
        return value.points;
    }
    return value;
}

function getDriverResultTeam(results, driverId, defaultTeam) {
    const value = results[driverId];
    // Если это объект с полем team
    if (value && typeof value === 'object' && value.team) {
        return value.team;
    }
    return defaultTeam;
}

function getDriverTeamForGP(driverId, gpId, isSprint = false) {
    const results = isSprint ? detailedSprintResults[gpId] : detailedResults[gpId];
    if (!results) return null;
    
    const driver = findDriverById(driverId);
    const defaultTeam = driver ? driver.team : null;
    
    return getDriverResultTeam(results, driverId, defaultTeam);
}

function getDisplayTeamForDriver(driver, isSprint = false) {
    // Если пилот не резервист - возвращаем его команду
    if (driver.team.toLowerCase() !== 'резерв' && driver.team.toLowerCase() !== 'reserve') {
        return driver.team;
    }
    
    // Для резервистов ищем команду в результатах
    const results = isSprint ? detailedSprintResults : detailedResults;
    const allGPs = isSprint ? getAllSprintGPs() : getAllGPs();
    
    // Сначала проверяем специальные указания в данных
    for (const gpId of allGPs) {
        const gpResults = results[gpId];
        if (gpResults) {
            const gpTeam = getDriverResultTeam(gpResults, driver.id, null);
            if (gpTeam) {
                return gpTeam;
            }
        }
    }
    
    // Если ничего не нашли, возвращаем "Резерв"
    return 'Резерв';
}

function getDriverPointsForGP(driverId, gpId, isSprint = false) {
    const results = isSprint ? detailedSprintResults[gpId] : detailedResults[gpId];
    if (!results) return undefined;
    
    return getDriverResultValue(results, driverId);
}

function hasRealResults(gpId, isSprint = false) {
    const results = isSprint ? detailedSprintResults[gpId] : detailedResults[gpId];
    if (!results) return false;
    return Object.keys(results).some(key => {
        if (key === "000") return false;
        const value = results[key];
        // Проверяем, что значение существует и не является пустым
        if (value === undefined || value === null || value === "") return false;
        // Если это объект с points, проверяем что points не undefined
        if (typeof value === 'object' && value.points !== undefined) return true;
        return true;
    });
}

function getAllDriversWithResults(isSprint = false) {
    const results = isSprint ? detailedSprintResults : detailedResults;
    const driversSet = new Set();
    
    // Добавляем всех пилотов из driversData
    driversData.forEach(driver => {
        if (driver.team.toLowerCase() !== 'резерв' && driver.team.toLowerCase() !== 'reserve') {
            driversSet.add(driver.id);
        }
    });
    
    // Добавляем резервистов, у которых есть результаты
    Object.values(results).forEach(gpResults => {
        Object.keys(gpResults).forEach(key => {
            if (key !== "000") {
                driversSet.add(key);
            }
        });
    });
    
    return Array.from(driversSet);
}

function getDriverResultValue(results, driverId) {
    const value = results[driverId];
    // Если это объект с полем points
    if (value && typeof value === 'object' && value.points !== undefined) {
        return value.points;
    }
    return value;
}

function getDriverResultTeam(results, driverId, defaultTeam) {
    const value = results[driverId];
    // Если это объект с полем team
    if (value && typeof value === 'object' && value.team) {
        return value.team;
    }
    return defaultTeam;
}

function getDisplayTeamForDriver(driver, isSprint = false) {
    // Если пилот не резервист - возвращаем его команду
    if (driver.team.toLowerCase() !== 'резерв' && driver.team.toLowerCase() !== 'reserve') {
        return driver.team;
    }
    
    // Для резервистов ищем команду в результатах
    const results = isSprint ? detailedSprintResults : detailedResults;
    const allGPs = isSprint ? getAllSprintGPs() : getAllGPs();
    
    // Сначала проверяем специальные указания в данных
    for (const gpId of allGPs) {
        const gpResults = results[gpId];
        if (gpResults) {
            const gpTeam = getDriverResultTeam(gpResults, driver.id, null);
            if (gpTeam) {
                return gpTeam;
            }
        }
    }
    
    // Если ничего не нашли, возвращаем "Резерв"
    return 'Резерв';
}

function getDriverTeamForGP(driverId, gpId, isSprint = false) {
    const results = isSprint ? detailedSprintResults[gpId] : detailedResults[gpId];
    if (!results) return null;
    
    const driver = findDriverById(driverId);
    const defaultTeam = driver ? driver.team : null;
    
    return getDriverResultTeam(results, driverId, defaultTeam);
}

function getDriverPointsForGP(driverId, gpId, isSprint = false) {
    const results = isSprint ? detailedSprintResults[gpId] : detailedResults[gpId];
    if (!results) return undefined;
    
    return getDriverResultValue(results, driverId);
}

function hasRealResults(gpId, isSprint = false) {
    const results = isSprint ? detailedSprintResults[gpId] : detailedResults[gpId];
    if (!results) return false;
    return Object.keys(results).some(key => {
        if (key === "000") return false;
        const value = results[key];
        // Проверяем, что значение существует и не является пустым
        if (value === undefined || value === null || value === "") return false;
        // Если это объект с points, проверяем что points не undefined
        if (typeof value === 'object' && value.points !== undefined) return true;
        return true;
    });
}

function compareDrivers(a, b) {
    // Сначала сравниваем по очкам (по убыванию)
    if (b.points !== a.points) {
        return b.points - a.points;
    }
    
    // Если очки равны, сортируем по позиции команды в Кубке конструкторов
    const driverA = findDriverById(a.driver);
    const driverB = findDriverById(b.driver);
    if (!driverA || !driverB) return 0;
    
    // Получаем команду для отображения (учитываем резервистов)
    const teamA = getDisplayTeamForDriver(driverA, false);
    const teamB = getDisplayTeamForDriver(driverB, false);
    
    const teamPosA = getTeamPosition(teamA);
    const teamPosB = getTeamPosition(teamB);
    
    if (teamPosA !== teamPosB) {
        return teamPosA - teamPosB;
    }
    
    // Если команда одна и та же, сортируем по номеру пилота
    return Number(driverA.number) - Number(driverB.number);
}