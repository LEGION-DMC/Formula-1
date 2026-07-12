const calendarData = [
	{   id: "australia",
		track: "albert_park",
		date: "2026-03-08 11:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingQuali: "https://rutube.ru/video/d73719ebc017833dc11b2b3e0eddffb8/",
		recordingRace: "https://rutube.ru/video/264170a23560b1eec2e7b27978b62b3f/"
	},
	{   id: "china",
		track: "shanghai",
		date: "2026-03-15 14:55",
		hasSprint: true,
		canceled: false,
		recordingSprint: "https://rutube.ru/video/e01dc7aca552e6b3481e27a12b481e43/",
		recordingQuali: "https://rutube.ru/video/70a7aa6656f6e5b4ddabcbf824253830/",
		recordingRace: "https://rutube.ru/video/0cb1fa5f8d0b60b7266f43f015566674/"
	},
	{   id: "japan",
		track: "suzuka",
		date: "2026-03-29 12:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "https://rutube.ru/video/bd3f864e23ef634c8140e77099e5deeb/",
		recordingRace: "https://rutube.ru/video/6d24c1dd05e8824e81dd3aa3cdd5b86f/"
	},
	{   id: "bahrain",
		track: "bahrain",
		date: "2026-04-12 22:55",
		hasSprint: false,
		canceled: true,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "saudi-arabia",
		track: "jeddah",
		date: "2026-04-19 00:55",
		hasSprint: false,
		canceled: true,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "miami",
		track: "miami",
		date: "2026-05-04 00:55",
		hasSprint: true,
		canceled: false,
		recordingSprint: "https://rutube.ru/video/105d706e84f0903bb3bc0da3dd4e2f91/",
		recordingQuali: "https://rutube.ru/video/b7b2f0fb0ba261b6b4c48905526440fe/",
		recordingRace: "https://rutube.ru/video/3628eef00d9d494b12467d1ef0bc42c1/"
	},
	{   id: "canada",
		track: "villeneuve",
		date: "2026-05-25 03:55",
		hasSprint: true,
		canceled: false,
		recordingSprint: "https://rutube.ru/video/bc877009b2b8fc79bc6f979462168e6f/",
		recordingQuali: "https://rutube.ru/video/9d73b9e5e2f82f57b9a1ea2b0f43d1f7/",
		recordingRace: "https://rutube.ru/video/03fefa5dc563eeccb70fdae0547937ee/"
	},
	{   id: "monaco",
		track: "monaco",
		date: "2026-06-07 20:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "https://rutube.ru/video/2f1325bbb1e0abd272265bae45143732/",
		recordingRace: "https://rutube.ru/video/f85e53c184adb938f135e5f672dd34fb/"
	},
	{   id: "barcelona",
		track: "catalunya",
		date: "2026-06-14 20:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "https://rutube.ru/video/8e12af772774917558cd3772f6ef7af7/",
		recordingRace: "https://rutube.ru/video/d453cd08307bbb2f0328d9dd19fd1fdd/"
	},
	{   id: "austria",
		track: "red_bull_ring",
		date: "2026-06-28 20:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "https://rutube.ru/video/79b0880c155b53e864d72937ef75ef65/",
		recordingRace: "https://rutube.ru/video/d8359daa94329ff700c3064ba10551a4/"
	},
	{   id: "great-britain",
		track: "silverstone",
		date: "2026-07-05 21:55",
		hasSprint: true,
		canceled: false,
		recordingSprint: "https://rutube.ru/video/0e2264d285a6ec583de6f2bc063f2589/",
		recordingQuali: "https://rutube.ru/video/92ae02a203708a3f296f8b57dd33cdfe/",
		recordingRace: "https://rutube.ru/video/2ad23769b8475f5d88fabf24f7220eac/"
	},
	{   id: "belgium",
		track: "spa",
		date: "2026-07-19 20:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "hungary",
		track: "hungaroring",
		date: "2026-07-26 20:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "netherlands",
		track: "zandvoort",
		date: "2026-08-23 20:55",
		hasSprint: true,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "italy",
		track: "monza",
		date: "2026-09-06 20:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "spain",
		track: "madring",
		date: "2026-09-13 20:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "azerbaijan",
		track: "baku",
		date: "2026-09-26 18:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "singapore",
		track: "marina_bay",
		date: "2026-10-11 19:55",
		hasSprint: true,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "usa",
		track: "americas",
		date: "2026-10-26 03:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "mexico",
		track: "rodriguez",
		date: "2026-11-02 03:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "brazil",
		track: "interlagos",
		date: "2026-11-09 00:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "las-vegas",
		track: "vegas",
		date: "2026-11-22 11:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "qatar",
		track: "losail",
		date: "2026-11-30 23:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "abu-dhabi",
		track: "yas_marina",
		date: "2026-12-06 20:55",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
];

function getGPById(id) { return calendarData.find(g => g.id === id); }
function getTrackForGP(gpId) { const gp = getGPById(gpId); return gp ? getTrackById(gp.track) : null; }

function formatDateLong(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });
}

