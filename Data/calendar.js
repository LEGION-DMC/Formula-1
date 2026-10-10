const calendarData = [
	{   id: "gp1",   name: "Гран-при Австралии",
		track: "albert_park",
		tires: "345",
		date: "2026-03-08 12:00",
		quali: "2026-03-08 12:00",
		sprint: " ",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "nQMAca7AQwY",
		recordingRace: "CAPgpa-AQwY"
	},
	{   id: "gp2",   name: "Гран-при Китая",
		track: "shanghai",
		tires: "234",
		date: "2026-03-15 15:00",
		quali: "2026-03-15 15:00",
		sprint: "2026-03-15 15:00",
		hasSprint: true,
		canceled: false,
		recordingSprint: "_wOAGcITRAY",
		recordingQuali: "dgCgNcITRAY",
		recordingRace: "qwGABcETRAY"
	},
	{   id: "gp3",   name: "Гран-при Японии",
		track: "suzuka",
		tires: "123",
		date: "2026-03-29 13:00",
		quali: "2026-03-29 13:00",
		sprint: "",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "gALAmvo8RAY",
		recordingRace: "hgKggPo8RAY"
	},
	{   id: "gp4",   name: "Гран-при Саудовской Аравии",
		track: "jeddah",
		tires: "",
		date: "2026-04-20 01:00",
		quali: "2026-04-20 01:00",
		sprint: "2026-04-20 01:00",
		hasSprint: false,
		canceled: true,
		recordingSprint: "",
		recordingQuali: "",
		recordingRace: ""
	},
	{   id: "gp5",   name: "Гран-при Майами",
		track: "miami",
		tires: "345",
		date: "2026-05-04 01:00",
		quali: "2026-05-04 01:00",
		sprint: "2026-05-04 01:00",
		hasSprint: true,
		canceled: false,
		recordingSprint: "rgIAZ7tHRAY",
		recordingQuali: "wQKgTrtHRAY",
		recordingRace: "4QKASrtHRAY"
	},
	{   id: "gp6",   name: "Гран-при Канады",
		track: "villeneuve",
		tires: "345",
		date: "2026-05-25 04:00",
		quali: "2026-05-25 04:00",
		sprint: "2026-05-25 04:00",
		hasSprint: true,
		canceled: false,
		recordingSprint: "pQLA_C1XRAY",
		recordingQuali: "OQNgtC5XRAY",
		recordingRace: "OgHg1C1XRAY"
	},
	{   id: "gp7",   name: "Гран-при Монако",
		track: "monaco",
		tires: "345",
		date: "2026-06-07 21:00",
		quali: "2026-06-07 21:00",
		sprint: "",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "IwGARvhfSQY",
		recordingRace: "BgCAwrOLTwY"
	},
	{   id: "gp8",   name: "Гран-при Барселоны-Каталунии",
		track: "catalunya",
		tires: "234",
		date: "2026-06-14 21:00",
		quali: "2026-06-14 21:00",
		sprint: "",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "5gKA2f_YdgY",
		recordingRace: "wANgWyNueQY"
	},
	{   id: "gp9",   name: "Гран-при Австрии",
		track: "red_bull_ring",
		tires: "345",
		date: "2026-06-28 21:00",
		quali: "2026-06-28 21:00",
		sprint: "",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "2QLgWtkR0QY",
		recordingRace: "wQHgUnsH1wY"
	},
	{   id: "gp10", name: "Гран-при Великобритании",
		track: "silverstone",
		tires: "123",
		date: "2026-07-05 22:00",
		quali: "2026-07-05 22:00",
		sprint: "2026-07-05 22:00",
		hasSprint: true,
		canceled: false,
		recordingSprint: "FQKAZt21_QY",
		recordingQuali: "PAPAGIPO-QY",
		recordingRace: "tQPAbRGEAwc"
	},
	{   id: "gp11", name: "Гран-при Бельгии",
		track: "spa",
		tires: "234",
		date: "2026-07-19 21:00",
		quali: "2026-07-19 21:00",
		sprint: "",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "6gOg4PrsWgc",
		recordingRace: "KwPAzW-yXQc"
	},
	{   id: "gp12", name: "Гран-при Венгрии",
		track: "hungaroring",
		tires: "345",
		date: "2026-07-26 21:00",
		quali: "2026-07-26 21:00",
		sprint: "",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "xQKgjsHNigc",
		recordingRace: "twFAj8HNigc"
	},
	{   id: "gp13", name: "Гран-при Нидерландов",
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
	{   id: "gp14", name: "Гран-при Италии",
		track: "monza",
		tires: "345",
		date: "2026-09-06 21:00",
		quali: "2026-09-05 22:00",
		sprint: "",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "vABADUG2nwg",
		recordingRace: "GQNAdk6MmQg"
	},
	{   id: "gp15", name: "Гран-при Испании",
		track: "madring",
		tires: "234",
		date: "2026-09-13 21:00",
		quali: "2026-09-12 22:00",
		sprint: "",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "BQNguKPUyAg",
		recordingRace: "VwPgraPUyAg"
	},
	{   id: "gp16", name: "Гран-при Азербайджана",
		track: "baku",
		tires: "345",
		date: "2026-09-26 19:00",
		quali: "2026-09-25 19:30",
		sprint: "",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "9bfb55b8695a022a73f35f1b86872177",
		recordingRace: "fee5bf375fa88b65d0223b38cd4f68a3"
	},
	{   id: "gp17", name: "Гран-при Бахрейна*",
		track: "sepang",
		tires: "234",
		date: "2026-10-04 15:00",
		quali: "2026-10-03 16:00",
		sprint: "",
		hasSprint: false,
		canceled: false,
		recordingSprint: "",
		recordingQuali: "44e42c70a7b24c63acc6fea4cfef312c",
		recordingRace: "308b2cb20efbb4859040d342b6f59070"
	},
	{   id: "gp18", name: "Гран-при Сингапура",
		track: "marina_bay",
		tires: "345",
		date: "2026-10-11 20:00",
		quali: "2026-10-10 21:00",
		sprint: "2026-10-10 17:00",
		hasSprint: true,
		canceled: false,
		recordingSprint: "6b7983e6fd0a304b1beb758deff21e47",
		recordingQuali: "2d9cff065e57c4b9a9ded4b77ae21fbf",
		recordingRace: "a7cf4989c099f3c660fecbc2eb7777e7"
	},
	{   id: "gp19", name: "Гран-при США",
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
	{   id: "gp20", name: "Гран-при Мехико",
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
	{   id: "gp21", name: "Гран-при Сан-Паулу",
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
	{   id: "gp22", name: "Гран-при Лас-Вегаса",
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
	{   id: "gp23", name: "Гран-при Катара",
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
	{   id: "gp24", name: "Гран-при Абу-Даби",
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
	}
];

const calendarIndex = new Map(calendarData.map(gp => [gp.id, gp]));
const calendarTrackIndex = new Map();
calendarData.forEach(gp => {
    if (!gp.canceled && !calendarTrackIndex.has(gp.track)) {
        calendarTrackIndex.set(gp.track, gp);
    }
});

calendarData.forEach(gp => {
    if (gp.tires && typeof gp.tires === 'string' && !gp.tires.includes('C')) {
        const digits = gp.tires.replace(/\D/g, '').split('');
        gp.tires = digits.map(d => `C${d}`).join(', ');
    }
});

let animationTimeout = null;
let currentHighlightedGpId = null;

const CALENDAR_PATTERN_SVG = `<svg viewBox="0 0 928 800" preserveAspectRatio="xMidYMid slice" fill="none"><g><path d="M525.317 408.664H580.116C595.812 408.664 609.647 402.398 617.198 391.253L730.294 226.315H674.743C659.047 226.315 645.977 232.581 638.413 243.726L525.317 408.664Z"></path><path d="M209.91 406.694H264.709C280.405 406.694 293.99 400.427 301.105 389.282L407.732 224.344H352.181C336.485 224.344 323.653 230.611 316.537 241.756L209.91 406.694Z"></path><path d="M406.94 225.349H461.739C477.435 225.349 491.02 219.083 498.135 207.938L604.762 43H549.211C533.515 43 520.683 49.2665 513.567 60.4113L406.94 225.349Z"></path><path d="M730.665 226.314H785.463C801.16 226.314 814.744 220.047 821.86 208.903L928.5 43.9646H872.949C857.252 43.9646 844.421 50.2311 837.305 61.3759L730.678 226.314H730.665Z"></path><path d="M566.424 225.349H621.223C636.92 225.349 650.504 219.083 657.619 207.938L764.247 43H708.695C692.999 43 680.167 49.2665 673.052 60.4113L566.424 225.349Z"></path><path d="M369.341 407.118H424.14C439.836 407.118 453.42 400.851 460.536 389.706L567.163 224.768H511.612C495.915 224.768 483.084 231.035 475.968 242.18L369.341 407.118Z"></path><path d="M701.396 408.254H756.195C771.892 408.254 785.476 401.987 792.591 390.842L899.219 225.904H843.667C827.971 225.904 815.139 232.171 808.024 243.316L701.396 408.254Z"></path><path d="M175.004 588.528H229.803C245.499 588.528 259.084 582.261 266.199 571.116L372.826 406.178H317.275C301.579 406.178 288.747 412.445 281.632 423.59L175.004 588.528Z"></path><path d="M13.5 588.528H68.2988C83.9952 588.528 97.5794 582.261 104.695 571.116L211.322 406.178H155.771C140.075 406.178 127.243 412.445 120.127 423.59L13.5 588.528Z"></path><path d="M327.493 591H382.292C397.988 591 411.573 584.733 418.688 573.589L525.316 408.651H469.764C454.068 408.651 441.236 414.917 434.121 426.062L327.493 591Z"></path><path d="M668.222 588.528H723.021C738.717 588.528 752.301 582.261 759.417 571.116L866.044 406.178H810.493C794.796 406.178 781.965 412.445 774.849 423.59L668.222 588.528Z"></path><path d="M506.715 588.528H561.514C577.21 588.528 590.794 582.261 597.91 571.116L704.537 406.178H648.986C633.29 406.178 620.458 412.445 613.342 423.59L506.715 588.528Z"></path></g></svg>`;

const getGPById = id => calendarIndex.get(id) || null;

const getGPName = gpId => {
    const gp = calendarIndex.get(gpId);
    return gp ? gp.name : gpId;
};

const getGPCountry = gpId => {
    const gp = calendarIndex.get(gpId);
    if (!gp) return 'xx';
    const track = getTrackById(gp.track);
    return track ? track.country : 'xx';
};

const getTrackForGP = gpId => {
    const gp = calendarIndex.get(gpId);
    return gp ? getTrackById(gp.track) : null;
};

const getGPByTrackId = trackId => calendarTrackIndex.get(trackId) || null;

const isEventNearOrPassed = eventDateStr => {
    if (!eventDateStr) return false;
    const eventDate = new Date(eventDateStr);
    return new Date() >= new Date(eventDate.getTime() - 5 * 60 * 1000);
};

const formatDateLong = dateStr => new Date(dateStr).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    });

const formatDateMini = dateStr => new Date(dateStr).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short'
    });

const getVideoUrl = videoId => {
    if (!videoId) return null;
    // Если вдруг попадётся полный URL — вытащим из него ID
    if (videoId.startsWith('http://') || videoId.startsWith('https://')) {
        const m = videoId.match(/\/video\/([a-zA-Z0-9_-]+)/);
        return m ? `https://rutube.ru/video/${m[1]}/` : videoId;
    }
    return `https://rutube.ru/video/${videoId}/`;
};

const getAvailableSessionsForGP = gpId => {
    const gp = calendarIndex.get(gpId);
    if (!gp || gp.canceled) return [];

    const sessions = [];

    if (gp.hasSprint && gp.recordingSprint && gp.sprint && isEventNearOrPassed(gp.sprint)) {
        const url = getVideoUrl(gp.recordingSprint);
        if (url) sessions.push({ type: 'sprint', label: 'Спринт', videoId: gp.recordingSprint, videoUrl: url, available: true });
    }

    if (gp.recordingQuali && gp.quali && isEventNearOrPassed(gp.quali)) {
        const url = getVideoUrl(gp.recordingQuali);
        if (url) sessions.push({ type: 'quali', label: 'Квалификация', videoId: gp.recordingQuali, videoUrl: url, available: true });
    }

    if (isEventNearOrPassed(gp.date) && gp.recordingRace) {
        const url = getVideoUrl(gp.recordingRace);
        if (url) sessions.push({ type: 'race', label: 'Гонка', videoId: gp.recordingRace, videoUrl: url, available: true });
    }

    return sessions;
};

const isRaceFinishedForGP = gpId => {
    if (typeof detailedResults === 'undefined') return false;
    const results = detailedResults[gpId];
    if (!results) return false;

    const keys = Object.keys(results).filter(k => k !== '000');
    if (keys.length === 0) return false;

    return keys.some(k => {
        const v = results[k];
        const pts = (v && typeof v === 'object' && v.points !== undefined) ? v.points : v;
        return typeof pts === 'number';
    });
};

const pluralize = (number, one, few, many) => {
    const n = Math.abs(number);
    if (n % 10 === 1 && n % 100 !== 11) return one;
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return few;
    return many;
};

const smoothScrollToElement = (element, duration = 800) => {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const offsetY = window.innerHeight / 2 - rect.height / 2;
    const targetPosition = rect.top + window.pageYOffset - offsetY;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const animation = currentTime => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);
        if (progress < 1) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
};

const clearAllHighlights = cardsArea => {
    cardsArea.querySelectorAll('.calendar-card.upcoming-highlight').forEach(c => c.classList.remove('upcoming-highlight'));
    document.querySelectorAll('.calendar-nav-item.upcoming-highlight').forEach(c => c.classList.remove('upcoming-highlight'));
    cardsArea.querySelectorAll('.calendar-card.highlight').forEach(c => c.classList.remove('highlight'));
};

const scrollToGPCard = (gpId, cardsArea) => {
    if (currentHighlightedGpId === gpId) return;

    if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = null;
    }

    const oldCard = cardsArea.querySelector('.calendar-card.upcoming-highlight');
    if (oldCard) oldCard.classList.remove('upcoming-highlight');

    const oldNav = document.querySelector('.calendar-nav-item.upcoming-highlight');
    if (oldNav) oldNav.classList.remove('upcoming-highlight');

    const card = cardsArea.querySelector(`.calendar-card[data-gp-id="${gpId}"]`);
    if (!card) return;

    currentHighlightedGpId = gpId;
    card.classList.add('upcoming-highlight');

    const navItem = document.querySelector(`.calendar-nav-item[data-gp-id="${gpId}"]`);
    if (navItem) navItem.classList.add('upcoming-highlight');

    smoothScrollToElement(card, 800);

    setTimeout(() => {
        card.classList.add('highlight');
        setTimeout(() => card.classList.remove('highlight'), 1500);
    }, 800);
};

