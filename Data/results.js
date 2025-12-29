// Личный зачёт
const detailedResults = {
    /*"australia": {
        "Ландо Норрис": 25,
		"Макс Ферстаппен": 18,
        "Джордж Расселл": 15,
		"Кими Антонелли": 12,
        "Александр Албон": 10,
        "Лэнс Стролл": 8,
        "Нико Хюлькенберг": 6,
        "Шарль Леклер": 4,
		"Оскар Пиастри": 2,
        "Льюис Хэмилтон": 1,
    },
    "china": {
        "Оскар Пиастри": 25,
        "Ландо Норрис": 18,
        "Джордж Расселл": 15,
        "Макс Ферстаппен": 12,
        "Эстебан Окон": 10,
        "Кими Антонелли": 8,
        "Александр Албон": 6,
        "Оливер Берман": 4,
        "Лэнс Стролл": 2,
        "Карлос Сайнс": 1,
    },
    "japan": {
        "Макс Ферстаппен": 25,
        "Ландо Норрис": 18,
        "Оскар Пиастри": 15,
        "Шарль Леклер": 12,
        "Джордж Расселл": 10,
        "Кими Антонелли": 8,
        "Льюис Хэмилтон": 6,
        "Исаак Хаджар": 4,
        "Александр Албон": 2,
        "Оливер Берман": 1,
    },
    "bahrain": {
        "Оскар Пиастри": 25,
        "Джордж Расселл": 18,
        "Ландо Норрис": 15,
        "Шарль Леклер": 12,
        "Льюис Хэмилтон": 10,
        "Макс Ферстаппен": 8,
        "Пьер Гасли": 6,
        "Эстебан Окон": 4,
        "Юки Цунода": 2,
        "Оливер Берман": 1,
    },
    "saudi-arabia": {
        "Оскар Пиастри": 25,
        "Макс Ферстаппен": 18,
        "Шарль Леклер": 15,
        "Ландо Норрис": 12,
        "Джордж Расселл": 10,
        "Кими Антонелли": 8,
        "Льюис Хэмилтон": 6,
        "Карлос Сайнс": 4,
        "Александр Албон": 2,
        "Исаак Хаджар": 1,
    },
    "miami": {
        "Оскар Пиастри": 25,
        "Ландо Норрис": 18,
        "Джордж Расселл": 15,
        "Макс Ферстаппен": 12,
        "Александр Албон": 10,
        "Кими Антонелли": 8,
        "Шарль Леклер": 6,
        "Льюис Хэмилтон": 4,
        "Карлос Сайнс": 2,
        "Юки Цунода": 1,
    },
    "madrid": {
        "Макс Ферстаппен": 25,
        "Ландо Норрис": 18,
        "Оскар Пиастри": 15,
        "Льюис Хэмилтон": 12,
        "Александр Албон": 10,
        "Шарль Леклер": 8,
        "Джордж Расселл": 6,
        "Карлос Сайнс": 4,
        "Исаак Хаджар": 2,
        "Юки Цунода": 1,
    },
    "monaco": {
        "Ландо Норрис": 25,
        "Шарль Леклер": 18,
        "Оскар Пиастри": 15,
        "Макс Ферстаппен": 12,
        "Льюис Хэмилтон": 10,
        "Исаак Хаджар": 8,
        "Эстебан Окон": 6,
        "Лиам Лоусон": 4,
        "Александр Албон": 2,
        "Карлос Сайнс": 1,
    },
    "spain": {
        "Оскар Пиастри": 25,
        "Ландо Норрис": 18,
        "Шарль Леклер": 15,
        "Джордж Расселл": 12,
        "Нико Хюлькенберг": 10,
        "Льюис Хэмилтон": 8,
        "Исаак Хаджар": 6,
        "Пьер Гасли": 4,
        "Фернандо Алонсо": 2,
        "Макс Ферстаппен": 1,
    },
    "canada": {
        "Джордж Расселл": 25,
        "Макс Ферстаппен": 18,
        "Кими Антонелли": 15,
        "Оскар Пиастри": 12,
        "Шарль Леклер": 10,
        "Льюис Хэмилтон": 8,
        "Фернандо Алонсо": 6,
        "Нико Хюлькенберг": 4,
        "Эстебан Окон": 2,
        "Карлос Сайнс": 1,
    },
    "austria": {
        "Ландо Норрис": 25,
        "Оскар Пиастри": 18,
        "Шарль Леклер": 15,
        "Льюис Хэмилтон": 12,
        "Джордж Расселл": 10,
        "Лиам Лоусон": 8,
        "Фернандо Алонсо": 6,
        "Габриэл Бортолето": 4,
        "Нико Хюлькенберг": 2,
        "Эстебан Окон": 1,
    },
    "great-britain": {
        "Ландо Норрис": 25,
        "Оскар Пиастри": 18,
        "Нико Хюлькенберг": 15,
        "Льюис Хэмилтон": 12,
        "Макс Ферстаппен": 10,
        "Пьер Гасли": 8,
        "Лэнс Стролл": 6,
        "Александр Албон": 4,
        "Фернандо Алонсо": 2,
        "Джордж Расселл": 1,
    },
    "belgium": {
        "Оскар Пиастри": 25,
        "Ландо Норрис": 18,
        "Шарль Леклер": 15,
        "Макс Ферстаппен": 12,
        "Джордж Расселл": 10,
        "Александр Албон": 8,
        "Льюис Хэмилтон": 6,
        "Лиам Лоусон": 4,
        "Габриэл Бортолето": 2,
        "Пьер Гасли": 1,
    },
    "hungary": {
        "Ландо Норрис": 25,
        "Оскар Пиастри": 18,
        "Джордж Расселл": 15,
        "Шарль Леклер": 12,
        "Фернандо Алонсо": 10,
        "Габриэл Бортолето": 8,
        "Лэнс Стролл": 6,
        "Лиам Лоусон": 4,
        "Макс Ферстаппен": 2,
        "Кими Антонелли": 1,
    },
    "netherlands": {
        "Оскар Пиастри": 25,
        "Макс Ферстаппен": 18,
        "Исаак Хаджар": 15,
        "Джордж Расселл": 12,
        "Александр Албон": 10,
        "Оливер Берман": 8,
        "Лэнс Стролл": 6,
        "Фернандо Алонсо": 4,
        "Юки Цунода": 2,
        "Эстебан Окон": 1,
    },
    "italy": {
        "Макс Ферстаппен": 25,
        "Ландо Норрис": 18,
        "Оскар Пиастри": 15,
        "Шарль Леклер": 12,
        "Джордж Расселл": 10,
        "Льюис Хэмилтон": 8,
        "Александр Албон": 6,
        "Габриэл Бортолето": 4,
        "Кими Антонелли": 2,
        "Исаак Хаджар": 1,
    },
    "azerbaijan": {
        "Макс Ферстаппен": 25,
        "Джордж Расселл": 18,
        "Карлос Сайнс": 15,
        "Кими Антонелли": 12,
        "Лиам Лоусон": 10,
        "Юки Цунода": 8,
        "Ландо Норрис": 6,
        "Льюис Хэмилтон": 4,
        "Шарль Леклер": 2,
        "Исаак Хаджар": 1,
    },
    "singapore": {
        "Джордж Расселл": 25,
        "Макс Ферстаппен": 18,
        "Ландо Норрис": 15,
        "Оскар Пиастри": 12,
        "Кими Антонелли": 10,
        "Шарль Леклер": 8,
        "Фернандо Алонсо": 6,
        "Льюис Хэмилтон": 4,
        "Оливер Берман": 2,
        "Карлос Сайнс": 1,
    },
    "usa": {
        "Макс Ферстаппен": 25,
        "Ландо Норрис": 18,
        "Шарль Леклер": 15,
        "Льюис Хэмилтон": 12,
        "Оскар Пиастри": 10,
        "Джордж Расселл": 8,
        "Юки Цунода": 6,
        "Нико Хюлькенберг": 4,
        "Оливер Берман": 2,
        "Фернандо Алонсо": 1,
    },
    "mexico": {
        "Ландо Норрис": 25,
        "Шарль Леклер": 18,
        "Макс Ферстаппен": 15,
        "Оливер Берман": 12,
        "Оскар Пиастри": 10,
        "Кими Антонелли": 8,
        "Джордж Расселл": 6,
        "Льюис Хэмилтон": 4,
        "Эстебан Окон": 2,
        "Габриэл Бортолето": 1,
    },
    "brazil": {
        "Ландо Норрис": 25,
        "Кими Антонелли": 18,
        "Макс Ферстаппен": 15,
        "Джордж Расселл": 12,
        "Оскар Пиастри": 10,
        "Оливер Берман": 8,
        "Лиам Лоусон": 6,
        "Исаак Хаджар": 4,
        "Нико Хюлькенберг": 2,
        "Пьер Гасли": 1,
    },
    "las-vegas": {
        "Макс Ферстаппен": 25,
        "Джордж Расселл": 18,
        "Кими Антонелли": 15,
        "Шарль Леклер": 12,
        "Карлос Сайнс": 10,
        "Исаак Хаджар": 8,
        "Нико Хюлькенберг": 6,
        "Льюис Хэмилтон": 4,
        "Эстебан Окон": 2,
        "Оливер Берман": 1,
    },
    "qatar": {
        "Макс Ферстаппен": 25,
        "Оскар Пиастри": 18,
        "Карлос Сайнс": 15,
        "Ландо Норрис": 12,
        "Кими Антонелли": 10,
        "Джордж Расселл": 8,
        "Фернандо Алонсо": 6,
        "Шарль Леклер": 4,
        "Лиам Лоусон": 2,
        "Юки Цунода": 1,
    },
    "abu-dhabi": {
        "000": 25,
        "000": 18,
        "000": 15,
        "000": 12,
        "000": 10,
        "000": 8,
        "000": 6,
        "000": 4,
        "000": 2,
        "000": 1,
    },
	*/
};

