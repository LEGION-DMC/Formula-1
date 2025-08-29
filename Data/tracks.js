const nextYearCalendar = [
    { name: "Гран-при Австралии",
        date: "2025-03-16",
        country: "au"
    },
    { name: "Гран-при Китая",
        date: "2025-03-23",
        country: "cn"
    },
    { name: "Гран-при Японии",
        date: "2025-04-06",
        country: "jp"
    },
    { name: "Гран-при Бахрейна",
        date: "2025-04-13",
        country: "bh"
    },
    { name: "Гран-при Саудовской Аравии",
        date: "2025-04-20",
        country: "sa"
    },
    { name: "Гран-при Майами",
        date: "2025-05-04",
        country: "us"
    },
    { name: "Гран-при Эмилии Романьи",
        date: "2025-05-18",
        country: "ca"
    },
    { name: "Гран-при Монако",
        date: "2025-05-25",
        country: "mc"
    },
    { name: "Гран-при Барселоны-Каталонии",
        date: "2025-06-01",
        country: "es"
    },
    { name: "Гран-при Канады",
        date: "2025-06-15",
        country: "at"
    },
	{ name: "Гран-при Австрии",
        date: "2025-06-29",
        country: "at"
    },
    { name: "Гран-при Великобритании",
        date: "2025-07-06",
        country: "gb"
    },
    { name: "Гран-при Бельгии",
        date: "2025-07-27",
        country: "be"
    },
    { name: "Гран-при Венгрии",
        date: "2025-08-03",
        country: "hu"
    },
    { name: "Гран-при Нидерландов",
        date: "2025-08-31",
        country: "nl"
    },
    { name: "Гран-при Италии",
        date: "2025-09-07",
        country: "it"
    },
    { name: "Гран-при Азербайджана",
        date: "2025-09-21",
        country: "az"
    },
    { name: "Гран-при Сингапура",
        date: "2025-10-05",
        country: "sg"
    },
    { name: "Гран-при США",
        date: "2025-10-20",
        country: "us"
    },
    { name: "Гран-при Мехико",
        date: "2025-10-27",
        country: "mx"
    },
    { name: "Гран-при Сан-Паулу",
        date: "2025-11-10",
        country: "br"
    },
    { name: "Гран-при Лас-Вегаса",
        date: "2025-11-22",
        country: "us"
    },
    { name: "Гран-при Катара",
        date: "2025-12-01",
        country: "qa"
    },
    { name: "Гран-при Абу-Даби",
        date: "2025-12-07",
        country: "ae"
    }
];

