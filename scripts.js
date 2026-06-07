const WEATHER_API_KEY = '92d82d196e8a4e82af4113434261603';
const WEATHER_CACHE = {}; 
const CACHE_DURATION = 30 * 60 * 1000; 

const TRACK_COORDINATES = {
    "t1": { "lat": -37.8497, "lon": 144.968 },
    "t2": { "lat": 31.3389, "lon": 121.220 },
    "t3": { "lat": 34.8431, "lon": 136.541 },
    "t4": { "lat": 26.0325, "lon": 50.5106 },
    "t5": { "lat": 21.6319, "lon": 39.1044 },
    "t6": { "lat": 25.9581, "lon": -80.2389 },
    "t7": { "lat": 45.5, "lon": -73.5228 },
    "t8": { "lat": 43.7347, "lon": 7.42056 },
    "t9": { "lat": 41.57, "lon": 2.26111 },
    "t10": { "lat": 47.2197, "lon": 14.7647 },
    "t11": { "lat": 52.0786, "lon": -1.01694 },
    "t12": { "lat": 50.4372, "lon": 5.97139 },
    "t13": { "lat": 47.5789, "lon": 19.2486 },
    "t14": { "lat": 52.3888, "lon": 4.54092 },
    "t15": { "lat": 45.6156, "lon": 9.28111 },
    "t16": { "lat": 40.4167, "lon": -3.70333 },
    "t17": { "lat": 40.3725, "lon": 49.8533 },
    "t18": { "lat": 1.2914, "lon": 103.864 },
    "t19": { "lat": 30.1328, "lon": -97.6411 },
    "t20": { "lat": 19.4042, "lon": -99.0907 },
    "t21": { "lat": -23.7036, "lon": -46.6997 },
    "t22": { "lat": 36.1147, "lon": -115.173 },
    "t23": { "lat": 25.49, "lon": 51.4542 },
    "t24": { "lat": 24.4672, "lon": 54.6031 }
};

let mainTimerInterval = null;

let currentTireConfig = { // C5 C4 C3 C2 C1   432барселона
    soft: "C5", 
    medium: "C4",
    hard: "C3"
};

document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash;
    
    if (hash === '' || hash === '#main' || hash === '#') {
        renderMainPage();
    } else {
        const tabName = hash.replace('#', '');
        loadTabContent(tabName);
    }
    
    initScrollTop();
    initBurgerMenu();
    initNavigation();
});

function initNavigation() {
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.removeEventListener('click', handleMenuClick);
        link.addEventListener('click', handleMenuClick);
    });
    
    const logoLink = document.querySelector('.logo a');
    if (logoLink) {
        logoLink.removeEventListener('click', handleLogoClick);
        logoLink.addEventListener('click', handleLogoClick);
    }
}

function handleMenuClick(e) {
    e.preventDefault();
    const tabName = e.target.getAttribute('data-tab');
    if (tabName) {
        window.location.hash = tabName;
        loadTabContent(tabName);
        
        if (window.innerWidth <= 768) {
            const burgerBtn = document.getElementById('burgerBtn');
            const menu = document.querySelector('.menu');
            if (burgerBtn && menu) {
                burgerBtn.classList.remove('active');
                menu.classList.remove('active');
            }
        }
    }
}

function handleLogoClick(e) {
    e.preventDefault();
    window.location.hash = 'main';
    renderMainPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initBurgerMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const menu = document.querySelector('.menu');
    
    if (burgerBtn && menu) {
        burgerBtn.removeEventListener('click', handleBurgerClick);
        burgerBtn.addEventListener('click', handleBurgerClick);
    }
}

function handleBurgerClick() {
    const burgerBtn = document.getElementById('burgerBtn');
    const menu = document.querySelector('.menu');
    if (burgerBtn && menu) {
        burgerBtn.classList.toggle('active');
        menu.classList.toggle('active');
    }
}

