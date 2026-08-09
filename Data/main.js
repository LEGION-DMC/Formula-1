const tyreData = {  // италия345  мадрид234
    compounds: {
        Hard: "C2",    
        Medium: "C3",  
        Soft: "C4"    
    }
};

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

async function initMainPage(container) {
    'use strict';
    
    container.style.display = 'block';
    container.style.flexDirection = '';
    container.style.gap = '';
    container.style.padding = '30px 20px';
    container.innerHTML = '';
    
    // Создаём заголовок
    const header = document.createElement('div');
    header.className = 'main-header';
    header.innerHTML = `
        <h1 class="main-title">77 чемпионат мира Formula 1</h1>
        <hr class="main-title-divider">
    `;
    container.appendChild(header);
    
    const blocks = document.createElement('div');
    blocks.className = 'main-blocks';
    
    // Левая колонка — погода
    blocks.appendChild(createWeatherBlock());
    
    // Центральная колонка — предстоящий ГП + следующий ГП
    const centerColumn = document.createElement('div');
    centerColumn.className = 'main-center-column';
    centerColumn.appendChild(createNextGPBlock());
    centerColumn.appendChild(createAfterNextGPBlock());
    blocks.appendChild(centerColumn);
    
    // Правая колонка — шины
    blocks.appendChild(createTyreBlock());
    
    container.appendChild(blocks);
    
    startMainTimer();
    
    await loadWeatherForNextGP();
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
            // Обновляем глобальную переменную
            Object.assign(weatherData, weather);
            
            // Обновляем DOM погоды
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
    block.innerHTML = `
        <div class="main-block-title">Погода</div>
        <div class="weather-header">
            <img src="Images/Weather/${weatherData.type}.png" alt="${weatherData.typeName}" class="weather-icon-large" id="weatherIcon">
            <span class="weather-type" id="weatherTypeName">${weatherData.typeName}</span>
        </div>
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

function createNextGPBlock() {
    const block = document.createElement('div');
    block.className = 'main-block nextgp-block clickable';
    
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
        block.innerHTML = `
            <div class="main-block-title">
                <img src="Images/Flags/${nextTrack.country}.svg" class="nextgp-flag-inline" title="${getCountryName(nextTrack.country)}"> ${nextTrack.name}
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
        document.querySelectorAll('.menu-item').forEach(btn => {
            if (btn.dataset.tab === 'calendar') btn.click();
        });
    });
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
        block.innerHTML = `
            <div class="main-block-title">
                <img src="Images/Flags/${nextTrack.country}.svg" class="nextgp-flag-inline" title="${getCountryName(nextTrack.country)}"> ${nextTrack.name}
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
    
    // ЛКМ - плавный переход в календарь с прокруткой к этому ГП
    block.addEventListener('click', () => {
        if (nextGP) {
            navigateToCalendarWithScroll(nextGP.id);
        } else {
            // Если нет следующего ГП, просто переходим в календарь
            document.querySelectorAll('.menu-item').forEach(btn => {
                if (btn.dataset.tab === 'calendar') btn.click();
            });
        }
    });
    
    // ПКМ - открытие модального окна
    addGPModalOnRightClick(block, nextGP, nextTrack);
    
    return block;
}

function createAfterNextGPBlock() {
    const block = document.createElement('div');
    block.className = 'main-block afternextgp-block clickable';
    
    const now = new Date();
    let afterNextGP = null;
    let afterNextTrack = null;
    
    if (typeof calendarData !== 'undefined') {
        const activeGPs = calendarData
            .filter(gp => !gp.canceled)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
        
        let foundFirst = false;
        
        for (const gp of activeGPs) {
            const raceDate = new Date(gp.date);
            const raceEnd = new Date(raceDate.getTime() + 3 * 60 * 60 * 1000);
            
            if (raceEnd > now) {
                if (!foundFirst) {
                    foundFirst = true;
                    continue;
                }
                afterNextGP = gp;
                afterNextTrack = getTrackById(gp.track);
                break;
            }
        }
    }
    
    if (afterNextGP && afterNextTrack) {
        block.innerHTML = `
            <div class="main-block-title">
                <img src="Images/Flags/${afterNextTrack.country}.svg" class="nextgp-flag-inline" title="${getCountryName(afterNextTrack.country)}"> ${afterNextTrack.name}
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
    
    // ЛКМ - плавный переход в календарь с прокруткой к этому ГП
    block.addEventListener('click', () => {
        if (afterNextGP) {
            navigateToCalendarWithScroll(afterNextGP.id);
        } else {
            document.querySelectorAll('.menu-item').forEach(btn => {
                if (btn.dataset.tab === 'calendar') btn.click();
            });
        }
    });
    
    // ПКМ - открытие модального окна
    addGPModalOnRightClick(block, afterNextGP, afterNextTrack);
    
    return block;
}

