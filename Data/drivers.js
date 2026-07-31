const driversData = [
    {   id: "norris", 
        number: 1,
        name: "Ландо Норрис",
        namem: "Л. Норрис",
        country: "gb",
        team: "McLaren",
        birthPlace: "Бристоль, Великобритания",
        birthDate: "13.11.1999",
		debut: "2019 - McLaren",
        titles: 1,
		hattricks: 3,
        wins: 12,
        podiums: 47,
        poles: 16,
        note: "",
        bio: "Гонщик академии McLaren с детства. Первый подиум завоевал в 2020-м, первую победу — только в 2024-м (Майами). Считается одним из быстрейших пилотов на одном круге, но долго не мог победить из-за невезения и ошибок. В 2024 году стал главным соперником Ферстаппена в борьбе за титул."
    },
    {   id: "verstappen", 
        number: 3,
        name: "Макс Ферстаппен",
        namem: "М. Ферстаппен",
        country: "nl",
        team: "Red Bull",
        birthPlace: "Хасселт, Бельгия",
        birthDate: "30.09.1997",
		debut: "2015 - Toro Rosso",
        titles: 4,
		hattricks: 14,
        wins: 71,
        podiums: 131,
        poles: 48,
        note: "Самый молодой дебютант в истории F1 - 17 лет",
        bio: "Чемпион мира (2021, 2022, 2023, 2024). Агрессивный, феноменально стабильный. В 2021-м в драматичной финальной гонке отобрал титул у Хэмилтона. В 2023-м установил рекорд — 19 побед за сезон. В 2024-м начал доминировать, но к концу года Red Bull сдал позиции."
    },
    {   id: "bortoletto", 
        number: 5,
        name: "Габриэл Бортолето",
        namem: "Г. Бортолето",
        country: "br",
        team: "Audi",
        birthPlace: "Бразилиа, Бразилия",
        birthDate: "14.12.2004",
		debut: "2025 - Sauber",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        note: "Третий Бразилец в истории F1",
        bio: "Чемпион Формулы-2 (2024). Протеже Фернандо Алонсо. Перспективный «контролёр» — пилот, который берет не чистым темпом, а умом и резиной."
    },
    {   id: "hadjar",
        number: 6,
        name: "Иcаак Хаджар",
        namem: "И. Хаджар",
        country: "fr",
        team: "Red Bull",
        birthPlace: "Париж, Франция",
        birthDate: "28.09.2004",
		debut: "2025 - Racing Bulls",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 1,
        poles: 0,
        note: "",
        bio: "Чемпион Формулы-2 (2024). Воспитанник программы Red Bull. Резкий, быстрый, но склонен к авариям. Его сравнивают с молодым Феттелем."
    },
    {   id: "gasly",
        number: 10,
        name: "Пьер Гасли",
        namem: "П. Гасли",
        country: "fr",
        team: "Alpine",
        birthPlace: "Руан, Франция",
        birthDate: "07.02.1996",
		debut: "2017 - Toro Rosso",
        titles: 0,
		hattricks: 0,
        wins: 1,
        podiums: 6,
        poles: 0,
        bio: "Победитель Гран-при Италии (2020, AlphaTauri) — невероятная победа на фоне хаоса в Монце. Был уволен из Red Bull после полусезона из-за конфликта с Ферстаппеном, восстановил репутацию в Alpine. Технарь, отличный защитник позиции."
    },
    {   id: "perez",
        number: 11,
        name: "Серхио Перес",
        namem: "С. Перес",
        country: "mx",
        team: "Cadillac",
        birthPlace: "Гвадалахара, Мексика",
        birthDate: "26.01.1990",
		debut: "2011 - Sauber",
        titles: 0,
		hattricks: 0,
        wins: 6,
        podiums: 39,
        poles: 3,
        note: "",
        bio: "Ветеран. Главный специалист по сохранению шин и «король улиц» (победы в Баку, Сингапуре). Стал напарником Ферстаппена в Red Bull с 2021 года, помог ему выиграть первый титул, но к 2024-му резко сдал, едва набирая очки. В 2026-м перешел в новую команду Cadillac в качестве ведущего пилота."
    },
    {   id: "antonelli", 
        number: 12,
        name: "Андреа Кими Антонелли",
        namem: "А. Антонелли",
        country: "it",
        team: "Mercedes",
        birthPlace: "Болонья, Италия",
        birthDate: "25.08.2006",
		debut: "2025 - Mercedes",
        titles: 0,
		hattricks: 3,
        wins: 6,
        podiums: 12,
        poles: 6,
        note: "Выступает под #12 - номером легендарного Айртона Сенны",
        bio: "Вундеркинд, которого лично выбрал Тото Вольфф на замену Хэмилтону. Пропустил F2, перейдя в F1 сразу из Формулы-2 (чемпион 2024). Огромное давление, сравнивают с ранним Ферстаппеном."
    },
    {   id: "alonso",
        number: 14,
        name: "Фернандо Алонсо",
        namem: "Ф. Алонсо",
        country: "es",
        team: "Aston Martin",
        birthPlace: "Овьедо, Испания",
        birthDate: "29.07.1981",
		debut: "2001 - Minardi",
        titles: 2,
		hattricks: 5,
        wins: 32,
        podiums: 106,
        poles: 22,
        note: "Самый опытный пилот в истории, более 400 Гран-при.",
        bio: "Двукратный чемпион (2005, 2006). Известен борьбой с Феттелем, Хэмилтоном (Инцидент в «Воротах гаража» 2007) и своей токсичностью в менеджменте. До сих пор один из лучших на старте."
    },
    {   id: "leclerc",
        number: 16,
        name: "Шарль Леклер",
        namem: "Ш. Леклер",
        country: "mc",
        team: "Ferrari",
        birthPlace: "Монте-Карло, Монако",
        birthDate: "16.10.1997",
		debut: "2018 - Sauber",
        titles: 0,
		hattricks: 2,
        wins: 9,
        podiums: 54,
        poles: 27,
        note: "",
        bio: "Гонщик Ferrari с 2019 года. «Король поулов» — феномен в квалификации. Много раз ошибался под давлением, но выиграл несколько выдающихся гонок (Монца-2019, Монако-2024). Главная надежда Ferrari на титул."
    },
    {   id: "stroll",
        number: 18,
        name: "Лэнс Стролл",
        namem: "Л. Стролл",
        country: "ca",
        team: "Aston Martin",
        birthPlace: "Монреаль, Канада",
        birthDate: "29.10.1998",
		debut: "2017 - Williams",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 3,
        poles: 1,
        note: "",
        bio: "Сын миллиардера Лоуренса Стролла, владельца Aston Martin. Критикуют за то, что место куплено, но подиумы (Баку-2017, 2020) и поул есть. Нестабилен, часто разбивает машину, но в дожде быстр."
    },
    {   id: "albon",
        number: 23,
        name: "Александр Албон",
        namem: "А. Албон",
        country: "th",
        team: "Williams",
        birthPlace: "Лондон, Великобритания",
        birthDate: "23.03.1996",
		debut: "2019 - Toro Rosso",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 2,
        poles: 0,
        note: "",
        bio: "Был напарником Ферстаппена в Red Bull (2019-2020), но уволен из-за нерезультативности. Вернулся в 2022-м в Williams, где стал лидером команды. Очень чистый, умный пилот."
    },
    {   id: "hulkenberg",
        number: 27,
        name: "Нико Хюлькенберг",
        namem: "Н. Хюлькенберг",
        country: "de",
        team: "Audi",
        birthPlace: "Эммерих-на-Рейне, Германия",
        birthDate: "19.08.1987",
		debut: "2010 - Williams",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 1,
        poles: 1,
        note: "Рекордсмен по количеству гонок без подиума, более 200.",
		bio: "Суперстабилен, король квалификаций. В 2025 году на трассе Сильверстоун, прервал серию неудач - финишировав третьим. Возвращенец в 2023-м после 3 лет простоя, заменил больного Стролла и сразу набрал очки. В 2026-м переходит в Audi."
	},
    {   id: "lawson",
        number: 30,
        name: "Лиам Лоусон",
        namem: "Л. Лоусон",
        country: "nz",
        team: "Racing Bulls",
        birthPlace: "Хастингс, Новая Зеландия",
        birthDate: "11.02.2002",
		debut: "2023 - AlphaTauri",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        note: "",
        bio: "Агрессивный, бескомпромиссный. Считался основным претендентом на место Переса в Red Bull. В 2024-м провел несколько гонок и произвел впечатление (особенно борьба с Ферстаппеном в тренировках)."
    },
    {   id: "ocon",
        number: 31,
        name: "Эстебан Окон",
        namem: "Э. Окон",
        country: "fr",
        team: "Haas",
        birthPlace: "Эвре, Франция",
        birthDate: "17.09.1996",
		debut: "2016 - Manor",
        titles: 0,
		hattricks: 0,
        wins: 1,
        podiums: 4,
        poles: 0,
        note: "Победитель безумного Гран-при Венгрии 2021, Alpine.",
        bio: "Физически очень сильный. Известен жёсткой, иногда грязной защитой (драка с Гасли в Alpine). Не очень любим за характер, но стабильно набирает очки. В 2025-м перешел в Haas."
    },
    {   id: "lindblad",
        number: 41,
        name: "Арвид Линдблад",
        namem: "А. Линдблад",
        country: "gb",
        team: "Racing Bulls",
        birthPlace: "Лондон, Англия",
        birthDate: "08.08.2007",
		debut: "2026 - Racing Bulls",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        note: "",
        bio: "Бронза F2 в 2024-м. Воспитанник Red Bull. Очень молод (родился в 2007-м). Считается «сырым», но супер-быстрым. Прямой конкурент Хаджару."
    },
    {   id: "colapinto",
        number: 43,
        name: "Франко Колапинто",
        namem: "Ф. Колапинто",
        country: "ar",
        team: "Alpine",
        birthPlace: "Буэнос-Айрес, Аргентина",
        birthDate: "27.05.2003",
		debut: "2024 - Williams",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        note: "Первый аргентинец в F1 за 20 лет.",
        bio: "Финишировал 2-м в F2 (2023). В Williams заменил Сарджента. Мощный, рискованный стиль, напоминает раннего Мальдонадо. В 2026-м перешел в Alpine."
    },
    {   id: "hamilton",
        number: 44,
        name: "Льюис Хэмилтон",
        namem: "Л. Хэмилтон",
        country: "gb",
        team: "Ferrari",
        birthPlace: "Стивенидж, Великобритания",
        birthDate: "07.01.1985",
		debut: "2007 - McLaren",
        titles: 7,
		hattricks: 19,
        wins: 106,
        podiums: 207,
        poles: 105,
        note: "Рекордсмен по победам, поулам, подиумам.",
        bio: "7-кратный чемпион (2008, 2014, 2015, 2017, 2018, 2019, 2020). После драки с Ферстаппеном-2021 и провала нового болида Mercedes ушел в Ferrari на 2025 год. Легенда."
    },
    {   id: "sainz",
        number: 55,
        name: "Карлос Сайнс",
        namem: "К. Сайнс",
        country: "es",
        team: "Williams",
        birthPlace: "Мадрид, Испания",
        birthDate: "01.09.1994",
		debut: "2015 - Toro Rosso",
        titles: 0,
		hattricks: 0,
        wins: 4,
        podiums: 29,
        poles: 6,
        note: "",
        bio: "Сын раллийного чемпиона. Победитель Гран-при (Великобритания-2022, Сингапур-2023, Австралия-2024). Супер-тактик, интеллектуал. Выжил из Ferrari, чтобы освободить место Хэмилтону, перешел в Williams как лидер проекта."
    },
    {   id: "russell",
        number: 63,
        name: "Джордж Расселл",
        namem: "Д. Расселл",
        country: "gb",
        team: "Mercedes",
        birthPlace: "Кингс-Линн, Великобритания",
        birthDate: "15.02.1998",
		debut: "2019 - Williams",
        titles: 0,
		hattricks: 2,
        wins: 7,
        podiums: 29,
        poles: 11,
        note: "Лидер гильдии пилотов.",
        bio: "Победитель Гран-при Сан-Паулу (2022) — первая победа Mercedes после долгого перерыва. Очень быстр, но иногда ошибается под давлением. Заменил Боттаса и стал ровней Хэмилтону."
    },
    {   id: "bottas",
        number: 77,
        name: "Валттери Боттас",
        namem: "В. Боттас",
        country: "fi",
        team: "Cadillac",
        birthPlace: "Настола, Финляндия",
        birthDate: "28.08.1989",
		debut: "2013 - Williams",
        titles: 0,
		hattricks: 2,
        wins: 10,
        podiums: 67,
        poles: 20,
        note: "",
        bio: "Бывший напарник Хэмилтона в Mercedes (2017-2021), 10 побед. Машина для квалификаций. В 2025-м покинул Sauber, в 2026-м стал пилотом Cadillac. Хотел взять номер #7, но он был занят, поэтому выбрал #77 (Val77eri Bo77as)."
    },
    {   id: "piastri",
        number: 81,
        name: "Оскар Пиастри",
        namem: "О. Пиастри",
        country: "au",
        team: "McLaren",
        birthPlace: "Мельбурн, Австралия",
        birthDate: "06.04.2001",
		debut: "2023 - McLaren",
        titles: 0,
		hattricks: 3,
        wins: 9,
        podiums: 28,
        poles: 6,
        note: "Выиграл F3 и F2 подряд.",
        bio: "Первую победу одержал в Венгрии-2024, обогнав Норриса по команде. Многие считают его будущим чемпионом."
    },
    {   id: "bearman",
        number: 87,
        name: "Оливер Берман",
        namem: "О. Берман",
        country: "gb",
        team: "Haas",
        birthPlace: "Челмсфорд, Великобритания",
        birthDate: "08.05.2005",
		debut: "2024 - Ferrari",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        note: "",
        bio: "Самый молодой пилот Ferrari в истории (дебют в 18 лет в Джидде, сразу набрал очки). В 2025-м получил постоянное место в Haas. Быстр, умен, жёсток. Воспитанник Ferrari Driver Academy."
    },
	// Резерв
    {   id: "doohan", 
        number: 7,
        name: "Джек Дуэн",
        namem: "Д. Дуэн",
        country: "au",
        team: "Резерв",
        birthPlace: "Брисбен, Австралия",
        birthDate: "20.01.2003",
		debut: "2024 - Alpine",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        note: "",
        bio: "Сын пятикратного чемпиона мира по мотогонкам Мика Дуэна. Чемпион Формулы-2 (2023). В 2024 году подменял Окона и Гасли. Выбрал номер #7 в честь своего кумира Кими Райкконена. Считается перспективным стабильным гонщиком, но пока без очков в F1."
    },
    {   id: "tsunoda",
        number: 22,
        name: "Юки Цунода",
        namem: "Ю. Цунода",
        country: "jp",
        team: "Резерв",
        birthPlace: "Канагава, Япония",
        birthDate: "11.05.2000",
		debut: "2021 - AlphaTauri",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        note: "",
        bio: "За четыре сезона в F1 неоднократно набирал очки, но так и не поднялся на подиум. Отличается эмоциональным стилем пилотирования и частыми переговорами по радио. В 2025 году уступил место в основном составе Хаджару, но остался в системе Red Bull."
    },
    {   id: "zhou",
        number: 24,
        name: "Гуан Ю Чжоу",
        namem: "Г. Чжоу",
        country: "cn",
        team: "Резерв",
        birthPlace: "Шанхай, Китай",
        birthDate: "30.05.1999",
		debut: "2022 - Alfa Romeo",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        note: "Первый и единственный пилот из Китая в истории F1",
        bio: "Стабильный, но не слишком быстрый пилот, набирал очки в отдельных гонках."
    },
	// Safety Car
    {   id: "maylander", 
        number: "SC",
        name: "Бернд Майлендер",
        namem: "Б. Майлендер",
        country: "de",
        team: "Safety Car",
        birthPlace: "Вайблинген, Германия",
        birthDate: "29.05.1971",
		debut: "2000 - Safety Car",
        titles: 0,
		hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        note: "",
        bio: "Бессменным официальным пилотом автомобиля безопасности в чемпионатах F1. В 2000 году в составе заводской команды Porsche, пилотируя Porsche 911 GT3-R, одержал победу в гонке на выносливость «24 часа Нюрбургринга»."
    },
];