function formatDateMini(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
}

function initCalendarPage(container) {
    'use strict';
    
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.gap = '0';
    container.style.padding = '0';
    
    // Панель навигации (слева)
    const navPanel = document.createElement('div');
    navPanel.className = 'calendar-nav-panel';
    
    // Область с карточками
    const cardsArea = document.createElement('div');
    cardsArea.className = 'calendar-cards-area';
    cardsArea.id = 'calendarCardsArea';
    
    container.appendChild(navPanel);
    container.appendChild(cardsArea);
    
    // Строим навигацию
    buildCalendarNav(navPanel, cardsArea);
    
    // Рендерим карточки
    renderCalendarCards(cardsArea);
    
    // Запускаем таймеры
    initCalendarTimers();
    
    // Прокрутка к текущему событию
    setTimeout(() => scrollToCurrentGP(), 600);
}

function buildCalendarNav(panel, cardsArea) {
    const title = document.createElement('h3');
    title.className = 'calendar-nav-title';
    title.textContent = 'Календарь Гран-при 2026';
    panel.appendChild(title);
    
    calendarData.forEach(gp => {
        const track = getTrackForGP(gp.id);
        if (!track) return;
        
        const now = new Date();
        const raceDate = new Date(gp.date);
        const isPast = raceDate < now && !gp.canceled;
        const isCanceled = gp.canceled;
        
        const item = document.createElement('div');
        item.className = `calendar-nav-item ${isCanceled ? 'canceled' : isPast ? 'completed' : ''}`;
        item.dataset.gpId = gp.id;
        
        item.innerHTML = `
            <img src="Images/Flags/${track.country}.svg" alt="" class="calendar-nav-flag" title="${getCountryName(track.country)}">
            <span class="calendar-nav-name">
				<span class="nav-gp-full">${track.name}</span>
				<span class="nav-gp-short">${track.name.replace('Гран-при ', 'ГП ')}</span>
			</span>
            <span class="calendar-nav-date">${formatDateMini(gp.date)}</span>
        `;
        
        item.addEventListener('click', () => scrollToGPCard(gp.id, cardsArea));
        panel.appendChild(item);
    });
}

function scrollToGPCard(gpId, cardsArea) {
    // Снимаем все постоянные подсветки
    cardsArea.querySelectorAll('.calendar-card.upcoming-highlight').forEach(c => c.classList.remove('upcoming-highlight'));
    document.querySelectorAll('.calendar-nav-item.upcoming-highlight').forEach(c => c.classList.remove('upcoming-highlight'));
    
    // Снимаем highlight со всех карточек
    cardsArea.querySelectorAll('.calendar-card.highlight').forEach(c => c.classList.remove('highlight'));
    
    const card = cardsArea.querySelector(`.calendar-card[data-gp-id="${gpId}"]`);
    if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('highlight');
        setTimeout(() => card.classList.remove('highlight'), 2000);
        
        // После пульсации — постоянная рамка
        setTimeout(() => {
            card.classList.add('upcoming-highlight');
        }, 2000);
        
        // Подсветка в мини-календаре
        const navItem = document.querySelector(`.calendar-nav-item[data-gp-id="${gpId}"]`);
        if (navItem) {
            navItem.classList.add('upcoming-highlight');
        }
    }
}

