const weatherData = {
    type: "cloud",
    typeName: "Загрузка...",
    temperature: "--",
    wind: "--",
    humidity: "--",
    rain: 0
};

function mapWttrWeatherType(description) {
    const desc = description.toLowerCase();
    
    if (desc.includes('patchy rain nearby')) return { type: "cloud", typeName: "Облачно" };
    if (desc.includes('sunny') || desc.includes('clear')) return { type: "sun", typeName: "Солнечно" };
    if (desc.includes('partly cloudy')) return { type: "cloud", typeName: "Облачно" };
    if (desc.includes('cloudy') || desc.includes('overcast')) return { type: "cloud", typeName: "Облачно" };
    if (desc.includes('mist') || desc.includes('fog')) return { type: "cloud", typeName: "Туман" };
    if (desc.includes('drizzle') || desc.includes('light rain')) return { type: "rain", typeName: "Небольшой дождь" };
    if (desc.includes('rain') || desc.includes('shower')) return { type: "rain", typeName: "Дождь" };
    if (desc.includes('thunder')) return { type: "rain", typeName: "Гроза" };
    if (desc.includes('snow')) return { type: "rain", typeName: "Снег" };
    
    return { type: "cloud", typeName: description };
}

async function fetchWeatherWttr(location) {
    try {
        const url = `https://wttr.in/${encodeURIComponent(location)}?format=j1`;
        const response = await fetch(url);
        
        if (!response.ok) throw new Error('Ошибка запроса');
        
        const data = await response.json();
        const current = data.current_condition[0];
        
        // Берём прогноз на сегодня (первый день)
        const today = data.weather[0];
        // Берём первый доступный период дня (утро/день/вечер/ночь)
        const todayForecast = today.hourly[4]; // Примерно полдень
        
        const weatherType = mapWttrWeatherType(current.weatherDesc[0].value);
        
        // chanceofrain из прогноза на сегодня (если в текущей погоде нет)
        const rainChance = parseInt(current.chanceofrain) || 
                          parseInt(todayForecast.chanceofrain) || 0;
        
        return {
            type: weatherType.type,
            typeName: weatherType.typeName,
            temperature: current.temp_C,
            wind: Math.round(current.windspeedKmph * 0.277),
            humidity: current.humidity,
            rain: rainChance
        };
    } catch (error) {
        console.warn('Ошибка загрузки погоды:', error);
        return null;
    }
}

function updateWeatherDisplay(data) {
    if (!data) return;
    
    Object.assign(weatherData, data);
    
    const icon = document.getElementById('weatherIcon');
    const typeName = document.getElementById('weatherTypeName');
    const temp = document.getElementById('weatherTemp');
    const wind = document.getElementById('weatherWind');
    const humidity = document.getElementById('weatherHumidity');
    const rain = document.getElementById('weatherRain');
    
    if (icon) icon.src = `Images/Weather/${data.type}.png`;
    if (icon) icon.alt = data.typeName;
    if (typeName) typeName.textContent = data.typeName;
    if (temp) temp.textContent = `${data.temperature} °C`;
    if (wind) wind.textContent = `${data.wind} м/с`;
    if (humidity) humidity.textContent = `${data.humidity} %`;
    if (rain) rain.textContent = `~ ${data.rain} %`;
}

function getWeatherLocation(nextGP, nextTrack) {
    if (!nextTrack) return '51.507,-0.128'; // Лондон по умолчанию
    
    const locationMap = {
        "albert_park": "-37.850,144.968",       // Мельбурн, Австралия
        "shanghai": "31.339,121.220",           // Шанхай, Китай
        "suzuka": "34.843,136.541",             // Судзука, Япония
        "bahrain": "26.033,50.511",             // Сахир, Бахрейн
        "jeddah": "21.632,39.105",              // Джидда, Саудовская Аравия
        "miami": "25.958,-80.239",              // Майами, США
        "villeneuve": "45.506,-73.524",         // Монреаль, Канада
        "monaco": "43.735,7.421",               // Монте-Карло, Монако
        "catalunya": "41.570,2.261",            // Барселона, Испания
        "red_bull_ring": "47.220,14.765",       // Шпильберг, Австрия
        "silverstone": "52.079,-1.017",         // Сильверстоун, Англия
        "spa": "50.437,5.971",                  // Спа, Бельгия
        "hungaroring": "47.579,19.249",         // Будапешт, Венгрия
        "zandvoort": "52.389,4.542",            // Зандвоорт, Нидерланды
        "monza": "45.616,9.281",                // Монца, Италия
        "madring": "40.417,-3.704",             // Мадрид, Испания
        "baku": "40.373,49.853",                // Баку, Азербайджан
        "marina_bay": "1.292,103.864",          // Сингапур
        "americas": "30.133,-97.641",           // Остин, США
        "rodriguez": "19.404,-99.091",          // Мехико, Мексика
        "interlagos": "-23.704,-46.698",        // Сан-Паулу, Бразилия
        "vegas": "36.116,-115.174",             // Лас-Вегас, США
        "lusail": "25.490,51.454",              // Лусаил, Катар
        "yas_marina": "24.467,54.603",          // Абу-Даби, ОАЭ
		
        "istanbul": "40.952,29.406",            // Стамбул, Турция
        "portimao": "37.226,-8.630",            // Портиман, Португалия
		
        "imola": "44.344,11.716"                // Имола, Италия
    };
    
    return locationMap[nextGP.track] || '51.507,-0.128';
}

