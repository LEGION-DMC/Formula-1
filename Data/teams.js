const teamsData = [
    {  shortName: "Mercedes",
        fullName: "Mercedes-AMG PETRONAS F1 Team",
        color: "#75F1D3",
        
        base: "Брэкли", country: "gb",
        license: "Германия", license_country: "de",
        director: "Тото Вольфф", director_country: "de",
        founder: "Mercedes-Benz", founder_country: "de",
        
        car: "W17 E",
        engine: "Mercedes",
        power: "M17 E 1.6 V6 T",
        fuel: "Petronas",

        debut: "2010",
        firstWin: "Гран-при Китая 2012",
        titles: 8,
		champ_dri: 3,
        
        info: "В 1994 году компания Mercedes-Benz участвовала в F1, в качестве поставщика двигателей для гоночной команды Sauber. В 2009 году Mercedes-Benz приобрела 75% контрольного пакета в команде Brawn GP, выигравшей чемпионат 2009 года. Позднее Brawn GP, переименованная в Mercedes GP, дебютировала в 2010 году. За неё выступали немецкие пилоты Нико Росберг и Михаэль Шумахер."
    },
    {  shortName: "Ferrari",
        fullName: "Scuderia Ferrari HP",
        color: "#D52E37",
        
        base: "Маранелло", country: "it",
        license: "Италия", license_country: "it",
        director: "Фредерик Вассёр", director_country: "fr",
        founder: "Энцо Феррари", founder_country: "it",
        
        car: "SF-26",
        engine: "Ferrari",
        power: "067/6 1.6 V6 TH",
        fuel: "Shell",

        debut: "1950",
        firstWin: "Гран-при Великобритании 1951",
        titles: 16,
		champ_dri: 9,
        
        info: "Итальянская команда, представляющая собой подразделение автомобильной компании Ferrari Gestione Sportiva, занимающееся гонками. Команда принимает участие в гонках F1 с 1950 года по сей день и является самой старой и успешной командой в чемпионате."
    },
    {  shortName: "McLaren",
        fullName: "McLaren Mastercard F1 Team",
        color: "#ef8733",
        
        base: "Уокинг", country: "gb",
        license: "Великобритания", license_country: "gb",
        director: "Андреа Стелла", director_country: "it",
        founder: "Брюс Макларен", founder_country: "gb",
        
        car: "MCL40",
        engine: "Mercedes",
        power: "M17 E 1.6 V6 T",
        fuel: "Petronas",

        debut: "1966",
        firstWin: "Гран-при Бельгии 1968",
        titles: 10,
		champ_dri: 8,
        
        info: "Британская команда, представляющая собой подразделение McLaren Technology Group. В разное время команда участвовала и побеждала в различных автоспортивных соревнованиях, пять раз выигрывала соревнования Can-Am, трижды выигрывала 500 миль Индианаполиса, по одному разу в гонках 24 часа Ле-Мана и 12 часов Себринга, в настоящее время команда сконцентрирована на участии в чемпионате мира F1, где 10 раз завоёвывала кубок конструкторов."
    },
    {  shortName: "Red Bull",
        fullName: "Oracle Red Bull Racing",
        color: "#4570C0",
        
        base: "Милтон-Кинс", country: "gb",
        license: "Австрия", license_country: "at",
        director: "Лоран Мекис", director_country: "fr",
        founder: "Дитрих Матешиц", founder_country: "at",
        
        car: "RB22",
        engine: "Red Bull Ford",
        power: "DM01 1.6 V6 T",
        fuel: "ExxonMobil",

        debut: "2005",
        firstWin: "Гран-при Китая 2009",
        titles: 6,
		champ_dri: 2,
        
        info: "Австрийская команда, основана руководителем концерна по производству энергетических напитков Red Bull - Дитрихом Матешицем. Хотя база команды и расположена в Великобритания, но команда выступает под австрийской лицензией. Компания Ford Motor заявила о выходе принадлежащей ей команды Jaguar Racing из чемпионата F1 в сентябре 2004 года и уже ноябре Red Bull, подтвердил покупку Jaguar Racing в последний день подачи заявок на участие в сезоне 2005 года."
    },
    {  shortName: "Racing Bulls",
        fullName: "Visa Cash App Racing Bulls F1 Team",
        color: "#7091f8",
        
        base: "Фаэнца", country: "it",
        license: "Италия", license_country: "it",
        director: "Алан Пермейн", director_country: "gb",
        founder: "Дитрих Матешиц", founder_country: "at",
        
        car: "VCARB 03",
        engine: "Red Bull Ford",
        power: "DM01 1.6 V6 T",
        fuel: "ExxonMobil",

        debut: "2006",
        firstWin: "Гран-при Италии 2008",
        titles: 0,
		champ_dri: 0,
        
        info: "Итальянская команда, принадлежащая австрийскому конгломерату Red Bull GmbH. С сезона 2006 по 2019 года команда выступала под названием Toro Rosso. К сезону 2020 года была переименована в AlphaTauri. К сезону 2024 года команда была переименована в своё текущее название."
    },
    {  shortName: "Alpine", // 2027 - Gucci Racing Alpine F1 Team
        fullName: "BWT Alpine F1 Team",
        color: "#479FE2",
        
        base: "Энстоун", country: "gb",
        license: "Великобритания", license_country: "gb",
        director: "Флавио Бриаторе", director_country: "it",
        founder: "Renault Group", founder_country: "fr",
        
        car: "A526",
        engine: "Mercedes",
        power: "M17 E 1.6 V6 T",
        fuel: "Petronas",

        debut: "2021",
        firstWin: "Гран-при Венгрии 2021",
        titles: 0,
		champ_dri: 0,
        
        info: "Французская команда, созданная на базе команды Renault. В дебютном сезоне за Альпин выступали, двукратный чемпион мира - Фернандо Алонсо и выступавший за команду Renault в 2020 году Эстебан Окон. Коллектив использовал силовые установки Renault. Резервным пилотом команды в сезоне 2021 года стал российский гонщик Даниил Квят."
    },
    {  shortName: "Haas",
        fullName: "TGR Haas F1 Team",
        color: "#DFE1E2",
        
        base: "Каннаполис", country: "us",
        license: "США", license_country: "us",
        director: "Айо Комацу", director_country: "jp",
        founder: "Джин Хаас", founder_country: "us",
        
        car: "VF-26",
        engine: "Ferrari",
        power: "067/6 1.6 V6 T",
        fuel: "Shell",

        debut: "2016",
        firstWin: "",
        titles: 0,
		champ_dri: 0,
        
        info: "Американская команда, является первой американской командой, принявшей решение об участии в F1, со времён неудавшегося проекта US F1 Team, старт которого планировался в 2010 году."
    },
    {  shortName: "Audi",
        fullName: "Audi Revolut F1 Team",
        color: "#EB4526",
        
        base: "Хинвил", country: "ch",
        license: "Германия", license_country: "de",
        director: "Маттиа Бинотто", director_country: "it",
        founder: "Audi AG", founder_country: "de",
        
        car: "RS-26",
        engine: "Audi",
        power: "AFR 26 1.6 V6 H",
        fuel: "BP",

        debut: "2026",
        firstWin: "",
        titles: 0,
		champ_dri: 0,
        
        info: "Немецкая команда, была сформирована путём приобретения команды Sauber, с двигателями, разработанными Audi Formula Racing GmbH. В 1930-39 годах, задолго до проведения первого чемпионата мира в 1950 году, компания Audi AG уже участвовала в гонках Гран-при под названием Auto Union. Спустя 85 лет современная компания Audi решила вернутся."
    },
    {  shortName: "Williams",
        fullName: "Atlassian Williams Racing",
        color: "#3267D4",
        
        base: "Гроув", country: "gb",
        license: "Великобритания", license_country: "gb",
        director: "Джеймс Ваулз", director_country: "gb",
        founder: "Фрэнсис Уильямс", founder_country: "gb",
        
        car: "FW48",
        engine: "Mercedes",
        power: "M17 E 1.6 V6 T",
        fuel: "Petronas",

        debut: "1975",
        firstWin: "Гран-при Великобритании 1979",
        titles: 9,
		champ_dri: 7,
        
        info: "Британская команда, созданая Фрэнком Уильямсом и Патриком Хэдом под названием Williams Grand Prix Engineering. В сезоне 1980 года команда выиграла свой первый кубок конструкторов, опередив почти вдвое по очкам занявшую 2-е место Ligier. Все шасси команды содержат приставку FW - инициалы основателя команды."
    },
    {  shortName: "Aston Martin", // 2027 - Aston Martin Aramco Honda
        fullName: "Aston Martin Aramco F1 Team",
        color: "#4B9774",
        
        base: "Сильверстоун", country: "gb",
        license: "Великобритания", license_country: "gb",
        director: "Эдриан Ньюи", director_country: "gb",
        founder: "Лоуренс Стролл", founder_country: "ca",
        
        car: "AMR26",
        engine: "Honda",
        power: "RA626H 1.6 V6 T",
        fuel: "Aramco",

        debut: "2021",
        firstWin: "",
        titles: 0,
		champ_dri: 0,
        
        info: "Британская команда, созданная на базе команды Racing Point, после покупки бизнесменом Лоуренсом Строллом 20% процентов в компании Aston Martin. Пилотами команды на дебютный сезон стали - Лэнс Стролл, сын Лоуренса, и четырёхкратный чемпион мира - Себастьян Феттель."
    },
    {  shortName: "Cadillac",
        fullName: "Cadillac F1 Team",
        color: "#AAAADD",
        
        base: "Фишерс", country: "us",
        license: "США", license_country: "us",
        director: "Марцин Будковски", director_country: "pl",
        founder: "TWG Global", founder_country: "us",
        
        car: "MAC-26",
        engine: "Ferrari",
        power: "067/6 1.6 V6 T",
        fuel: "Shell",

        debut: "2026",
        firstWin: "",
        titles: 0,
		champ_dri: 0,
        
        info: "Американская команда, первый сезон которой начался в 2026 году в качестве конструктора, а с сезона 2029 года - будет ещё и в качестве поставщика двигателей."
    },
];