function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.removeEventListener('click', handleScrollTop);
        scrollTopBtn.addEventListener('click', handleScrollTop);
    }
}

function handleScrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

async function fetchWeatherData(trackId) {
    const coords = TRACK_COORDINATES[trackId];
    if (!coords) {
        return null;
    }
    
    const cacheKey = `${trackId}_current`;
    const cached = WEATHER_CACHE[cacheKey];
    
    if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
        return cached.data;
    }
    
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${coords.lat},${coords.lon}&lang=ru`
        );
        
        if (!response.ok) throw new Error('Weather API error');
        
        const data = await response.json();
        
        WEATHER_CACHE[cacheKey] = {
            timestamp: Date.now(),
            data: data
        };
        
        return data;
    } catch (error) {
        return null;
    }
}

async function fetchWeatherForecast(trackId, date) {
    const coords = TRACK_COORDINATES[trackId];
    if (!coords) {
        return null;
    }
    
    const cacheKey = `${trackId}_${date}`;
    const cached = WEATHER_CACHE[cacheKey];
    
    if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
        return cached.data;
    }
    
    try {
        const forecastDate = new Date(date).toISOString().split('T')[0];
        
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${coords.lat},${coords.lon}&dt=${forecastDate}&lang=ru&days=1`
        );
        
        if (!response.ok) throw new Error('Weather API error');
        
        const data = await response.json();
        
        if (data.forecast && data.forecast.forecastday && data.forecast.forecastday.length > 0) {
            WEATHER_CACHE[cacheKey] = {
                timestamp: Date.now(),
                data: data
            };
            return data;
        } else {
            const currentResponse = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${coords.lat},${coords.lon}&lang=ru`
            );
            const currentData = await currentResponse.json();
            
            WEATHER_CACHE[cacheKey] = {
                timestamp: Date.now(),
                data: currentData
            };
            return currentData;
        }
        
    } catch (error) {
        return null;
    }
}

const trackToResultsMap = {
    "t1": "australia",
    "t2": "china",
    "t3": "japan",
    "t4": "bahrain",
    "t5": "saudi-arabia",
    "t6": "miami",
    "t7": "canada",
    "t8": "monaco",
    "t9": "spain",
    "t10": "austria",
    "t11": "great-britain",
    "t12": "belgium",
    "t13": "hungary",
    "t14": "netherlands",
    "t15": "italy",
    "t16": "madrid",
    "t17": "azerbaijan",
    "t18": "singapore",
    "t19": "usa",
    "t20": "mexico",
    "t21": "brazil",
    "t22": "las-vegas",
    "t23": "qatar",
    "t24": "abu-dhabi"
};

function getDriverTeam(driverName) {
    if (typeof driversStandings !== 'undefined') {
        const driver = driversStandings.find(d => d.name === driverName);
        if (driver) return driver.team;
    }
    return '';
}

function getRaceWinners(gpId) {
    // Получаем ID для detailedResults
    const resultsId = trackToResultsMap[gpId];
    
    // Проверяем, есть ли результаты
    if (typeof detailedResults !== 'undefined' && resultsId && detailedResults[resultsId]) {
        const gpResults = detailedResults[resultsId];
        
        // Сортируем результаты по очкам (25, 18, 15...)
        const sortedResults = Object.entries(gpResults)
            .filter(([driverName]) => driverName !== "000") // Исключаем заглушки
            .sort((a, b) => b[1] - a[1]) // Сортируем по убыванию очков
            .slice(0, 3); // Берём топ-3
        
        // Формируем результат
        const winners = {
            first: null,
            second: null,
            third: null,
            firstTeam: null,
            secondTeam: null,
            thirdTeam: null
        };
        
        if (sortedResults.length >= 1) {
            winners.first = sortedResults[0][0];
            winners.firstTeam = getDriverTeam(sortedResults[0][0]);
        }
        if (sortedResults.length >= 2) {
            winners.second = sortedResults[1][0];
            winners.secondTeam = getDriverTeam(sortedResults[1][0]);
        }
        if (sortedResults.length >= 3) {
            winners.third = sortedResults[2][0];
            winners.thirdTeam = getDriverTeam(sortedResults[2][0]);
        }
        
        return winners;
    }
    
    // Заглушка, если данных нет
    return { first: '—', second: '—', third: '—', firstTeam: '', secondTeam: '', thirdTeam: '' };
}

function renderMainPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="mainPage">
            <h2>Гран-При сезона 2026</h2>
            <div class="main-gp-cards" id="mainGpCards"></div>
            <div class="tires-divider"></div>
            <div class="main-standings">
                <div class="main-drivers" id="mainDrivers"></div>
                <div class="main-constructors" id="mainConstructors"></div>
            </div>
        </div>
    `;

    renderMainGPCards();
    renderMainStandings();
}

