const startingGridData = [
    { position: 1, driverId: 'ver', team: '' },
    { position: 2, driverId: 'rus', team: '' },
    { position: 3, driverId: 'lec', team: '' },
    { position: 4, driverId: 'pia', team: '' },
    { position: 5, driverId: 'nor', team: '' },
    { position: 6, driverId: 'ham', team: '' },
    { position: 7, driverId: 'ant', team: '' },
    { position: 8, driverId: 'law', team: '' },
    { position: 9, driverId: 'had', team: '' },
    { position: 10, driverId: 'gas', team: '' },
    { position: 11, driverId: 'col', team: '' },
    { position: 12, driverId: 'hul', team: '' },
    { position: 13, driverId: 'bea', team: '' },
    { position: 14, driverId: 'bor', team: '' },
    { position: 15, driverId: 'alo', team: '' },
    { position: 16, driverId: 'oco', team: '' },
    { position: 17, driverId: 'lin', team: '' },
    { position: 18, driverId: 'str', team: '' },
    { position: 19, driverId: 'alb', team: '' },
    { position: 20, driverId: 'per', team: '' },
    { position: 21, driverId: 'bot', pitLane: false, team: '' },
    { position: 22, driverId: 'sai', pitLane: false, team: '' },
];

const STARTING_GRID_WITH_PENALTIES = false;
const STARTING_GRID_WITH_SPRINT = true;

const DRIVER_SHORT_NAMES = {
    'норрис': 'NOR', 'ферстаппен': 'VER', 'бортолето': 'BOR', 'хаджар': 'HAD',
    'дуэн': 'DOO', 'гасли': 'GAS', 'перес': 'PER', 'антонелли': 'ANT',
    'алонсо': 'ALO', 'леклер': 'LEC', 'стролл': 'STR', 'цунода': 'TSU',
    'албон': 'ALB', 'чжоу': 'ZHO', 'хюлькенберг': 'HUL', 'лоусон': 'LAW',
    'окон': 'OCO', 'линдблад': 'LIN', 'колапинто': 'COL', 'хэмилтон': 'HAM',
    'сайнс': 'SAI', 'расселл': 'RUS', 'боттас': 'BOT', 'пиастри': 'PIA',
    'берман': 'BEA', 'джовинацци': 'GIO'
};

const DRIVER_ID_BY_SHORT = (() => {
    const map = {};

    if (typeof driversData !== 'undefined' && Array.isArray(driversData)) {
        driversData.forEach(d => {
            if (d.id) map[d.id.slice(0, 3).toLowerCase()] = d.id;
        });
    }

    if (typeof driversData !== 'undefined' && Array.isArray(driversData)) {
        driversData.forEach(d => {
            const lastName = d.name.includes(' ') ? d.name.split(' ').pop() : d.name;
            const code = DRIVER_SHORT_NAMES[lastName.toLowerCase()];
            if (code) map[code.toLowerCase()] = d.id;
        });
    }

    return map;
})();

const findDriverByShortId = shortId => {
    if (!shortId) return null;

    if (typeof findDriverById === 'function') {
        const direct = findDriverById(shortId);
        if (direct) return direct;
    }

    const key = String(shortId).toLowerCase();
    const fullId = DRIVER_ID_BY_SHORT[key];
    if (fullId && typeof findDriverById === 'function') return findDriverById(fullId);

    return null;
};

const weatherData = {
    type: 'cloud',
    typeName: 'Загрузка...',
    temperature: '--',
    wind: '--',
    humidity: '--',
    rain: 0
};

const WEATHER_MAP = [
    { test: /patchy rain|cloudy|overcast/, type: 'cloud', name: 'Облачно' },
    { test: /partly cloudy/, type: 'cloud', name: 'Переменная облачность' },
    { test: /sunny|clear/, type: 'sun', name: 'Солнечно' },
    { test: /mist|fog/, type: 'fog', name: 'Туман' },
    { test: /haze|smoke/, type: 'fog', name: 'Дымка' },
    { test: /drizzle|light rain/, type: 'rain', name: 'Небольшой дождь' },
    { test: /thunder/, type: 'rain', name: 'Гроза' },
    { test: /snow|blizzard/, type: 'rain', name: 'Снег' },
    { test: /rain|shower/, type: 'rain', name: 'Дождь' }
];

const getUpcomingGPs = () => {
    if (typeof calendarData === 'undefined') return [];
    return calendarData
        .filter(gp => !gp.canceled)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
};

const getNextGPs = (count = 2) => {
    const now = new Date();
    const result = [];
    for (const gp of getUpcomingGPs()) {
        const raceEnd = new Date(new Date(gp.date).getTime() + 3 * 60 * 60 * 1000);
        if (raceEnd > now) {
            result.push(gp);
            if (result.length === count) break;
        }
    }
    return result;
};

const getDriverShortName = driver => {
    const lastName = driver.name.includes(' ') ? driver.name.split(' ').pop() : driver.name;
    return DRIVER_SHORT_NAMES[lastName.toLowerCase()] || lastName.toUpperCase().substring(0, 4);
};

const mapWttrWeatherType = description => {
    const desc = (description || '').toLowerCase().trim();
    const found = WEATHER_MAP.find(w => w.test.test(desc));
    return found ? { type: found.type, typeName: found.name } : { type: 'cloud', typeName: description };
};

const fetchWeatherWttr = async location => {
    try {
        const response = await fetch(`https://wttr.in/${location}?format=j1`);
        if (!response.ok) return null;

        const data = await response.json();
        const current = data.current_condition[0];
        const today = data.weather[0];
        const todayForecast = today.hourly[4];

        const weatherType = mapWttrWeatherType(current.weatherDesc[0].value);
        const rainChance = parseInt(current.chanceofrain) || parseInt(todayForecast.chanceofrain) || 0;

        return {
            type: weatherType.type,
            typeName: weatherType.typeName,
            temperature: current.temp_C,
            wind: Math.round(current.windspeedKmph * 0.277),
            humidity: current.humidity,
            rain: rainChance
        };
    } catch {
        return null;
    }
};

