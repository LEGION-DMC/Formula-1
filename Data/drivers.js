const driversData = [
    {   id: "verstappen", 
		number: 1,
        name: "Макс Ферстаппен",
        namem: "М.Ферстаппен",
        country: "nl",
		state: "Нидерланды",
        team: "Red Bull",
        teamLogo: "RedBull-m.png",
        teamColor: "#313247",
        photo: "verstappen.jpg",
        birthPlace: "Хасселт, Бельгия",
        birthDate: "30.09.1997",
        debut: "Toro Rosso, 2015",
        titles: 4,
        wins: 65,
        podiums: 117,
        rectrack: 6,
		poles: 44,
		dnf: 32,
        bio: "Нидерландский гонщик, четырёхкратный чемпион мира Формулы-1. Самый молодой гонщик в истории, дебютировавший в Формуле-1 в возрасте 17 лет."
    },
    {   id: "norris", 
		number: 4,
        name: "Ландо Норрис",
        namem: "Л.Норрис",
        country: "gb",
		state: "Великобритания",
        team: "McLaren",
        teamLogo: "McLaren-m.png",
        teamColor: "#e07109",
        photo: "norris.jpg",
        birthPlace: "Бристоль, Великобритания",
        birthDate: "13.11.1999",
        debut: "McLaren, 2019",
        titles: 0,
        wins: 9,
        podiums: 38,
        rectrack: 3,
		poles: 13,
		dnf: 12,
        bio: "Британский гонщик, участник чемпионатов мира по автогонкам в классе Формула-1, вице-чемпион 2018 года в классе Формула-2. С 2015 по 2017 годы он завоевал титулы в пяти разных первенствах, среди которых была Европейская Формула-3."
    },
    {   id: "bortoletto", 
		number: 5,         
        name: "Габриэл Бортолето",      
        namem: "Г.Бортолето",    
        country: "br",       
        state: "Бразилия",
        team: "Sauber",
        teamLogo: "Sauber-m.png",
        teamColor: "#21ad17",
        photo: "bortoletto.jpg",
        birthPlace: "Бразилиа, Бразилия",
        birthDate: "14.12.2004",
        debut: "Sauber, 2025",
        titles: 0,
        wins: 0,
        podiums: 0,
        rectrack: 0,
		poles: 0,
        dnf: 2,
        bio: "краткая биография"
    },
    {   id: "hadjar", 
		number: 6,         
        name: "Иcак Хаджар",      
        namem: "И.Хаджар",    
        country: "fr",       
        state: "Франция",
        team: "Racing Bulls",
        teamLogo: "RacingBulls-m.png",
        teamColor: "#ddebdd",
        photo: "hadjar.jpg",
        birthPlace: "Париж, Франция",
        birthDate: "28.09.2004",
        debut: "Racing Bulls, 2025",
        titles: 0,
        wins: 0,
        podiums: 0,
        rectrack: 0,
		poles: 0,
        dnf: 1,
        bio: "краткая биография"
    },
    {   id: "doohan",
        number: 7,         
        name: "Джек Дуэн",      
        namem: "Д.Дуэн",    
        country: "au",       
        state: "Австралия",
        team: "Резерв",
        teamLogo: "F1.png",
        teamColor: "#0090ff",
        photo: "doohan.jpg",
        birthPlace: "Голд-Кост, Австралия",
        birthDate: "20.01.2003",
        debut: "Alpine, 2024",
        titles: 0,
        wins: 0,
        podiums: 0,
        rectrack: 0,
		poles: 0,
        dnf: 2,
        bio: "краткая биография"
    },
    {   id: "gasly",
		number: 10,         
        name: "Пьер Гасли",      
        namem: "П.Гасли",    
        country: "fr",       
        state: "Франция",
        team: "Alpine",
        teamLogo: "Alpine-m.png",
        teamColor: "#a1459c",
        photo: "gasly.jpg",
        birthPlace: "Руан, Франция",
        birthDate: "07.02.1996",
        debut: "Toro Rosso, 2017",
        titles: 0,
        wins: 1,
        podiums: 5,
        rectrack: 0,
		poles: 0,
        dnf: 25,
        bio: "краткая биография"
    },
    {   id: "perez",
        number: 11,         
        name: "Серхио Перес",      
        namem: "С.Перес",    
        country: "mx",       
        state: "Мексика",
        team: "Резерв",
        teamLogo: "F1.png",
        teamColor: "#313247",
        photo: "perez.jpg",
        birthPlace: "Гвадалахара, Мексика",
        birthDate: "26.01.1990",
        debut: "Sauber, 2011",
        titles: 0,
        wins: 6,
        podiums: 39,
        rectrack: 1,
		poles: 3,
        dnf: 35,
        bio: "краткая биография"
    },
    {   id: "antonelli", 
		number: 12,         
        name: "Андреа Кими Антонелли",      
        namem: "А.Антонелли",    
        country: "it",       
        state: "Италия",
        team: "Mercedes",
        teamLogo: "Mercedes-m.png",
        teamColor: "#7a7272",
        photo: "antonelli.jpg",
        birthPlace: "Болонья, Италия",
        birthDate: "25.08.2006",
        debut: "Mercedes, 2025",
        titles: 0,
        wins: 0,
        podiums: 1,
        rectrack: 0,
		poles: 0,
        dnf: 1,
        bio: "краткая биография"
    },
    {   id: "alonso",
        number: 14,         
        name: "Фернандо Алонсо",      
        namem: "Ф.Алонсо",    
        country: "es",       
        state: "Испания",
        team: "Aston Martin",
        teamLogo: "AstonMartin-m.png",
        teamColor: "#fbff00",
        photo: "alonso.jpg",
        birthPlace: "Овьедо, Испания",
        birthDate: "29.07.1981",
        debut: "Minardi, 2001",
        titles: 2,
        wins: 32,
        podiums: 106,
        rectrack: 0,
		poles: 22,
        dnf: 70,
        bio: "краткая биография"
    },
    {   id: "leclerc",
        number: 16,         
        name: "Шарль Леклер",      
        namem: "Ш.Леклер",    
        country: "mc",       
        state: "Монако",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        teamColor: "#b80f0f",
        photo: "leclerc.jpg",
        birthPlace: "Монте-Карло, Монако",
        birthDate: "16.10.1997",
        debut: "Alfa Romeo, 2018",
        titles: 0,
        wins: 8,
        podiums: 48,
        rectrack: 1,
		poles: 27,
        dnf: 20,
        bio: "краткая биография"
    },
    {   id: "stroll",
        number: 18,         
        name: "Ланс Стролл",      
        namem: "Л.Стролл",    
        country: "ca",       
        state: "Канада",
        team: "Aston Martin",
        teamLogo: "AstonMartin-m.png",
        teamColor: "#fbff00",
        photo: "stroll.jpg",
        birthPlace: "Монреаль, Канада",
        birthDate: "29.10.1998",
        debut: "Williams, 2017",
        titles: 0,
        wins: 0,
        podiums: 3,
        rectrack: 0,
		poles: 1,
        dnf: 25,
        bio: "краткая биография"
    },
    {   id: "tsunoda",
        number: 22,         
        name: "Юки Цунода",      
        namem: "Ю.Цунода",    
        country: "jp",       
        state: "Япония",
        team: "Red Bull",
        teamLogo: "RedBull-m.png",
        teamColor: "#313247",
        photo: "tsunoda.jpg",
        birthPlace: "Сагинамихара, Япония",
        birthDate: "11.05.2000",
        debut: "AlphaTauri, 2021",
        titles: 0,
        wins: 0,
        podiums: 0,
        rectrack: 0,
		poles: 0,
        dnf: 10,
        bio: "краткая биография"
    },
    {   id: "albon",
        number: 23,         
        name: "Александр Албон",      
        namem: "А.Албон",    
        country: "th",       
        state: "Таиланд",
        team: "Williams",
        teamLogo: "Williams-m.png",
        teamColor: "#7b74fc",
        photo: "albon.jpg",
        birthPlace: "Лондон, Великобритания",
        birthDate: "23.03.1996",
        debut: "Toro Rosso, 2019",
        titles: 0,
        wins: 0,
        podiums: 2,
        rectrack: 0,
		poles: 0,
        dnf: 15,
        bio: "краткая биография"
    },
    {   id: "hulkenberg",
        number: 27,         
        name: "Нико Хюлькенберг",      
        namem: "Н.Хюлькенберг",    
        country: "de",       
        state: "Германия",
        team: "Sauber",
        teamLogo: "Sauber-m.png",
        teamColor: "#21ad17",
        photo: "hulkenberg.jpg",
        birthPlace: "Эммерих-на-Рейне, Германия",
        birthDate: "19.08.1987",
        debut: "Williams, 2010",
        titles: 0,
        wins: 0,
        podiums: 1,
        rectrack: 0,
		poles: 1,
        dnf: 40,
        bio: "краткая биография"
    },
    {   id: "lawson",
        number: 30,         
        name: "Лиам Лоусон",      
        namem: "Л.Лоусон",    
        country: "nz",       
        state: "Новая Зеландия",
        team: "Racing Bulls",
        teamLogo: "RacingBulls-m.png",
        teamColor: "#ddebdd",
        photo: "lawson.jpg",
        birthPlace: "Хастингс, Новая Зеландия",
        birthDate: "11.02.2002",
        debut: "AlphaTauri, 2023",
        titles: 0,
        wins: 0,
        podiums: 0,
        rectrack: 0,
		poles: 0,
        dnf: 3,
        bio: "краткая биография"
    },
    {   id: "ocon",
        number: 31,         
        name: "Эстебан Окон",      
        namem: "Э.Окон",    
        country: "fr",       
        state: "Франция",
        team: "Haas",
        teamLogo: "Haas-m.png",
        teamColor: "#cf1d1d",
        photo: "ocon.jpg",
        birthPlace: "Эвре, Франция",
        birthDate: "17.09.1996",
        debut: "Mercedes, 2016",
        titles: 0,
        wins: 1,
        podiums: 4,
        rectrack: 0,
		poles: 0,
        dnf: 20,
        bio: "краткая биография"
    },
    {   id: "colapinto",
        number: 43,         
        name: "Франко Колапинто",      
        namem: "Ф.Колапинто",    
        country: "ar",       
        state: "Аргентина",
        team: "Alpine",
        teamLogo: "Alpine-m.png",
        teamColor: "#a1459c",
        photo: "colapinto.jpg",
        birthPlace: "Буэнос-Айрес, Аргентина",
        birthDate: "27.05.2003",
        debut: "Williams, 2024",
        titles: 0,
        wins: 0,
        podiums: 0,
        rectrack: 0,
		poles: 0,
        dnf: 1,
        bio: "краткая биография"
    },
    {   id: "hamilton",
        number: 44,         
        name: "Льюис Хэмильтон",      
        namem: "Л.Хэмильтон",    
        country: "gb",       
        state: "Великобритания",
        team: "Ferrari",
        teamLogo: "Ferrari-m.png",
        teamColor: "#b80f0f",
        photo: "hamilton.jpg",
        birthPlace: "Стивенидж, Великобритания",
        birthDate: "07.01.1985",
        debut: "McLaren, 2007",
        titles: 7,
        wins: 105,
        podiums: 202,
        rectrack: 5,
		poles: 104,
        dnf: 35,
        bio: "краткая биография"
    },
    {   id: "sainz",
        number: 55,         
        name: "Карлос Сайнс",      
        namem: "К.Сайнс",    
        country: "es",       
        state: "Испания",
        team: "Williams",
        teamLogo: "Williams-m.png",
        teamColor: "#7b74fc",
        photo: "sainz.jpg",
        birthPlace: "Мадрид, Испания",
        birthDate: "01.09.1994",
        debut: "Toro Rosso, 2015",
        titles: 0,
        wins: 4,
        podiums: 27,
        rectrack: 0,
		poles: 6,
        dnf: 30,
        bio: "краткая биография"
    },
    {   id: "russell",
        number: 63,         
        name: "Джордж Расселл",      
        namem: "Дж.Расселл",    
        country: "gb",       
        state: "Великобритания",
        team: "Mercedes",
        teamLogo: "Mercedes-m.png",
        teamColor: "#7a7272",
        photo: "russell.jpg",
        birthPlace: "Кингс-Линн, Великобритания",
        birthDate: "15.02.1998",
        debut: "Williams, 2019",
        titles: 0,
        wins: 4,
        podiums: 21,
        rectrack: 1,
		poles: 6,
        dnf: 10,
        bio: "краткая биография"
    },
    {   id: "bottas",
        number: 77,         
        name: "Валттери Боттас",      
        namem: "В.Боттас",    
        country: "fi",       
        state: "Финляндия",
        team: "Резерв",
        teamLogo: "F1.png",
        teamColor: "#21ad17",
        photo: "bottas.jpg",
        birthPlace: "Настола, Пяйят-Хяме, Финляндия",
        birthDate: "28.08.1989",
        debut: "Williams, 2012",
        titles: 0,
        wins: 10,
        podiums: 67,
        rectrack: 2,
		poles: 20,
        dnf: 27,
        bio: "Будующий пилот Cadillac"
    },
    {   id: "piastri",
        number: 81,         
        name: "Оскар Пиастри",      
        namem: "О.Пиастри",    
        country: "au",       
        state: "Австралия",
        team: "McLaren",
        teamLogo: "McLaren-m.png",
        teamColor: "#e07109",
        photo: "piastri.jpg",
        birthPlace: "Мельбурн, Австралия",
        birthDate: "06.04.2001",
        debut: "McLaren, 2023",
        titles: 1,
        wins: 8,
        podiums: 22,
        reccircle: 3,
		poles: 4,
        dnf: 5,
        bio: "краткая биография"
    },
    {   id: "bearman",
        number: 87,         
        name: "Оливер Берман",      
        namem: "О.Берман",    
        country: "gb",       
        state: "Великобритания",
        team: "Haas",
        teamLogo: "Haas-m.png",
        teamColor: "#cf1d1d",
        photo: "bearman.jpg",
        birthPlace: "Челмсфорд, Великобритания",
        birthDate: "08.05.2005",
        debut: "Haas, 2024",
        titles: 0,
        wins: 0,
        podiums: 0,
        rectrack: 0,
		poles: 0,
        dnf: 1,
        bio: "краткая биография"
    },
];