const tracksData = {
    "albert-park": {
        "id": "t1",
        "name": "Гран-при Австралии",
        "logo": "Albert Park.svg",
        "miniLogo": "Albert Park-m.svg",
		"country": "au",
		"state": "Австралия",
        "location": "Мельбурн, Австралия",
        "trackName": "Альберт-Парк",
        "length": "5 278 км",
        "laps": 58,
        "turns": 14,
        "drsZones": 3,
        "direction": "по часовой стрелке",
        "lapRecord": "1.15.096 (Норрис, 2025)",
        "date": "2025-03-16",
		"podium1": "Норрис",
        "podium2": "Ферстаппен",
        "podium3": "Рассел",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/2079c4f978ab2741be70fbd26d9b09e4"
    },
    "shanghai": {
        "id": "t2",
        "name": "Гран-при Китая",
        "logo": "Shanghai.svg",
        "miniLogo": "Shanghai-m.svg",
		"country": "cn",
		"state": "Китай",
        "location": "Шанхай, Китай",
        "trackName": "Международный автодром Шанхая",
        "length": "5 451 км",
        "laps": 56,
        "turns": 16,
        "drsZones": 2,
        "direction": "по часовой стрелке",
        "lapRecord": "1:30.641 (Пиастри, 2025)",
        "date": "2025-03-23",
		"hasSprint": true,
		"podium1": "Пиастри",
        "podium2": "Норрис",
        "podium3": "Рассел",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/fa1eb3e92d1e9ba84c1562a4ea46acbd"
    },
    "suzuka": {
        "id": "t3",
        "name": "Гран-при Японии",
        "logo": "Suzuka.svg",
        "miniLogo": "Suzuka-m.svg",
		"country": "jp",
		"state": "Япония",
        "location": "Сузука, Япония",
        "trackName": "Сузука",
        "length": "5 807 км",
        "laps": 53,
        "turns": 18,
        "drsZones": 1,
        "direction": "по часовой стрелке",
        "lapRecord": "1:26.983 (Ферстаппен, 2025)",
        "date": "2025-04-06",
		"podium1": "Ферстаппен",
        "podium2": "Норрис",
        "podium3": "Пиастри",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/f4c2ca887796fc22660d6490a23d3371"
    },
    "bahrain": {
        "id": "t4",
        "name": "Гран-при Бахрейна",
        "logo": "Bahrain.svg",
        "miniLogo": "Bahrain-m.svg",
		"country": "bh",
		"state": "Бахрейн",
        "location": "Сахир, Бахрейн",
        "trackName": "Международный автодром Бахрейна",
        "length": "5 412 км",
        "laps": 57,
        "turns": 15,
        "drsZones": 3,
        "direction": "по часовой стрелке",
        "lapRecord": "1:27.264 (Хэмильтон, 2020)",
        "date": "2025-04-13",
		"podium1": "Пиастри",
        "podium2": "Рассел",
        "podium3": "Норрис",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/b3b13a59df849ce3092240d5f08d6005"
    },
    "jeddah": {
        "id": "t5",
        "name": "Гран-при Саудовской Аравии",
        "logo": "Jeddah.svg",
        "miniLogo": "Jeddah-m.svg",
		"country": "sa",
		"state": "Саудовская Аравия",
        "location": "Джидда, Саудовская Аравия",
        "trackName": "Городская трасса Джидда",
        "length": "6 174 км",
        "laps": 50,
        "turns": 27,
        "drsZones": 3,
        "direction": "против часовой стрелки",
        "lapRecord": "1:27.294 (Ферстаппен, 2025)",
        "date": "2025-04-20",
		"podium1": "Пиастри",
        "podium2": "Ферстаппен",
        "podium3": "Леклер",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/7d862107f6a4812b3a100b4fcd8b2611"
    },
    "miami": {
        "id": "t6",
        "name": "Гран-при Майами",
        "logo": "Miami.svg",
        "miniLogo": "Miami-m.svg",
		"country": "us",
		"state": "США",
        "location": "Майами, США",
        "trackName": "Международный автодром Майами",
        "length": "5 412 км",
        "laps": 57,
        "turns": 19,
        "drsZones": 3,
        "direction": "по часовой стрелке",
        "lapRecord": "1:26.204 (Ферстаппен, 2025)",
        "date": "2025-05-04",
		"hasSprint": true,
		"podium1": "Пиастри",
        "podium2": "Норрис",
        "podium3": "Рассел",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/83c2215a943345562c68bba961623188"
    },
    "ferrari": {
        "id": "t7",
        "name": "Гран-при Эмилии Романьи",
        "logo": "Imola.svg",
        "miniLogo": "Imola-m.svg",
		"country": "it",
		"state": "Италия",
        "location": "Имола, Италия",
        "trackName": "Автодром Энцо и Дино Феррари",
        "length": "4 959 км",
        "laps": 63,
        "turns": 19,
        "drsZones": 1,
        "direction": "против часовой стрелки",
        "lapRecord": "1:15.484 (Хемильтон, 2020)",
        "date": "2025-05-18",
		"podium1": "Ферстаппен",
        "podium2": "Норрис",
        "podium3": "Пиастри",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/e48d594f60e400bca0014c4d552a34f9"
    },
    "monaco": {
        "id": "t8",
        "name": "Гран-при Монако",
        "logo": "Monaco.svg",
        "miniLogo": "Monaco-m.svg",
		"country": "mc",
		"state": "Манако",
        "location": "Монте-Карло, Монако",
        "trackName": "Городская трасса Монте-Карло",
        "length": "3 340 км",
        "laps": 78,
        "turns": 19,
        "drsZones": 1,
        "direction": "по часовой стрелке",
        "lapRecord": "1:09.954 (Норрис, 2025)",
        "date": "2025-05-25",
		"podium1": "Норрис",
        "podium2": "Леклер",
        "podium3": "Пиастри",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/b3c7587ee0c2a33f9e89fbc3f83a13f1"
    },
    "barcelona-catalunya": {
        "id": "t9",
        "name": "Гран-при Испании",
        "logo": "Barcelona Catalunya.svg",
        "miniLogo": "Barcelona Catalunya-m.svg",
		"country": "es",
		"state": "Испания",
        "location": "Барселона, Испания",
        "trackName": "Барселона-Каталунья",
        "length": "4 675 км",
        "laps": 66,
        "turns": 14,
        "drsZones": 2,
        "direction": "по часовой стрелке",
        "lapRecord": "1:15.743 (Пиастри, 2025)",
        "date": "2025-06-01",
		"podium1": "Пиастри",
        "podium2": "Норрис",
        "podium3": "Леклер",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/295199e9d73dfd32b700902528b7113b"
    },
    "gilles-villeneuve": {
        "id": "t10",
        "name": "Гран-при Канады",
        "logo": "Gilles Villeneuve.svg",
        "miniLogo": "Gilles Villeneuve-m.svg",
		"country": "cn",
		"state": "Канада",
        "location": "Монреаль, Канада",
        "trackName": "Автодром имени Жиля Вильнёва",
        "length": "4 361 км",
        "laps": 70,
        "turns": 14,
        "drsZones": 2,
        "direction": "против часовой стрелки",
        "lapRecord": "1:10.240 (Феттель, 2019)",
        "date": "2025-06-15",
		"podium1": "Рассел",
        "podium2": "Ферстаппен",
        "podium3": "Антонелли",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/28ecd1825dc64437615a9d73e2ae6304"
    },
    "red-bull-ring": {
        "id": "t11",
        "name": "Гран-при Австрии",
        "logo": "Red Bull Ring.svg",
        "miniLogo": "Red Bull Ring-m.svg",
		"country": "at",
		"state": "Австрия",
        "location": "Шпильберг, Австрия",
        "trackName": "Ред Булл Ринг",
        "length": "4 326 км",
        "laps": 71,
        "turns": 10,
        "drsZones": 3,
        "direction": "по часовой стрелке",
        "lapRecord": "1:02.939 (Боттас, 2020)",
        "date": "2025-06-29",
		"podium1": "Норис",
        "podium2": "Пиастри",
        "podium3": "Леклер",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/7a97d545d3a53005d7103312ccba332d"
    },
    "silverstone": {
        "id": "t12",
        "name": "Гран-при Великобритании",
        "logo": "Silverstone.svg",
        "miniLogo": "Silverstone-m.svg",
		"country": "gb",
		"state": "Великобритания",
        "location": "Нортгемптошир, Англия",
        "trackName": "Сильверстоун",
        "length": "5 891 км",
        "laps": 52,
        "turns": 18,
        "drsZones": 2,
        "direction": "против часовой стрелки",
        "lapRecord": "1:24.303 (Хэмильтон, 2020)",
        "date": "2025-07-06",
		"podium1": "Норис",
        "podium2": "Пиастри",
        "podium3": "Хюлькенберг",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/71d826175421b4c3acc527c817161dd0/"
    },
    "spa": {
        "id": "t13",
        "name": "Гран-при Бельгии",
        "logo": "Spa.svg",
        "miniLogo": "Spa-m.svg",
		"country": "be",
		"state": "Бельгия",
        "location": "Спа, Бельгия",
        "trackName": "Спа-Франкоршам",
        "length": "7 004 км",
        "laps": 44,
        "turns": 20,
        "drsZones": 2,
        "direction": "по часовой стрелке",
        "lapRecord": "1:40.510 (Пиастри, 2025)",
        "date": "2025-07-27",
		"hasSprint": true,
		"podium1": "Пиастри",
        "podium2": "Норрис",
        "podium3": "Леклер",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/ce6d886e90bbed00c61823ee57bf137a"
    },
    "hungaroring": {
        "id": "t14",
        "name": "Гран-при Венгрии",
        "logo": "Hungaroring.svg",
        "miniLogo": "Hungaroring-m.svg",
		"country": "hu",
		"state": "Венгрия",
        "location": "Будапешт, Венгрия",
        "trackName": "Хунгароринг",
        "length": "4 381 км",
        "laps": 70,
        "turns": 14,
        "drsZones": 2,
        "direction": "по часовой стрелке",
        "lapRecord": "1:13.447 (Хэмильтон, 2020)",
        "date": "2025-08-03 21:00",
		"podium1": "Пиастри",
        "podium2": "Норрис",
        "podium3": "Рассел",
        "streamLink": "",
        "recordingLink": "https://rutube.ru/video/06503abbf0e2016537de4f70412508a1"
    },
    "zandvoort": {
        "id": "t15",
        "name": "Гран-при Нидерландов",
        "logo": "Zandvoort.svg",
        "miniLogo": "Zandvoort-m.svg",
		"country": "nl",
		"state": "Нидерланды",
        "location": "Зандвоорт, Нидерланды",
        "trackName": "Зандвоорт",
        "length": "4 252 км",
        "laps": 72,
        "turns": 14,
        "drsZones": 2,
        "direction": "против часовой стрелки",
        "lapRecord": "1:08.885 (Ферстаппен, 2021)",
        "date": "2025-08-31 21:00",
		"podium1": "---",
        "podium2": "---",
        "podium3": "---",
        "streamLink": "",
        "recordingLink": ""
    },
    "monza": {
        "id": "t16",
        "name": "Гран-при Италии",
        "logo": "Monza.svg",
        "miniLogo": "Monza-m.svg",
		"country": "it",
		"state": "Италия",
        "location": "Монца, Италия",
        "trackName": "Национальный автодром Монцы",
        "length": "5 793 км",
        "laps": 53,
        "turns": 11,
        "drsZones": 2,
        "direction": "по часовой стрелке",
        "lapRecord": "1:18.887 (Хемильтон, 2020)",
        "date": "2025-09-07 21:00",
		"podium1": "---",
        "podium2": "---",
        "podium3": "---",
        "streamLink": "",
        "recordingLink": ""
    },
    "baku": {
        "id": "t17",
        "name": "Гран-при Азербайджана",
        "logo": "Baku.svg",
        "miniLogo": "Baku-m.svg",
		"country": "az",
		"state": "Азербайджан",
        "location": "Баку, Азербайджан",
        "trackName": "Городская трасса Баку",
        "length": "6 003 км",
        "laps": 51,
        "turns": 20,
        "drsZones": 2,
        "direction": "против часовой стрелки",
        "lapRecord": "1:40.203 (Леклер, 2023)",
        "date": "2025-09-21 19:00",
		"podium1": "---",
        "podium2": "---",
        "podium3": "---",
        "streamLink": "",
        "recordingLink": ""
    },
    "marina-bay": {
        "id": "t18",
        "name": "Гран-при Сингапура",
        "logo": "Marina Bay.svg",
        "miniLogo": "Marina Bay-m.svg",
		"country": "sg",
		"state": "Сингапур",
        "location": "Сингапур",
        "trackName": "Марина-Бэй",
        "length": "5 065 км",
        "laps": 61,
        "turns": 23,
        "drsZones": 3,
        "direction": "против часовой стрелки",
        "lapRecord": "1:29.525 (Норрис, 2024)",
        "date": "2025-10-05 20:00",
		"podium1": "---",
        "podium2": "---",
        "podium3": "---",
        "streamLink": "",
        "recordingLink": ""
    },
    "cota": {
        "id": "t19",
        "name": "Гран-при США",
        "logo": "COTA.svg",
        "miniLogo": "COTA-m.svg",
		"country": "us",
		"state": "США",
        "location": "Остин, США",
        "trackName": "Трасса Америк",
        "length": "5 513 км",
        "laps": 56,
        "turns": 20,
        "drsZones": 2,
        "direction": "против часовой стрелки",
        "lapRecord": "1:32.029 (Боттас, 2019)",
        "date": "2025-10-20 02:00",
		"hasSprint": true,
		"podium1": "---",
        "podium2": "---",
        "podium3": "---",
        "streamLink": "",
        "recordingLink": ""
    },
    "Rodriguez": {
        "id": "t20",
        "name": "Гран-при Мексики",
        "logo": "Rodríguez.svg",
        "miniLogo": "Rodríguez-m.svg",
		"country": "mx",
		"state": "Мексика",
        "location": "Мехико, Мексика",
        "trackName": "Автодром имени братьев Родригес",
        "length": "4 304 км",
        "laps": 71,
        "turns": 17,
        "drsZones": 3,
        "direction": "против часовой стрелки",
        "lapRecord": "1:14.759 (Риккардо, 2018)",
        "date": "2025-10-27 03:00",
		"podium1": "---",
        "podium2": "---",
        "podium3": "---",
        "streamLink": "",
        "recordingLink": ""
    },
    "interlagos": {
        "id": "t21",
        "name": "Гран-при Бразилии",
        "logo": "Interlagos.svg",
        "miniLogo": "Interlagos-m.svg",
		"country": "br",
		"state": "Бразилия",
        "location": "Сан-Паулу, Бразилия",
        "trackName": "Интерлагос",
        "length": "4 309 км",
        "laps": 71,
        "turns": 15,
        "drsZones": 2,
        "direction": "против часовой стрелки",
        "lapRecord": "1:11.010 (Перес, 2021)",
        "date": "2025-11-10 01:00",
		"hasSprint": true,
		"podium1": "---",
        "podium2": "---",
        "podium3": "---",
        "streamLink": "",
        "recordingLink": ""
    },
    "las-vegas": {
        "id": "t22",
        "name": "Гран-при Лас-Вегаса",
        "logo": "Las Vegas.svg",
        "miniLogo": "Las Vegas-m.svg",
		"country": "us",
		"state": "США",
        "location": "Лас-Вегас, США",
        "trackName": "Городская трасса Лас-Вегас",
        "length": "6 201 км",
        "laps": 50,
        "turns": 17,
        "drsZones": 2,
        "direction": "против часовой стрелки",
        "lapRecord": "1:32.312 (Рассел, 2024)",
        "date": "2025-11-22 12:00",
		"podium1": "---",
        "podium2": "---",
        "podium3": "---",
        "streamLink": "",
        "recordingLink": ""
    },
    "losail": {
        "id": "t23",
        "name": "Гран-при Катара",
        "logo": "Losail.svg",
        "miniLogo": "Losail-m.svg",
		"country": "qa",
		"state": "Катар",
        "location": "Доха, Катар",
        "trackName": "Международный автодром Лосаил",
        "length": "5 380 км",
        "laps": 57,
        "turns": 16,
        "drsZones": 2,
        "direction": "по часовой стрелке",
        "lapRecord": "1:20.520 (Ферстапен, 2024)",
        "date": "2025-11-30 24:00",
		"hasSprint": true,
		"podium1": "---",
        "podium2": "---",
        "podium3": "---",
        "streamLink": "",
        "recordingLink": ""
    },
    "yas-marina": {
        "id": "t24",
        "name": "Гран-при Абу-Даби",
        "logo": "Yas Marina.svg",
        "miniLogo": "Yas Marina-m.svg",
		"country": "ae",
		"state": "Объеденённые Арабские Эмираты",
        "location": "Абу-Даби, ОАЭ",
        "trackName": "Яс Марина",
        "length": "5 281 км",
        "laps": 58,
        "turns": 16,
        "drsZones": 2,
        "direction": "против часовой стрелки",
        "lapRecord": "1:22.109 (Ферстаппен, 2021)",
        "date": "2025-12-07 21:00",
		"podium1": "---",
        "podium2": "---",
        "podium3": "---",
        "streamLink": "",
        "recordingLink": ""
    }
};