const COMPOUND_TO_IMAGE = {
    "Hard": "Hard.png",
    "Medium": "Medium.png", 
    "Soft": "Soft.png"
};

const COMPOUND_DISPLAY = {
    "Hard": "Hard",
    "Medium": "Medium", 
    "Soft": "Soft"
};

const ALL_COMPOUNDS = ["C5", "C4", "C3", "C2", "C1"];

function updateTiresDisplay() {
    const dryTiresContainer = document.querySelector('.dry-tires');
    if (!dryTiresContainer) return;
    
    const tireItems = dryTiresContainer.querySelectorAll('.tire-item');
    
    const activeTires = {
        [currentTireConfig.hard]: "Hard",
        [currentTireConfig.medium]: "Medium",
        [currentTireConfig.soft]: "Soft"
    };
    
    tireItems.forEach((item, index) => {
        const compoundSpan = item.querySelector('.tire-name:last-child');
        const nameSpan = item.querySelector('.tire-name:first-child');
        const tireImage = item.querySelector('.tire-image');
        
        if (!compoundSpan || !tireImage) return;
        
        const compound = ALL_COMPOUNDS[index];
        compoundSpan.textContent = compound;
        
        if (activeTires[compound]) {
            const tireType = activeTires[compound];
            const imageName = COMPOUND_TO_IMAGE[tireType];
            const displayName = COMPOUND_DISPLAY[tireType];
            
            if (nameSpan) {
                nameSpan.textContent = displayName;
            }
            
            tireImage.src = `Images/Wheels/${imageName}`;
            tireImage.classList.remove('inactive');
            tireImage.classList.add('active');
        } else {
            if (nameSpan) {
                nameSpan.textContent = "---";
            }
            tireImage.classList.remove('active');
            tireImage.classList.add('inactive');
        }
    });
}