function initDriversPage(container) {
    'use strict';
    
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.gap = '0';
    container.style.padding = '0';
    
    const filterPanel = document.createElement('div');
    filterPanel.className = 'drivers-filter-panel';
    
    const cardsArea = document.createElement('div');
    cardsArea.className = 'drivers-cards-area';
    cardsArea.id = 'driversCardsContainer';
    
    container.appendChild(filterPanel);
    container.appendChild(cardsArea);
    
    buildFilterPanel(filterPanel, cardsArea);
}

function buildFilterPanel(panel, cardsArea) {
    // Поле поиска
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'driver-search-input';
    searchInput.placeholder = 'Поиск...';
    
    // Разделитель
    const divider1 = document.createElement('hr');
    divider1.className = 'filter-divider';
    
    // Заголовок "Команды"
    const filterTitle = document.createElement('div');
    filterTitle.className = 'filter-section-title';
    filterTitle.textContent = 'Команды';
    
    // Контейнер чекбоксов команд
    const checkboxesContainer = document.createElement('div');
    checkboxesContainer.className = 'filter-checkboxes';
    
    // Исключаем Safety Car и Резерв из списка команд
    const teams = [...new Set(driversData.map(d => d.team))];
    const regularTeams = teams
        .filter(t => t.toLowerCase() !== 'резерв' && 
                     t.toLowerCase() !== 'reserve' &&
                     t.toLowerCase() !== 'safety car')
        .sort((a, b) => a.localeCompare(b, 'ru'));
    
    // Чекбокс ВСЕ
    const allCheckbox = createCheckbox('all', 'ВСЕ', true, checkboxesContainer);
    
    // Чекбоксы команд (без Резерва и Safety Car)
    const teamCheckboxes = {};
    regularTeams.forEach(team => {
        const cb = createCheckbox(team, team, false, checkboxesContainer);
        teamCheckboxes[team] = cb;
    });
    
    // Разделитель перед чемпионами
    const divider2 = document.createElement('hr');
    divider2.className = 'filter-divider filter-divider-champ';
    
    // Чекбокс "Чемпионы мира"
    const champsContainer = document.createElement('div');
    champsContainer.className = 'filter-checkboxes';
    const champsCheckbox = createCheckbox('champs', 'Чемпионы мира', false, champsContainer);
    
    // Кнопка сброса
    const resetBtn = document.createElement('button');
    resetBtn.className = 'filter-reset-btn';
    resetBtn.textContent = 'Сбросить';
    
    // Собираем панель
    panel.appendChild(searchInput);
    panel.appendChild(divider1);
    panel.appendChild(filterTitle);
    panel.appendChild(checkboxesContainer);
    panel.appendChild(divider2);
    panel.appendChild(champsContainer);
    panel.appendChild(resetBtn);
    
    // Состояние фильтров
    let activeTeamFilters = new Set(regularTeams);
    let champsOnly = false;
    let isAllSelected = true;
    
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        let filtered = driversData;
        
        // Исключаем резервных пилотов и Safety Car
        filtered = filtered.filter(driver => 
            driver.team.toLowerCase() !== 'резерв' && 
            driver.team.toLowerCase() !== 'reserve' &&
            driver.team.toLowerCase() !== 'safety car'
        );
        
        // Фильтр по командам
        filtered = filtered.filter(driver => activeTeamFilters.has(driver.team));
        
        // Фильтр «Чемпионы мира»
        if (champsOnly) {
            filtered = filtered.filter(driver => driver.titles > 0);
        }
        
        // Поиск
        if (searchTerm) {
            filtered = filtered.filter(driver => {
                const countryName = getCountryName(driver.country).toLowerCase();
                const checkStartsWith = (text) => {
                    const words = text.toLowerCase().split(/\s+/);
                    return words.some(word => word.startsWith(searchTerm));
                };
                return driver.number.toString().startsWith(searchTerm) ||
                       checkStartsWith(driver.name) ||
                       checkStartsWith(driver.namem) ||
                       checkStartsWith(countryName) ||
                       checkStartsWith(driver.team);
            });
        }
        
        renderDriverCards(filtered, cardsArea);
    }
    
    // Поиск
    searchInput.addEventListener('input', applyFilters);
    
    // Чекбоксы команд
    checkboxesContainer.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const checkbox = e.target;
            const value = checkbox.dataset.filterValue;
            
            if (value === 'all') {
                if (checkbox.checked) {
                    // Сбрасываем выбор команд
                    Object.values(teamCheckboxes).forEach(cb => cb.checked = false);
                    activeTeamFilters = new Set(regularTeams);
                    isAllSelected = true;
                    
                    // Сбрасываем фильтр "Чемпионы мира"
                    champsCheckbox.checked = false;
                    champsOnly = false;
                } else {
                    const anyTeamChecked = Object.values(teamCheckboxes).some(cb => cb.checked);
                    if (!anyTeamChecked) {
                        checkbox.checked = true;
                    } else {
                        isAllSelected = false;
                    }
                }
            } else {
                if (checkbox.checked) {
                    allCheckbox.checked = false;
                    isAllSelected = false;
                }
                
                const selectedTeams = new Set();
                Object.entries(teamCheckboxes).forEach(([team, cb]) => {
                    if (cb.checked) {
                        selectedTeams.add(team);
                    }
                });
                
                if (selectedTeams.size === 0) {
                    allCheckbox.checked = true;
                    activeTeamFilters = new Set(regularTeams);
                    isAllSelected = true;
                    
                    // Сбрасываем фильтр "Чемпионы мира"
                    champsCheckbox.checked = false;
                    champsOnly = false;
                } else {
                    activeTeamFilters = new Set(selectedTeams);
                }
            }
            
            applyFilters();
        }
    });
    
    // Чекбокс «Чемпионы мира»
    champsCheckbox.addEventListener('change', () => {
        champsOnly = champsCheckbox.checked;
        applyFilters();
    });
    
    // Сброс
    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        allCheckbox.checked = true;
        Object.values(teamCheckboxes).forEach(cb => cb.checked = false);
        champsCheckbox.checked = false;
        activeTeamFilters = new Set(regularTeams);
        champsOnly = false;
        isAllSelected = true;
        applyFilters();
    });
    
    // ПРИМЕНЯЕМ ФИЛЬТРЫ СРАЗУ ПРИ ЗАГРУЗКЕ
    applyFilters();
}

