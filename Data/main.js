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

	const gridTitleTextFull = STARTING_GRID_WITH_SPRINT
		? 'Стартовая решётка на предстоящий спринт'
		: STARTING_GRID_WITH_PENALTIES
			? 'Стартовая решётка на предстоящую гонку <span class="grid-title-note">(с учётом штрафов)</span>'
			: 'Стартовая решётка на предстоящую гонку';

	block.innerHTML = `
		<div class="main-block-title starting-grid-title">
			<span class="gp-full-text">${gridTitleTextFull}</span>
			<span class="gp-short-text">${gridTitleTextFull}</span>
			<span class="starting-grid-legend">
				<span class="legend-item"><span class="legend-dot pole"></span> Поул</span>
				<span class="legend-sep">|</span>
				<span class="legend-item"><span class="legend-dot penalty"></span> Штраф</span>
			</span>
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
			<span class="starting-grid-blur-text">${gridTitleTextFull}</span>
			<span class="starting-grid-blur-title">! ОСТОРОЖНО СПОЙЛЕРЫ !</span>
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
		const penaltyClass = item.penalties ? ' penalty' : '';

		if (!driver) {
			return `
				<div class="grid-cell empty${poleClass}${penaltyClass}" data-pos="${pos}">
					<span class="grid-pos">${pos}</span>
					<span class="grid-name">—</span>
				</div>
			`;
		}

		const team = item.team || driver.team;
		const teamColor = getTeamColor(team);
		const teamLogoPath = getTeamLogo(team);
		const shortName = getDriverShortName(driver);

		return `
			<div class="grid-cell${poleClass}${penaltyClass}" data-driver-id="${driver.id}" data-pos="${pos}" style="--team-color: ${teamColor}">
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
                <span class="pit-label-text">Pit lane</span>
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
				<div class="pit-driver-item${item.penalties ? ' penalty' : ''}" data-driver-id="${driver.id}" style="--team-color: ${teamColor}">
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
            iconHTML = `<img src="${getTeamLogo(leader.team)}" class="statistics-row-icon-img team-logo" onerror="this.style.display='none'">`;
            nameHTML = `<span class="statistics-row-name">${leader.name}</span><img src="Images/Flags/${leader.country}.svg" class="statistics-row-icon-img statistics-row-flag" onerror="this.style.display='none'">`;
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
        best = { team, time: timeStr, driver: driver.name };
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
                <div class="nextgp-countdown"><span>Загрузка...</span></div>
                <div class="nextgp-links"></div>
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

    const rainActive = weatherData.rain > 40;

	const bottomHTML = `
		<div class="tyre-item tyre-item-no-label clickable ${rainActive ? '' : 'dimmed'}" data-compound="Intermediate">
			<span class="tyre-name">Intermediate</span>
			<img src="${rainActive ? 'Images/Wheels/Intermediate.png' : 'Images/Wheels/Hard.png'}" class="tyre-img">
		</div>
		<div class="tyre-item tyre-item-no-label clickable ${rainActive ? '' : 'dimmed'}" data-compound="Wet">
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

		let countdownDiv = footer.querySelector('.nextgp-countdown');
		if (!countdownDiv) {
			countdownDiv = document.createElement('div');
			countdownDiv.className = 'nextgp-countdown';
			footer.appendChild(countdownDiv);
		}

		let linksDiv = footer.querySelector('.nextgp-links');
		if (!linksDiv) {
			linksDiv = document.createElement('div');
			linksDiv.className = 'nextgp-links';
			footer.appendChild(linksDiv);
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

		if (isEventNearOrPassed(nextGP.date)) {
			countdownDiv.innerHTML = '';
		} else if (diff > 0) {
			const d = Math.floor(diff / 86400000);
			const h = Math.floor((diff % 86400000) / 3600000);
			const m = Math.floor((diff % 3600000) / 60000);
			const s = Math.floor((diff % 60000) / 1000);
			countdownDiv.innerHTML = `<span>До гонки:</span> <span class="countdown-timer"><strong>${d}</strong> дн. <strong>${h}</strong> ч. <strong>${m}</strong> м. <strong>${s}</strong> с.</span>`;
		} else {
			countdownDiv.innerHTML = '<span class="calendar-status-text">Гонка завершена</span>';
		}
		
		if (!block._sessionButtons) {
			block._sessionButtons = {};

			const makeBtn = (key, cls, label, getData) => {
				const btn = document.createElement('button');
				btn.className = `main-gp-btn ${cls}`;
				btn.textContent = label;
				btn.style.display = 'none';
				btn.addEventListener('click', e => {
					e.stopPropagation();
					const { video, title } = getData();
					if (video && typeof openVideoModal === 'function') {
						openVideoModal(video, title);
					}
				});
				linksDiv.appendChild(btn);
				block._sessionButtons[key] = btn;
				return btn;
			};

			makeBtn('spec', 'spec', 'Спец-гонка', () => ({
				video: nextGP.recordingSpecRace,
				title: `Спец-гонка ${nextGP.name}`
			}));
			makeBtn('sprint', 'sprint', 'Спринт', () => ({
				video: nextGP.recordingSprint,
				title: `Спринт ${nextGP.name}`
			}));
			makeBtn('quali', 'quali', 'Квалификация', () => ({
				video: nextGP.recordingQuali,
				title: `Квалификация ${nextGP.name}`
			}));
			makeBtn('race', 'race', 'Гонка', () => ({
				video: nextGP.recordingRace,
				title: `Гонка ${nextGP.name}`
			}));
		}

		const btns = block._sessionButtons;
		
		btns.spec.style.display = nextGP.recordingSpecRace ? '' : 'none';
		btns.sprint.style.display = (nextGP.sprint && nextGP.recordingSprint && isEventNearOrPassed(nextGP.sprint)) ? '' : 'none';
		btns.quali.style.display = (nextGP.quali && nextGP.recordingQuali && isEventNearOrPassed(nextGP.quali)) ? '' : 'none';
		btns.race.style.display = (isEventNearOrPassed(nextGP.date) && nextGP.recordingRace) ? '' : 'none';
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

/* ============================================================
   ГЛАВНАЯ — НОВЫЙ ДИЗАЙН (v6)
   Три блока: этап + соседние гонки, данные этапа, решётка.
   ============================================================ */

let mgGridRevealed = false;
let mgMainTimer = null;
let mgWeatherRequested = false;
let mgMQBound = false;

/* ---------- Мелочи ---------- */

const mgPad = value => String(value).padStart(2, '0');

const mgNum = value => {
    const number = Number(value);
    return Number.isFinite(number) ? new Intl.NumberFormat('ru-RU').format(number) : value;
};

const mgFlag = (country, cls = '') =>
    `<img class="mg-flag ${cls}" src="Images/Flags/${country}.svg" alt="" title="${getCountryName(country)}" onerror="this.style.display='none'">`;

const mgLogo = (team, cls = '') =>
    `<img class="mg-logo ${cls}" src="${getTeamLogo(team)}" alt="" title="${team}" onerror="this.style.display='none'">`;

const mgKeep = name => {
    const parts = String(name || '').trim().split(/\s+/);
    if (parts.length < 2) return `<span class="mg-nowrap">${parts[0] || ''}</span>`;
    const last = parts.pop();
    return `${parts.join(' ')} <span class="mg-nowrap">${last}</span>`;
};

const mgTitle = text => `<div class="mg-block-title">${text}</div>`;

const mgToDate = value => new Date(String(value).replace(' ', 'T'));

/* ---------- Данные ---------- */

const mgData = () => {
    const upcoming = getUpcomingGPs();
    const [nextGP = null, afterGP = null] = getNextGPs(2);
    const track = nextGP ? getTrackById(nextGP.track) : null;

    const round = nextGP ? upcoming.findIndex(gp => gp.id === nextGP.id) + 1 : 0;

    const leaderEntry = combinedStandings.length ? combinedStandings[0] : null;
    const secondEntry = combinedStandings.length > 1 ? combinedStandings[1] : null;
    const leaderBase = leaderEntry ? findDriverById(leaderEntry.driver) : null;
    const leader = leaderBase ? { ...leaderBase, points: leaderEntry.points } : null;
    const leaderGap = leaderEntry && secondEntry ? Math.max(0, leaderEntry.points - secondEntry.points) : 0;

    const constructors = typeof calculateConstructorStandings === 'function'
        ? calculateConstructorStandings()
        : [];
    const constructor = constructors[0] || null;
    const constructorSecond = constructors[1] || null;
    const constructorGap = constructor && constructorSecond ? Math.max(0, constructor.points - constructorSecond.points) : 0;
    const constructorEngine = constructor ? (getTeamData(constructor.team)?.engine || '—') : '—';

    const pitstop = typeof getBestPitstop === 'function' ? getBestPitstop() : null;

    const birthdayRaw = typeof getNextDriverBirthdays === 'function' ? getNextDriverBirthdays() : [];
    let birthday = { dateStr: '', daysText: '', daysUntil: 0, list: [] };

    if (birthdayRaw.length) {
        const firstDate = birthdayRaw[0].date;
        const now = new Date();
        const dateStr = `${mgPad(firstDate.getDate())}.${mgPad(firstDate.getMonth() + 1)}.${firstDate.getFullYear()}`;
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const target = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate());
        const diffDays = Math.ceil((target - today) / 86400000);

        let daysText = `через ${diffDays} ${declension(diffDays, ['день', 'дня', 'дней'])}`;
        if (diffDays === 0) daysText = 'сегодня';
        else if (diffDays === 1) daysText = 'завтра';
        else if (diffDays < 0) daysText = `${Math.abs(diffDays)} дн. назад`;

        birthday = {
            dateStr,
            daysText,
            daysUntil: diffDays,
            list: birthdayRaw.map(item => ({
                driver: item.driver,
                age: calculateAgeOnDate(item.driver.birthDate, item.date)
            }))
        };
    }

    return {
        upcoming, nextGP, afterGP, track,
        total: upcoming.length,
        round,
        leader, leaderGap,
        constructor, constructorGap, constructorEngine,
        pitstop, birthday
    };
};

/* ---------- Отсчёт, сессии, видео ---------- */

const mgCountdown = gp => {
    const target = mgToDate(gp.date).getTime();
    const diff = target - Date.now();

    if (diff <= 0) {
        return `<div class="mg-countdown is-done" data-countdown="${gp.date}"><span>Гонка завершена</span></div>`;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    return `
        <div class="mg-countdown" data-countdown="${gp.date}">
            <div class="mg-cd"><b data-cd="d">${mgPad(d)}</b><span>дней</span></div>
            <i>:</i>
            <div class="mg-cd"><b data-cd="h">${mgPad(h)}</b><span>часов</span></div>
            <i>:</i>
            <div class="mg-cd"><b data-cd="m">${mgPad(m)}</b><span>минут</span></div>
            <i>:</i>
            <div class="mg-cd"><b data-cd="s">${mgPad(s)}</b><span>секунд</span></div>
        </div>`;
};

const mgSchedule = gp => {
    const events = [];
    const sprintDate = String(gp.sprint || '').trim();
    if (sprintDate) events.push({ type: 'sprint', label: 'Спринт', date: sprintDate });
    if (gp.quali) events.push({ type: 'quali', label: 'Квалификация', date: gp.quali });
    events.push({ type: 'race', label: 'Гонка', date: gp.date });

    const now = Date.now();
    let nextMarked = false;

    return `<div class="mg-sched">${events.map(event => {
        const stamp = mgToDate(event.date).getTime();
        const isPast = stamp < now;
        const isNext = !isPast && !nextMarked;
        if (isNext) nextMarked = true;
        const time = getGPDateParts(event.date).time;

        return `
            <div class="mg-sched-row ${isPast ? 'is-past' : ''} ${isNext ? 'is-next' : ''}">
                <span class="mg-sched-dot is-${event.type}"></span>
                <span class="mg-sched-name">${event.label}</span>
                <span class="mg-sched-date">${formatDateMini(event.date)} · ${time}</span>
            </div>`;
    }).join('')}</div>`;
};

const mgMedia = gp => {
    const items = [
        { label: 'Спец-гонка', video: gp.recordingSpecRace, date: null },
        { label: 'Спринт', video: gp.recordingSprint, date: gp.sprint, hidden: !gp.hasSprint },
        { label: 'Квалификация', video: gp.recordingQuali, date: gp.quali },
        { label: 'Гонка', video: gp.recordingRace, date: gp.date }
    ].filter(item => item.video && !item.hidden);

    if (!items.length) {
        return '';
    }

    return `<div class="mg-media">${items.map(item => {
        const open = !item.date || isEventNearOrPassed(item.date);
        return `
            <button type="button" class="mg-link ${open ? '' : 'is-locked'}"
                ${open ? `data-video="${item.video}" data-title="${item.label} · ${gp.name}"` : 'disabled'}>
                ${item.label}${open ? '' : ' · скоро'}
            </button>`;
    }).join('')}</div>`;
};

/* ---------- Погода и шины ---------- */

const mgWeatherValue = (key, value) => {
    if (value === '--' || value === undefined || value === null) return '—';
    if (key === 'temp') return `${value} °C`;
    if (key === 'wind') return `${value} м/с`;
    if (key === 'humidity') return `${value} %`;
    if (key === 'rain') return `${value} %`;
    return value;
};

const mgWeatherCell = data => {
    const track = data.track;
    return `
        <section class="mg-data-sec">
            <div class="mg-data-head">
                <span class="mg-data-title">Погода</span>
            </div>
            <div class="mg-weather">
                <img class="mg-weather-icon" data-w="icon" src="Images/Weather/${weatherData.type}.png" alt="${weatherData.typeName}" onerror="this.style.display='none'">
                <div class="mg-weather-copy">
                    <b data-w="type">${weatherData.typeName}</b>
                    <span>${track ? `${track.location}` : '—'}</span>
                </div>
            </div>
            <div class="mg-wmetrics">
                <div><b data-w="temp">—</b><span>температура</span></div>
                <div><b data-w="wind">—</b><span>ветер</span></div>
                <div><b data-w="humidity">—</b><span>влажность</span></div>
                <div><b data-w="rain">—</b><span>осадки</span></div>
            </div>
        </section>`;
};

const mgRainActive = () => {
    const chance = parseFloat(String(weatherData.rain).replace(',', '.'));
    return Number.isFinite(chance) && chance > 40;
};

const mgTyreInfo = data => {
    const raw = String(data.nextGP?.tires || '').trim();
    const compounds = /^[1-5]{2,}$/.test(raw)
        ? raw.split('').map(code => `C${code}`)
        : raw.split(',').map(item => item.trim()).filter(Boolean);

    return {
        hard: compounds[0] || 'C2',
        medium: compounds[1] || 'C3',
        soft: compounds[2] || 'C4',
        rainActive: mgRainActive()
    };
};

const mgTyresCell = data => {
    const info = mgTyreInfo(data);
    const set = [
        { code: info.hard, type: 'Hard' },
        { code: info.medium, type: 'Medium' },
        { code: info.soft, type: 'Soft' }
    ];

    /* Дождевые составы — только при высокой вероятности осадков, в общем ряду */
    if (info.rainActive) {
        set.push({ code: '', type: 'Intermediate', short: 'Inter' }, { code: '', type: 'Wet', short: 'Wet' });
    }

    return `
        <section class="mg-data-sec">
            <div class="mg-data-head">
                <span class="mg-data-title">Шины на этап</span>
            </div>
            <div class="mg-tyres${info.rainActive ? ' has-rain' : ''}">
                ${set.map(item => `
                    <button type="button" class="mg-tyre" data-mg-tyres title="${item.type}${item.code ? ` · ${item.code}` : ''}">
                        <img src="Images/Wheels/${item.type}.png" alt="${item.type}">
                        <span>${item.code ? `<b>${item.code}</b>` : ''}<span class="mg-tyre-type">${item.short || item.type}</span></span>
                    </button>`).join('')}
            </div>
        </section>`;
};

const mgUpdateTyres = () => {
    const wrap = document.querySelector('.mg-tyres');
    if (!wrap) return;

    const active = mgRainActive();
    if (wrap.classList.contains('has-rain') === active) return;

    const data = mgData();
    if (!data.nextGP) return;

    const section = wrap.closest('.mg-data-sec');
    if (section) section.outerHTML = mgTyresCell(data);
};

const mgParseRecord = value => {
    const raw = String(value || '').trim();
    if (!raw) return null;
    const [time, rest = ''] = raw.split(/,\s*/);
    const parts = rest.split(/\s+-\s+/);
    return {
        time: time || '—',
        driver: parts[0] || '',
        team: parts[1] || '',
        year: parts[2] || ''
    };
};

const mgRecordsCell = data => {
    const race = mgParseRecord(data.track?.lapRecord);
    const quali = mgParseRecord(data.track?.qulRecord);

    const row = (label, record) => `
        <div class="mg-rec-row">
            <span class="mg-rec-label">${label}</span>
            <span class="mg-rec-line">
                <b class="mg-rec-time">${record ? record.time : '—'}</b>
                <span class="mg-rec-sub">${record ? [record.driver, record.year].filter(Boolean).join(' · ') : 'нет данных'}</span>
            </span>
        </div>`;

    return `
        <section class="mg-data-sec mg-records">
            <div class="mg-data-head">
                <span class="mg-data-title">Рекорды круга</span>
            </div>
            ${row('в гонке', race)}
            ${row('в квале', quali)}
        </section>`;
};

/* ---------- Стартовая решётка ---------- */

const mgRealGridData = () => {
    if (typeof startingGridData === 'undefined') return [];
    return startingGridData
        .filter(item => item.driverId)
        .map(item => {
            const driver = findDriverByShortId(item.driverId);
            if (!driver) return null;
            return {
                position: item.position,
                driver,
                team: item.team || driver.team,
                pole: item.position === 1,
                penalty: Boolean(item.penalties),
                pitLane: Boolean(item.pitLane)
            };
        })
        .filter(Boolean)
        .sort((a, b) => a.position - b.position);
};

const mgGridCell = (item, extra = '') => `
    <button type="button" class="mg-grid-cell ${extra} ${item.pole ? 'is-pole' : ''} ${item.penalty ? 'is-penalty' : ''}"
        style="--tc:${getTeamColor(item.team)};order:${item.position}"
        data-driver-id="${item.driver.id}"
        aria-label="${item.driver.name} · ${item.team}"
        title="${item.driver.name} · ${item.team}">
        <span class="mg-grid-pos">${item.position}</span>
        <span class="mg-grid-name">${getDriverShortName(item.driver).slice(0, 3).toUpperCase()}</span>
        ${mgLogo(item.team, 'mg-grid-logo')}
    </button>`;

const mgGridCompactMQ = window.matchMedia('(max-width: 900px)');

const mgGridBoard = grid => {
    /* На узких экранах — плоская сетка в естественном порядке */
    if (mgGridCompactMQ.matches) {
        return `
            <div class="mg-grid-board">
                <div class="mg-grid-inner is-compact">
                    ${grid.map(item => mgGridCell(item)).join('')}
                </div>
            </div>`;
    }

    /* Шахматный порядок: нечётные места — первый ряд, чётные — второй со смещением */
    const rowOne = grid.filter((_, index) => index % 2 === 0);
    const rowTwo = grid.filter((_, index) => index % 2 === 1);

    return `
        <div class="mg-grid-board">
            <div class="mg-grid-inner">
                <div class="mg-grid-line">${rowOne.map(item => mgGridCell(item)).join('')}</div>
                <div class="mg-grid-line is-offset">${rowTwo.map(item => mgGridCell(item)).join('')}</div>
            </div>
        </div>`;
};

const mgPitRow = pit => `
    <div class="mg-grid-pit">
        <span class="mg-grid-pit-label">PIT</span>
        ${pit.map(item => mgGridCell(item, 'is-pit')).join('')}
    </div>`;

const mgGridSection = data => {
    const all = mgRealGridData();
    const grid = all.filter(item => !item.pitLane);
    const pit = all.filter(item => item.pitLane);

    if (!all.length) {
        const quali = data.nextGP?.quali ? formatDateLong(data.nextGP.quali) : '';
        return `
            <article class="mg-card mg-grid-sec">
                <div class="mg-grid-head">
                    <span class="mg-data-title">Стартовая решётка</span>
                    <span class="mg-grid-note">Квалификация ещё не состоялась${quali ? ` · ${quali}` : ''}</span>
                    <button type="button" class="mg-link" data-mg-tab="calendar">календарь</button>
                </div>
            </article>`;
    }

    return `
        <article class="mg-card mg-grid-sec">
            <div class="mg-grid-head">
                <span class="mg-data-title">Стартовая решётка</span>
                <span class="mg-legend"><i class="is-pole"></i> поул <i class="is-penalty"></i> штраф</span>
            </div>
            <div class="mg-grid-stage">
                <div class="mg-grid-container${mgGridRevealed ? '' : ' is-blurred'}">
                    ${mgGridBoard(grid)}
                    ${pit.length ? mgPitRow(pit) : ''}
                </div>
                ${mgGridRevealed ? '' : `
                    <div class="mg-grid-blur" data-mg-reveal>
                        <span class="mg-grid-blur-text">Стартовая решётка на предстоящую гонку</span>
                        <span class="mg-grid-blur-title">! осторожно, спойлеры !</span>
                    </div>`}
            </div>
        </article>`;
};

/* ---------- Блок этапа ---------- */

const mgPrevGP = () => {
    const now = Date.now();
    const past = calendarData
        .filter(gp => mgToDate(gp.date).getTime() + 3 * 3600000 < now)
        .sort((a, b) => mgToDate(a.date) - mgToDate(b.date));
    return past[past.length - 1] || null;
};

const mgAround = data => {
    const prev = mgPrevGP();
    if (!prev && !data.afterGP) return '';

    const cell = (label, gp, round) => gp ? `
        <button type="button" class="mg-around-cell" data-gp-id="${gp.id}">
            <span class="mg-around-label">${label} · этап ${round}</span>
            <span class="mg-around-name">${mgKeep(gp.name)}</span>
            <span class="mg-around-date">${formatDateLong(gp.date)}</span>
        </button>` : '';

    const cells = [
        cell('Предыдущий', prev, Math.max(1, data.round - 1)),
        cell('Следующий', data.afterGP, data.round + 1)
    ].filter(Boolean);

    return `
        <div class="mg-around${cells.length === 1 ? ' is-single' : ''}">
            ${cells.join('')}
        </div>`;
};

const mgRaceBlock = data => {
    const gp = data.nextGP;
    const track = data.track;
    const around = mgAround(data);

    return `
        <div class="mg-weekend">
            <article class="mg-card mg-race" data-gp-id="${gp.id}">
                <div class="mg-race-head">
                    ${mgTitle('Следующий этап')}
                </div>

                <div class="mg-race-top">
                    <div class="mg-race-copy">
                        <h1 class="mg-gp-name">${mgKeep(gp.name)}</h1>
                        <div class="mg-gp-meta">
                            <span>${mgFlag(track.country)} ${track.location}</span>
                            <i></i>
                            <span>${track.trackName}</span>
                            <i></i>
                            <span>${formatDateLong(gp.date)}</span>
                        </div>

                        <div class="mg-race-timing">
                            <div class="mg-race-countdown">
                                ${mgCountdown(gp)}
                                ${mgMedia(gp)}
                            </div>
                            <div class="mg-timing-side">
                                ${mgSchedule(gp)}
                            </div>
                        </div>
                    </div>

                    <div class="mg-race-map">
                        <span class="mg-race-round-mark" aria-hidden="true">${data.round}</span>
                        <img src="Images/Tracks/${track.id}.png" alt="${track.trackName}" onerror="this.style.display='none'">
                    </div>
                </div>

                ${around ? `<div class="mg-around-sec">${around}</div>` : ''}
            </article>

            <article class="mg-card mg-data-col">
                ${mgWeatherCell(data)}
                ${mgTyresCell(data)}
                ${mgRecordsCell(data)}
            </article>

            ${mgGridSection(data)}
        </div>`;
};

/* ---------- Карточки правой колонки ---------- */

const mgStatCard = ({ title, name, logo, value, suffix, sub }) => `
    <article class="mg-card mg-stat">
        ${mgTitle(title)}
        <div class="mg-stat-main">
            <div class="mg-stat-name">${name || 'Нет данных'}${logo ? `<span class="mg-stat-logo">${logo}</span>` : ''}</div>
            <div class="mg-stat-value">${value || '—'}${suffix ? `<small>${suffix}</small>` : ''}</div>
        </div>
        <div class="mg-stat-sub">${sub || ''}</div>
    </article>`;

const mgStatCards = data => {
    const leader = data.leader;
    const constructor = data.constructor;
    const pitstop = data.pitstop;

    return `
        ${mgStatCard({
            title: 'Лидер чемпионата',
            name: leader ? `${leader.name} ${mgFlag(leader.country, 'mg-flag-sm')}` : 'Нет данных',
            logo: leader ? mgLogo(leader.team) : '',
            value: leader ? mgNum(leader.points) : '—',
            sub: leader ? `${data.leaderGap ? ` Отрыв +${mgNum(data.leaderGap)}` : ''}` : ''
        })}
        ${mgStatCard({
            title: 'Кубок конструкторов',
            name: constructor ? constructor.team : 'Нет данных',
            logo: constructor ? mgLogo(constructor.team) : '',
            value: constructor ? mgNum(constructor.points) : '—',
            sub: constructor ? `${data.constructorGap ? ` Отрыв +${mgNum(data.constructorGap)}` : ''}` : ''
        })}
        ${mgStatCard({
            title: 'Лучший пит-стоп',
            name: pitstop ? pitstop.team : 'Нет данных',
            logo: pitstop ? mgLogo(pitstop.team) : '',
            value: pitstop ? pitstop.time : '—',
            suffix: 'с',
            sub: pitstop ? `${pitstop.driver}` : 'Нет данных',
        })}`;
};

const mgBirthdayCard = data => {
    const b = data.birthday;

    return `
        <article class="mg-card mg-bday">
            ${mgTitle('День рождения')}
            ${!b.list.length ? '<div class="mg-empty">Нет данных</div>' : `
                <div class="mg-bday-top">
                    <span class="mg-bday-date">${b.dateStr}</span>
                    <span class="mg-bday-when">${b.daysText}</span>
                </div>
                <div class="mg-bday-list">
                    ${b.list.map(item => `
                        <button type="button" class="mg-bday-row" data-driver-id="${item.driver.id}" style="--tc:${getTeamColor(item.driver.team)}">
                            <span class="mg-bday-num">${item.driver.number}</span>
                            <span class="mg-bday-name">${mgFlag(item.driver.country, 'mg-flag-sm')}<span>${item.driver.name}</span></span>
                            <span class="mg-bday-age">${item.age} ${declension(item.age, ['год', 'года', 'лет'])}</span>
                        </button>`).join('')}
                </div>`}
        </article>`;
};

const mgSeasonEnd = () => `
    <article class="mg-card mg-season">
        ${mgTitle('Сезон завершён')}
        <p>Все этапы календаря пройдены. Итоги доступны в разделах «Результаты» и «Статистика».</p>
        <div class="mg-season-actions">
            <button type="button" class="mg-btn" data-mg-tab="results">Результаты</button>
            <button type="button" class="mg-btn" data-mg-tab="calendar">Календарь</button>
        </div>
    </article>`;

/* ---------- Рендер ---------- */

const mgToolbar = () => `
    <header class="mg-toolbar">
        <span class="mg-toolbar-center">77 чемпионат мира Formula 1</span>
    </header>`;

const mgRender = (root = document.getElementById('mgRoot')) => {
    if (!root) return;

    const data = mgData();

    root.innerHTML = `${mgToolbar()}${!data.nextGP
        ? `<div class="mg-layout">
               <div class="mg-main">${mgSeasonEnd()}</div>
               <aside class="mg-side">
                   ${mgStatCards(data)}
                   ${mgBirthdayCard(data)}
               </aside>
           </div>`
        : `<div class="mg-layout">
               <div class="mg-main">
                   ${mgRaceBlock(data)}
               </div>
               <aside class="mg-side">
                   ${mgStatCards(data)}
                   ${mgBirthdayCard(data)}
               </aside>
           </div>`}`;

    mgApplyWeather();
    mgTick();
};

/* ---------- События ---------- */

const mgGoTo = (tab, gpId = '') => {
    if (!tab) return;
    if (tab === 'calendar' && gpId) {
        navigateToCalendarWithScroll(gpId);
        return;
    }
    const button = document.querySelector(`.menu-item[data-tab="${tab}"]`);
    if (button) button.click();
};

const mgBind = root => {
    root.addEventListener('click', event => {
        const video = event.target.closest('[data-video]');
        if (video) {
            event.preventDefault();
            event.stopPropagation();
            if (typeof openVideoModal === 'function') {
                openVideoModal(video.dataset.video, video.dataset.title || 'Видео');
            }
            return;
        }

        const tyre = event.target.closest('[data-mg-tyres]');
        if (tyre) {
            event.preventDefault();
            mgOpenTyres();
            return;
        }

        const reveal = event.target.closest('[data-mg-reveal]');
        if (reveal) {
            event.preventDefault();
            mgGridRevealed = true;
            mgRender();
            return;
        }

        const driverEl = event.target.closest('[data-driver-id]');
        if (driverEl) {
            event.preventDefault();
            event.stopPropagation();
            const driver = findDriverById(driverEl.dataset.driverId);
            if (driver && typeof openDriverModal === 'function') openDriverModal(driver);
            return;
        }

        const tab = event.target.closest('[data-mg-tab]');
        if (tab) {
            event.preventDefault();
            mgGoTo(tab.dataset.mgTab);
            return;
        }

        const gpEl = event.target.closest('[data-gp-id]');
        if (gpEl) mgGoTo('calendar', gpEl.dataset.gpId);
    });

    root.addEventListener('contextmenu', event => {
        const gpEl = event.target.closest('[data-gp-id]');
        if (!gpEl) return;
        event.preventDefault();
        const gp = getGPById(gpEl.dataset.gpId);
        if (!gp) return;
        const track = getTrackById(gp.track);
        if (track && typeof openTrackModal === 'function') openTrackModal(track, gp);
    });
};

/* ---------- Погода ---------- */

const mgApplyWeather = () => {
    document.querySelectorAll('[data-w="icon"]').forEach(image => {
        image.src = `Images/Weather/${weatherData.type}.png`;
        image.alt = weatherData.typeName;
    });
    document.querySelectorAll('[data-w="type"]').forEach(el => { el.textContent = weatherData.typeName; });
    document.querySelectorAll('[data-w="temp"]').forEach(el => { el.textContent = mgWeatherValue('temp', weatherData.temperature); });
    document.querySelectorAll('[data-w="wind"]').forEach(el => { el.textContent = mgWeatherValue('wind', weatherData.wind); });
    document.querySelectorAll('[data-w="humidity"]').forEach(el => { el.textContent = mgWeatherValue('humidity', weatherData.humidity); });
    document.querySelectorAll('[data-w="rain"]').forEach(el => { el.textContent = mgWeatherValue('rain', weatherData.rain); });
    mgUpdateTyres();
};

const mgLoadWeather = async () => {
    if (mgWeatherRequested) return;
    mgWeatherRequested = true;

    const data = mgData();
    if (!data.nextGP || !data.track) return;

    const location = getWeatherLocation(data.nextGP, data.track);
    const weather = await Promise.race([
        fetchWeatherWttr(location),
        new Promise(resolve => setTimeout(() => resolve(null), 8000))
    ]);

    if (weather) {
        Object.assign(weatherData, weather);
    } else if (weatherData.typeName === 'Загрузка...') {
        Object.assign(weatherData, {
            type: 'cloud', typeName: 'Нет данных',
            temperature: '--', wind: '--', humidity: '--', rain: '--'
        });
    }

    mgApplyWeather();
};

/* ---------- Таймер и звуковые уведомления ---------- */

const mgCheckSounds = () => {
    const [gp] = getNextGPs(1);
    if (!gp) return;

    const now = Date.now();

    const check = (dateStr, type) => {
        if (!dateStr) return;
        const timeToEvent = mgToDate(dateStr).getTime() - now;
        const soundKey = `${gp.id}_${type}`;

        if (soundPlayed5min[soundKey] === undefined) soundPlayed5min[soundKey] = false;
        if (soundPlayed0min[soundKey] === undefined) soundPlayed0min[soundKey] = false;

        if (timeToEvent > 0 && Math.abs(timeToEvent - 5 * 60 * 1000) < 1000 && !soundPlayed5min[soundKey]) {
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

    check(gp.sprint, 'sprint');
    check(gp.quali, 'quali');
    check(gp.date, 'race');
};

const mgTick = () => {
    if (!document.getElementById('mgRoot')) {
        if (mgMainTimer) clearInterval(mgMainTimer);
        mgMainTimer = null;
        return;
    }

    document.querySelectorAll('[data-countdown]').forEach(element => {
        const target = mgToDate(element.dataset.countdown).getTime();
        if (!Number.isFinite(target)) return;

        const diff = target - Date.now();
        if (diff <= 0) {
            if (!element.dataset.done) {
                element.dataset.done = '1';
                element.classList.add('is-done');
                element.innerHTML = '<span>Гонка завершена</span>';
            }
            return;
        }

        if (element.dataset.done) {
            delete element.dataset.done;
            element.classList.remove('is-done');
        }

        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        const set = (key, value) => {
            const cell = element.querySelector(`[data-cd="${key}"]`);
            if (cell) cell.textContent = mgPad(value);
        };

        set('d', d);
        set('h', h);
        set('m', m);
        set('s', s);
    });

    mgCheckSounds();
};

/* ---------- Модалка шин ---------- */

const mgOpenTyres = () => {
    document.querySelector('.mg-tyre-overlay')?.remove();

    const data = mgData();
    const info = mgTyreInfo(data);

    const specs = {
        Hard: { front: ['280/705', '10.4 кг'], rear: ['375/710', '12.8 кг'], common: [['Прогрев', '70 °C'], ['Диаметр', '18"']] },
        Medium: { front: ['280/705', '10.4 кг'], rear: ['375/710', '12.8 кг'], common: [['Прогрев', '90 °C'], ['Диаметр', '18"']] },
        Soft: { front: ['280/705', '10.4 кг'], rear: ['375/710', '12.8 кг'], common: [['Прогрев', '110 °C'], ['Диаметр', '18"']] },
        Intermediate: { front: ['280/710', '10.3 кг'], rear: ['375/715', '13.2 кг'], common: [['Прогрев', '60 °C'], ['Водоотведение', '31 л/с']] },
        Wet: { front: ['280/715', '11.3 кг'], rear: ['375/720', '13.4 кг'], common: [['Прогрев', '—'], ['Водоотведение', '76 л/с']] }
    };

    const codeFor = type => type === 'Hard' ? info.hard : type === 'Medium' ? info.medium : type === 'Soft' ? info.soft : '—';
    const activeCodes = [info.hard, info.medium, info.soft];

    const cards = Object.keys(specs).map(type => {
        const spec = specs[type];
        const code = codeFor(type);
        const active = activeCodes.includes(code);

        return `
            <article class="mg-tyre-card ${active ? 'is-active' : ''}">
                <div class="mg-tyre-card-head">
                    <img src="Images/Wheels/${type}.png" alt="${type}" onerror="this.style.display='none'">
                    <div><strong>${type}</strong><span>${code}</span></div>
                    <small>${active ? 'на этапе' : 'резерв'}</small>
                </div>
                <div class="mg-tyre-card-section">
                    <span>Передние</span>
                    <div><i>Размер</i><b>${spec.front[0]}</b></div>
                    <div><i>Вес</i><b>${spec.front[1]}</b></div>
                </div>
                <div class="mg-tyre-card-section">
                    <span>Задние</span>
                    <div><i>Размер</i><b>${spec.rear[0]}</b></div>
                    <div><i>Вес</i><b>${spec.rear[1]}</b></div>
                </div>
                <div class="mg-tyre-card-section is-common">
                    ${spec.common.map(([label, value]) => `<div><i>${label}</i><b>${value}</b></div>`).join('')}
                </div>
            </article>`;
    }).join('');

    const overlay = document.createElement('div');
    overlay.className = 'mg-tyre-overlay';
    overlay.innerHTML = `
        <div class="mg-tyre-modal" role="dialog" aria-modal="true" aria-label="Состав шин">
            <button type="button" class="mg-modal-close" aria-label="Закрыть">×</button>
            <div class="mg-tyre-modal-head">
                <h2>Состав шин</h2>
                <p>На этом этапе: <b>${info.hard}</b> Hard, <b>${info.medium}</b> Medium, <b>${info.soft}</b> Soft. Дождевые составы активируются при вероятности осадков выше 40%.</p>
            </div>
            <div class="mg-tyre-modal-grid">${cards}</div>
        </div>`;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    const close = () => {
        overlay.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', esc);
    };

    function esc(event) {
        if (event.key === 'Escape') close();
    }

    overlay.querySelector('.mg-modal-close').addEventListener('click', close);
    overlay.addEventListener('click', event => {
        if (event.target === overlay) close();
    });
    document.addEventListener('keydown', esc);

    requestAnimationFrame(() => overlay.classList.add('is-open'));
};

/* ---------- Инициализация главной ---------- */

const initMainPage = async container => {
    container.innerHTML = '';
    container.style.display = 'block';
    container.style.padding = '0';

    mgGridRevealed = false;

    const root = document.createElement('div');
    root.className = 'mg-page mg-content mg-root';
    root.id = 'mgRoot';
    container.appendChild(root);

    mgRender(root);
    mgBind(root);

    if (mgMainTimer) clearInterval(mgMainTimer);
    mgMainTimer = setInterval(mgTick, 1000);

    if (!mgMQBound) {
        mgMQBound = true;
        mgGridCompactMQ.addEventListener('change', () => {
            mgRender();
        });
    }

    mgLoadWeather();
};