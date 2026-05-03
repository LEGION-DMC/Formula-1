// Личный зачёт
const detailedResults = {
    "australia": {
        "Джордж Расселл": 25,
        "Кими Антонелли": 18,
        "Шарль Леклер": 15,
        "Льюис Хэмилтон": 12,
        "Ландо Норрис": 10,
        "Макс Ферстаппен": 8,
        "Оливер Берман": 6,
        "Арвид Линдблад": 4,
        "Габриэл Бортолето": 2,
        "Пьер Гасли": 1,
    },
    "china": {
        "Кими Антонелли": 25,
        "Джордж Расселл": 18,
        "Льюис Хэмилтон": 15,
        "Шарль Леклер": 12,
        "Оливер Берман": 10,
        "Пьер Гасли": 8,
        "Лиам Лоусон": 6,
        "Исаак Хаджар": 4,
        "Карлос Сайнс": 2,
        "Франко Колапинто": 1,
    },
    "japan": {
        "Кими Антонелли": 25,
        "Оскар Пиастри": 18,
        "Шарль Леклер": 15,
        "Джордж Расселл": 12,
        "Ландо Норрис": 10,
        "Льюис Хэмилтон": 8,
        "Пьер Гасли": 6,
        "Макс Ферстаппен": 4,
        "Лиам Лоусон": 2,
        "Эстебан Окон": 1,
    },
    "bahrain": {
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
    "saudi-arabia": {
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
    "miami": {
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
    "canada": {
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
    "monaco": {
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
    "spain": {
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
    "austria": {
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
    "great-britain": {
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
    "belgium": {
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
    "hungary": {
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
    "netherlands": {
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
    "italy": {
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
    "madrid": {
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
    "azerbaijan": {
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
    "singapore": {
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
    "usa": {
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
    "mexico": {
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
    "brazil": {
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
    "las-vegas": {
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
    "qatar": {
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
};

// Спринт
const detailedSprintResults = {
    "china": {
        "Джордж Расселл": 8,
        "Шарль Леклер": 7,
        "Льюис Хэмилтон": 6,
        "Ландо Норрис": 5,
        "Кими Антонелли": 4,
        "Оскар Пиастри": 3,
        "Лиам Лоусон": 2,
        "Оливер Берман": 1,
    },
	"miami": {
        "Ландо Норрис": 8,
        "Оскар Пиастри": 7,
        "Шарль Леклер": 6,
        "Джордж Расселл": 5,
        "Макс Ферстаппен": 4,
        "Кими Антонелли": 3,
        "Льюис Хэмилтон": 2,
        "Пьер Гасли": 1,
    },
	"canada": {
        "000": 8,
        "000": 7,
        "000": 6,
        "000": 5,
        "000": 4,
        "000": 3,
        "000": 2,
        "000": 1,
    },
	"great-britain": {
        "000": 8,
        "000": 7,
        "000": 6,
        "000": 5,
        "000": 4,
        "000": 3,
        "000": 2,
        "000": 1,
    },
	"netherlands": {
        "000": 8,
        "000": 7,
        "000": 6,
        "000": 5,
        "000": 4,
        "000": 3,
        "000": 2,
        "000": 1,
    },
	"singapore": {
        "000": 8,
        "000": 7,
        "000": 6,
        "000": 5,
        "000": 4,
        "000": 3,
        "000": 2,
        "000": 1,
    },
};

// Пилоты
const driversStandings = [
	{ name: "Ландо Норрис", country: "gb", state: "Великобритания", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109"},
    { name: "Оскар Пиастри", country: "au", state: "Австралия", team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109"},
    { name: "Шарль Леклер", country: "mc", state: "Манако", team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f"},
    { name: "Льюис Хэмилтон", country: "gb", state: "Великобритания", team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f"},
    { name: "Джордж Расселл", country: "gb", state: "Великобритания", team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272"},
    { name: "Кими Антонелли", country: "it", state: "Италия", team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272"},
    { name: "Макс Ферстаппен", country: "nl", state: "Нидерланды", team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#313247"},
	{ name: "Исаак Хаджар", country: "fr", state: "Франция", team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#ddebdd"},
    { name: "Карлос Сайнс", country: "es", state: "Испания", team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc"},
    { name: "Александр Албон", country: "th", state: "Тайланд", team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc"},
    { name: "Нико Хюлькенберг", country: "de", state: "Германия", team: "Audi", teamLogo: "Audi-m.png", teamColor: "#21ad17"},
    { name: "Габриэл Бортолето", country: "br", state: "Бразилия", team: "Audi", teamLogo: "Audi-m.png", teamColor: "#21ad17"},
    { name: "Лиам Лоусон", country: "nz", state: "Новая Зеландия", team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#ddebdd"},
    { name: "Арвид Линдблад", country: "gb", state: "Великобритания", team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#313247"},
    { name: "Лэнс Стролл", country: "ca", state: "Канада", team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00"},
    { name: "Фернандо Алонсо", country: "es", state: "Испания", team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00"},
    { name: "Эстебан Окон", country: "fr", state: "Франция", team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d"},
    { name: "Оливер Берман", country: "gb", state: "Великобритания", team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d"},
    { name: "Пьер Гасли", country: "fr", state: "Франция", team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c"},
    { name: "Франко Колапинто", country: "ar", state: "Аргентина", team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c"},
    { name: "Серхио Перес", country: "mx", state: "Мексика", team: "Cadillac", teamLogo: "Cadillac-m.png", teamColor: "#fbff00"},
    { name: "Валттери Боттас", country: "fi", state: "Финляндия", team: "Cadillac", teamLogo: "Cadillac-m.png", teamColor: "#fbff00"},
];

// Команды         /*Доп. очки -    points: 3    */
const constructorsStandings = [
    { team: "McLaren", teamLogo: "McLaren-m.png", teamColor: "#e07109", points: 0},
    { team: "Ferrari", teamLogo: "Ferrari-m.png", teamColor: "#b80f0f", points: 0},
    { team: "Mercedes", teamLogo: "Mercedes-m.png", teamColor: "#7a7272", points: 0},
    { team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#313247", points: 0},
    { team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc", points: 0},
    { team: "Audi", teamLogo: "Audi-m.png", teamColor: "#21ad17", points: 0},
    { team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#ddebdd", points: 0},
    { team: "Aston Martin", teamLogo: "AstonMartin-m.png", teamColor: "#fbff00", points: 0},
    { team: "Haas", teamLogo: "Haas-m.png", teamColor: "#cf1d1d", points: 0},
    { team: "Alpine", teamLogo: "Alpine-m.png", teamColor: "#a1459c", points: 0},
    { team: "Cadillac", teamLogo: "Cadillac-m.png", teamColor: "#fbff00", points: 0},
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
	{ name: "Исаак Хаджар", country: "fr", state: "Франция", team: "Red Bull", teamLogo: "RedBull-m.png", teamColor: "#ddebdd"},
    { name: "Карлос Сайнс", country: "es", state: "Испания", team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc"},
    { name: "Александр Албон", country: "th", state: "Тайланд", team: "Williams", teamLogo: "Williams-m.png", teamColor: "#7b74fc"},
    { name: "Нико Хюлькенберг", country: "de", state: "Германия", team: "Audi", teamLogo: "Audi-m.png", teamColor: "#21ad17"},
    { name: "Габриэл Бортолето", country: "br", state: "Бразилия", team: "Audi", teamLogo: "Audi-m.png", teamColor: "#21ad17"},
    { name: "Лиам Лоусон", country: "nz", state: "Новая Зеландия", team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#ddebdd"},
    { name: "Арвид Линдблад", country: "gb", state: "Великобритания", team: "Racing Bulls", teamLogo: "RacingBulls-m.png", teamColor: "#313247"},
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
let raceWinners = [];

const trackToGrandPrixMap = {
    "t1": "australia",
    "t2": "china",
    "t3": "japan",
    "t4": "bahrain",
    "t5": "saudi-arabia",
    "t6": "miami",
    "t7": "canada",
    "t8": "monaco",
    "t9": "spain",
    "t10": "austria",
    "t11": "great-britain",
    "t12": "belgium",
    "t13": "hungary",
    "t14": "netherlands",
    "t15": "italy",
    "t16": "madrid",
    "t17": "azerbaijan",
    "t18": "singapore",
    "t19": "usa",
    "t20": "mexico",
    "t21": "brazil",
    "t22": "las-vegas",
    "t23": "qatar",
    "t24": "abu-dhabi"
};

// Функция для автоматического заполнения победителей этапов
function generateRaceWinners() {
    const winnersMap = new Map(); // Используем Map для группировки по пилотам
    
    // Проходим по всем Гран-при в порядке календаря
    grandPrixOrder.forEach(gpId => {
        const gpResults = detailedResults[gpId];
        if (gpResults) {
            // Сортируем результаты по очкам, чтобы найти топ-3 для подиума
            const sortedResults = Object.entries(gpResults)
                .sort((a, b) => b[1] - a[1]);
            
            // Ищем пилота с 25 очками (победитель этапа)
            sortedResults.forEach(([driverName, points]) => {
                if (points === 25) {
                    // Находим информацию о пилоте в driversStandings
                    const driverInfo = driversStandings.find(d => d.name === driverName);
                    
                    if (driverInfo) {
                        // Получаем название Гран-при для отображения
                        const gpNameInfo = getGPName(gpId);
                        
                        if (!winnersMap.has(driverName)) {
                            // Если пилота ещё нет в Map, добавляем его с информацией
                            winnersMap.set(driverName, {
                                winner: driverName,
                                country: driverInfo.country,
                                team: driverInfo.team,
                                teamLogo: driverInfo.teamLogo,
                                teamColor: driverInfo.teamColor,
                                grandPrixList: [gpNameInfo.state]
                            });
                        } else {
                            // Если пилот уже есть, добавляем этап в его список
                            const existing = winnersMap.get(driverName);
                            existing.grandPrixList.push(gpNameInfo.state);
                        }
                    }
                }
            });
        }
    });
    
    // Преобразуем Map в массив и сортируем по первому этапу в календаре
    const winnersArray = Array.from(winnersMap.values());
    
    // Сортируем победителей по порядку первого выигранного этапа
    winnersArray.sort((a, b) => {
        const aFirstGp = a.grandPrixList[0];
        const bFirstGp = b.grandPrixList[0];
        
        const aIndex = grandPrixOrder.findIndex(gpId => {
            const gpName = getGPName(gpId);
            return gpName.state === aFirstGp;
        });
        const bIndex = grandPrixOrder.findIndex(gpId => {
            const gpName = getGPName(gpId);
            return gpName.state === bFirstGp;
        });
        return aIndex - bIndex;
    });
    
    // Добавляем позиции
    winnersArray.forEach((winner, index) => {
        winner.position = index + 1;
    });
    
    return winnersArray;
}

// Список Гран-при
const grandPrixOrder = [
    "australia", 
	"china", 
	"japan", 
	"bahrain", 
	"saudi-arabia", 
    "miami", 
	"canada", 
	"monaco", 
	"spain", 
    "austria", 
	"great-britain", 
	"belgium", 
	"hungary", 
    "netherlands", 
	"italy",
	"madrid", 
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
    
    // Автоматически генерируем победителей этапов
    raceWinners = generateRaceWinners();
    
    // Автоматически обновляем данные подиума в tracksData
    updateTracksPodiumData();
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

// Функция для получения списка Гран-при с информацией из tracksData
function getGrandPrixList() {
    const grandPrixList = [];
    
    // Проходим по всем трассам в порядке календаря
    grandPrixOrder.forEach(gpId => {
        // Находим соответствующий трек в tracksData
        const track = Object.values(tracksData).find(t => {
            // Сопоставляем ID Гран-при с ID трека
            return trackToGrandPrixMap[t.id] === gpId;
        });
        
        if (track) {
            grandPrixList.push({
                id: gpId,
                country: track.country,
                state: track.state,
                name: track.name,
                hasSprint: track.hasSprint || false
            });
        }
    });
    
    return grandPrixList;
}

// Функция для получения списка спринтов с информацией из tracksData
function getSprintList() {
    const sprintList = [];
    
    // Проходим по всем трассам в tracksData
    Object.values(tracksData).forEach(track => {
        const gpId = trackToGrandPrixMap[track.id];
        
        // Если у трассы есть спринт
        if (track.hasSprint === true && gpId) {
            // Проверяем, есть ли данные в detailedSprintResults
            const sprintResults = detailedSprintResults[gpId];
            const hasResults = sprintResults && Object.keys(sprintResults).length > 0;
            
            sprintList.push({
                id: gpId,
                country: track.country,
                state: track.state,
                name: track.name,
                hasRealResults: hasResults && Object.keys(sprintResults).some(key => 
                    key !== "000" && sprintResults[key] > 0
                )
            });
        }
    });
    
    // Сортируем по дате (используем данные из tracksData)
    sprintList.sort((a, b) => {
        const trackA = Object.values(tracksData).find(t => 
            trackToGrandPrixMap[t.id] === a.id
        );
        const trackB = Object.values(tracksData).find(t => 
            trackToGrandPrixMap[t.id] === b.id
        );
        return new Date(trackA?.date) - new Date(trackB?.date);
    });
    
    return sprintList;
}

// Рендер детальной таблицы личного зачёта
function renderDriversDetailedTable() {
    const grandPrixList = getGrandPrixList();
    
    let html = `
        <div class="detailed-table-container">
            <div class="detailed-table">
                <div class="detailed-header">
                    <div class="detailed-col driver-col">Пилот</div>
    `;
    
    // Добавляем флаг Гран-при из tracksData
    grandPrixList.forEach(gp => {
        html += `
            <div class="detailed-col gp-col">
                <img src="Images/Flags/${gp.country}.svg" alt="flag" title="${gp.state}" class="next-year-flag">
            </div>`;
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
        grandPrixList.forEach(gp => {
            const points = detailedResults[gp.id]?.[driver.name] || 0;
            totalPoints += points;
            html += `<div class="detailed-col gp-col">${points > 0 ? points : '-'}</div>`;
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

// Функция для автоматического создания структуры спринтов на основе конфигурации
function initSprintResults() {
    const sprintResults = {};
    
    // Проходим по всем трассам в tracksData
    Object.values(tracksData).forEach(track => {
        const gpId = trackToGrandPrixMap[track.id];
        
        // Используем hasSprint из конфигурации
        if (track.hasSprint === true && gpId) {
            if (!sprintResults[gpId]) {
                sprintResults[gpId] = {
                    "000": 8,
                    "000": 7,
                    "000": 6,
                    "000": 5,
                    "000": 4,
                    "000": 3,
                    "000": 2,
                    "000": 1,
                };
            }
        }
    });
    
    return sprintResults;
}

// Рендер детальной таблицы спринтов
function renderSprintDetailedTable() {
    const sprintList = getSprintList();
    
    let html = `
        <div class="detailed-table-container">
            <div class="detailed-table">
                <div class="detailed-header">
                    <div class="detailed-col driver-col">Пилот</div>
    `;
    
    // Добавляем заголовки спринтов из tracksData
    sprintList.forEach(sprint => {
        html += `
            <div class="detailed-col gp-col">
                <img src="Images/Flags/${sprint.country}.svg" alt="flag" title="${sprint.state}" class="next-year-flag">
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
        sprintList.forEach(sprint => {
            const points = detailedSprintResults[sprint.id]?.[driver.name] || 0;
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

// Названия Гран-при (теперь берутся из tracksData)
function getGPName(gpId) {
    const grandPrixList = getGrandPrixList();
    const gp = grandPrixList.find(g => g.id === gpId);
    return gp || { country: "unknown", state: gpId };
}


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

// Таблица победителей гран-при (с группировкой этапов)
function renderRaceWinners() {
    const container = document.getElementById('raceWinners');
    let html = `<h2>Чемпионы этапов</h2><div class="winners-list">`;
    
    // Победители гран-при (уже сгруппированы)
    raceWinners.forEach((race, index) => {
        // Формируем строку с этапами через красный разделитель |
        const grandPrixList = race.grandPrixList.join(' <span style="color: red;">|</span> ');
        
        html += `
            <div class="winner-row" data-team="${race.team}">
                <div class="winner-info">
                    <span class="position">${race.position}</span>
                    <img src="Images/Flags/${race.country}.svg" alt="${race.country}" class="flag">
                    <span class="winner-name">${race.winner}</span>
                    <img src="Images/Teams/${race.teamLogo}" alt="${race.team}" class="team-logo">
                </div>
                <span class="grand-prix">${grandPrixList}</span>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;

    // Анимация при наведении на строки
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
let lastSelectedTeam = null; // Добавляем переменную для хранения последней выбранной команды

function highlightTeamDrivers(team) {
    // Если нажали на ту же команду, снимаем выделение
    if (lastSelectedTeam === team) {
        // Сбрасываем выделение для всех строк
        document.querySelectorAll('.driver-row, .sprint-row').forEach(row => {
            row.style.opacity = '1';
            const originalColor = row.getAttribute('data-team-color');
            row.style.borderLeftColor = originalColor || 'transparent';
        });
        lastSelectedTeam = null; // Сбрасываем последнюю выбранную команду
        return;
    }
    
    // Сброс предыдущего выделения
    document.querySelectorAll('.driver-row, .sprint-row').forEach(row => {
        row.style.opacity = '0.5';
        row.style.borderLeftColor = 'transparent';
    });

    // Выделение пилотов выбранной команды
    document.querySelectorAll(`[data-team="${team}"]`).forEach(row => {
        const teamColor = row.getAttribute('data-team-color');
        row.style.opacity = '1';
        row.style.borderLeftColor = teamColor;
    });
    
    // Запоминаем выбранную команду
    lastSelectedTeam = team;
}

// Инициализация при загрузке вкладки
if (window.location.hash === '#results') {
    renderResults();
}