function renderDrivers() {
    const content = document.getElementById('content');
    
    // Получаем уникальные названия команд для фильтра
    const uniqueTeams = [...new Set(driversData.map(driver => driver.team))];
    uniqueTeams.sort();
    
    content.innerHTML = `
        <div class="drv-container">
            <div class="drv-filter">
                <button class="drv-filter-btn active" data-team="all">Все</button>
                ${uniqueTeams.map(team => `
                    <button class="drv-filter-btn" data-team="${team}">${team}</button>
                `).join('')}
            </div>
            <div class="drv-grid" id="driversGrid"></div>
        </div>
    `;

    const driversGrid = document.getElementById('driversGrid');
    const filterButtons = document.querySelectorAll('.drv-filter-btn');
    
    // Функция фильтрации пилотов
    function filterDrivers(team) {
        const filteredDrivers = team === 'all' 
            ? driversData 
            : driversData.filter(driver => driver.team === team);
        
        renderDriversList(filteredDrivers);
    }
    
    // Функция отрисовки списка пилотов
    function renderDriversList(drivers) {
        driversGrid.innerHTML = '';
        
        drivers.forEach(driver => {
            const driverCard = document.createElement('div');
            driverCard.className = 'drv-card';
            driverCard.style.borderLeftColor = driver.teamColor;
            driverCard.setAttribute('data-driver', driver.id);
            driverCard.setAttribute('data-team', driver.team);

            driverCard.innerHTML = `
                <div class="drv-photo">
                    <img src="Images/Drivers/${driver.photo}" alt="${driver.name}">
                </div>
                <div class="drv-header">
                    <span class="drv-number">${driver.number}</span>
                    <span class="drv-name">${driver.namem}</span>
                    <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" title="${driver.state}" class="drv-flag">
                </div>
                <div class="drv-divider"></div>
                <div class="drv-team">
                    <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="drv-team-logo">
                    <span class="drv-team-name">${driver.team}</span>
                </div>
            `;

            driverCard.addEventListener('click', () => openDriverModal(driver));
            driversGrid.appendChild(driverCard);
        });
    }
    
    // Обработчики для кнопок фильтра
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterDrivers(button.dataset.team);
        });
    });
    
    // Первоначальная загрузка всех пилотов
    renderDriversList(driversData);
}

