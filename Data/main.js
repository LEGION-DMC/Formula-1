// ==============================================
// ГЛАВНАЯ СТРАНИЦА
// ==============================================

const weatherData = {
    type: "sun",
    typeName: "Солнечно",
    temperature: 24,
    wind: 3.2,
    rain: 5
};

const tyreData = {
    compounds: [
        { id: "C1", name: "C1", type: "Hard", img: "Images/Wheels/Hard.png", active: true },
        { id: "C2", name: "C2", type: "Medium", img: "Images/Wheels/Medium.png", active: true },
        { id: "C3", name: "C3", type: "Soft", img: "Images/Wheels/Soft.png", active: true },
        { id: "C4", name: "C4", type: "---", img: "Images/Wheels/Soft.png", active: false },
        { id: "C5", name: "C5", type: "---", img: "Images/Wheels/Soft.png", active: false },
        { id: "INT", name: "Intermediate", type: "", img: "Images/Wheels/Intermediate.png", active: false },
        { id: "WET", name: "Wet", type: "", img: "Images/Wheels/Wet.png", active: false }
    ]
};

function initMainPage(container) {
    'use strict';
    
    // Сбрасываем стили, которые могли остаться от других вкладок
    container.style.display = 'block';
    container.style.flexDirection = '';
    container.style.gap = '';
    container.style.padding = '30px 20px';
    
    container.innerHTML = '';
    
    const blocks = document.createElement('div');
    blocks.className = 'main-blocks';
    
    blocks.appendChild(createWeatherBlock());
    blocks.appendChild(createNextGPBlock());
    blocks.appendChild(createTyreBlock());
    
    container.appendChild(blocks);
    
    // Запускаем обновление таймера каждую секунду
    startMainTimer();
}

// Таймер для главной страницы
let mainTimerInterval = null;

function startMainTimer() {
    if (mainTimerInterval) clearInterval(mainTimerInterval);
    
    mainTimerInterval = setInterval(() => {
        const countdownTimer = document.querySelector('.countdown-timer');
        if (!countdownTimer) {
            clearInterval(mainTimerInterval);
            return;
        }
        
        const now = new Date();
        let nextGP = null;
        
        if (typeof calendarData !== 'undefined') {
            const futureGPs = calendarData
                .filter(gp => !gp.canceled && new Date(gp.date) > now)
                .sort((a, b) => new Date(a.date) - new Date(b.date));
            
            if (futureGPs.length > 0) {
                nextGP = futureGPs[0];
            }
        }
        
        if (nextGP) {
            const raceDate = new Date(nextGP.date);
            const diff = raceDate - now;
            
            if (diff <= 0) {
                countdownTimer.innerHTML = '<strong>0</strong> дн. <strong>0</strong> ч. <strong>0</strong> м. <strong>0</strong> с.';
                clearInterval(mainTimerInterval);
                return;
            }
            
            const daysLeft = Math.floor(diff / 86400000);
            const hoursLeft = Math.floor((diff % 86400000) / 3600000);
            const minutesLeft = Math.floor((diff % 3600000) / 60000);
            const secondsLeft = Math.floor((diff % 60000) / 1000);
            
            countdownTimer.innerHTML = `
                <strong>${daysLeft}</strong> дн. <strong>${hoursLeft}</strong> ч. <strong>${minutesLeft}</strong> м. <strong>${secondsLeft}</strong> с.
            `;
        }
    }, 1000);
}

function createWeatherBlock() {
    const block = document.createElement('div');
    block.className = 'main-block weather-block';
    
    block.innerHTML = `
        <div class="main-block-title">Погода</div>
        <div class="weather-header">
            <img src="Images/Weather/${weatherData.type}.png" alt="${weatherData.typeName}" class="weather-icon-large">
            <span class="weather-type">${weatherData.typeName}</span>
        </div>
        <hr class="main-divider">
        <div class="weather-params">
            <div class="weather-param-cell">
                <span class="weather-value">${weatherData.temperature}°C</span>
                <span class="weather-label">Температура</span>
            </div>
            <div class="weather-param-cell">
                <span class="weather-value">${weatherData.wind} м/с</span>
                <span class="weather-label">Ветер</span>
            </div>
            <div class="weather-param-cell">
                <span class="weather-value">${weatherData.rain}%</span>
                <span class="weather-label">Осадки</span>
            </div>
        </div>
    `;
    
    return block;
}