function createCheckbox(value, label, checked, container) {
    const wrapper = document.createElement('label');
    wrapper.className = 'filter-checkbox-label';
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.dataset.filterValue = value;
    input.checked = checked;
    
    const checkmark = document.createElement('span');
    checkmark.className = 'checkmark';
    
    const text = document.createElement('span');
    text.className = 'checkbox-text';
    text.textContent = label;
    
    wrapper.appendChild(input);
    wrapper.appendChild(checkmark);
    wrapper.appendChild(text);
    container.appendChild(wrapper);
    
    return input;
}

function animateCardsAppearance(container) {
    const cards = container.querySelectorAll('.driver-card');
    
    if (cards.length === 0) return;
    
    // Определяем количество колонок в сетке
    const containerWidth = container.offsetWidth || container.parentElement.offsetWidth || 1200;
    const cardMinWidth = 190; // min-width из grid-template-columns
    const gap = 10; // gap из grid-template-columns
    const cols = Math.max(1, Math.floor((containerWidth + gap) / (cardMinWidth + gap)));
    
    // Сбрасываем начальное состояние для всех карточек
    cards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.92) translateY(15px)';
        card.style.transition = 'none';
    });
    
    // Показываем карточки по рядам
    requestAnimationFrame(() => {
        cards.forEach((card, index) => {
            const rowIndex = Math.floor(index / cols);
            const delay = rowIndex * 80; // 80ms между рядами
            
            card.style.transition = `opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`;
            
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';
            });
        });
    });
}

