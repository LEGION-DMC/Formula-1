const calendarData = [
	{   id: "australia",
		track: "albert_park",
		
		tires: "345",
		
		date: "2026-03-08 12:00",
		quali: "",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "nQMAca7AQwY",
		recordingRace: "CAPgpa-AQwY"
	},
	{   id: "china",
		track: "shanghai",
		
		tires: "234",
		
		date: "2026-03-15 15:00",
		quali: "",
		sprint: "",
		
		hasSprint: true,
		canceled: false,
		
		recordingSprint: "_wOAGcITRAY",
		recordingQuali: "dgCgNcITRAY",
		recordingRace: "qwGABcETRAY"
	},
	{   id: "japan",
		track: "suzuka",
		
		tires: "123",
		
		date: "2026-03-29 13:00",
		quali: "",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		
		recordingQuali: "gALAmvo8RAY",
		recordingRace: "hgKggPo8RAY"
	},
	{   id: "saudi-arabia",
		track: "jeddah",
		
		tires: "",
		
		date: "2026-04-20 01:00",
		quali: "",
		sprint: "",
		
		hasSprint: false,
		canceled: true,
		
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "miami",
		track: "miami",
		
		tires: "345",
		
		date: "2026-05-04 01:00",
		quali: "",
		sprint: "",
		
		hasSprint: true,
		canceled: false,
		
		recordingSprint: "rgIAZ7tHRAY",
		recordingQuali: "wQKgTrtHRAY",
		recordingRace: "4QKASrtHRAY"
	},
	{   id: "canada",
		track: "villeneuve",
		
		tires: "345",
		
		date: "2026-05-25 04:00",
		quali: "",
		sprint: "",
		
		hasSprint: true,
		canceled: false,
		
		recordingSprint: "pQLA_C1XRAY",
		recordingQuali: "OQNgtC5XRAY",
		recordingRace: "OgHg1C1XRAY"
	},
	{   id: "monaco",
		track: "monaco",
		
		tires: "345",
		
		date: "2026-06-07 21:00",
		quali: "",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "IwGARvhfSQY",
		recordingRace: "BgCAwrOLTwY"
	},
	{   id: "barcelona",
		track: "catalunya",
		
		tires: "234",
		
		date: "2026-06-14 21:00",
		quali: "",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "5gKA2f_YdgY",
		recordingRace: "wANgWyNueQY"
	},
	{   id: "austria",
		track: "red_bull_ring",
		
		tires: "345",
		
		date: "2026-06-28 21:00",
		quali: "",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "2QLgWtkR0QY",
		recordingRace: "wQHgUnsH1wY"
	},
	{   id: "great-britain",
		track: "silverstone",
		
		tires: "123",
		
		date: "2026-07-05 22:00",
		quali: "",
		sprint: "",
		
		hasSprint: true,
		canceled: false,
		
		recordingSprint: "FQKAZt21_QY",
		recordingQuali: "PAPAGIPO-QY",
		recordingRace: "tQPAbRGEAwc"
	},
	{   id: "belgium",
		track: "spa",
		
		tires: "234",
		
		date: "2026-07-19 21:00",
		quali: "",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "6gOg4PrsWgc",
		recordingRace: "KwPAzW-yXQc"
	},
	{   id: "hungary",
		track: "hungaroring",
		
		tires: "345",
		
		date: "2026-07-26 21:00",
		quali: "",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "xQKgjsHNigc",
		recordingRace: "twFAj8HNigc"
	},
	{   id: "netherlands",
		track: "zandvoort",
		
		tires: "234",
		
		date: "2026-08-23 21:00",
		quali: "2026-08-22 22:00",
		sprint: "2026-08-22 18:00",
		
		hasSprint: true,
		canceled: false,
		
		recordingSprint: "-ABgnWdaQAg",
		recordingQuali: "LQKAG2daQAg",
		recordingRace: "jwJgJ2daQAg"
	},
	{   id: "italy",
		track: "monza",
		
		tires: "345",
		
		date: "2026-09-06 21:00",
		quali: "2026-09-05 22:00",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "spain",
		track: "madring",
		
		tires: "234",
		
		date: "2026-09-13 21:00",
		quali: "2026-09-12 22:00",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "azerbaijan",
		track: "baku",
		
		tires: "345",
		
		date: "2026-09-26 19:00",
		quali: "2026-09-25 20:00",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "malaysia",
		track: "sepang",
		
		tires: "234",
		
		date: "2026-10-04 23:00",
		quali: "2026-10-03 00:00",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "singapore",
		track: "marina_bay",
		
		tires: "345",
		
		date: "2026-10-11 20:00",
		quali: "2026-10-10 21:00",
		sprint: "2026-10-10 17:00",
		
		hasSprint: true,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "usa",
		track: "americas",
		
		tires: "",
		
		date: "2026-10-26 04:00",
		quali: "2026-10-25 05:00",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "mexico",
		track: "rodriguez",
		
		tires: "",
		
		date: "2026-11-02 04:00",
		quali: "2026-11-01 05:00",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "brazil",
		track: "interlagos",
		
		tires: "",
		
		date: "2026-11-09 01:00",
		quali: "2026-11-08 02:00",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "las-vegas",
		track: "vegas",
		
		tires: "",
		
		date: "2026-11-22 12:00",
		quali: "2026-11-21 13:00",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "qatar",
		track: "lusail",
		
		tires: "",
		
		date: "2026-11-30 00:00",
		quali: "2026-11-29 01:00",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "abu-dhabi",
		track: "yas_marina",
		
		tires: "",
		
		date: "2026-12-06 21:00",
		quali: "2026-12-05 22:00",
		sprint: "",
		
		hasSprint: false,
		canceled: false,
		
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
];

let animationTimeout = null;
let currentHighlightedGpId = null;

calendarData.forEach(gp => {
    if (gp.tires && typeof gp.tires === 'string' && !gp.tires.includes('C')) {
        const digits = gp.tires.replace(/\D/g, "").split("");
        gp.tires = digits.map(d => `C${d}`).join(", ");
    }
});

function getGPById(id) {
    return calendarData.find(g => g.id === id);
}

function getTrackForGP(gpId) {
    const gp = getGPById(gpId);
    return gp ? getTrackById(gp.track) : null;
}

function formatDateLong(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatDateMini(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short'
    });
}

