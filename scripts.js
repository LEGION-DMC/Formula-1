// Обработчик DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    const hash = window.location.hash;
    
    if (hash === '' || hash === '#main' || hash === '#') {
        renderMainPage();
    } else {
        // Загрузка вкладки
        const tabName = hash.replace('#', '');
        loadTabContent(tabName);
    }
    
    // Инициализация кнопки прокрутки
    initScrollTop();
    
    // Инициализация мобильного меню
    initBurgerMenu();
});

// Обработчики кликов для навигационного меню
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = e.target.getAttribute('data-tab');
        window.location.hash = tabName;
        loadTabContent(tabName);
    });
});

// Обработчик клика на логотип для возврата на главную
document.querySelector('.logo a').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = 'main';
    renderMainPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Мобильное меню
function initBurgerMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const menu = document.querySelector('.menu');
    
    if (burgerBtn && menu) {
        console.log('Burger menu elements found');
        
        burgerBtn.addEventListener('click', () => {
            console.log('Burger button clicked');
            burgerBtn.classList.toggle('active');
            menu.classList.toggle('active');
        });
        
        // Закрытие меню при клике на пункт
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Только для мобильных
                    burgerBtn.classList.remove('active');
                    menu.classList.remove('active');
                }
            });
        });
    } else {
        console.log('Burger menu elements NOT found:', {burgerBtn, menu}); // Отладочное сообщение
    }
}

// Кнопка прокрутки вверх
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        console.log('Scroll button found');
        
        // Обработчик скролла для показа/скрытия кнопки
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        // Обработчик клика для прокрутки вверх
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.log('Scroll button NOT found');
    }
}

// Рендеринг главной страницы
function renderMainPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="mainPage">
            <h2>Гран-При сезона 2025</h2>
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

