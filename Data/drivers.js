const driversData = [ 
    {   number: 1, id: "norris",  
        name: "Ландо Норрис",
        namem: "Л. Норрис",
        namef: "Ландо Норрис",
		
        birthPlace:  "Бристоль, Великобритания", country: "gb",
        birthDate: "13.11.1999",
		
        team: "McLaren",
        debut: "2019 - McLaren",        
		career: [
            { team: "McLaren", year: "2019" }
        ],
		
        titles: 1,
        hattricks: 3,
        wins: 13,
        podiums: 48,
        poles: 18,
		
        note: "Выступает под #1 - в качестве действующего чемпиона мира. Собственный номер пилота #4.",
        bio: "Гонщик академии McLaren с детства. Первый подиум завоевал в 2020-м, первую победу — только в 2024-м (Майами). Считается одним из быстрейших пилотов на одном круге, но долго не мог победить из-за невезения и ошибок. В 2024 году стал главным соперником Ферстаппена в борьбе за титул.",
    },
    {   number: 3, id: "verstappen", 
        name: "Макс Ферстаппен",
        namem: "М. Ферстаппен",
        namef: "Макс Эмилиан Ферстаппен",
		
        birthPlace:  "Хасселт, Бельгия", country: "nl",
        birthDate: "30.09.1997",
		
        team: "Red Bull",
        debut: "2015 - Toro Rosso",        
		career: [
            { team: "Toro Rosso", year: "2015" },
            { team: "Red Bull", year: "2016" }
        ],
		
        titles: 4,
        hattricks: 14,
        wins: 71,
        podiums: 131,
        poles: 48,
		
        note: "Самый молодой дебютант в истории F1 - 17 лет",
        bio: "Чемпион мира (2021, 2022, 2023, 2024). Агрессивный, феноменально стабильный. В 2021-м в драматичной финальной гонке отобрал титул у Хэмилтона. В 2023-м установил рекорд — 19 побед за сезон. В 2024-м начал доминировать, но к концу года Red Bull сдал позиции.",
    },
    {   number: 5, id: "bortoletto", 
        name: "Габриэл Бортолето",
        namem: "Г. Бортолето",
        namef: "Габриэль Лоренсо Бортолето Оливейра",
		
        birthPlace:  "Бразилиа, Бразилия", country: "br",
        birthDate: "14.12.2004",
		
        team: "Audi",
        debut: "2025 - Stake",        
		career: [
            { team: "Stake", year: "2025" },
            { team: "Audi", year: "2026" }
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
        namem: "И. Хаджар",
        namef: "Изак Александре Хаджар",
		
        birthPlace:  "Париж, Франция", country: "fr",
        birthDate: "28.09.2004",
		
        team: "Red Bull",
        debut: "2025 - Racing Bulls",        
		career: [
            { team: "Racing Bulls", year: "2025" },
            { team: "Red Bull", year: "2026" }
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
        namem: "Д. Дуэн",
        namef: "Джек Майкл Дуэн",
		
        birthPlace:  "Брисбен, Австралия", country: "au",
        birthDate: "20.01.2003",
		
        team: "Резерв",
		reserve: ["Haas"],
        debut: "2024 - Alpine",        
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
        namem: "П. Гасли",
        namef: "Пьер Жан-Жак Гасли",
		
        birthPlace:  "Руан, Франция", country: "fr",
        birthDate: "07.02.1996",
		
        team: "Alpine",
        debut: "2017 - Toro Rosso",        
		career: [
            { team: "Toro Rosso", year: "2017-2018" },
            { team: "Red Bull", year: "2019"},
            { team: "Toro Rosso", year: "2019", temporarily: true },
            { team: "AlphaTauri", year: "2020-2022" },
            { team: "Alpine", year: "2023" }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 1,
        podiums: 6,
        poles: 0,
		
        note: "",
        bio: "Победитель Гран-при Италии (2020, AlphaTauri) — невероятная победа на фоне хаоса в Монце. Был уволен из Red Bull после полусезона из-за конфликта с Ферстаппеном, восстановил репутацию в Alpine. Технарь, отличный защитник позиции.",
    },
    {   number: 11, id: "perez",
        name: "Серхио Перес",
        namem: "С. Перес",
        namef: "Серхио Мишель Перес Мендоса",
		
        birthPlace:  "Гвадалахара, Мексика", country: "mx",
        birthDate: "26.01.1990",
		
        team: "Cadillac",
        debut: "2011 - Sauber",        
		career: [
            { team: "Sauber", year: "2011-2012" },
            { team: "McLaren", year: "2013" },
            { team: "Force India", year: "2014-2018" },
            { team: "Racing Point", year: "2019-2020" },
            { team: "Red Bull", year: "2021-2024" },
            { team: "Cadillac", year: "2026" }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 6,
        podiums: 39,
        poles: 3,
		
        note: "",
        bio: "Ветеран. Главный специалист по сохранению шин и «король улиц» (победы в Баку, Сингапуре). Стал напарником Ферстаппена в Red Bull с 2021 года, помог ему выиграть первый титул, но к 2024-му резко сдал, едва набирая очки. В 2026-м перешел в новую команду Cadillac в качестве ведущего пилота.",
    },
    {   number: 12, id: "antonelli", 
        name: "Кими Антонелли",
        namem: "К. Антонелли",
        namef: "Андреа Кими Антонелли",
		
        birthPlace: "Болонья, Италия", country: "it",
        birthDate: "25.08.2006",
		
        team: "Mercedes",
        debut: "2025 - Mercedes",        
		career: [
            { team: "Mercedes", year: "2025" }
        ],
		
        titles: 0,
        hattricks: 3,
        wins: 6,
        podiums: 13,
        poles: 6,
		
        note: "Выступает под #12 - номером легендарного Айртона Сенны",
        bio: "Вундеркинд, которого лично выбрал Тото Вольфф на замену Хэмилтону. Пропустил F3, перейдя в F1 сразу из Формулы-2 (чемпион 2024). Огромное давление, сравнивают с ранним Ферстаппеном.",
    },
    {   number: 14, id: "alonso",
        name: "Фернандо Алонсо",
        namem: "Ф. Алонсо",
        namef: "Фернандо Алонсо Диас",
		
        birthPlace:  "Овьедо, Испания", country: "es",
        birthDate: "29.07.1981",
		
        team: "Aston Martin",
        debut: "2001 - Minardi",        
		career: [
            { team: "Minardi", year: "2001" },
            { team: "Renault", year: "2003-2006" },
            { team: "McLaren", year: "2007" },
            { team: "Renault", year: "2008-2009" },
            { team: "Ferrari", year: "2010-2014" },
            { team: "McLaren", year: "2015-2018" },
            { team: "Alpine", year: "2021-2022" },
            { team: "Aston Martin", year: "2023" }
        ],
		
        titles: 2,
        hattricks: 5,
        wins: 32,
        podiums: 106,
        poles: 22,
		
        note: "Самый опытный пилот в истории, более 400 Гран-при.",
        bio: "Двукратный чемпион (2005, 2006). Известен борьбой с Феттелем, Хэмилтоном (Инцидент в «Воротах гаража» 2007) и своей токсичностью в менеджменте. До сих пор один из лучших на старте.",
    },
    {   number: 16, id: "leclerc",
        name: "Шарль Леклер",
        namem: "Ш. Леклер",
        namef: "Шарль Марк Эрве Персеваль Леклер",
		
        birthPlace:  "Монте-Карло, Монако", country: "mc",
        birthDate: "16.10.1997",
		
        team: "Ferrari",
        debut: "2018 - Sauber",        
		career: [
            { team: "Sauber", year: "2018" },
            { team: "Ferrari", year: "2019" }
        ],
		
        titles: 0,
        hattricks: 2,
        wins: 9,
        podiums: 54,
        poles: 27,
		
        note: "",
        bio: "Гонщик Ferrari с 2019 года. «Король поулов» — феномен в квалификации. Много раз ошибался под давлением, но выиграл несколько выдающихся гонок (Монца-2019, Монако-2024). Главная надежда Ferrari на титул.",
    },
    {   number: 18, id: "stroll",
        name: "Лэнс Стролл",
        namem: "Л. Стролл",
        namef: "Лэнс Якоб Струлович",
		
        birthPlace:  "Монреаль, Канада", country: "ca",
        birthDate: "29.10.1998",
		
        team: "Aston Martin",
        debut: "2017 - Williams",        
		career: [
            { team: "Williams", year: "2017-2018" },
            { team: "Racing Point", year: "2019-2020" },
            { team: "Aston Martin", year: "2021" }
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
        namem: "Ю. Цунода",
        namef: "Юки Цунода",
		
        birthPlace:  "Канагава, Япония", country: "jp",
        birthDate: "11.05.2000",
		
        team: "Резерв",
		reserve: ["Red Bull", "Racing Bulls"],
        debut: "2021 - AlphaTauri",        
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
        namem: "А. Албон",
        namef: "Александр Филипп Албон Ансусинья",
		
        birthPlace:  "Лондон, Великобритания", country: "th",
        birthDate: "23.03.1996",
		
        team: "Williams",
        debut: "2019 - Toro Rosso",        
		career: [
            { team: "Toro Rosso", year: "2019" },
            { team: "Red Bull", year: "2019-2020" },
            { team: "Williams", year: "2022" }
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
        namem: "Г. Чжоу",
        namef: "Гуаньюй Чжоу",
		
        birthPlace:  "Шанхай, Китай", country: "cn",
        birthDate: "30.05.1999",
		
        team: "Резерв",
		reserve: ["Cadillac"],
        debut: "2022 - Alfa Romeo",        
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
        namem: "Н. Хюлькенберг",
        namef: "Николас Хюлькенберг",
		
        birthPlace:  "Эммерих-на-Рейне, Германия", country: "de",
        birthDate: "19.08.1987",
		
        team: "Audi",
        debut: "2010 - Williams",        
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
            { team: "Audi", year: "2026" }
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
        namem: "Л. Лоусон",
        namef: "Лиам Джаред Лоусон",
		
        birthPlace:  "Хастингс, Новая Зеландия", country: "nz",
        birthDate: "11.02.2002",
		
        team: "Racing Bulls",
        debut: "2023 - AlphaTauri",        
		career: [
            { team: "AlphaTauri", year: "2023", temporarily: true },
            { team: "Racing Bulls", year: "2024", temporarily: true },
            { team: "Red Bull", year: "2025", temporarily: true },
            { team: "Racing Bulls", year: "2025" },
            { team: "Red Bull", year: "2026", temporarily: true },
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "",
        bio: "Агрессивный, бескомпромиссный. Считался основным претендентом на место Переса в Red Bull. В 2024-м провел несколько гонок и произвел впечатление (особенно борьба с Ферстаппеном в тренировках).",
    },
    {   number: 31, id: "ocon",
        name: "Эстебан Окон",
        namem: "Э. Окон",
        namef: "Эстебан Хосе Жан-Пьер Окон-Кельфан",
		
        birthPlace:  "Эвре, Франция", country: "fr",
        birthDate: "17.09.1996",
		
        team: "Haas",
        debut: "2016 - Manor",        
		career: [
            { team: "Manor", year: "2016", temporarily: true },
            { team: "Force India", year: "2017-2018" },
            { team: "Racing Point", year: "2018" },
            { team: "Renault", year: "2020" },
            { team: "Alpine", year: "2021-2024" },
            { team: "Haas", year: "2025" }
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
        namem: "А. Линдблад",
        namef: "Арвид Ананд Олоф Линдблад",
		
        birthPlace:  "Лондон, Англия", country: "gb",
        birthDate: "08.08.2007",
		
        team: "Racing Bulls",
        debut: "2026 - Racing Bulls",        
		career: [
            { team: "Racing Bulls", year: "2026" }
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
        namem: "Ф. Колапинто",
        namef: "Франко Алехандро Колапинто",
		
        birthPlace:  "Буэнос-Айрес, Аргентина", country: "ar",
        birthDate: "27.05.2003",
		
        team: "Alpine",
        debut: "2024 - Williams",        
		career: [
            { team: "Williams", year: "2024-2025", temporarily: true },
            { team: "Alpine", year: "2025-2026" },
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
        namem: "Л. Хэмилтон",
        namef: "Сэр Льюис Карл Дэвидсон Хэмилтон",
		
        birthPlace:  "Стивенидж, Великобритания", country: "gb",
        birthDate: "07.01.1985",
		
        team: "Ferrari",
        debut: "2007 - McLaren",        
		career: [
            { team: "McLaren", year: "2007-2012" },
            { team: "Mercedes", year: "2013-2024" },
            { team: "Ferrari", year: "2025" }
        ],
		
        titles: 7,
        hattricks: 19,
        wins: 106,
        podiums: 207,
        poles: 104,
		
        note: "Рекордсмен по победам, поулам, подиумам.",
        bio: "7-кратный чемпион (2008, 2014, 2015, 2017, 2018, 2019, 2020). После драки с Ферстаппеном-2021 и провала нового болида Mercedes ушел в Ferrari на 2025 год. Легенда.",
    },
    {   number: 55, id: "sainz",
        name: "Карлос Сайнс",
        namem: "К. Сайнс",
        namef: "Карлос Сайнс-Васкес де Кастро",
		
        birthPlace:  "Мадрид, Испания", country: "es",
        birthDate: "01.09.1994",
		
        team: "Williams",
        debut: "2015 - Toro Rosso",        
		career: [
            { team: "Toro Rosso", year: "2015-2017" },
            { team: "Renault", year: "2017", temporarily: true },
            { team: "Renault", year: "2018" },
            { team: "McLaren", year: "2019-2020" },
            { team: "Ferrari", year: "2021-2024" },
            { team: "Williams", year: "2025" }
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
        namem: "Д. Расселл",
        namef: "Джордж Уильям Расселл",
		
        birthPlace:  "Кингс-Линн, Великобритания", country: "gb",
        birthDate: "15.02.1998",
		
        team: "Mercedes",
        debut: "2019 - Williams",        
		career: [
            { team: "Williams", year: "2019-2020" },
            { team: "Mercedes", year: "2020", temporarily: true },
            { team: "Williams", year: "2021" },
            { team: "Mercedes", year: "2022" }
        ],
		
        titles: 0,
        hattricks: 1,
        wins: 7,
        podiums: 30,
        poles: 12,
		
        note: "Лидер гильдии пилотов.",
        bio: "Победитель Гран-при Сан-Паулу (2022) — первая победа Mercedes после долгого перерыва. Очень быстр, но иногда ошибается под давлением. Заменил Боттаса и стал ровней Хэмилтону.",
    },
    {   number: 77, id: "bottas",
        name: "Валттери Боттас",
        namem: "В. Боттас",
        namef: "Валттери Виктор Боттас",
		
        birthPlace:  "Настола, Финляндия", country: "fi",
        birthDate: "28.08.1989",
		
        team: "Cadillac",
        debut: "2013 - Williams",        
		career: [
            { team: "Williams", year: "2013-2016" },
            { team: "Mercedes", year: "2017-2021" },
            { team: "Alfa Romeo", year: "2022-2023" },
            { team: "Stake", year: "2024" },
            { team: "Cadillac", year: "2026" }
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
        namem: "О. Пиастри",
        namef: "Оскар Джек Пиастри",
		
        birthPlace:  "Мельбурн, Австралия", country: "au",
        birthDate: "06.04.2001",
		
        team: "McLaren",
        debut: "2023 - McLaren",        
		career: [
            { team: "McLaren", year: "2023" }
        ],
		
        titles: 0,
        hattricks: 3,
        wins: 9,
        podiums: 28,
        poles: 6,
		
        note: "Выиграл F3 и F2 подряд.",
        bio: "Первую победу одержал в Венгрии-2024, обогнав Норриса по команде. Многие считают его будущим чемпионом.",
    },
    {   number: 87, id: "bearman",
        name: "Оливер Берман",
        namem: "О. Берман",
        namef: "Оливер Джеймс Берман",
		
        birthPlace:  "Челмсфорд, Великобритания", country: "gb",
        birthDate: "08.05.2005",
		
        team: "Haas",
        debut: "2024 - Ferrari",        
		career: [
            { team: "Ferrari", year: "2024", temporarily: true },
            { team: "Haas", year: "2024", temporarily: true },
            { team: "Haas", year: "2025" }
        ],
		
        titles: 0,
        hattricks: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
		
        note: "",
        bio: "Самый молодой пилот Ferrari в истории (дебют в 18 лет в Джидде, сразу набрал очки). В 2025-м получил постоянное место в Haas. Быстр, умен, жёсток. Воспитанник Ferrari Driver Academy.",
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
    
    // Кнопка фильтров (только для мобильной версии)
    const filterToggleBtn = document.createElement('button');
    filterToggleBtn.className = 'filter-toggle-btn';
    filterToggleBtn.innerHTML = '⚙';
    
    // Кнопка сброса
    const resetBtn = document.createElement('button');
    resetBtn.className = 'filter-reset-btn';
    resetBtn.textContent = 'Сбросить';
    
    // Разделитель
    const divider1 = document.createElement('hr');
    divider1.className = 'filter-divider';
    
    // Заголовок "Команды"
    const filterTitle = document.createElement('div');
    filterTitle.className = 'filter-section-title';
    filterTitle.textContent = 'Команды';
    
    // Контейнер чекбоксов команд (скрыт на мобильной версии)
    const checkboxesContainer = document.createElement('div');
    checkboxesContainer.className = 'filter-checkboxes';
    
    // Получаем список команд (исключая резерв)
    const teams = [...new Set(driversData.map(d => d.team))];
    const regularTeams = teams
        .filter(t => t.toLowerCase() !== 'резерв' && 
                     t.toLowerCase() !== 'reserve')
        .sort((a, b) => a.localeCompare(b, 'ru'));
    
    // Чекбокс ВСЕ
    const allCheckbox = createCheckbox('all', 'ВСЕ', true, checkboxesContainer);
    
    // Чекбоксы команд
    const teamCheckboxes = {};
    regularTeams.forEach(team => {
        const cb = createCheckbox(team, team, false, checkboxesContainer);
        teamCheckboxes[team] = cb;
    });
    
    // ===== РАЗДЕЛИТЕЛЬ ПЕРЕД РЕЗЕРВИСТАМИ =====
    const dividerReserve = document.createElement('hr');
    dividerReserve.className = 'filter-divider filter-divider-reserve';
    
    // Чекбокс "Резервисты"
    const reserveContainer = document.createElement('div');
    reserveContainer.className = 'filter-checkboxes filter-reserve-section';
    const reserveCheckbox = createCheckbox('reserve', 'Резервисты', false, reserveContainer);
    
    // ===== РАЗДЕЛИТЕЛЬ ПЕРЕД ЧЕМПИОНАМИ =====
    const divider2 = document.createElement('hr');
    divider2.className = 'filter-divider filter-divider-champ';
    
    // Чекбокс "Чемпионы мира"
    const champsContainer = document.createElement('div');
    champsContainer.className = 'filter-checkboxes';
    const champsCheckbox = createCheckbox('champs', 'Чемпионы мира', false, champsContainer);
    
    // ==============================================
    // МОБИЛЬНАЯ ПОПАПКА С ЧЕКБОКСАМИ
    // ==============================================
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'filter-checkboxes-popup';
    
    const popupInner = document.createElement('div');
    popupInner.className = 'filter-checkboxes-popup-inner';
    
    // Заголовок попапки
    const popupHeader = document.createElement('div');
    popupHeader.className = 'filter-popup-header';
    
    const popupTitle = document.createElement('span');
    popupTitle.className = 'filter-popup-title';
    popupTitle.textContent = 'Фильтры';
    
    const popupClose = document.createElement('button');
    popupClose.className = 'filter-popup-close';
    popupClose.innerHTML = '&times;';
    popupClose.setAttribute('aria-label', 'Закрыть фильтры');
    
    popupHeader.appendChild(popupTitle);
    popupHeader.appendChild(popupClose);
    popupInner.appendChild(popupHeader);
    
    // Секция "Команды"
    const popupTeamsTitle = document.createElement('div');
    popupTeamsTitle.className = 'filter-popup-section-title';
    popupTeamsTitle.textContent = 'Команды';
    popupInner.appendChild(popupTeamsTitle);
    
    const popupCheckboxesContainer = document.createElement('div');
    popupCheckboxesContainer.className = 'filter-popup-checkboxes';
    
    // Клонируем чекбоксы для попапки
    const popupAllCheckbox = createCheckbox('all', 'ВСЕ', true, popupCheckboxesContainer);
    const popupTeamCheckboxes = {};
    regularTeams.forEach(team => {
        const cb = createCheckbox(team, team, false, popupCheckboxesContainer);
        popupTeamCheckboxes[team] = cb;
    });
    
    popupInner.appendChild(popupCheckboxesContainer);
    
    // ===== РАЗДЕЛИТЕЛЬ В ПОПАПКЕ =====
    const popupDivider1 = document.createElement('hr');
    popupDivider1.className = 'filter-popup-divider';
    popupInner.appendChild(popupDivider1);
    
    // Секция "Резервисты" в попапке
    const popupReserveContainer = document.createElement('div');
    popupReserveContainer.className = 'filter-popup-section';
    const popupReserveCheckbox = createCheckbox('reserve', 'Резервисты', false, popupReserveContainer);
    popupInner.appendChild(popupReserveContainer);
    
    // ===== РАЗДЕЛИТЕЛЬ В ПОПАПКЕ =====
    const popupDivider2 = document.createElement('hr');
    popupDivider2.className = 'filter-popup-divider';
    popupInner.appendChild(popupDivider2);
    
    // Секция "Чемпионы мира" в попапке
    const popupChampsContainer = document.createElement('div');
    popupChampsContainer.className = 'filter-popup-section';
    const popupChampsCheckbox = createCheckbox('champs', 'Чемпионы мира', false, popupChampsContainer);
    popupInner.appendChild(popupChampsContainer);
    
    popupOverlay.appendChild(popupInner);
    
    // Собираем панель
    panel.appendChild(searchInput);
    panel.appendChild(filterToggleBtn);
    panel.appendChild(resetBtn);
    panel.appendChild(divider1);
    panel.appendChild(filterTitle);
    panel.appendChild(checkboxesContainer);
    panel.appendChild(dividerReserve);
    panel.appendChild(reserveContainer);
    panel.appendChild(divider2);
    panel.appendChild(champsContainer);
    panel.appendChild(popupOverlay);
    
    // Состояние фильтров
    let activeTeamFilters = new Set(regularTeams);
    let champsOnly = false;
    let showReserve = false;
    let isAllSelected = true;
    
    // Функция синхронизации чекбоксов
    function syncCheckboxes(source, target, sourceAll, targetAll) {
        Object.keys(source).forEach(team => {
            if (target[team]) {
                target[team].checked = source[team].checked;
            }
            if (source[team]) {
                source[team].checked = target[team].checked;
            }
        });
        
        if (sourceAll && targetAll) {
            sourceAll.checked = targetAll.checked;
        }
    }
    
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        let filtered = driversData;
        
        // Фильтр по командам (основные команды)
        if (!showReserve) {
            // Исключаем резервистов
            filtered = filtered.filter(driver => 
                driver.team.toLowerCase() !== 'резерв' && 
                driver.team.toLowerCase() !== 'reserve'
            );
            
            // Фильтруем по выбранным командам
            const isAllTeamsSelected = activeTeamFilters.size === regularTeams.length;
            
            if (!isAllTeamsSelected) {
                filtered = filtered.filter(driver => activeTeamFilters.has(driver.team));
            }
            
        } else {
            // Если включены резервисты
            const reserveDrivers = filtered.filter(driver => 
                driver.team.toLowerCase() === 'резерв' || 
                driver.team.toLowerCase() === 'reserve'
            );
            
            // Основные пилоты с фильтром по командам
            const isAllTeamsSelected = activeTeamFilters.size === regularTeams.length;
            let mainDrivers;
            
            if (isAllTeamsSelected) {
                mainDrivers = filtered.filter(driver => 
                    driver.team.toLowerCase() !== 'резерв' && 
                    driver.team.toLowerCase() !== 'reserve'
                );
            } else {
                mainDrivers = filtered.filter(driver => 
                    driver.team.toLowerCase() !== 'резерв' && 
                    driver.team.toLowerCase() !== 'reserve' &&
                    activeTeamFilters.has(driver.team)
                );
            }
            
            filtered = [...mainDrivers, ...reserveDrivers];
        }
        
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
    
    function handleCheckboxChange(e, sourceCheckboxes, sourceAll, sourceTeamCheckboxes, isPopup) {
        if (e.target.type === 'checkbox') {
            const checkbox = e.target;
            const value = checkbox.dataset.filterValue;
            const targetCheckboxes = isPopup ? popupTeamCheckboxes : teamCheckboxes;
            const targetAll = isPopup ? popupAllCheckbox : allCheckbox;
            const targetChamps = isPopup ? popupChampsCheckbox : champsCheckbox;
            const targetReserve = isPopup ? popupReserveCheckbox : reserveCheckbox;
            const sourceChampsCheckbox = isPopup ? popupChampsCheckbox : champsCheckbox;
            
            // Обработка чекбокса "Резервисты"
            if (value === 'reserve') {
                showReserve = checkbox.checked;
                if (targetReserve) targetReserve.checked = checkbox.checked;
                applyFilters();
                return;
            }
            
            if (value === 'all') {
                if (checkbox.checked) {
                    // Сбрасываем выбор команд
                    Object.values(sourceTeamCheckboxes).forEach(cb => cb.checked = false);
                    Object.values(targetCheckboxes).forEach(cb => cb.checked = false);
                    activeTeamFilters = new Set(regularTeams);
                    isAllSelected = true;
                    
                    // Сбрасываем фильтр "Чемпионы мира"
                    sourceChampsCheckbox.checked = false;
                    targetChamps.checked = false;
                    champsOnly = false;
                } else {
                    // Если "ВСЕ" выключен, проверяем есть ли выбранные команды
                    const anyTeamChecked = Object.values(sourceTeamCheckboxes).some(cb => cb.checked);
                    if (!anyTeamChecked) {
                        // Если нет выбранных команд - включаем "ВСЕ" обратно
                        checkbox.checked = true;
                        if (targetAll) targetAll.checked = true;
                        isAllSelected = true;
                    } else {
                        isAllSelected = false;
                    }
                }
                
                syncCheckboxes(sourceTeamCheckboxes, targetCheckboxes, sourceAll, targetAll);
                applyFilters();
                return;
            }
            
            // ЛОГИКА ДЛЯ КОМАНДНЫХ ЧЕКБОКСОВ
            // Собираем выбранные команды
            const selectedTeams = new Set();
            Object.entries(sourceTeamCheckboxes).forEach(([team, cb]) => {
                if (cb.checked) {
                    selectedTeams.add(team);
                }
            });
            
            // Обновляем состояние
            if (selectedTeams.size === 0) {
                // Если нет выбранных команд - включаем "ВСЕ"
                sourceAll.checked = true;
                if (targetAll) targetAll.checked = true;
                activeTeamFilters = new Set(regularTeams);
                isAllSelected = true;
                
                // Сбрасываем фильтр "Чемпионы мира"
                sourceChampsCheckbox.checked = false;
                if (targetChamps) targetChamps.checked = false;
                champsOnly = false;
            } else {
                // Если есть выбранные команды - выключаем "ВСЕ"
                sourceAll.checked = false;
                if (targetAll) targetAll.checked = false;
                activeTeamFilters = new Set(selectedTeams);
                isAllSelected = false;
            }
            
            syncCheckboxes(sourceTeamCheckboxes, targetCheckboxes, sourceAll, targetAll);
            applyFilters();
        }
    }
    
    // Обработчик для "Чемпионы мира"
    function handleChampsChange(sourceCheckbox, targetCheckbox) {
        champsOnly = sourceCheckbox.checked;
        if (targetCheckbox) targetCheckbox.checked = sourceCheckbox.checked;
        applyFilters();
    }
    
    // Назначаем обработчики для основной панели
    checkboxesContainer.addEventListener('change', (e) => {
        handleCheckboxChange(e, teamCheckboxes, allCheckbox, teamCheckboxes, false);
    });
    
    champsCheckbox.addEventListener('change', () => {
        handleChampsChange(champsCheckbox, popupChampsCheckbox);
    });
    
    reserveCheckbox.addEventListener('change', () => {
        showReserve = reserveCheckbox.checked;
        popupReserveCheckbox.checked = reserveCheckbox.checked;
        applyFilters();
    });
    
    // Назначаем обработчики для попапки
    popupCheckboxesContainer.addEventListener('change', (e) => {
        handleCheckboxChange(e, popupTeamCheckboxes, popupAllCheckbox, popupTeamCheckboxes, true);
    });
    
    popupChampsCheckbox.addEventListener('change', () => {
        handleChampsChange(popupChampsCheckbox, champsCheckbox);
    });
    
    popupReserveCheckbox.addEventListener('change', () => {
        showReserve = popupReserveCheckbox.checked;
        reserveCheckbox.checked = popupReserveCheckbox.checked;
        applyFilters();
    });
    
    // Поиск
    searchInput.addEventListener('input', applyFilters);
    
    // Кнопка фильтров - открывает попапку
    filterToggleBtn.addEventListener('click', () => {
        popupOverlay.classList.toggle('active');
        filterToggleBtn.classList.toggle('active');
    });
    
    // Закрытие попапки
    popupClose.addEventListener('click', () => {
        popupOverlay.classList.remove('active');
        filterToggleBtn.classList.remove('active');
    });
    
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('active');
            filterToggleBtn.classList.remove('active');
        }
    });
    
    // Сброс
    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        
        // Сбрасываем основную панель
        allCheckbox.checked = true;
        Object.values(teamCheckboxes).forEach(cb => cb.checked = false);
        champsCheckbox.checked = false;
        reserveCheckbox.checked = false;
        
        // Сбрасываем попапку
        popupAllCheckbox.checked = true;
        Object.values(popupTeamCheckboxes).forEach(cb => cb.checked = false);
        popupChampsCheckbox.checked = false;
        popupReserveCheckbox.checked = false;
        
        activeTeamFilters = new Set(regularTeams);
        champsOnly = false;
        showReserve = false;
        isAllSelected = true;
        
        // Закрываем попапку
        popupOverlay.classList.remove('active');
        filterToggleBtn.classList.remove('active');
        
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
    
    const containerWidth = container.offsetWidth || container.parentElement.offsetWidth || 1200;
    const cardMinWidth = 190;
    const gap = 10;
    const cols = Math.max(1, Math.floor((containerWidth + gap) / (cardMinWidth + gap)));
    
    cards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.92) translateY(15px)';
        card.style.transition = 'none';
    });
    
    requestAnimationFrame(() => {
        cards.forEach((card, index) => {
            const rowIndex = Math.floor(index / cols);
            const delay = rowIndex * 80;
            
            card.style.transition = `opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`;
            
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';
            });
        });
    });
}

function getCurrentWorldChampion() {
    return driversData.find(driver => driver.number === 1);
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
    
    const sortedDrivers = [...drivers].sort((a, b) => Number(a.number) - Number(b.number));
    const currentChampion = getCurrentWorldChampion();
    const championId = currentChampion ? currentChampion.id : null;
    
    sortedDrivers.forEach(driver => {
        const card = document.createElement('div');
        card.className = 'driver-card';
        card.style.setProperty('--team-color', getTeamColor(driver.team));
        
        // Добавляем класс для чемпиона
        if (driver.id === championId) {
            card.classList.add('world-champion');
        }
        
        // Добавляем класс для резервиста
        if (driver.team.toLowerCase() === 'резерв' || driver.team.toLowerCase() === 'reserve') {
            card.classList.add('reserve-driver');
        }
        
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

        // Проверяем, является ли пилот резервистом
        const isReserve = driver.team.toLowerCase() === 'резерв' || driver.team.toLowerCase() === 'reserve';
        
        if (isReserve) {
            // Для резервистов показываем "Резерв" вместо логотипа команды
            const reserveLabel = document.createElement('span');
            reserveLabel.className = 'driver-reserve-label';
            reserveLabel.textContent = 'Резерв';
            teamDiv.appendChild(reserveLabel);
        } else {
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
        }
        
        card.appendChild(portraitWrapper);
        card.appendChild(nameDiv);
        card.appendChild(divider);
        card.appendChild(teamDiv);
        
        card.addEventListener('click', () => openDriverModal(driver));
        
        container.appendChild(card);
    });
    
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

function createCareerBlock(careerData) {
    if (!careerData || careerData.length === 0) {
        return null;
    }

    const container = document.createElement('div');
    container.className = 'modal-career-container';

    const title = document.createElement('h3');
    title.className = 'modal-career-title';
    title.textContent = 'Карьерный путь';
    container.appendChild(title);

    const careerList = document.createElement('div');
    careerList.className = 'modal-career-list';

    careerData.forEach((item, index) => {
        const careerItem = document.createElement('div');
        careerItem.className = 'modal-career-item';
        careerItem.style.setProperty('--career-delay', `${index * 100}ms`);
        
        // 👇 Устанавливаем цвет команды для бордюра
        const teamColor = getTeamColor(item.team);
        careerItem.style.setProperty('--team-color', teamColor);
        
        // Добавляем data-атрибут для специальных стилей
        const teamSlug = item.team.toLowerCase().replace(/\s+/g, '-');
        careerItem.setAttribute('data-team', teamSlug);

        // Логотип команды
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

        // Информация (название + год)
        const info = document.createElement('div');
        info.className = 'modal-career-info';

        const teamName = document.createElement('div');
        teamName.className = 'modal-career-team-name';
        teamName.textContent = item.team;
        
        // 👇 Если временный период - добавляем класс для жёлтого текста
        if (item.temporarily) {
            teamName.classList.add('career-temporary');
        }

        const year = document.createElement('div');
        year.className = 'modal-career-year';
        year.textContent = item.year;

        info.appendChild(teamName);
        info.appendChild(year);

        careerItem.appendChild(logoWrapper);
        careerItem.appendChild(info);

        // Стрелка-разделитель (кроме последнего)
        if (index < careerData.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'modal-career-arrow';
            arrow.innerHTML = '>';
            careerList.appendChild(careerItem);
            careerList.appendChild(arrow);
        } else {
            careerList.appendChild(careerItem);
        }
    });

    container.appendChild(careerList);
    return container;
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

	const isReserve = driver.team.toLowerCase() === 'резерв' || driver.team.toLowerCase() === 'reserve';

	if (isReserve && driver.reserve && driver.reserve.length > 0) {
		// Для резервистов НЕ добавляем ничего в teamRow
		// Создаем отдельный контейнер для резерва
		const reserveContainer = document.createElement('div');
		reserveContainer.className = 'modal-reserve-teams';
		
		const reserveLabel = document.createElement('span');
		reserveLabel.className = 'modal-reserve-label';
		reserveLabel.textContent = 'Резерв:';
		reserveContainer.appendChild(reserveLabel);
		
		const teamsList = document.createElement('div');
		teamsList.className = 'modal-reserve-teams-list';
		
		driver.reserve.forEach(teamName => {
			const teamItem = document.createElement('div');
			teamItem.className = 'modal-reserve-team-item';
			
			// Устанавливаем цвет команды для акцента при hover
			const teamColor = getTeamColor(teamName);
			teamItem.style.setProperty('--team-color', teamColor);
			
			const teamLogo = document.createElement('img');
			teamLogo.src = getTeamLogo(teamName);
			teamLogo.alt = teamName;
			teamLogo.className = 'modal-team-logo';
			teamLogo.onerror = () => { teamLogo.style.display = 'none'; };
			
			const teamLabel = document.createElement('span');
			teamLabel.textContent = teamName;
			
			teamItem.appendChild(teamLogo);
			teamItem.appendChild(teamLabel);
			
			teamItem.addEventListener('click', (e) => {
				e.stopPropagation();
				const teamData = getTeamData(teamName);
				if (teamData) {
					openTeamModal(teamData);
				}
			});
			
			teamsList.appendChild(teamItem);
		});
		
		reserveContainer.appendChild(teamsList);
		
		// teamRow скрываем
		teamRow.style.display = 'none';
		
		// Добавляем сначала nameRow, потом teamRow (скрытый), потом reserveContainer
		nameTeamContainer.appendChild(nameRow);
		nameTeamContainer.appendChild(teamRow);
		nameTeamContainer.appendChild(reserveContainer);
	} else {
		// Обычное отображение команды
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
	}
    
    block1.appendChild(modalNumber);
    block1.appendChild(nameTeamContainer);
    
    const block2 = document.createElement('div');
    block2.className = 'modal-block';

    const row1 = document.createElement('div');
    row1.className = 'modal-details-row';
    row1.innerHTML = `
        <div class="detail-cell">
            <span class="detail-label">Дата рождения</span>
            <span class="detail-value">${driver.birthDate} (${calculateAge(driver.birthDate)})</span>
        </div>
        <div class="detail-cell">
            <span class="detail-label">Полное имя</span>
            <span class="detail-value">${driver.namef}</span>
        </div>
    `;

    const row2 = document.createElement('div');
    row2.className = 'modal-details-row';
    row2.innerHTML = `
        <div class="detail-cell">
            <span class="detail-label">Дебют</span>
            <span class="detail-value">${driver.debut}</span>
        </div>
        <div class="detail-cell">
            <span class="detail-label">Место рождения</span>
            <span class="detail-value">${driver.birthPlace}</span>
        </div>
    `;

    block2.appendChild(row1);
    block2.appendChild(row2);
    
	// Блок статистики
	const block3 = document.createElement('div');
	block3.className = 'modal-block';

	// Функция склонения для числительных
	function declension(num, titles) {
		// titles: [именительный, родительный, множественный]
		// Например: ['Титул', 'Титула', 'Титулов']
		const n = Math.abs(num) % 100;
		const n1 = n % 10;
		if (n > 10 && n < 20) {
			return titles[2]; // множественный
		}
		if (n1 > 1 && n1 < 5) {
			return titles[1]; // родительный
		}
		if (n1 === 1) {
			return titles[0]; // именительный
		}
		return titles[2];
	}

	// Настройка склонений для каждой метрики
	const declensions = {
		titles: ['Титул', 'Титула', 'Титулов'],
		wins: ['Победа', 'Победы', 'Побед'],
		hattricks: ['Хэт-Трик', 'Хэт-Трика', 'Хэт-Триков'],
		podiums: ['Подиум', 'Подиума', 'Подиумов'],
		poles: ['Поул', 'Поула', 'Поулов'],
		fines: ['Штраф', 'Штрафа', 'Штрафов']
	};

	const statsRow = document.createElement('div');
	statsRow.className = 'modal-stats-row';
	statsRow.innerHTML = `
		<div class="stat-cell">
			<span class="stat-number">${driver.titles}</span>
			<span class="stat-text">${declension(driver.titles, declensions.titles)}</span>
		</div>
		<div class="stat-cell">
			<span class="stat-number">${driver.wins}</span>
			<span class="stat-text">${declension(driver.wins, declensions.wins)}</span>
		</div>
		<div class="stat-cell">
			<span class="stat-number">${driver.hattricks}</span>
			<span class="stat-text">${declension(driver.hattricks, declensions.hattricks)}</span>
		</div>
		<div class="stat-cell">
			<span class="stat-number">${driver.podiums}</span>
			<span class="stat-text">${declension(driver.podiums, declensions.podiums)}</span>
		</div>
		<div class="stat-cell">
			<span class="stat-number">${driver.poles}</span>
			<span class="stat-text">${declension(driver.poles, declensions.poles)}</span>
		</div>
		<div class="stat-cell">
			<span class="stat-number">${driver.fines || 0}<span class="gp-year-suffix">/12</span></span>
			<span class="stat-text">${declension(driver.fines || 0, declensions.fines)}</span>
		</div>
	`;
	block3.appendChild(statsRow);
    
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

    if (driver.note) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'modal-note-compact';
        noteDiv.innerHTML = `
            <span class="note-compact-text">${driver.note}</span>
        `;
        bioSection.appendChild(noteDiv);
    }

    // ===== БЛОК КАРЬЕРНОГО ПУТИ =====
    const careerBlock = createCareerBlock(driver.career);
    if (careerBlock) {
        bioSection.appendChild(careerBlock);
    }
    // ===== КОНЕЦ БЛОКА =====
    
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

function getTeamLogo(teamName) {
    const slug = teamName.toLowerCase().replace(/\s+/g, '-');
    
    // Список архивных команд
    const archiveTeams = [
        'toro-rosso', 'sauber', 'alphatauri', 'force-india', 'racing-point', 
        'minardi', 'manor', 'renault', 'alfa-romeo', 'stake'
    ];
    
    if (archiveTeams.includes(slug)) {
        return `Images/Teams/Archive/${slug}.png`;
    }
    
    return `Images/Teams/${slug}-m.png`;
}

function getTeamColor(teamName) {
    const slug = teamName.toLowerCase().replace(/\s+/g, '-');
    
    // Проверяем архивные команды
    if (archiveTeamColors[slug]) {
        return archiveTeamColors[slug];
    }
    
    // Проверяем действующие команды
    const team = teamsData.find(t => t.shortName === teamName);
    return team ? team.color : '#FFFFFF';
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
        'my': 'Малайзия',
        'nz': 'Новая Зеландия',
        'pl': 'Польша',
		'ch': 'Швейцария',
    };
    return countries[code] || code.toUpperCase();
}