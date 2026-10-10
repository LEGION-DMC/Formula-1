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
    {  shortName: "Alpine",
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
    {  shortName: "Aston Martin",
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

const TEAM_PATTERN_SVG = `<svg viewBox="0 0 928 634" preserveAspectRatio="xMidYMid slice" fill="none"><g><path d="M525.317 408.664H580.116C595.812 408.664 609.647 402.398 617.198 391.253L730.294 226.315H674.743C659.047 226.315 645.977 232.581 638.413 243.726L525.317 408.664Z"></path><path d="M209.91 406.694H264.709C280.405 406.694 293.99 400.427 301.105 389.282L407.732 224.344H352.181C336.485 224.344 323.653 230.611 316.537 241.756L209.91 406.694Z"></path><path d="M406.94 225.349H461.739C477.435 225.349 491.02 219.083 498.135 207.938L604.762 43H549.211C533.515 43 520.683 49.2665 513.567 60.4113L406.94 225.349Z"></path><path d="M730.665 226.314H785.463C801.16 226.314 814.744 220.047 821.86 208.903L928.5 43.9646H872.949C857.252 43.9646 844.421 50.2311 837.305 61.3759L730.678 226.314H730.665Z"></path><path d="M566.424 225.349H621.223C636.92 225.349 650.504 219.083 657.619 207.938L764.247 43H708.695C692.999 43 680.167 49.2665 673.052 60.4113L566.424 225.349Z"></path><path d="M369.341 407.118H424.14C439.836 407.118 453.42 400.851 460.536 389.706L567.163 224.768H511.612C495.915 224.768 483.084 231.035 475.968 242.18L369.341 407.118Z"></path><path d="M701.396 408.254H756.195C771.892 408.254 785.476 401.987 792.591 390.842L899.219 225.904H843.667C827.971 225.904 815.139 232.171 808.024 243.316L701.396 408.254Z"></path><path d="M175.004 588.528H229.803C245.499 588.528 259.084 582.261 266.199 571.116L372.826 406.178H317.275C301.579 406.178 288.747 412.445 281.632 423.59L175.004 588.528Z"></path><path d="M13.5 588.528H68.2988C83.9952 588.528 97.5794 582.261 104.695 571.116L211.322 406.178H155.771C140.075 406.178 127.243 412.445 120.127 423.59L13.5 588.528Z"></path><path d="M327.493 591H382.292C397.988 591 411.573 584.733 418.688 573.589L525.316 408.651H469.764C454.068 408.651 441.236 414.917 434.121 426.062L327.493 591Z"></path><path d="M668.222 588.528H723.021C738.717 588.528 752.301 582.261 759.417 571.116L866.044 406.178H810.493C794.796 406.178 781.965 412.445 774.849 423.59L668.222 588.528Z"></path><path d="M506.715 588.528H561.514C577.21 588.528 590.794 582.261 597.91 571.116L704.537 406.178H648.986C633.29 406.178 620.458 412.445 613.342 423.59L506.715 588.528Z"></path></g></svg>`;
const teamsIndex = new Map(teamsData.map(t => [t.shortName, t]));
const currentYear = new Date().getFullYear();

teamsData.forEach(team => {
    Object.defineProperty(team, 'seasons', {
        get() {
            const debut = parseInt(this.debut);
            return debut > currentYear ? 0 : currentYear - debut + 1;
        },
        enumerable: true,
        configurable: true
    });
});

const teamSlug = shortName => shortName.toLowerCase().replace(/\s+/g, '-');

const archiveTeamColors = {
    'toro-rosso': '#469BFF',
    'sauber': '#3A3D40',
    'alphatauri': '#022B4A',
    'force-india': '#FF9933',
    'racing-point': '#F596C8',
    'minardi': '#FFD700',
    'manor': '#FF4C00',
    'renault': '#FFF500',
    'alfa-romeo': '#9B0000',
    'stake': '#01C00E'
};

const archiveTeams = new Set([
    'toro-rosso', 'sauber', 'alphatauri', 'force-india', 'racing-point',
    'minardi', 'manor', 'renault', 'alfa-romeo', 'stake'
]);

const getTeamColor = teamName => {
    const slug = teamSlug(teamName);
    if (archiveTeamColors[slug]) return archiveTeamColors[slug];
    return teamsIndex.get(teamName)?.color ?? '#FFFFFF';
};

const getTeamLogo = teamName => {
    const slug = teamSlug(teamName);
    return archiveTeams.has(slug)
        ? `Images/Teams/Archive/${slug}.png`
        : `Images/Teams/${slug}-m.png`;
};

const getTeamData = shortName => teamsIndex.get(shortName) || null;

const getTeamDrivers = shortName => driversData.filter(d => d.team === shortName);

const getSeasonsCount = debutYear => {
    const debut = parseInt(debutYear);
    return debut > currentYear ? 0 : currentYear - debut + 1;
};

const animateTeamsAppearance = container => {
    const cards = container.querySelectorAll('.team-card');
    if (!cards.length) return;

    const containerWidth = container.offsetWidth || container.parentElement?.offsetWidth || 1200;
    const cols = Math.max(1, Math.floor((containerWidth + 20) / (250 + 20)));

    const rows = [];
    cards.forEach((card, i) => {
        const rowIndex = Math.floor(i / cols);
        (rows[rowIndex] ??= []).push(card);
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.92) translateY(15px)';
        card.style.transition = 'none';
    });

    requestAnimationFrame(() => {
        rows.forEach((rowCards, rowIndex) => {
            const baseDelay = rowIndex * 80;
            rowCards.forEach(card => {
                const cardDelay = baseDelay + (Math.random() - 0.5) * 20;
                card.style.transition = `opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${cardDelay}ms, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${cardDelay}ms`;
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1) translateY(0)';
                });
            });
        });
    });
};