function getSeasonsCount(debutYear) {
    const currentYear = new Date().getFullYear();
    const debut = parseInt(debutYear);
    if (debut > currentYear) return 0;
    return currentYear - debut + 1;
}

teamsData.forEach(team => {
    Object.defineProperty(team, 'seasons', {
        get: function() {
            const currentYear = new Date().getFullYear();
            const debut = parseInt(this.debut);
            
            if (debut > currentYear) return 0;
            return currentYear - debut + 1;
        },
        enumerable: true,
        configurable: true
    });
});

function getTeamDrivers(teamShortName) {
    return driversData.filter(driver => driver.team === teamShortName);
}

function getTeamColor(teamShortName) {
    const team = teamsData.find(t => t.shortName === teamShortName);
    return team ? team.color : '#FFFFFF';
}

function getTeamData(teamShortName) {
    return teamsData.find(t => t.shortName === teamShortName);
}

function animateTeamsAppearance(container) {
    const cards = container.querySelectorAll('.team-card');
    
    if (cards.length === 0) return;
    
    // Определяем количество колонок в сетке
    const containerWidth = container.offsetWidth || container.parentElement.offsetWidth || 1200;
    const cardMinWidth = 250; // минимальная ширина карточки из grid
    const gap = 20; // gap из grid-template-columns
    const cols = Math.max(1, Math.floor((containerWidth + gap) / (cardMinWidth + gap)));
    
    // Группируем карточки по рядам
    const rows = [];
    cards.forEach((card, index) => {
        const rowIndex = Math.floor(index / cols);
        if (!rows[rowIndex]) rows[rowIndex] = [];
        rows[rowIndex].push(card);
    });
    
    // Сбрасываем начальное состояние для всех карточек
    cards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.92) translateY(15px)';
        card.style.transition = 'none';
    });
    
    // Показываем ряды с задержкой
    requestAnimationFrame(() => {
        rows.forEach((rowCards, rowIndex) => {
            const delay = rowIndex * 80; // 80ms между рядами
            
            rowCards.forEach((card) => {
                // Добавляем небольшую случайность внутри ряда для естественности
                const randomOffset = (Math.random() - 0.5) * 20;
                const cardDelay = delay + randomOffset;
                
                // Устанавливаем transition с задержкой
                card.style.transition = `opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${cardDelay}ms, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${cardDelay}ms`;
                
                // Показываем карточку
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1) translateY(0)';
                });
            });
        });
    });
}