async function renderMainGPCards() {
    const container = document.getElementById('mainGpCards');
    if (!container) return;
    
    const now = new Date();
    
    if (typeof tracksData === 'undefined') {
        container.innerHTML = '<div class="error">Ошибка загрузки данных календаря</div>';
        return;
    }
    
    const allGPs = Object.values(tracksData).sort((a, b) => 
        new Date(a.date) - new Date(b.date)
    ).filter(gp => !gp.canceled);
    
    let currentGP = null;
    let currentGPIndex = -1;
    
    // Функция для получения "конца дня" (23:59:59)
    const getEndOfDay = (date) => {
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);
        return endOfDay;
    };
    
    // Находим текущий/предстоящий Гран-При
    for (let i = 0; i < allGPs.length; i++) {
        const gpDate = new Date(allGPs[i].date);
        const gpStartTime = gpDate;
        const gpEndOfDay = getEndOfDay(gpDate);
        
        // Если сейчас между стартом и концом дня - показываем эту гонку
        if (now >= gpStartTime && now <= gpEndOfDay) {
            currentGP = allGPs[i];
            currentGPIndex = i;
            break;
        }
        // Если гонка ещё не началась
        else if (now < gpStartTime) {
            currentGP = allGPs[i];
            currentGPIndex = i;
            break;
        }
    }
    
    if (!currentGP && allGPs.length > 0) {
        currentGP = allGPs[allGPs.length - 1];
        currentGPIndex = allGPs.length - 1;
    }
    
    // Находим предыдущий и следующий Гран-При
    let prevGP = null;
    let nextGP = null;
    
    if (currentGPIndex > 0) {
        prevGP = allGPs[currentGPIndex - 1];
    }
    if (currentGPIndex < allGPs.length - 1) {
        nextGP = allGPs[currentGPIndex + 1];
    }
    
    let html = '<div class="main-gp-wrapper">';
    
    // Левая колонка с плашками предыдущего и следующего Гран-При
    html += '<div class="main-gp-sidebar">';
    
    // Плашка предыдущего Гран-При (с подиумом)
    if (prevGP) {
        const winners = getRaceWinners(prevGP.id);
        
        let podiumHtml = '';
        
        if (winners.first && winners.first !== '—') {
            podiumHtml += `
                <div class="podium-item first">
                    <span class="podium-number">1</span>
                    <span class="podium-name">${winners.first}</span>
                    <div class="podium-team-wrapper">
                        <span class="podium-team">${winners.firstTeam}</span>
                        <img src="Images/Teams/${getTeamLogo(winners.firstTeam)}" alt="${winners.firstTeam}" class="podium-team-logo">
                    </div>
                </div>
            `;
        } else {
            podiumHtml += `<div class="podium-item"><span class="podium-name" style="text-align:center; width:100%;">Нет данных</span></div>`;
        }
        
        if (winners.second && winners.second !== '—') {
            podiumHtml += `
                <div class="podium-item second">
                    <span class="podium-number">2</span>
                    <span class="podium-name">${winners.second}</span>
                    <div class="podium-team-wrapper">
                        <span class="podium-team">${winners.secondTeam}</span>
                        <img src="Images/Teams/${getTeamLogo(winners.secondTeam)}" alt="${winners.secondTeam}" class="podium-team-logo">
                    </div>
                </div>
            `;
        }
        
        if (winners.third && winners.third !== '—') {
            podiumHtml += `
                <div class="podium-item third">
                    <span class="podium-number">3</span>
                    <span class="podium-name">${winners.third}</span>
                    <div class="podium-team-wrapper">
                        <span class="podium-team">${winners.thirdTeam}</span>
                        <img src="Images/Teams/${getTeamLogo(winners.thirdTeam)}" alt="${winners.thirdTeam}" class="podium-team-logo">
                    </div>
                </div>
            `;
        }
        
        html += `
            <div class="main-gp-card small-card prev-gp" data-gp-id="${prevGP.id}">
                <div class="main-gp-header">
                    <img src="Images/Flags/${prevGP.country}.svg" alt="flag" class="flag-main">
                    <h3>${prevGP.name}</h3>
                    <span class="main-gp-status past">Предыдущее</span>
                </div>
                <div class="gp-title-divider"></div>
                <div class="prev-gp-podium">
                    <div class="podium-list">
                        ${podiumHtml}
                    </div>
                </div>
                <div class="podium-divider"></div>
            </div>
        `;
    }
    
    if (nextGP) {
        let sprintStatusHtml = '';
        if (nextGP.hasSprint) {
            sprintStatusHtml = `
                <div class="gp-title-divider"></div>
                <div class="next-gp-sprint">
                    <span class="sprint-badge next-sprint-badge">СПРИНТ</span>
                </div>
            `;
        }
        
        html += `
            <div class="main-gp-card small-card next-gp" data-gp-id="${nextGP.id}">
                <div class="main-gp-header">
                    <img src="Images/Flags/${nextGP.country}.svg" alt="flag" class="flag-main">
                    <h3>${nextGP.name}</h3>
                    <span class="main-gp-status upcoming">Следующее</span>
                </div>
                <div class="gp-title-divider"></div>
                <div class="next-gp-info">
                    <div class="next-gp-date">${formatDate(nextGP.date)}</div>
                    <div class="next-gp-track">${nextGP.trackName}</div>
                    <div class="next-gp-location">${nextGP.location}</div>
                </div>
                ${sprintStatusHtml}
                <div class="podium-divider"></div>
            </div>
        `;
    }
    
    html += '</div>'; // Закрываем sidebar
    
    // Основной блок с текущим Гран-При
    html += '<div class="main-gp-container">';
    
    if (currentGP) {
        const gpDate = new Date(currentGP.date);
        const gpStartTime = gpDate;
        const gpEndTime = new Date(gpDate.getTime() + (2 * 60 * 60 * 1000));
        const gpEndOfDay = getEndOfDay(gpDate);
        
        const isLive = now >= gpStartTime && now <= gpEndTime;
        const isFinished = now > gpEndTime && now <= gpEndOfDay;
        const isToday = gpDate.toDateString() === now.toDateString();
        
        let statusText = '';
        let statusClass = '';
        let cardClass = '';
        let showTimer = false;
        let showStreamButton = false;
        
        if (isLive) {
            statusText = 'Идёт сейчас';
            statusClass = 'live';
            cardClass = 'live';
            showStreamButton = true;
        } else if (isFinished) {
            statusText = 'Завершён';
            statusClass = 'past';
            cardClass = 'past';
            showStreamButton = true;
        } else if (isToday && now < gpStartTime) {
            statusText = 'Сегодня';
            statusClass = 'today';
            cardClass = 'today';
            showTimer = true;
        } else if (now < gpStartTime) {
            statusText = 'Предстоящее';
            statusClass = 'upcoming';
            cardClass = 'upcoming';
            showTimer = true;
        }
        
        let actionHtml = '';
        if (showStreamButton) {
            if (currentGP.recordingRace) {
                actionHtml = `
                    <div class="main-gp-action">
                        <a href="${currentGP.recordingRace}" class="main-stream-btn" target="_blank">
                            Трансляция
                        </a>
                    </div>
                `;
            } else {
                actionHtml = `
                    <div class="main-gp-action">
                        <div class="main-no-stream">Нет трансляции</div>
                    </div>
                `;
            }
        } else if (showTimer) {
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
        }
        
        html += `
            <div class="main-gp-card main-card ${cardClass}" 
                 data-gp-id="${currentGP.id}">
                <div class="main-gp-header">
                    <img src="Images/Flags/${currentGP.country}.svg" alt="flag" title="${currentGP.state}" class="flag-main">
                    <h3>${currentGP.name}</h3>
                    <span class="main-gp-status ${statusClass}">${statusText}</span>
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

                <div class="weather-card" id="weatherCard">
                    <div class="weather-header">
                        <h3>Погода на гонку</h3>
                    </div>
                    <div class="tires-divider"></div>
                    <div class="weather-block">
                        <div class="weather-loader">Загрузка погоды...</div>
                    </div>
                </div>
            </div>
        `;
        
        html += '</div>'; // Закрываем main-gp-container
        html += '</div>'; // Закрываем main-gp-wrapper
        container.innerHTML = html;
        
        updateTiresDisplay();
        
        await loadWeatherForGP(currentGP, isLive);
        
        addMainGPCardListener();
        addSidebarCardListeners();
        
        initMainTimer();
        
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
        html += '</div></div>';
        container.innerHTML = html;
    }
}

