const driversStandings = [
    { position: 1, name: "Оскар Пиастри", country: "au", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109", points: 309},
    { position: 2, name: "Ландо Норрис", country: "gb", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109", points: 275},
    { position: 3, name: "Шарль Леклер", country: "mc", team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f", points: 151},
    { position: 4, name: "Льюис Хэмильтон", country: "gb", team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f", points: 109},
    { position: 5, name: "Джордж Рассел", country: "gb", team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272", points: 184},
    { position: 6, name: "Кими Антонелли", country: "it", team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272", points: 64},
    { position: 7, name: "Макс Ферстаппен", country: "nl", team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#313247", points: 205},
    { position: 8, name: "Юки Цунода", country: "jp", team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#313247", points: 12},
    { position: 9, name: "Карлос Сайнс", country: "es", team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc", points: 16},
    { position: 10, name: "Александр Албон", country: "th", team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc", points: 64},
    { position: 11, name: "Нико Хюлькенберг", country: "de", team: "Sauber", teamLogo: "Sauber-m.png", teamColor: "#21ad17", points: 37},
    { position: 12, name: "Габриэл Бортолето", country: "br", team: "Sauber", teamLogo: "Sauber-m.png", teamColor: "#21ad17", points: 14},
    { position: 13, name: "Лиам Лоусон", country: "nz", team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#ddebdd", points: 20},
    { position: 14, name: "Исаак Хаджар", country: "fr", team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#ddebdd", points: 37},
    { position: 15, name: "Лэнс Стролл", country: "ca", team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00", points: 32},
    { position: 16, name: "Фернандо Алонсо", country: "es", team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00", points: 30},
    { position: 17, name: "Эстебан Окон", country: "fr", team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d", points: 28},
    { position: 18, name: "Оливер Берман", country: "gb", team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d", points: 16},
    { position: 19, name: "Пьер Гасли", country: "fr", team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c", points: 20},
    { position: 20, name: "Франко Колапинто", country: "ar", team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c", points: 0},
];

const constructorsStandings = [
    { position: 1, team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109"},
    { position: 2, team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f"},
    { position: 3, team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272"},
    { position: 4, team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#313247", points: -3},
    { position: 5, team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc"},
    { position: 6, team: "Sauber", teamLogo: "Sauber-m.png", teamColor: "#21ad17"},
    { position: 7, team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#ddebdd", points: 3},
    { position: 8, team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00"},
    { position: 9, team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d"},
    { position: 10, team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c"},
];

const sprintStandings = [
    { position: 1, name: "Оскар Пиастри", country: "au", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109", points: 21},
    { position: 2, name: "Ландо Норрис", country: "gb", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109", points: 15},
    { position: 3, name: "Шарль Леклер", country: "mc", team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f", points: 9},
    { position: 4, name: "Льюис Хэмильтон", country: "gb", team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f", points: 14},
    { position: 5, name: "Джордж Рассел", country: "gb", team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272", points: 10},
    { position: 6, name: "Кими Антонелли", country: "it", team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272", points: 4},
    { position: 7, name: "Макс Ферстаппен", country: "nl", team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#313247", points: 14},
    { position: 8, name: "Юки Цунода", country: "jp", team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#313247", points: 6},
    { position: 9, name: "Карлос Сайнс", country: "es", team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc", points: 3},
    { position: 10, name: "Александр Албон", country: "th", team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc", points: 0},
    { position: 11, name: "Нико Хюлькенберг", country: "de", team: "Sauber", teamLogo: "Sauber-m.png", teamColor: "#21ad17", points: 0},
    { position: 12, name: "Габриэл Бортолето", country: "br", team: "Sauber", teamLogo: "Sauber-m.png", teamColor: "#21ad17", points: 0},
    { position: 13, name: "Лиам Лоусон", country: "nz", team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#ddebdd", points: 0},
    { position: 14, name: "Исаак Хаджар", country: "fr", team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#ddebdd", points: 0},
    { position: 15, name: "Лэнс Стролл", country: "ca", team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00", points: 0},
    { position: 16, name: "Фернандо Алонсо", country: "es", team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00", points: 0},
    { position: 17, name: "Эстебан Окон", country: "fr", team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d", points: 0},
    { position: 18, name: "Оливер Берман", country: "gb", team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d", points: 1},
    { position: 19, name: "Пьер Гасли", country: "fr", team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c", points: 2},
    { position: 20, name: "Франко Колапинто", country: "ar", team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c", points: 0},
];

const raceWinners = [
    { grandPrix: "Китай Бахрейн Саудовская Аравия Майами Испания Бельгия Нидерланды", position: "1", winner: "Оскар Пиастри", country: "au", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109"},
    { grandPrix: "Австралия Манако Австрия Великобритания Венгрия", position: "2", winner: "Ландо Норрис", country: "gb", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109"},
    { grandPrix: "Япония Эмилия-Романья", position: "3", winner: "Макс Ферстаппен", country: "nl", team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#313247"},
    { grandPrix: "Канада", position: "4", winner: "Джордж Рассел", country: "gb", team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272"},
];

function calculateTeamPoints() {
  const teamPoints = {};
  const teamAdditionalPoints = {};

  // Собираем дополнительные очки для команд
  constructorsStandings.forEach(team => {
    if (team.points) {
      teamAdditionalPoints[team.team] = team.points;
    }
  });

  // Суммируем очки всех пилотов команды
  driversStandings.forEach(driver => {
    if (!teamPoints[driver.team]) {
      teamPoints[driver.team] = 0;
    }
    teamPoints[driver.team] += driver.points;
  });

  // Обновляем массив constructorsStandings
  constructorsStandings.forEach(team => {
    const basePoints = teamPoints[team.team] || 0;
    const additionalPoints = teamAdditionalPoints[team.team] || 0;
    team.points = basePoints + additionalPoints;
  });

  // Сортируем команды по очкам
  constructorsStandings.sort((a, b) => b.points - a.points);
  
  // Обновляем позиции
  constructorsStandings.forEach((team, index) => {
    team.position = index + 1;
  });
}

// Вызываем расчёт очков при загрузке
calculateTeamPoints();

function renderResults() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="results-container">
            <div class="standings-grid">
                <div class="drivers-standings" id="driversStandings"></div>
                <div class="constructors-standings" id="constructorsStandings"></div>
                <div class="sprint-standings" id="sprintStandings"></div>
				<div class="race-winners" id="raceWinners"></div>
            </div>
        </div>
    `;

    renderDriversStandings();
    renderConstructorsStandings();
    renderSprintStandings();
	renderRaceWinners();

    // Выделение пилотов при выборе команды
    document.querySelectorAll('.constructor-row').forEach(row => {
        row.addEventListener('click', () => {
            const team = row.getAttribute('data-team');
            highlightTeamDrivers(team);
        });
    });
}

function renderDriversStandings() {
    const container = document.getElementById('driversStandings');
    const sortedDrivers = [...driversStandings]
        .sort((a, b) => b.points - a.points)
        .map((driver, index) => ({ ...driver, position: index + 1 }));
    
    let html = `<h2>Личный зачёт</h2><div class="drivers-columns">`;
    
    // Разделение на 2 колонки
    for (let i = 0; i < 2; i++) {
        html += `<div class="drivers-column">`;
        sortedDrivers.slice(i * 10, (i + 1) * 10).forEach(driver => {
            html += `
                <div class="driver-row" data-team="${driver.team}" data-team-color="${driver.teamColor}" style="border-left-color: ${driver.teamColor}">
                    <div class="driver-info">
                        <span class="position">${driver.position}</span>
                        <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" class="flag">
                        <span class="name">${driver.name}</span>
                        <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="team-logo">
                        <span class="team">${driver.team}</span>
                    </div>
                    <span class="points">${driver.points}</span>
                </div>
            `;
        });
        html += `</div>`;
    }
    
    html += `</div>`;
    container.innerHTML = html;

    // Анимация при наведении
    document.querySelectorAll('.driver-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'translateX(10px)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'translateX(0)';
        });
    });
}

function renderConstructorsStandings() {
    const container = document.getElementById('constructorsStandings');
    const sortedTeams = [...constructorsStandings]
        .sort((a, b) => b.points - a.points)
        .map((team, index) => ({ ...team, position: index + 1 }));
    
    let html = `<h2>Кубок конструкторов</h2><div class="constructors-list">`;
    
    sortedTeams.slice(0, 10).forEach(team => {
        html += `
            <div class="constructor-row" data-team="${team.team}" data-team-color="${team.teamColor}" style="border-left-color: ${team.teamColor}">
                <div class="constructor-info">
                    <span class="position">${team.position}</span>
                    <img src="Images/Teams/${team.teamLogo}" alt="${team.team}" class="team-logo">
                    <span class="team">${team.team}</span>
                </div>
                <span class="points">${team.points}</span>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;

    // Анимация при наведении
    document.querySelectorAll('.constructor-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'translateX(10px)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'translateX(0)';
        });
    });
}

function renderSprintStandings() {
    const container = document.getElementById('sprintStandings');
    const sortedSprint = [...sprintStandings]
        .sort((a, b) => b.points - a.points)
        .map((driver, index) => ({ ...driver, position: index + 1 }));
    
    let html = `<h2>Спринтерская гонка</h2><div class="sprint-columns">`;
    
    // Разделение на 2 колонки
    for (let i = 0; i < 2; i++) {
        html += `<div class="sprint-column">`;
        sortedSprint.slice(i * 10, (i + 1) * 10).forEach(driver => {
            html += `
                <div class="sprint-row" data-team="${driver.team}" data-team-color="${driver.teamColor}" style="border-left-color: ${driver.teamColor}">
                    <div class="driver-info">
                        <span class="position">${driver.position}</span>
                        <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" class="flag">
                        <span class="name">${driver.name}</span>
                        <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="team-logo">
                        <span class="team">${driver.team}</span>
                    </div>
                    <span class="points">${driver.points}</span>
                </div>
            `;
        });
        html += `</div>`;
    }
    
    html += `</div>`;
    container.innerHTML = html;

    // Анимация при наведении
    document.querySelectorAll('.sprint-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'translateX(10px)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'translateX(0)';
        });
    });
}

function renderRaceWinners() {
    const container = document.getElementById('raceWinners');
    let html = `<h2>Чемпионы этапов</h2><div class="winners-list">`;
    
    raceWinners.forEach(race => {
        html += `
            <div class="winner-row" data-team="${race.team}">
                <div class="winner-info">
				    <span class="position">${race.position}</span>
					<img src="Images/Flags/${race.country}.svg" alt="${race.country}" class="flag">
                    <span class="winner-name">${race.winner}</span>
                    <img src="Images/Teams/${race.teamLogo}" alt="${race.team}" class="team-logo">
                </div>
				<span class="grand-prix">${race.grandPrix}</span>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;

    // Анимация при наведении
    document.querySelectorAll('.winner-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'translateX(10px)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'translateX(0)';
        });
    });
}

function highlightTeamDrivers(team) {
    // Сброс предыдущего выделения
    document.querySelectorAll('.driver-row, .sprint-row').forEach(row => {
        row.style.opacity = '0.5';
        row.style.borderLeftColor = 'transparent';
    });

    // Выделение текущей команды
    document.querySelectorAll(`[data-team="${team}"]`).forEach(row => {
        const teamColor = row.getAttribute('data-team-color');
        row.style.opacity = '1';
        row.style.borderLeftColor = teamColor;
    });
}

if (window.location.hash === '#results') {
    renderResults();

}












