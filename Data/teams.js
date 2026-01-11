// Команды 
const currentTeams = [
			{ 	 shortName: "McLaren",
					 id: "modal1",
					 fullName: "McLaren Mastercard F1 Team",
					 logo: "McLaren.png",
					 miniLogo: "McLaren-m.png",
					 base: "Уокинг, Великобритания",
					 director: "Андреа Стелла",
					 foundert: "Брюс Макларен",
					 debut: "1966",
					 car: "MCL40",
                 engine: "Mercedes",
                 drivers: [
                    {number: "81", name: "Оскар Пиастри", country: "au", state: "Австралия"},
                    {number: "1", name: "Ландо Норрис", country: "gb", state: "Великобритания"}
                ],
				color: "#e07109"
            },
			{    shortName: "Mercedes",
                 id: "modal3",
                 fullName: "Mercedes-AMG PETRONAS F1 Team",
                 logo: "Mercedes.avif",
                 miniLogo: "Mercedes-m.png",
                 base: "Брэкли, Великобритания",
                 director: "Тото Вольфф",
			     foundert: "Норберт Хауг",
				 debut: "2010",
                 car: "W17",
                 engine: "Mercedes",
                 drivers: [
                    {number: "63", name: "Джордж Расселл", country: "gb", state: "Великобритания"},
                    {number: "12", name: "Андреа Кими Антонелли", country: "it", state: "Италия"}
                ],
				color: "#7a7272"
            },
			{    shortName: "Red Bull",
                 id: "modal4",
                 fullName: "Oracle Red Bull Racing",
                 logo: "RedBull.png",
                 miniLogo: "RedBull-m.png",
                 base: "Милтон-Кинс, Великобритания",
                 director: "Лоран Мекис",
			     foundert: "Дитрих Матешиц",
				 debut: "2005",
                 car: "RB22",
                 engine: "Red Bull Ford",
                 drivers: [
                    {number: "3", name: "Макс Ферстаппен", country: "nl", state: "Нидерланды"},
                    {number: "6", name: "Иcаак Хаджар", country: "fr", state: "Франция"}
                ],
				color: "#313247"
            },
			{    shortName: "Ferrari",
                 id: "modal2",
                 fullName: "Scuderia Ferrari HP",
                 logo: "Ferrari.svg",
                 miniLogo: "Ferrari-m.png",
                 base: "Маранелло, Италия",
                 director: "Фредерик Вассёр",
				 foundert: "Энцо Феррари",
				 debut: "1950",
                 car: "SF-26",
                 engine: "Ferrari",
                 drivers: [
                    {number: "16", name: "Шарль Леклер", country: "mc", state: "Манако"},
                    {number: "44", name: "Льюис Хэмилтон", country: "gb", state: "Великобритания"}
                ],
				color: "#b80f0f"
            },
			{    shortName: "Williams",
                 id: "modal5",
                 fullName: "Atlassian Williams Racing",
                 logo: "Williams.png",
                 miniLogo: "Williams-m.png",
                 base: "Гроу, Оксфордшир, Великобритания",
                 director: "Джеймс Ваулз",
			     foundert: "Фрэнк Уильямс",
				 debut: "1975",
                 car: "FW48",
                 engine: "Mercedes",
                 drivers: [
                    {number: "55", name: "Карлос Сайнс", country: "es", state: "Испания"},
                    {number: "23", name: "Александр Албон", country: "th", state: "Тайвань"}
                ],
				color: "#7b74fc"
            },
			{    shortName: "Racing Bulls",
                 id: "modal7",
                 fullName: "Visa Cash App Racing Bulls F1 Team",
                 logo: "RacingBulls.png",
                 miniLogo: "RacingBulls-m.png",
                 base: "Фаэнца, Италия",
                 director: "Алан Пермейн",
			     foundert: "Дитрих Матешиц",
				 debut: "2006",
                 car: "---",
                 engine: "Red Bull Ford",
                 drivers: [
                    {number: "30", name: "Лиам Лоусон", country: "nz", state: "Новая Зеландия"},
                    {number: "41", name: "Арвид Линдблад", country: "gb", state: "Великобритания"}
                ],
				color: "#ddebdd"
            },
			{    shortName: "Aston Martin",
                 id: "modal8",
                 fullName: "Aston Martin Aramco F1 Team",
                 logo: "AstonMartin.png",
                 miniLogo: "AstonMartin-m.png",
                 base: "Сильверстоун, Великобритания",
                 director: "Энди Коуэлл",
			     foundert: "Лоуренс Стролл",
				 debut: "2021",
                 car: "AMR26",
                 engine: "Honda",
                 drivers: [
                    {number: "18", name: "Лэнс Стролл", country: "ca", state: "Канада"},
                    {number: "14", name: "Фернандо Алонсо", country: "es", state: "Испания"}
                ],
				color: "#fbff00"
            },
			{    shortName: "Haas",
                 id: "modal9",
                 fullName: "TGR Haas F1 Team",
                 logo: "Haas.png",
                 miniLogo: "Haas-m.png",
                 base: "Каннаполис, Северная Каролина, США",
                 director: "Айо Комацу",
			     foundert: "Джин Хаас",
				 debut: "2016",
                 car: "VF-26",
                 engine: "Ferrari",
                 drivers: [
                    {number: "31", name: "Эстебан Окон", country: "gb", state: "Великобритания"},
                    {number: "87", name: "Оливер Берман", country: "fr", state: "Франция"}
                ],
				color: "#cf1d1d"
            },
			{    shortName: "Audi",
                 id: "modal6",
                 fullName: "Audi Revolut F1 Team",
                 logo: "Audi.png",
                 miniLogo: "Audi-m.png",
                 base: "Хинвилл, Швейцария",
                 director: "Маттиа Бинотто",
			     foundert: "Audi Formula Racing GmbH ",
				 debut: "2026",
                 car: "RS-26",
                 engine: "Audi",
                 drivers: [
                    {number: "27", name: "Нико Хюлькенберг", country: "de", state: "Германия"},
                    {number: "5", name: "Габриэл Бортолето", country: "br", state: "Бразилия"}
                ],
				color: "#21ad17"
            },
			{    shortName: "Alpine",
                 id: "modal10",
                 fullName: "BWT Alpine F1 Team",
                 logo: "Alpine.png",
                 miniLogo: "Alpine-m.png",
                 base: "Энстоун, Оксфордшир, Великобритания",
                 director: "Оливер Оукс",
			     foundert: "Renault Group",
				 debut: "2021",
                 car: "A526",
                 engine: "Mercedes",
                 drivers: [
                    { number: "10", name: "Пьер Гасли", country: "fr", state: "Франция"},
                    { number: "43", name: "Франко Колапинто", country: "ar", state: "Аргентина"}
				],
				color: "#a1459c"
			},
			{    shortName: "Cadillac",
                 id: "modal11",
                 fullName: "Cadillac F1 Team",
                 logo: "Cadillac.png",
                 miniLogo: "Cadillac-m.png",
                 base: "Фишерс, Индиана, США",
                 director: "Грэм Лоудон",
			     foundert: "TWG Cadillac",
				 debut: "2026",
                 car: "---",
                 engine: "Ferrari",
                 drivers: [
                    { number: "11", name: "Серхио Перес", country: "mx", state: "Мексика"},
                    { number: "77", name: "Валттери Боттас", country: "fi", state: "Финляндия"}
				],
				color: "#fbff00"
			},
];