function getTeamLogo(teamName) {
    if (!teamName) return '';
    
    const teamLogos = {
        'Red Bull': 'RedBull-m.png',
        'Mercedes': 'Mercedes-m.png',
        'Ferrari': 'Ferrari-m.png',
        'McLaren': 'McLaren-m.png',
        'Aston Martin': 'AstonMartin-m.png',
        'Alpine': 'Alpine-m.png',
        'Williams': 'Williams-m.png',
        'Racing Bulls': 'RacingBulls-m.png',
        'Audi': 'Audi-m.png',
        'Haas': 'Haas-m.png',
        'Cadillac': 'Cadillac-m.png'
    };
    
    return teamLogos[teamName] || '';
}

function addSidebarCardListeners() {
    const sidebarCards = document.querySelectorAll('.small-card');
    sidebarCards.forEach(card => {
        const gpId = card.getAttribute('data-gp-id');
        if (gpId) {
            card.style.cursor = 'pointer';
            card.removeEventListener('click', handleSidebarCardClick);
            card.addEventListener('click', handleSidebarCardClick);
            card.setAttribute('data-gp-id-click', gpId);
        }
    });
}

function handleSidebarCardClick(e) {
    const card = e.currentTarget;
    const gpId = card.getAttribute('data-gp-id-click') || card.getAttribute('data-gp-id');
    
    window.location.hash = 'calendar';
    loadTabContent('calendar');
    
    if (gpId) {
        setTimeout(() => {
            scrollToGrandPrix(gpId);
        }, 300);
    }
}