function createTyreBlock() {
    const block = document.createElement('div');
    block.className = 'main-block tyres-block';
    
    // Все возможные составы C1-C5
    const allCompounds = ["C1", "C2", "C3", "C4", "C5"];
    
    // Определяем типы по составам из tyreData
    const hardCompound = tyreData.compounds.Hard;
    const mediumCompound = tyreData.compounds.Medium;
    const softCompound = tyreData.compounds.Soft;

    // Данные о характеристиках шин по ТИПАМ
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
    function getTyreTypeByCompound(compound) {
        if (compound === hardCompound) return "Hard";
        if (compound === mediumCompound) return "Medium";
        if (compound === softCompound) return "Soft";
        return null;
    }

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

    // Функция для создания компактной карточки шины в модальном окне
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
        
        // Передние / задние
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
        
        // Общие параметры  
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

    // Функция для отображения МОДАЛЬНОГО окна (по центру) — ВСЕ ШИНЫ СРАЗУ
    function showAllTyresModal() {
        // Закрываем предыдущее модальное окно, если есть
        const existingModal = document.querySelector('.tyre-modal-overlay');
        if (existingModal) {
            existingModal.remove();
            return;
        }
        
        // Порядок для десктопа: Hard, Medium, Soft, Intermediate, Wet
        const tyreTypes = ["Hard", "Medium", "Soft", "Intermediate", "Wet"];
        
        // Создаём карточки для всех шин с разделителем
        let cardsHTML = '';
        tyreTypes.forEach((type, index) => {
            const card = createTyreModalCard(type);
            if (card) {
                cardsHTML += card;
                // Добавляем разделитель ПОСЛЕ 3-й карточки (Soft) 
                // Индекс 2 = 3-й элемент (Hard=0, Medium=1, Soft=2)
                if (index === 2) {
                    cardsHTML += `<div class="tyre-modal-divider"></div>`;
                }
            }
        });
        
        // Создаём оверлей модального окна
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
        
        // Активация с анимацией
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });
        
        // Закрытие по клику на оверлей (вне модалки)
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
        
        // Закрытие по ESC
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                overlay.remove();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    }
	
    // Формируем C1-C5
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
            ${rainActive ? '' : '<span class="tyre-type">---</span>'}
        </div>
        <div class="tyre-item clickable ${rainActive ? '' : 'dimmed'}" data-compound="Wet">
            <span class="tyre-name">Wet</span>
            <img src="${rainActive ? 'Images/Wheels/Wet.png' : 'Images/Wheels/Hard.png'}" class="tyre-img">
            ${rainActive ? '' : '<span class="tyre-type">---</span>'}
        </div>
    `;
    
    block.innerHTML = `
        <div class="main-block-title">Состав шин</div>
        <div class="tyres-top">${topHTML}</div>
        <hr class="main-divider">
        <div class="tyres-bottom">${bottomHTML}</div>
    `;
    
    // Обработчики клика — открываем модальное окно со ВСЕМИ шинами
    block.querySelectorAll('.tyre-item.clickable, .tyre-item.dimmed').forEach(item => {
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
        const oneHourBeforeRace = new Date(raceDate.getTime() - 60 * 60 * 1000);
        
        // Расчёт времени квалификации (на сутки раньше гонки, то же время)
		const qualiDate = new Date(raceDate.getTime() - 24 * 60 * 60 * 1000);
		const halfHourBeforeQuali = new Date(qualiDate.getTime() - 30 * 60 * 1000);
		const qualiActive = nextGP.recordingQuali && now >= halfHourBeforeQuali;
        
        // Обновляем только таймер, не трогая кнопки
        const countdownEl = block.querySelector('.countdown-timer');
        const raceBtnEl = block.querySelector('.main-gp-btn.race');
        const sprintBtn = block.querySelector('.main-gp-btn.sprint');
        const qualiBtn = block.querySelector('.main-gp-btn.quali');
        
        // Кнопки спринта и квалификации — обновляем только если их нет
        const linksContainer = block.querySelector('.nextgp-links');
        if (!linksContainer) {
            let linksHTML = '';
            if (nextGP.hasSprint && nextGP.recordingSprint) {
                linksHTML += `<a href="${nextGP.recordingSprint}" target="_blank" class="main-gp-btn sprint" onclick="event.stopPropagation()">Спринт</a>`;
            }
            // Квалификация — показываем за час до квалификации и навсегда после
            if (qualiActive) {
                linksHTML += `<a href="${nextGP.recordingQuali}" target="_blank" class="main-gp-btn quali" onclick="event.stopPropagation()">Квалификация</a>`;
            }
            if (linksHTML) {
                const footer = block.querySelector('.nextgp-footer');
                if (footer) {
                    const linksDiv = document.createElement('div');
                    linksDiv.className = 'nextgp-links';
                    linksDiv.innerHTML = linksHTML;
                    footer.appendChild(linksDiv);
                }
            }
        } else {
            // Обновляем ссылки если их нет
            if (!sprintBtn && nextGP.hasSprint && nextGP.recordingSprint) {
                const sprintEl = document.createElement('a');
                sprintEl.href = nextGP.recordingSprint;
                sprintEl.target = '_blank';
                sprintEl.className = 'main-gp-btn sprint';
                sprintEl.textContent = 'Спринт';
                sprintEl.onclick = (e) => e.stopPropagation();
                linksContainer.appendChild(sprintEl);
            }
            // Квалификация — появляется за час до квалификации и остаётся
            if (!qualiBtn && qualiActive) {
                const qualiEl = document.createElement('a');
                qualiEl.href = nextGP.recordingQuali;
                qualiEl.target = '_blank';
                qualiEl.className = 'main-gp-btn quali';
                qualiEl.textContent = 'Квалификация';
                qualiEl.onclick = (e) => e.stopPropagation();
                linksContainer.appendChild(qualiEl);
            }
        }
        
        if (now >= oneHourBeforeRace && now < raceDate) {
            // За час до гонки — кнопка
            if (countdownEl) countdownEl.style.display = 'none';
            if (!raceBtnEl) {
                const btnContainer = block.querySelector('.nextgp-countdown');
                if (btnContainer) {
                    btnContainer.innerHTML = nextGP.recordingRace 
                        ? `<a href="${nextGP.recordingRace}" target="_blank" class="main-gp-btn race" onclick="event.stopPropagation()">Гонка скоро начнётся</a>`
                        : '<span class="calendar-status-text">Гонка скоро начнётся</span>';
                }
            }
        } else if (now >= raceDate) {
            // Гонка идёт
            if (countdownEl) countdownEl.style.display = 'none';
            if (!raceBtnEl) {
                const btnContainer = block.querySelector('.nextgp-countdown');
                if (btnContainer) {
                    btnContainer.innerHTML = nextGP.recordingRace 
                        ? `<a href="${nextGP.recordingRace}" target="_blank" class="main-gp-btn race" onclick="event.stopPropagation()">Гонка идёт</a>`
                        : '<span class="calendar-status-text">Гонка идёт</span>';
                }
            }
        } else {
            // Таймер
            if (raceBtnEl) raceBtnEl.remove();
            if (countdownEl) {
                countdownEl.style.display = '';
                const d = Math.floor(diff / 86400000);
                const h = Math.floor((diff % 86400000) / 3600000);
                const m = Math.floor((diff % 3600000) / 60000);
                const s = Math.floor((diff % 60000) / 1000);
                countdownEl.innerHTML = `<strong>${d}</strong> дн. <strong>${h}</strong> ч. <strong>${m}</strong> м. <strong>${s}</strong> с.`;
            } else {
                const btnContainer = block.querySelector('.nextgp-countdown');
                if (btnContainer) {
                    const d = Math.floor(diff / 86400000);
                    const h = Math.floor((diff % 86400000) / 3600000);
                    const m = Math.floor((diff % 3600000) / 60000);
                    const s = Math.floor((diff % 60000) / 1000);
                    btnContainer.innerHTML = `<span>До гонки:</span> <span class="countdown-timer"><strong>${d}</strong> дн. <strong>${h}</strong> ч. <strong>${m}</strong> м. <strong>${s}</strong> с.</span>`;
                }
            }
        }
    };
    
    // Запускаем сразу
    updateTimer();
    // Обновляем каждую секунду
    mainTimerInterval = setInterval(updateTimer, 1000);
}