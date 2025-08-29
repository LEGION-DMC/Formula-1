const currentTeams = [
			{ 	 shortName: "McLaren",
					 id: "modal1",
					 fullName: "McLaren F1 Team",
					 logo: "McLaren.png",
					 miniLogo: "McLaren-m.png",
					 base: "Уокинг, Великобритания",
					 director: "Андреа Стелла",
					 debut: "1966",
					 car: "MCL39",
                 engine: "Mercedes",
                 drivers: [
                    {number: "81", name: "Оскар Пиастри", country: "au", state: "Австралия"},
                    {number: "4", name: "Ландо Норис", country: "gb", state: "Великобритания"}
                ],
				color: "#e07109"
            },
			{    shortName: "Ferrari",
                 id: "modal2",
                 fullName: "Scuderia Ferrari HP",
                 logo: "Ferrari.svg",
                 miniLogo: "Ferrari-m.png",
                 base: "Маранелло, Италия",
                 director: "Фредерик Вассёр",
				 debut: "1950",
                 car: "SF-25",
                 engine: "Ferrari",
                 drivers: [
                    {number: "16", name: "Шарль Леклер", country: "mc", state: "Манако"},
                    {number: "44", name: "Льюис Хэмильтон", country: "gb", state: "Великобритания"}
                ],
				color: "#b80f0f"
            },
			{    shortName: "Mercedes",
                 id: "modal3",
                 fullName: "Mercedes-AMG Petronas F1 Team",
                 logo: "Mercedes.avif",
                 miniLogo: "Mercedes-m.png",
                 base: "Брэкли, Великобритания",
                 director: "Тото Вольфф",
				 debut: "2010",
                 car: "W16 E Perfomanc",
                 engine: "Mercedes",
                 drivers: [
                    {number: "63", name: "Джордж Расселл", country: "gb", state: "Великобритания"},
                    {number: "12", name: "Кими Антонелли", country: "it", state: "Италия"}
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
				 debut: "2005",
                 car: "RB21",
                 engine: "Honda RBPT",
                 drivers: [
                    {number: "1", name: "Макс Ферстаппен", country: "nl", state: "Нидерланды"},
                    {number: "22", name: "Юки Цунода", country: "jp", state: "Япония"}
                ],
				color: "#313247"
            },
			{    shortName: "Williams",
                 id: "modal5",
                 fullName: "Atlassian Williams Racing",
                 logo: "Williams.png",
                 miniLogo: "Williams-m.png",
                 base: "Гроу, Оксфордшир, Великобритания",
                 director: "Джеймс Ваулз",
				 debut: "1975",
                 car: "FW47",
                 engine: "Mercedes",
                 drivers: [
                    {number: "55", name: "Карлос Сайнс", country: "es", state: "Испания"},
                    {number: "23", name: "Александр Албон", country: "th", state: "Тайвань"}
                ],
				color: "#7b74fc"
            },
			{    shortName: "Sauber",
                 id: "modal6",
                 fullName: "Stake F1 Team Kick Sauber",
                 logo: "Sauber.png",
                 miniLogo: "Sauber-m.png",
                 base: "Хинвил, Швейцария",
                 director: "Маттиа Бинотто",
				 debut: "1993",
                 car: "C45",
                 engine: "Ferrari",
                 drivers: [
                    {number: "27", name: "Нико Хюлькенберг", country: "de", state: "Германия"},
                    {number: "5", name: "Габриэл Бортолето", country: "br", state: "Бразилия"}
                ],
				color: "#21ad17"
            },
			{    shortName: "Racing Bulls",
                 id: "modal7",
                 fullName: "Visa Cash App Racing Bulls F1 Team",
                 logo: "RacingBulls.png",
                 miniLogo: "RacingBulls-m.png",
                 base: "Фаэнца, Италия",
                 director: "Алан Пермейн",
				 debut: "2006",
                 car: "VCARB02",
                 engine: "Honda RBPT",
                 drivers: [
                    {number: "30", name: "Лиам Лоусон", country: "nz", state: "Новая Зеландия"},
                    {number: "6", name: "Исаак Хаджар", country: "fr", state: "Франция"}
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
				 debut: "2021",
                 car: "AMR25",
                 engine: "Mercedes",
                 drivers: [
                    {number: "18", name: "Лэнс Стролл", country: "ca", state: "Канада"},
                    {number: "14", name: "Фернандо Алонсо", country: "es", state: "Испания"}
                ],
				color: "#fbff00"
            },
			{    shortName: "Haas",
                 id: "modal9",
                 fullName: "MoneyGram Haas F1 Team",
                 logo: "Haas.png",
                 miniLogo: "Haas-m.png",
                 base: "Каннаполис, Северная Каролина, США",
                 director: "Айо Комацу",
				 debut: "2016",
                 car: "VF-25",
                 engine: "Ferrari",
                 drivers: [
                    {number: "31", name: "Эстебан Окон", country: "gb", state: "Великобритания"},
                    {number: "87", name: "Оливер Берман", country: "fr", state: "Франция"}
                ],
				color: "#cf1d1d"
            },
			{    shortName: "Alpine",
                 id: "modal10",
                 fullName: "BWT Alpine F1 Team",
                 logo: "Alpine.png",
                 miniLogo: "Alpine-m.png",
                 base: "Энстоун, Оксфордшир, Великобритания",
                 director: "Оливер Оукс",
				 debut: "2021",
                 car: "A525",
                 engine: "Renault",
                 drivers: [
                    { number: "10", name: "Пьер Гасли", country: "fr", state: "Франция"},
                    { number: "43", name: "Франко Колапинто", country: "ar", state: "Аргентина"}
				],
				color: "#a1459c"
			},
];
const futureTeams = [
			{    shortName: "Audi",
                 id: "modal0",
                 fullName: "Revolut Audi F1 Team",
                 logo: "Audi.png",
                 miniLogo: "Audi-m.png",
                 base: "Нойбург-ан-дер-Донау, Германия",
                 director: "Маттиа Бинотто",
                 debut: "2026",
                 car: "TBD",
                 engine: "Audi",
                 drivers: [
					{number: "27", name: "Нико Хюлькенберг", country: "de", state: "Германия"},
					{number: "5", name: "Габриэл Бортолето", country: "br", state: "Бразилия"}
                 ],
                 color: "#c90808"
			},
			{    shortName: "Cadillac",
                 id: "modal11",
                 fullName: "Cadillac Formula 1 Team",
                 logo: "Cadillac.png",
                 miniLogo: "Cadillac-m.png",
                 base: "Индиана, США",
                 director: "Грэм Лоудон",
                 debut: "2026",
                 car: "TBD",
                 engine: "Ferrari",
                 drivers: [
					{number: "77", name: "Валттери Боттас", country: "fi", state: "Финляндия"},
					{number: "11", name: "Серхио Перес", country: "mx", state: "Мексика"}
				],
				color: "#1a4d8c"
			}
];

function renderTeams() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="cmd-container">
            <div class="cmd-grid" id="currentTeamsGrid"></div>
            
            <div class="cmd-divider-full"></div>
            
            <h2 class="cmd-section-title">Новые команды на сезон 2026</h2>
            <div class="cmd-grid" id="futureTeamsGrid"></div>
        </div>
    `;

    renderTeamGrid(currentTeams, 'currentTeamsGrid');
    renderTeamGrid(futureTeams, 'futureTeamsGrid');
}

function renderTeamGrid(teams, gridId) {
    const grid = document.getElementById(gridId);
    
    teams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'cmd-team-card';
        teamCard.style.borderLeftColor = team.color;
        teamCard.setAttribute('data-team', team.id);

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

        teamCard.addEventListener('click', () => openTeamModal(team));
        grid.appendChild(teamCard);
    });
}

function openTeamModal(team) {
    const modal = document.createElement('div');
    modal.className = 'cmd-modal';
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
            <div class="cmd-info-row">
                <span class="cmd-info-label">Дебют:</span>
                <span class="cmd-info-value">${team.debut}</span>
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
            
            <h3 class="cmd-drivers-title">Пилоты</h3>
            <div class="cmd-modal-drivers">
                ${team.drivers.map(driver => `
                    <div class="cmd-modal-driver">
                        <span class="cmd-modal-number" style="background: ${team.color}">${driver.number}</span>
                        <span class="cmd-modal-name">${driver.name}</span>
                        <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" title="${driver.state}" class="cmd-modal-flag">
                    </div>
                `).join('')}
            </div>
        </div>
        <button class="cmd-close-modal">&times;</button>
    `;
    
    document.body.appendChild(modal);
    
    // Закрытие модального окна
    modal.querySelector('.cmd-close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

if (window.location.hash === '#teams') {
    renderTeams();

}
