const teamsData = {
            "mclaren": {
                "id": "modal1",
                "namef": "McLaren F1 Team",
		"name": "McLaren",
                "logo": "McLaren.png",
                "miniLogo": "McLaren-m.png",
                "base": "Уокинг, Великобритания",
                "director": "Андреа Стелла",
                "car": "MCL39",
                "engine": "Mercedes",
                "drivers": [
                    {"number": "81", "name": "Оскар Пиастри", "flag": "au.svg", "state": "Австралия"},
                    {"number": "4", "name": "Ландо Норис", "flag": "gb.svg", "state": "Великобритания"}
                ]
            },
            "ferrari": {
                "id": "modal2",
                "namef": "Scuderia Ferrari HP",
                "name": "Ferrari",
                "logo": "Ferrari.svg",
                "miniLogo": "Ferrari-m.png",
                "base": "Маранелло, Италия",
                "director": "Фредерик Вассёр",
                "car": "SF-25",
                "engine": "Ferrari",
                "drivers": [
                    {"number": "16", "name": "Шарль Леклер", "flag": "mc.svg", "state": "Манако"},
                    {"number": "44", "name": "Льюис Хэмильтон", "flag": "gb.svg", "state": "Великобритания"}
                ]
            },
            "mercedes": {
                "id": "modal3",
                "namef": "Mercedes-AMG Petronas F1 Team",
                "name": "Mercedes",
                "logo": "Mercedes.avif",
                "miniLogo": "Mercedes-m.png",
                "base": "Брэкли, Великобритания",
                "director": "Тото Вольфф",
                "car": "W16 E Perfomanc",
                "engine": "Mercedes",
                "drivers": [
                    {"number": "63", "name": "Джордж Расселл", "flag": "gb.svg", "state": "Великобритания"},
                    {"number": "12", "name": "Кими Антонелли", "flag": "it.svg", "state": "Италия"}
                ]
            },
            "redbull": {
                "id": "modal4",
                "namef": "Oracle Red Bull Racing",
                "name": "Red Bull",
                "logo": "Red Bull.png",
                "miniLogo": "Red Bull-m.png",
                "base": "Милтон-Кинс, Великобритания",
                "director": "Лоран Мекис",
                "car": "RB21",
                "engine": "Honda RBPT",
                "drivers": [
                    {"number": "1", "name": "Макс Ферстаппен", "flag": "nl.svg", "state": "Нидерланды"},
                    {"number": "22", "name": "Юки Цунода", "flag": "jp.svg", "state": "Япония"}
                ]
            },
            "williams": {
                "id": "modal5",
                "namef": "Atlassian Williams Racing",
                "name": "Williams",
                "logo": "Williams.png",
                "miniLogo": "Williams-m.png",
                "base": "Гроу, Оксфордшир, Великобритания",
                "director": "Джеймс Ваулз",
                "car": "FW47",
                "engine": "Mercedes",
                "drivers": [
                    {"number": "55", "name": "Карлос Сайнс", "flag": "es.svg", "state": "Испания"},
                    {"number": "23", "name": "Александр Албон", "flag": "th.svg", "state": "Тайвань"}
                ]
            },
            "sauber": {
                "id": "modal6",
                "namef": "Stake F1 Team Kick Sauber",
                "name": "Sauber",
                "logo": "Sauber.png",
                "miniLogo": "Sauber-m.png",
                "base": "Хинвил, Швейцария",
                "director": "Маттиа Бинотто",
                "car": "C45",
                "engine": "Ferrari",
                "drivers": [
                    {"number": "27", "name": "Нико Хюлькенберг", "flag": "de.svg", "state": "Германия"},
                    {"number": "5", "name": "Габриэл Бортолето", "flag": "br.svg", "state": "Бразилия"}
                ]
            },
			"racingbulls": {
                "id": "modal7",
                "namef": "Visa Cash App Racing Bulls F1 Team",
                "name": "Racing Bulls",
                "logo": "Racing Bulls.png",
                "miniLogo": "Racing Bulls-m.png",
                "base": "Фаэнца, Италия",
                "director": "Алан Пермейн",
                "car": "VCARB02",
                "engine": "Honda RBPT",
                "drivers": [
                    {"number": "30", "name": "Лиам Лоусон", "flag": "nz.svg", "state": "Новая Зеландия"},
                    {"number": "6", "name": "Исаак Хаджар", "flag": "fr.svg", "state": "Франция"}
                ]
            },
			"astonmartin": {
                "id": "modal8",
                "namef": "Aston Martin Aramco F1 Team",
                "name": "Aston Martin",
                "logo": "Aston Martin.png",
                "miniLogo": "Aston Martin-m.png",
                "base": "Сильверстоун, Великобритания",
                "director": "Энди Коуэлл",
                "car": "AMR25",
                "engine": "Mercedes",
                "drivers": [
                    {"number": "18", "name": "Лэнс Стролл", "flag": "ca.svg", "state": "Канада"},
                    {"number": "14", "name": "Фернандо Алонсо", "flag": "es.svg", "state": "Испания"}
                ]
            },
			"haas": {
                "id": "modal9",
                "namef": "MoneyGram Haas F1 Team",
                "name": "Haas",
                "logo": "Haas.png",
                "miniLogo": "Haas-m.png",
                "base": "Каннаполис, Северная Каролина, США",
                "director": "Айо Комацу",
                "car": "VF-25",
                "engine": "Ferrari",
                "drivers": [
                    {"number": "31", "name": "Эстебан Окон", "flag": "gb.svg", "state": "Великобритания"},
                    {"number": "87", "name": "Оливер Берман", "flag": "fr.svg", "state": "Франция"}
                ]
            },
            "alpine": {
                "id": "modal10",
                "namef": "BWT Alpine F1 Team",
                "name": "Alpine",
                "logo": "Alpine.png",
                "miniLogo": "Alpine-m.png",
                "base": "Энстоун, Оксфордшир, Великобритания",
                "director": "Оливер Оукс",
                "car": "A525",
                "engine": "Renault",
                "drivers": [
                    {"number": "10", "name": "Пьер Гасли", "flag": "fr.svg", "state": "Франция"},
                    {"number": "43", "name": "Франко Колапинто", "flag": "ar.svg", "state": "Аргентина"}
                ]
            }
        };

/* 		Команды 2026
			"audi": {
                "id": "modal0",
                "namef": "Audi F1 Team",
                "name": "Audi",
                "logo": "Audi.png",
                "miniLogo": "Audi-m.png",
                "base": "Нойбург-ан-дер-Донау, Бавария, Германия",
                "director": "Маттиа Бинотто",
                "car": "000",
                "engine": "Audi",
                "drivers": [
                    {"number": "27", "name": "Нико Хюлькенберг", "flag": "de.svg", "state": "Германия"},
                    {"number": "5", "name": "Габриэл Бортолето", "flag": "br.svg", "state": "Бразилия"}
                ]
            },
			"cadillac": {
                "id": "modal11",
                "namef": "Cadillac Formula 1 Team",
                "name": "Cadillac",
                "logo": "Cadillac.png",
                "miniLogo": "Cadillac-m.png",
                "base": "Фишерс, Индиана, США",
                "director": "Грэм Лоудон",
                "car": "000",
                "engine": "Cadillac",
                "drivers": [
                    {"number": "0", "name": "Неизвестно", "flag": "gb.svg", "state": "Неизвестно"},
                    {"number": "43", "name": "Неизвестно", "flag": "gb.svg", "state": "Неизвестно"}
                ]
            } */
