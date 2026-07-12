// ==============================================
// ГЛАВНАЯ СТРАНИЦА
// ==============================================

const WEATHER_API_KEY = 'YOUR_API_KEY_HERE';

const weatherData = {
    type: "cloud",
    typeName: "Загрузка...",
    temperature: "-- ",
    wind: "-- ",
    humidity: "-- ",
    rain: 0
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

// ==============================================
// ПОЛУЧЕНИЕ ПОГОДЫ
// ==============================================
async function fetchWeather(lat, lon) {
    if (WEATHER_API_KEY === '92d82d196e8a4e82af4113434261603') {
        console.warn('WeatherAPI ключ не настроен.');
        return null;
    }
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=1&aqi=no`
        );
        return await response.json();
    } catch (error) {
        console.error('Ошибка погоды:', error);
        return null;
    }
}

function getWeatherType(code) {
    if (code === 1000) return { type: "sun" };
    if (code >= 1003 && code <= 1030) return { type: "cloud" };
    if ((code >= 1063 && code <= 1201) || (code >= 1240 && code <= 1246)) return { type: "rain" };
    if (code >= 1204 && code <= 1237) return { type: "snow" };
    if (code >= 1135 && code <= 1147) return { type: "fog" };
    return { type: "sun" };
}

// ==============================================
// ИНИЦИАЛИЗАЦИЯ
// ==============================================
function initMainPage(container) {
    'use strict';
    
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
    
    loadRealWeather(blocks);
    startMainTimer();
}

// ==============================================
// ЗАГРУЗКА ПОГОДЫ
// ==============================================
async function loadRealWeather(blocks) {
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
    
    if (!nextTrack || !nextTrack.coords) return;
    
    const data = await fetchWeather(nextTrack.coords.lat, nextTrack.coords.lon);
    if (!data) return;
    
    const current = data.current;
    const forecast = data.forecast.forecastday[0].day;
    const weatherType = getWeatherType(current.condition.code);
    
    weatherData.type = weatherType.type;
    weatherData.typeName = current.condition.text;
    weatherData.temperature = Math.round(current.temp_c);
    weatherData.wind = (current.wind_kph / 3.6).toFixed(1);
    weatherData.humidity = current.humidity;
    weatherData.rain = forecast.daily_chance_of_rain || 0;
    
    updateWeatherBlock(blocks);
    updateTyreBlock(blocks);
}

function updateWeatherBlock(blocks) {
    const block = blocks.querySelector('.weather-block');
    if (!block) return;
    block.innerHTML = `
        <div class="main-block-title">Погода</div>
        <div class="weather-header">
            <img src="Images/Weather/${weatherData.type}.png" alt="${weatherData.typeName}" class="weather-icon-large">
            <span class="weather-type">${weatherData.typeName}</span>
        </div>
        <hr class="main-divider">
        <div class="weather-params">
            <div class="weather-param-cell">
                <span class="weather-value">${weatherData.temperature} °C</span>
                <span class="weather-label">Температура</span>
            </div>
            <div class="weather-param-cell">
                <span class="weather-value">${weatherData.wind} м/с</span>
                <span class="weather-label">Ветер</span>
            </div>
            <div class="weather-param-cell">
                <span class="weather-value">${weatherData.humidity} %</span>
                <span class="weather-label">Влажность</span>
            </div>
            <div class="weather-param-cell">
                <span class="weather-value">${weatherData.rain} %</span>
                <span class="weather-label">Осадки</span>
            </div>
        </div>
    `;
}

function updateTyreBlock(blocks) {
    const block = blocks.querySelector('.tyres-block');
    if (!block) return;
    
    const rainActive = weatherData.rain > 50;
    const topTyres = tyreData.compounds.slice(0, 5);
    const bottomTyres = tyreData.compounds.slice(5);
    
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
}

// ==============================================
// ПЛАШКИ
// ==============================================
function createWeatherBlock() {
    const block = document.createElement('div');
    block.className = 'main-block weather-block';
    block.innerHTML = `
        <div class="main-block-title">Погода</div>
        <div class="weather-header">
            <img src="Images/Weather/cloud.png" class="weather-icon-large">
            <span class="weather-type">Загрузка...</span>
        </div>
        <hr class="main-divider">
        <div class="weather-params">
            <div class="weather-param-cell"><span class="weather-value">--°C</span><span class="weather-label">Температура</span></div>
            <div class="weather-param-cell"><span class="weather-value">-- м/с</span><span class="weather-label">Ветер</span></div>
            <div class="weather-param-cell"><span class="weather-value">--%</span><span class="weather-label">Влажность</span></div>
            <div class="weather-param-cell"><span class="weather-value">--%</span><span class="weather-label">Осадки</span></div>
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
        if (futureGPs.length > 0) { nextGP = futureGPs[0]; nextTrack = getTrackById(nextGP.track); }
    }
    
    if (nextGP && nextTrack) {
        const raceDate = new Date(nextGP.date);
        const diff = raceDate - now;
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        
        block.innerHTML = `
            <div class="main-block-title">
                <img src="Images/Flags/${nextTrack.country}.svg" class="nextgp-flag-inline" title="${getCountryName(nextTrack.country)}"> ${nextTrack.name}
            </div>
            <div class="nextgp-details">
                <div class="nextgp-detail"><img src="Images/Icon/location.webp" class="main-icon"><span class="nextgp-value">${nextTrack.location}</span></div>
                <div class="nextgp-detail"><img src="Images/Icon/track.webp" class="main-icon"><span class="nextgp-value">${nextTrack.trackName}</span></div>
                <div class="nextgp-detail"><img src="Images/Icon/calendar.webp" class="main-icon"><span class="nextgp-value">${formatDateLong(nextGP.date)}</span></div>
            </div>
            <hr class="main-divider">
            <div class="nextgp-countdown">
                <span>До гонки:</span>
                <span class="countdown-timer"><strong>${d}</strong> дн. <strong>${h}</strong> ч. <strong>${m}</strong> м. <strong>${s}</strong> с.</span>
            </div>
        `;
    } else {
        block.innerHTML = `<div class="main-block-title">🏎️ Предстоящий Гран-при</div><div class="nextgp-empty"><span>Сезон завершён</span><p>Ждём новый сезон!</p></div>`;
    }
    
    block.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(btn => { if (btn.dataset.tab === 'calendar') btn.click(); });
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
        return `<div class="tyre-item ${isActive ? 'clickable' : 'dimmed'}"><span class="tyre-name">${t.name}</span><img src="${t.img}" class="tyre-img"><span class="tyre-type">${t.active ? t.type : '---'}</span></div>`;
    }).join('');
    
    let bottomHTML = bottomTyres.map(t => {
        const isActive = (t.id === 'INT' || t.id === 'WET') ? rainActive : t.active;
        const typeLabel = (t.id === 'INT' || t.id === 'WET') ? '' : (t.active ? t.type : '---');
        return `<div class="tyre-item ${isActive ? 'clickable' : 'dimmed'}"><span class="tyre-name">${t.name}</span><img src="${t.img}" class="tyre-img">${typeLabel ? `<span class="tyre-type">${typeLabel}</span>` : ''}</div>`;
    }).join('');
    
    block.innerHTML = `<div class="main-block-title">🛞 Состав шин на ГП</div><div class="tyres-top">${topHTML}</div><hr class="main-divider"><div class="tyres-bottom">${bottomHTML}</div>`;
    return block;
}