function getYearsWord(age) {
    if (age === undefined || age === null || isNaN(age)) return 'лет';
    
    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;
    
    // Исключения для 11-14 лет
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return 'лет';
    }
    
    // Правила склонения
    if (lastDigit === 1) {
        return 'год';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return 'года';
    } else {
        return 'лет';
    }
}

function calculateAgeOnDate(birthDate, targetDate) {
    const parts = birthDate.split('.');
    if (parts.length !== 3) return 0;
    
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = parseInt(parts[2]);
    
    const birth = new Date(year, month, day);
    const target = new Date(targetDate);
    
    let age = target.getFullYear() - birth.getFullYear();
    
    // Проверяем, был ли уже день рождения в этом году
    const birthdayThisYear = new Date(target.getFullYear(), month, day);
    if (target < birthdayThisYear) {
        age--;
    }
    
    return age;
}

function getNextDriverBirthdays() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const results = [];
    
    // Создаём "сегодня" в 00:00:00 для корректного сравнения
    const today = new Date(currentYear, now.getMonth(), now.getDate());
    
    driversData.forEach(driver => {
        const parts = driver.birthDate.split('.');
        if (parts.length !== 3) return;
        
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1;
        const year = parseInt(parts[2]);
        
        let birthThisYear = new Date(currentYear, month, day);
        
        // Сравниваем с НАЧАЛОМ дня
        if (birthThisYear < today) {
            birthThisYear = new Date(currentYear + 1, month, day);
        }
        
        const diff = birthThisYear - now;
        results.push({
            driver: driver,
            date: birthThisYear,
            diff: diff,
            day: day,
            month: month
        });
    });
    
    results.sort((a, b) => a.diff - b.diff);
    
    if (results.length === 0) return [];
    
    const nearestDate = results[0].date;
    
    // Собираем всех пилотов у которых день рождения в эту дату
    return results.filter(item => item.date.toDateString() === nearestDate.toDateString());
}

