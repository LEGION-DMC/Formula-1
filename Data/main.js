const weatherData = {
    type: "cloud",
    typeName: "Облачно",
    temperature: "22",
    wind: "3",
    humidity: "65",
    rain: 25
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
    
    startMainTimer();
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
                <span class="weather-value">~ ${weatherData.rain} %</span>
                <span class="weather-label">Вероятность осадков</span>
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
        const activeGPs = calendarData
            .filter(gp => !gp.canceled)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
        
        for (const gp of activeGPs) {
            const raceDate = new Date(gp.date);
            const raceEnd = new Date(raceDate.getTime() + 3 * 60 * 60 * 1000);
            
            if (raceEnd > now) {
                nextGP = gp;
                nextTrack = getTrackById(gp.track);
                break;
            }
        }
    }
    
    if (nextGP && nextTrack) {
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
            <div class="nextgp-footer">
                <div class="nextgp-countdown"><span>Загрузка...</span></div>
            </div>
        `;
    } else {
        block.innerHTML = `
            <div class="main-block-title">Сезон 2026</div>
            <div class="nextgp-empty"><span>Сезон завершён</span></div>
        `;
    }
    
    block.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(btn => {
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
        return `<div class="tyre-item ${t.active ? 'clickable' : 'dimmed'}"><span class="tyre-name">${t.name}</span><img src="${t.img}" class="tyre-img"><span class="tyre-type">${t.active ? t.type : '---'}</span></div>`;
    }).join('');
    
    let bottomHTML = bottomTyres.map(t => {
        const isActive = (t.id === 'INT' || t.id === 'WET') ? rainActive : t.active;
        const typeLabel = (t.id === 'INT' || t.id === 'WET') ? '' : (t.active ? t.type : '---');
        return `<div class="tyre-item ${isActive ? 'clickable' : 'dimmed'}"><span class="tyre-name">${t.name}</span><img src="${t.img}" class="tyre-img">${typeLabel ? `<span class="tyre-type">${typeLabel}</span>` : ''}</div>`;
    }).join('');
    
    block.innerHTML = `<div class="main-block-title">Состав шин</div><div class="tyres-top">${topHTML}</div><hr class="main-divider"><div class="tyres-bottom">${bottomHTML}</div>`;
    return block;
}

let mainTimerInterval = null;

function startMainTimer() {
    if (mainTimerInterval) clearInterval(mainTimerInterval);
    
    const updateTimer = () => {
        const block = document.querySelector('.nextgp-block');
        if (!block) { clearInterval(mainTimerInterval); return; }
        
        const now = new Date();
        let nextGP = null;
        let nextTrack = null;
        
        if (typeof calendarData !== 'undefined') {
            const activeGPs = calendarData
                .filter(gp => !gp.canceled)
                .sort((a, b) => new Date(a.date) - new Date(b.date));
            
            for (const gp of activeGPs) {
                const raceDate = new Date(gp.date);
                const raceEnd = new Date(raceDate.getTime() + 3 * 60 * 60 * 1000);
                
                if (raceEnd > now) {
                    nextGP = gp;
                    nextTrack = getTrackById(gp.track);
                    break;
                }
            }
        }
        
        if (!nextGP || !nextTrack) {
            block.innerHTML = `
                <div class="main-block-title">🏎️ Сезон 2026</div>
                <div class="nextgp-empty"><span>Сезон завершён</span></div>
            `;
            clearInterval(mainTimerInterval);
            return;
        }
        
        const raceDate = new Date(nextGP.date);
        const diff = raceDate - now;
        const oneHourBefore = new Date(raceDate.getTime() - 60 * 60 * 1000);
        
        // Обновляем только таймер, не трогая кнопки
        const countdownEl = block.querySelector('.countdown-timer');
        const raceBtnEl = block.querySelector('.main-gp-btn.race');
        const sprintBtn = block.querySelector('.main-gp-btn.sprint');
        const qualiBtn = block.querySelector('.main-gp-btn.quali');
        
        // Кнопки спринта и квалификации — обновляем только если их нет
        const linksContainer = block.querySelector('.nextgp-links');
        if (!linksContainer) {
            let linksHTML = '';
            if (nextGP.hasSprint && nextGP.recordingSprint) {
                linksHTML += `<a href="${nextGP.recordingSprint}" target="_blank" class="main-gp-btn sprint" onclick="event.stopPropagation()">Спринт</a>`;
            }
            if (nextGP.recordingQuali) {
                linksHTML += `<a href="${nextGP.recordingQuali}" target="_blank" class="main-gp-btn quali" onclick="event.stopPropagation()">Квалификация</a>`;
            }
            if (linksHTML) {
                const footer = block.querySelector('.nextgp-footer');
                if (footer) {
                    const linksDiv = document.createElement('div');
                    linksDiv.className = 'nextgp-links';
                    linksDiv.innerHTML = linksHTML;
                    footer.appendChild(linksDiv);
                }
            }
        } else {
            // Обновляем ссылки если их нет
            if (!sprintBtn && nextGP.hasSprint && nextGP.recordingSprint) {
                const sprintEl = document.createElement('a');
                sprintEl.href = nextGP.recordingSprint;
                sprintEl.target = '_blank';
                sprintEl.className = 'main-gp-btn sprint';
                sprintEl.textContent = 'Спринт';
                sprintEl.onclick = (e) => e.stopPropagation();
                linksContainer.appendChild(sprintEl);
            }
            if (!qualiBtn && nextGP.recordingQuali) {
                const qualiEl = document.createElement('a');
                qualiEl.href = nextGP.recordingQuali;
                qualiEl.target = '_blank';
                qualiEl.className = 'main-gp-btn quali';
                qualiEl.textContent = 'Квалификация';
                qualiEl.onclick = (e) => e.stopPropagation();
                linksContainer.appendChild(qualiEl);
            }
        }
        
        if (now >= oneHourBefore && now < raceDate) {
            // За час до гонки — кнопка
            if (countdownEl) countdownEl.style.display = 'none';
            if (!raceBtnEl) {
                const btnContainer = block.querySelector('.nextgp-countdown');
                if (btnContainer) {
                    btnContainer.innerHTML = nextGP.recordingRace 
                        ? `<a href="${nextGP.recordingRace}" target="_blank" class="main-gp-btn race" onclick="event.stopPropagation()">Гонка скоро начнётся</a>`
                        : '<span class="calendar-status-text">Гонка скоро начнётся</span>';
                }
            }
        } else if (now >= raceDate) {
            // Гонка идёт
            if (countdownEl) countdownEl.style.display = 'none';
            if (!raceBtnEl) {
                const btnContainer = block.querySelector('.nextgp-countdown');
                if (btnContainer) {
                    btnContainer.innerHTML = nextGP.recordingRace 
                        ? `<a href="${nextGP.recordingRace}" target="_blank" class="main-gp-btn race" onclick="event.stopPropagation()">Гонка идёт</a>`
                        : '<span class="calendar-status-text">Гонка идёт</span>';
                }
            }
        } else {
            // Таймер
            if (raceBtnEl) raceBtnEl.remove();
            if (countdownEl) {
                countdownEl.style.display = '';
                const d = Math.floor(diff / 86400000);
                const h = Math.floor((diff % 86400000) / 3600000);
                const m = Math.floor((diff % 3600000) / 60000);
                const s = Math.floor((diff % 60000) / 1000);
                countdownEl.innerHTML = `<strong>${d}</strong> дн. <strong>${h}</strong> ч. <strong>${m}</strong> м. <strong>${s}</strong> с.`;
            } else {
                const btnContainer = block.querySelector('.nextgp-countdown');
                if (btnContainer) {
                    const d = Math.floor(diff / 86400000);
                    const h = Math.floor((diff % 86400000) / 3600000);
                    const m = Math.floor((diff % 3600000) / 60000);
                    const s = Math.floor((diff % 60000) / 1000);
                    btnContainer.innerHTML = `<span>До гонки:</span> <span class="countdown-timer"><strong>${d}</strong> дн. <strong>${h}</strong> ч. <strong>${m}</strong> м. <strong>${s}</strong> с.</span>`;
                }
            }
        }
    };
    
    // Запускаем сразу
    updateTimer();
    // Обновляем каждую секунду
    mainTimerInterval = setInterval(updateTimer, 1000);
}