function createNextGPBlock() {
    const block = document.createElement('div');
    block.className = 'main-block nextgp-block clickable';
    
    const now = new Date();
    let nextGP = null;
    let nextTrack = null;
    
    if (typeof calendarData !== 'undefined') {
        const futureGPs = calendarData
            .filter(gp => !gp.canceled && new Date(gp.date) > now)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
        
        if (futureGPs.length > 0) {
            nextGP = futureGPs[0];
            nextTrack = getTrackById(nextGP.track);
        }
    }
    
    if (nextGP && nextTrack) {
        const raceDate = new Date(nextGP.date);
        const diff = raceDate - now;  // ← добавить эту строку
        const daysLeft = Math.floor(diff / 86400000);
        const hoursLeft = Math.floor((diff % 86400000) / 3600000);
        const minutesLeft = Math.floor((diff % 3600000) / 60000);
        const secondsLeft = Math.floor((diff % 60000) / 1000);
        
        block.innerHTML = `
            <div class="main-block-title">
                <img src="Images/Flags/${nextTrack.country}.svg" class="nextgp-flag-inline" title="${getCountryName(nextTrack.country)}">
                ${nextTrack.name}
            </div>
            <div class="nextgp-details">
                <div class="nextgp-detail">
                    <img src="Images/Icon/location.webp" class="main-icon" alt="">
                    <span class="nextgp-value">${nextTrack.location}</span>
                </div>
                <div class="nextgp-detail">
                    <img src="Images/Icon/track.webp" class="main-icon" alt="">
                    <span class="nextgp-value">${nextTrack.trackName}</span>
                </div>
                <div class="nextgp-detail">
                    <img src="Images/Icon/calendar.webp" class="main-icon" alt="">
                    <span class="nextgp-value">${formatDateLong(nextGP.date)}</span>
                </div>
            </div>
            <hr class="main-divider">
            <div class="nextgp-countdown">
                <span>До гонки:</span>
                <span class="countdown-timer">
                    <strong>${daysLeft}</strong> дн. <strong>${hoursLeft}</strong> ч. <strong>${minutesLeft}</strong> м. <strong>${secondsLeft}</strong> с.
                </span>
            </div>
        `;
    } else {
        block.innerHTML = `
            <div class="main-block-title">🏎️ Предстоящий Гран-при</div>
            <div class="nextgp-empty">
                <span>Сезон завершён</span>
                <p>Ждём новый сезон!</p>
            </div>
        `;
    }
    
    block.addEventListener('click', () => {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(btn => {
            if (btn.dataset.tab === 'calendar') btn.click();
        });
    });
    
    return block;
}

function createTyreBlock() {
    const block = document.createElement('div');
    block.className = 'main-block tyres-block';
    
    const topTyres = tyreData.compounds.slice(0, 5);
    const bottomTyres = tyreData.compounds.slice(5);
    const rainActive = weatherData.rain > 50;
    
    let topHTML = topTyres.map(t => {
        const isActive = t.active;
        const typeLabel = t.active ? t.type : '---';
        return `
            <div class="tyre-item ${isActive ? 'clickable' : 'dimmed'}">
                <span class="tyre-name">${t.name}</span>
                <img src="${t.img}" alt="${t.type}" class="tyre-img">
                <span class="tyre-type">${typeLabel}</span>
            </div>
        `;
    }).join('');
    
    let bottomHTML = bottomTyres.map(t => {
        const isActive = (t.id === 'INT' || t.id === 'WET') ? rainActive : t.active;
        const typeLabel = (t.id === 'INT' || t.id === 'WET') ? '' : (t.active ? t.type : '---');
        return `
            <div class="tyre-item ${isActive ? 'clickable' : 'dimmed'}">
                <span class="tyre-name">${t.name}</span>
                <img src="${t.img}" alt="${t.type}" class="tyre-img">
                ${typeLabel ? `<span class="tyre-type">${typeLabel}</span>` : ''}
            </div>
        `;
    }).join('');
    
    block.innerHTML = `
        <div class="main-block-title">Состав шин</div>
        <div class="tyres-top">${topHTML}</div>
        <hr class="main-divider">
        <div class="tyres-bottom">${bottomHTML}</div>
    `;
    
    return block;
}