const updateWeatherDisplay = data => {
    if (!data) return;
    Object.assign(weatherData, data);

    const set = (id, value, attr = 'textContent') => {
        const el = document.getElementById(id);
        if (el) el[attr] = value;
    };

    set('weatherIcon', `Images/Weather/${data.type}.png`, 'src');
    set('weatherIcon', data.typeName, 'alt');
    set('weatherTypeName', data.typeName);
    set('weatherTemp', `${data.temperature} °C`);
    set('weatherWind', `${data.wind} м/с`);
    set('weatherHumidity', `${data.humidity} %`);
    set('weatherRain', `~ ${data.rain} %`);
};

const getWeatherLocation = (nextGP, nextTrack) => nextTrack?.weatherLocation || '51.507,-0.128';

const calculateAgeOnDate = (birthDate, targetDate) => {
    const parts = birthDate.split('.');
    if (parts.length !== 3) return 0;

    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = parseInt(parts[2]);

    const birth = new Date(year, month, day);
    const target = new Date(targetDate);

    let age = target.getFullYear() - birth.getFullYear();
    const birthdayThisYear = new Date(target.getFullYear(), month, day);
    if (target < birthdayThisYear) age--;

    return age;
};

const getNextDriverBirthdays = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const results = [];
    const today = new Date(currentYear, now.getMonth(), now.getDate());

    driversData.forEach(driver => {
        const parts = driver.birthDate.split('.');
        if (parts.length !== 3) return;

        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1;

        let birthThisYear = new Date(currentYear, month, day);
        if (birthThisYear < today) {
            birthThisYear = new Date(currentYear + 1, month, day);
        }

        results.push({
            driver,
            date: birthThisYear,
            diff: birthThisYear - now,
            day,
            month
        });
    });

    results.sort((a, b) => a.diff - b.diff);
    if (!results.length) return [];

    const nearestDate = results[0].date;
    return results.filter(item => item.date.toDateString() === nearestDate.toDateString());
};

const createBirthdayBlock = () => {
    const block = document.createElement('div');
    block.className = 'main-block birthday-block';

    const birthdayList = getNextDriverBirthdays();

    if (!birthdayList.length) {
        block.innerHTML = `
            <div class="main-block-title">День рождения пилота</div>
            <div class="birthday-empty">Нет данных</div>
        `;
        return block;
    }

    const now = new Date();
    const firstDate = birthdayList[0].date;

    const day = String(firstDate.getDate()).padStart(2, '0');
    const month = String(firstDate.getMonth() + 1).padStart(2, '0');
    const year = firstDate.getFullYear();
    const dateStr = `${day}.${month}.${year}`;

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const birthDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate());
    const diffDays = Math.ceil((birthDate - today) / (1000 * 60 * 60 * 24));

    let daysText = '';
    if (diffDays === 0) daysText = 'СЕГОДНЯ!';
    else if (diffDays === 1) daysText = 'Завтра!';
    else if (diffDays > 1) daysText = `Через ${diffDays} дн.`;
    else daysText = `Прошло ${Math.abs(diffDays)} дн.`;

    let driversHTML = '';
    birthdayList.forEach(item => {
        const driver = item.driver;
        const age = calculateAgeOnDate(driver.birthDate, item.date);
        const teamColor = getTeamColor(driver.team);

        driversHTML += `
            <div class="birthday-driver-item" data-driver-id="${driver.id}" style="--team-color: ${teamColor}">
                <div class="birthday-driver-info">
                    <span class="birthday-number">${driver.number}</span>
                    <div class="birthday-name">
                        <img src="Images/Flags/${driver.country}.svg" class="birthday-flag" onerror="this.style.display='none'">
                        <span>${driver.name}</span>
                    </div>
                    <span class="birthday-age-small">${age} ${declension(age, ['год', 'года', 'лет'])}</span>
                </div>
            </div>
        `;
    });

    block.innerHTML = `
        <div class="main-block-title">День рождения пилота</div>
        <div class="birthday-content">
            <div class="birthday-date-row">
                <span class="birthday-date">${dateStr}</span>
                <span class="birthday-days">${daysText}</span>
            </div>
            <div class="birthday-drivers-list">
                ${driversHTML}
            </div>
        </div>
    `;

    block.querySelectorAll('.birthday-driver-item').forEach((item, index) => {
        item.addEventListener('click', e => {
            e.stopPropagation();
            if (typeof openDriverModal === 'function') {
                openDriverModal(birthdayList[index].driver);
            }
        });
    });

    return block;
};