function scrollToCurrentGP() {
    const cardsArea = document.getElementById('calendarCardsArea');
    if (!cardsArea) return;
    
    // Снимаем старые классы
    cardsArea.querySelectorAll('.calendar-card.upcoming-highlight').forEach(c => c.classList.remove('upcoming-highlight'));
    document.querySelectorAll('.calendar-nav-item.upcoming-highlight').forEach(c => c.classList.remove('upcoming-highlight'));
    cardsArea.querySelectorAll('.calendar-card.highlight').forEach(c => c.classList.remove('highlight'));
    
    const cards = cardsArea.querySelectorAll('.calendar-card');
    const now = new Date();
    
    const activeCards = Array.from(cards).filter(card => {
        const gp = getGPById(card.dataset.gpId);
        return gp && !gp.canceled;
    });
    
    let target = activeCards.find(c => new Date(c.dataset.date).toDateString() === now.toDateString());
    if (!target) target = activeCards.find(c => new Date(c.dataset.date) > now);
    if (!target && activeCards.length) target = activeCards[activeCards.length - 1];
    
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Сначала пульсация
        target.classList.add('highlight');
        
        // Через 2 секунды — постоянная рамка
        const gpId = target.dataset.gpId;
        setTimeout(() => {
            target.classList.remove('highlight');
            target.classList.add('upcoming-highlight');
            
            // Подсветка в мини-календаре
            const navItem = document.querySelector(`.calendar-nav-item[data-gp-id="${gpId}"]`);
            if (navItem) {
                navItem.classList.add('upcoming-highlight');
            }
        }, 2000);
    }
}