async function loadWeatherForGP(gp, isLive) {
    const weatherCard = document.getElementById('weatherCard');
    if (!weatherCard) return;
    
    const weatherBlock = weatherCard.querySelector('.weather-block');
    if (!weatherBlock) return;
    
    try {
        let weatherData;
        
        if (isLive) {
            weatherData = await fetchWeatherData(gp.id);
        } else {
            weatherData = await fetchWeatherForecast(gp.id, gp.date);
        }
        
        if (weatherData) {
            updateWeatherDisplay(weatherBlock, weatherData, isLive);
        } else {
            weatherBlock.innerHTML = '<div class="weather-error">Не удалось загрузить погоду</div>';
        }
    } catch (error) {
        weatherBlock.innerHTML = '<div class="weather-error">Ошибка загрузки погоды</div>';
    }
}

function getWeatherIcon(condition) {
    const conditionLower = condition.toLowerCase();
    
    if (conditionLower.includes('солнеч') || conditionLower.includes('ясн') || 
        conditionLower.includes('sunny') || conditionLower.includes('clear')) {
        return 'sun';
    }
    if (conditionLower.includes('дожд') || conditionLower.includes('rain') || 
        conditionLower.includes('drizzle') || conditionLower.includes('ливн')) {
        return 'rain';
    }
    if (conditionLower.includes('туман') || conditionLower.includes('fog') || 
        conditionLower.includes('mist') || conditionLower.includes('дым')) {
        return 'fog';
    }
    return 'cloud';
}

function updateWeatherDisplay(container, data, isLive) {
    let condition, temp, windKph, precipMm, humidity;
    
    try {
        if (isLive) {
            condition = data.current.condition.text;
            temp = data.current.temp_c;
            windKph = data.current.wind_kph;
            precipMm = data.current.precip_mm;
            humidity = data.current.humidity;
        } else {
            if (data.forecast && data.forecast.forecastday && data.forecast.forecastday[0]) {
                const forecast = data.forecast.forecastday[0].day;
                condition = forecast.condition.text;
                temp = forecast.avgtemp_c;
                windKph = forecast.maxwind_kph;
                precipMm = forecast.totalprecip_mm;
                humidity = forecast.avghumidity;
            } else if (data.current) {
                condition = data.current.condition.text;
                temp = data.current.temp_c;
                windKph = data.current.wind_kph;
                precipMm = data.current.precip_mm;
                humidity = data.current.humidity;
            } else {
                throw new Error('Invalid weather data structure');
            }
        }
        
        const weatherIcon = getWeatherIcon(condition);
        let precipPercent = Math.min(Math.round((precipMm / 10) * 100), 100);
        if (precipMm === 0) precipPercent = 0;
        
        container.innerHTML = `
            <div class="weather">
                <img src="Images/Weather/${weatherIcon}.png" alt="weather" class="weather-image active">
                <span class="weather-name">Погода</span>
                <span class="weather-value">${condition}</span>
            </div>
            <div class="weather">
                <img src="Images/Weather/rain.png" alt="weather" class="weather-image active">
                <span class="weather-name">Осадки</span>
                <span class="weather-value">${precipPercent}%</span>
            </div>
            <div class="weather">
                <img src="Images/Weather/cloud.png" alt="weather" class="weather-image active">
                <span class="weather-name">Ветер</span>
                <span class="weather-value">${Math.round(windKph / 3.6)} м/с</span>
            </div>
            <div class="weather">
                <img src="Images/Weather/sun.png" alt="weather" class="weather-image active">
                <span class="weather-name">Темп.°C</span>
                <span class="weather-value">${Math.round(temp)} °C</span>
            </div>
        `;
        
        updateWetTires(precipPercent);
        
    } catch (error) {
        container.innerHTML = '<div class="weather-error">Ошибка отображения погоды</div>';
    }
}