function initTeamsPage(container) {
    'use strict';
    
    container.innerHTML = '';
    container.style.padding = '20px 0px 2px 2px';
    
    // Сортируем команды по очкам в Кубке конструкторов
    const constructorStandings = calculateConstructorStandings();
    
    // Создаём массив команд в правильном порядке
    const sortedTeams = [];
    
    // Сначала добавляем команды, у которых есть очки (отсортированные по убыванию)
    constructorStandings.forEach(standing => {
        const team = teamsData.find(t => t.shortName === standing.team);
        if (team) {
            sortedTeams.push(team);
        }
    });
    
    // Добавляем команды, которых нет в standings (с 0 очками)
    teamsData.forEach(team => {
        if (!sortedTeams.includes(team)) {
            sortedTeams.push(team);
        }
    });
    
    // Создаём сетку
    const grid = document.createElement('div');
    grid.className = 'teams-grid';
    
    // Добавляем все команды
    sortedTeams.forEach(team => {
        const card = createTeamCard(team);
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
    
    // Запускаем анимацию появления
    requestAnimationFrame(() => {
        animateTeamsAppearance(grid);
    });
}

function createTeamCard(team) {
    const drivers = getTeamDrivers(team.shortName);
    
    const card = document.createElement('div');
    card.className = 'team-card';
    card.style.setProperty('--team-color', team.color);
    
    const logoContainer = document.createElement('div');
    logoContainer.className = 'team-card-logo';
    const logo = document.createElement('img');
    logo.src = getTeamLogo(team.shortName);
    logo.alt = team.shortName;
    logo.onerror = () => { logo.style.display = 'none'; };
    logoContainer.appendChild(logo);
    
    const nameDiv = document.createElement('div');
    nameDiv.className = 'team-card-name';
    nameDiv.textContent = team.shortName;
    
    const divider = document.createElement('div');
    divider.className = 'team-card-divider';
    
    const driversList = document.createElement('div');
    driversList.className = 'team-card-drivers';
    
    if (drivers.length === 0) {
        const emptyRow = document.createElement('div');
        emptyRow.className = 'team-driver-row empty';
        emptyRow.textContent = 'Пилоты не назначены';
        driversList.appendChild(emptyRow);
    } else {
        drivers.forEach(driver => {
            const driverRow = document.createElement('div');
            driverRow.className = 'team-driver-row';
            driverRow.addEventListener('click', (e) => {
                e.stopPropagation();
                openDriverModal(driver);
            });
            
            const numberSpan = document.createElement('span');
            numberSpan.className = 'team-driver-number';
            numberSpan.textContent = driver.number;
            
            const nameSpan = document.createElement('span');
            nameSpan.className = 'team-driver-name';
            nameSpan.innerHTML = `
                <span class="driver-fullname">${driver.name}</span>
                <span class="driver-shortname">${driver.namem}</span>
            `;
            
            const flagImg = document.createElement('img');
            flagImg.src = `Images/Flags/${driver.country}.svg`;
            flagImg.title = getCountryName(driver.country);
            flagImg.alt = driver.country;
            flagImg.className = 'team-driver-flag';
            flagImg.onerror = () => { flagImg.style.display = 'none'; };
            
            driverRow.appendChild(numberSpan);
            driverRow.appendChild(nameSpan);
            driverRow.appendChild(flagImg);
            driversList.appendChild(driverRow);
        });
    }
    
    card.appendChild(logoContainer);
    card.appendChild(nameDiv);
    card.appendChild(divider);
    card.appendChild(driversList);
    
    card.addEventListener('click', () => openTeamModal(team));
    
    return card;
}

function openTeamModal(team) {
    const drivers = getTeamDrivers(team.shortName);
    
    const existingModal = document.querySelector('.team-modal-overlay');
    if (existingModal) existingModal.remove();
    
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflowY = 'scroll';
    
    function unlockScroll() {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, scrollY);
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'team-modal-overlay';
    
    // ====================
    // ЛЕВАЯ КОЛОНКА — Статистика
    // ====================
    const leftColumn = document.createElement('div');
    leftColumn.className = 'tm-left-column';

    const statsPanel = document.createElement('div');
    statsPanel.className = 'tm-stats-panel';
    statsPanel.style.setProperty('--team-color', team.color);

	const statsHTML = `
		<div class="tm-stat-cell">
			<span class="tm-stat-label">Дебют</span>
			<span class="tm-stat-value">${team.debut}<span class="gp-year-suffix"> г.</span></span>
		</div>
		<div class="tm-stat-cell">
			<span class="tm-stat-label">Гоночные сезоны</span>
			<span class="tm-stat-value">${team.seasons}</span>
		</div>
		<div class="tm-stat-cell tm-stat-full">
			<span class="tm-stat-label">Первая победа</span>
			<span class="tm-stat-value">${team.firstWin || '---'}</span>
		</div>
		<div class="tm-stat-cell">
			<span class="tm-stat-label">Кубки конструкторов</span>
			<span class="tm-stat-value">${team.titles || 0}</span>
		</div>
		<div class="tm-stat-cell">
			<span class="tm-stat-label">Пилоты - Чемпионы</span>
			<span class="tm-stat-value">${team.champ_dri}</span>
		</div>
	`;

    statsPanel.innerHTML = statsHTML;
    leftColumn.appendChild(statsPanel);
    
    // ====================
    // ЦЕНТР — Основная плашка
    // ====================
    const modal = document.createElement('div');
    modal.className = 'team-modal';
    modal.style.setProperty('--team-color', team.color);
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'team-modal-close-btn';
    closeBtn.innerHTML = '&times;';
    
    function closeModal() {
        overlay.remove();
        unlockScroll();
        document.removeEventListener('keydown', escHandler);
    }
    
    closeBtn.addEventListener('click', closeModal);
    
    // Полный логотип
    const fullLogoContainer = document.createElement('div');
    fullLogoContainer.className = 'tm-logo-container';
    const fullLogo = document.createElement('img');
    fullLogo.src = `Images/Teams/${team.shortName.toLowerCase().replace(/\s+/g, '-')}.png`;
    fullLogo.alt = team.fullName;
    fullLogo.className = 'tm-full-logo';
    fullLogo.onerror = () => { 
        fullLogo.src = `Images/Teams/${team.shortName.toLowerCase().replace(/\s+/g, '-')}-m.png`;
        fullLogo.style.maxHeight = '60px';
    };
    fullLogoContainer.appendChild(fullLogo);
    
    const fullNameEl = document.createElement('h2');
    fullNameEl.className = 'tm-full-name';
    fullNameEl.textContent = team.fullName;
    
    // Разделитель 1
    const divider1 = document.createElement('hr');
    divider1.className = 'tm-divider';
    
    // База и Руководитель
    const infoRow1 = document.createElement('div');
    infoRow1.className = 'tm-info-row';
    infoRow1.innerHTML = `
        <div class="tm-info-cell">
            <span class="tm-label">База</span>
            <span class="tm-value">
            <img src="Images/Flags/${team.country}.svg" alt="" class="tm-base-flag" title="${getCountryName(team.country)}">${team.base}</span>
        </div>
        <div class="tm-info-cell">
            <span class="tm-label">Руководитель</span>
            <span class="tm-value">
			<img src="Images/Flags/${team.director_country}.svg" alt="" class="tm-base-flag" title="${getCountryName(team.director_country)}">${team.director}</span>
        </div>
    `;
    
    // Разделитель 2
    const divider2 = document.createElement('hr');
    divider2.className = 'tm-divider';
    
    // Лицензия и Основатель
    const infoRow2 = document.createElement('div');
    infoRow2.className = 'tm-info-row';
    infoRow2.innerHTML = `
        <div class="tm-info-cell">
            <span class="tm-label">Лицензия FIA</span>
            <span class="tm-value"><img src="Images/Flags/${team.license_country}.svg" alt="" class="tm-base-flag" title="${getCountryName(team.license_country)}">${team.license}</span>
        </div>
        <div class="tm-info-cell">
            <span class="tm-label">Основатель</span>
            <span class="tm-value">
			<img src="Images/Flags/${team.founder_country}.svg" alt="" class="tm-base-flag" title="${getCountryName(team.founder_country)}">${team.founder}</span>
        </div>
    `;
    
    // Разделитель 3
    const divider3 = document.createElement('hr');
    divider3.className = 'tm-divider';
    
    // О команде
    const infoRow3 = document.createElement('div');
    infoRow3.className = 'tm-info-row';
    infoRow3.innerHTML = `
        <div class="tm-info-cell">
            <span class="tm-label">О команде</span>
            <span class="tm-value">${team.info}</span>
        </div>
    `;
    
    // Разделитель 4
    const divider4 = document.createElement('hr');
    divider4.className = 'tm-divider';
    
    // Пилоты
    const pilotsSection = document.createElement('div');
    pilotsSection.className = 'tm-pilots-section';
    
    const pilotsTitle = document.createElement('h3');
    pilotsTitle.className = 'tm-pilots-title';
    pilotsTitle.textContent = 'Пилоты';
    pilotsSection.appendChild(pilotsTitle);
    
    const pilotsList = document.createElement('div');
    pilotsList.className = 'tm-pilots-list';
    
    if (drivers.length === 0) {
        const emptyPilot = document.createElement('div');
        emptyPilot.className = 'tm-pilot-row empty';
        emptyPilot.textContent = 'Нет данных';
        pilotsList.appendChild(emptyPilot);
    } else {
        drivers.forEach(driver => {
            const pilotRow = document.createElement('div');
            pilotRow.className = 'tm-pilot-row';
            pilotRow.addEventListener('click', () => openDriverModal(driver));
            
            const numberSpan = document.createElement('span');
            numberSpan.className = 'tm-pilot-number';
            numberSpan.textContent = driver.number;
            
            const nameSpan = document.createElement('span');
            nameSpan.className = 'tm-pilot-name';
            nameSpan.textContent = driver.name;
            
            const flagImg = document.createElement('img');
            flagImg.src = `Images/Flags/${driver.country}.svg`;
            flagImg.title = getCountryName(driver.country);
            flagImg.alt = driver.country;
            flagImg.className = 'tm-pilot-flag';
            
            pilotRow.appendChild(numberSpan);
            pilotRow.appendChild(nameSpan);
            pilotRow.appendChild(flagImg);
            pilotsList.appendChild(pilotRow);
        });
    }
    
    pilotsSection.appendChild(pilotsList);
    
    modal.appendChild(closeBtn);
    modal.appendChild(fullLogoContainer);
    modal.appendChild(fullNameEl);
    modal.appendChild(divider1);
    modal.appendChild(infoRow1);     
    modal.appendChild(divider2);
    modal.appendChild(infoRow2);     
    modal.appendChild(divider3);
    modal.appendChild(infoRow3);     
    modal.appendChild(divider4);
    modal.appendChild(pilotsSection);
    
    // ====================
    // ПРАВАЯ КОЛОНКА — Болид
    // ====================
    const rightColumn = document.createElement('div');
    rightColumn.className = 'tm-right-column';
    
    const bolidPanel = document.createElement('div');
    bolidPanel.className = 'tm-bolid-panel';
    bolidPanel.style.setProperty('--team-color', team.color);
    
    const bolidImg = document.createElement('img');
    bolidImg.src = `Images/Bolid/${team.shortName.toLowerCase().replace(/\s+/g, '-')}.webp`;
    bolidImg.alt = team.car;
    bolidImg.className = 'tm-bolid-img';
    bolidImg.onerror = () => { bolidPanel.style.display = 'none'; };
    bolidPanel.appendChild(bolidImg);
    
    const bolidInfo = document.createElement('div');
    bolidInfo.className = 'tm-bolid-info';
    bolidInfo.innerHTML = `
        <div class="tm-bolid-info-cell">
            <span class="tm-bolid-info-label">Шасси</span>
            <span class="tm-bolid-info-value">${team.car}</span>
        </div>
        <div class="tm-bolid-info-cell">
            <span class="tm-bolid-info-label">Двигатель</span>
            <span class="tm-bolid-info-value">${team.engine}</span>
        </div>
        <div class="tm-bolid-info-cell">
            <span class="tm-bolid-info-label">Топливо</span>
            <span class="tm-bolid-info-value">${team.fuel}</span>
        </div>
        <div class="tm-bolid-info-cell">
            <span class="tm-bolid-info-label">Силовая установка</span>
            <span class="tm-bolid-info-value">${team.power}</span>
        </div>
    `;
    bolidPanel.appendChild(bolidInfo);
    
    rightColumn.appendChild(bolidPanel);
    
    // Собираем всё вместе
    overlay.appendChild(leftColumn);
    overlay.appendChild(modal);
    overlay.appendChild(rightColumn);
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    
    function escHandler(e) {
        if (e.key === 'Escape') closeModal();
    }
    document.addEventListener('keydown', escHandler);
    
    document.body.appendChild(overlay);
    
    // Анимация
    requestAnimationFrame(() => {
        // Левая колонка — выезжает слева
        statsPanel.style.transition = 'none';
        statsPanel.style.opacity = '0';
        statsPanel.style.transform = 'translateX(-40px)';
        
        // Правая колонка — выезжает справа
        bolidPanel.style.transition = 'none';
        bolidPanel.style.opacity = '0';
        bolidPanel.style.transform = 'translateX(40px)';
        
        requestAnimationFrame(() => {
            // Левая — выезжает слева
            statsPanel.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            statsPanel.style.transitionDelay = '0.2s';
            statsPanel.style.opacity = '1';
            statsPanel.style.transform = 'translateX(0)';
            
            // Правая — выезжает справа
            bolidPanel.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            bolidPanel.style.transitionDelay = '0.2s';
            bolidPanel.style.opacity = '1';
            bolidPanel.style.transform = 'translateX(0)';
        });
        
        overlay.classList.add('active');
        modal.classList.add('active');
    });
}