function animateCalendarCardsAppearance(container) {
    const cards = container.querySelectorAll('.calendar-card');
    
    if (cards.length === 0) return Promise.resolve();
    
    const containerWidth = container.offsetWidth || container.parentElement.offsetWidth || 1200;
    const cardMinWidth = 300;
    const gap = 20;
    const cols = Math.max(1, Math.floor((containerWidth + gap) / (cardMinWidth + gap)));
    
    return new Promise((resolve) => {
        cards.forEach((card) => {
            card.style.transition = 'none';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95) translateY(20px)';
        });
        
        void document.body.offsetHeight;
        
        cards.forEach((card, index) => {
            const rowIndex = Math.floor(index / cols);
            const delay = rowIndex * 100;
            
            // Только анимация появления
            card.style.transition = `opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`;
            
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';
            });
        });
        
        const maxDelay = (Math.ceil(cards.length / cols) - 1) * 100 + 400;
        setTimeout(resolve, maxDelay + 100);
    });
}

function smoothScrollToElement(element, duration = 800) {
    if (!element) return;

    // Получаем позицию элемента относительно окна
    const rect = element.getBoundingClientRect();
    
    // Вычисляем позицию для центрирования
    // Высота окна / 2 - половина высоты элемента
    const offsetY = window.innerHeight / 2 - rect.height / 2;
    const targetPosition = rect.top + window.pageYOffset - offsetY;

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    function animation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // easeInOutCubic
        const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

function scrollToGPCard(gpId, cardsArea) {
    // Если клик по уже выделенному ГП — игнорируем
    if (currentHighlightedGpId === gpId) return;
    
    // Отменяем предыдущий таймаут, если он был
    if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = null;
    }

    // Снимаем выделение со старого ГП
    const oldCard = cardsArea.querySelector(`.calendar-card.upcoming-highlight`);
    if (oldCard) oldCard.classList.remove('upcoming-highlight');
    
    const oldNav = document.querySelector(`.calendar-nav-item.upcoming-highlight`);
    if (oldNav) oldNav.classList.remove('upcoming-highlight');

    const card = cardsArea.querySelector(`.calendar-card[data-gp-id="${gpId}"]`);
    if (!card) return;

    // Запоминаем текущий выделенный ГП
    currentHighlightedGpId = gpId;

    // Сразу применяем выделение к карточке и навигации
    card.classList.add('upcoming-highlight');
    
    const navItem = document.querySelector(`.calendar-nav-item[data-gp-id="${gpId}"]`);
    if (navItem) navItem.classList.add('upcoming-highlight');

    // Плавный скролл к карточке
    smoothScrollToElement(card, 800);
}