function renderDriverCards(drivers, container) {
    container.innerHTML = '';
    
    if (drivers.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'no-results';
        empty.textContent = 'Пилоты не найдены';
        container.appendChild(empty);
        return;
    }
    
    // Создаём карточки
    drivers.forEach(driver => {
        const card = document.createElement('div');
        card.className = 'driver-card';
        card.style.setProperty('--team-color', getTeamColor(driver.team));
        
        const portraitWrapper = document.createElement('div');
        portraitWrapper.className = 'driver-portrait-wrapper';
        
        const portraitImg = document.createElement('img');
        portraitImg.src = `Images/Drivers/${driver.id}.png`;
        portraitImg.alt = driver.name;
        portraitImg.className = 'driver-portrait-img';
        portraitImg.onerror = () => { portraitImg.src = 'Images/Drivers/default.png'; };
        
        const flagOverlay = document.createElement('div');
        flagOverlay.className = 'driver-flag-overlay';
        const flagImg = document.createElement('img');
        flagImg.src = `Images/Flags/${driver.country}.svg`;
        flagImg.title = getCountryName(driver.country);
        flagImg.alt = driver.country;
        flagImg.onerror = () => { flagImg.style.display = 'none'; };
        flagOverlay.appendChild(flagImg);
        
        const titlesOverlay = document.createElement('div');
        titlesOverlay.className = 'driver-titles-overlay';
        if (driver.titles > 0) {
            const starsCount = driver.titles;
            const maxPerRow = 5;
            
            if (starsCount <= maxPerRow) {
                let starsHtml = '';
                for (let i = 0; i < starsCount; i++) {
                    starsHtml += '☆';
                }
                titlesOverlay.textContent = starsHtml;
            } else {
                const firstRow = Math.ceil(starsCount / 2);
                const secondRow = starsCount - firstRow;
                
                let firstRowHtml = '';
                for (let i = 0; i < firstRow; i++) {
                    firstRowHtml += '☆';
                }
                
                let secondRowHtml = '';
                for (let i = 0; i < secondRow; i++) {
                    secondRowHtml += '☆';
                }
                
                titlesOverlay.innerHTML = `
                    <div class="titles-row">${firstRowHtml}</div>
                    <div class="titles-row">${secondRowHtml}</div>
                `;
                titlesOverlay.classList.add('titles-multi-row');
            }
            titlesOverlay.title = `${driver.titles}× чемпион мира`;
        } else {
            titlesOverlay.style.display = 'none';
        }
        
        const numberOverlay = document.createElement('div');
        numberOverlay.className = 'driver-number-overlay';
        numberOverlay.textContent = driver.number;
        
        portraitWrapper.appendChild(portraitImg);
        portraitWrapper.appendChild(flagOverlay);
        portraitWrapper.appendChild(titlesOverlay);
        portraitWrapper.appendChild(numberOverlay);
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'driver-short-name';
        nameDiv.textContent = driver.namem;
        
        const divider = document.createElement('div');
        divider.className = 'driver-card-divider';
        
        const teamDiv = document.createElement('div');
        teamDiv.className = 'driver-team';

        const teamLogo = document.createElement('img');
        teamLogo.src = getTeamLogo(driver.team);
        teamLogo.alt = driver.team;
        teamLogo.onerror = () => { teamLogo.style.display = 'none'; };

        const teamName = document.createElement('span');
        teamName.textContent = driver.team;

        teamDiv.appendChild(teamLogo);
        teamDiv.appendChild(teamName);

        teamDiv.addEventListener('click', (e) => {
            e.stopPropagation(); 
            const teamData = getTeamData(driver.team);
            if (teamData) {
                openTeamModal(teamData);
            }
        });
        
        card.appendChild(portraitWrapper);
        card.appendChild(nameDiv);
        card.appendChild(divider);
        card.appendChild(teamDiv);
        
        card.addEventListener('click', () => openDriverModal(driver));
        
        container.appendChild(card);
    });
    
    // Запускаем анимацию
    requestAnimationFrame(() => {
        animateCardsAppearance(container);
    });
}