const scrollToCurrentGP = () => {
    const cardsArea = document.getElementById('calendarCardsArea');
    if (!cardsArea) return;

    if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = null;
    }

    clearAllHighlights(cardsArea);

    const cards = cardsArea.querySelectorAll('.calendar-card');
    const now = new Date();

    const activeCards = Array.from(cards).filter(card => {
        const gp = calendarIndex.get(card.dataset.gpId);
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
};

const buildCalendarNav = (panel, cardsArea) => {
    let title = panel.querySelector('.calendar-nav-title');
    if (!title) {
        title = document.createElement('h3');
        title.className = 'calendar-nav-title';
        title.textContent = 'Календарь Гран-при 2026';
        panel.appendChild(title);
    }

    let gpNumber = 0;
    const now = new Date();

    calendarData.forEach(gp => {
        const track = getTrackForGP(gp.id);
        if (!track) return;

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
                <span class="nav-gp-full">${gp.name}</span>
                <span class="nav-gp-short">${gp.name.replace('Гран-при ', 'ГП ').replace('-Каталунии', '')}</span>
            </span>
            <span class="calendar-nav-date">${formatDateMini(gp.date)}</span>
        `;

        item.addEventListener('click', () => {
            if (currentHighlightedGpId === gp.id) return;
            scrollToGPCard(gp.id, cardsArea);
        });

        panel.appendChild(item);
    });
};

const renderCalendarCards = container => {
    let gpNumber = 0;
    const now = new Date();

    calendarData.forEach(gp => {
        const track = getTrackForGP(gp.id);
        if (!track) return;

        const raceDate = new Date(gp.date);
        const oneHourBeforeRace = new Date(raceDate.getTime() - 5 * 60 * 1000);
        const isPast = raceDate < now && !gp.canceled;
        const isToday = raceDate.toDateString() === now.toDateString();
        const isFuture = raceDate > now;
        const nearStart = isFuture && now >= oneHourBeforeRace;
        const isCanceled = gp.canceled;
        const displayNumber = isCanceled ? '-' : ++gpNumber;

        const card = document.createElement('div');
        card.className = 'calendar-card';
        card.dataset.gpId = gp.id;
        card.dataset.date = gp.date;

        if (gp.canceled) card.classList.add('canceled');
        if (isToday) card.classList.add('today');

        const patternDiv = document.createElement('div');
        patternDiv.className = 'calendar-card-bg-pattern';
        patternDiv.innerHTML = CALENDAR_PATTERN_SVG;
        card.appendChild(patternDiv);

        const overlay = document.createElement('div');
        overlay.className = 'calendar-card-bg-overlay';
        card.appendChild(overlay);

        const imageDiv = document.createElement('div');
        imageDiv.className = 'calendar-card-image';
        imageDiv.innerHTML = `<img src="Images/Tracks/${track.id}.png" alt="${track.id}" onerror="this.src='Images/Tracks/default.png'">`;

        const infoDiv = document.createElement('div');
        infoDiv.className = 'calendar-card-info';

        const header = document.createElement('div');
        header.className = 'calendar-card-header';
        header.innerHTML = `
            <img src="Images/Flags/${track.country}.svg" alt="" class="calendar-flag" title="${getCountryName(track.country)}">
            <span class="calendar-gp-name">${gp.name}</span>
            ${gp.hasSprint ? '<span class="calendar-sprint-badge-inline">c</span>' : ''}
            <span class="calendar-gp-number">${displayNumber}</span>
        `;

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

        const footer = document.createElement('div');
        footer.className = 'calendar-card-footer';

        if (gp.canceled) {
            footer.innerHTML = '<span class="calendar-status-text canceled">Гонка отменена</span>';
        } else {
            let btns = '';
            let showTimer = false;

            if (gp.hasSprint && gp.recordingSprint && gp.sprint && isEventNearOrPassed(gp.sprint)) {
                if (getVideoUrl(gp.recordingSprint)) {
                    btns += `<button class="calendar-btn sprint" data-video="${gp.recordingSprint}" data-title="Спринт ${gp.name}">Спринт</button>`;
                }
            }

            if (gp.recordingQuali && gp.quali && isEventNearOrPassed(gp.quali)) {
                if (getVideoUrl(gp.recordingQuali)) {
                    btns += `<button class="calendar-btn quali" data-video="${gp.recordingQuali}" data-title="Квалификация ${gp.name}">Квалификация</button>`;
                }
            }

            if (isEventNearOrPassed(gp.date)) {
                if (gp.recordingRace) {
                    if (getVideoUrl(gp.recordingRace)) {
                        btns += `<button class="calendar-btn race" data-video="${gp.recordingRace}" data-title="Гонка ${gp.name}">Гонка</button>`;
                    }
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
                            <span class="calendar-timer-days">00</span>дн.
                            <span class="calendar-timer-hours">00</span>ч.
                            <span class="calendar-timer-minutes">00</span>м.
                            <span class="calendar-timer-seconds">00</span>с.
                        </div>
                    </div>
                `;
            }

            footer.innerHTML = btns;
        }

        const divider1 = document.createElement('div');
        divider1.className = 'calendar-card-divider';

        const divider2 = document.createElement('div');
        divider2.className = 'calendar-card-divider';

        infoDiv.append(header, divider1, details, divider2, footer);
        card.append(imageDiv, infoDiv);

        card.querySelectorAll('.calendar-btn[data-video]').forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                if (typeof openVideoModal === 'function') {
                    openVideoModal(btn.dataset.video, btn.dataset.title);
                }
            });
        });

        card.addEventListener('click', e => {
            if (!e.target.closest('a')) openTrackModal(track, gp);
        });

        container.appendChild(card);
    });
};

