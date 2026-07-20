const teamsData = [
    {  shortName: "Mercedes",
        fullName: "Mercedes-AMG PETRONAS F1 Team",
        base: "Милтон-Кинс, Великобритания",
		country: "gb",
		license_country: "de",
		license: "Германия",
        director: "Тото Вольфф",
        founder: "Норберт Хауг",
        car: "W17 E",
        engine: "Mercedes",
		titles: 8,  
        firstWin: "Китай, Шанхай, 2012",
        debut: "2010",
        color: "#75F1D3",
		info: "В 1994 году компания Mercedes-Benz участвовала в F1, в качестве поставщика двигателей для гоночной команды Sauber. В 2009 году Mercedes-Benz приобрела 75% контрольного пакета в команде Brawn GP, выигравшей чемпионат 2009 года. Позднее Brawn GP, переименованная в Mercedes GP, дебютировала в 2010 году. За неё выступали немецкие пилоты Нико Росберг и Михаэль Шумахер."
    },
    {  shortName: "Ferrari",
        fullName: "Scuderia Ferrari HP",
        base: "Маранелло, Италия",
		country: "it",
		license_country: "it",
		license: "Италия",
        director: "Фредерик Вассёр",
        founder: "Энцо Феррари",
        car: "SF-26",
        engine: "Ferrari",
		titles: 16,  
        firstWin: "Британия, Сильверстоун, 1951",
        debut: "1950",
        color: "#D52E37",
		info: "Итальянская команда, представляющая собой подразделение автомобильной компании Ferrari Gestione Sportiva, занимающееся гонками. Команда принимает участие в гонках F1 с 1950 года по сей день и является самой старой и успешной командой в чемпионате."
    },
    {  shortName: "McLaren",
        fullName: "McLaren Mastercard F1 Team",
        base: "Уокинг, Великобритания",
		country: "gb",
		license_country: "gb",
		license: "Великобритания",
        director: "Андреа Стелла",
        founder: "Брюс Макларен",
        debut: "1966",
        car: "MCL40",
        engine: "Mercedes",
		titles: 10,  
        firstWin: "Бельгия, Спа-Франкоршам, 1968",
        debut: "1966",
        color: "#ef8733",
		info: "Британская команда, представляющая собой подразделение McLaren Technology Group. В разное время команда участвовала и побеждала в различных автоспортивных соревнованиях, пять раз выигрывала соревнования Can-Am, трижды выигрывала 500 миль Индианаполиса, по одному разу в гонках 24 часа Ле-Мана и 12 часов Себринга, в настоящее время команда сконцентрирована на участии в чемпионате мира F1, где 10 раз завоёвывала кубок конструкторов."
    },
    {  shortName: "Red Bull",
        fullName: "Oracle Red Bull Racing",
        base: "Милтон-Кинс, Великобритания",
		country: "gb",
		license_country: "at",
		license: "Австрия",
        director: "Лоран Мекис",
        founder: "Дитрих Матешиц",
        car: "RB22",
        engine: "Red Bull Ford",
		titles: 6,  
        firstWin: "Китай, Шанхай, 2009",
        debut: "2005",
        color: "#4570C0",
		info: "Австрийская команда, основана руководителем концерна по производству энергетических напитков Red Bull - Дитрихом Матешицем. Хотя база команды и расположена в Великобритания, но команда выступает под австрийской лицензией. Компания Ford Motor заявила о выходе принадлежащей ей команды Jaguar Racing из чемпионата F1 в сентябре 2004 года и уже ноябре Red Bull, подтвердил покупку Jaguar Racing в последний день подачи заявок на участие в сезоне 2005 года."
    },
    {  shortName: "Williams",
        fullName: "Atlassian Williams Racing",
        base: "Гроу, Великобритания",
		country: "gb",
		license_country: "gb",
		license: "Великобритания",
        director: "Джеймс Ваулз",
        founder: "Фрэнк Уильямс",
        car: "FW48",
        engine: "Mercedes",
		titles: 9,  
        firstWin: "Британия, Сильверстоун, 1979",
        debut: "1975",
        color: "#3267D4",
		info: "Британская команда, созданая Фрэнком Уильямсом и Патриком Хэдом под названием Williams Grand Prix Engineering. В сезоне 1980 года команда выиграла свой первый кубок конструкторов, опередив почти вдвое по очкам занявшую 2-е место Ligier. Все шасси команды содержат приставку FW - инициалы основателя команды."
    },
    {  shortName: "Racing Bulls",
        fullName: "Visa Cash App Racing Bulls F1 Team",
        base: "Фаэнца, Италия",
		country: "it",
		license_country: "it",
		license: "Италия",
        director: "Алан Пермейн",
        founder: "Дитрих Матешиц",
        car: "VCARB 03",
        engine: "Red Bull Ford",
		titles: 0,  
        firstWin: "Италия, Монца, 2008",
        debut: "2006",
        color: "#7091f8",
		info: "Итальянская команда, принадлежащая австрийскому конгломерату Red Bull GmbH. С сезона 2006 по 2019 года команда выступала под названием Toro Rosso. К сезону 2020 года была переименована в AlphaTauri. К сезону 2024 года команда была переименована в своё текущее название."
    },
    {  shortName: "Aston Martin", // 2027 - Aston Martin Aramco Honda
        fullName: "Aston Martin Aramco F1 Team",
        base: "Сильверстоун, Великобритания",
		country: "gb",
		license_country: "gb",
		license: "Великобритания",
        director: "Эдриан Ньюи",
        founder: "Лоуренс Стролл",
        car: "AMR26",
        engine: "Honda",
		titles: 0,  
        firstWin: "",
        debut: "2021",
        color: "#4B9774",
		info: "Британская команда, созданная на базе команды Racing Point, после покупки бизнесменом Лоуренсом Строллом 20% процентов в компании Aston Martin. Пилотами команды на дебютный сезон стали - Лэнс Стролл, сын Лоуренса, и четырёхкратный чемпион мира - Себастьян Феттель."
    },
    {  shortName: "Haas",
        fullName: "TGR Haas F1 Team",
        base: "Каннаполис, США",
		country: "us",
		license_country: "us",
		license: "США",
        director: "Айо Комацу",
        founder: "Джин Хаас",
        debut: "2016",
        car: "VF-26",
        engine: "Ferrari",
		titles: 0,  
        firstWin: "",
        color: "#DFE1E2",
		info: "Американская команда, является первой американской командой, принявшей решение об участии в F1, со времён неудавшегося проекта US F1 Team, старт которого планировался в 2010 году."
    },
    {  shortName: "Audi",
        fullName: "Audi Revolut F1 Team",
        base: "Бавария, Германия",
		country: "de",
		license_country: "de",
		license: "Германия",
        director: "Маттиа Бинотто",
        founder: "Audi Formula Racing GmbH",
        car: "RS-26",
        engine: "Audi",
		titles: 0,  
        firstWin: "",
        debut: "2026",
        color: "#EB4526",
		info: "Немецкая команда, была сформирована путём приобретения команды Sauber, с двигателями, разработанными Audi Formula Racing GmbH. В 1930-39 годах, задолго до проведения первого чемпионата мира в 1950 году, компания Audi AG уже участвовала в гонках Гран-при под названием Auto Union. Спустя 85 лет современная компания Audi решила вернутся."
    },
    {  shortName: "Alpine", // 2027 - Gucci Racing Alpine F1 Team
        fullName: "BWT Alpine F1 Team",
        base: "Эсон, Франция",
		country: "fr",
		license_country: "fr",
		license: "Франция",
        director: "Флавио Бриаторе",
        founder: "Renault Group",
        car: "A526",
        engine: "Mercedes",
		titles: 0,  
        firstWin: "Венгрия, Хунгароринг, 2021",
        debut: "2021",
        color: "#479FE2",
		info: "Французская команда, созданная на базе команды Renault. В дебютном сезоне за Альпин выступали, двукратный чемпион мира - Фернандо Алонсо и выступавший за команду Renault в 2020 году Эстебан Окон. Коллектив использовал силовые установки Renault. Резервным пилотом команды в сезоне 2021 года стал российский гонщик Даниил Квят."
    },
    {  shortName: "Cadillac",
        fullName: "Cadillac F1 Team",
        base: "Фишерс, США",
		country: "us",
		license_country: "us",
		license: "США",
        director: "Грэм Лоудон",
        founder: "TWG Cadillac",
        car: "MAC-26",
        engine: "Ferrari",
		titles: 0,  
        firstWin: "",
        debut: "2026",
        color: "#AAAADD",
		info: "Американская команда, первый сезон которой начался в 2026 году в качестве конструктора, а с сезона 2029 года - будет ещё и в качестве поставщика двигателей."
    }
];

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

