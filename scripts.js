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
            <h2>Гран-При сезона 2026</h2>
            <div class="main-gp-cards" id="mainGpCards"></div>
			<div class="tires-divider"></div>
     <!--       <div class="main-standings">
                <div class="main-drivers" id="mainDrivers"></div>
                <div class="main-constructors" id="mainConstructors"></div>
            </div> -->
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
    
    // Находим текущий/ближайший Гран-При с учетом 2-часовой задержки
    let currentGP = null;
    
    for (let i = 0; i < allGPs.length; i++) {
        const gpDate = new Date(allGPs[i].date);
        const gpEndTime = new Date(gpDate.getTime() + (2 * 60 * 60 * 1000)); // +2 часа
        
        // Показываем гонку если она либо еще не началась, либо закончилась менее 2 часов назад
        if (now <= gpEndTime) {
            currentGP = allGPs[i];
            break;
        }
    }
    
    // Если не нашли подходящую гонку, показываем последнюю
    if (!currentGP && allGPs.length > 0) {
        currentGP = allGPs[allGPs.length - 1];
    }
    
    let html = '<div class="main-gp-container">';
    
    if (currentGP) {
        const gpDate = new Date(currentGP.date);
        const gpEndTime = new Date(gpDate.getTime() + (2 * 60 * 60 * 1000)); // +2 часа
        const isPast = now > gpEndTime; // Учитываем 2 часа после окончания
        const isToday = gpDate.toDateString() === now.toDateString();
        const isLive = now >= gpDate && now <= gpEndTime; // Гонка в процессе
        
        let status = '';
        if (isLive) {
            status = 'Идёт сейчас';
        } else if (isPast) {
            status = 'Завершён';
        } else if (isToday) {
            status = 'Сегодня';
        } else {
            status = 'Предстоящий';
        }
        
        // Определяем, показывать ли таймер или кнопку
        let actionHtml = '';
        if (isLive) {
            // Гонка идет - кнопка трансляции
            actionHtml = currentGP.streamLink ? 
                `<div class="main-gp-action">
                    <a href="${currentGP.streamLink}" class="main-stream-btn" target="_blank">
                        Трансляция
                    </a>
                </div>` :
                `<div class="main-gp-action">
                    <div class="main-no-stream">Нет Трансляции</div>
                </div>`;
        } else if (!isPast) {
            // Гонка еще не началась - таймер
            actionHtml = `
                <div class="main-gp-timer">
                    <div class="main-timer" data-date="${currentGP.date}">
                        <span class="main-days">00</span>д 
                        <span class="main-hours">00</span>ч 
                        <span class="main-minutes">00</span>м 
                        <span class="main-seconds">00</span>с
                    </div>
                </div>
            `;
        } else {
            // Гонка завершена более 2 часов назад - сообщение
            actionHtml = `
                <div class="main-gp-action">
                    <div class="main-no-stream">Гонка завершена</div>
                </div>
            `;
        }
        
        html += `
            <div class="main-gp-card ${isLive ? 'live' : isPast ? 'past' : isToday ? 'today' : 'upcoming'}" 
                 data-gp-id="${currentGP.id}">
                <div class="main-gp-header">
					<img src="Images/Flags/${currentGP.country}.svg" alt="flag" title="${currentGP.state}" class="flag-main">
                    <h3>${currentGP.name}</h3>
                    <span class="main-gp-status ${isLive ? 'live' : ''}">${status}</span>
                </div>
                <div class="tires-divider"></div>
                <div class="main-gp-image">
                    <img src="Images/Tracks/${currentGP.miniLogo}" alt="${currentGP.trackName}">
                </div>
                <div class="tires-divider"></div>
                ${actionHtml}
                <div class="tires-divider"></div>
                <div class="main-gp-info">
                    <div class="main-gp-date">${formatDate(currentGP.date)}</div>
                    <div class="main-gp-track">${currentGP.trackName}</div>
					<div class="main-gp-location">${currentGP.location}</div>
                </div>
            </div>
        `;

             // Плашка составов шин
        html += `
            <div class="inf-race">
            <div class="tires-card">
                <div class="tires-header">
                    <h3>Состав шин на гонку</h3>
                </div>
                <div class="tires-divider"></div>
                <div class="dry-tires">
                    <div class="tire-item">
						<span class="tire-name">---</span>
                        <img src="Images/Wheels/Hard.png" alt="Wheels" class="tire-image inactive">
                        <span class="tire-name">C1</span>
                    </div>
                    <div class="tire-item">
						<span class="tire-name">---</span>
                        <img src="Images/Wheels/Hard.png" alt="Wheels" class="tire-image inactive">
                        <span class="tire-name">C2</span>
                    </div>
                    <div class="tire-item">
						<span class="tire-name">---</span>
                        <img src="Images/Wheels/Hard.png" alt="Wheels" class="tire-image inactive">
                        <span class="tire-name">C3</span>
                    </div>
                    <div class="tire-item">
						<span class="tire-name">---</span>
                        <img src="Images/Wheels/Hard.png" alt="Wheels" class="tire-image inactive">
                        <span class="tire-name">C4</span>
                    </div>
                    <div class="tire-item">
						<span class="tire-name">---</span>
                        <img src="Images/Wheels/Hard.png" alt="Wheels" class="tire-image inactive">
                        <span class="tire-name">C5</span>
                    </div>
                </div>
                <div class="tires-divider"></div>
                <div class="wet-tires">
                    <div class="tire-item">
                        <img src="Images/Wheels/Intermediate.png" alt="Intermediate" class="tire-image inactive">
                        <span class="tire-name">Intermediate</span>
                    </div>
                    <div class="tire-item">
                        <img src="Images/Wheels/Wet.png" alt="Wet" class="tire-image inactive">
                        <span class="tire-name">Wet</span>
                    </div>
                </div>
            </div>

            <div class="weather-card">
                <div class="weather-header">
                    <h3>Погода на гонку</h3>
                </div>
                <div class="tires-divider"></div>
                <div class="weather-block">
                    <div class="weather">
                        <img src="Images/Weather/cloud.png" alt="weather" class="weather-image inactive">
                        <span class="weather-name">Погода</span>
						<span class="weather-name" style="color: red">---</span>
                    </div>
                    <div class="weather">
                        <img src="Images/Weather/rain.png" alt="weather" class="weather-image inactive">
                        <span class="weather-name">Осадки</span>
						<span class="weather-name" style="color: red">---</span>
                    </div>
                    <div class="weather">
                        <img src="Images/Weather/wind.png" alt="weather" class="weather-image inactive">
                        <span class="weather-name">Ветер</span>
						<span class="weather-name" style="color: red">---/с</span>
                    </div>
                    <div class="weather">
                        <img src="Images/Weather/temperature.png" alt="weather" class="weather-image inactive">
                        <span class="weather-name">Темп.°C</span>
						<span class="weather-name" style="color: red">---</span>
                    </div>
                </div>
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
    
    // Инициализируем таймер, если он есть
    initMainTimer();
    
    // Добавляем обработчик клика
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
    const gpEndTime = new Date(targetDate.getTime() + (2 * 60 * 60 * 1000)); // +2 часа
    const diff = targetDate - now;

    // Если гонка уже началась, но еще не прошло 2 часа
    if (now >= targetDate && now <= gpEndTime) {
        const card = timer.closest('.main-gp-card');
        const gpId = card.getAttribute('data-gp-id');
        const track = tracksData[Object.keys(tracksData).find(key => tracksData[key].id === gpId)];
        
        // Заменяем таймер на кнопку трансляции
        if (track && track.streamLink) {
            timer.outerHTML = `
                <div class="main-gp-action">
                    <a href="${track.streamLink}" class="main-stream-btn" target="_blank">
                        📺 Смотреть трансляцию
                    </a>
                </div>
            `;
        } else {
            timer.outerHTML = `
                <div class="main-gp-action">
                    <div class="main-no-stream">Трансляция недоступна</div>
                </div>
            `;
        }
        
        // Обновляем статус
        const status = card.querySelector('.main-gp-status');
        if (status) {
            status.textContent = 'Идёт сейчас';
            status.classList.add('live');
            card.classList.add('live');
        }
        return;
    }
    
    // Если прошло более 2 часов после гонки
    if (now > gpEndTime) {
        timer.outerHTML = `
            <div class="main-gp-action">
                <div class="main-no-stream">Гонка завершена</div>
            </div>
        `;
        return;
    }

    // Обновляем таймер
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

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
    
    // Создаем копии массивов чтобы не менять оригиналы
    const driversWithSprint = JSON.parse(JSON.stringify(driversStandings));
    const sprintPointsMap = {};
    
    // Создаем карту очков спринта для быстрого доступа
    sprintStandings.forEach(driver => {
        sprintPointsMap[driver.name] = driver.points;
    });
    
    // Суммируем очки личного зачёта и спринта
    driversWithSprint.forEach(driver => {
        const sprintPoints = sprintPointsMap[driver.name] || 0;
        driver.totalPoints = driver.points + sprintPoints;
    });
    
    // Сортируем по общему количеству очков
    const topDrivers = driversWithSprint
        .sort((a, b) => b.totalPoints - a.totalPoints)
        .slice(0, 1); // Топ-3 пилота
    
    let html = `
        <h2>Чемпион 2026</h2>
        <div class="main-standings-list">
    `;
    
    topDrivers.forEach((driver, index) => {
        const sprintPoints = sprintPointsMap[driver.name] || 0;
        
        html += `
            <div class="main-standing-item ${index === 0 ? 'first' : ''}">
                <div class="main-standing-position">${index + 1}</div>
                <div class="main-standing-info">
                    <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" title="${driver.state}" class="main-standing-flag">
                    <span class="main-standing-name">${driver.name}</span>
                    <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="main-standing-team-logo">
                </div>
                <div class="main-standing-points">${driver.points+sprintPoints}</div>
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
        <h2>Чемпион кубка конструкторов 2026</h2>
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
        case 'stats':
            renderStats();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        default:
            renderMainPage();
			window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

