const updateCalendarTimer = timer => {
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

    if (daysEl) daysEl.textContent = String(days);
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(mins).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(secs).padStart(2, '0');
};

const initCalendarTimers = () => {
    document.querySelectorAll('.calendar-timer').forEach(timer => {
        updateCalendarTimer(timer);
        setInterval(() => updateCalendarTimer(timer), 1000);
    });
};

const animateCalendarContent = (container, cardsArea, upcomingGpId) => new Promise(resolve => {
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

        const cards = cardsArea.querySelectorAll('.calendar-card');
        if (!cards.length) {
            resolve();
            return;
        }

        cards.forEach((card, index) => {
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

        setTimeout(resolve, 200 + cards.length * 50 + 100);
    });

const findUpcomingGP = () => {
    const now = new Date();
    const activeGPs = calendarData.filter(gp => !gp.canceled);

    let target = activeGPs.find(gp => new Date(gp.date).toDateString() === now.toDateString());
    if (!target) target = activeGPs.find(gp => new Date(gp.date) > now);
    if (!target && activeGPs.length) target = activeGPs[activeGPs.length - 1];

    return target ? target.id : null;
};

const scrollToUpcomingGPWithGlow = (cardsArea, gpId) => {
    if (!gpId) return;

    const card = cardsArea.querySelector(`.calendar-card[data-gp-id="${gpId}"]`);
    if (!card) return;

    card.classList.add('upcoming-highlight');
    currentHighlightedGpId = gpId;

    smoothScrollToElement(card, 800);

    setTimeout(() => {
        card.classList.add('highlight');
        setTimeout(() => card.classList.remove('highlight'), 1500);
    }, 800);
};

const autoShrinkHeaders = () => {
    document.querySelectorAll('.tm-header h2').forEach(header => {
        const container = header.closest('.tm-header') || header.parentElement;
        const containerWidth = container.clientWidth - 35;

        let fontSize = parseFloat(getComputedStyle(header).fontSize);
        const minFontSize = 10;

        const temp = document.createElement('span');
        temp.style.cssText = `font-family: 'F1Title', sans-serif; white-space: nowrap; visibility: hidden; position: absolute; font-size: ${fontSize}px;`;
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
};

const createRaceResultRow = (entry, pos) => {
    const row = document.createElement('div');
    row.className = 'tm-race-result-row';

    const teamColor = typeof getTeamColor === 'function' ? getTeamColor(entry.team) : '#e10600';
    row.style.setProperty('--team-color', teamColor);

    const posEl = document.createElement('span');
    if (pos !== null) {
        posEl.className = 'tm-race-result-pos' + (pos === 1 ? ' winner' : '');
        posEl.textContent = pos;
    } else {
        posEl.className = `tm-race-result-pos status ${entry.status}`;
        posEl.textContent = entry.status.toUpperCase();
    }
    row.appendChild(posEl);

    const logo = document.createElement('img');
    logo.className = 'tm-race-result-team-logo';
    logo.src = typeof getTeamLogo === 'function' ? getTeamLogo(entry.team) : '';
    logo.alt = entry.team;
    logo.onerror = () => { logo.style.display = 'none'; };
    row.appendChild(logo);

    const flag = document.createElement('img');
    flag.className = 'tm-race-result-flag';
    flag.src = `Images/Flags/${entry.driver.country}.svg`;
    flag.title = typeof getCountryName === 'function' ? getCountryName(entry.driver.country) : entry.driver.country;
    flag.onerror = () => { flag.style.display = 'none'; };
    row.appendChild(flag);

    const name = document.createElement('span');
    name.className = 'tm-race-result-name';
    name.textContent = entry.driver.name;
    row.appendChild(name);

    const points = document.createElement('span');
    if (entry.points !== null && entry.points > 0) {
        points.className = 'tm-race-result-points has-points';
        points.textContent = entry.points;
    } else {
        points.className = 'tm-race-result-points';
        points.textContent = entry.points !== null ? '0' : '';
    }
    row.appendChild(points);

    row.addEventListener('click', e => {
        e.stopPropagation();
        if (typeof openDriverModal === 'function') openDriverModal(entry.driver);
    });

    return row;
};

const buildRaceResultPanel = gpId => {
    if (!gpId || typeof detailedResults === 'undefined') return null;

    const results = detailedResults[gpId];
    if (!results) return null;

    const finished = [];
    const nonFinished = [];

    Object.keys(results).forEach(driverId => {
        if (driverId === '000') return;

        const raw = results[driverId];
        let value = raw;
        let teamOverride = null;

        if (raw && typeof raw === 'object') {
            value = raw.points;
            teamOverride = raw.team || null;
        }

        if (value === 'dnp') return;

        const driver = typeof findDriverById === 'function' ? findDriverById(driverId) : null;
        if (!driver) return;

        const displayTeam = teamOverride || driver.team;

        if (typeof value === 'number') {
            finished.push({ driverId, driver, team: displayTeam, points: value, status: null });
            return;
        }

        if (value === 'dnf' || value === 'dsq' || value === 'dns') {
            nonFinished.push({ driverId, driver, team: displayTeam, points: null, status: value });
        }
    });

    if (!finished.length && !nonFinished.length) return null;

    finished.sort((a, b) => b.points - a.points);

    const statusOrder = { dnf: 1, dsq: 2, dns: 3 };
    nonFinished.sort((a, b) => {
        const d = (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99);
        return d !== 0 ? d : a.driver.name.localeCompare(b.driver.name, 'ru');
    });

    const top10 = finished.slice(0, 10);

    const panel = document.createElement('div');
    panel.className = 'tm-race-result-panel';

    const pattern = document.createElement('div');
    pattern.className = 'tm-race-result-pattern';
    pattern.innerHTML = CALENDAR_PATTERN_SVG;
    panel.appendChild(pattern);

    const overlay = document.createElement('div');
    overlay.className = 'tm-race-result-overlay';
    panel.appendChild(overlay);

    const content = document.createElement('div');
    content.className = 'tm-race-result-content';

    const spoilerWrapper = document.createElement('div');
    spoilerWrapper.className = 'tm-race-result-spoiler';

    const innerContent = document.createElement('div');
    innerContent.className = 'tm-race-result-inner blurred';

    const header = document.createElement('div');
    header.className = 'tm-race-result-header';
    const title = document.createElement('h3');
    title.className = 'tm-race-result-title';
    title.textContent = 'Результат гонки';
    header.appendChild(title);
    innerContent.appendChild(header);

    const leftCol = document.createElement('div');
    leftCol.className = 'tm-race-result-col tm-race-result-col--top';

    const leftTitle = document.createElement('div');
    leftTitle.className = 'tm-race-result-col-title';
    leftTitle.textContent = 'Топ-10';
    leftCol.appendChild(leftTitle);

    const leftList = document.createElement('div');
    leftList.className = 'tm-race-result-list';

    if (!top10.length) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'tm-race-result-empty';
        emptyMsg.textContent = 'Нет финишировавших';
        leftList.appendChild(emptyMsg);
    } else {
        top10.forEach((entry, index) => leftList.appendChild(createRaceResultRow(entry, index + 1)));
    }
    leftCol.appendChild(leftList);

    const rightCol = document.createElement('div');
    rightCol.className = 'tm-race-result-col tm-race-result-col--dnf';

    const rightTitle = document.createElement('div');
    rightTitle.className = 'tm-race-result-col-title';
    rightTitle.textContent = 'Нефинишировавшие';
    rightCol.appendChild(rightTitle);

    const rightList = document.createElement('div');
    rightList.className = 'tm-race-result-list';

    if (!nonFinished.length) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'tm-race-result-empty';
        emptyMsg.textContent = 'Все финишировали';
        rightList.appendChild(emptyMsg);
    } else {
        nonFinished.forEach(entry => rightList.appendChild(createRaceResultRow(entry, null)));
    }
    rightCol.appendChild(rightList);

    const columns = document.createElement('div');
    columns.className = 'tm-race-result-columns';
    columns.append(leftCol, rightCol);
    innerContent.appendChild(columns);

    const spoilerOverlay = document.createElement('div');
    spoilerOverlay.className = 'tm-race-result-spoiler-overlay';
    spoilerOverlay.innerHTML = `
        <div class="tm-race-result-spoiler-content">
            <span class="tm-race-result-spoiler-text">Результат гонки</span>
            <span class="tm-race-result-spoiler-title">! ОСТОРОЖНО СПОЙЛЕРЫ !</span>
            <span class="tm-race-result-spoiler-title">Нажмите для показа</span>
        </div>
    `;

    spoilerWrapper.append(innerContent, spoilerOverlay);
    content.appendChild(spoilerWrapper);
    panel.appendChild(content);

    const revealSpoiler = () => {
        if (!innerContent.classList.contains('blurred')) return;
        innerContent.classList.remove('blurred');
        spoilerOverlay.classList.add('hidden');
        setTimeout(() => { spoilerOverlay.style.display = 'none'; }, 400);
    };

    spoilerOverlay.addEventListener('click', e => {
        e.stopPropagation();
        revealSpoiler();
    });

    panel.addEventListener('click', e => {
        if (e.target.closest('.tm-race-result-row')) return;
        if (innerContent.classList.contains('blurred')) revealSpoiler();
    });

    return panel;
};

const openTrackModal = (track, gp) => {
    document.querySelector('.track-modal-overlay')?.remove();

    const scrollY = window.scrollY;
    Object.assign(document.body.style, {
        position: 'fixed',
        top: `-${scrollY}px`,
        width: '100%',
        overflowY: 'scroll'
    });

    const unlock = () => {
        Object.assign(document.body.style, { position: '', top: '', width: '', overflowY: '' });
        window.scrollTo(0, scrollY);
    };

    const overlay = document.createElement('div');
    overlay.className = 'track-modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'track-modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'track-modal-content';

    const close = () => {
        overlay.remove();
        unlock();
        document.removeEventListener('keydown', esc);
    };

    function esc(e) {
        if (e.key === 'Escape') close();
    }

    const layoutWrapper = document.createElement('div');
    layoutWrapper.className = 'track-modal-layout-wrapper';

    const layoutPattern = document.createElement('div');
    layoutPattern.className = 'track-modal-pattern';
    layoutPattern.innerHTML = CALENDAR_PATTERN_SVG;
    layoutWrapper.appendChild(layoutPattern);

    const layoutOverlay = document.createElement('div');
    layoutOverlay.className = 'track-modal-overlay-bg';
    layoutWrapper.appendChild(layoutOverlay);

    const renderRecord = record => {
        const parts = record.split(', ');
        return `
            <span class="tm-stat-value2">${parts[0]}</span>
            <span class="tm-stat-value-sub">${parts.slice(1).join(', ')}</span>
        `;
    };

    const layoutInner = document.createElement('div');
    layoutInner.className = 'track-modal-layout';
    layoutInner.innerHTML = `
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
                    <span class="tm-stat-label">${pluralize(track.laps, 'круг', 'круга', 'кругов')}</span>
                </div>
                <div class="tm-stat-cell">
                    <span class="tm-stat-value">${track.turns}</span>
                    <span class="tm-stat-label">${pluralize(track.turns, 'поворот', 'поворота', 'поворотов')}</span>
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
                    <span class="tm-stat-label">Рекорд круга в гонке</span>
                    ${renderRecord(track.lapRecord)}
                </div>
                <div class="tm-stat-cell">
                    <span class="tm-stat-label">Рекорд круга в квалификации</span>
                    ${renderRecord(track.qulRecord)}
                </div>
            </div>
        </div>
    `;
    layoutWrapper.appendChild(layoutInner);
    modalContent.appendChild(layoutWrapper);

    let targetGp = gp;
    if (!targetGp?.id) targetGp = getGPByTrackId(track.id);
    if (targetGp?.id && isRaceFinishedForGP(targetGp.id)) {
        const panel = buildRaceResultPanel(targetGp.id);
        if (panel) {
            modalContent.appendChild(panel);
            requestAnimationFrame(() => {
                setTimeout(() => panel.classList.add('visible'), 250);
            });
        }
    }

    const closeBtn = document.createElement('button');
    closeBtn.className = 'track-modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', close);
    modal.appendChild(closeBtn);

    modal.appendChild(modalContent);

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

    setTimeout(autoShrinkHeaders, 10);
};

const openVideoModal = (videoId, title) => {
    if (!videoId) return;

    let currentGp = null;

    for (const gp of calendarData) {
        if (gp.recordingSprint === videoId || gp.recordingQuali === videoId || gp.recordingRace === videoId) {
            currentGp = gp;
            break;
        }
    }

    if (!currentGp) {
        for (const gp of calendarData) {
            const track = getTrackForGP(gp.id);
            if (track && title.includes(gp.name.replace('Гран-при ', ''))) {
                currentGp = gp;
                break;
            }
        }
    }

    const availableSessions = currentGp ? getAvailableSessionsForGP(currentGp.id) : [];
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const videoUrl = getVideoUrl(videoId);
    if (!videoUrl) return;

    if (isMobile) {
        window.open(videoUrl, '_blank');
        return;
    }

    document.querySelector('.video-modal-overlay')?.remove();

    const scrollY = window.scrollY;
    Object.assign(document.body.style, {
        position: 'fixed',
        top: `-${scrollY}px`,
        width: '100%',
        overflowY: 'scroll'
    });

    const unlock = () => {
        Object.assign(document.body.style, { position: '', top: '', width: '', overflowY: '' });
        window.scrollTo(0, scrollY);
    };

    const overlay = document.createElement('div');
    overlay.className = 'video-modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'video-modal';

    const close = () => {
        overlay.remove();
        unlock();
        document.removeEventListener('keydown', esc);
        const iframe = modal.querySelector('iframe');
        if (iframe) iframe.src = '';
    };

    function esc(e) {
        if (e.key === 'Escape') close();
    }

    const cleanTitle = title.replace(/^(Спринт|Квалификация|Гонка)\s*/, '').trim();

    let flagHtml = '';
    if (currentGp) {
        const track = getTrackForGP(currentGp.id);
        if (track) {
            flagHtml = `<img src="Images/Flags/${track.country}.svg" class="video-modal-flag" alt="" title="${getCountryName(track.country)}">`;
        }
    }

    // --- RuTube-only embed ---
    let embedUrl = videoUrl;
    if (videoUrl.includes('/video/')) {
        const videoIdFromUrl = videoUrl.split('/video/')[1];
        if (videoIdFromUrl) {
            const cleanId = videoIdFromUrl.replace(/\/$/, '');
            embedUrl = `https://rutube.ru/embed/${cleanId}`;
        }
    }

    const modalContent = document.createElement('div');
    modalContent.className = 'video-modal-content';

    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';

    const sessionsPanel = document.createElement('div');
    sessionsPanel.className = 'video-sessions-panel';

    if (availableSessions.length > 1) {
        const panelTitle = document.createElement('div');
        panelTitle.className = 'panel-title';
        panelTitle.textContent = 'Другие сессии';
        sessionsPanel.appendChild(panelTitle);

        const sessionsList = document.createElement('div');
        sessionsList.className = 'sessions-list';

        availableSessions.forEach(session => {
            const isActive = session.videoId === videoId;
            const btn = document.createElement('button');
            btn.className = `calendar-btn ${session.type} video-session-btn${isActive ? ' active' : ''}`;
            btn.innerHTML = `
                <span class="btn-content">
                    <span><span class="btn-icon">${isActive ? ' ' : ''}${session.label}</span></span>
                </span>
            `;

            btn.addEventListener('click', () => {
                if (session.videoId === videoId) return;
                close();
                openVideoModal(session.videoId, `${session.label} ${cleanTitle}`);
            });

            sessionsList.appendChild(btn);
        });

        sessionsPanel.appendChild(sessionsList);

        setTimeout(() => sessionsPanel.classList.add('open'), 200);
    }

    modalContent.appendChild(videoContainer);
    if (availableSessions.length > 1) modalContent.appendChild(sessionsPanel);
    modal.appendChild(modalContent);

    const header = document.createElement('div');
    header.className = 'video-modal-header';
    header.innerHTML = `
        <span class="video-modal-title">
            ${flagHtml}
            <span>${cleanTitle}</span>
        </span>
    `;
    videoContainer.appendChild(header);

    const body = document.createElement('div');
    body.className = 'video-modal-body';

    const iframeAttrs = `
        width="560" 
        height="315" 
        src="${embedUrl}" 
        title="${cleanTitle}"
        frameborder="0" 
        allowfullscreen
        style="border: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        loading="lazy"
    `;

    body.innerHTML = `<iframe ${iframeAttrs}></iframe>`;
    videoContainer.appendChild(body);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'video-modal-close';
    closeBtn.innerHTML = '&times;';
    modal.appendChild(closeBtn);

    closeBtn.addEventListener('click', close);

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
};

const initCalendarPage = container => {
    container.innerHTML = '';
    container.style.cssText = 'display: flex; gap: 0; padding: 0;';

    const navPanel = document.createElement('div');
    navPanel.className = 'calendar-nav-panel';

    const cardsArea = document.createElement('div');
    cardsArea.className = 'calendar-cards-area';
    cardsArea.id = 'calendarCardsArea';

    container.append(navPanel, cardsArea);

    buildCalendarNav(navPanel, cardsArea);
    renderCalendarCards(cardsArea);
    initCalendarTimers();

    const upcomingGpId = findUpcomingGP();

    if (upcomingGpId) {
        const navItem = navPanel.querySelector(`.calendar-nav-item[data-gp-id="${upcomingGpId}"]`);
        if (navItem) navItem.classList.add('upcoming-highlight');
    }

    animateCalendarContent(container, cardsArea, upcomingGpId).then(() => {
        if (upcomingGpId) scrollToUpcomingGPWithGlow(cardsArea, upcomingGpId);
    });
};