function scrollToCurrentGP() {
    const cardsArea = document.getElementById('calendarCardsArea');
    if (!cardsArea) return;

    // Отменяем предыдущий таймаут
    if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = null;
    }

    clearAllHighlights(cardsArea);

    const cards = cardsArea.querySelectorAll('.calendar-card');
    const now = new Date();

    const activeCards = Array.from(cards).filter(card => {
        const gp = getGPById(card.dataset.gpId);
        return gp && !gp.canceled;
    });

    let target = activeCards.find(c => new Date(c.dataset.date).toDateString() === now.toDateString());
    if (!target) target = activeCards.find(c => new Date(c.dataset.date) > now);
    if (!target && activeCards.length) target = activeCards[activeCards.length - 1];

    if (!target) return;

    const gpId = target.dataset.gpId;
    currentHighlightedGpId = gpId;

    smoothScrollToElement(target, 800);
    target.classList.add('highlight');

    animationTimeout = setTimeout(() => {
        target.classList.remove('highlight');
        target.classList.add('upcoming-highlight');

        const navItem = document.querySelector(`.calendar-nav-item[data-gp-id="${gpId}"]`);
        if (navItem) navItem.classList.add('upcoming-highlight');
        
        animationTimeout = null;
    }, 2000);
}

function clearAllHighlights(cardsArea) {
    // Снимаем постоянную подсветку с карточек
    cardsArea.querySelectorAll('.calendar-card.upcoming-highlight')
        .forEach(c => c.classList.remove('upcoming-highlight'));
    
    // Снимаем постоянную подсветку с навигации
    document.querySelectorAll('.calendar-nav-item.upcoming-highlight')
        .forEach(c => c.classList.remove('upcoming-highlight'));
    
    // Снимаем временную подсветку со всех карточек
    cardsArea.querySelectorAll('.calendar-card.highlight')
        .forEach(c => c.classList.remove('highlight'));
}

function buildCalendarNav(panel, cardsArea) {
    // Проверяем, есть ли уже заголовок
    let title = panel.querySelector('.calendar-nav-title');
    if (!title) {
        title = document.createElement('h3');
        title.className = 'calendar-nav-title';
        title.textContent = 'Календарь Гран-при 2026';
        panel.appendChild(title);
    }

    let gpNumber = 0;

    calendarData.forEach((gp) => {
        const track = getTrackForGP(gp.id);
        if (!track) return;

        const now = new Date();
        const raceDate = new Date(gp.date);
        const isPast = raceDate < now && !gp.canceled;
        const isCanceled = gp.canceled;

        const item = document.createElement('div');
        item.className = `calendar-nav-item ${isCanceled ? 'canceled' : isPast ? 'completed' : ''}`;
        item.dataset.gpId = gp.id;

        const displayNumber = isCanceled ? '-' : ++gpNumber;

        item.innerHTML = `
            <span class="calendar-nav-number">${displayNumber}</span>
            <img src="Images/Flags/${track.country}.svg" alt="" class="calendar-nav-flag" title="${getCountryName(track.country)}">
            <span class="calendar-nav-name">
                <span class="nav-gp-full">${track.name}</span>
                <span class="nav-gp-short">${track.name.replace('Гран-при ', 'ГП ').replace('-Каталунии', '')}</span>
            </span>
            <span class="calendar-nav-date">${formatDateMini(gp.date)}</span>
        `;
        
        item.addEventListener('click', () => {
            if (currentHighlightedGpId === gp.id) return;
            scrollToGPCard(gp.id, cardsArea);
        });
        
        panel.appendChild(item);
    });
}