function updateWetTires(precipPercent) {
    const wetTires = document.querySelectorAll('.wet-tires .tire-item');
    
    if (precipPercent >= 50) {
        wetTires.forEach(tire => {
            const img = tire.querySelector('.tire-image');
            if (img) {
                img.classList.remove('inactive');
                img.classList.add('active');
            }
        });
    } 
    else {
        wetTires.forEach(tire => {
            const img = tire.querySelector('.tire-image');
            if (img) {
                img.classList.remove('active');
                img.classList.add('inactive');
            }
        });
    }
}

function initMainTimer() {
    if (mainTimerInterval) {
        clearInterval(mainTimerInterval);
        mainTimerInterval = null;
    }
    
    const timer = document.querySelector('.main-timer');
    if (timer) {
        updateMainTimer(timer);
        mainTimerInterval = setInterval(() => {
            const currentTimer = document.querySelector('.main-timer');
            if (currentTimer) {
                updateMainTimer(currentTimer);
            } else {
                if (mainTimerInterval) {
                    clearInterval(mainTimerInterval);
                    mainTimerInterval = null;
                }
            }
        }, 1000);
    }
}

function updateMainTimer(timer) {
    if (!timer || !timer.dataset || !timer.dataset.date) return;
    
    const targetDate = new Date(timer.dataset.date);
    const now = new Date();
    const gpEndTime = new Date(targetDate.getTime() + (2 * 60 * 60 * 1000));
    const diff = targetDate - now;

    if (now >= targetDate && now <= gpEndTime) {
        const card = timer.closest('.main-gp-card');
        const gpId = card ? card.getAttribute('data-gp-id') : null;
        const track = gpId && typeof tracksData !== 'undefined' ? Object.values(tracksData).find(t => t.id === gpId) : null;
        
        if (track && track.recordingRace) {
            timer.outerHTML = `
                <div class="main-gp-action">
                    <a href="${track.recordingRace}" class="main-stream-btn" target="_blank">
                        Трансляция
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
        
        const status = card ? card.querySelector('.main-gp-status') : null;
        if (status) {
            status.textContent = 'Идёт сейчас';
            status.classList.add('live');
            if (card) card.classList.add('live');
        }
        return;
    }
    
    if (now > gpEndTime) {
        timer.outerHTML = `
            <div class="main-gp-action">
                <div class="main-no-stream">Гонка завершена</div>
            </div>
        `;
        return;
    }

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

function addMainGPCardListener() {
    // Ищем главную карточку (текущий Гран-При)
    const gpCard = document.querySelector('.main-gp-card.main-card');
    if (gpCard) {
        const gpId = gpCard.getAttribute('data-gp-id');
        if (gpId) {
            gpCard.style.cursor = 'pointer';
            gpCard.removeEventListener('click', handleGPCardClick);
            gpCard.addEventListener('click', handleGPCardClick);
            gpCard.setAttribute('data-gp-id-click', gpId);
            console.log('Главная карточка привязана, gpId:', gpId);
        } else {
            console.log('У главной карточки нет data-gp-id');
        }
    } else {
        console.log('Главная карточка не найдена');
    }
}

function handleGPCardClick(e) {
    if (e.target.tagName === 'A') return;
    
    const card = e.currentTarget;
    const gpId = card.getAttribute('data-gp-id-click') || card.getAttribute('data-gp-id');
    
    window.location.hash = 'calendar';
    loadTabContent('calendar');
    
    if (gpId) {
        setTimeout(() => {
            scrollToGrandPrix(gpId);
        }, 300);
    }
}

function scrollToGrandPrix(gpId) {
    const gpElement = document.querySelector(`.calendar-card[data-gp-id="${gpId}"]`);
    if (gpElement) {
        gpElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        gpElement.classList.add('highlight');
        setTimeout(() => {
            gpElement.classList.remove('highlight');
        }, 2000);
    }
}

function renderMainStandings() {
    renderMainDrivers();
    renderMainConstructors();
}

function renderMainDrivers() {
    const container = document.getElementById('mainDrivers');
    if (!container) return;
    
    if (typeof driversStandings === 'undefined' || typeof sprintStandings === 'undefined') {
        container.innerHTML = '<div class="error">Ошибка загрузки данных пилотов</div>';
        return;
    }
    
    const driversWithSprint = JSON.parse(JSON.stringify(driversStandings));
    const sprintPointsMap = {};
    
    sprintStandings.forEach(driver => {
        sprintPointsMap[driver.name] = driver.points;
    });
    
    driversWithSprint.forEach(driver => {
        const sprintPoints = sprintPointsMap[driver.name] || 0;
        driver.totalPoints = driver.points + sprintPoints;
    });
    
    const topDrivers = driversWithSprint
        .sort((a, b) => b.totalPoints - a.totalPoints)
        .slice(0, 3);
    
    let html = `
        <h2>Лидеры 2026</h2>
        <div class="main-standings-list">
    `;
    
    topDrivers.forEach((driver, index) => {
        const sprintPoints = sprintPointsMap[driver.name] || 0;
        
        html += `
            <div class="main-standing-item ${index === 0 ? 'first' : ''}">
                <div class="main-standing-position">${index + 1}</div>
                <div class="main-standing-info">
                    <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="main-standing-team-logo">
                    <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" title="${driver.state}" class="main-standing-flag">
                    <span class="main-standing-name">${driver.name}</span>
                </div>
                <div class="main-standing-points">${driver.points + sprintPoints}</div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function renderMainConstructors() {
    const container = document.getElementById('mainConstructors');
    if (!container) return;
    
    if (typeof constructorsStandings === 'undefined') {
        container.innerHTML = '<div class="error">Ошибка загрузки данных команд</div>';
        return;
    }
    
    const topTeams = [...constructorsStandings]
        .sort((a, b) => b.points - a.points)
        .slice(0, 3);
    
    let html = `
        <h2>Лидеры кубка конструкторов 2026</h2>
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
    if (!content) return;
    
    if (mainTimerInterval) {
        clearInterval(mainTimerInterval);
        mainTimerInterval = null;
    }
    
    switch (tabName) {
        case 'teams':
            if (typeof renderTeams === 'function') {
                renderTeams();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 'drivers':
            if (typeof renderDrivers === 'function') {
                renderDrivers();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 'calendar':
            if (typeof renderCalendar === 'function') {
                renderCalendar();
            }
            break;
        case 'results':
            if (typeof renderResults === 'function') {
                renderResults();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 'stats':
            if (typeof renderStats === 'function') {
                renderStats();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        default:
            renderMainPage();
            window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    setTimeout(initNavigation, 100);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}