function initTeamsPage(container) {
    'use strict';
    
    container.innerHTML = '';
    container.style.padding= '20px 0px 2px 2px';
    
     
    const grid = document.createElement('div');
    grid.className = 'teams-grid';
    
    teamsData.forEach(team => {
        const card = createTeamCard(team);
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
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
    statsPanel.innerHTML = `
        <div class="tm-stat-cell">
            <span class="tm-stat-label">Дебют</span>
            <span class="tm-stat-value">${team.debut}</span>
        </div>
        <div class="tm-stat-cell">
            <span class="tm-stat-label">Кубки конструкторов</span>
            <span class="tm-stat-value">${team.titles || 0}</span>
        </div>
        <div class="tm-stat-cell tm-stat-full">
            <span class="tm-stat-label">Первая победа</span>
            <span class="tm-stat-value">${team.firstWin || '---'}</span>
        </div>
    `;
    
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
            <span class="tm-value">${team.director}</span>
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
            <span class="tm-value">${team.founder}</span>
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
    // ПРАВАЯ КОЛОНКА — Болид (без изменений)
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
            <span class="tm-bolid-info-label">Поставщик шин</span>
            <span class="tm-bolid-info-value" style="color: #cece1a;">Pirelli</span>
        </div>
        <div class="tm-bolid-info-cell">
            <span class="tm-bolid-info-label">Силовая установка</span>
            <span class="tm-bolid-info-value">1.6 V6 Turbo</span>
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
        
        // Правая колонка — выезжает справа (без изменений)
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