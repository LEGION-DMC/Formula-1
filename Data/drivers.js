const driversData = [ 
    {   number: 4, id: "norris",  
        name: "Ландо Норрис",
        namef: "Ландо Норрис",
		
        birthPlace:  "Бристоль, Великобритания", country: "gb",
        birthDate: "13.11.1999",
		
        team: "McLaren",   
		career: [
            { team: "McLaren", year: "2019-н.в." }
        ],

        titles: 1,
        hattricks: 3,
        wins: 11,
        podiums: 44,
        poles: 20,
		
        bio: "Гонщик академии McLaren с детства. Первый подиум завоевал в 2020-м, первую победу — только в 2024-м (Майами). Считается одним из быстрейших пилотов на одном круге, но долго не мог победить из-за невезения и ошибок. В 2024 году стал главным соперником Ферстаппена в борьбе за титул.",
    },
    {   number: 3, id: "verstappen", 
        name: "Макс Ферстаппен",
        namef: "Макс Эмилиан Ферстаппен",
		
        birthPlace:  "Хасселт, Бельгия", country: "nl",
        birthDate: "30.09.1997",
		
        team: "Red Bull",
		career: [
            { team: "Toro Rosso", year: "2015" },
            { team: "Red Bull", year: "2016-н.в." }
        ],
		
        titles: 4,
        hattricks: 15,
        wins: 71,
        podiums: 127,
        poles: 50,
		grandslam: 6,
		
        note: "Самый молодой дебютант в истории F1 - 17 лет",
        bio: "Чемпион мира (2021, 2022, 2023, 2024). Агрессивный, феноменально стабильный. В 2021-м в драматичной финальной гонке отобрал титул у Хэмилтона. В 2023-м установил рекорд — 19 побед за сезон. В 2024-м начал доминировать, но к концу года Red Bull сдал позиции.",
    },
    {   number: 5, id: "bortoleto", 
        name: "Габриэль Бортолето",
        namef: "Габриэль Лоренсо Бортолето Оливейра",
		
        birthPlace:  "Бразилиа, Бразилия", country: "br",
        birthDate: "14.12.2004",
		
        team: "Audi",   
		career: [
            { team: "Stake", year: "2025" },
            { team: "Audi", year: "2026-н.в." }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "Третий Бразилец в истории F1",
        bio: "Чемпион Формулы-2 (2024). Протеже Фернандо Алонсо. Перспективный «контролёр» — пилот, который берет не чистым темпом, а умом и резиной.",
    },
    {   number: 6, id: "hadjar",
        name: "Исак Хаджар",
        namef: "Изак Александре Хаджар",
		
        birthPlace:  "Париж, Франция", country: "fr",
        birthDate: "28.09.2004",
		
        team: "Red Bull",      
		career: [
            { team: "Racing Bulls", year: "2025" },
            { team: "Red Bull", year: "2026-н.в." }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 1,
        poles: 0,
		
        note: "",
        bio: "Вице-чемпион Формулы-2 (2024). Воспитанник программы Red Bull. Резкий, быстрый, но склонен к авариям. Его сравнивают с молодым Феттелем.",
    },
    {   number: 7, id: "doohan",	         // Резерв
        name: "Джек Дуэн",
        namef: "Джек Майкл Дуэн",
		
        birthPlace:  "Брисбен, Австралия", country: "au",
        birthDate: "20.01.2003",
		
        team: "Резерв",
		reserve: ["Haas"], 
		career: [
            { team: "Alpine", year: "2024-2025", temporarily: true },
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "",
        bio: "Сын пятикратного чемпиона мира по мотогонкам Мика Дуэна. Чемпион Формулы-2 (2023). В 2024 году подменял Окона и Гасли. Выбрал номер #7 в честь своего кумира Кими Райкконена. Считается перспективным стабильным гонщиком, но пока без очков в F1.",
    },
    {   number: 10, id: "gasly",
        name: "Пьер Гасли",
        namef: "Пьер Жан-Жак Гасли",
		
        birthPlace:  "Руан, Франция", country: "fr",
        birthDate: "07.02.1996",
		
        team: "Alpine",     
		career: [
            { team: "Toro Rosso", year: "2017-2018" },
            { team: "Red Bull", year: "2019"},
            { team: "Toro Rosso", year: "2019", temporarily: true },
            { team: "AlphaTauri", year: "2020-2022" },
            { team: "Alpine", year: "2023-н.в." }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 1,
        podiums: 5,
        poles: 1,
		
        note: "",
        bio: "Победитель Гран-при Италии (2020, AlphaTauri) — невероятная победа на фоне хаоса в Монце. Был уволен из Red Bull после полусезона из-за конфликта с Ферстаппеном, восстановил репутацию в Alpine. Технарь, отличный защитник позиции.",
    },
    {   number: 11, id: "perez",
        name: "Серхио Перес",
        namef: "Серхио Мишель Перес Мендоса",
		
        birthPlace:  "Гвадалахара, Мексика", country: "mx",
        birthDate: "26.01.1990",
		
        team: "Cadillac",
		career: [
            { team: "Sauber", year: "2011-2012" },
            { team: "McLaren", year: "2013" },
            { team: "Force India", year: "2014-2018" },
            { team: "Racing Point", year: "2019-2020" },
            { team: "Red Bull", year: "2021-2024" },
            { team: "Cadillac", year: "2026-н.в." }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 6,
        podiums: 39,
        poles: 4,
		
        note: "",
        bio: "Ветеран. Главный специалист по сохранению шин и «король улиц» (победы в Баку, Сингапуре). Стал напарником Ферстаппена в Red Bull с 2021 года, помог ему выиграть первый титул, но к 2024-му резко сдал, едва набирая очки. В 2026-м перешел в новую команду Cadillac в качестве ведущего пилота.",
    },
    {   number: 12, id: "antonelli", 
        name: "Кими Антонелли",
        namef: "Андреа Кими Антонелли",
		
        birthPlace: "Болонья, Италия", country: "it",
        birthDate: "25.08.2006",
		
        team: "Mercedes",
		career: [
            { team: "Mercedes", year: "2025-н.в." }
        ],
		
		WC: true,
	 
        titles: 1,
        hattricks: 3,
        wins: 0,
        podiums: 2,
        poles: 0,
		grandslam: 1,
		
        note: "Самый молодой Чемпион мира в истории Formula 1",
        bio: "Вундеркинд, которого лично выбрал Тото Вольфф на замену Хэмилтону. Пропустил F3, перейдя в F1 сразу из Формулы-2 (чемпион 2024). Огромное давление, сравнивают с ранним Ферстаппеном.",
    },
    {   number: 14, id: "alonso",
        name: "Фернандо Алонсо",
        namef: "Фернандо Алонсо Диас",
		
        birthPlace:  "Овьедо, Испания", country: "es",
        birthDate: "29.07.1981",
		
        team: "Aston Martin",  
		career: [
            { team: "Minardi", year: "2001" },
            { team: "Renault", year: "2003-2006" },
            { team: "McLaren", year: "2007" },
            { team: "Renault", year: "2008-2009" },
            { team: "Ferrari", year: "2010-2014" },
            { team: "McLaren", year: "2015-2018" },
            { team: "Alpine", year: "2021-2022" },
            { team: "Aston Martin", year: "2023-н.в." }
        ],
		
        titles: 2,
        hattricks: 5,
        wins: 32,
        podiums: 106,
        poles: 22,
		grandslam: 1,
		
        note: "Самый опытный пилот в истории, более 400 Гран-при.",
        bio: "Двукратный чемпион (2005, 2006). Известен борьбой с Феттелем, Хэмилтоном (Инцидент в «Воротах гаража» 2007) и своей токсичностью в менеджменте. До сих пор один из лучших на старте.",
    },
    {   number: 16, id: "leclerc",
        name: "Шарль Леклер",
        namef: "Шарль Марк Эрве Персеваль Леклер",
		
        birthPlace:  "Монте-Карло, Монако", country: "mc",
        birthDate: "16.10.1997",
		
        team: "Ferrari",
		career: [
            { team: "Sauber", year: "2018" },
            { team: "Ferrari", year: "2019-н.в." }
        ],
		
        titles: 0,
        hattricks: 2,
        wins: 8,
        podiums: 50,
        poles: 27,
		grandslam: 1,
		
        note: "",
        bio: "Гонщик Ferrari с 2019 года. «Король поулов» — феномен в квалификации. Много раз ошибался под давлением, но выиграл несколько выдающихся гонок (Монца-2019, Монако-2024). Главная надежда Ferrari на титул.",
    },
    {   number: 18, id: "stroll",
        name: "Лэнс Стролл",
        namef: "Лэнс Якоб Струлович",
		
        birthPlace:  "Монреаль, Канада", country: "ca",
        birthDate: "29.10.1998",
		
        team: "Aston Martin",
		career: [
            { team: "Williams", year: "2017-2018" },
            { team: "Racing Point", year: "2019-2020" },
            { team: "Aston Martin", year: "2021-н.в." }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 3,
        poles: 1,
		
        note: "",
        bio: "Сын миллиардера Лоуренса Стролла, владельца Aston Martin. Критикуют за то, что место куплено, но подиумы (Баку-2017, 2020) и поул есть. Нестабилен, часто разбивает машину, но в дожде быстр.",
    },
    {   number: 22, id: "tsunoda",	     // Резерв
        name: "Юки Цунода",
        namef: "Юки Цунода",
		
        birthPlace:  "Канагава, Япония", country: "jp",
        birthDate: "11.05.2000",
		
        team: "Резерв",
		reserve: ["Racing Bulls", "Red Bull"],
		career: [
            { team: "AlphaTauri", year: "2021-2023" },
            { team: "Racing Bulls", year: "2024" },
            { team: "Racing Bulls", year: "2025", temporarily: true },
            { team: "Red Bull", year: "2025" },
            { team: "Racing Bulls", year: "2025-2026", temporarily: true },
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "",
        bio: "За четыре сезона в F1 неоднократно набирал очки, но так и не поднялся на подиум. Отличается эмоциональным стилем пилотирования и частыми переговорами по радио. В 2025 году уступил место в основном составе Хаджару, но остался в системе Red Bull.",
    },
    {   number: 23, id: "albon",
        name: "Алекс Албон",
        namef: "Александр Филипп Албон Ансусинья",
		
        birthPlace:  "Лондон, Великобритания", country: "th",
        birthDate: "23.03.1996",
		
        team: "Williams",
		career: [
            { team: "Toro Rosso", year: "2019" },
            { team: "Red Bull", year: "2019-2020" },
            { team: "Williams", year: "2022-н.в." }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 2,
        poles: 0,
		
        note: "",
        bio: "Был напарником Ферстаппена в Red Bull (2019-2020), но уволен из-за нерезультативности. Вернулся в 2022-м в Williams, где стал лидером команды. Очень чистый, умный пилот.",
    },
    {   number: 24, id: "zhou",	             // Резерв
        name: "Гуаньюй Чжоу",
        namef: "Гуаньюй Чжоу",
		
        birthPlace:  "Шанхай, Китай", country: "cn",
        birthDate: "30.05.1999",
		
        team: "Резерв",
		reserve: ["Cadillac"],
		career: [
            { team: "Alfa Romeo", year: "2022-2023" },
            { team: "Stake", year: "2024" }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "Первый и единственный пилот из Китая в истории F1",
        bio: "Стабильный, но не слишком быстрый пилот, набирал очки в отдельных гонках.",
    },
    {   number: 27, id: "hulkenberg",
        name: "Нико Хюлькенберг",
        namef: "Николас Хюлькенберг",
		
        birthPlace:  "Эммерих-на-Рейне, Германия", country: "de",
        birthDate: "19.08.1987",
		
        team: "Audi", 
		career: [
            { team: "Williams", year: "2010" },
            { team: "Force India", year: "2011-2012" },
            { team: "Sauber", year: "2013" },
            { team: "Force India", year: "2014-2016" },
            { team: "Renault", year: "2017-2019" },
            { team: "Racing Point", year: "2020", temporarily: true },
            { team: "Aston Martin", year: "2022", temporarily: true },
            { team: "Haas", year: "2023-2024" },
            { team: "Stake", year: "2025" },
            { team: "Audi", year: "2026-н.в." }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 1,
        poles: 1,
		
        note: "Рекордсмен по количеству гонок без подиума, более 200.",
        bio: "Суперстабилен, король квалификаций. В 2025 году на трассе Сильверстоун, прервал серию неудач - финишировав третьим. Возвращенец в 2023-м после 3 лет простоя, заменил больного Стролла и сразу набрал очки. В 2026-м переходит в Audi.",
    },
    {   number: 30, id: "lawson",
        name: "Лиам Лоусон",
        namef: "Лиам Джаред Лоусон",
		
        birthPlace:  "Хастингс, Новая Зеландия", country: "nz",
        birthDate: "11.02.2002",
		
        team: "Racing Bulls",    
		career: [
            { team: "AlphaTauri", year: "2023", temporarily: true },
            { team: "Racing Bulls", year: "2024", temporarily: true },
            { team: "Red Bull", year: "2025", temporarily: true },
            { team: "Racing Bulls", year: "2025" },
            { team: "Red Bull", year: "2026", temporarily: true },
            { team: "Racing Bulls", year: "2026" },
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "",
        bio: "Агрессивный, бескомпромиссный. Считался основным претендентом на место Переса в Red Bull. В 2024-м провел несколько гонок и произвел впечатление (особенно борьба с Ферстаппеном в тренировках).",
    },
    {   number: 31, id: "ocon",	             // Свободен
        name: "Эстебан Окон",
        namef: "Эстебан Хосе Жан-Пьер Окон-Кельфан",
		
        birthPlace:  "Эвре, Франция", country: "fr",
        birthDate: "17.09.1996",
		
        team: "Резерв",
		reserve: ["Haas"], 
		career: [
            { team: "Manor", year: "2016", temporarily: true },
            { team: "Force India", year: "2017-2018" },
            { team: "Racing Point", year: "2018" },
            { team: "Renault", year: "2020" },
            { team: "Alpine", year: "2021-2024" },
            { team: "Haas", year: "2025-2026" }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 1,
        podiums: 4,
        poles: 0,
		
        note: "Победитель безумного Гран-при Венгрии 2021, Alpine.",
        bio: "Физически очень сильный. Известен жёсткой, иногда грязной защитой (драка с Гасли в Alpine). Не очень любим за характер, но стабильно набирает очки. В 2025-м перешел в Haas.",
    },
    {   number: 41, id: "lindblad",
        name: "Арвид Линдблад",
        namef: "Арвид Ананд Олоф Линдблад",
		
        birthPlace:  "Лондон, Англия", country: "gb",
        birthDate: "08.08.2007",
		
        team: "Racing Bulls",   
		career: [
            { team: "Racing Bulls", year: "2026-н.в." }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "",
        bio: "Чемпион FRO 2025. Воспитанник Red Bull. Очень молод (родился в 2007-м). Считается «сырым», но супер-быстрым. Прямой конкурент Хаджару.",
    },
    {   number: 43, id: "colapinto",
        name: "Франко Колапинто",
        namef: "Франко Алехандро Колапинто",
		
        birthPlace:  "Буэнос-Айрес, Аргентина", country: "ar",
        birthDate: "27.05.2003",
		
        team: "Alpine",
		career: [
            { team: "Williams", year: "2024-2025", temporarily: true },
            { team: "Alpine", year: "2025-2026-н.в." },
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "Первый аргентинец в F1 за 20 лет.",
        bio: "Финишировал 2-м в F2 (2023). В Williams заменил Сарджента. Мощный, рискованный стиль, напоминает раннего Мальдонадо. В 2026-м перешел в Alpine.",
    },
    {   number: 44, id: "hamilton",
        name: "Льюис Хэмилтон",
        namef: "Сэр Льюис Карл Дэвидсон Хэмилтон",
		
        birthPlace:  "Стивенидж, Великобритания", country: "gb",
        birthDate: "07.01.1985",
		
        team: "Ferrari",
		career: [
            { team: "McLaren", year: "2007-2012" },
            { team: "Mercedes", year: "2013-2024" },
            { team: "Ferrari", year: "2025-н.в." }
        ],
		
        titles: 7,
        hattricks: 19,
        wins: 105,
        podiums: 202,
        poles: 106,
		grandslam: 6,
		
        note: "Рекордсмен по победам, поулам, подиумам.",
        bio: "7-кратный чемпион (2008, 2014, 2015, 2017, 2018, 2019, 2020). После драки с Ферстаппеном-2021 и провала нового болида Mercedes ушел в Ferrari на 2025 год. Легенда.",
    },
    {   number: 50, id: "hirakawa",	    // Резерв
        name: "Рё Хиракава",
        namef: "Рё Хиракава",
		
        birthPlace:  "Куре, Япония", country: "jp",
        birthDate: "07.09.1994",
		
        team: "Резерв",
	    reserve: ["Haas"],   
		career: [
            { team: "Haas", year: "2026", temporarily: true },
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "",
        bio: "Двукратный чемпион мира по автогонкам на выносливость (FIA WEC), победитель легендарного марафона «24 часа Ле-Мана» (2022).",
    },
    {   number: 51, id: "camara", 
        name: "Рафаэль Камара",
        namef: "Рафаэль Чавес Камара",
		
        birthPlace:  "Ресифи, Бразилия", country: "br",
        birthDate: "05.05.2005",
		
        team: "Haas",
		career: [
            { team: "Haas", year: "2026-н.в." },
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "",
        bio: "Камара считается одним из самых многообещающих молодых талантов своего поколения, демонстрируя стабильный карьерный рост без форсирования этапов",
    },
    {   number: 55, id: "sainz",
        name: "Карлос Сайнс",
        namef: "Карлос Сайнс-Васкес де Кастро",
		
        birthPlace:  "Мадрид, Испания", country: "es",
        birthDate: "01.09.1994",
		
        team: "Williams",
		career: [
            { team: "Toro Rosso", year: "2015-2017" },
            { team: "Renault", year: "2017", temporarily: true },
            { team: "Renault", year: "2018" },
            { team: "McLaren", year: "2019-2020" },
            { team: "Ferrari", year: "2021-2024" },
            { team: "Williams", year: "2025-н.в." }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 4,
        podiums: 29,
        poles: 6,
		
        note: "",
        bio: "Сын раллийного чемпиона. Победитель Гран-при (Великобритания-2022, Сингапур-2023, Австралия-2024). Супер-тактик, интеллектуал. Выжил из Ferrari, чтобы освободить место Хэмилтону, перешел в Williams как лидер проекта.",
    },
    {   number: 63, id: "russell",
        name: "Джордж Расселл",
        namef: "Джордж Уильям Расселл",
		
        birthPlace:  "Кингс-Линн, Великобритания", country: "gb",
        birthDate: "15.02.1998",
		
        team: "Mercedes",
		career: [
            { team: "Williams", year: "2019-2020" },
            { team: "Mercedes", year: "2020", temporarily: true },
            { team: "Williams", year: "2021" },
            { team: "Mercedes", year: "2022-н.в." }
        ],
		
        titles: 0,
        hattricks: 2,
        wins: 5,
        podiums: 24,
        poles: 12,
		grandslam: 1,
		
        note: "Лидер гильдии пилотов.",
        bio: "Победитель Гран-при Сан-Паулу (2022) — первая победа Mercedes после долгого перерыва. Очень быстр, но иногда ошибается под давлением. Заменил Боттаса и стал ровней Хэмилтону.",
    },
    {   number: 77, id: "bottas",
        name: "Валттери Боттас",
        namef: "Валттери Виктор Боттас",
		
        birthPlace:  "Настола, Финляндия", country: "fi",
        birthDate: "28.08.1989",
		
        team: "Cadillac",    
		career: [
            { team: "Williams", year: "2013-2016" },
            { team: "Mercedes", year: "2017-2021" },
            { team: "Alfa Romeo", year: "2022-2023" },
            { team: "Stake", year: "2024" },
            { team: "Cadillac", year: "2026-н.в." }
        ],
		
        titles: 0,
        hattricks: 2,
        wins: 10,
        podiums: 67,
        poles: 20,
		
        note: "",
        bio: "Бывший напарник Хэмилтона в Mercedes (2017-2021), 10 побед. Машина для квалификаций. В 2025-м покинул Sauber, в 2026-м стал пилотом Cadillac. Хотел взять номер #7, но он был занят, поэтому выбрал #77 (Val77eri Bo77as).",
    },
    {   number: 81, id: "piastri",
        name: "Оскар Пиастри",
        namef: "Оскар Джек Пиастри",
		
        birthPlace:  "Мельбурн, Австралия", country: "au",
        birthDate: "06.04.2001",
		
        team: "McLaren",    
		career: [
            { team: "McLaren", year: "2023-н.в." }
        ],
		
        titles: 0,
        hattricks: 3,
        wins: 9,
        podiums: 26,
        poles: 6,
		grandslam: 1,
		
        note: "Выиграл F3 и F2 подряд.",
        bio: "Первую победу одержал в Венгрии-2024, обогнав Норриса по команде. Многие считают его будущим чемпионом.",
    },
    {   number: 87, id: "bearman",
        name: "Оливер Берман",
        namef: "Оливер Джеймс Берман",
		
        birthPlace:  "Челмсфорд, Великобритания", country: "gb",
        birthDate: "08.05.2005",
		
        team: "Haas",  
		career: [
            { team: "Ferrari", year: "2024", temporarily: true },
            { team: "Haas", year: "2024", temporarily: true },
            { team: "Haas", year: "2025-н.в." }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "",
        bio: "Самый молодой пилот Ferrari в истории (дебют в 18 лет в Джидде, сразу набрал очки). В 2025-м получил постоянное место в Haas. Быстр, умен, жёсток. Воспитанник Ferrari Driver Academy.",
    },
	/*  ~ Пилоты 2027
    {   number: 99, id: "giovinazzi",    // Резерв
        name: "Антонио Джовинацци",
        namef: "Антонио Мария Джовинацци",
		
        birthPlace:  "Мартина-Франка, Италия", country: "it",
        birthDate: "14.12.1993",
		
        team: "Резерв",
		reserve: ["Ferrari"],   
		career: [
            { team: "Sauber", year: "2017", temporarily: true },
            { team: "Alfa Romeo", year: "2019-2021" },
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "",
        bio: "Гонщик, чья карьера в F1 была недолгой, но он добился большого успеха в гонках WEC, став чемпионом мира в составе Ferrari.",
    },
    {   number: "//", id: "herta",
        name: "Колтон Херта",
        namef: "Колтон Томас Херта",
		
        birthPlace:  "Валенсия, США", country: "us",
        birthDate: "30.03.2000",
		
        team: "Резерв",
		reserve: ["Cadillac"], 
		career: [
            { team: "Cadillac", year: "2027-н.в." },
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "",
        bio: "",
    },
    {   number: 9, id: "tsolov",
        name: "Никола Цолов",
        namef: "Никола Димитров Цолов",
		
        birthPlace:  "София, Болгария", country: "bg",
        birthDate: "21.12.2006",
		
        team: "Резерв",
		reserve: ["Racing Bulls"], 
		career: [
            { team: "Racing Bulls", year: "2027-н.в." },
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "",
        bio: "",
    },
    {   number: 26, id: "kvyat",
        name: "Даниил Квят",
        namef: "Даниил Вячеславович Квят",
		
        birthPlace:  "Уфа, Россия", country: "ru",
        birthDate: "26.04.1994",
		
        team: "Резерв",
		reserve: ["Racing Bulls"],
		career: [
            { team: "Toro Rosso", year: "2014" },
            { team: "Red Bull", year: "2015" },
            { team: "Red Bull", year: "2016", temporarily: true },
            { team: "Toro Rosso", year: "2016" },
            { team: "Toro Rosso", year: "2017" },
            { team: "Toro Rosso", year: "2019" },
            { team: "AlphaTauri", year: "2020" },
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 3,
        poles: 0,
		
        note: "",
        bio: "",
    },
	*/
];

const driversIndex = new Map(driversData.map(d => [d.id, d]));
const DRIVER_PATTERN_SVG = `<svg viewBox="0 0 928 800" preserveAspectRatio="xMidYMid slice" fill="none"><g><path d="M525.317 408.664H580.116C595.812 408.664 609.647 402.398 617.198 391.253L730.294 226.315H674.743C659.047 226.315 645.977 232.581 638.413 243.726L525.317 408.664Z"></path><path d="M209.91 406.694H264.709C280.405 406.694 293.99 400.427 301.105 389.282L407.732 224.344H352.181C336.485 224.344 323.653 230.611 316.537 241.756L209.91 406.694Z"></path><path d="M406.94 225.349H461.739C477.435 225.349 491.02 219.083 498.135 207.938L604.762 43H549.211C533.515 43 520.683 49.2665 513.567 60.4113L406.94 225.349Z"></path><path d="M730.665 226.314H785.463C801.16 226.314 814.744 220.047 821.86 208.903L928.5 43.9646H872.949C857.252 43.9646 844.421 50.2311 837.305 61.3759L730.678 226.314H730.665Z"></path><path d="M566.424 225.349H621.223C636.92 225.349 650.504 219.083 657.619 207.938L764.247 43H708.695C692.999 43 680.167 49.2665 673.052 60.4113L566.424 225.349Z"></path><path d="M369.341 407.118H424.14C439.836 407.118 453.42 400.851 460.536 389.706L567.163 224.768H511.612C495.915 224.768 483.084 231.035 475.968 242.18L369.341 407.118Z"></path><path d="M701.396 408.254H756.195C771.892 408.254 785.476 401.987 792.591 390.842L899.219 225.904H843.667C827.971 225.904 815.139 232.171 808.024 243.316L701.396 408.254Z"></path><path d="M175.004 588.528H229.803C245.499 588.528 259.084 582.261 266.199 571.116L372.826 406.178H317.275C301.579 406.178 288.747 412.445 281.632 423.59L175.004 588.528Z"></path><path d="M13.5 588.528H68.2988C83.9952 588.528 97.5794 582.261 104.695 571.116L211.322 406.178H155.771C140.075 406.178 127.243 412.445 120.127 423.59L13.5 588.528Z"></path><path d="M327.493 591H382.292C397.988 591 411.573 584.733 418.688 573.589L525.316 408.651H469.764C454.068 408.651 441.236 414.917 434.121 426.062L327.493 591Z"></path><path d="M668.222 588.528H723.021C738.717 588.528 752.301 582.261 759.417 571.116L866.044 406.178H810.493C794.796 406.178 781.965 412.445 774.849 423.59L668.222 588.528Z"></path><path d="M506.715 588.528H561.514C577.21 588.528 590.794 582.261 597.91 571.116L704.537 406.178H648.986C633.29 406.178 620.458 412.445 613.342 423.59L506.715 588.528Z"></path></g></svg>`;

const COMPARE_METRICS = [
    { key: 'titles',     label: 'Титулы',          decl: ['Титул', 'Титула', 'Титулов'] },
    { key: 'wins',       label: 'Победы',          decl: ['Победа', 'Победы', 'Побед'] },
    { key: 'podiums',    label: 'Подиумы',         decl: ['Подиум', 'Подиума', 'Подиумов'] },
    { key: 'poles',      label: 'Поулы',           decl: ['Поул', 'Поула', 'Поулов'] },
    { key: 'hattricks',  label: 'Хэт-трики',       decl: ['Хэт-Трик', 'Хэт-Трика', 'Хэт-Триков'] },
    { key: 'grandslam',  label: 'Большие шлемы',   decl: ['Большой шлем', 'Больших шлема', 'Больших шлемов'] },
];

const countryNames = {
    gb: 'Великобритания', nl: 'Нидерланды', mc: 'Монако', de: 'Германия',
    es: 'Испания', fr: 'Франция', fi: 'Финляндия', au: 'Австралия',
    mx: 'Мексика', ca: 'Канада', jp: 'Япония', cn: 'Китай',
    th: 'Таиланд', dk: 'Дания', us: 'США', it: 'Италия',
    br: 'Бразилия', ar: 'Аргентина', bh: 'Бахрейн', ru: 'Россия',
    sa: 'Саудовская Аравия', at: 'Австрия', be: 'Бельгия', hu: 'Венгрия',
    az: 'Азербайджан', sg: 'Сингапур', qa: 'Катар', ae: 'ОАЭ',
    tr: 'Турция', pt: 'Португалия', co: 'Колумбия', my: 'Малайзия',
    nz: 'Новая Зеландия', pl: 'Польша', ch: 'Швейцария'
};

const countrySynonyms = {
    mc: ['Монегаск', 'Европеец'],
    de: ['Немец', 'Европеец'],
    es: ['Испанец', 'Европеец'],
    fr: ['Француз', 'Европеец'],
    it: ['Итальянец', 'Европеец'],
    at: ['Австриец', 'Европеец'],
    be: ['Бельгиец', 'Европеец'],
    hu: ['Венгр', 'Европеец'],
    pt: ['Португалец', 'Европеец'],
    pl: ['Поляк', 'Европеец'],
    ch: ['Швейцарец', 'Европеец'],
    nl: ['Голландец', 'Нидерландец', 'Европеец'],
    gb: ['Британец', 'Англичанин', 'Шотландец', 'Европеец'],
    fi: ['Финн', 'Скандинав', 'Европеец'],
    dk: ['Датчанин', 'Скандинав', 'Европеец'],
    ru: ['Русский'],
    az: ['Азербайджанец', 'Европеец', 'Азиат'],
    jp: ['Японец', 'Азиат'],
    cn: ['Китаец', 'Азиат'],
    th: ['Таец', 'Азиат'],
    sg: ['Сингапурец', 'Азиат'],
    my: ['Малайзиец', 'Азиат'],
    tr: ['Турок', 'Азиат', 'Европеец'],
    bh: ['Бахрейнец', 'Азиат', 'Араб'],
    sa: ['Саудовец', 'Саудиец', 'Азиат', 'Араб'],
    qa: ['Катарец', 'Азиат', 'Араб'],
    ae: ['Эмиратец', 'Азиат', 'Араб'],
    us: ['Американец'],
    ca: ['Канадец'],
    mx: ['Мексиканец', 'Латиноамериканец'],
    br: ['Бразилец', 'Латиноамериканец'],
    co: ['Колумбиец', 'Латиноамериканец'],
    au: ['Австралиец', 'Океаниец'],
    nz: ['Новозеландец', 'Океаниец']
};

const getCountryName = code => countryNames[code] || code.toUpperCase();
const findDriverById = id => driversIndex.get(id) || null;
const getCurrentWorldChampion = () =>
    driversData.find(d => d.WC === true) || driversData.find(d => d.number === 1) || null;

const getDebutFromCareer = driver => {
    if (!driver?.career?.length) return driver?.debut || '';

    let bestStart = Infinity;
    let bestTeam = null;

    driver.career.forEach(item => {
        const yearStr = String(item.year || '').trim();
        if (!yearStr) return;

        // берём первое 4-значное число из строки вида "2017", "2017-2018", "2017-н.в."
        const match = yearStr.match(/\d{4}/);
        if (!match) return;

        const start = Number(match[0]);
        if (start < bestStart) {
            bestStart = start;
            bestTeam = item.team;
        }
    });

    if (!bestTeam || !isFinite(bestStart)) return driver?.debut || '';
    return `${bestStart} - ${bestTeam}`;
};

const applyDebutFromCareer = () => {
    driversData.forEach(driver => {
        driver.debut = getDebutFromCareer(driver);
    });
};

const buildShortName = fullName => {
    if (!fullName) return '';
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 1) return parts[0];

    const first = parts[0];
    const rest = parts.slice(1).join(' ');
    return `${first.charAt(0)}. ${rest}`;
};

const applyShortNames = () => {
    driversData.forEach(driver => {
        driver.namem = buildShortName(driver.name);
    });
};

const declension = (num, titles) => {
    const n = Math.abs(num) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return titles[2];
    if (n1 > 1 && n1 < 5) return titles[1];
    if (n1 === 1) return titles[0];
    return titles[2];
};

const calculateAge = str => {
    const [d, m, y] = str.split('.').map(Number);
    const birth = new Date(y, m - 1, d);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const mo = now.getMonth() - birth.getMonth();
    if (mo < 0 || (mo === 0 && now.getDate() < birth.getDate())) age--;
    return age;
};

const calculateSeasonStatsFromResults = () => {
    const wins = {};
    const podiums = {};

    const allGPs = getAllGPs();

    allGPs.forEach(gpId => {
        const results = detailedResults[gpId];
        if (!results) return;
        if (!hasRealResults(gpId, false)) return; // игнорируем заглушки "000"

        Object.keys(results).forEach(driverId => {
            if (driverId === '000') return;
            const value = getDriverResultValue(results, driverId);
            if (typeof value !== 'number') return;

            // 25 = победа, 18/15 = подиум
            if (value === 25) {
                wins[driverId] = (wins[driverId] || 0) + 1;
                podiums[driverId] = (podiums[driverId] || 0) + 1;
            } else if (value === 18 || value === 15) {
                podiums[driverId] = (podiums[driverId] || 0) + 1;
            }
        });
    });

    return { wins, podiums };
};

const calculateSeasonDNFsFromResults = () => {
    const counts = {};
    const allGPs = getAllGPs();

    allGPs.forEach(gpId => {
        const results = detailedResults[gpId];
        if (!results) return;
        if (!hasRealResults(gpId, false)) return;

        Object.keys(results).forEach(driverId => {
            if (driverId === '000') return;
            const value = getDriverResultValue(results, driverId);
            if (value !== 'dnf' && value !== 'dns' && value !== 'dsq') return;

            if (!counts[driverId]) counts[driverId] = { dnf: 0, dns: 0, dsq: 0 };
            counts[driverId][value]++;
        });
    });

    return counts;
};

const calculateSeasonPolesFromResults = () => {
    const poles = {};

    if (typeof polesData === 'undefined' || !Array.isArray(polesData)) {
        return poles;
    }

    polesData.forEach(entry => {
        if (!entry?.driver) return;
        if (entry.driver === '000') return; // игнорируем служебный id

        const count = Number(entry.poles) || 0;
        if (count <= 0) return;

        poles[entry.driver] = (poles[entry.driver] || 0) + count;
    });

    return poles;
};

const applySeasonPolesToDrivers = () => {
    const poles = calculateSeasonPolesFromResults();

    driversData.forEach(driver => {
        if (driver._basePoles === undefined) {
            driver._basePoles = driver.poles || 0;
        }
        driver.poles = driver._basePoles + (poles[driver.id] || 0);
    });
};

const applySeasonDNFsToDrivers = () => {
    const counts = calculateSeasonDNFsFromResults();
    driversData.forEach(driver => {
        const c = counts[driver.id] || { dnf: 0, dns: 0, dsq: 0 };
        driver.seasonDNF = c.dnf;
        driver.seasonDNS = c.dns;
        driver.seasonDSQ = c.dsq;
    });
};

const applySeasonStatsToDrivers = () => {
    const { wins, podiums } = calculateSeasonStatsFromResults();

    driversData.forEach(driver => {
        if (driver._baseWins === undefined) driver._baseWins = driver.wins || 0;
        if (driver._basePodiums === undefined) driver._basePodiums = driver.podiums || 0;

        driver.wins = driver._baseWins + (wins[driver.id] || 0);
        driver.podiums = driver._basePodiums + (podiums[driver.id] || 0);
    });
};

const getDriverCareerSeasons = driver => {
    if (!driver.career?.length) return 0;
    const seasons = new Set();
    const currentYear = new Date().getFullYear();

    driver.career.forEach(item => {
        const yearStr = String(item.year);
        if (/н\.?\s*в\.?/i.test(yearStr)) {
            const start = yearStr.match(/(\d{4})/);
            if (start) for (let y = +start[1]; y <= currentYear; y++) seasons.add(y);
            return;
        }
        const matches = yearStr.match(/\d{4}/g);
        if (!matches) return;
        const start = +matches[0];
        const end = matches[1] ? +matches[1] : start;
        for (let y = start; y <= end; y++) seasons.add(y);
    });

    return seasons.size;
};

const getDriverCompareData = driver => {
    if (!driver) return null;
    return {
        ...driver,
        careerSeasons: getDriverCareerSeasons(driver),
        fines: driver.fines || 0,
        fastestLaps: driver.fastestLaps || 0
    };
};

const calculateFastestLapsFromTracks = () => {
    driversData.forEach(d => {
        d.fastestLaps = 0;
        d.fastestLapsTracks = [];
    });

    const calendarTrackIds = new Set(
        calendarData.filter(gp => !gp.canceled).map(gp => gp.track)
    );

    tracksData.forEach(track => {
        if (!calendarTrackIds.has(track.id) || !track.lapRecord) return;
        const parts = track.lapRecord.split(',');
        if (parts.length < 2) return;
        const pilotName = parts[1].split('-')[0].trim();
        const driver = driversData.find(d => d.namem === pilotName);
        if (!driver) return;
        driver.fastestLaps++;
        driver.fastestLapsTracks.push({
            trackId: track.id,
            trackNamem: track.trackNamem,
            country: track.country,
            time: parts[0].trim(),
            year: parts[1].split('-').pop().trim()
        });
    });
};

const createCheckbox = (value, label, checked, container) => {
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

    wrapper.append(input, checkmark, text);
    container.appendChild(wrapper);
    return input;
};

const animateCardsAppearance = container => {
    const cards = container.querySelectorAll('.driver-card');
    if (!cards.length) return;

    const width = container.offsetWidth || container.parentElement?.offsetWidth || 1200;
    const cols = Math.max(1, Math.floor((width + 12) / (300 + 12)));

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.92) translateY(15px)';
        card.style.transition = 'none';
    });

    requestAnimationFrame(() => {
        cards.forEach((card, i) => {
            const delay = Math.floor(i / cols) * 80;
            card.style.transition = `opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`;
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';
            });
        });
    });
};

const calculateTop10PositionStats = driverId => {
    const positions = [];
    const allGPs = getAllGPs();
    const pointsToPosition = { 25:1, 18:2, 15:3, 12:4, 10:5, 8:6, 6:7, 4:8, 2:9, 1:10 };

    allGPs.forEach(gpId => {
        const results = detailedResults[gpId];
        if (!results) return;
        const hasResults = Object.keys(results).some(k => k !== '000' && results[k] !== undefined);
        if (!hasResults) return;

        const value = getDriverResultValue(results, driverId);
        if (typeof value === 'number' && pointsToPosition[value] !== undefined) {
            positions.push(pointsToPosition[value]);
        }
    });

    if (!positions.length) return null;

    const counts = {};
    for (let i = 1; i <= 10; i++) counts[i] = 0;
    positions.forEach(p => { if (counts[p] !== undefined) counts[p]++; });

    let mostFrequent = 1;
    let maxCount = 0;
    for (let pos = 1; pos <= 10; pos++) {
        if (counts[pos] > maxCount) {
            maxCount = counts[pos];
            mostFrequent = pos;
        }
    }

    return {
        best: Math.min(...positions),
        average: positions.reduce((s, p) => s + p, 0) / positions.length,
        mostFrequent,
        counts,
        totalRaces: positions.length,
        positions
    };
};

const renderDriverCards = (drivers, container) => {
    container.innerHTML = '';

    if (!drivers.length) {
        const empty = document.createElement('div');
        empty.className = 'no-results';
        empty.textContent = 'Пилоты не найдены';
        container.appendChild(empty);
        return;
    }

    const sorted = [...drivers].sort((a, b) => Number(a.number) - Number(b.number));
    const championId = getCurrentWorldChampion()?.id ?? null;

    sorted.forEach(driver => {
        const card = document.createElement('div');
        card.className = 'driver-card';
        card.style.setProperty('--team-color', getTeamColor(driver.team));

        const isReserve = /^(резерв|reserve)$/i.test(driver.team);
        const reserveTeam = Array.isArray(driver.reserve) ? driver.reserve[0] : null;
        const watermarkTeam = isReserve ? reserveTeam : driver.team;

        if (driver.id === championId) card.classList.add('world-champion');
        if (isReserve) card.classList.add('reserve-driver');

        const patternDiv = document.createElement('div');
        patternDiv.className = 'driver-card-bg-pattern';
        patternDiv.innerHTML = DRIVER_PATTERN_SVG;
        card.appendChild(patternDiv);

        if (watermarkTeam) {
            const watermark = document.createElement('div');
            watermark.className = 'driver-card-watermark';

            const watermarkImg = document.createElement('img');
            watermarkImg.src = getTeamLogo(watermarkTeam);
            watermarkImg.alt = '';
            watermarkImg.setAttribute('aria-hidden', 'true');
            watermarkImg.onerror = () => { watermark.style.display = 'none'; };

            watermark.appendChild(watermarkImg);
            card.appendChild(watermark);
        }

        const overlay = document.createElement('div');
        overlay.className = 'driver-card-bg-overlay';
        card.appendChild(overlay);

        const portraitWrapper = document.createElement('div');
        portraitWrapper.className = 'driver-portrait-wrapper';

        const portraitImg = document.createElement('img');
        portraitImg.src = `Images/Drivers/${driver.id}.avif`;
        portraitImg.alt = driver.name;
        portraitImg.className = 'driver-portrait-img';
        portraitImg.onerror = () => { portraitImg.src = 'Images/Drivers/default.avif'; };

        portraitWrapper.appendChild(portraitImg);
        card.appendChild(portraitWrapper);

        const info = document.createElement('div');
        info.className = 'driver-card-info';

        const nameParts = String(driver.name || driver.namem || '').trim().split(/\s+/);
        const firstName = nameParts.length > 1 ? nameParts[0] : '';
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : nameParts[0] || '';

        const nameDiv = document.createElement('div');
        nameDiv.className = 'driver-card-name';

        if (firstName) {
            const firstDiv = document.createElement('span');
            firstDiv.className = 'driver-first-name';
            firstDiv.textContent = firstName;
            nameDiv.appendChild(firstDiv);
        }

        const lastDiv = document.createElement('span');
        lastDiv.className = 'driver-last-name';
        lastDiv.textContent = lastName;
        nameDiv.appendChild(lastDiv);

        const teamDiv = document.createElement('div');
        teamDiv.className = 'driver-team';

        if (isReserve) {
            const reserveTeamName = document.createElement('span');
            reserveTeamName.textContent = reserveTeam || 'Резервист';

            teamDiv.style.setProperty('--team-color', getTeamColor(reserveTeam || driver.team));
            teamDiv.appendChild(reserveTeamName);

            const reserveTeamData = reserveTeam ? getTeamData(reserveTeam) : null;
            if (reserveTeamData) {
                teamDiv.addEventListener('click', e => {
                    e.stopPropagation();
                    openTeamModal(reserveTeamData);
                });
            }
        } else {
            const teamName = document.createElement('span');
            teamName.textContent = driver.team;

            teamDiv.appendChild(teamName);

            teamDiv.addEventListener('click', e => {
                e.stopPropagation();
                const data = getTeamData(driver.team);
                if (data) openTeamModal(data);
            });
        }

        const numberOverlay = document.createElement('div');
        numberOverlay.className = 'driver-number-overlay';
        numberOverlay.textContent = driver.number;

        const titlesOverlay = document.createElement('div');
        titlesOverlay.className = 'driver-titles-overlay';
        if (driver.titles > 0) {
            const stars = driver.titles;
            if (stars <= 10) {
                titlesOverlay.textContent = '☆'.repeat(stars);
            } else {
                const firstRow = Math.ceil(stars / 2);
                const secondRow = stars - firstRow;
                titlesOverlay.innerHTML = `<div class="titles-row">${'☆'.repeat(firstRow)}</div><div class="titles-row">${'☆'.repeat(secondRow)}</div>`;
                titlesOverlay.classList.add('titles-multi-row');
            }
            titlesOverlay.title = `${driver.titles}× чемпион мира`;
        }

        const numberBlock = document.createElement('div');
        numberBlock.className = 'driver-number-block';
        numberBlock.append(numberOverlay);

        info.append(nameDiv, teamDiv, numberBlock);
        card.appendChild(info);

        /* Полоса с титулами внизу карточки, поверх фото пилота */
        if (driver.titles > 0) {
            const titlesBar = document.createElement('div');
            titlesBar.className = 'driver-titles-bar';
            titlesBar.appendChild(titlesOverlay);
            card.appendChild(titlesBar);
        }

        if (isReserve) {
            const reserveBadge = document.createElement('div');
            reserveBadge.className = 'driver-reserve-badge';
            reserveBadge.textContent = 'Резервист';
            card.appendChild(reserveBadge);
        }

        const flagOverlay = document.createElement('div');
        flagOverlay.className = 'driver-flag-overlay';
        const flagImg = document.createElement('img');
        flagImg.src = `Images/Flags/${driver.country}.svg`;
        flagImg.title = getCountryName(driver.country);
        flagImg.alt = driver.country;
        flagImg.onerror = () => { flagOverlay.style.display = 'none'; };
        flagOverlay.appendChild(flagImg);
        card.appendChild(flagOverlay);

        card.addEventListener('click', () => openDriverModal(driver));
        container.appendChild(card);
    });

    requestAnimationFrame(() => animateCardsAppearance(container));
};

const buildFilterPanel = (panel, cardsArea) => {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'driver-search-input';
    searchInput.placeholder = 'Поиск...';

    const filterToggleBtn = document.createElement('button');
    filterToggleBtn.className = 'filter-toggle-btn';
    filterToggleBtn.innerHTML = '⚙';

    const resetBtn = document.createElement('button');
    resetBtn.className = 'filter-reset-btn';
    resetBtn.textContent = 'Сбросить';

    const divider1 = document.createElement('hr');
    divider1.className = 'filter-divider';

    const filterTitle = document.createElement('div');
    filterTitle.className = 'filter-section-title';
    filterTitle.textContent = 'Команды';

    const checkboxesContainer = document.createElement('div');
    checkboxesContainer.className = 'filter-checkboxes';

    const teams = [...new Set(driversData.map(d => d.team))];
    const regularTeams = teams
        .filter(t => !/^(резерв|reserve)$/i.test(t))
        .sort((a, b) => a.localeCompare(b, 'ru'));

    const allCheckbox = createCheckbox('all', 'ВСЕ', true, checkboxesContainer);
    const teamCheckboxes = {};
    regularTeams.forEach(t => { teamCheckboxes[t] = createCheckbox(t, t, false, checkboxesContainer); });

    const dividerReserve = document.createElement('hr');
    dividerReserve.className = 'filter-divider filter-divider-reserve';

    const reserveContainer = document.createElement('div');
    reserveContainer.className = 'filter-checkboxes filter-reserve-section';
    const reserveCheckbox = createCheckbox('reserve', 'Резервисты', false, reserveContainer);

    const divider2 = document.createElement('hr');
    divider2.className = 'filter-divider filter-divider-champ';

    const champsContainer = document.createElement('div');
    champsContainer.className = 'filter-checkboxes';
    const champsCheckbox = createCheckbox('champs', 'Чемпионы мира', false, champsContainer);

    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'filter-checkboxes-popup';

    const popupInner = document.createElement('div');
    popupInner.className = 'filter-checkboxes-popup-inner';

    const popupHeader = document.createElement('div');
    popupHeader.className = 'filter-popup-header';

    const popupTitle = document.createElement('span');
    popupTitle.className = 'filter-popup-title';
    popupTitle.textContent = 'Фильтры';

    const popupClose = document.createElement('button');
    popupClose.className = 'filter-popup-close';
    popupClose.innerHTML = '&times;';
    popupClose.setAttribute('aria-label', 'Закрыть фильтры');

    popupHeader.append(popupTitle, popupClose);
    popupInner.appendChild(popupHeader);

    const popupTeamsTitle = document.createElement('div');
    popupTeamsTitle.className = 'filter-popup-section-title';
    popupTeamsTitle.textContent = 'Команды';
    popupInner.appendChild(popupTeamsTitle);

    const popupCheckboxesContainer = document.createElement('div');
    popupCheckboxesContainer.className = 'filter-popup-checkboxes';

    const popupAllCheckbox = createCheckbox('all', 'ВСЕ', true, popupCheckboxesContainer);
    const popupTeamCheckboxes = {};
    regularTeams.forEach(t => { popupTeamCheckboxes[t] = createCheckbox(t, t, false, popupCheckboxesContainer); });

    popupInner.appendChild(popupCheckboxesContainer);

    const popupDivider1 = document.createElement('hr');
    popupDivider1.className = 'filter-popup-divider';
    popupInner.appendChild(popupDivider1);

    const popupReserveContainer = document.createElement('div');
    popupReserveContainer.className = 'filter-popup-section';
    const popupReserveCheckbox = createCheckbox('reserve', 'Резервисты', false, popupReserveContainer);
    popupInner.appendChild(popupReserveContainer);

    const popupDivider2 = document.createElement('hr');
    popupDivider2.className = 'filter-popup-divider';
    popupInner.appendChild(popupDivider2);

    const popupChampsContainer = document.createElement('div');
    popupChampsContainer.className = 'filter-popup-section';
    const popupChampsCheckbox = createCheckbox('champs', 'Чемпионы мира', false, popupChampsContainer);
    popupInner.appendChild(popupChampsContainer);

    popupOverlay.appendChild(popupInner);

    const compareDivider = document.createElement('hr');
    compareDivider.className = 'filter-divider filter-divider-compare';

    const compareBtn = document.createElement('button');
    compareBtn.className = 'drivers-compare-btn';
    compareBtn.textContent = 'Сравнение пилотов';
    compareBtn.addEventListener('click', openDriversCompareModal);

    panel.append(
        searchInput, filterToggleBtn, resetBtn, divider1, filterTitle,
        checkboxesContainer, dividerReserve, reserveContainer, divider2,
        champsContainer, compareDivider, compareBtn, popupOverlay
    );

    let activeTeamFilters = new Set(regularTeams);
    let champsOnly = false;
    let showReserve = false;

    const syncCheckboxes = (source, target, sourceAll, targetAll) => {
        Object.keys(source).forEach(team => {
            if (target[team]) target[team].checked = source[team].checked;
            if (source[team]) source[team].checked = target[team].checked;
        });
        if (sourceAll && targetAll) sourceAll.checked = targetAll.checked;
    };

	const applyFilters = () => {
		const term = searchInput.value.toLowerCase().trim();
		let filtered = driversData;

		const reserve = filtered.filter(d => /^(резерв|reserve)$/i.test(d.team));
		const main = filtered.filter(d => !/^(резерв|reserve)$/i.test(d.team));

		const isAllTeams = activeTeamFilters.size === regularTeams.length;
		const mainFiltered = isAllTeams ? main : main.filter(d => activeTeamFilters.has(d.team));

		// Резервисты показываются, только если выбрана их команда (или выбраны все команды)
		const reserveFiltered = isAllTeams
			? reserve
			: reserve.filter(d => 
				Array.isArray(d.reserve) && d.reserve.some(team => activeTeamFilters.has(team))
			  );

		filtered = showReserve ? [...mainFiltered, ...reserveFiltered] : mainFiltered;

		if (champsOnly) filtered = filtered.filter(d => d.titles > 0);

		if (term) {
			filtered = filtered.filter(driver => {
				const countryName = getCountryName(driver.country).toLowerCase();
				const synonyms = (countrySynonyms[driver.country] || []).map(s => s.toLowerCase());
				const allCountryNames = [countryName, ...synonyms];

				const startsWith = text => text.toLowerCase().split(/\s+/).some(w => w.startsWith(term));

				return String(driver.number).startsWith(term) ||
					   startsWith(driver.name) ||
					   startsWith(driver.namem) ||
					   allCountryNames.some(startsWith) ||
					   startsWith(driver.team);
			});
		}

		renderDriverCards(filtered, cardsArea);
	};

    const handleCheckboxChange = (e, sourceTeamCheckboxes, sourceAll, targetTeamCheckboxes, isPopup) => {
        if (e.target.type !== 'checkbox') return;
        const checkbox = e.target;
        const value = checkbox.dataset.filterValue;

        const targetAll = isPopup ? allCheckbox : popupAllCheckbox;
        const targetChamps = isPopup ? champsCheckbox : popupChampsCheckbox;
        const targetReserve = isPopup ? reserveCheckbox : popupReserveCheckbox;

        if (value === 'reserve') {
            showReserve = checkbox.checked;
            if (targetReserve) targetReserve.checked = checkbox.checked;
            applyFilters();
            return;
        }

        if (value === 'all') {
            if (checkbox.checked) {
                Object.values(sourceTeamCheckboxes).forEach(cb => cb.checked = false);
                Object.values(targetTeamCheckboxes).forEach(cb => cb.checked = false);
                activeTeamFilters = new Set(regularTeams);
                targetChamps.checked = false;
                champsOnly = false;
            } else {
                const anyChecked = Object.values(sourceTeamCheckboxes).some(cb => cb.checked);
                if (!anyChecked) {
                    checkbox.checked = true;
                    if (targetAll) targetAll.checked = true;
                }
            }
            syncCheckboxes(sourceTeamCheckboxes, targetTeamCheckboxes, sourceAll, targetAll);
            applyFilters();
            return;
        }

        const selected = new Set();
        Object.entries(sourceTeamCheckboxes).forEach(([team, cb]) => {
            if (cb.checked) selected.add(team);
        });

        if (selected.size === 0) {
            sourceAll.checked = true;
            if (targetAll) targetAll.checked = true;
            activeTeamFilters = new Set(regularTeams);
            targetChamps.checked = false;
            champsOnly = false;
        } else {
            sourceAll.checked = false;
            if (targetAll) targetAll.checked = false;
            activeTeamFilters = new Set(selected);
        }

        syncCheckboxes(sourceTeamCheckboxes, targetTeamCheckboxes, sourceAll, targetAll);
        applyFilters();
    };

    const handleChampsChange = (source, target) => {
        champsOnly = source.checked;
        if (target) target.checked = source.checked;
        applyFilters();
    };

    checkboxesContainer.addEventListener('change', e => {
        handleCheckboxChange(e, teamCheckboxes, allCheckbox, teamCheckboxes, false);
    });

    champsCheckbox.addEventListener('change', () => handleChampsChange(champsCheckbox, popupChampsCheckbox));

    reserveCheckbox.addEventListener('change', () => {
        showReserve = reserveCheckbox.checked;
        popupReserveCheckbox.checked = reserveCheckbox.checked;
        applyFilters();
    });

    popupCheckboxesContainer.addEventListener('change', e => {
        handleCheckboxChange(e, popupTeamCheckboxes, popupAllCheckbox, popupTeamCheckboxes, true);
    });

    popupChampsCheckbox.addEventListener('change', () => handleChampsChange(popupChampsCheckbox, champsCheckbox));

    popupReserveCheckbox.addEventListener('change', () => {
        showReserve = popupReserveCheckbox.checked;
        reserveCheckbox.checked = popupReserveCheckbox.checked;
        applyFilters();
    });

    searchInput.addEventListener('input', applyFilters);

    const togglePopup = () => {
        popupOverlay.classList.toggle('active');
        filterToggleBtn.classList.toggle('active');
    };

    filterToggleBtn.addEventListener('click', togglePopup);
    popupClose.addEventListener('click', togglePopup);

    popupOverlay.addEventListener('click', e => {
        if (e.target === popupOverlay) togglePopup();
    });

    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        allCheckbox.checked = true;
        Object.values(teamCheckboxes).forEach(cb => cb.checked = false);
        champsCheckbox.checked = false;
        reserveCheckbox.checked = false;

        popupAllCheckbox.checked = true;
        Object.values(popupTeamCheckboxes).forEach(cb => cb.checked = false);
        popupChampsCheckbox.checked = false;
        popupReserveCheckbox.checked = false;

        activeTeamFilters = new Set(regularTeams);
        champsOnly = false;
        showReserve = false;

        popupOverlay.classList.remove('active');
        filterToggleBtn.classList.remove('active');

        applyFilters();
    });

    applyFilters();
};

const initDriversPage = container => {
    calculateFastestLapsFromTracks();
	applySeasonStatsToDrivers();
	applySeasonPolesToDrivers();
	applySeasonDNFsToDrivers();
	applyDebutFromCareer();
	applyShortNames();

    container.innerHTML = '';
    container.style.cssText = 'display: flex; gap: 0; padding: 0;';

    const filterPanel = document.createElement('div');
    filterPanel.className = 'drivers-filter-panel';

    const cardsArea = document.createElement('div');
    cardsArea.className = 'drivers-cards-area';
    cardsArea.id = 'driversCardsContainer';

    container.append(filterPanel, cardsArea);
    buildFilterPanel(filterPanel, cardsArea);
};

const createCareerBlock = careerData => {
    if (!careerData?.length) return null;

    const container = document.createElement('div');
    container.className = 'modal-career-container';

    const seasons = new Set();
    const currentYear = new Date().getFullYear();

    careerData.forEach(item => {
        const yearStr = String(item.year);
        if (/н\.?\s*в\.?/i.test(yearStr)) {
            const start = yearStr.match(/(\d{4})/);
            if (start) for (let y = +start[1]; y <= currentYear; y++) seasons.add(y);
            return;
        }
        const matches = yearStr.match(/\d{4}/g);
        if (!matches) return;
        const start = +matches[0];
        const end = matches[1] ? +matches[1] : start;
        for (let y = start; y <= end; y++) seasons.add(y);
    });

    const seasonsCount = seasons.size > 0
        ? ` — ${seasons.size} ${declension(seasons.size, ['сезон', 'сезона', 'сезонов'])}`
        : '';

    const title = document.createElement('h3');
    title.className = 'modal-career-title';
    title.textContent = `Карьерный путь${seasonsCount}`;
    container.appendChild(title);

    const list = document.createElement('div');
    list.className = 'modal-career-list';

    careerData.forEach((item, index) => {
        const careerItem = document.createElement('div');
        careerItem.className = 'modal-career-item';
        careerItem.style.setProperty('--career-delay', `${index * 100}ms`);
        careerItem.style.setProperty('--team-color', getTeamColor(item.team));
        careerItem.setAttribute('data-team', teamSlug(item.team));

        const logoWrapper = document.createElement('div');
        logoWrapper.className = 'modal-career-logo-wrapper';

        const logo = document.createElement('img');
        logo.src = getTeamLogo(item.team);
        logo.alt = item.team;
        logo.className = 'modal-career-logo';
        logo.onerror = () => {
            logo.style.display = 'none';
            const fallback = document.createElement('span');
            fallback.className = 'modal-career-logo-fallback';
            fallback.textContent = item.team.charAt(0).toUpperCase();
            logoWrapper.appendChild(fallback);
        };
        logoWrapper.appendChild(logo);

        const info = document.createElement('div');
        info.className = 'modal-career-info';

        const teamName = document.createElement('div');
        teamName.className = 'modal-career-team-name';
        teamName.textContent = item.team;
        if (item.temporarily) teamName.classList.add('career-temporary');

        const year = document.createElement('div');
        year.className = 'modal-career-year';
        year.textContent = item.year;

        info.append(teamName, year);
        careerItem.append(logoWrapper, info);

        if (index < careerData.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'modal-career-arrow';
            arrow.innerHTML = '→';
            list.append(careerItem, arrow);
        } else {
            list.appendChild(careerItem);
        }
    });

    container.appendChild(list);
    return container;
};

const openDriverModal = driver => {
    if (typeof calculateFastestLapsFromTracks === 'function') calculateFastestLapsFromTracks();
	if (typeof applySeasonStatsToDrivers === 'function') applySeasonStatsToDrivers();
	if (typeof applySeasonPolesToDrivers === 'function') applySeasonPolesToDrivers();
	if (typeof applySeasonDNFsToDrivers === 'function') applySeasonDNFsToDrivers();
	if (typeof applyDebutFromCareer === 'function') applyDebutFromCareer();
	if (typeof applyShortNames === 'function') applyShortNames();

    document.querySelector('.driver-modal-overlay')?.remove();

    const scrollY = window.scrollY;
    Object.assign(document.body.style, {
        position: 'fixed',
        top: `-${scrollY}px`,
        width: '100%',
        overflowY: 'scroll'
    });

    const unlockScroll = () => {
        Object.assign(document.body.style, { position: '', top: '', width: '', overflowY: '' });
        window.scrollTo(0, scrollY);
    };

    const overlay = document.createElement('div');
    overlay.className = 'driver-modal-overlay';

    const teamColor = getTeamColor(driver.team);

    const rightColumn = document.createElement('div');
    rightColumn.className = 'dm-right-column';

    /* ---- Штрафные баллы ---- */
    const penaltiesPanel = document.createElement('div');
    penaltiesPanel.className = 'dm-panel dm-penalties-panel';
    penaltiesPanel.style.setProperty('--team-color', teamColor);

    const penaltiesTitle = document.createElement('h3');
    penaltiesTitle.className = 'dm-panel-title';
    penaltiesTitle.textContent = 'Штрафные баллы';

    const penaltyPoints = driver.fines || 0;
    const segments = Array.from({ length: 12 }, (_, i) => {
        const n = i + 1;
        let cls = n <= penaltyPoints ? 'is-on' : '';
        if (n === 12) cls += ' is-limit';
        return `<span class="msr-pp__seg ${cls}"></span>`;
    }).join('');

    const meterWrapper = document.createElement('div');
    meterWrapper.className = 'dm-penalty-meter-wrapper';
    meterWrapper.innerHTML = `<div class="msr-pp__meter">${segments}</div>`;

    const penaltyText = document.createElement('div');
    penaltyText.className = 'dm-penalty-foot';
    penaltyText.innerHTML = `<span><b>${penaltyPoints}</b> из 12</span><span>лимит 12</span>`;

    penaltiesPanel.append(penaltiesTitle, meterWrapper, penaltyText);

    if (penaltyPoints >= 12) {
        const dsq = document.createElement('div');
        dsq.className = 'dm-penalty-text-dsq';
        dsq.textContent = 'DSQ на следующую гонку';
        penaltiesPanel.appendChild(dsq);
    }

    rightColumn.appendChild(penaltiesPanel);

    /* ---- Сходы ---- */
    const dnfPanel = document.createElement('div');
    dnfPanel.className = 'dm-panel dm-dnf-panel';
    dnfPanel.style.setProperty('--team-color', teamColor);

    const dnfTitle = document.createElement('h3');
    dnfTitle.className = 'dm-panel-title';
    dnfTitle.textContent = 'Сходы';

    const dnfRow = document.createElement('div');
    dnfRow.className = 'dm-dnf-row';

    const dnfStats = [
        { label: 'DNF', value: driver.seasonDNF || 0, cls: 'dnf' },
        { label: 'DNS', value: driver.seasonDNS || 0, cls: 'dns' },
        { label: 'DSQ', value: driver.seasonDSQ || 0, cls: 'dsq' },
    ];

    dnfStats.forEach(stat => {
        const chip = document.createElement('div');
        chip.className = `dm-dnf-chip dm-dnf-chip--${stat.cls}`;
        chip.innerHTML = `
            <span class="dm-dnf-chip-label">${stat.label}</span>
            <span class="dm-dnf-chip-count">${stat.value}</span>
        `;
        dnfRow.appendChild(chip);
    });

    dnfPanel.append(dnfTitle, dnfRow);
    rightColumn.appendChild(dnfPanel);

    /* ---- Позиции в топ-10 ---- */
    const avgData = calculateTop10PositionStats(driver.id);
    let avgPositionPanel = null;

    if (avgData) {
        avgPositionPanel = document.createElement('div');
        avgPositionPanel.className = 'dm-panel dm-top10-panel';
        avgPositionPanel.style.setProperty('--team-color', teamColor);

        const avgTitle = document.createElement('h3');
        avgTitle.className = 'dm-panel-title';
        avgTitle.textContent = 'Позиции в топ-10';

        const maxCount = Math.max(1, ...Object.values(avgData.counts));
        const bars = document.createElement('div');
        bars.className = 'dm-top10-bars';

        const axis = document.createElement('div');
        axis.className = 'dm-top10-axis';

        for (let pos = 1; pos <= 10; pos++) {
            const cnt = avgData.counts[pos] || 0;

            const bar = document.createElement('i');
            bar.className = 'dm-top10-bar';
            if (avgData.best === pos) bar.classList.add('is-best');
            bar.style.height = cnt > 0 ? `${Math.max(8, (cnt / maxCount) * 100)}%` : '2px';
            bars.appendChild(bar);

            const tick = document.createElement('span');
            tick.textContent = pos;
            axis.appendChild(tick);
        }

        const foot = document.createElement('div');
        foot.className = 'dm-top10-foot';
        foot.innerHTML = `
            <span>Лучшая <b>${avgData.best}</b></span>
            <span>Средняя <b>${avgData.average.toFixed(2)}</b></span>
        `;

        avgPositionPanel.append(avgTitle, bars, axis, foot);
        rightColumn.appendChild(avgPositionPanel);
    }

    /* ---- Рекорды круга ---- */
    const tracks = driver.fastestLapsTracks || [];
    let recordsPanel = null;

    if (tracks.length > 0) {
        recordsPanel = document.createElement('div');
        recordsPanel.className = 'dm-panel dm-records-panel';
        recordsPanel.style.setProperty('--team-color', teamColor);

        const recordsTitle = document.createElement('h3');
        recordsTitle.className = 'dm-panel-title';
        recordsTitle.textContent = `Рекорды круга · ${tracks.length}`;

        const calendarOrder = new Map();
        calendarData.forEach((gp, i) => {
            if (!calendarOrder.has(gp.track)) calendarOrder.set(gp.track, i);
        });

        const sorted = [...tracks].sort((a, b) => {
            const oa = calendarOrder.has(a.trackId) ? calendarOrder.get(a.trackId) : 9999;
            const ob = calendarOrder.has(b.trackId) ? calendarOrder.get(b.trackId) : 9999;
            return oa - ob;
        });

        const list = document.createElement('div');
        list.className = 'dm-records-list';

        sorted.forEach(item => {
            const row = document.createElement('div');
            row.className = 'dm-fastest-lap-row';
            row.innerHTML = `
                <img src="Images/Flags/${item.country}.svg" alt="${item.country}" class="dm-fl-flag" title="${getCountryName(item.country)}" onerror="this.style.display='none'">
                <span class="dm-fl-track">${item.trackNamem}</span>
                <span class="dm-fl-time">${item.time}</span>
                <span class="dm-fl-year">${item.year}</span>
            `;
            list.appendChild(row);
        });

        recordsPanel.append(recordsTitle, list);
        rightColumn.appendChild(recordsPanel);
    }

    /* ---- Главный блок ---- */
    const modalWrap = document.createElement('div');
    modalWrap.className = 'dm-modal-wrap';

    const modal = document.createElement('div');
    modal.className = 'driver-modal';
    modal.style.setProperty('--team-color', teamColor);

    const modalPattern = document.createElement('div');
    modalPattern.className = 'driver-modal-pattern';
    modalPattern.innerHTML = DRIVER_PATTERN_SVG;
    modal.appendChild(modalPattern);

    const modalOverlayBg = document.createElement('div');
    modalOverlayBg.className = 'driver-modal-overlay-bg';
    modal.appendChild(modalOverlayBg);

    const ghostNumber = document.createElement('div');
    ghostNumber.className = 'dm-ghost-number';
    ghostNumber.textContent = driver.number;
    modal.appendChild(ghostNumber);

    const modalPortrait = document.createElement('img');
    modalPortrait.src = `Images/Drivers/${driver.id}.avif`;
    modalPortrait.alt = driver.name;
    modalPortrait.className = 'modal-portrait';
    modalPortrait.onerror = () => { modalPortrait.src = 'Images/Drivers/default.avif'; };
    modal.appendChild(modalPortrait);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close-btn';
    closeBtn.innerHTML = '&times;';
    modal.appendChild(closeBtn);

    const closeModal = () => {
        overlay.remove();
        unlockScroll();
        document.removeEventListener('keydown', escHandler);
    };

    closeBtn.addEventListener('click', closeModal);

    const dmContent = document.createElement('div');
    dmContent.className = 'dm-content';

    /* Имя и фамилия */
    const nameParts = String(driver.name).trim().split(/\s+/);
    const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(' ') : '';
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : driver.name;

    const identity = document.createElement('div');
    identity.className = 'dm-identity';

    const numWrap = document.createElement('div');
    numWrap.className = 'dm-num-wrap';

    const modalNumber = document.createElement('div');
    modalNumber.className = 'dm-number';
    modalNumber.textContent = driver.number;
    numWrap.appendChild(modalNumber);

    const names = document.createElement('div');
    names.className = 'dm-names';

    if (firstName) {
        const first = document.createElement('div');
        first.className = 'dm-first';
        first.textContent = firstName;
        names.appendChild(first);
    }

    const last = document.createElement('div');
    last.className = 'dm-last';
    last.textContent = lastName;
    names.appendChild(last);

    const isReserve = /^(резерв|reserve)$/i.test(driver.team);

    if (isReserve && driver.reserve?.length > 0) {
        const reserveContainer = document.createElement('div');
        reserveContainer.className = 'dm-reserve';

        if (driver.country) {
            const flag = document.createElement('img');
            flag.src = `Images/Flags/${driver.country}.svg`;
            flag.alt = driver.country;
            flag.title = getCountryName(driver.country);
            flag.className = 'dm-flag';
            flag.onerror = () => { flag.style.display = 'none'; };
            reserveContainer.appendChild(flag);
        }

        const teamsList = document.createElement('div');
        teamsList.className = 'dm-reserve-list';

        driver.reserve.forEach(teamName => {
            const teamItem = document.createElement('div');
            teamItem.className = 'dm-team-link';
            teamItem.style.setProperty('--team-color', getTeamColor(teamName));

            const teamAccent = document.createElement('span');
            teamAccent.className = 'dm-team-accent';

            const teamLogo = document.createElement('img');
            teamLogo.src = getTeamLogo(teamName);
            teamLogo.alt = teamName;
            teamLogo.className = 'modal-team-logo';
            teamLogo.onerror = () => { teamLogo.style.display = 'none'; };

            const teamLabel = document.createElement('span');
            teamLabel.className = 'dm-team-name';
            teamLabel.textContent = teamName;

            teamItem.append(teamAccent, teamLogo, teamLabel);

            teamItem.addEventListener('click', e => {
                e.stopPropagation();
                const data = getTeamData(teamName);
                if (data) openTeamModal(data);
            });

            teamsList.appendChild(teamItem);
        });

        reserveContainer.append(teamsList);
        names.appendChild(reserveContainer);
    } else {
        const teamLine = document.createElement('div');
        teamLine.className = 'dm-team-line';

        const teamAccent = document.createElement('span');
        teamAccent.className = 'dm-team-accent';

        const teamIcon = document.createElement('img');
        teamIcon.src = getTeamLogo(driver.team);
        teamIcon.alt = driver.team;
        teamIcon.className = 'modal-team-logo';
        teamIcon.onerror = () => { teamIcon.style.display = 'none'; };

        const teamLabel = document.createElement('span');
        teamLabel.className = 'dm-team-name';
        teamLabel.textContent = driver.team;

        if (driver.country) {
            const teamFlag = document.createElement('img');
            teamFlag.src = `Images/Flags/${driver.country}.svg`;
            teamFlag.alt = driver.country;
            teamFlag.title = getCountryName(driver.country);
            teamFlag.className = 'dm-flag';
            teamFlag.onerror = () => { teamFlag.style.display = 'none'; };
            teamLine.appendChild(teamFlag);
        }

        const teamLink = document.createElement('div');
        teamLink.className = 'dm-team-link';
        teamLink.append(teamAccent, teamIcon, teamLabel);

        teamLink.addEventListener('click', e => {
            e.stopPropagation();
            const data = getTeamData(driver.team);
            if (data) openTeamModal(data);
        });

        teamLine.appendChild(teamLink);

        names.appendChild(teamLine);
    }

    identity.append(numWrap, names);
    dmContent.appendChild(identity);

    /* Статистика */
    const statsDeclensions = {
        titles: ['Титул', 'Титула', 'Титулов'],
        wins: ['Победа', 'Победы', 'Побед'],
        hattricks: ['Хэт-Трик', 'Хэт-Трика', 'Хэт-Триков'],
        podiums: ['Подиум', 'Подиума', 'Подиумов'],
        poles: ['Поул', 'Поула', 'Поулов'],
        grandslam: ['Большой шлем', 'Больших шлема', 'Больших шлемов']
    };

    const statCell = (value, key, gold) => `
        <div class="dm-stat">
            <span class="dm-stat-value${gold ? ' is-gold' : ''}">${value || 0}</span>
            <span class="dm-stat-label">${declension(value || 0, statsDeclensions[key])}</span>
        </div>`;

    const statsRow = document.createElement('div');
    statsRow.className = 'dm-stats';
    statsRow.innerHTML =
        statCell(driver.titles, 'titles', driver.titles > 0) +
        statCell(driver.wins, 'wins') +
        statCell(driver.podiums, 'podiums') +
        statCell(driver.poles, 'poles') +
        statCell(driver.hattricks, 'hattricks') +
        statCell(driver.grandslam, 'grandslam');

    dmContent.appendChild(statsRow);

    /* Данные */
    const metaItems = [
        ['Дата рождения', `${driver.birthDate} (${calculateAge(driver.birthDate)})`],
        ['Полное имя', driver.namef],
        ['Дебют', driver.debut],
        ['Место рождения', driver.birthPlace]
    ];

    const meta = document.createElement('div');
    meta.className = 'dm-meta';
    meta.innerHTML = metaItems.map(([label, value]) => `
        <div class="dm-meta-cell">
            <span class="dm-meta-label">${label}</span>
            <span class="dm-meta-value">${value}</span>
        </div>`).join('');

    dmContent.appendChild(meta);

    /* Биография */
    const bioSection = document.createElement('div');
    bioSection.className = 'dm-bio';

    const bioTitle = document.createElement('h4');
    bioTitle.className = 'dm-bio-title';
    bioTitle.textContent = 'Биография';

    const bioText = document.createElement('p');
    bioText.className = 'dm-bio-text';
    bioText.textContent = driver.bio;

    bioSection.append(bioTitle, bioText);

    if (driver.note) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'modal-note-compact';
        noteDiv.innerHTML = `<span class="note-compact-text">${driver.note}</span>`;
        bioSection.appendChild(noteDiv);
    }

    dmContent.appendChild(bioSection);
    modal.appendChild(dmContent);

    modalWrap.appendChild(modal);

    /* Карьера — отдельный блок под основным */
    const careerBlock = createCareerBlock(driver.career);
    if (careerBlock) {
        careerBlock.style.setProperty('--team-color', teamColor);
        modalWrap.appendChild(careerBlock);
    }

    overlay.append(modalWrap, rightColumn);

    overlay.addEventListener('click', e => {
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

};

const buildDriverOptions = (selectedId, excludeId) =>
    driversData
        .filter(d => d.id !== excludeId)
        .sort((a, b) => a.name.localeCompare(b.name, 'ru'))
        .map(d => `<option value="${d.id}"${d.id === selectedId ? ' selected' : ''}>${d.name} (${d.team})</option>`)
        .join('');

const cmpShare = (valA, valB) => {
    const total = valA + valB;
    if (!total) return { a: 0, b: 0, labelA: '—', labelB: '—' };

    const pctA = (valA / total) * 100;
    return {
        a: pctA,
        b: 100 - pctA,
        labelA: `${pctA.toFixed(1)}%`,
        labelB: `${(100 - pctA).toFixed(1)}%`
    };
};

const cmpBarHtml = (valA, valB, extraClass = '') => {
    const share = cmpShare(valA, valB);
    const segA = valA > 0 ? `<span class="cmp-bar-a" style="width:${share.a}%"></span>` : '';
    const segB = valB > 0 ? `<span class="cmp-bar-b" style="width:${share.b}%"></span>` : '';
    const isEmpty = valA + valB === 0 ? ' cmp-bar--empty' : '';
    return `<div class="cmp-bar${extraClass ? ` ${extraClass}` : ''}${isEmpty}" role="img" aria-label="${share.labelA} / ${share.labelB}">${segA}${segB}</div>`;
};

const cmpRowHtml = (label, valA, valB, hint = '') => {
    const share = cmpShare(valA, valB);
    return `
        <div class="cmp-row">
            <div class="cmp-label">
                <span>${label}</span>
            </div>
            <div class="cmp-row-body">
                <span class="cmp-pct cmp-pct--a">${share.labelA}</span>
                <span class="cmp-value">${valA}</span>
                ${cmpBarHtml(valA, valB)}
                <span class="cmp-value">${valB}</span>
                <span class="cmp-pct cmp-pct--b">${share.labelB}</span>
            </div>
        </div>
    `;
};

const cmpDriverSideHtml = driver => {
    const isReserve = /^(резерв|reserve)$/i.test(driver.team);
    const badgeTeam = isReserve && Array.isArray(driver.reserve) ? driver.reserve[0] : driver.team;
    const color = getTeamColor(driver.team);

    const badge = badgeTeam
        ? `<span class="cmp-team-badge" style="--cmp-badge:${getTeamColor(badgeTeam)}"><img src="${getTeamLogo(badgeTeam)}" alt="" onerror="this.parentElement.style.display='none'"></span>`
        : '';

    return `
        <div class="cmp-side" style="--cmp-c:${color}">
            <div class="cmp-avatar-wrap">
                <img class="cmp-avatar" src="Images/Drivers/${driver.id}.avif" alt="${driver.name}" onerror="this.src='Images/Drivers/default.avif'">
                ${badge}
            </div>
            <div class="cmp-name">${driver.name}</div>
            <div class="cmp-team">${isReserve ? 'Резерв' : driver.team}</div>
            <div class="cmp-chip"><span>Сезоны</span><b>${driver.careerSeasons}</b></div>
        </div>
    `;
};

const renderCompareTable = (container, driverA, driverB) => {
    if (!driverA || !driverB) {
        container.innerHTML = '<div class="compare-empty">Выберите пилотов для сравнения</div>';
        return;
    }

    const a = getDriverCompareData(driverA);
    const b = getDriverCompareData(driverB);
    const colorA = getTeamColor(a.team);
    const colorB = getTeamColor(b.team);

    let rowsHtml = `
        <div class="cmp-row cmp-row--hero">
            <div class="cmp-label">
                <span>Титулы чемпиона мира</span>
            </div>
            <div class="cmp-hero-body">
                <span class="cmp-hero-value">${a.titles || 0}</span>
                ${cmpBarHtml(a.titles || 0, b.titles || 0, 'cmp-bar--hero')}
                <span class="cmp-hero-value">${b.titles || 0}</span>
            </div>
        </div>
    `;

    COMPARE_METRICS.filter(m => m.key !== 'titles').forEach(m => {
        rowsHtml += cmpRowHtml(m.label, a[m.key] || 0, b[m.key] || 0);
    });

    if ((a.fines || 0) || (b.fines || 0)) {
        rowsHtml += cmpRowHtml(
            'Штрафные очки', a.fines || 0, b.fines || 0, 'Меньше — лучше'
        );
    }

    const isSameTeam = a.team && b.team && a.team === b.team;

    if (isSameTeam) {
        const getQualiScore = driverId => {
            if (typeof qualiData === 'undefined' || !Array.isArray(qualiData)) return 0;

            let score = 0;

            qualiData.forEach(row => {
                const d1 = findDriverByName(row.driver1);
                const d2 = findDriverByName(row.driver2);
                if (d1?.id === driverId) score += row.score1 || 0;
                if (d2?.id === driverId) score += row.score2 || 0;
            });

            if (typeof replacementQualiData !== 'undefined' && Array.isArray(replacementQualiData)) {
                replacementQualiData.forEach(row => {
                    const d1 = findDriverByName(row.driver1);
                    const d2 = findDriverByName(row.driver2);
                    if (d1?.id === driverId) score += row.score1 || 0;
                    if (d2?.id === driverId) score += row.score2 || 0;
                });
            }

            return score;
        };

        rowsHtml += cmpRowHtml(
            'Квалификационный зачёт',
            getQualiScore(a.id),
            getQualiScore(b.id),
            'Очки в квалификационных дуэлях внутри команды'
        );
    }

    rowsHtml += cmpRowHtml('Сходы (DNF)', a.seasonDNF || 0, b.seasonDNF || 0, 'Меньше — лучше');
    if ((a.seasonDNS || 0) || (b.seasonDNS || 0)) {
        rowsHtml += cmpRowHtml('Не стартовали (DNS)', a.seasonDNS || 0, b.seasonDNS || 0, 'Меньше — лучше');
    }
    if ((a.seasonDSQ || 0) || (b.seasonDSQ || 0)) {
        rowsHtml += cmpRowHtml('Дисквалификации (DSQ)', a.seasonDSQ || 0, b.seasonDSQ || 0, 'Меньше — лучше');
    }
    rowsHtml += cmpRowHtml(
        'Рекорды круга', a.fastestLaps || 0, b.fastestLaps || 0,
        'Действующие рекорды на трассах текущего сезона'
    );

    container.innerHTML = `
        <div class="cmp-table" style="--cmp-a:${colorA};--cmp-b:${colorB}">
            <div class="cmp-hero">
                ${cmpDriverSideHtml(a)}
                <div class="cmp-vs"><img src="Images/Drivers/vs.svg" alt="VS"></div>
                ${cmpDriverSideHtml(b)}
            </div>
            ${rowsHtml}
        </div>
    `;
};

const openDriversCompareModal = () => {
    if (typeof calculateFastestLapsFromTracks === 'function') calculateFastestLapsFromTracks();
	if (typeof applySeasonStatsToDrivers === 'function') applySeasonStatsToDrivers();
	if (typeof applySeasonPolesToDrivers === 'function') applySeasonPolesToDrivers();
	if (typeof applySeasonDNFsToDrivers === 'function') applySeasonDNFsToDrivers();
	if (typeof applyDebutFromCareer === 'function') applyDebutFromCareer();
	if (typeof applyShortNames === 'function') applyShortNames();

    document.querySelector('.compare-modal-overlay')?.remove();

    const scrollY = window.scrollY;
    Object.assign(document.body.style, {
        position: 'fixed',
        top: `-${scrollY}px`,
        width: '100%',
        overflowY: 'scroll'
    });

    const unlockScroll = () => {
        Object.assign(document.body.style, { position: '', top: '', width: '', overflowY: '' });
        window.scrollTo(0, scrollY);
    };

    const overlay = document.createElement('div');
    overlay.className = 'compare-modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'compare-modal';

    const header = document.createElement('div');
    header.className = 'compare-modal-header';
    header.innerHTML = `<h2 class="compare-modal-title">Сравнение пилотов</h2>`;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'compare-modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Закрыть');
    header.appendChild(closeBtn);

    const toolbar = document.createElement('div');
    toolbar.className = 'cmp-toolbar';

    const sortedDrivers = [...driversData].sort((x, y) => Number(x.number) - Number(y.number));
    const driverOptionsHtml = `<option value="" disabled selected>— Выберите пилота —</option>` +
        sortedDrivers.map(d => `<option value="${d.id}">#${d.number} ${d.name}</option>`).join('');

    const selectA = document.createElement('select');
    selectA.className = 'cmp-toolbar-select';
    selectA.setAttribute('aria-label', 'Первый пилот');
    selectA.innerHTML = driverOptionsHtml;

    const selectB = document.createElement('select');
    selectB.className = 'cmp-toolbar-select';
    selectB.setAttribute('aria-label', 'Второй пилот');
    selectB.innerHTML = driverOptionsHtml;

    const teamSelect = document.createElement('select');
    teamSelect.className = 'cmp-toolbar-select cmp-toolbar-select--team';
    teamSelect.setAttribute('aria-label', 'Пилоты по командам');

    const allTeams = [...new Set(driversData.map(d => d.team))]
        .filter(t => !/^(резерв|reserve)$/i.test(t))
        .sort((a, b) => a.localeCompare(b, 'ru'));

    teamSelect.innerHTML = `<option value="" disabled selected>Команда</option>` +
        allTeams.map(t => `<option value="${t}">${t}</option>`).join('');

    toolbar.append(selectA, teamSelect, selectB);

    const tableContainer = document.createElement('div');
    tableContainer.className = 'compare-table-container';

    const updateCompare = () => {
        renderCompareTable(tableContainer, findDriverById(selectA.value), findDriverById(selectB.value));
    };

    const syncSelects = (source, target) => {
        const srcVal = source.value;
        Array.from(target.options).forEach(opt => {
            opt.disabled = srcVal !== '' && opt.value === srcVal;
        });
        if (target.value === srcVal && srcVal !== '') target.value = '';
    };

    selectA.addEventListener('change', () => {
        syncSelects(selectA, selectB);
        teamSelect.value = '';
        updateCompare();
    });

    selectB.addEventListener('change', () => {
        syncSelects(selectB, selectA);
        teamSelect.value = '';
        updateCompare();
    });

    teamSelect.addEventListener('change', () => {
        const team = teamSelect.value;
        if (!team) return;

        const teamDrivers = driversData.filter(d => d.team === team).sort((a, b) => a.name.localeCompare(b.name, 'ru'));

        Array.from(selectA.options).forEach(o => o.disabled = false);
        Array.from(selectB.options).forEach(o => o.disabled = false);

        if (teamDrivers.length >= 2) {
            selectA.value = teamDrivers[0].id;
            selectB.value = teamDrivers[1].id;
        } else if (teamDrivers.length === 1) {
            selectA.value = teamDrivers[0].id;
            selectB.value = '';
        } else {
            selectA.value = '';
            selectB.value = '';
        }

        syncSelects(selectA, selectB);
        syncSelects(selectB, selectA);
        updateCompare();
    });

    syncSelects(selectA, selectB);
    syncSelects(selectB, selectA);
    updateCompare();

    modal.append(header, toolbar, tableContainer);
    overlay.appendChild(modal);

    const closeModal = () => {
        overlay.remove();
        unlockScroll();
        document.removeEventListener('keydown', escHandler);
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', e => {
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
};
