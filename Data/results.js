// Данные для таблиц
const standingsData = {
    drivers: [
        { position: 1, name: "Оскар Пиастри", team: "McLaren", points: 266, sprintPoints: 15, driverId: "piastri", flag: "au.svg", teamId: "McLaren", state: "Австралия"},
        { position: 2, name: "Ландо Норрис", team: "McLaren", points: 250, driverId: "norris", flag: "gb.svg", teamId: "McLaren", state: "Великобритания" },
        { position: 3, name: "Шарль Леклер", team: "Ferrari", points: 139, driverId: "leclerc", flag: "mc.svg", teamId: "Ferrari", state: "Манако" },
        { position: 4, name: "Льюис Хэмильтон", team: "Ferrari", points: 109, driverId: "hamilton", flag: "gb.svg", teamId: "Ferrari", state: "Великобритания" },
        { position: 5, name: "Джордж Рассел", team: "Mercedes", points: 157, driverId: "russell", flag: "gb.svg", teamId: "Mercedes", state: "Великобритания" },
        { position: 6, name: "Кими Антонелли", team: "Mercedes", points: 63, driverId: "antonelli", flag: "it.svg", teamId: "Mercedes", state: "Италия" },
	{ position: 7, name: "Макс Ферстаппен", team: "Red Bull", points: 185, driverId: "verstappen", flag: "nl.svg", teamId: "RedBull", state: "Нидерланды" },
        { position: 8, name: "Юки Цунода", team: "Red Bull", points: 10, driverId: "tsunoda", flag: "jp.svg", teamId: "RedBull", state: "Япония" },
	{ position: 9, name: "Карлос Сайнс", team: "Williams", points: 16, driverId: "sainz", flag: "es.svg", teamId: "Williams", state: "Испания" },
        { position: 10, name: "Александр Албон", team: "Williams", points: 54, driverId: "albon", flag: "th.svg", teamId: "Williams", state: "Тайвань" },
        { position: 11, name: "Нико Хюлькенберг", team: "Sauber", points: 37, driverId: "hulkenberg", flag: "de.svg", teamId: "Sauber", state: "Германия" },
        { position: 12, name: "Габриэл Бортолето", team: "Sauber", points: 6, driverId: "bortoleto", flag: "br.svg", teamId: "Sauber", state: "Бразилия" },
        { position: 13, name: "Лиам Лоусон", team: "Racing Bulls", points: 16, driverId: "lawson", flag: "nz.svg", teamId: "RacingBulls", state: "Новая Зеландия" },
        { position: 14, name: "Исаак Хаджар", team: "Racing Bulls", points: 22, driverId: "hadjar", flag: "fr.svg", teamId: "RacingBulls", state: "Франция" },
        { position: 15, name: "Лэнс Стролл", team: "Aston Martin", points: 20, driverId: "stroll", flag: "ca.svg", teamId: "AstonMartin", state: "Канада" },
        { position: 16, name: "Фернандо Алонсо", team: "Aston Martin", points: 16, driverId: "alonso", flag: "es.svg", teamId: "AstonMartin", state: "Испания" },
        { position: 17, name: "Эстебан Окон", team: "Haas", points: 27, driverId: "ocon", flag: "fr.svg", teamId: "Haas", state: "Франция" },
        { position: 18, name: "Оливер Берман", team: "Haas", points: 8, driverId: "bearman", flag: "gb.svg", teamId: "Haas", state: "Великобритания" },
        { position: 19, name: "Пьер Гасли", team: "Alpine", points: 20, driverId: "gasly", flag: "fr.svg", teamId: "Alpine", state: "Франция" },
        { position: 20, name: "Франко Колапинто", team: "Alpine", points: 0, driverId: "colapinto", flag: "ar.svg", teamId: "Alpine", state: "Аргентина" },
    ],
    
    constructors: [
        { position: 1, team: "McLaren", points: 516, teamId: "McLaren", logo: "McLaren" },
        { position: 2, team: "Ferrari", points: 248, teamId: "Ferrari", logo: "Ferrari" },
        { position: 3, team: "Mercedes", points: 220, teamId: "Mercedes", logo: "Mercedes" },
        { position: 4, team: "Red Bull", points: 192, teamId: "RedBull", logo: "Red Bull" },
        { position: 5, team: "Williams", points: 70, teamId: "Williams", logo: "Williams" },
        { position: 6, team: "Sauber", points: 43, teamId: "Sauber", logo: "Sauber" },
        { position: 7, team: "Racing Bulls", points: 41, teamId: "RacingBulls", logo: "Racing Bulls" },
        { position: 8, team: "Aston Martin", points: 36, teamId: "AstonMartin", logo: "Aston Martin" },
        { position: 9, team: "Haas", points: 35, teamId: "Haas", logo: "Haas" },
        { position: 10, team: "Alpine", points: 20, teamId: "Alpine", logo: "Alpine" },
    ]
};

// Функция для обновления позиций по очкам
function updatePositions() {
    // Сортируем пилотов по очкам
    standingsData.drivers.sort((a, b) => b.points - a.points);
    standingsData.drivers.forEach((driver, index) => {
        driver.position = index + 1;
    });
    
    // Сортируем команды по очкам
    standingsData.constructors.sort((a, b) => b.points - a.points);
    standingsData.constructors.forEach((team, index) => {
        team.position = index + 1;
    });
}