function renderCalendarCards(container) {
    calendarData.forEach(gp => {
        const track = getTrackForGP(gp.id);
        if (!track) return;

        const now = new Date();
        const raceDate = new Date(gp.date);
        const oneHourBeforeRace = new Date(raceDate.getTime() - 5 * 60 * 1000);
        const isPast = raceDate < now && !gp.canceled;
        const isToday = raceDate.toDateString() === now.toDateString();
        const isFuture = raceDate > now;
        const nearStart = isFuture && now >= oneHourBeforeRace;

        const card = document.createElement('div');
        card.className = 'calendar-card';
        card.dataset.gpId = gp.id;
        card.dataset.date = gp.date;

        if (gp.canceled) card.classList.add('canceled');
        if (isToday) card.classList.add('today');

        // Изображение трассы
        const imageDiv = document.createElement('div');
        imageDiv.className = 'calendar-card-image';
        imageDiv.innerHTML = `
            <img src="Images/Tracks/${track.id}.png" alt="${track.id}" onerror="this.src='Images/Tracks/default.png'">
        `;

        // Информация
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

        // Детали
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

		// Футер
		const footer = document.createElement('div');
		footer.className = 'calendar-card-footer';

		if (gp.canceled) {
			footer.innerHTML = '<span class="calendar-status-text canceled">Гонка отменена</span>';
		} else {
			let btns = '';
			let showTimer = false;

			// ✅ Кнопка спринта - открывает видео в модалке
			if (gp.hasSprint && gp.recordingSprint) {
				btns += `<button class="calendar-btn sprint" data-video="${gp.recordingSprint}" data-title="Спринт ${track.name}">Спринт</button>`;
			}

			// ✅ Кнопка квалификации - открывает видео в модалке
			if (gp.recordingQuali) {
				btns += `<button class="calendar-btn quali" data-video="${gp.recordingQuali}" data-title="Квалификация ${track.name}">Квалификация</button>`;
			}

			// Гонка
			if (isPast || nearStart) {
				if (gp.recordingRace) {
					btns += `<button class="calendar-btn race" data-video="${gp.recordingRace}" data-title="Гонка ${track.name}">Гонка</button>`;
				} else if (isPast) {
					btns += '<span class="calendar-btn disabled">Нет записи</span>';
				}
			} else {
				showTimer = true;
			}

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

        // Сборка карточки
        const divider1 = document.createElement('div');
        divider1.className = 'calendar-card-divider';

        const divider2 = document.createElement('div');
        divider2.className = 'calendar-card-divider';

        infoDiv.appendChild(header);
        infoDiv.appendChild(divider1);
        infoDiv.appendChild(details);
        infoDiv.appendChild(divider2);
        infoDiv.appendChild(footer);

        card.appendChild(imageDiv);
        card.appendChild(infoDiv);

		// Обработчики для кнопок видео
		card.querySelectorAll('.calendar-btn[data-video]').forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.stopPropagation(); // Чтобы не открывалась модалка трассы
				const videoUrl = btn.dataset.video;
				const title = btn.dataset.title;
				if (typeof openVideoModal === 'function') {
					openVideoModal(videoUrl, title);
				}
			});
		});
	
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