// Спринт
const detailedSprintResults = {
    /*"china": {
        "Льюис Хэмилтон": 8,
        "Оскар Пиастри": 7,
        "Макс Ферстаппен": 6,
        "Джордж Расселл": 5,
        "Шарль Леклер": 4,
        "Юки Цунода": 3,
        "Кими Антонелли": 2,
        "Ландо Норрис": 1,
    },
	"miami": {
        "Ландо Норрис": 8,
        "Оскар Пиастри": 7,
        "Льюис Хэмилтон": 6,
        "Джордж Расселл": 5,
        "Лэнс Стролл": 4,
        "Юки Цунода": 3,
        "Кими Антонелли": 2,
        "Пьер Гасли": 1,
    },
	"belgium": {
        "Макс Ферстаппен": 8,
        "Оскар Пиастри": 7,
        "Ландо Норрис": 6,
        "Шарль Леклер": 5,
        "Эстебан Окон": 4,
        "Карлос Сайнс": 3,
        "Оливер Берман": 2,
        "Исаак Хаджар": 1,
    },
	"usa": {
        "Макс Ферстаппен": 8,
        "Джордж Расселл": 7,
        "Карлос Сайнс": 6,
        "Льюис Хэмилтон": 5,
        "Шарль Леклер": 4,
        "Александр Албон": 3,
        "Юки Цунода": 2,
        "Кими Антонелли": 1,
    },
	"brazil": {
        "Ландо Норрис": 8,
        "Кими Антонелли": 7,
        "Джордж Расселл": 6,
        "Макс Ферстаппен": 5,
        "Шарль Леклер": 4,
        "Фернандо Алонсо": 3,
        "Льюис Хэмилтон": 2,
        "Пьер Гасли": 1,
    },
	"qatar": {
        "Оскар Пиастри": 8,
        "Джордж Расселл": 7,
        "Ландо Норрис": 6,
        "Макс Ферстаппен": 5,
        "Кими Антонелли": 4,
        "Юки Цунода": 3,
        "Фернандо Алонсо": 2,
        "Карлос Сайнс": 1,
    },*/
};