function renderCalendarCards(container) {
    calendarData.forEach(gp => {
        const track = getTrackForGP(gp.id);
        if (!track) return;
        
        const now = new Date();
        const raceDate = new Date(gp.date);
        const oneHourBefore = new Date(raceDate.getTime() - 60 * 60 * 1000);
        const isPast = raceDate < now && !gp.canceled;
        const isToday = raceDate.toDateString() === now.toDateString();
        const isFuture = raceDate > now;
        const nearStart = isFuture && now >= oneHourBefore;
        
        const card = document.createElement('div');
        card.className = 'calendar-card';
        card.dataset.gpId = gp.id;
        card.dataset.date = gp.date;
        if (gp.canceled) card.classList.add('canceled');
        if (isToday) card.classList.add('today');
        
        // Левая часть — изображение трассы
        const imageDiv = document.createElement('div');
        imageDiv.className = 'calendar-card-image';
        imageDiv.innerHTML = `<img src="Images/Tracks/${track.id}.webp" alt="${track.id}." onerror="this.src='Images/Tracks/default.png'">`;
        
        // Правая часть — информация
        const infoDiv = document.createElement('div');
        infoDiv.className = 'calendar-card-info';
        
        // Заголовок
        const header = document.createElement('div');
        header.className = 'calendar-card-header';
        header.innerHTML = `
            <img src="Images/Flags/${track.country}.svg" alt="" class="calendar-flag" title="${getCountryName(track.country)}">
            <span class="calendar-gp-name">${track.name}</span>
            ${gp.hasSprint ? '<span class="calendar-sprint-badge-inline">СПРИНТ</span>' : ''}
        `;
        
        // Разделитель
        const divider1 = document.createElement('div');
        divider1.className = 'calendar-card-divider';
        
        // Место и трасса
        const details = document.createElement('div');
        details.className = 'calendar-card-details';
        details.innerHTML = `
            <div class="calendar-detail-row">
                <img src="Images/Icon/location.webp" alt="" class="calendar-icon">
                <span>${track.location}</span>
            </div>
            <div class="calendar-detail-row">
                <img src="Images/Icon/track.webp" alt="" class="calendar-icon">
                <span>${track.trackName}</span>
            </div>
            <div class="calendar-detail-row">
                <img src="Images/Icon/calendar.webp" alt="" class="calendar-icon">
                <span>${formatDateLong(gp.date)}</span>
            </div>
        `;
        
        // Разделитель
        const divider2 = document.createElement('div');
        divider2.className = 'calendar-card-divider';
        
        // Футер
        const footer = document.createElement('div');
        footer.className = 'calendar-card-footer';
        
        if (gp.canceled) {
            footer.innerHTML = '<span class="calendar-status-text canceled">Гонка отменена</span>';
        } else {
            let btns = '';
            let showTimer = false;
            
            // Спринт — если есть ссылка
            if (gp.hasSprint && gp.recordingSprint) {
                btns += `<a href="${gp.recordingSprint}" target="_blank" class="calendar-btn sprint">Спринт</a>`;
            }

            // Квалификация — всегда если есть ссылка
            if (gp.recordingQuali) {
                btns += `<a href="${gp.recordingQuali}" target="_blank" class="calendar-btn quali">Квалификация</a>`;
            }
			
            // Гонка — если прошла, сегодня или остался час
            if (isPast || nearStart) {
				if (gp.recordingRace) {
					btns += `<a href="${gp.recordingRace}" target="_blank" class="calendar-btn race">Гонка</a>`;
				} else if (isPast) {
					btns += '<span class="calendar-btn disabled">Нет записи</span>';
				}
			} else {
				// Будущая гонка, больше часа — таймер
				showTimer = true;
			}
            
            // Таймер
            if (showTimer) {
                btns += `
                    <div class="calendar-countdown">
                        <span>До гонки:</span>
                        <div class="calendar-timer" data-date="${gp.date}">
                            <span class="calendar-timer-days">00</span>д
                            <span class="calendar-timer-hours">00</span>ч
                            <span class="calendar-timer-minutes">00</span>м
                            <span class="calendar-timer-seconds">00</span>с
                        </div>
                    </div>
                `;
            }
            
            footer.innerHTML = btns;
        }
        
        infoDiv.appendChild(header);
        infoDiv.appendChild(divider1);
        infoDiv.appendChild(details);
        infoDiv.appendChild(divider2);
        infoDiv.appendChild(footer);
        
        card.appendChild(imageDiv);
        card.appendChild(infoDiv);
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('a')) {
                openTrackModal(track, gp);
            }
        });
        
        container.appendChild(card);
    });
}

function initCalendarTimers() {
    document.querySelectorAll('.calendar-timer').forEach(timer => {
        updateCalendarTimer(timer);
        setInterval(() => updateCalendarTimer(timer), 1000);
    });
}

function updateCalendarTimer(timer) {
    const target = new Date(timer.dataset.date);
    const now = new Date();
    const diff = target - now;
    
    if (diff <= 0) {
        timer.innerHTML = '<span class="calendar-race-started">Событие началось!</span>';
        return;
    }
    
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    
    const daysEl = timer.querySelector('.calendar-timer-days');
    const hoursEl = timer.querySelector('.calendar-timer-hours');
    const minutesEl = timer.querySelector('.calendar-timer-minutes');
    const secondsEl = timer.querySelector('.calendar-timer-seconds');
    
    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(mins).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(secs).padStart(2, '0');
}