function autoShrinkHeaders() {
    const headers = document.querySelectorAll('.tm-header h2');
    
    headers.forEach(header => {
        const container = header.closest('.tm-header') || header.parentElement;
        // Вычитаем только правый отступ (30px)
        const containerWidth = container.clientWidth - 35; // только правый отступ
        
        let fontSize = parseFloat(getComputedStyle(header).fontSize);
        const minFontSize = 10;
        
        const temp = document.createElement('span');
        temp.style.cssText = `
            font-family: 'F1Title', sans-serif;
            white-space: nowrap;
            visibility: hidden;
            position: absolute;
            font-size: ${fontSize}px;
        `;
        temp.textContent = header.textContent;
        document.body.appendChild(temp);
        
        while (temp.offsetWidth > containerWidth && fontSize > minFontSize) {
            fontSize -= 1;
            temp.style.fontSize = fontSize + 'px';
        }
        
        header.style.fontSize = fontSize + 'px';
        header.style.whiteSpace = 'nowrap';
        header.style.overflow = 'hidden';
        header.style.textOverflow = 'ellipsis';
        
        document.body.removeChild(temp);
    });
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

    function close() {
        overlay.remove();
        unlock();
        document.removeEventListener('keydown', esc);
    }

    function esc(e) {
        if (e.key === 'Escape') close();
    }

    modal.innerHTML = `
        <button class="track-modal-close">&times;</button>
        <div class="track-modal-layout">
            <div class="tm-track-image">
                <img src="Images/Tracks/${track.id}.png" alt="${track.trackName}" onerror="this.src='Images/Tracks/default.webp'">
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
				<div class="tm-stats-grid2">
                    <div class="tm-stat-cell">
                        <span class="tm-stat-label">Первая гонка</span>
                        <span class="tm-stat-value">${track.firstrace}<span class="gp-year-suffix"> г.</span></span>
                    </div>
                </div>
                <hr class="tm-divider">
				<div class="tm-stats-grid3">
                    <div class="tm-stat-cell">
                        <span class="tm-stat-label">Рекорд круга в гонке</span> ${(() => { const parts = track.lapRecord.split(', '); return `
							<span class="tm-stat-value2">${parts[0]}</span>
							<span class="tm-stat-value-sub">${parts.slice(1).join(', ')}</span>`;})()}
                    </div>
                    <div class="tm-stat-cell">
                        <span class="tm-stat-label">Рекорд круга в квалификации</span> ${(() => { const parts = track.qulRecord.split(', '); return `
							<span class="tm-stat-value2">${parts[0]}</span>
							<span class="tm-stat-value-sub">${parts.slice(1).join(', ')}</span>`;})()}
                    </div>
                </div>
            </div>
        </div>
    `;
    setTimeout(autoShrinkHeaders, 10);
    
    modal.querySelector('.track-modal-close').addEventListener('click', close);

    overlay.appendChild(modal);
    overlay.addEventListener('click', e => {
        if (e.target === overlay) close();
    });
    document.addEventListener('keydown', esc);
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
        overlay.classList.add('active');
        modal.classList.add('active');
    });
}

function initCalendarPage(container) {
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.gap = '0';
    container.style.padding = '0';

    const navPanel = document.createElement('div');
    navPanel.className = 'calendar-nav-panel';

    const cardsArea = document.createElement('div');
    cardsArea.className = 'calendar-cards-area';
    cardsArea.id = 'calendarCardsArea';

    container.appendChild(navPanel);
    container.appendChild(cardsArea);

    buildCalendarNav(navPanel, cardsArea);
    renderCalendarCards(cardsArea);
    initCalendarTimers();

    // Находим предстоящий ГП
    const upcomingGpId = findUpcomingGP();
    
    // Сразу выделяем в навигации (без задержки)
    if (upcomingGpId) {
        const navItem = navPanel.querySelector(`.calendar-nav-item[data-gp-id="${upcomingGpId}"]`);
        if (navItem) {
            navItem.classList.add('upcoming-highlight');
        }
    }
    
    // Анимируем карточки и после анимации скроллим с пульсацией
    animateCalendarContent(container, cardsArea, upcomingGpId).then(() => {
        if (upcomingGpId) {
            scrollToUpcomingGPWithGlow(cardsArea, upcomingGpId);
        }
    });
}

function findUpcomingGP() {
    const now = new Date();
    const activeGPs = calendarData.filter(gp => !gp.canceled);
    
    // Ищем ГП, который идет сегодня
    let target = activeGPs.find(gp => {
        const raceDate = new Date(gp.date);
        return raceDate.toDateString() === now.toDateString();
    });
    
    // Если нет, ищем ближайший будущий
    if (!target) {
        target = activeGPs.find(gp => new Date(gp.date) > now);
    }
    
    // Если нет, берем последний
    if (!target && activeGPs.length) {
        target = activeGPs[activeGPs.length - 1];
    }
    
    return target ? target.id : null;
}

function scrollToUpcomingGPWithGlow(cardsArea, gpId) {
    if (!gpId) return;
    
    const card = cardsArea.querySelector(`.calendar-card[data-gp-id="${gpId}"]`);
    if (!card) return;
    
    // Сразу добавляем постоянное выделение карточке
    card.classList.add('upcoming-highlight');
    currentHighlightedGpId = gpId;
    
    // Плавный скролл к карточке
    smoothScrollToElement(card, 800);
    
    // После скролла добавляем пульсацию бордюра
    setTimeout(() => {
        card.classList.add('highlight');
        
        // Через 2 секунды убираем пульсацию, оставляя постоянное выделение
        setTimeout(() => {
            card.classList.remove('highlight');
        }, 1500);
    }, 800);
}