const initTeamsPage = container => {
    container.innerHTML = '';
    container.style.padding = '20px 0px 2px 2px';

    const standings = calculateConstructorStandings();
    const sortedTeams = [];
    const seen = new Set();

    standings.forEach(s => {
        const team = teamsIndex.get(s.team);
        if (team && !seen.has(team.shortName)) {
            sortedTeams.push(team);
            seen.add(team.shortName);
        }
    });

    teamsData.forEach(team => {
        if (!seen.has(team.shortName)) sortedTeams.push(team);
    });

    const grid = document.createElement('div');
    grid.className = 'teams-grid';

    sortedTeams.forEach(team => grid.appendChild(createTeamCard(team)));

    container.appendChild(grid);

    requestAnimationFrame(() => animateTeamsAppearance(grid));
};

const createTeamCard = team => {
    const drivers = getTeamDrivers(team.shortName);

    const card = document.createElement('div');
    card.className = 'team-card';
    card.style.setProperty('--team-color', team.color);

    const patternDiv = document.createElement('div');
    patternDiv.className = 'team-card-bg-pattern';
    patternDiv.innerHTML = TEAM_PATTERN_SVG;
    card.appendChild(patternDiv);

    const overlay = document.createElement('div');
    overlay.className = 'team-card-bg-overlay';
    card.appendChild(overlay);

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

    if (!drivers.length) {
        const emptyRow = document.createElement('div');
        emptyRow.className = 'team-driver-row empty';
        emptyRow.textContent = 'Пилоты не назначены';
        driversList.appendChild(emptyRow);
    } else {
        drivers.forEach(driver => {
            const driverRow = document.createElement('div');
            driverRow.className = 'team-driver-row';
            driverRow.addEventListener('click', e => {
                e.stopPropagation();
                openDriverModal(driver);
            });

            const numberSpan = document.createElement('span');
            numberSpan.className = 'team-driver-number';
            numberSpan.textContent = driver.number;

            const nameSpan = document.createElement('span');
            nameSpan.className = 'team-driver-name';
            nameSpan.innerHTML = `<span class="driver-fullname">${driver.name}</span><span class="driver-shortname">${driver.namem}</span>`;

            const flagImg = document.createElement('img');
            flagImg.src = `Images/Flags/${driver.country}.svg`;
            flagImg.title = getCountryName(driver.country);
            flagImg.alt = driver.country;
            flagImg.className = 'team-driver-flag';
            flagImg.onerror = () => { flagImg.style.display = 'none'; };

            driverRow.append(numberSpan, nameSpan, flagImg);
            driversList.appendChild(driverRow);
        });
    }

    card.append(logoContainer, nameDiv, divider, driversList);
    card.addEventListener('click', () => openTeamModal(team));

    return card;
};