function createBirthdayBlock() {
    const block = document.createElement('div');
    block.className = 'main-block birthday-block';
    
    const birthdayList = getNextDriverBirthdays();
    
    if (!birthdayList || birthdayList.length === 0) {
        block.innerHTML = `
            <div class="main-block-title">День рождения пилота</div>
            <div class="birthday-empty">Нет данных</div>
        `;
        return block;
    }
    
    const now = new Date();
    const firstDate = birthdayList[0].date;
    
    // Форматируем дату
    const day = String(firstDate.getDate()).padStart(2, '0');
    const month = String(firstDate.getMonth() + 1).padStart(2, '0');
    const year = firstDate.getFullYear();
    const dateStr = `${day}.${month}.${year}`;
    
    // Дни до дня рождения
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const birthDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate());
    const diffDays = Math.ceil((birthDate - today) / (1000 * 60 * 60 * 24));
    
    let daysText = '';
    if (diffDays === 0) {
        daysText = 'СЕГОДНЯ!';
    } else if (diffDays === 1) {
        daysText = 'Завтра!';
    } else if (diffDays > 1) {
        daysText = `Через ${diffDays} дн.`;
    } else {
        daysText = `Прошло ${Math.abs(diffDays)} дн.`;
    }
    
    // Собираем информацию о пилотах
    let driversHTML = '';
    birthdayList.forEach((item, index) => {
        const driver = item.driver;
        const age = calculateAgeOnDate(driver.birthDate, item.date);
        
        // 👇 Получаем цвет команды для бордюра
        const teamColor = getTeamColor(driver.team);
        
        driversHTML += `
            <div class="birthday-driver-item" data-driver-id="${driver.id}" style="--team-color: ${teamColor}">
                <div class="birthday-driver-info">
                    <span class="birthday-number">${driver.number}</span>
                    <div class="birthday-name">
                        <img src="Images/Flags/${driver.country}.svg" class="birthday-flag" onerror="this.style.display='none'">
                        <span>${driver.name}</span>
                    </div>
                    <span class="birthday-age-small">${age} ${getYearsWord(age)}</span>
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
    
    // Обработчики для каждого пилота — открываем его модалку
    block.querySelectorAll('.birthday-driver-item').forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            if (typeof openDriverModal === 'function') {
                openDriverModal(birthdayList[index].driver);
            }
        });
    });
    
    return block;
}

async function initMainPage(container) {
    'use strict';
    
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
    
    // Первый ряд
    blocks.appendChild(createStatsBlock());
    
    const centerColumn = document.createElement('div');
    centerColumn.className = 'main-center-column';
    centerColumn.appendChild(createNextGPBlock());
    centerColumn.appendChild(createAfterNextGPBlock());
    blocks.appendChild(centerColumn);
    
    blocks.appendChild(createWeatherBlock());
    blocks.appendChild(createTyreBlock());
    
    container.appendChild(blocks);
    
    // ===== ВТОРОЙ РЯД =====
    const secondRow = document.createElement('div');
    secondRow.className = 'main-second-row';
    
    // Разделитель
    const divider = document.createElement('hr');
    divider.className = 'main-row-divider';
    container.appendChild(divider);
    
    // Блок дня рождения
    secondRow.appendChild(createBirthdayBlock());
    
    // Здесь можно добавить другие блоки во второй ряд
    // secondRow.appendChild(createAnotherBlock());
    
    container.appendChild(secondRow);
    
    startMainTimer();
    await loadWeatherForNextGP();
}

function createStatsBlock() {
    const block = document.createElement('div');
    block.className = 'main-block statistics-block';
    
    const title = document.createElement('div');
    title.className = 'main-block-title';
    title.textContent = 'Краткая статистика сезона';
    block.appendChild(title);
  
    const statsContainer = document.createElement('div');
    statsContainer.className = 'statistics-container';
    
    // Лидер чемпионата
    const leaderWrap = document.createElement('div');
    leaderWrap.className = 'statistics-group';
    const leaderLabel = document.createElement('span');
    leaderLabel.className = 'statistics-label';
    leaderLabel.textContent = 'Лидер чемпионата';
    leaderWrap.appendChild(leaderLabel);
    leaderWrap.appendChild(createStatRow('leader'));
    statsContainer.appendChild(leaderWrap);
    
    // Лидер КК
    const constructorWrap = document.createElement('div');
    constructorWrap.className = 'statistics-group';
    const constructorLabel = document.createElement('span');
    constructorLabel.className = 'statistics-label';
    constructorLabel.textContent = 'Лидер Кубка конструкторов';
    constructorWrap.appendChild(constructorLabel);
    constructorWrap.appendChild(createStatRow('constructor'));
    statsContainer.appendChild(constructorWrap);
    
    // Лучший пит-стоп
    const pitstopWrap = document.createElement('div');
    pitstopWrap.className = 'statistics-group';
    const pitstopLabel = document.createElement('span');
    pitstopLabel.className = 'statistics-label';
    pitstopLabel.textContent = 'Лучший пит-стоп сезона';
    pitstopWrap.appendChild(pitstopLabel);
    pitstopWrap.appendChild(createStatRow('pitstop'));
    statsContainer.appendChild(pitstopWrap);
    
    block.appendChild(statsContainer);
    return block;
}

function createStatRow(type) {
    const row = document.createElement('div');
    row.className = 'statistics-row';
    
    let iconHTML, nameHTML, valueHTML, clickTarget;
    let teamColor = '#FFFFFF'; // цвет по умолчанию
    
    if (type === 'leader') {
        const leader = getChampionshipLeader();
        if (leader) {
            iconHTML = `<img src="Images/Flags/${leader.country}.svg" class="statistics-row-icon-img" onerror="this.style.display='none'">`;
            nameHTML = `<span class="statistics-row-name">${leader.name}</span>`;
            valueHTML = `<span class="statistics-row-value">${leader.points}</span>`;
            clickTarget = 'results';
            teamColor = getTeamColor(leader.team);
        } else {
            iconHTML = '';
            nameHTML = `<span class="statistics-row-name empty">Нет данных</span>`;
            valueHTML = '';
            clickTarget = 'results';
        }
    } else if (type === 'constructor') {
        const leader = getConstructorLeader();
        if (leader) {
            iconHTML = `<img src="${getTeamLogo(leader.team)}" class="statistics-row-icon-img team-logo" onerror="this.style.display='none'">`;
            nameHTML = `<span class="statistics-row-name">${leader.team}</span>`;
            valueHTML = `<span class="statistics-row-value">${leader.points}</span>`;
            clickTarget = 'results';
            teamColor = getTeamColor(leader.team);
        } else {
            iconHTML = '';
            nameHTML = `<span class="statistics-row-name empty">Нет данных</span>`;
            valueHTML = '';
            clickTarget = 'results';
        }
    } else if (type === 'pitstop') {
        const best = getBestPitstop();
        if (best) {
            iconHTML = `<img src="${getTeamLogo(best.team)}" class="statistics-row-icon-img team-logo" onerror="this.style.display='none'">`;
            nameHTML = `<span class="statistics-row-name">${best.team}</span>`;
            valueHTML = `<span class="statistics-row-value">${best.time}с</span>`;
            clickTarget = 'stats';
            teamColor = getTeamColor(best.team);
        } else {
            iconHTML = '';
            nameHTML = `<span class="statistics-row-name empty">Нет данных</span>`;
            valueHTML = '';
            clickTarget = 'stats';
        }
    }
    
    // Устанавливаем цвет команды как CSS-переменную
    row.style.setProperty('--team-color', teamColor);
    
    // Левая часть: иконка + имя
    const leftPart = document.createElement('div');
    leftPart.className = 'statistics-row-left';
    leftPart.innerHTML = iconHTML + nameHTML;
    row.appendChild(leftPart);
    
    // Правая часть: значение
    const rightPart = document.createElement('div');
    rightPart.innerHTML = valueHTML;
    row.appendChild(rightPart);
    
    // Клик для перехода
    row.addEventListener('click', () => {
        if (clickTarget === 'stats') {
            // Для пит-стопа используем специальную функцию с подсветкой
            if (typeof navigateToStatsWithPitstopHighlight === 'function') {
                navigateToStatsWithPitstopHighlight();
            } else {
                // Fallback: обычный переход
                document.querySelectorAll('.menu-item').forEach(btn => {
                    if (btn.dataset.tab === clickTarget) btn.click();
                });
            }
        } else {
            document.querySelectorAll('.menu-item').forEach(btn => {
                if (btn.dataset.tab === clickTarget) btn.click();
            });
        }
    });
    
    return row;
}

function getChampionshipLeader() {
    if (typeof combinedStandings === 'undefined' || !combinedStandings.length) return null;
    const d = findDriverById(combinedStandings[0].driver);
    if (!d) return null;
    return { ...d, points: combinedStandings[0].points };
}

function getConstructorLeader() {
    if (typeof teamsData === 'undefined') return null;
    const s = calculateConstructorStandings();
    return s.length ? s[0] : null;
}

function getBestPitstop() {
    if (typeof pitstopData === 'undefined') return null;
    const v = pitstopData.filter(r => r.driver !== 'none' && r.time !== '0.00' && r.time !== '0.00s');
    if (!v.length) return null;
    let b = v[0], bt = parseFloat(b.time);
    v.forEach(r => { const t = parseFloat(r.time); if (!isNaN(t) && t < bt) { bt = t; b = r; } });
    const d = findDriverById(b.driver);
    return d ? { team: d.team, time: b.time } : null;
}

async function loadWeatherForNextGP() {
    const now = new Date();
    let nextGP = null;
    let nextTrack = null;
    
    if (typeof calendarData !== 'undefined') {
        const activeGPs = calendarData
            .filter(gp => !gp.canceled)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
        
        for (const gp of activeGPs) {
            const raceDate = new Date(gp.date);
            const raceEnd = new Date(raceDate.getTime() + 3 * 60 * 60 * 1000);
            
            if (raceEnd > now) {
                nextGP = gp;
                nextTrack = getTrackById(gp.track);
                break;
            }
        }
    }
    
    if (nextGP && nextTrack) {
        const location = getWeatherLocation(nextGP, nextTrack);
        console.log('Загружаем погоду для:', location);
        const weather = await fetchWeatherWttr(location);
        console.log('Получена погода:', weather);
        
        if (weather) {
            Object.assign(weatherData, weather);
            updateWeatherDisplay(weather);
            
            // Обновляем блок шин
            const blocksContainer = document.querySelector('.main-blocks');
            if (blocksContainer) {
                const oldTyreBlock = blocksContainer.querySelector('.tyres-block');
                if (oldTyreBlock) {
                    const newTyreBlock = createTyreBlock();
                    oldTyreBlock.replaceWith(newTyreBlock);
                    console.log('Блок шин обновлён, rain =', weatherData.rain);
                }
            }
        }
    }
}

function createWeatherBlock() {
    const block = document.createElement('div');
    block.className = 'main-block weather-block';
    block.id = 'weatherBlock';
    
    // Получаем информацию о следующем ГП для отображения местоположения
    let locationText = '';
    const now = new Date();
    let nextGP = null;
    let nextTrack = null;
    
    if (typeof calendarData !== 'undefined') {
        const activeGPs = calendarData
            .filter(gp => !gp.canceled)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
        
        for (const gp of activeGPs) {
            const raceDate = new Date(gp.date);
            const raceEnd = new Date(raceDate.getTime() + 3 * 60 * 60 * 1000);
            
            if (raceEnd > now) {
                nextGP = gp;
                nextTrack = getTrackById(gp.track);
                break;
            }
        }
    }
    
    if (nextTrack) {
        // Используем trackName вместо name
        const countryName = getCountryName(nextTrack.country);
        locationText = `${nextTrack.trackName}, ${countryName}`;
    } else {
        locationText = 'Местоположение не определено';
    }
    
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
}

function addGPModalOnRightClick(block, gp, track) {
    block.addEventListener('contextmenu', (e) => {
        e.preventDefault(); // Отменяем стандартное контекстное меню
        e.stopPropagation();
        
        if (gp && track) {
            // Используем существующую функцию из calendar.js
            if (typeof openTrackModal === 'function') {
                openTrackModal(track, gp);
            } else {
                console.warn('Функция openTrackModal не найдена');
            }
        }
    });
}

function navigateToCalendarWithScroll(targetGpId) {
    // Находим кнопку календаря в меню
    const menuItems = document.querySelectorAll('.menu-item');
    let calendarBtn = null;
    
    menuItems.forEach(btn => {
        if (btn.dataset.tab === 'calendar') {
            calendarBtn = btn;
        }
    });
    
    if (!calendarBtn) {
        console.warn('Кнопка календаря не найдена');
        return;
    }
    
    // Кликаем по кнопке календаря
    calendarBtn.click();
    
    // Ждём рендеринга страницы и анимации карточек
    const checkForCards = setInterval(() => {
        const cardsArea = document.getElementById('calendarCardsArea');
        if (cardsArea) {
            clearInterval(checkForCards);
            
            // Ждём завершения анимации появления карточек
            const cards = cardsArea.querySelectorAll('.calendar-card');
            if (cards.length > 0) {
                // Проверяем, завершилась ли анимация
                const checkAnimationComplete = setInterval(() => {
                    const firstCard = cards[0];
                    const isVisible = firstCard.style.opacity === '1' || 
                                     firstCard.getBoundingClientRect().height > 0;
                    
                    if (isVisible) {
                        clearInterval(checkAnimationComplete);
                        
                        // Если передан ID конкретного ГП — скроллим к нему
                        if (targetGpId) {
                            setTimeout(() => {
                                scrollToGPCard(targetGpId, cardsArea);
                            }, 300);
                        } else {
                            // Иначе скроллим к текущему ГП
                            setTimeout(() => {
                                scrollToCurrentGP();
                            }, 300);
                        }
                    }
                }, 100);
            }
        }
    }, 200);
}

function createNextGPBlock() {
    const block = document.createElement('div');
    block.className = 'main-block nextgp-block clickable';
    
    const now = new Date();
    let nextGP = null;
    let nextTrack = null;
    let gpNumber = '';
    
    if (typeof calendarData !== 'undefined') {
        const activeGPs = calendarData
            .filter(gp => !gp.canceled)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
        
        for (let i = 0; i < activeGPs.length; i++) {
            const gp = activeGPs[i];
            const raceDate = new Date(gp.date);
            const raceEnd = new Date(raceDate.getTime() + 3 * 60 * 60 * 1000);
            
            if (raceEnd > now) {
                nextGP = gp;
                gpNumber = i + 1;
                nextTrack = getTrackById(gp.track);
                break;
            }
        }
    }
    
    if (nextGP && nextTrack) {
        block.innerHTML = `
            <div class="main-block-title nextgp-title">
                <span class="nextgp-title-left">
                    <img src="Images/Flags/${nextTrack.country}.svg" class="nextgp-flag-inline" title="${getCountryName(nextTrack.country)}"> 
                    ${nextTrack.name}
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
            </div>
        `;
    } else {
        block.innerHTML = `
            <div class="main-block-title">Сезон 2026</div>
            <div class="nextgp-empty"><span>Сезон завершён</span></div>
        `;
    }
    
    block.addEventListener('click', () => {
        if (nextGP) {
            navigateToCalendarWithScroll(nextGP.id);
        } else {
            document.querySelectorAll('.menu-item').forEach(btn => {
                if (btn.dataset.tab === 'calendar') btn.click();
            });
        }
    });
    
    addGPModalOnRightClick(block, nextGP, nextTrack);
    
    return block;
}

function createAfterNextGPBlock() {
    const block = document.createElement('div');
    block.className = 'main-block afternextgp-block clickable';
    
    const now = new Date();
    let afterNextGP = null;
    let afterNextTrack = null;
    let gpNumber = '';
    
    if (typeof calendarData !== 'undefined') {
        const activeGPs = calendarData
            .filter(gp => !gp.canceled)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
        
        let foundFirst = false;
        
        for (let i = 0; i < activeGPs.length; i++) {
            const gp = activeGPs[i];
            const raceDate = new Date(gp.date);
            const raceEnd = new Date(raceDate.getTime() + 3 * 60 * 60 * 1000);
            
            if (raceEnd > now) {
                if (!foundFirst) {
                    foundFirst = true;
                    continue;
                }
                afterNextGP = gp;
                gpNumber = i + 1;
                afterNextTrack = getTrackById(gp.track);
                break;
            }
        }
    }
    
    if (afterNextGP && afterNextTrack) {
        block.innerHTML = `
            <div class="main-block-title nextgp-title">
                <span class="nextgp-title-left">
                    <img src="Images/Flags/${afterNextTrack.country}.svg" class="nextgp-flag-inline" title="${getCountryName(afterNextTrack.country)}"> 
                    ${afterNextTrack.name}
                </span>
                ${gpNumber ? `<span class="gp-number-badge-next">${gpNumber}</span>` : ''}
            </div>
            <div class="nextgp-details">
                <div class="nextgp-detail"><img src="Images/Icon/calendar.webp" class="main-icon"><span class="nextgp-value">${formatDateLong(afterNextGP.date)}</span></div>
            </div>
        `;
    } else {
        block.innerHTML = `
            <div class="main-block-title">Далее</div>
            <div class="nextgp-empty"><span>Нет данных</span></div>
        `;
    }
    
    block.addEventListener('click', () => {
        if (afterNextGP) {
            navigateToCalendarWithScroll(afterNextGP.id);
        } else {
            document.querySelectorAll('.menu-item').forEach(btn => {
                if (btn.dataset.tab === 'calendar') btn.click();
            });
        }
    });
    
    addGPModalOnRightClick(block, afterNextGP, afterNextTrack);
    
    return block;
}

function createTyreBlock() {
    const block = document.createElement('div');
    block.className = 'main-block tyres-block';
    
    // Получаем следующий ГП
    const now = new Date();
    let nextGP = null;
    let nextTrack = null;
    
    if (typeof calendarData !== 'undefined') {
        const activeGPs = calendarData
            .filter(gp => !gp.canceled)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
        
        for (const gp of activeGPs) {
            const raceDate = new Date(gp.date);
            const raceEnd = new Date(raceDate.getTime() + 3 * 60 * 60 * 1000);
            
            if (raceEnd > now) {
                nextGP = gp;
                nextTrack = getTrackById(gp.track);
                break;
            }
        }
    }
    
    // Получаем составы шин из календаря или используем значения по умолчанию
    let hardCompound = "C2";
    let mediumCompound = "C3";
    let softCompound = "C4";
    
    if (nextGP && nextGP.tires) {
        const tireParts = nextGP.tires.split(',').map(t => t.trim());
        if (tireParts.length >= 3) {
            hardCompound = tireParts[0];
            mediumCompound = tireParts[1];
            softCompound = tireParts[2];
        }
    }

    // Данные о характеристиках шин по ТИПАМ (вынесены наружу для доступа в модалке)
    const tyreSpecsByType = {
        "Hard": {
            img: "Images/Wheels/Hard.png",
            common: { 
                temp: "70 °C",
                diameter: "18\"",
                creator: "Pirelli"
            },
            front: { size: "280/705", weight: "10.4 кг" },
            rear: { size: "375/710", weight: "12.8 кг" }
        },
        "Medium": {
            img: "Images/Wheels/Medium.png",
            common: { 
                temp: "90 °C",
                diameter: "18\"",
                creator: "Pirelli"
            },
            front: { size: "280/705", weight: "10.4 кг" },
            rear: { size: "375/710", weight: "12.8 кг" }
        },
        "Soft": {
            img: "Images/Wheels/Soft.png",
            common: { 
                temp: "110 °C",
                diameter: "18\"",
                creator: "Pirelli"
            },
            front: { size: "280/705", weight: "10.4 кг" },
            rear: { size: "375/710", weight: "12.8 кг" }
        },
        "Intermediate": {
            img: "Images/Wheels/Intermediate.png",
            common: { 
                heating: "60 °C",
                drainage: "31 л/с",
                diameter: "18\"",
                creator: "Pirelli"
            },
            front: { size: "280/710", weight: "10.3 кг" },
            rear: { size: "375/715", weight: "13.2 кг" }
        },
        "Wet": {
            img: "Images/Wheels/Wet.png",
            common: { 
                heating: "---",
                drainage: "76 л/с",
                diameter: "18\"",
                creator: "Pirelli"
            },
            front: { size: "280/715", weight: "11.3 кг" },
            rear: { size: "375/720", weight: "13.4 кг" }
        }
    };
    
    // Маппинг составов на типы
    function getTyreInfo(compound) {
        if (compound === hardCompound) {
            return { type: "Hard", img: "Images/Wheels/Hard.png", active: true };
        } else if (compound === mediumCompound) {
            return { type: "Medium", img: "Images/Wheels/Medium.png", active: true };
        } else if (compound === softCompound) {
            return { type: "Soft", img: "Images/Wheels/Soft.png", active: true };
        } else {
            return { type: "---", img: "Images/Wheels/Hard.png", active: false };
        }
    }

    // Функция для создания карточки шины в модальном окне
    function createTyreModalCard(compoundName) {
        const specs = tyreSpecsByType[compoundName];
        if (!specs) return null;
        
        function createSpec(label, value) {
            return `
                <div class="tyre-modal-spec">
                    <span class="tyre-modal-spec-label">${label}</span>
                    <span class="tyre-modal-spec-value">${value}</span>
                </div>`;
        }
        
        let specsHTML = '';
        
        specsHTML += `
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
            specsHTML += `<div class="tyre-modal-specs-section">`;
            specsHTML += `<div class="tyre-modal-specs-title">Общие</div>`;
            if (specs.common.diameter !== undefined) {
                specsHTML += createSpec('Диаметр', specs.common.diameter);
            }
            if (specs.common.temp !== undefined) {
                specsHTML += createSpec('Прогрев', specs.common.temp);
            }
            if (specs.common.heating !== undefined) {
                specsHTML += createSpec('Прогрев', specs.common.heating);
            }
            if (specs.common.drainage !== undefined) {
                specsHTML += createSpec('Водоотведение', specs.common.drainage);
            }
            if (specs.common.creator !== undefined) {
                specsHTML += createSpec('Производитель', specs.common.creator);
            }
            specsHTML += `</div>`;
        }
        
        const typeName = compoundName;
        
        let typeColorClass = '';
        switch(typeName) {
            case 'Hard': typeColorClass = 'tyre-color-hard'; break;
            case 'Medium': typeColorClass = 'tyre-color-medium'; break;
            case 'Soft': typeColorClass = 'tyre-color-soft'; break;
            case 'Intermediate': typeColorClass = 'tyre-color-intermediate'; break;
            case 'Wet': typeColorClass = 'tyre-color-wet'; break;
        }
        
        return `
            <div class="tyre-modal-card" data-tyre="${typeName}">
                <div class="tyre-modal-card-header">
                    <img src="${specs.img}" class="tyre-modal-card-img" onerror="this.src='Images/Wheels/Hard.png'">
                    <div class="tyre-modal-card-name ${typeColorClass}">${typeName}</div>
                </div>
                ${specsHTML}
            </div>
        `;
    }

    // Функция для отображения модального окна (ВСЕ ШИНЫ СРАЗУ)
    function showAllTyresModal() {
        const existingModal = document.querySelector('.tyre-modal-overlay');
        if (existingModal) {
            existingModal.remove();
            return;
        }
        
        const tyreTypes = ["Hard", "Medium", "Soft", "Intermediate", "Wet"];
        
        let cardsHTML = '';
        tyreTypes.forEach((type, index) => {
            const card = createTyreModalCard(type);
            if (card) {
                cardsHTML += card;
                if (index === 2) {
                    cardsHTML += `<div class="tyre-modal-divider"></div>`;
                }
            }
        });
        
        const overlay = document.createElement('div');
        overlay.className = 'tyre-modal-overlay';
        overlay.innerHTML = `
            <div class="tyre-modal">
                <button class="tyre-modal-close-btn" onclick="this.closest('.tyre-modal-overlay').remove()">✕</button>
                <div class="tyre-modal-grid">
                    ${cardsHTML}
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
        
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                overlay.remove();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    }
    
    // Формируем C1-C5
    const allCompounds = ["C1", "C2", "C3", "C4", "C5"];
    
    let topHTML = allCompounds.map(c => {
        const info = getTyreInfo(c);
        return `
            <div class="tyre-item ${info.active ? 'clickable' : 'dimmed'}" data-compound="${c}">
                <span class="tyre-name">${c}</span>
                <img src="${info.img}" class="tyre-img">
                <span class="tyre-type">${info.type}</span>
            </div>
        `;
    }).join('');
    
    // Промежуточные и дождевые
    const rainActive = weatherData.rain > 70;

    let bottomHTML = `
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
    
    // Обработчики клика — открываем модальное окно со ВСЕМИ шинами
    // Добавляем обработчик на ВСЕ элементы tyre-item, включая dimmed
    block.querySelectorAll('.tyre-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            showAllTyresModal();
        });
    });
    
    return block;
}