// ==============================================
// ТАЙМЕР
// ==============================================
let mainTimerInterval = null;

function startMainTimer() {
    if (mainTimerInterval) clearInterval(mainTimerInterval);
    mainTimerInterval = setInterval(() => {
        const countdownTimer = document.querySelector('.countdown-timer');
        if (!countdownTimer) { clearInterval(mainTimerInterval); return; }
        
        const now = new Date();
        let nextGP = null;
        if (typeof calendarData !== 'undefined') {
            const futureGPs = calendarData.filter(gp => !gp.canceled && new Date(gp.date) > now).sort((a, b) => new Date(a.date) - new Date(b.date));
            if (futureGPs.length > 0) nextGP = futureGPs[0];
        }
        
        if (nextGP) {
            const raceDate = new Date(nextGP.date);
            const diff = raceDate - now;
            if (diff <= 0) {
                countdownTimer.innerHTML = '<strong>0</strong> дн. <strong>0</strong> ч. <strong>0</strong> м. <strong>0</strong> с.';
                clearInterval(mainTimerInterval);
                return;
            }
            const d = Math.floor(diff / 86400000);
            const h = Math.floor((diff % 86400000) / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            countdownTimer.innerHTML = `<strong>${d}</strong> дн. <strong>${h}</strong> ч. <strong>${m}</strong> м. <strong>${s}</strong> с.`;
        }
    }, 1000);
}