const createStartingGridBlock = () => {
    const block = document.createElement('div');
    block.className = 'main-block starting-grid-block';
    block.style.gridColumn = 'span 3';

    const hasAnyDriver = startingGridData?.some(item => item.driverId && item.driverId !== '');

    const gridTitleText = STARTING_GRID_WITH_SPRINT
        ? 'Стартовая решётка на предстоящий спринт'
        : STARTING_GRID_WITH_PENALTIES
            ? 'Стартовая решётка на предстоящую гонку (с учётом штрафов)'
            : 'Стартовая решётка на предстоящую гонку';

    block.innerHTML = `
        <div class="main-block-title starting-grid-title">
            <span class="gp-full-text">${gridTitleText}</span>
            <span class="gp-short-text">${gridTitleText}</span>
        </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.className = 'starting-grid-wrapper';

    const gridContainer = document.createElement('div');
    gridContainer.className = 'starting-grid-container';

    const pitContainer = document.createElement('div');
    pitContainer.className = 'starting-grid-pit-container';

    if (!hasAnyDriver) {
        gridContainer.innerHTML = `<span class="starting-grid-empty-text">Квалификация ещё не состоялась</span>`;
        pitContainer.style.display = 'none';

        block.appendChild(wrapper);
        wrapper.appendChild(gridContainer);
        wrapper.appendChild(pitContainer);
        return block;
    }

    const overlay = document.createElement('div');
    overlay.className = 'starting-grid-blur-overlay';
    overlay.innerHTML = `
        <div class="starting-grid-blur-content">
            <span class="starting-grid-blur-text">${gridTitleText}</span>
            <span class="starting-grid-blur-title">! ОСТОРОЖНО СПОЙЛЕРЫ !</span>
            <span class="starting-grid-blur-title">Нажмите для показа</span>
        </div>
    `;
    block.appendChild(overlay);
    gridContainer.classList.add('blurred');

    const sortedGrid = [...startingGridData].sort((a, b) => a.position - b.position);
    const normalDrivers = sortedGrid.filter(item => !item.pitLane);
    const pitLaneDrivers = sortedGrid.filter(item => item.pitLane === true);
    const topDrivers = normalDrivers.slice(0, 22);

    const row1 = [];
    const row2 = [];
    topDrivers.forEach(item => {
        if (item.position % 2 === 1) row1.push(item);
        else row2.push(item);
    });

    const renderDriverCell = item => {
        const driver = findDriverByShortId(item.driverId);
        const pos = item.position;
        const poleClass = pos === 1 ? ' pole' : '';

        if (!driver) {
            return `
                <div class="grid-cell empty${poleClass}" data-pos="${pos}">
                    <span class="grid-pos">${pos}</span>
                    <span class="grid-name">—</span>
                </div>
            `;
        }

        const team = item.team || driver.team;
        const teamColor = getTeamColor(team);
        const teamLogoPath = getTeamLogo(team);
        const shortName = getDriverShortName(driver);
        const poleLabel = pos === 1 ? `<span class="grid-pole-label">- Поул -</span>` : '';

        return `
            <div class="grid-cell${poleClass}" data-driver-id="${driver.id}" data-pos="${pos}" style="--team-color: ${teamColor}">
                ${poleLabel}
                <span class="grid-pos">${pos}</span>
                <div class="grid-driver-info">
                    <span class="grid-name" style="color: ${teamColor}">${shortName}</span>
                    <img src="${teamLogoPath}" class="grid-team-logo" onerror="this.style.display='none'" title="${team}">
                </div>
            </div>
        `;
    };

    const row1HTML = row1.map(renderDriverCell).join('');
    const row2HTML = row2.map(renderDriverCell).join('');

    gridContainer.innerHTML = `
        <div class="grid-row grid-row-1">${row1HTML}</div>
        <div class="grid-row grid-row-2">
            <div class="grid-row-offset"></div>
            ${row2HTML}
        </div>
    `;

    if (pitLaneDrivers.length > 0) {
        pitLaneDrivers.sort((a, b) => a.position - b.position);

        let pitHTML = `
            <div class="pit-label">
                <span class="pit-label-text">PIT</span>
                <span class="pit-label-line"></span>
            </div>
            <div class="pit-drivers-grid">
        `;

        pitLaneDrivers.forEach(item => {
            const driver = findDriverByShortId(item.driverId);
            if (!driver) return;

            const team = item.team || driver.team;
            const teamColor = getTeamColor(team);
            const teamLogoPath = getTeamLogo(team);
            const shortName = getDriverShortName(driver);

            pitHTML += `
                <div class="pit-driver-item" data-driver-id="${driver.id}" style="--team-color: ${teamColor}">
                    <span class="pit-driver-pos">${item.position}</span>
                    <span class="pit-driver-name" style="color: ${teamColor}">${shortName}</span>
                    <img src="${teamLogoPath}" class="pit-driver-logo" onerror="this.style.display='none'" title="${team}">
                </div>
            `;
        });

        pitHTML += `</div>`;
        pitContainer.innerHTML = pitHTML;

        pitContainer.querySelectorAll('.pit-driver-item').forEach(item => {
            const driver = findDriverByShortId(item.dataset.driverId);
            if (driver) {
                item.addEventListener('click', e => {
                    e.stopPropagation();
                    if (typeof openDriverModal === 'function') openDriverModal(driver);
                });
            }
        });

        pitContainer.style.display = '';
    } else {
        pitContainer.style.display = 'none';
    }

    gridContainer.querySelectorAll('.grid-cell[data-driver-id]').forEach(cell => {
        const driver = findDriverByShortId(cell.dataset.driverId);
        if (driver) {
            cell.addEventListener('click', e => {
                e.stopPropagation();
                if (typeof openDriverModal === 'function') openDriverModal(driver);
            });
        }
    });

    block.addEventListener('click', function(e) {
        if (e.target.closest('.grid-cell') || e.target.closest('.pit-driver-item')) return;

        const ov = this.querySelector('.starting-grid-blur-overlay');
        const cont = this.querySelector('.starting-grid-container');

        if (cont?.classList.contains('blurred')) {
            cont.classList.remove('blurred');
            if (ov) {
                ov.style.opacity = '0';
                setTimeout(() => { ov.style.display = 'none'; }, 400);
            }
        }
    });

    block.appendChild(wrapper);
    wrapper.appendChild(gridContainer);
    wrapper.appendChild(pitContainer);

    return block;
};

const getGridForCurrentGP = () => startingGridData || [];

const createStatsBlock = () => {
    const block = document.createElement('div');
    block.className = 'main-block statistics-block';

    const title = document.createElement('div');
    title.className = 'main-block-title';
    title.textContent = 'Краткая статистика сезона';
    block.appendChild(title);

    const statsContainer = document.createElement('div');
    statsContainer.className = 'statistics-container';

    const groups = [
        { label: 'Лидер чемпионата', type: 'leader' },
        { label: 'Лидер Кубка конструкторов', type: 'constructor' },
        { label: 'Лучший пит-стоп сезона', type: 'pitstop' }
    ];

    groups.forEach(({ label, type }) => {
        const wrap = document.createElement('div');
        wrap.className = 'statistics-group';

        const labelEl = document.createElement('span');
        labelEl.className = 'statistics-label';
        labelEl.textContent = label;

        wrap.appendChild(labelEl);
        wrap.appendChild(createStatRow(type));
        statsContainer.appendChild(wrap);
    });

    block.appendChild(statsContainer);
    return block;
};

const createStatRow = type => {
    const row = document.createElement('div');
    row.className = 'statistics-row';

    let iconHTML = '';
    let nameHTML = '';
    let valueHTML = '';
    let clickTarget = 'results';
    let teamColor = '#FFFFFF';

    if (type === 'leader') {
        const leader = getChampionshipLeader();
        if (leader) {
            iconHTML = `<img src="Images/Flags/${leader.country}.svg" class="statistics-row-icon-img" onerror="this.style.display='none'">`;
            nameHTML = `<span class="statistics-row-name">${leader.name}</span>`;
            valueHTML = `<span class="statistics-row-value">${leader.points}</span>`;
            teamColor = getTeamColor(leader.team);
        } else {
            nameHTML = `<span class="statistics-row-name empty">Нет данных</span>`;
        }
    } else if (type === 'constructor') {
        const leader = getConstructorLeader();
        if (leader) {
            iconHTML = `<img src="${getTeamLogo(leader.team)}" class="statistics-row-icon-img team-logo" onerror="this.style.display='none'">`;
            nameHTML = `<span class="statistics-row-name">${leader.team}</span>`;
            valueHTML = `<span class="statistics-row-value">${leader.points}</span>`;
            teamColor = getTeamColor(leader.team);
        } else {
            nameHTML = `<span class="statistics-row-name empty">Нет данных</span>`;
        }
    } else if (type === 'pitstop') {
        const best = getBestPitstop();
        clickTarget = 'stats';
        if (best) {
            iconHTML = `<img src="${getTeamLogo(best.team)}" class="statistics-row-icon-img team-logo" onerror="this.style.display='none'">`;
            nameHTML = `<span class="statistics-row-name">${best.team}</span>`;
            valueHTML = `<span class="statistics-row-value">${best.time}с</span>`;
            teamColor = getTeamColor(best.team);
        } else {
            nameHTML = `<span class="statistics-row-name empty">Нет данных</span>`;
        }
    }

    row.style.setProperty('--team-color', teamColor);

    const leftPart = document.createElement('div');
    leftPart.className = 'statistics-row-left';
    leftPart.innerHTML = iconHTML + nameHTML;
    row.appendChild(leftPart);

    const rightPart = document.createElement('div');
    rightPart.innerHTML = valueHTML;
    row.appendChild(rightPart);

    row.addEventListener('click', () => {
        if (clickTarget === 'stats' && typeof navigateToStatsWithPitstopHighlight === 'function') {
            navigateToStatsWithPitstopHighlight();
        } else {
            document.querySelectorAll('.menu-item').forEach(btn => {
                if (btn.dataset.tab === clickTarget) btn.click();
            });
        }
    });

    return row;
};

const getChampionshipLeader = () => {
    if (typeof combinedStandings === 'undefined' || !combinedStandings.length) return null;
    const d = findDriverById(combinedStandings[0].driver);
    if (!d) return null;
    return { ...d, points: combinedStandings[0].points };
};

const getConstructorLeader = () => {
    if (typeof teamsData === 'undefined') return null;
    const s = calculateConstructorStandings();
    return s.length ? s[0] : null;
};

const getBestPitstop = () => {
    if (typeof pitstopData === 'undefined') return null;

    let best = null;
    let bestTimeNum = Infinity;

    pitstopData.forEach(gp => {
        const driverId = gp.driver;
        const timeStr = gp.time;
        const teamOverride = gp.team;

        if (!driverId || driverId === 'none') return;
        if (!timeStr || timeStr === '0.00' || timeStr === '0.00s') return;

        const t = parseFloat(timeStr);
        if (isNaN(t) || t >= bestTimeNum) return;

        const driver = findDriverById(driverId);
        if (!driver) return;

        bestTimeNum = t;
        const team = teamOverride || (typeof getPitstopTeam === 'function' ? getPitstopTeam(driver) : driver.team);
        best = { team, time: timeStr };
    });

    return best;
};

const loadWeatherForNextGP = async () => {
    const [nextGP] = getNextGPs(1);
    if (!nextGP) return;

    const nextTrack = getTrackById(nextGP.track);
    const weather = await fetchWeatherWttr(getWeatherLocation(nextGP, nextTrack));

    if (weather) {
        Object.assign(weatherData, weather);
        updateWeatherDisplay(weather);

        const blocksContainer = document.querySelector('.main-blocks');
        if (blocksContainer) {
            const oldTyreBlock = blocksContainer.querySelector('.tyres-block');
            if (oldTyreBlock) {
                oldTyreBlock.replaceWith(createTyreBlock());
            }
        }
    }
};

const createWeatherBlock = () => {
    const block = document.createElement('div');
    block.className = 'main-block weather-block';
    block.id = 'weatherBlock';

    const [nextGP] = getNextGPs(1);
    const nextTrack = nextGP ? getTrackById(nextGP.track) : null;

    const locationText = nextTrack
        ? `${nextTrack.trackName}, ${getCountryName(nextTrack.country)}`
        : 'Местоположение не определено';

    block.innerHTML = `
        <div class="main-block-title">Погода предстоящего <span class="gp-full-text">Гран-При</span><span class="gp-short-text">ГП</span></div>
        <div class="weather-header">
            <img src="Images/Weather/${weatherData.type}.png" alt="${weatherData.typeName}" class="weather-icon-large" id="weatherIcon">
            <span class="weather-type" id="weatherTypeName">${weatherData.typeName}</span>
        </div>
        <div class="weather-location" id="weatherLocation">${locationText}</div>
        <hr class="main-divider">
        <div class="weather-params">
            <div class="weather-param-cell">
                <span class="weather-value" id="weatherTemp">${weatherData.temperature} °C</span>
                <span class="weather-label">Температура</span>
            </div>
            <div class="weather-param-cell">
                <span class="weather-value" id="weatherWind">${weatherData.wind} м/с</span>
                <span class="weather-label">Ветер</span>
            </div>
            <div class="weather-param-cell">
                <span class="weather-value" id="weatherHumidity">${weatherData.humidity} %</span>
                <span class="weather-label">Влажность</span>
            </div>
            <div class="weather-param-cell">
                <span class="weather-value" id="weatherRain">~ ${weatherData.rain} %</span>
                <span class="weather-label">Вероятность осадков</span>
            </div>
        </div>
    `;
    return block;
};

const addGPModalOnRightClick = (block, gp, track) => {
    block.addEventListener('contextmenu', e => {
        e.preventDefault();
        e.stopPropagation();
        if (gp && track && typeof openTrackModal === 'function') {
            openTrackModal(track, gp);
        }
    });
};

const navigateToCalendarWithScroll = targetGpId => {
    let calendarBtn = null;
    document.querySelectorAll('.menu-item').forEach(btn => {
        if (btn.dataset.tab === 'calendar') calendarBtn = btn;
    });

    if (!calendarBtn) return;

    calendarBtn.click();

    const checkForCards = setInterval(() => {
        const cardsArea = document.getElementById('calendarCardsArea');
        if (!cardsArea) return;
        clearInterval(checkForCards);

        const cards = cardsArea.querySelectorAll('.calendar-card');
        if (!cards.length) return;

        const checkAnimationComplete = setInterval(() => {
            const firstCard = cards[0];
            const isVisible = firstCard.style.opacity === '1' || firstCard.getBoundingClientRect().height > 0;

            if (isVisible) {
                clearInterval(checkAnimationComplete);
                setTimeout(() => {
                    if (targetGpId) scrollToGPCard(targetGpId, cardsArea);
                    else scrollToCurrentGP();
                }, 300);
            }
        }, 100);
    }, 200);
};

const createNextGPBlock = () => {
    const block = document.createElement('div');
    block.className = 'main-block nextgp-block clickable';

    const upcoming = getNextGPs(1);
    const nextGP = upcoming[0];

    if (nextGP) {
        const nextTrack = getTrackById(nextGP.track);
        const gpNumber = getUpcomingGPs().indexOf(nextGP) + 1;

        block.innerHTML = `
            <div class="main-block-title nextgp-title">
                <span class="nextgp-title-left">
                    <img src="Images/Flags/${nextTrack.country}.svg" class="nextgp-flag-inline" title="${getCountryName(nextTrack.country)}"> 
                    ${nextGP.name}
                </span>
                ${gpNumber ? `<span class="gp-number-badge-next">${gpNumber}</span>` : ''}
            </div>
            <div class="nextgp-details">
                <div class="nextgp-detail"><img src="Images/Icon/location.webp" class="main-icon"><span class="nextgp-value">${nextTrack.location}</span></div>
                <div class="nextgp-detail"><img src="Images/Icon/track.webp" class="main-icon"><span class="nextgp-value">${nextTrack.trackName}</span></div>
                <div class="nextgp-detail"><img src="Images/Icon/calendar.webp" class="main-icon"><span class="nextgp-value">${formatDateLong(nextGP.date)}</span></div>
            </div>
            <hr class="main-divider">
            <div class="nextgp-footer">
                <div class="nextgp-links"></div>
                <div class="nextgp-countdown"><span>Загрузка...</span></div>
            </div>
        `;

        addGPModalOnRightClick(block, nextGP, nextTrack);
        block._nextGP = nextGP;
        block._nextTrack = nextTrack;
    } else {
        block.innerHTML = `
            <div class="main-block-title">Сезон 2026</div>
            <div class="nextgp-empty"><span>Сезон завершён</span></div>
        `;
    }

    block.addEventListener('click', () => {
        if (nextGP) navigateToCalendarWithScroll(nextGP.id);
        else document.querySelectorAll('.menu-item').forEach(btn => {
            if (btn.dataset.tab === 'calendar') btn.click();
        });
    });

    return block;
};

const createAfterNextGPBlock = () => {
    const block = document.createElement('div');
    block.className = 'main-block afternextgp-block clickable';

    const [, afterNextGP] = getNextGPs(2);

    if (afterNextGP) {
        const afterNextTrack = getTrackById(afterNextGP.track);
        const gpNumber = getUpcomingGPs().indexOf(afterNextGP) + 1;

        block.innerHTML = `
            <div class="main-block-title nextgp-title">
                <span class="nextgp-title-left">
                    <img src="Images/Flags/${afterNextTrack.country}.svg" class="nextgp-flag-inline" title="${getCountryName(afterNextTrack.country)}"> 
                    ${afterNextGP.name}
                </span>
                ${gpNumber ? `<span class="gp-number-badge-next">${gpNumber}</span>` : ''}
            </div>
            <div class="nextgp-details">
                <div class="nextgp-detail"><img src="Images/Icon/calendar.webp" class="main-icon"><span class="nextgp-value">${formatDateLong(afterNextGP.date)}</span></div>
            </div>
        `;

        addGPModalOnRightClick(block, afterNextGP, afterNextTrack);
    } else {
        block.innerHTML = `
            <div class="main-block-title">Далее</div>
            <div class="nextgp-empty"><span>Нет данных</span></div>
        `;
    }

    block.addEventListener('click', () => {
        if (afterNextGP) navigateToCalendarWithScroll(afterNextGP.id);
        else document.querySelectorAll('.menu-item').forEach(btn => {
            if (btn.dataset.tab === 'calendar') btn.click();
        });
    });

    return block;
};

const createTyreBlock = () => {
    const block = document.createElement('div');
    block.className = 'main-block tyres-block';

    const [nextGP] = getNextGPs(1);

    let hardCompound = 'C2';
    let mediumCompound = 'C3';
    let softCompound = 'C4';

    if (nextGP?.tires) {
        const tireParts = nextGP.tires.split(',').map(t => t.trim());
        if (tireParts.length >= 3) {
            hardCompound = tireParts[0];
            mediumCompound = tireParts[1];
            softCompound = tireParts[2];
        }
    }

    const tyreSpecsByType = {
        'Hard': {
            img: 'Images/Wheels/Hard.png',
            common: { temp: '70 °C', diameter: '18"', creator: 'Pirelli' },
            front: { size: '280/705', weight: '10.4 кг' },
            rear: { size: '375/710', weight: '12.8 кг' }
        },
        'Medium': {
            img: 'Images/Wheels/Medium.png',
            common: { temp: '90 °C', diameter: '18"', creator: 'Pirelli' },
            front: { size: '280/705', weight: '10.4 кг' },
            rear: { size: '375/710', weight: '12.8 кг' }
        },
        'Soft': {
            img: 'Images/Wheels/Soft.png',
            common: { temp: '110 °C', diameter: '18"', creator: 'Pirelli' },
            front: { size: '280/705', weight: '10.4 кг' },
            rear: { size: '375/710', weight: '12.8 кг' }
        },
        'Intermediate': {
            img: 'Images/Wheels/Intermediate.png',
            common: { heating: '60 °C', drainage: '31 л/с', diameter: '18"', creator: 'Pirelli' },
            front: { size: '280/710', weight: '10.3 кг' },
            rear: { size: '375/715', weight: '13.2 кг' }
        },
        'Wet': {
            img: 'Images/Wheels/Wet.png',
            common: { heating: '---', drainage: '76 л/с', diameter: '18"', creator: 'Pirelli' },
            front: { size: '280/715', weight: '11.3 кг' },
            rear: { size: '375/720', weight: '13.4 кг' }
        }
    };

    const getTyreInfo = compound => {
        if (compound === hardCompound) return { type: 'Hard', img: 'Images/Wheels/Hard.png', active: true };
        if (compound === mediumCompound) return { type: 'Medium', img: 'Images/Wheels/Medium.png', active: true };
        if (compound === softCompound) return { type: 'Soft', img: 'Images/Wheels/Soft.png', active: true };
        return { type: '---', img: 'Images/Wheels/Hard.png', active: false };
    };

    const createTyreModalCard = compoundName => {
        const specs = tyreSpecsByType[compoundName];
        if (!specs) return null;

        const createSpec = (label, value) => `
            <div class="tyre-modal-spec">
                <span class="tyre-modal-spec-label">${label}</span>
                <span class="tyre-modal-spec-value">${value}</span>
            </div>`;

        let specsHTML = `
            <div class="tyre-modal-specs-row">
                <div class="tyre-modal-specs-col">
                    <div class="tyre-modal-specs-title">Передние</div>
                    ${createSpec('Размер', specs.front.size)}
                    ${createSpec('Вес', specs.front.weight)}
                </div>
                <div class="tyre-modal-specs-col">
                    <div class="tyre-modal-specs-title">Задние</div>
                    ${createSpec('Размер', specs.rear.size)}
                    ${createSpec('Вес', specs.rear.weight)}
                </div>
            </div>
        `;

        if (specs.common) {
            specsHTML += `<div class="tyre-modal-specs-section"><div class="tyre-modal-specs-title">Общие</div>`;
            if (specs.common.diameter !== undefined) specsHTML += createSpec('Диаметр', specs.common.diameter);
            if (specs.common.temp !== undefined) specsHTML += createSpec('Прогрев', specs.common.temp);
            if (specs.common.heating !== undefined) specsHTML += createSpec('Прогрев', specs.common.heating);
            if (specs.common.drainage !== undefined) specsHTML += createSpec('Водоотведение', specs.common.drainage);
            if (specs.common.creator !== undefined) specsHTML += createSpec('Производитель', specs.common.creator);
            specsHTML += `</div>`;
        }

        const typeColorClass = {
            'Hard': 'tyre-color-hard',
            'Medium': 'tyre-color-medium',
            'Soft': 'tyre-color-soft',
            'Intermediate': 'tyre-color-intermediate',
            'Wet': 'tyre-color-wet'
        }[compoundName] || '';

        return `
            <div class="tyre-modal-card" data-tyre="${compoundName}">
                <div class="tyre-modal-card-header">
                    <img src="${specs.img}" class="tyre-modal-card-img" onerror="this.src='Images/Wheels/Hard.png'">
                    <div class="tyre-modal-card-name ${typeColorClass}">${compoundName}</div>
                </div>
                ${specsHTML}
            </div>
        `;
    };

    const showAllTyresModal = () => {
        const existingModal = document.querySelector('.tyre-modal-overlay');
        if (existingModal) {
            existingModal.remove();
            return;
        }

        const tyreTypes = ['Hard', 'Medium', 'Soft', 'Intermediate', 'Wet'];

        let cardsHTML = '';
        tyreTypes.forEach((type, index) => {
            const card = createTyreModalCard(type);
            if (card) {
                cardsHTML += card;
                if (index === 2) cardsHTML += `<div class="tyre-modal-divider"></div>`;
            }
        });

        const overlay = document.createElement('div');
        overlay.className = 'tyre-modal-overlay';
        overlay.innerHTML = `
            <div class="tyre-modal">
                <button class="tyre-modal-close-btn">✕</button>
                <div class="tyre-modal-grid">
                    ${cardsHTML}
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        const closeModal = () => {
            overlay.remove();
            document.removeEventListener('keydown', escHandler);
        };

        function escHandler(e) {
            if (e.key === 'Escape') closeModal();
        }

        overlay.querySelector('.tyre-modal-close-btn').addEventListener('click', closeModal);
        overlay.addEventListener('click', e => {
            if (e.target === overlay) closeModal();
        });
        document.addEventListener('keydown', escHandler);

        requestAnimationFrame(() => overlay.classList.add('active'));
    };

    const allCompounds = ['C1', 'C2', 'C3', 'C4', 'C5'];

    const topHTML = allCompounds.map(c => {
        const info = getTyreInfo(c);
        return `
            <div class="tyre-item ${info.active ? 'clickable' : 'dimmed'}" data-compound="${c}">
                <span class="tyre-name">${c}</span>
                <img src="${info.img}" class="tyre-img">
                <span class="tyre-type">${info.type}</span>
            </div>
        `;
    }).join('');

    const rainActive = weatherData.rain > 70;

    const bottomHTML = `
        <div class="tyre-item clickable ${rainActive ? '' : 'dimmed'}" data-compound="Intermediate">
            <span class="tyre-name">Intermediate</span>
            <img src="${rainActive ? 'Images/Wheels/Intermediate.png' : 'Images/Wheels/Hard.png'}" class="tyre-img">
        </div>
        <div class="tyre-item clickable ${rainActive ? '' : 'dimmed'}" data-compound="Wet">
            <span class="tyre-name">Wet</span>
            <img src="${rainActive ? 'Images/Wheels/Wet.png' : 'Images/Wheels/Hard.png'}" class="tyre-img">
        </div>
    `;

    block.innerHTML = `
        <div class="main-block-title">Состав шин предстоящего <span class="gp-full-text">Гран-При</span><span class="gp-short-text">ГП</span></div>
        <div class="tyres-top">${topHTML}</div>
        <hr class="main-divider">
        <div class="tyres-bottom">${bottomHTML}</div>
    `;

    block.querySelectorAll('.tyre-item').forEach(item => {
        item.addEventListener('click', e => {
            e.stopPropagation();
            showAllTyresModal();
        });
    });

    return block;
};