const openTeamModal = team => {
    const drivers = getTeamDrivers(team.shortName);

    document.querySelector('.team-modal-overlay')?.remove();

    const scrollY = window.scrollY;
    Object.assign(document.body.style, {
        position: 'fixed',
        top: `-${scrollY}px`,
        width: '100%',
        overflowY: 'scroll'
    });

    const unlockScroll = () => {
        Object.assign(document.body.style, {
            position: '',
            top: '',
            width: '',
            overflowY: ''
        });
        window.scrollTo(0, scrollY);
    };

    const overlay = document.createElement('div');
    overlay.className = 'team-modal-overlay';

    const leftColumn = document.createElement('div');
    leftColumn.className = 'tm-left-column';

    const statsPanel = document.createElement('div');
    statsPanel.className = 'tm-stats-panel';
    statsPanel.style.setProperty('--team-color', team.color);

    const statsPattern = document.createElement('div');
    statsPattern.className = 'tm-stats-pattern';
    statsPattern.innerHTML = TEAM_PATTERN_SVG;
    statsPanel.appendChild(statsPattern);

    const statsOverlay = document.createElement('div');
    statsOverlay.className = 'tm-stats-overlay';
    statsPanel.appendChild(statsOverlay);

    const statsContent = document.createElement('div');
    statsContent.style.cssText = 'position: relative; z-index: 2; display: contents;';
    statsContent.innerHTML = `
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
    statsPanel.appendChild(statsContent);
    leftColumn.appendChild(statsPanel);

    const modal = document.createElement('div');
    modal.className = 'team-modal';
    modal.style.setProperty('--team-color', team.color);

    const modalPattern = document.createElement('div');
    modalPattern.className = 'tm-modal-pattern';
    modalPattern.innerHTML = TEAM_PATTERN_SVG;
    modal.appendChild(modalPattern);

    const modalOverlayBg = document.createElement('div');
    modalOverlayBg.className = 'tm-modal-overlay-bg';
    modal.appendChild(modalOverlayBg);

    const modalContent = document.createElement('div');
    modalContent.style.cssText = 'position: relative; z-index: 2; width: 100%; display: flex; flex-direction: column; align-items: center;';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'team-modal-close-btn';
    closeBtn.innerHTML = '&times;';

    const closeModal = () => {
        overlay.remove();
        unlockScroll();
        document.removeEventListener('keydown', escHandler);
    };

    closeBtn.addEventListener('click', closeModal);

    const fullLogoContainer = document.createElement('div');
    fullLogoContainer.className = 'tm-logo-container';
    const fullLogo = document.createElement('img');
    fullLogo.src = `Images/Teams/${teamSlug(team.shortName)}.png`;
    fullLogo.alt = team.fullName;
    fullLogo.className = 'tm-full-logo';
    fullLogo.onerror = () => {
        fullLogo.src = `Images/Teams/${teamSlug(team.shortName)}-m.png`;
        fullLogo.style.maxHeight = '60px';
    };
    fullLogoContainer.appendChild(fullLogo);

    const fullNameEl = document.createElement('h2');
    fullNameEl.className = 'tm-full-name';
    fullNameEl.textContent = team.fullName;

    const flagImg = country => `<img src="Images/Flags/${country}.svg" alt="" class="tm-base-flag" title="${getCountryName(country)}">`;

    const divider1 = document.createElement('hr');
    divider1.className = 'tm-divider';

    const infoRow1 = document.createElement('div');
    infoRow1.className = 'tm-info-row';
    infoRow1.innerHTML = `
        <div class="tm-info-cell">
            <span class="tm-label">База</span>
            <span class="tm-value">${flagImg(team.country)}${team.base}</span>
        </div>
        <div class="tm-info-cell">
            <span class="tm-label">Руководитель</span>
            <span class="tm-value">${flagImg(team.director_country)}${team.director}</span>
        </div>
    `;

    const divider2 = document.createElement('hr');
    divider2.className = 'tm-divider';

    const infoRow2 = document.createElement('div');
    infoRow2.className = 'tm-info-row';
    infoRow2.innerHTML = `
        <div class="tm-info-cell">
            <span class="tm-label">Лицензия FIA</span>
            <span class="tm-value">${flagImg(team.license_country)}${team.license}</span>
        </div>
        <div class="tm-info-cell">
            <span class="tm-label">Основатель</span>
            <span class="tm-value">${flagImg(team.founder_country)}${team.founder}</span>
        </div>
    `;

    const divider3 = document.createElement('hr');
    divider3.className = 'tm-divider';

    const infoRow3 = document.createElement('div');
    infoRow3.className = 'tm-info-row';
    infoRow3.innerHTML = `
        <div class="tm-info-cell">
            <span class="tm-label">О команде</span>
            <span class="tm-value">${team.info}</span>
        </div>
    `;

    const divider4 = document.createElement('hr');
    divider4.className = 'tm-divider';

    const pilotsSection = document.createElement('div');
    pilotsSection.className = 'tm-pilots-section';

    const pilotsTitle = document.createElement('h3');
    pilotsTitle.className = 'tm-pilots-title';
    pilotsTitle.textContent = 'Пилоты';
    pilotsSection.appendChild(pilotsTitle);

    const pilotsList = document.createElement('div');
    pilotsList.className = 'tm-pilots-list';

    if (!drivers.length) {
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

            const flagImgEl = document.createElement('img');
            flagImgEl.src = `Images/Flags/${driver.country}.svg`;
            flagImgEl.title = getCountryName(driver.country);
            flagImgEl.alt = driver.country;
            flagImgEl.className = 'tm-pilot-flag';

            pilotRow.append(numberSpan, nameSpan, flagImgEl);
            pilotsList.appendChild(pilotRow);
        });
    }

    pilotsSection.appendChild(pilotsList);

    modalContent.append(closeBtn, fullLogoContainer, fullNameEl, divider1, infoRow1, divider2, infoRow2, divider3, infoRow3, divider4, pilotsSection);
    modal.appendChild(modalContent);

    const rightColumn = document.createElement('div');
    rightColumn.className = 'tm-right-column';

    const bolidPanel = document.createElement('div');
    bolidPanel.className = 'tm-bolid-panel';
    bolidPanel.style.setProperty('--team-color', team.color);

    const bolidPattern = document.createElement('div');
    bolidPattern.className = 'tm-bolid-pattern';
    bolidPattern.innerHTML = TEAM_PATTERN_SVG;
    bolidPanel.appendChild(bolidPattern);

    const bolidOverlay = document.createElement('div');
    bolidOverlay.className = 'tm-bolid-overlay';
    bolidPanel.appendChild(bolidOverlay);

    const bolidContent = document.createElement('div');
    bolidContent.style.cssText = 'position: relative; z-index: 2; width: 100%; display: flex; flex-direction: column; align-items: center;';

    const bolidImg = document.createElement('img');
    bolidImg.src = `Images/Bolid/${teamSlug(team.shortName)}.webp`;
    bolidImg.alt = team.car;
    bolidImg.className = 'tm-bolid-img';
    bolidImg.onerror = () => { bolidPanel.style.display = 'none'; };
    bolidContent.appendChild(bolidImg);

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
    bolidContent.appendChild(bolidInfo);
    bolidPanel.appendChild(bolidContent);
    rightColumn.appendChild(bolidPanel);

    overlay.append(leftColumn, modal, rightColumn);

    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeModal();
    });

    function escHandler(e) {
        if (e.key === 'Escape') closeModal();
    }
    document.addEventListener('keydown', escHandler);

    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
        Object.assign(statsPanel.style, { transition: 'none', opacity: '0', transform: 'translateX(-40px)' });
        Object.assign(bolidPanel.style, { transition: 'none', opacity: '0', transform: 'translateX(40px)' });

        requestAnimationFrame(() => {
            const anim = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            Object.assign(statsPanel.style, {
                transition: anim,
                transitionDelay: '0.2s',
                opacity: '1',
                transform: 'translateX(0)'
            });
            Object.assign(bolidPanel.style, {
                transition: anim,
                transitionDelay: '0.2s',
                opacity: '1',
                transform: 'translateX(0)'
            });
        });

        overlay.classList.add('active');
        modal.classList.add('active');
    });
};