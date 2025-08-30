document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, есть ли хэш в URL
    const hash = window.location.hash;
    
    if (hash === '' || hash === '#main' || hash === '#') {
        renderMainPage();
    } else {
        // Загружаем соответствующую вкладку
        const tabName = hash.replace('#', '');
        loadTabContent(tabName);
    }
    
    // Инициализация кнопки прокрутки
    initScrollTop();
});

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = e.target.getAttribute('data-tab');
        window.location.hash = tabName;
        loadTabContent(tabName);
    });
});

document.querySelector('.logo a').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = 'main';
    renderMainPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

if (window.location.hash === '' || window.location.hash === '#main') {
    initMainPage();
}

function renderMainPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="mainPage">
            <div class="main-gp-cards" id="mainGpCards"></div>
            <div class="main-standings">
                <div class="main-drivers" id="mainDrivers"></div>
                <div class="main-constructors" id="mainConstructors"></div>
            </div>
        </div>
    `;

    renderMainGPCards();
    renderMainStandings();
}

function renderMainGPCards() {
    const container = document.getElementById('mainGpCards');
    const now = new Date();
    
    // Получаем все гран-при и сортируем по дате
    const allGPs = Object.values(tracksData).sort((a, b) => 
        new Date(a.date) - new Date(b.date)
    );
    
    // Находим индексы прошедшего, текущего/ближайшего и следующего ГП
    let pastGP = null;
    let currentGP = null;
    let nextGP = null;
    
    for (let i = 0; i < allGPs.length; i++) {
        const gpDate = new Date(allGPs[i].date);
        
        if (gpDate < now) {
            pastGP = allGPs[i];
        } else if (gpDate >= now) {
            if (!currentGP) {
                currentGP = allGPs[i];
                if (i + 1 < allGPs.length) {
                    nextGP = allGPs[i + 1];
                }
            }
        }
    }
    
    // Если нет текущего ГП (сезон завершён), показываем последние три
    if (!currentGP && allGPs.length >= 3) {
        pastGP = allGPs[allGPs.length - 3];
        currentGP = allGPs[allGPs.length - 2];
        nextGP = allGPs[allGPs.length - 1];
    }
    
    const gpsToShow = [pastGP, currentGP, nextGP].filter(gp => gp !== null);
    
    let html = '<div class="main-gp-container">';
    
    gpsToShow.forEach((gp, index) => {
        const gpDate = new Date(gp.date);
        const isPast = gpDate < now;
        const isToday = gpDate.toDateString() === now.toDateString();
        
        let status = '';
        if (isToday) {
            status = 'Сегодня';
        } else if (isPast) {
            status = 'Завершён';
        } else {
            status = 'Предстоящий';
        }
        
        html += `
            <div class="main-gp-card ${isPast ? 'past' : isToday ? 'today' : 'upcoming'}">
                <div class="main-gp-header">
                    <h3>${gp.name}</h3>
                    <span class="main-gp-status">${status}</span>
                </div>
                <div class="main-gp-image">
                    <img src="Images/Tracks/${gp.miniLogo}" alt="${gp.trackName}">
                </div>
                <div class="main-gp-info">
                    <div class="main-gp-date">${formatDate(gp.date)}</div>
                    <div class="main-gp-track">${gp.trackName}</div>
                    <div class="main-gp-location">${gp.location}</div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function renderMainStandings() {
    renderMainDrivers();
    renderMainConstructors();
}

function renderMainDrivers() {
    const container = document.getElementById('mainDrivers');
    const topDrivers = [...driversStandings]
        .sort((a, b) => b.points - a.points)
        .slice(0, 3);
    
    let html = `
        <h2>Топ пилоты</h2>
        <div class="main-standings-list">
    `;
    
    topDrivers.forEach((driver, index) => {
        html += `
            <div class="main-standing-item ${index === 0 ? 'first' : ''}">
                <div class="main-standing-position">${index + 1}</div>
                <div class="main-standing-info">
                    <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" class="main-standing-flag">
                    <span class="main-standing-name">${driver.name}</span>
                </div>
                <div class="main-standing-points">${driver.points}</div>
                <div class="main-standing-team">
                    <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="main-standing-team-logo">
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function renderMainConstructors() {
    const container = document.getElementById('mainConstructors');
    const topTeams = [...constructorsStandings]
        .sort((a, b) => b.points - a.points)
        .slice(0, 3);
    
    let html = `
        <h2>Топ команды</h2>
        <div class="main-standings-list">
    `;
    
    topTeams.forEach((team, index) => {
        html += `
            <div class="main-standing-item ${index === 0 ? 'first' : ''}">
                <div class="main-standing-position">${index + 1}</div>
                <div class="main-standing-info">
                    <img src="Images/Teams/${team.teamLogo}" alt="${team.team}" class="main-standing-team-logo">
                    <span class="main-standing-name">${team.team}</span>
                </div>
                <div class="main-standing-points">${team.points}</div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function loadTabContent(tabName) {
    const content = document.getElementById('content');
    
    // Здесь будет загрузка данных из .js файлов
    switch (tabName) {
		case 'teams':
			renderTeams();
			window.scrollTo({ top: 0, behavior: 'smooth' });
			break;
		case 'drivers':
			renderDrivers();
			window.scrollTo({ top: 0, behavior: 'smooth' });
			break;
        case 'calendar':
			renderCalendar();
			break;
        case 'results':
            renderResults();
			window.scrollTo({ top: 0, behavior: 'smooth' });
			break;
        case 'glossary':
			renderGlossary(glossaryTerms);
			window.scrollTo({ top: 0, behavior: 'smooth' });
			break;
		
    }
}

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const burgerBtn = document.getElementById('burgerBtn');
const menu = document.querySelector('.menu');

if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        menu.classList.remove('active');
    });
});
