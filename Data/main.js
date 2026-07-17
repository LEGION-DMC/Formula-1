const weatherData = {
    type: "cloud",
    typeName: "Облачно",
    temperature: "22",
    wind: "3",
    humidity: "65",
    rain: 25
};

const tyreData = {
    compounds: {
        Hard: "C2",    
        Medium: "C3",  
        Soft: "C4"    
    }
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
    
    // Все возможные составы C1-C5
    const allCompounds = ["C1", "C2", "C3", "C4", "C5"];
    
    // Определяем типы по составам из tyreData
    const hardCompound = tyreData.compounds.Hard;
    const mediumCompound = tyreData.compounds.Medium;
    const softCompound = tyreData.compounds.Soft;
    
    // Функция для получения типа и изображения
    function getTyreInfo(compound) {
        const imgNone = "Images/Wheels/Hard.png";
        
        if (compound === hardCompound) {
            return { type: "Hard", img: "Images/Wheels/Hard.png", active: true };
        } else if (compound === mediumCompound) {
            return { type: "Medium", img: "Images/Wheels/Medium.png", active: true };
        } else if (compound === softCompound) {
            return { type: "Soft", img: "Images/Wheels/Soft.png", active: true };
        } else {
            return { type: "---", img: imgNone, active: false };
        }
    }
    
    // Формируем C1-C5
    let topHTML = allCompounds.map(c => {
        const info = getTyreInfo(c);
        return `
            <div class="tyre-item ${info.active ? 'clickable' : 'dimmed'}">
                <span class="tyre-name">${c}</span>
                <img src="${info.img}" class="tyre-img">
                <span class="tyre-type">${info.type}</span>
            </div>
        `;
    }).join('');
    
    // Промежуточные и дождевые
    const rainActive = weatherData.rain > 50;
    const intActive = rainActive;
    const wetActive = rainActive;
    
    let bottomHTML = `
        <div class="tyre-item ${intActive ? 'clickable' : 'dimmed'}">
            <span class="tyre-name">Intermediate</span>
            <img src="${intActive ? 'Images/Wheels/Intermediate.png' : 'Images/Wheels/Hard.png'}" class="tyre-img">
            ${intActive ? '' : '<span class="tyre-type">---</span>'}
        </div>
        <div class="tyre-item ${wetActive ? 'clickable' : 'dimmed'}">
            <span class="tyre-name">Wet</span>
            <img src="${wetActive ? 'Images/Wheels/Wet.png' : 'Images/Wheels/Hard.png'}" class="tyre-img">
            ${wetActive ? '' : '<span class="tyre-type">---</span>'}
        </div>
    `;
    
    block.innerHTML = `
        <div class="main-block-title">Состав шин</div>
        <div class="tyres-top">${topHTML}</div>
        <hr class="main-divider">
        <div class="tyres-bottom">${bottomHTML}</div>
    `;
    
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
        const oneHourBeforeRace = new Date(raceDate.getTime() - 60 * 60 * 1000);
        
        // Расчёт времени квалификации (на сутки раньше гонки, то же время)
        const qualiDate = new Date(raceDate.getTime() - 24 * 60 * 60 * 1000);
        const oneHourBeforeQuali = new Date(qualiDate.getTime() - 60 * 60 * 1000);
        const qualiActive = nextGP.recordingQuali && now >= oneHourBeforeQuali;
        
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
            // Квалификация — показываем за час до квалификации и навсегда после
            if (qualiActive) {
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
            // Квалификация — появляется за час до квалификации и остаётся
            if (!qualiBtn && qualiActive) {
                const qualiEl = document.createElement('a');
                qualiEl.href = nextGP.recordingQuali;
                qualiEl.target = '_blank';
                qualiEl.className = 'main-gp-btn quali';
                qualiEl.textContent = 'Квалификация';
                qualiEl.onclick = (e) => e.stopPropagation();
                linksContainer.appendChild(qualiEl);
            }
        }
        
        if (now >= oneHourBeforeRace && now < raceDate) {
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