function calculateAge(birthDateStr) {
    const parts = birthDateStr.split('.');
    const birth = new Date(parts[2], parts[1] - 1, parts[0]);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

function openDriverModal(driver) {
    const existingModal = document.querySelector('.driver-modal-overlay');
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
    overlay.className = 'driver-modal-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'driver-modal';
    modal.style.setProperty('--team-color', getTeamColor(driver.team));
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close-btn';
    closeBtn.innerHTML = '&times;';
    
    function closeModal() {
        overlay.remove();
        unlockScroll();
        document.removeEventListener('keydown', escHandler);
    }
    
    closeBtn.addEventListener('click', closeModal);
    
    const topSection = document.createElement('div');
    topSection.className = 'modal-top';
    
    const leftSide = document.createElement('div');
    leftSide.className = 'modal-left';
    
    const modalPortrait = document.createElement('img');
    modalPortrait.src = `Images/Drivers/${driver.id}.png`;
    modalPortrait.alt = driver.name;
    modalPortrait.className = 'modal-portrait';
    modalPortrait.onerror = () => { modalPortrait.src = 'Images/Drivers/default.png'; };
    
    leftSide.appendChild(modalPortrait);
    
    const rightSide = document.createElement('div');
    rightSide.className = 'modal-right';
    
    const block1 = document.createElement('div');
    block1.className = 'modal-block';
    
    const modalNumber = document.createElement('div');
    modalNumber.className = 'modal-number';
    modalNumber.textContent = driver.number;
    
    const nameTeamContainer = document.createElement('div');
    nameTeamContainer.className = 'modal-name-team';
    
    const nameRow = document.createElement('div');
    nameRow.className = 'modal-name-row';
    const flagIcon = document.createElement('img');
    flagIcon.src = `Images/Flags/${driver.country}.svg`;
    flagIcon.title = getCountryName(driver.country);
    flagIcon.alt = driver.country;
    flagIcon.className = 'modal-flag';
    const fullName = document.createElement('span');
    fullName.className = 'modal-fullname';
    fullName.textContent = driver.name;
    nameRow.appendChild(flagIcon);
    nameRow.appendChild(fullName);
    
    const teamRow = document.createElement('div');
    teamRow.className = 'modal-team-row';

    const teamIcon = document.createElement('img');
    teamIcon.src = getTeamLogo(driver.team);
    teamIcon.alt = driver.team;
    teamIcon.className = 'modal-team-logo';

    const teamLabel = document.createElement('span');
    teamLabel.textContent = driver.team;

    teamRow.appendChild(teamIcon);
    teamRow.appendChild(teamLabel);

    teamRow.addEventListener('click', (e) => {
        e.stopPropagation(); 
        const teamData = getTeamData(driver.team);
        if (teamData) {
            openTeamModal(teamData);
        }
    });
    
    nameTeamContainer.appendChild(nameRow);
    nameTeamContainer.appendChild(teamRow);
    
    block1.appendChild(modalNumber);
    block1.appendChild(nameTeamContainer);
    
    const block2 = document.createElement('div');
    block2.className = 'modal-block';

    // Первая строка: Место рождения и Дата рождения
    const row1 = document.createElement('div');
    row1.className = 'modal-details-row';
    row1.innerHTML = `
        <div class="detail-cell">
            <span class="detail-label">Место рождения</span>
            <span class="detail-value">${driver.birthPlace}</span>
        </div>
        <div class="detail-cell">
            <span class="detail-label">Дата рождения</span>
            <span class="detail-value">${driver.birthDate} (${calculateAge(driver.birthDate)})</span>
        </div>
    `;

    // Вторая строка: Дебют
    const row2 = document.createElement('div');
    row2.className = 'modal-details-row';
    row2.style.gridTemplateColumns = '1fr';
    row2.innerHTML = `
        <div class="detail-cell">
            <span class="detail-label">Дебют</span>
            <span class="detail-value">${driver.debut}</span>
        </div>
    `;

    block2.appendChild(row1);
    block2.appendChild(row2);
    
    // Блок статистики
    const block3 = document.createElement('div');
    block3.className = 'modal-block';
    
    // Проверяем, является ли пилот Safety Car
    const isSafetyCar = driver.team.toLowerCase() === 'safety car' || 
                        driver.id === 'maylander' ||
                        driver.number === 'SC';
    
    if (isSafetyCar) {
        // Специальная статистика для Safety Car
        const statsRow = document.createElement('div');
        statsRow.className = 'modal-stats-row';
        statsRow.innerHTML = `
            <div class="stat-cell" title="«24 часа Нюрбургринга»">
                <span class="stat-number">1</span>
                <span class="stat-text">Титул</span>
            </div>
            <div class="stat-cell">
                <span class="stat-number">14</span>
                <span class="stat-text">ГП завершеных SC</span>
            </div>
            <div class="stat-cell">
                <span class="stat-number">500+</span>
                <span class="stat-text">Гран-При</span>
            </div>
        `;
        block3.appendChild(statsRow);
    } else {
        // Обычная статистика для гонщиков
        const statsRow = document.createElement('div');
        statsRow.className = 'modal-stats-row';
        statsRow.innerHTML = `
            <div class="stat-cell">
                <span class="stat-number">${driver.titles}</span>
                <span class="stat-text">Титулы</span>
            </div>
            <div class="stat-cell">
                <span class="stat-number">${driver.wins}</span>
                <span class="stat-text">Победы</span>
            </div>
            <div class="stat-cell">
                <span class="stat-number">${driver.hattricks}</span>
                <span class="stat-text">Хэт-Трики</span>
            </div>
            <div class="stat-cell">
                <span class="stat-number">${driver.podiums}</span>
                <span class="stat-text">Подиумы</span>
            </div>
            <div class="stat-cell">
                <span class="stat-number">${driver.poles}</span>
                <span class="stat-text">Поулы</span>
            </div>
            <div class="stat-cell">
                <span class="stat-number">${driver.fines || 0}/12</span>
                <span class="stat-text">Штрафы</span>
            </div>
        `;
        block3.appendChild(statsRow);
    }
    
    rightSide.appendChild(block1);
    rightSide.appendChild(block2);
    rightSide.appendChild(block3);
    
    topSection.appendChild(leftSide);
    topSection.appendChild(rightSide);

    const bioSection = document.createElement('div');
    bioSection.className = 'modal-bottom';

    const bioTitle = document.createElement('h3');
    bioTitle.className = 'modal-bio-title';
    bioTitle.textContent = 'Биография';
    
    const bioText = document.createElement('p');
    bioText.className = 'modal-bio-text';
    bioText.textContent = driver.bio;
    bioSection.appendChild(bioTitle);
    bioSection.appendChild(bioText);

    // Компактное примечание после биографии
    if (driver.note) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'modal-note-compact';
        noteDiv.innerHTML = `
            <span class="note-compact-text">${driver.note}</span>
        `;
        bioSection.appendChild(noteDiv);
    }
    
    modal.appendChild(closeBtn);
    modal.appendChild(topSection);
    modal.appendChild(bioSection);
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

function getTeamLogo(teamName) {
    const slug = teamName.toLowerCase().replace(/\s+/g, '-');
    return `Images/Teams/${slug}-m.png`;
}

function getCountryName(code) {
    const countries = {
        'gb': 'Великобритания',
        'nl': 'Нидерланды',
        'mc': 'Монако',
        'de': 'Германия',
        'es': 'Испания',
        'fr': 'Франция',
        'fi': 'Финляндия',
        'au': 'Австралия',
        'mx': 'Мексика',
        'ca': 'Канада',
        'jp': 'Япония',
        'cn': 'Китай',
        'th': 'Таиланд',
        'dk': 'Дания',
        'us': 'США',
        'it': 'Италия',
        'br': 'Бразилия',
        'ar': 'Аргентина',
        'bh': 'Бахрейн',
        'sa': 'Саудовская Аравия',
        'at': 'Австрия',
        'be': 'Бельгия',
        'hu': 'Венгрия',
        'az': 'Азербайджан',
        'sg': 'Сингапур',
        'qa': 'Катар',
        'ae': 'ОАЭ',
        'tr': 'Турция',
        'pt': 'Португалия',
        'co': 'Колумбия',
        'my': 'Малайзия'
    };
    return countries[code] || code.toUpperCase();
}