// Карточка Гран-При
function renderMainGPCards() {
    const container = document.getElementById('mainGpCards');
    const now = new Date();
    
    // Загрузка всех гран-при
    const allGPs = Object.values(tracksData).sort((a, b) => 
        new Date(a.date) - new Date(b.date)
    );
    
    // Загрузка текущиего/ближайшего Гран-При
    let currentGP = null;
    
    for (let i = 0; i < allGPs.length; i++) {
        const gpDate = new Date(allGPs[i].date);
        
        if (gpDate >= now) {
            currentGP = allGPs[i];
            break;
        }
    }
    
    if (!currentGP && allGPs.length > 0) {
        currentGP = allGPs[allGPs.length - 1];
    }
    
    let html = '<div class="main-gp-container">';
    
    if (currentGP) {
        const gpDate = new Date(currentGP.date);
        const isPast = gpDate < now;
        const isToday = gpDate.toDateString() === now.toDateString();
        const isFuture = gpDate > now;
        
        let status = '';
        if (isToday) {
            status = 'Сегодня';
        } else if (isPast) {
            status = 'Завершён';
        } else {
            status = 'Предстоящий';
        }
        
        // Определение таймера
        let timerHtml = '';
        if (isFuture || isToday) {
            timerHtml = `
                <div class="main-gp-timer">
                    <div class="main-timer" data-date="${currentGP.date}">
                        <span class="main-days">00</span>д 
                        <span class="main-hours">00</span>ч 
                        <span class="main-minutes">00</span>м 
                        <span class="main-seconds">00</span>с
                    </div>
                </div>
            `;
        }
        
        html += `
            <div class="main-gp-card ${isPast ? 'past' : isToday ? 'today' : 'upcoming'}" data-gp-id="${currentGP.id}">
                <div class="main-gp-header">
                    <h3>${currentGP.name}</h3>
                    <span class="main-gp-status">${status}</span>
                </div>
                <div class="main-gp-image">
                    <img src="Images/Tracks/${currentGP.miniLogo}" alt="${currentGP.trackName}">
                </div>
                ${timerHtml}
                <div class="main-gp-info">
                    <div class="main-gp-date">${formatDate(currentGP.date)}</div>
                    <div class="main-gp-track">${currentGP.trackName}</div>
                    <div class="main-gp-location">${currentGP.location}</div>
                </div>
            </div>
        `;
    } else {
        html += `
            <div class="main-gp-card">
                <div class="main-gp-header">
                    <h3>Сезон завершён</h3>
                </div>
                <div class="main-gp-info">
                    <p>Следующий сезон скоро!</p>
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    container.innerHTML = html;
    
    // Инициализация таймера
    initMainTimer();
    addMainGPCardListener();
}

// Инициализация таймера
function initMainTimer() {
    const timer = document.querySelector('.main-timer');
    if (timer) {
        updateMainTimer(timer);
        setInterval(() => updateMainTimer(timer), 1000);
    }
}

// Таймер
function updateMainTimer(timer) {
    const targetDate = new Date(timer.dataset.date);
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        timer.innerHTML = '<span class="race-started">Гонка началась!</span>';
        
        // Обновляем статус на "Идёт сейчас"
        const card = timer.closest('.main-gp-card');
        if (card && card.classList.contains('today')) {
            const status = card.querySelector('.main-gp-status');
            if (status) {
                status.textContent = 'Идёт сейчас';
                status.classList.remove('today');
                status.classList.add('live');
            }
        }
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    // Используем правильные классы для главной страницы
    const daysElem = timer.querySelector('.main-days');
    const hoursElem = timer.querySelector('.main-hours');
    const minsElem = timer.querySelector('.main-minutes');
    const secsElem = timer.querySelector('.main-seconds');

    if (daysElem) daysElem.textContent = days.toString().padStart(2, '0');
    if (hoursElem) hoursElem.textContent = hours.toString().padStart(2, '0');
    if (minsElem) minsElem.textContent = mins.toString().padStart(2, '0');
    if (secsElem) secsElem.textContent = secs.toString().padStart(2, '0');
}

// Обработчик клика на карточку Гран-При
function addMainGPCardListener() {
    const gpCard = document.querySelector('.main-gp-card');
    if (gpCard) {
        gpCard.style.cursor = 'pointer';
        gpCard.addEventListener('click', () => {
            // Переход на вкладку календаря
            window.location.hash = 'calendar';
            loadTabContent('calendar');
            
            if (gpId) {
                setTimeout(() => {
                    scrollToGrandPrix(gpId);
                }, 300);
            }
        });
    }
}

// Рендеринг таблиц лидеров
function renderMainStandings() {
    renderMainDrivers();
    renderMainConstructors();
}

// Рендеринг лидера пилотов
function renderMainDrivers() {
    const container = document.getElementById('mainDrivers');
    const topDrivers = [...driversStandings]
        .sort((a, b) => b.points - a.points)
        .slice(0, 1);
    
    let html = `
        <h2>Лидер личного зачёта пилотов</h2>
        <div class="main-standings-list">
    `;
    
    topDrivers.forEach((driver, index) => {
        html += `
            <div class="main-standing-item ${index === 0 ? 'first' : ''}">
                <div class="main-standing-position">${index + 1}</div>
                <div class="main-standing-info">
                    <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" class="main-standing-flag">
                    <span class="main-standing-name">${driver.name}</span>
                    <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="main-standing-team-logo">
                </div>
                <div class="main-standing-points">${driver.points}</div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Рендеринг лидера команд
function renderMainConstructors() {
    const container = document.getElementById('mainConstructors');
    const topTeams = [...constructorsStandings]
        .sort((a, b) => b.points - a.points)
        .slice(0, 1);
    
    let html = `
        <h2>Лидер кубка конструктора команд</h2>
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

// Загрузка данных вкладок
function loadTabContent(tabName) {
    const content = document.getElementById('content');
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
        default:
            renderMainPage();
    }
}
