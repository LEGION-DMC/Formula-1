const teamsData = [
    {  shortName: "Mercedes",
        fullName: "Mercedes-AMG PETRONAS F1 Team",
        base: "Брэкли, Великобритания",
        director: "Тото Вольфф",
        founder: "Норберт Хауг",
        debut: "2010",
        car: "W17",
        engine: "Mercedes",
        color: "#75F1D3"
    },
    {  shortName: "McLaren",
        fullName: "McLaren Mastercard F1 Team",
        base: "Уокинг, Великобритания",
        director: "Андреа Стелла",
        founder: "Брюс Макларен",
        debut: "1966",
        car: "MCL40",
        engine: "Mercedes",
        color: "#ef8733"
    },
    {  shortName: "Ferrari",
        fullName: "Scuderia Ferrari HP",
        base: "Маранелло, Италия",
        director: "Фредерик Вассёр",
        founder: "Энцо Феррари",
        debut: "1950",
        car: "SF-26",
        engine: "Ferrari",
        color: "#D52E37"
    },
    {  shortName: "Red Bull",
        fullName: "Oracle Red Bull Racing",
        base: "Милтон-Кинс, Великобритания",
        director: "Лоран Мекис",
        founder: "Дитрих Матешиц",
        debut: "2005",
        car: "RB22",
        engine: "Red Bull Ford",
        color: "#4570C0"
    },
    {  shortName: "Williams",
        fullName: "Atlassian Williams Racing",
        base: "Гроу, Оксфордшир, Великобритания",
        director: "Джеймс Ваулз",
        founder: "Фрэнк Уильямс",
        debut: "1975",
        car: "FW48",
        engine: "Mercedes",
        color: "#3267D4"
    },
    {  shortName: "Racing Bulls",
        fullName: "Visa Cash App Racing Bulls F1 Team",
        base: "Фаэнца, Италия",
        director: "Алан Пермейн",
        founder: "Дитрих Матешиц",
        debut: "2006",
        car: "VCARB 03",
        engine: "Red Bull Ford",
        color: "#7091f8"
    },
    {  shortName: "Aston Martin",
        fullName: "Aston Martin Aramco F1 Team",
        base: "Сильверстоун, Великобритания",
        director: "Эдриан Ньюи",
        founder: "Лоуренс Стролл",
        debut: "2021",
        car: "AMR26",
        engine: "Honda",
        color: "#4B9774"
    },
    {  shortName: "Haas",
        fullName: "TGR Haas F1 Team",
        base: "Каннаполис, Северная Каролина, США",
        director: "Айо Комацу",
        founder: "Джин Хаас",
        debut: "2016",
        car: "VF-26",
        engine: "Ferrari",
        color: "#DFE1E2"
    },
    {  shortName: "Audi",
        fullName: "Audi Revolut F1 Team",
        base: "Хинвилл, Швейцария",
        director: "Маттиа Бинотто",
        founder: "Audi Formula Racing GmbH",
        debut: "2026",
        car: "RS-26",
        engine: "Audi",
        color: "#EB4526"
    },
    {  shortName: "Alpine",
        fullName: "BWT Alpine F1 Team",
        base: "Энстоун, Оксфордшир, Великобритания",
        director: "Флавио Бриаторе",
        founder: "Renault Group",
        debut: "2021",
        car: "A526",
        engine: "Mercedes",
        color: "#479FE2"
    },
    {  shortName: "Cadillac",
        fullName: "Cadillac F1 Team",
        base: "Фишерс, Индиана, США",
        director: "Грэм Лоудон",
        founder: "TWG Cadillac",
        debut: "2026",
        car: "MAC-26",
        engine: "Ferrari",
        color: "#AAAADD"
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
    logo.onerror = () => { logo.src = 'Images/Teams/default-m.png'; };
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
            nameSpan.textContent = driver.name;
            
             
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
    
     
    const divider1 = document.createElement('hr');
    divider1.className = 'tm-divider';
    
     
    const infoRow1 = document.createElement('div');
    infoRow1.className = 'tm-info-row';
    infoRow1.innerHTML = `
        <div class="tm-info-cell">
            <span class="tm-label">База</span>
            <span class="tm-value">${team.base}</span>
        </div>
        <div class="tm-info-cell">
            <span class="tm-label">Руководитель</span>
            <span class="tm-value">${team.director}</span>
        </div>
    `;
    
     
    const divider2 = document.createElement('hr');
    divider2.className = 'tm-divider';
    
     
    const infoRow2 = document.createElement('div');
    infoRow2.className = 'tm-info-row tm-car-engine';
    infoRow2.innerHTML = `
        <div class="tm-info-cell">
            <span class="tm-label">Болид</span>
            <span class="tm-value car-name">${team.car}</span>
        </div>
        <div class="tm-info-cell">
            <span class="tm-label">Двигатель</span>
            <span class="tm-value">${team.engine}</span>
        </div>
    `;
    
     
    const divider3 = document.createElement('hr');
    divider3.className = 'tm-divider';
    
     
    const infoRow3 = document.createElement('div');
    infoRow3.className = 'tm-info-row';
    infoRow3.innerHTML = `
        <div class="tm-info-cell">
            <span class="tm-label">Основатель</span>
            <span class="tm-value">${team.founder}</span>
        </div>
        <div class="tm-info-cell">
            <span class="tm-label">Дебют</span>
            <span class="tm-value debut-year">${team.debut}</span>
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
    
    overlay.appendChild(modal);
    
     
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    
     
    function escHandler(e) {
        if (e.key === 'Escape') closeModal();
    }
    document.addEventListener('keydown', escHandler);
    
    document.body.appendChild(overlay);
    
     
    requestAnimationFrame(() => {
        overlay.classList.add('active');
        modal.classList.add('active');
    });
}