function openDriverModal(driver) {
    const modal = document.createElement('div');
    modal.className = 'drv-modal';
    modal.innerHTML = `
        <div class="drv-modal-content">
            <div class="drv-modal-header">
                <div class="drv-modal-photo">
                    <img src="Images/Drivers/${driver.photo}" alt="${driver.name}">
                </div>
                <div class="drv-modal-info">
                    <div class="drv-modal-name">
                        <span class="drv-modal-number">${driver.number}</span>
                        <span>${driver.name}</span>
                        <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" title="${driver.state}" class="drv-modal-flag">
                    </div>
                    <div class="drv-modal-divider"></div>
                    <div class="drv-modal-team">
                        <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="drv-modal-team-logo">
                        <span>${driver.team}</span>
                    </div>
                </div>
            </div>
            <div class="drv-modal-divider-full"></div>
            
            <div class="drv-info-row">
                <span class="drv-info-label">Место рождения:</span>
                <span class="drv-info-value">${driver.birthPlace}</span>
            </div>
            <div class="drv-info-row">
                <span class="drv-info-label">Дата рождения:</span>
                <span class="drv-info-value">${driver.birthDate}</span>
            </div>
            <div class="drv-info-row">
                <span class="drv-info-label">Дебют:</span>
                <span class="drv-info-value">${driver.debut}</span>
            </div>
            <div class="drv-modal-divider-full"></div>
            
            <div class="drv-stats">
                <div class="drv-stat">
                    <span class="drv-stat-value">${driver.titles}</span>
                    <span class="drv-stat-label">Титулы</span>
                </div>
                <div class="drv-stat">
                    <span class="drv-stat-value">${driver.wins}</span>
                    <span class="drv-stat-label">Победы</span>
                </div>
                <div class="drv-stat">
                    <span class="drv-stat-value">${driver.podiums}</span>
                    <span class="drv-stat-label">Подиумы</span>
                </div>
                <div class="drv-stat">
                    <span class="drv-stat-value">${driver.poles}</span>
                    <span class="drv-stat-label">Поулы</span>
                </div>
                <div class="drv-stat">
                    <span class="drv-stat-value">${driver.rectrack}</span>
                    <span class="drv-stat-label">Рекорд трассы</span>
                </div>
                <div class="drv-stat">
                    <span class="drv-stat-value">${driver.dnf}</span>
                    <span class="drv-stat-label">DNF</span>
                </div>
            </div>
            <div class="drv-modal-divider-full"></div>
            
            <div class="drv-bio">
                <h3>Биография</h3>
                <p>${driver.bio}</p>
            </div>
        </div>
        <button class="drv-close-modal">&times;</button>
    `;
    
    document.body.appendChild(modal);
    
    // Закрытие модального окна
    modal.querySelector('.drv-close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

if (window.location.hash === '#drivers') {
    renderDrivers();
}