function renderCalendar() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="calendar-container" id="calendarContainer">
            <div class="next-year-calendar">
                <h3>Календарь сезона 2025</h3>
                <div class="next-year-events" id="nextYearEvents"></div>
            </div>
			<div class="calendar-grid" id="calendarGrid"></div>
        </div>
    `;

    const calendarGrid = document.getElementById('calendarGrid');
    const nextYearEvents = document.getElementById('nextYearEvents');
    
    // Сортируем гран-при по дате
    const sortedTracks = Object.values(tracksData).sort((a, b) => 
        new Date(a.date) - new Date(b.date)
    );

    // Рендерим текущий сезон
    sortedTracks.forEach(track => {
        const trackCard = document.createElement('div');
        trackCard.className = 'track-card';
        trackCard.setAttribute('data-track', track.id);
        trackCard.setAttribute('data-date', track.date);
        
        const currentDate = new Date();
        const raceDate = new Date(track.date);
        const isFutureRace = raceDate > currentDate;
        const isToday = raceDate.toDateString() === currentDate.toDateString();
        
        // Определяем статус
        let status = '';
        if (isToday) {
            status = '<span class="status-badge today">Сегодня</span>';
            trackCard.classList.add('today');
        } else if (isFutureRace) {
            status = '<span class="status-badge upcoming">Ожидается</span>';
            trackCard.classList.add('upcoming');
        } else {
            status = '<span class="status-badge completed">Завершено</span>';
            trackCard.classList.add('completed');
        }

        // Таймер или кнопка
        let timeElement = '';
        if (isToday) {
            timeElement = track.streamLink ? 
                `<a href="${track.streamLink}" class="action-btn stream">Трансляция</a>` :
                '<div class="action-btn no-stream">Нет трансляции</div>';
        } else if (isFutureRace) {
            timeElement = `
                <div class="countdown">
                    <span>До гонки:</span>
                    <div class="timer" data-date="${track.date}">
                        <span class="days">00</span>д <span class="hours">00</span>ч 
                        <span class="minutes">00</span>м <span class="seconds">00</span>с
                    </div>
                </div>
            `;
        } else {
            timeElement = track.recordingLink ? 
                `<a href="${track.recordingLink}" class="action-btn recording">Запись</a>` :
                '<div class="action-btn no-recording">Нет записи</div>';
        }

        trackCard.innerHTML = `
            <div class="track-image">
                <img src="Images/Tracks/${track.miniLogo}" alt="${track.trackName}">
            </div>
            <div class="track-info">
                <div class="track-header">
                    <h3><img src="Images/Flags/${track.country}.svg" alt="flag" title="${track.state}" class="flag">  ${track.name}</h3>
                    ${track.hasSprint ? '<span class="sprint-badge">СПРИНТ</span>' : ''}
                </div>
                <div class="divider"></div>
                <div class="info-row">
                    <img src="Images/Icon/location.webp" alt="Место">
                    <span>Место:</span>
                    <span class="value">${track.location}</span>
                </div>
                <div class="info-row">
                    <img src="Images/Icon/track.webp" alt="Трасса">
                    <span>Трасса:</span>
                    <span class="value">${track.trackName}</span>
                </div>
                <div class="info-row">
                    <img src="Images/Icon/calendar.webp" alt="Дата">
                    <span>Дата:</span>
                    <span class="value">${formatDate(track.date)}</span>
                </div>
                <div class="divider"></div>
                <div class="track-footer">
                    ${timeElement}
                    ${status}
                </div>
            </div>
        `;

        trackCard.addEventListener('click', (e) => {
            if (!e.target.closest('.action-btn') && !e.target.closest('.sprint-badge')) {
                openModal(track);
            }
        });

        calendarGrid.appendChild(trackCard);
    });

    // Рендерим календарь текущего год
    nextYearCalendar.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'next-year-event';
        eventElement.innerHTML = `
            <div class="next-year-date">${formatShortDate(event.date)}</div>
            <div class="next-year-name">
                <img src="Images/Flags/${event.country}.svg" alt="flag" class="next-year-flag">
                ${event.name}
            </div>
        `;
        nextYearEvents.appendChild(eventElement);
    });

    // Инициализация таймеров
    initCountdowns();
    // Прокрутка к текущему событию
    scrollToCurrent();
}

function formatShortDate(dateStr) {
    const options = { day: 'numeric', month: 'short' };
    return new Date(dateStr).toLocaleDateString('ru-RU', options);
}

function formatDate(dateStr) {
    const options = { day: 'numeric', month: 'long' };
    return new Date(dateStr).toLocaleDateString('ru-RU', options);
}

function initCountdowns() {
    document.querySelectorAll('.timer').forEach(timer => {
        updateTimer(timer);
        setInterval(() => updateTimer(timer), 1000);
    });
}

function updateTimer(timer) {
    const targetDate = new Date(timer.dataset.date);
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        timer.innerHTML = '<span class="race-started">Гонка началась!</span>';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    timer.querySelector('.days').textContent = days.toString().padStart(2, '0');
    timer.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
    timer.querySelector('.minutes').textContent = mins.toString().padStart(2, '0');
    timer.querySelector('.seconds').textContent = secs.toString().padStart(2, '0');
}

function scrollToCurrent() {
    const cards = document.querySelectorAll('.track-card');
    const now = new Date();
    
    // Сначала ищем сегодняшнюю гонку
    let targetCard = Array.from(cards).find(card => {
        const cardDate = new Date(card.dataset.date);
        return cardDate.toDateString() === now.toDateString();
    });
    
    // Если нет сегодняшней, ищем ближайшую будущую
    if (!targetCard) {
        targetCard = Array.from(cards).find(card => {
            const cardDate = new Date(card.dataset.date);
            return cardDate > now;
        });
    }
    
    // Если не нашли, берем последнюю завершенную
    if (!targetCard && cards.length > 0) {
        targetCard = cards[cards.length - 1];
    }
    
    if (targetCard) {
        setTimeout(() => {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetCard.classList.add('highlight');
            setTimeout(() => targetCard.classList.remove('highlight'), 2000);
        }, 500);
    }
}

function openModal(track) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-image">
                <img src="Images/Tracks/${track.logo}" alt="${track.trackName}">
            </div>
            <div class="modal-info">
                <h2><img src="Images/Flags/${track.country}.svg" alt="flag" title="${track.state}" class="flag">     ${track.trackName}</h2>
                <div class="divider"></div>
                
                <div class="info-row">
                    <img src="Images/Icon/location.webp" alt="Место">
                    <span>Место проведения:</span>
                    <span class="value">${track.location}</span>
                </div>
                
                <div class="info-row">
                    <img src="Images/Icon/track.webp" alt="Длина">
                    <span>Длина трассы:</span>
                    <span class="value">${track.length}</span>
                </div>
                
                <div class="info-row">
                    <img src="Images/Icon/track.webp" alt="Повороты">
                    <span>Повороты:</span>
                    <span class="value">${track.turns}</span>
                </div>
                
                <div class="info-row">
                    <img src="Images/Icon/track.webp" alt="DRS">
                    <span>Зоны DRS:</span>
                    <span class="value">${track.drsZones}</span>
                </div>
                
                <div class="info-row">
                    <img src="Images/Icon/track.webp" alt="Направление">
                    <span>Направление:</span>
                    <span class="value">${track.direction}</span>
                </div>
                
                <div class="divider"></div>
                
                <div class="info-row">
                    <img src="Images/Icon/track.webp" alt="Рекорд">
                    <span>Рекорд круга:</span>
                    <span class="value">${track.lapRecord}</span>
                </div>
                
                <div class="divider"></div>
                
                <div class="podium-title">
                    <img src="Images/Icon/podium.webp" alt="Подиум">
                    <span>Подиум:</span>
                </div>
                
                <div class="podium-container">
                    <div class="podium-place second">
                        <div class="podium-step"></div>
                        <div class="driver-podium">
                            <span class="position-podium">2</span>
                            <span class="name-podium">${track.podium2}</span>
                        </div>
                    </div>
                    
                    <div class="podium-place first">
                        <div class="podium-step"></div>
                        <div class="driver-podium">
                            <span class="position-podium">1</span>
                            <span class="name-podium">${track.podium1}</span>
                        </div>
                    </div>
                    
                    <div class="podium-place third">
                        <div class="podium-step"></div>
                        <div class="driver-podium">
                            <span class="position-podium">3</span>
                            <span class="name-podium">${track.podium3}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button class="close-modal">&times;</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Закрытие при клике вне окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('close-modal')) {
            modal.remove();
        }
    });
}

if (window.location.hash === '#calendar') {
    renderCalendar();
}
ngLink": ""
    }