function openTrackModal(track, gp) {
    const existing = document.querySelector('.track-modal-overlay');
    if (existing) existing.remove();
    
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflowY = 'scroll';
    
    function unlock() {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, scrollY);
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'track-modal-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'track-modal';
    
    function close() { overlay.remove(); unlock(); document.removeEventListener('keydown', esc); }
    function esc(e) { if (e.key === 'Escape') close(); }
    
    modal.innerHTML = `
        <button class="track-modal-close">&times;</button>
        <div class="track-modal-layout">
            <div class="tm-track-image">
                <img src="Images/Tracks/${track.id}.webp" alt="${track.trackName}" class="tm-track-img-clickable" onerror="this.src='Images/Tracks/default.webp'">
            </div>
            <div class="tm-track-info">
                <div class="tm-header">
                    <img src="Images/Flags/${track.country}.svg" class="calendar-flag" title="${getCountryName(track.country)}">
                    <h2>${track.trackName}</h2>
                </div>
                <hr class="tm-divider">
                <div class="tm-detail-row-inline">
                    <div class="tm-detail-row">
                        <img src="Images/Icon/location.webp" class="calendar-icon">
                        <span>${track.location}</span>
                    </div>
                    <div class="tm-detail-row">
                        <img src="Images/Icon/calendar.webp" class="calendar-icon">
                        <span>${gp ? formatDateLong(gp.date) : ''}</span>
                    </div>
                </div>
                <hr class="tm-divider">
                <div class="tm-stats-grid">
                    <div class="tm-stat-cell">
                        <span class="tm-stat-value">${track.length} км</span>
                        <span class="tm-stat-label">Длина</span>
                    </div>
                    <div class="tm-stat-cell">
                        <span class="tm-stat-value">${track.laps}</span>
                        <span class="tm-stat-label">Кругов</span>
                    </div>
                    <div class="tm-stat-cell">
                        <span class="tm-stat-value">${track.turns}</span>
                        <span class="tm-stat-label">Поворотов</span> 
                    </div>
                    <div class="tm-stat-cell">
                        <span class="tm-stat-value">${track.elevation} м</span>
                        <span class="tm-stat-label">Перепад высот</span>
                    </div>
                    <div class="tm-stat-cell">
                        <span class="tm-stat-value">${track.speed} км/ч</span>
                        <span class="tm-stat-label">Средняя скорость</span>
                    </div>
                    <div class="tm-stat-cell">
                        <span class="tm-stat-value-direction">${track.direction === 'по часовой стрелке' ? '↻' : '↺'}</span>
                        <span class="tm-stat-label">Направление</span>
                    </div>
                </div>
                <hr class="tm-divider">
                <div class="tm-detail-row">
                    <span class="tm-label"><img src="Images/Icon/tm-record.png" class="record-icon"> Рекорд круга:</span>
                    <span class="tm-record">${track.lapRecord}</span>
                </div>
            </div>
        </div>
    `;
    
    modal.querySelector('.track-modal-close').addEventListener('click', close);
    
    // Клик по картинке — открытие на весь экран
    const trackImg = modal.querySelector('.tm-track-img-clickable');
    if (trackImg) {
        trackImg.addEventListener('click', (e) => {
            e.stopPropagation();
            openImageFullscreen(`Images/Tracks/${track.id}.webp`, track.trackName);
        });
    }
    
    overlay.appendChild(modal);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', esc);
    document.body.appendChild(overlay);
    
    requestAnimationFrame(() => {
        overlay.classList.add('active');
        modal.classList.add('active');
    });
}


function openImageFullscreen(src, alt) {
    const existing = document.querySelector('.image-fullscreen-overlay');
    if (existing) existing.remove();
    
    const overlay = document.createElement('div');
    overlay.className = 'image-fullscreen-overlay';
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.className = 'image-fullscreen-img';
    img.onerror = () => { img.src = 'Images/Tracks/default.webp'; };
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'image-fullscreen-close';
    closeBtn.innerHTML = '&times;';
    
    function closeFS() {
        overlay.remove();
        document.removeEventListener('keydown', escFS);
    }
    
    closeBtn.addEventListener('click', closeFS);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeFS(); });
    
    function escFS(e) { if (e.key === 'Escape') closeFS(); }
    document.addEventListener('keydown', escFS);
    
    overlay.appendChild(closeBtn);
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    
    requestAnimationFrame(() => overlay.classList.add('active'));
}