// Рендеринг страницы
function renderTeams() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="cmd-container">
            <div class="cmd-grid" id="currentTeamsGrid"></div>
        </div>
    `;

    renderTeamGrid(currentTeams, 'currentTeamsGrid');
}

// Карточки команд
function renderTeamGrid(teams, gridId) {
    const grid = document.getElementById(gridId);
    
    // Карточка команды
    teams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'cmd-team-card';
        teamCard.style.borderLeftColor = team.color;
        teamCard.setAttribute('data-team', team.id);

        // Структура карточки команды
        teamCard.innerHTML = `
            <div class="cmd-team-logo">
                <img src="Images/Teams/${team.miniLogo}" alt="${team.shortName}">
            </div>
            <h3 class="cmd-team-name">${team.shortName}</h3>
            <div class="cmd-divider"></div>
            <div class="cmd-drivers">
                ${team.drivers.map(driver => `
                    <div class="cmd-driver">
                        <span class="cmd-driver-number" style="background: ${team.color}">${driver.number}</span>
                        <span class="cmd-driver-name">${driver.name}</span>
                        <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" title="${driver.state}" class="cmd-driver-flag">
                    </div>
                `).join('')}
            </div>
        `;

        // Обработчик клика для открытия модального окна
        teamCard.addEventListener('click', () => openTeamModal(team));
        grid.appendChild(teamCard);
    });
}

// Модальное окно
function openTeamModal(team) {
    const modal = document.createElement('div');
    modal.className = 'cmd-modal';
    
    // Cтруктура модального окна
    modal.innerHTML = `
        <div class="cmd-modal-content">
            <div class="cmd-modal-logo">
                <img src="Images/Teams/${team.logo}" alt="${team.fullName}">
            </div>
            <h2 class="cmd-modal-teamname">${team.fullName}</h2>
			
            <div class="cmd-modal-divider"></div>
            
            <div class="cmd-info-row">
                <span class="cmd-info-label">База:</span>
                <span class="cmd-info-value">${team.base}</span>
            </div>
            <div class="cmd-info-row">
                <span class="cmd-info-label">Руководитель:</span>
                <span class="cmd-info-value">${team.director}</span>
            </div>
			
			<div class="cmd-modal-divider"></div>

            <div class="cmd-info-row">
                <span class="cmd-info-label">Болид:</span>
                <span class="cmd-info-value">${team.car}</span>
            </div>
            <div class="cmd-info-row">
                <span class="cmd-info-label">Двигатель:</span>
                <span class="cmd-info-value">${team.engine}</span>
            </div>
			
            <div class="cmd-modal-divider"></div>

			<div class="cmd-info-row">
                <span class="cmd-info-label">Основатель:</span>
                <span class="cmd-info-value">${team.foundert}</span>
            </div>
            <div class="cmd-info-row">
                <span class="cmd-info-label">Дебют:</span>
                <span class="cmd-info-value">${team.debut}</span>
            </div>
			
            <div class="cmd-modal-divider"></div>
			
            <h3 class="cmd-drivers-title">Пилоты</h3>
            <div class="cmd-modal-drivers">
                ${team.drivers.map(driver => `
                    <div class="cmd-modal-driver" data-driver-id="${getDriverIdByName(driver.name)}">
                        <span class="cmd-modal-number" style="background: ${team.color}">${driver.number}</span>
                        <span class="cmd-modal-name">${driver.name}</span>
                        <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" title="${driver.state}" class="cmd-modal-flag">
                    </div>
                `).join('')}
            </div>
        </div>
        <button class="cmd-close-modal">&times;</button>
    `;
    
    // Добавляем модальное окно в DOM
    document.body.appendChild(modal);
    
    // Обработчики закрытия модального окна
    modal.querySelector('.cmd-close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    
    // Добавляем обработчики клика на пилотов
    addDriverClickHandlers(modal);
}

// Функция для получения ID пилота по имени
function getDriverIdByName(driverName) {
    const driver = driversData.find(d => d.name === driverName);
    return driver ? driver.id : '';
}

// Добавление обработчиков клика на пилотов
function addDriverClickHandlers(modal) {
    const driverElements = modal.querySelectorAll('.cmd-modal-driver');
    
    driverElements.forEach(element => {
        const driverId = element.getAttribute('data-driver-id');
        if (driverId) {
            element.style.cursor = 'pointer';
            element.addEventListener('click', (e) => {
                e.stopPropagation(); // Предотвращаем закрытие модального окна
                navigateToDriver(driverId);
                modal.remove(); // Закрываем модальное окно
            });
        }
    });
}

// Навигация к пилоту
function navigateToDriver(driverId) {
    // Переходим на вкладку пилотов
    window.location.hash = 'drivers';
    loadTabContent('drivers');
    
    // После загрузки вкладки находим и открываем карточку пилота
    setTimeout(() => {
        const driver = driversData.find(d => d.id === driverId);
        if (driver) {
            // Применяем фильтр по команде пилота
            applyDriverFilter(driver.team);
            
            // Открываем модальное окно пилота
            openDriverModal(driver);
            
            // Прокручиваем к карточке пилота
            const driverCard = document.querySelector(`.drv-card[data-driver="${driverId}"]`);
            if (driverCard) {
                driverCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                driverCard.classList.add('highlight');
                
                // Убираем подсветку через 2 секунды
                setTimeout(() => {
                    driverCard.classList.remove('highlight');
                }, 2000);
            }
        }
    }, 300); // Задержка для загрузки вкладки
}

// Функция применения фильтра по команде
function applyDriverFilter(teamName) {
    const filterButton = document.querySelector(`.drv-filter-btn[data-team="${teamName}"]`);
    if (filterButton) {
        filterButton.click(); // Симулируем клик по кнопке фильтра
    }
}

// Инициализация при загрузке вкладки
if (window.location.hash === '#teams') {
    renderTeams();
}