let mainTimerInterval = null;

function startMainTimer() {
    if (mainTimerInterval) clearInterval(mainTimerInterval);
    
    const updateTimer = () => {
        const block = document.querySelector('.nextgp-block');
        if (!block) { clearInterval(mainTimerInterval); return; }
        
        const now = new Date();
        let nextGP = null;
        let nextTrack = null;
        
        if (typeof calendarData !== 'undefined') {
            const activeGPs = calendarData
                .filter(gp => !gp.canceled)
                .sort((a, b) => new Date(a.date) - new Date(b.date));
            
            for (const gp of activeGPs) {
                const raceDate = new Date(gp.date);
                const raceEnd = new Date(raceDate.getTime() + 3 * 60 * 60 * 1000);
                
                if (raceEnd > now) {
                    nextGP = gp;
                    nextTrack = getTrackById(gp.track);
                    break;
                }
            }
        }
        
        if (!nextGP || !nextTrack) {
            block.innerHTML = `
                <div class="main-block-title">🏎️ Сезон 2026</div>
                <div class="nextgp-empty"><span>Сезон завершён</span></div>
            `;
            clearInterval(mainTimerInterval);
            return;
        }
        
        const raceDate = new Date(nextGP.date);
        const diff = raceDate - now;
        
        // Парсим даты из объекта ГП
        const qualiDate = nextGP.quali ? new Date(nextGP.quali) : null;
        const sprintDate = nextGP.sprint ? new Date(nextGP.sprint) : null;
        
        // Получаем контейнер для кнопок
        const footer = block.querySelector('.nextgp-footer');
        let linksDiv = block.querySelector('.nextgp-links');
        
        // Создаём контейнер для ссылок, если его нет
        if (!linksDiv && footer) {
            linksDiv = document.createElement('div');
            linksDiv.className = 'nextgp-links';
            footer.appendChild(linksDiv);
        }
        
        // Получаем контейнер для таймера/кнопки гонки
        let btnContainer = block.querySelector('.nextgp-countdown');
        if (!btnContainer && footer) {
            btnContainer = document.createElement('div');
            btnContainer.className = 'nextgp-countdown';
            footer.appendChild(btnContainer);
        }
        
        if (linksDiv) {
            linksDiv.innerHTML = '';
            
            // Кнопка СПРИНТА
            if (sprintDate && nextGP.recordingSprint && now >= new Date(sprintDate.getTime() - 5 * 60 * 1000)) {
                const sprintEl = document.createElement('button');
                sprintEl.className = 'main-gp-btn sprint';
                sprintEl.textContent = 'Спринт';
                sprintEl.dataset.video = nextGP.recordingSprint;
                sprintEl.dataset.title = `Спринт ${nextTrack.name}`;
                sprintEl.onclick = (e) => {
                    e.stopPropagation();
                    if (typeof openVideoModal === 'function') {
                        openVideoModal(sprintEl.dataset.video, sprintEl.dataset.title);
                    }
                };
                linksDiv.appendChild(sprintEl);
            }
            
            // Кнопка КВАЛИФИКАЦИИ
            if (qualiDate && nextGP.recordingQuali && now >= new Date(qualiDate.getTime() - 5 * 60 * 1000)) {
                const qualiEl = document.createElement('button');
                qualiEl.className = 'main-gp-btn quali';
                qualiEl.textContent = 'Квалификация';
                qualiEl.dataset.video = nextGP.recordingQuali;
                qualiEl.dataset.title = `Квалификация ${nextTrack.name}`;
                qualiEl.onclick = (e) => {
                    e.stopPropagation();
                    if (typeof openVideoModal === 'function') {
                        openVideoModal(qualiEl.dataset.video, qualiEl.dataset.title);
                    }
                };
                linksDiv.appendChild(qualiEl);
            }
        }
        
        // Обновляем таймер или кнопку гонки
        if (btnContainer) {
            // Кнопка ГОНКИ — только если есть ссылка И время >= за час до гонки
            if (now >= new Date(raceDate.getTime() - 5 * 60 * 1000)) {
                if (nextGP.recordingRace) {
                    btnContainer.innerHTML = `<button class="main-gp-btn race" onclick="event.stopPropagation(); if(typeof openVideoModal==='function'){openVideoModal('${nextGP.recordingRace}', 'Гонка ${nextTrack.name}');}">Гонка</button>`;
                } else {
                    btnContainer.innerHTML = '<span class="calendar-status-text">Гонка скоро начнётся</span>';
                }
            } else if (diff > 0) {
                // Таймер до гонки
                const d = Math.floor(diff / 86400000);
                const h = Math.floor((diff % 86400000) / 3600000);
                const m = Math.floor((diff % 3600000) / 60000);
                const s = Math.floor((diff % 60000) / 1000);
                btnContainer.innerHTML = `<span>До гонки:</span> <span class="countdown-timer"><strong>${d}</strong> дн. <strong>${h}</strong> ч. <strong>${m}</strong> м. <strong>${s}</strong> с.</span>`;
            } else {
                btnContainer.innerHTML = '<span class="calendar-status-text">Гонка завершена</span>';
            }
        }
    };
    
    // Запускаем сразу
    updateTimer();
    // Обновляем каждую секунду
    mainTimerInterval = setInterval(updateTimer, 1000);
}