// Функция для выделения пилотов команды
function highlightTeamDrivers(teamId) {
    // Убираем предыдущее выделение
    document.querySelectorAll('.standing-row').forEach(row => {
        row.classList.remove('team-highlight', 'constructor-highlight');
    });
    
    // Добавляем выделение команде в кубке конструкторов
    const constructorRow = document.querySelector(`.team-${teamId}`);
    if (constructorRow) {
        constructorRow.classList.add('constructor-highlight');
        
        // Прокручиваем к команде, если она не видна
        const rect = constructorRow.getBoundingClientRect();
        const isVisible = (rect.top >= 0) && 
                        (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
        
        if (!isVisible) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const offsetPosition = constructorRow.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
 	   // Добавляем выделение в таблице спринта
	    document.querySelectorAll('#sprint-standings .standing-row').forEach(row => {
     	   row.classList.remove('team-highlight');
     	   const rowTeamId = row.querySelector('.team')?.getAttribute('data-team-id');
     		   if (rowTeamId === teamId) {
        	    row.classList.add('team-highlight');
     	 	  }
 	   });
	}
    
    // Находим и выделяем всех пилотов команды
    const teamDrivers = standingsData.drivers.filter(driver => driver.teamId === teamId);
    let firstHiddenDriver = null;
    
    teamDrivers.forEach(driver => {
        const driverRow = document.querySelector(`.driver-${driver.driverId}`);
        if (driverRow) {
            driverRow.classList.add('team-highlight');
            
            // Проверяем видимость только если еще не нашли первый скрытый
            if (!firstHiddenDriver) {
                const rect = driverRow.getBoundingClientRect();
                const isVisible = (rect.top >= 0) && 
                                (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
                
                if (!isVisible) {
                    firstHiddenDriver = driverRow;
                }
            }
        }
    });
    
    // Прокручиваем к первому скрытому пилоту
    if (firstHiddenDriver) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const offsetPosition = firstHiddenDriver.offsetTop - headerHeight - 20;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Функция рендеринга таблиц
function renderStandings() {
    updatePositions();
    
    // Личный зачёт
    const driversContainer = document.getElementById('drivers-standings');
    driversContainer.innerHTML = '';
    
    const leftColumn = document.createElement('div');
    leftColumn.className = 'standings-column';
    const rightColumn = document.createElement('div');
    rightColumn.className = 'standings-column';
    
    standingsData.drivers.forEach((driver, index) => {
        const driverRow = document.createElement('div');
        driverRow.className = `standing-row driver-${driver.driverId}`;
        driverRow.innerHTML = `
            <span class="position">${driver.position}</span>
            <img src="Images/Flags/${driver.flag || 'default.svg'}" title="${driver.state}" alt="" class="driver-flag">
            <span class="name">${driver.name}</span>
            <span class="team" data-team-id="${driver.teamId}">
                ${driver.team}
            </span>
            <span class="points">${driver.points}</span>
        `;
        
        if (index < 10) {
            leftColumn.appendChild(driverRow);
        } else {
            rightColumn.appendChild(driverRow);
        }
    });
    
    driversContainer.appendChild(leftColumn);
    driversContainer.appendChild(rightColumn);
    
    // Кубок конструкторов
    const constructorsContainer = document.getElementById('constructors-standings');
    constructorsContainer.innerHTML = '';
    
    standingsData.constructors.forEach(team => {
        const teamRow = document.createElement('div');
        teamRow.className = `standing-row team-${team.teamId}`;
        teamRow.innerHTML = `
            <span class="position">${team.position}</span>
            <span class="team" data-team-id="${team.teamId}">
                ${team.team}
            </span>
            <span class="points">${team.points}</span>
        `;
        
        // Обработчик клика для выделения пилотов
        teamRow.addEventListener('click', () => highlightTeamDrivers(team.teamId));
        
        constructorsContainer.appendChild(teamRow);
    });
	
	// Спринт сезона
    const sprintContainer = document.getElementById('sprint-standings');
    sprintContainer.innerHTML = '';
    
    standingsData.drivers
        .sort((a, b) => (b.sprintPoints || 0) - (a.sprintPoints || 0))
        .forEach((driver, index) => {
            if (!driver.sprintPoints) return;
            
            const row = document.createElement('div');
            row.className = `standing-row driver-${driver.driverId}`;
            row.innerHTML = `
                <span class="position">${index + 1}</span>
                <img src="Images/Flags/${driver.flag || 'default.svg'}" alt="" class="driver-flag">
                <span class="name">${driver.name}</span>
                <span class="team" data-team-id="${driver.teamId}">
                    ${driver.team}
                </span>
                <span class="points">${driver.sprintPoints || 0}</span>
            `;
            
            sprintContainer.appendChild(row);
        });
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    renderStandings();
    
    // Добавляем логотипы после загрузки DOM
    document.querySelectorAll('.team[data-team-id]').forEach(teamEl => {
        const teamId = teamEl.getAttribute('data-team-id');
        const logoImg = document.createElement('img');
        
        // Создаем правильное имя файла
        const formattedTeamId = teamId.replace(/([A-Z])/g, ' $1').trim(); // Добавляем пробелы перед заглавными буквами
        logoImg.src = `Images/Teams/${encodeURIComponent(formattedTeamId)}-m.png`;
        
        logoImg.className = 'team-logo';
        logoImg.alt = teamEl.textContent.trim();
        teamEl.insertBefore(logoImg, teamEl.firstChild);
        
        // Обработка ошибок загрузки изображений
        logoImg.onerror = function() {
            console.error(`Не удалось загрузить логотип для команды ${teamId}`);
            this.style.display = 'none';
        };
    });
});