function animateCalendarContent(container, cardsArea, upcomingGpId) {
    return new Promise((resolve) => {
        // Анимируем навигационную панель (слева)
        const navPanel = container.querySelector('.calendar-nav-panel');
        if (navPanel) {
            navPanel.style.opacity = '0';
            navPanel.style.transform = 'translateX(-15px)';
            navPanel.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            
            setTimeout(() => {
                navPanel.style.opacity = '1';
                navPanel.style.transform = 'translateX(0)';
            }, 100);
        }

        // Анимируем карточки
        const cards = cardsArea.querySelectorAll('.calendar-card');
        if (cards.length === 0) {
            resolve();
            return;
        }

        cards.forEach((card, index) => {
            // Если это предстоящий ГП - показываем сразу (но без анимации)
            const isUpcoming = card.dataset.gpId === upcomingGpId;
            
            if (isUpcoming) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = 'none';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(15px)';
                card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 200 + (index - 1) * 50);
            }
        });

        const maxDelay = 200 + cards.length * 50 + 100;
        setTimeout(resolve, maxDelay);
    });
}

function scrollToGPCard(gpId, cardsArea) {
    if (currentHighlightedGpId === gpId) return;
    
    if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = null;
    }

    // Снимаем выделение со старого ГП
    const oldCard = cardsArea.querySelector(`.calendar-card.upcoming-highlight`);
    if (oldCard) oldCard.classList.remove('upcoming-highlight');
    
    const oldNav = document.querySelector(`.calendar-nav-item.upcoming-highlight`);
    if (oldNav) oldNav.classList.remove('upcoming-highlight');

    const card = cardsArea.querySelector(`.calendar-card[data-gp-id="${gpId}"]`);
    if (!card) return;

    currentHighlightedGpId = gpId;

    // Постоянное выделение
    card.classList.add('upcoming-highlight');
    
    const navItem = document.querySelector(`.calendar-nav-item[data-gp-id="${gpId}"]`);
    if (navItem) navItem.classList.add('upcoming-highlight');

    // Плавный скролл
    smoothScrollToElement(card, 800);
    
    // Пульсация бордюра после скролла
    setTimeout(() => {
        card.classList.add('highlight');
        
        setTimeout(() => {
            card.classList.remove('highlight');
        }, 1500);
    }, 800);
}

function openVideoModal(videoId, title) {
    if (!videoId) return;
    
    const existing = document.querySelector('.video-modal-overlay');
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
    overlay.className = 'video-modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'video-modal';

    function close() {
        overlay.remove();
        unlock();
        document.removeEventListener('keydown', esc);
    }

    function esc(e) {
        if (e.key === 'Escape') close();
    }

    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Используем embed с параметром platform для мобильных
    const embedUrl = `https://matreshka.tv/embed/video/${videoId}${isMobile ? '?platform=mobile&autoplay=1' : ''}`;

    modal.innerHTML = `
        <button class="video-modal-close">&times;</button>
        <div class="video-modal-header">
            <span class="video-modal-title">${title}</span>
        </div>
        <div class="video-modal-body" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; background: #000;">
            <iframe 
                src="${embedUrl}" 
                title="${title}"
                frameborder="0" 
                allowfullscreen
                allow="autoplay; encrypted-media; fullscreen"
                style="border: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                loading="lazy"
                ${isMobile ? 'sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-presentation"' : ''}
            ></iframe>
        </div>
    `;

    // Для мобильных добавляем ссылку-дублер внизу
    if (isMobile) {
        const header = modal.querySelector('.video-modal-header');
        const link = document.createElement('div');
        link.style.cssText = `
            padding: 8px 16px;
            background: rgba(0,0,0,0.3);
            text-align: center;
            font-size: 12px;
        `;
        link.innerHTML = `
            <a href="https://matreshka.tv/video/${videoId}" 
               target="_blank" 
               style="color: #e10600; text-decoration: none;"
            >
                Не работает плеер? Открыть в новой вкладке ↗
            </a>
        `;
        header.parentNode.insertBefore(link, header.nextSibling);
    }

    modal.querySelector('.video-modal-close').addEventListener('click', close);

    overlay.appendChild(modal);
    
    overlay.addEventListener('click', e => {
        if (e.target === overlay) close();
    });
    
    document.addEventListener('keydown', esc);
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
        overlay.classList.add('active');
        modal.classList.add('active');
    });
}