// Пилоты
const driversStandings = [
    { name: "Оскар Пиастри", country: "au", state: "Австралия", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109"},
    { name: "Ландо Норрис", country: "gb", state: "Великобритания", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109"},
    { name: "Шарль Леклер", country: "mc", state: "Манако", team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f"},
    { name: "Льюис Хэмилтон", country: "gb", state: "Великобритания", team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f"},
    { name: "Джордж Расселл", country: "gb", state: "Великобритания", team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272"},
    { name: "Кими Антонелли", country: "it", state: "Италия", team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272"},
    { name: "Макс Ферстаппен", country: "nl", state: "Нидерланды", team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#313247"},
    { name: "Арвид Линдблад", country: "gb", state: "Великобритания", team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#313247"},
    { name: "Карлос Сайнс", country: "es", state: "Испания", team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc"},
    { name: "Александр Албон", country: "th", state: "Тайланд", team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc"},
    { name: "Нико Хюлькенберг", country: "de", state: "Германия", team: "Audi", teamLogo: "Audi-m.png", teamColor: "#21ad17"},
    { name: "Габриэл Бортолето", country: "br", state: "Бразилия", team: "Audi", teamLogo: "Audi-m.png", teamColor: "#21ad17"},
    { name: "Лиам Лоусон", country: "nz", state: "Новая Зеландия", team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#ddebdd"},
    { name: "Исаак Хаджар", country: "fr", state: "Франция", team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#ddebdd"},
    { name: "Лэнс Стролл", country: "ca", state: "Канада", team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00"},
    { name: "Фернандо Алонсо", country: "es", state: "Испания", team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00"},
    { name: "Эстебан Окон", country: "fr", state: "Франция", team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d"},
    { name: "Оливер Берман", country: "gb", state: "Великобритания", team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d"},
    { name: "Пьер Гасли", country: "fr", state: "Франция", team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c"},
    { name: "Франко Колапинто", country: "ar", state: "Аргентина", team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c"},
    { name: "Серхио Перес", country: "mx", state: "Мексика", team: "Cadilac", teamLogo: "Cadillac-m.png", teamColor: "#fbff00"},
    { name: "Валттери Боттас", country: "fi", state: "Финляндия", team: "Cadilac", teamLogo: "Cadillac-m.png", teamColor: "#fbff00"},
];

// Команды         /*Доп. очки -    points: 3    */
const constructorsStandings = [
    { team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109"},
    { team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f"},
    { team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272"},
    { team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#313247"},
    { team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc"},
    { team: "Audi", teamLogo: "Audi-m.png", teamColor: "#21ad17"},
    { team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#ddebdd"},
    { team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00"},
    { team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d"},
    { team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c"},
    { team: "Cadillac", teamLogo: "Cadillac-m.png", teamColor: "#fbff00"},
];

// Пилоты
const sprintStandings = [
    { name: "Оскар Пиастри", country: "au", state: "Австралия", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109"},
    { name: "Ландо Норрис", country: "gb", state: "Великобритания", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109"},
    { name: "Шарль Леклер", country: "mc", state: "Манако", team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f"},
    { name: "Льюис Хэмилтон", country: "gb", state: "Великобритания", team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f"},
    { name: "Джордж Расселл", country: "gb", state: "Великобритания", team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272"},
    { name: "Кими Антонелли", country: "it", state: "Италия", team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272"},
    { name: "Макс Ферстаппен", country: "nl", state: "Нидерланды", team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#313247"},
    { name: "Арвид Линдблад", country: "gb", state: "Великобритания", team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#313247"},
    { name: "Карлос Сайнс", country: "es", state: "Испания", team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc"},
    { name: "Александр Албон", country: "th", state: "Тайланд", team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc"},
    { name: "Нико Хюлькенберг", country: "de", state: "Германия", team: "Audi", teamLogo: "Audi-m.png", teamColor: "#21ad17"},
    { name: "Габриэл Бортолето", country: "br", state: "Бразилия", team: "Audi", teamLogo: "Audi-m.png", teamColor: "#21ad17"},
    { name: "Лиам Лоусон", country: "nz", state: "Новая Зеландия", team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#ddebdd"},
    { name: "Исаак Хаджар", country: "fr", state: "Франция", team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#ddebdd"},
    { name: "Лэнс Стролл", country: "ca", state: "Канада", team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00"},
    { name: "Фернандо Алонсо", country: "es", state: "Испания", team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00"},
    { name: "Эстебан Окон", country: "fr", state: "Франция", team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d"},
    { name: "Оливер Берман", country: "gb", state: "Великобритания", team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d"},
    { name: "Пьер Гасли", country: "fr", state: "Франция", team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c"},
    { name: "Франко Колапинто", country: "ar", state: "Аргентина", team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c"},
    { name: "Серхио Перес", country: "mx", state: "Мексика", team: "Cadillac", teamLogo: "Cadillac-m.png", teamColor: "#fbff00"},
    { name: "Валттери Боттас", country: "fi", state: "Финляндия", team: "Cadillac", teamLogo: "Cadillac-m.png", teamColor: "#fbff00"},
];

// Победители 
const raceWinners = [
    /*{ grandPrix: "", position: "1", winner: "Оскар Пиастри", country: "au", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109"},*/
];

// Список Гран-при
const grandPrixOrder = [
    "australia", 
	"china", 
	"japan", 
	"bahrain", 
	"saudi-arabia", 
    "miami", 
	"madrid", 
	"monaco", 
	"spain", 
	"canada", 
    "austria", 
	"great-britain", 
	"belgium", 
	"hungary", 
    "netherlands", 
	"italy",
	"azerbaijan", 
	"singapore",  
	"usa", 
	"mexico", 
	"brazil", 
	"las-vegas", 
	"qatar",
	"abu-dhabi"
];

// Расчёт очков пилотов
function calculateDriverPoints() {
    // Сбрасываем очки
    driversStandings.forEach(driver => {
        driver.points = 0;
    });
    
    // Суммируем очки из всех Гран-при
    Object.values(detailedResults).forEach(gpResults => {
        Object.entries(gpResults).forEach(([driverName, points]) => {
            const driver = driversStandings.find(d => d.name === driverName);
            if (driver) {
                driver.points += points;
            }
        });
    });
    
    // Сортируем по очкам
    driversStandings.sort((a, b) => b.points - a.points);
    
    // Обновляем позиции
    driversStandings.forEach((driver, index) => {
        driver.position = index + 1;
    });
}

// Расчёт очков спринтов
function calculateSprintPoints() {
    // Сбрасываем очки
    sprintStandings.forEach(driver => {
        driver.points = 0;
    });
    
    // Суммируем очки из всех спринтов
    Object.values(detailedSprintResults).forEach(sprintResults => {
        Object.entries(sprintResults).forEach(([driverName, points]) => {
            const driver = sprintStandings.find(d => d.name === driverName);
            if (driver) {
                driver.points += points;
            }
        });
    });
    
    // Сортируем по очкам
    sprintStandings.sort((a, b) => b.points - a.points);
    
    // Обновляем позиции
    sprintStandings.forEach((driver, index) => {
        driver.position = index + 1;
    });
}

// Расчёт очков команды
function calculateTeamPoints() {
    const teamPoints = {};
    const teamSprintPoints = {};
    const teamAdditionalPoints = {};

    // Доп. очки команд (штрафы/бонусы)
    constructorsStandings.forEach(team => {
        if (team.points) {
            teamAdditionalPoints[team.team] = team.points;
        }
    });

    // Суммирование очков пилотов команды из личного зачёта
    driversStandings.forEach(driver => {
        if (!teamPoints[driver.team]) {
            teamPoints[driver.team] = 0;
        }
        teamPoints[driver.team] += driver.points;
    });

    // Суммирование очков пилотов команды из спринта
    sprintStandings.forEach(driver => {
        if (!teamSprintPoints[driver.team]) {
            teamSprintPoints[driver.team] = 0;
        }
        teamSprintPoints[driver.team] += driver.points;
    });

    // Обновление массива constructorsStandings
    constructorsStandings.forEach(team => {
        const basePoints = teamPoints[team.team] || 0;
        const sprintPoints = teamSprintPoints[team.team] || 0;
        const additionalPoints = teamAdditionalPoints[team.team] || 0;
        
        // Суммируем очки личного зачёта, спринта и дополнительные очки
        team.points = basePoints + sprintPoints + additionalPoints;
    });

    // Сортировка команд по очкам
    constructorsStandings.sort((a, b) => b.points - a.points);
    
    // Обновление позиций
    constructorsStandings.forEach((team, index) => {
        team.position = index + 1;
    });
}

// Вычисляем очки при загрузке
calculateDriverPoints();
calculateSprintPoints();
calculateTeamPoints();

// Рендеринг страницы
function renderResults() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="results-container">
            <div class="standings-grid">
                <div class="drivers-standings" id="driversStandings"></div>
                <div class="constructors-standings" id="constructorsStandings"></div>
                <div class="sprint-standings" id="sprintStandings"></div>
                <div class="race-winners" id="raceWinners"></div>
            </div>
        </div>
    `;

    // Рендер таблиц
    renderDriversStandings();
    renderConstructorsStandings();
    renderSprintStandings();
    renderRaceWinners();

    // Добавляем обработчики для модальных окон
    addModalHandlers();
}

// Модальное окно
function addModalHandlers() {
    // Обработчик для личного зачёта
    document.querySelector('#driversStandings h2').addEventListener('click', () => {
        openDetailedModal('Личный зачёт', renderDriversDetailedTable());
    });
    
    // Обработчик для спринта
    document.querySelector('#sprintStandings h2').addEventListener('click', () => {
        openDetailedModal('Спринтерские гонки', renderSprintDetailedTable());
    });
    
    // Выделение пилотов при выборе команды
    document.querySelectorAll('.constructor-row').forEach(row => {
        row.addEventListener('click', () => {
            const team = row.getAttribute('data-team');
            highlightTeamDrivers(team);
        });
    });
}

// Рендер детальной таблицы личного зачёта
function renderDriversDetailedTable() {
	let html = `
        <div class="detailed-table-container">
            <div class="detailed-table">
                <div class="detailed-header">
                    <div class="detailed-col driver-col">Пилот</div>
    `;
    	
    // Добавляем флаг Гран-при
    grandPrixOrder.forEach(gpId => {
        if (detailedResults[gpId]) {
            const gpName = getGPName(gpId);
            html += `
			<div class="detailed-col gp-col">
			<img src="Images/Flags/${gpName.country}.svg" alt="flag" title="${gpName.state}" class="next-year-flag">
			</div>`;
        }
    });
    
    html += `<div class="detailed-col total-col">Σ</div></div>`;
	
    // Добавляем строки пилотов
    driversStandings.forEach(driver => {
            html += `
            <div class="detailed-row">
                <div class="detailed-col driver-col">
                    <span class="position">${driver.position}</span>
                    <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" title="${driver.state}" class="flag">
                    <span class="name">${driver.name}</span>
                    <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="team-logo">
                </div>
        `;
        
        // Добавляем очки по Гран-при
        let totalPoints = 0;
        grandPrixOrder.forEach(gpId => {
            if (detailedResults[gpId]) {
                const points = detailedResults[gpId][driver.name] || 0;
                totalPoints += points;
                html += `<div class="detailed-col gp-col">${points > 0 ? points : '-'}</div>`;
            }
        });
        
        html += `<div class="detailed-col total-col">${totalPoints}</div></div>`;
    });
    
    html += `</div></div>`;
	
	html += `
	<div class="detailed-info">
		<h3>Система начисления очков:</h3>
		<p>Очки начисляются только первым 10 финишировавшим пилотам</p>
		<p>Очки: 25 – 18 – 15 – 12 – 10 – 8 – 6 – 4 – 2 – 1</p>
	</div>`;
	return html;
}

// Рендер детальной таблицы спринтов
function renderSprintDetailedTable() {
    let html = `
        <div class="detailed-table-container">
            <div class="detailed-table">
                <div class="detailed-header">
                    <div class="detailed-col driver-col">Пилот</div>
    `;
    
    // Добавляем заголовки спринтов
    Object.keys(detailedSprintResults).forEach(sprintId => {
        const sprintName = getSprintName(sprintId);
        html += `
		<div class="detailed-col gp-col">
		<img src="Images/Flags/${sprintName.country}.svg" alt="flag" title="${sprintName.state}" class="next-year-flag">
		</div>
		`;
    });
    
    html += `<div class="detailed-col total-col">Σ</div></div>`;
    
    // Добавляем строки пилотов
    sprintStandings.forEach(driver => {
        html += `
            <div class="detailed-row">
                <div class="detailed-col driver-col">
                    <span class="position">${driver.position}</span>
                    <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" title="${driver.state}" class="flag">
                    <span class="name">${driver.name}</span>
                    <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="team-logo">
                </div>
        `;
        
        // Добавляем очки по спринтам
        let totalPoints = 0;
        Object.values(detailedSprintResults).forEach(sprintResults => {
            const points = sprintResults[driver.name] || 0;
            totalPoints += points;
            html += `<div class="detailed-col gp-col">${points > 0 ? points : '-'}</div>`;
        });
        
        html += `<div class="detailed-col total-col">${totalPoints}</div></div>`;
    });
    
    html += `</div></div>`;
	
	html += `
	<div class="detailed-info">
		<h3>Система начисления очков:</h3>
		<p>Очки начисляются только первым 8 финишировавшим пилотам</p>
		<p>Очки: 8 – 7 – 6 – 5 – 4 – 3 – 2 – 1</p>
	</div>`;
	return html;
}

// Открытие модального окна
function openDetailedModal(title, content, tableType) {
    const modal = document.createElement('div');
    modal.className = 'modal detailed-modal';
    modal.innerHTML = `
        <div class="modal-content detailed-modal-content">
            <div class="modal-body">${content}</div>
            <button class="close-modal">&times;</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Добавляем обработчики для выделения строк
    addRowSelectionHandlers(modal, tableType);
    
    // Закрытие модального окна
    modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Добавление обработчиков для выделения строк
function addRowSelectionHandlers(modal, tableType) {
    const rows = modal.querySelectorAll('.detailed-row');
    
    rows.forEach(row => {
        // Делаем строки кликабельными
        row.style.cursor = 'pointer';
        
        row.addEventListener('click', (e) => {
            // Снимаем выделение со всех строк
            rows.forEach(r => r.classList.remove('selected'));
            
            // Выделяем текущую строку
            row.classList.add('selected');
            
            // Получаем данные пилота
            const driverId = row.getAttribute('data-driver-id');
            const driverName = row.getAttribute('data-driver-name');
            
            if (driverId && driverName) {
                // Находим пилота в данных
                const driverData = tableType === 'drivers' 
                    ? driversStandings.find(d => d.name === driverName)
                    : sprintStandings.find(d => d.name === driverName);
                
                if (driverData) {
                    // Показываем дополнительную информацию о пилоте
                    showDriverTooltip(e, driverData, tableType);
                }
            }
        });
    });
}

// Названия Гран-при
function getGPName(gpId) {
    const gpNames = {
    "australia": {
		"country": "au",
		"state": "Австралия",
    },
    "china": {
		"country": "cn",
		"state": "Китай",
    },
    "japan": {
		"country": "jp",
		"state": "Япония",
    },
	"bahrain": {
		"country": "bh",
		"state": "Бахрейн",
    },
	"saudi-arabia": {
		"country": "sa",
		"state": "Саудовская Аравия",
    },
    "miami": {
		"country": "us",
		"state": "США, Майами",
    },
	"emilia-romagna": {
		"country": "it",
		"state": "Италия, Имола",
    },
	"monaco": {
		"country": "mc",
		"state": "Манако",
    },
	"spain": {
		"country": "es",
		"state": "Испания",
    },
	"canada": {
		"country": "ca",
		"state": "Канада",
    },
    "austria": {
		"country": "at",
		"state": "Австрия",
    },
	"great-britain": {
		"country": "gb",
		"state": "Великобритания",
    },
	"belgium": {
		"country": "be",
		"state": "Бельгия",
    },
	"hungary": {
		"country": "hu",
		"state": "Венгрия",
    },
    "netherlands": {
		"country": "nl",
		"state": "Нидерланды",
    },
	"italy": {
		"country": "it",
		"state": "Италия",
    },
	"azerbaijan": {
		"country": "az",
		"state": "Азербайджан",
    },
	"singapore": {
		"country": "sg",
		"state": "Сингапур",
    },
	"usa": {
		"country": "us",
		"state": "США",
    },
	"mexico": {
		"country": "mx",
		"state": "Мексика",
    },
	"brazil": {
		"country": "br",
		"state": "Бразилия",
    },
	"las-vegas": {
		"country": "us",
		"state": "США, Лас-Вегас",
    },
	"qatar": {
		"country": "qa",
		"state": "Катар",
    },
	"abu-dhabi": {
		"country": "ae",
		"state": "Объеденённые Арабские Эмираты",
    },
    };
    return gpNames[gpId] || gpId;}

function getSprintName(sprintId) {
	const sprintName = {
    "china": {
		"country": "cn",
		"state": "Китай",
    },
    "miami": {
		"country": "us",
		"state": "США, Майами",
    },
	"belgium": {
		"country": "be",
		"state": "Бельгия",
    },
	"usa": {
		"country": "us",
		"state": "США",
    },
	"brazil": {
		"country": "br",
		"state": "Бразилия",
    },
	"las-vegas": {
		"country": "us",
		"state": "США, Лас-Вегас",
    },
	"qatar": {
		"country": "qa",
		"state": "Катар",
    },
    };
    return sprintName[sprintId] || sprintId;}

// Таблица личного зачёта пилотов
function renderDriversStandings() {
    const container = document.getElementById('driversStandings');
    
    // Сортировка по очкам
    const sortedDrivers = [...driversStandings]
        .sort((a, b) => b.points - a.points)
        .map((driver, index) => ({ ...driver, position: index + 1 }));
    
    let html = `<h2>Личный зачёт</h2><div class="drivers-columns">`;
    
    // Разделение на 2 колонки по 10 пилотов
    for (let i = 0; i < 2; i++) {
        html += `<div class="drivers-column">`;
        sortedDrivers.slice(i * 11, (i + 1) * 11).forEach(driver => {
            // Вычисляем сумму очков гран-при и спринта для title
            const gpResults = driver.points; // Очки из личного зачёта (гран-при)
            
            // Находим очки спринта для этого пилота
            const sprintDriver = sprintStandings.find(s => s.name === driver.name);
            const sprintResults = sprintDriver ? sprintDriver.points : 0;
            
            // Сумма очков для title
            const totalPoints = gpResults + sprintResults;
            
            html += `
                <div class="driver-row" data-team="${driver.team}" data-team-color="${driver.teamColor}" style="border-left-color: ${driver.teamColor}">
                    <div class="driver-info">
                        <span class="position">${driver.position}</span>
                        <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" title="${driver.state}" class="flag">
                        <span class="name">${driver.name}</span>
                        <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="team-logo">
                        <span class="team">${driver.team}</span>
                    </div>
                    <span class="points" title="${totalPoints}">${driver.points}</span>
                </div>
            `;
        });
        html += `</div>`;
    }
    
    html += `</div>`;
    container.innerHTML = html;

    // Aнимация при наведении на строки
    document.querySelectorAll('.driver-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'translateX(10px)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'translateX(0)';
        });
    });
}

// Таблица кубка конструкторов
function renderConstructorsStandings() {
    const container = document.getElementById('constructorsStandings');
    
    // Сортировка по очкам
    const sortedTeams = [...constructorsStandings]
        .sort((a, b) => b.points - a.points)
        .map((team, index) => ({ ...team, position: index + 1 }));
    
    let html = `<h2>Кубок конструкторов</h2><div class="constructors-list">`;
    
    // Команды
    sortedTeams.slice(0, 11).forEach(team => {
        html += `
            <div class="constructor-row" data-team="${team.team}" data-team-color="${team.teamColor}" style="border-left-color: ${team.teamColor}">
                <div class="constructor-info">
                    <span class="position">${team.position}</span>
                    <img src="Images/Teams/${team.teamLogo}" alt="${team.team}" class="team-logo">
                    <span class="team">${team.team}</span>
                </div>
                <span class="points">${team.points}</span>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;

    // Анимация при наведении на строки
    document.querySelectorAll('.constructor-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'translateX(10px)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'translateX(0)';
        });
    });
}

// Таблица спринтерских гонок
function renderSprintStandings() {
    const container = document.getElementById('sprintStandings');
    
    // Ортировка по очкам
    const sortedSprint = [...sprintStandings]
        .sort((a, b) => b.points - a.points)
        .map((driver, index) => ({ ...driver, position: index + 1 }));
    
    let html = `<h2>Спринтерские гонки</h2><div class="sprint-columns">`;
    
    // Разделение на 2 колонки по 10 пилотов
    for (let i = 0; i < 2; i++) {
        html += `<div class="sprint-column">`;
        sortedSprint.slice(i * 11, (i + 1) * 11).forEach(driver => {
            html += `
                <div class="sprint-row" data-team="${driver.team}" data-team-color="${driver.teamColor}" style="border-left-color: ${driver.teamColor}">
                    <div class="driver-info">
                        <span class="position">${driver.position}</span>
                        <img src="Images/Flags/${driver.country}.svg" alt="${driver.country}" title="${driver.state}" class="flag">
                        <span class="name">${driver.name}</span>
                        <img src="Images/Teams/${driver.teamLogo}" alt="${driver.team}" class="team-logo">
                        <span class="team">${driver.team}</span>
                    </div>
                    <span class="points">${driver.points}</span>
                </div>
            `;
        });
        html += `</div>`;
    }
    
    html += `</div>`;
    container.innerHTML = html;

    // Aнимация при наведении на строки
    document.querySelectorAll('.sprint-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'translateX(10px)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'translateX(0)';
        });
    });
}

// Таблица победителей гран-при
function renderRaceWinners() {
    const container = document.getElementById('raceWinners');
    let html = `<h2>Чемпионы этапов</h2><div class="winners-list">`;
    
    // Победители гран-при
    raceWinners.forEach(race => {
        html += `
            <div class="winner-row" data-team="${race.team}">
                <div class="winner-info">
                    <span class="position">${race.position}</span>
                    <img src="Images/Flags/${race.country}.svg" alt="${race.country}" class="flag">
                    <span class="winner-name">${race.winner}</span>
                    <img src="Images/Teams/${race.teamLogo}" alt="${race.team}" class="team-logo">
                </div>
                <span class="grand-prix">${race.grandPrix}</span>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;

    // Анимацию при наведении на строки
    document.querySelectorAll('.winner-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'translateX(10px)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'translateX(0)';
        });
    });
}

// Выделение пилотов определённой команды
function highlightTeamDrivers(team) {
    // Сброс предыдущего выделения
    document.querySelectorAll('.driver-row, .sprint-row').forEach(row => {
        row.style.opacity = '0.5';
        row.style.borderLeftColor = 'transparent';
    });

    // Выделение команды
    document.querySelectorAll(`[data-team="${team}"]`).forEach(row => {
        const teamColor = row.getAttribute('data-team-color');
        row.style.opacity = '1';
        row.style.borderLeftColor = teamColor;
    });
}

// Инициализация при загрузке вкладки
if (window.location.hash === '#results') {
    renderResults();
}