let mainTimerInterval = null;
const soundPlayed5min = {};
const soundPlayed0min = {};

const startMainTimer = () => {
    if (mainTimerInterval) clearInterval(mainTimerInterval);

    const updateTimer = () => {
        const block = document.querySelector('.nextgp-block');
        if (!block) {
            clearInterval(mainTimerInterval);
            return;
        }

        const now = new Date();

        if (!block._nextGP) {
            const [gp] = getNextGPs(1);
            if (gp) {
                block._nextGP = gp;
                block._nextTrack = getTrackById(gp.track);
            }
        }

        const nextGP = block._nextGP;
        const nextTrack = block._nextTrack;

        if (!nextGP || !nextTrack) {
            const footer = block.querySelector('.nextgp-footer');
            if (footer) footer.innerHTML = '<span class="calendar-status-text">Сезон завершён</span>';
            clearInterval(mainTimerInterval);
            return;
        }

        const raceDate = new Date(nextGP.date);
        const diff = raceDate - now;

        const footer = block.querySelector('.nextgp-footer');
        if (!footer) return;

        let linksDiv = footer.querySelector('.nextgp-links');
        if (!linksDiv) {
            linksDiv = document.createElement('div');
            linksDiv.className = 'nextgp-links';
            footer.prepend(linksDiv);
        }

        let countdownDiv = footer.querySelector('.nextgp-countdown');
        if (!countdownDiv) {
            countdownDiv = document.createElement('div');
            countdownDiv.className = 'nextgp-countdown';
            footer.appendChild(countdownDiv);
        }

        const isEventNearOrPassed = eventDateStr => {
            if (!eventDateStr) return false;
            const eventDate = new Date(eventDateStr);
            return now >= new Date(eventDate.getTime() - 5 * 60 * 1000);
        };

        const checkAndPlaySound = (eventDateStr, eventType, gpId) => {
            if (!eventDateStr) return;

            const eventDate = new Date(eventDateStr);
            const timeToEvent = eventDate - now;
            const soundKey = `${gpId}_${eventType}`;

            if (soundPlayed5min[soundKey] === undefined) soundPlayed5min[soundKey] = false;
            if (soundPlayed0min[soundKey] === undefined) soundPlayed0min[soundKey] = false;

            const fiveMinDiff = Math.abs(timeToEvent - 5 * 60 * 1000);
            if (timeToEvent > 0 && fiveMinDiff < 1000 && !soundPlayed5min[soundKey]) {
                playF1Sound();
                soundPlayed5min[soundKey] = true;
            }

            if (timeToEvent > 0 && timeToEvent < 1000 && !soundPlayed0min[soundKey]) {
                playF1Sound();
                soundPlayed0min[soundKey] = true;
            }

            if (timeToEvent < -1000) {
                delete soundPlayed5min[soundKey];
                delete soundPlayed0min[soundKey];
            }
        };

        if (nextGP.sprint) checkAndPlaySound(nextGP.sprint, 'sprint', nextGP.id);
        if (nextGP.quali) checkAndPlaySound(nextGP.quali, 'quali', nextGP.id);
        checkAndPlaySound(nextGP.date, 'race', nextGP.id);

        linksDiv.innerHTML = '';

        if (nextGP.sprint && nextGP.recordingSprint && isEventNearOrPassed(nextGP.sprint)) {
            const sprintEl = document.createElement('button');
            sprintEl.className = 'main-gp-btn sprint';
            sprintEl.textContent = 'Спринт';
            sprintEl.dataset.video = nextGP.recordingSprint;
            sprintEl.dataset.title = `Спринт ${nextGP.name}`;
            sprintEl.onclick = e => {
                e.stopPropagation();
                if (typeof openVideoModal === 'function') {
                    openVideoModal(sprintEl.dataset.video, sprintEl.dataset.title);
                }
            };
            linksDiv.appendChild(sprintEl);
        }

        if (nextGP.quali && nextGP.recordingQuali && isEventNearOrPassed(nextGP.quali)) {
            const qualiEl = document.createElement('button');
            qualiEl.className = 'main-gp-btn quali';
            qualiEl.textContent = 'Квалификация';
            qualiEl.dataset.video = nextGP.recordingQuali;
            qualiEl.dataset.title = `Квалификация ${nextGP.name}`;
            qualiEl.onclick = e => {
                e.stopPropagation();
                if (typeof openVideoModal === 'function') {
                    openVideoModal(qualiEl.dataset.video, qualiEl.dataset.title);
                }
            };
            linksDiv.appendChild(qualiEl);
        }

        if (isEventNearOrPassed(nextGP.date)) {
            if (nextGP.recordingRace) {
                const raceBtn = document.createElement('button');
                raceBtn.className = 'main-gp-btn race';
                raceBtn.textContent = 'Гонка';
                raceBtn.dataset.video = nextGP.recordingRace;
                raceBtn.dataset.title = `Гонка ${nextGP.name}`;
                raceBtn.onclick = e => {
                    e.stopPropagation();
                    if (typeof openVideoModal === 'function') {
                        openVideoModal(raceBtn.dataset.video, raceBtn.dataset.title);
                    }
                };
                countdownDiv.innerHTML = '';
                countdownDiv.appendChild(raceBtn);
            } else {
                countdownDiv.innerHTML = '<span class="calendar-status-text">Гонка началась</span>';
            }
        } else if (diff > 0) {
            const d = Math.floor(diff / 86400000);
            const h = Math.floor((diff % 86400000) / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            countdownDiv.innerHTML = `<span>До гонки:</span> <span class="countdown-timer"><strong>${d}</strong> дн. <strong>${h}</strong> ч. <strong>${m}</strong> м. <strong>${s}</strong> с.</span>`;
        } else {
            countdownDiv.innerHTML = '<span class="calendar-status-text">Гонка завершена</span>';
        }
    };

    updateTimer();
    mainTimerInterval = setInterval(updateTimer, 1000);
};

const AUDIO_PATHS = ['Styles/F1.mp3', '../Styles/F1.mp3', 'F1.mp3', '/Styles/F1.mp3'];

const playF1Sound = () => {
    let index = 0;

    const tryNext = () => {
        if (index >= AUDIO_PATHS.length) {
            tryPlayBeepSound();
            return;
        }

        const audio = new Audio(AUDIO_PATHS[index++]);
        audio.volume = 1.0;

        const handleFail = () => {
            audio.onerror = null;
            tryNext();
        };

        audio.onerror = handleFail;
        audio.play().catch(handleFail);
    };

    tryNext();
};

const tryPlayBeepSound = () => {
    try {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = context.createOscillator();
        const gain = context.createGain();

        oscillator.connect(gain);
        gain.connect(context.destination);

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(880, context.currentTime);
        oscillator.frequency.setValueAtTime(1100, context.currentTime + 0.15);

        gain.gain.setValueAtTime(0.15, context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.4);

        oscillator.start(context.currentTime);
        oscillator.stop(context.currentTime + 0.4);
    } catch {}
};

const initMainPage = async container => {
    container.style.display = 'block';
    container.style.flexDirection = '';
    container.style.gap = '';
    container.style.padding = '30px 20px';
    container.innerHTML = '';

    const header = document.createElement('div');
    header.className = 'main-header';
    header.innerHTML = `
        <h1 class="main-title">77 чемпионат мира Formula 1</h1>
        <hr class="main-title-divider">
    `;
    container.appendChild(header);

    const blocks = document.createElement('div');
    blocks.className = 'main-blocks';

    blocks.appendChild(createStatsBlock());

    const centerColumn = document.createElement('div');
    centerColumn.className = 'main-center-column';
    centerColumn.appendChild(createNextGPBlock());
    centerColumn.appendChild(createAfterNextGPBlock());
    blocks.appendChild(centerColumn);

    blocks.appendChild(createWeatherBlock());
    blocks.appendChild(createTyreBlock());

    container.appendChild(blocks);

    const divider = document.createElement('hr');
    divider.className = 'main-row-divider';
    container.appendChild(divider);

    const secondRow = document.createElement('div');
    secondRow.className = 'main-second-row';
    secondRow.appendChild(createBirthdayBlock());
    secondRow.appendChild(createStartingGridBlock());

    container.appendChild(secondRow);

    await loadWeatherForNextGP();

    startMainTimer();
};