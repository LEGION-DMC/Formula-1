document.addEventListener('DOMContentLoaded', function() {
    // Инициализация элементов
    const logo = document.querySelector('.logo');
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Контейнеры для динамического контента
    const teamsContainer = document.getElementById('teams-container');
    const calendarContainer = document.getElementById('calendar-container');
    const modalsContainer = document.getElementById('modals-container');

    // Инициализация
    initLogo();
    initNavigation();
    renderTeams();
    renderCalendar();
    initModalHandlers();
    renderGlossary();

	// Функции инициализации
    function initLogo() {
        logo.addEventListener('click', () => switchTab('home'));
    }

    function initNavigation() {
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                switchTab(tabId);
            });
        });
    }

    function initModalHandlers() {
        // Закрытие модалок по клику вне контента
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal')) {
                closeModal(event.target);
            }
        });
    }
	
	function renderGlossary() {
		const container = document.getElementById('glossary-container');
			container.innerHTML = glossaryData.map(item => `
			<div class="glossary-card">
				<div class="term-header">
					<span class="glossary-term">${item.term}</span>
					<span class="glossary-category">${item.category}</span>
				</div>
				<p class="glossary-definition">${item.definition}</p>
			</div>
		`).join('');
	}
	
	function initGlossaryFilters() {
		// Поиск по терминам
		document.getElementById('glossary-search')?.addEventListener('input', function(e) {
			const searchTerm = e.target.value.toLowerCase();
			filterGlossaryCards(searchTerm);
		});

		// Фильтрация по категориям
		document.querySelectorAll('.filter-btn').forEach(btn => {
			btn.addEventListener('click', function() {
				document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
				this.classList.add('active');
				filterGlossaryCards(document.getElementById('glossary-search').value.toLowerCase(), 
								  this.dataset.category);
			});
		});
	}

	function filterGlossaryCards(searchTerm = '', category = 'all') {
		document.querySelectorAll('.glossary-card').forEach(card => {
			const term = card.querySelector('.glossary-term').textContent.toLowerCase();
			const definition = card.querySelector('.glossary-definition').textContent.toLowerCase();
			const cardCategory = card.querySelector('.glossary-category').textContent;
			
			const matchesSearch = term.includes(searchTerm) || definition.includes(searchTerm);
			const matchesCategory = category === 'all' || cardCategory === category;
			
			card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
		});
	}

	// Обновляем renderGlossary для вызова фильтров
	function renderGlossary() {
		const container = document.getElementById('glossary-container');

		container.innerHTML = glossaryData.map(item => `
			<div class="glossary-card" data-category="${item.category}">
				<div class="term-header">
					<span class="glossary-term">${item.term}</span>
					<span class="glossary-category">${item.category}</span>
				</div>
				<p class="glossary-definition">${item.definition}</p>
			</div>
		`).join('');

		initGlossaryFilters(); // Инициализируем фильтры после рендеринга
	}

    // Основные функции
    function switchTab(tabId) {
		// Обновляем навигацию
		navItems.forEach(item => item.classList.remove('active'));
		document.querySelector(`.nav-item[data-tab="${tabId}"]`).classList.add('active');
		
		// Показываем соответствующий контент
		tabContents.forEach(content => content.classList.remove('active'));
		const activeTab = document.getElementById(tabId);
		activeTab.classList.add('active');
		
		// Прокрутка в начало, кроме календаря
		if (tabId !== 'calendar') {
			setTimeout(() => {
				activeTab.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}, 50);
		}
		
		// Специальная обработка для календаря
		if (tabId === 'calendar') {
			scrollToCurrentEvent();
		}
	}

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Блокируем скролл страницы
        }
    }

    function closeModal(modalElement) {
        if (modalElement) {
            modalElement.style.display = "none";
            document.body.style.overflow = ""; // Восстанавливаем скролл
        }
    }

    // Генерация контента для команд
    function renderTeams() {
        if (!teamsContainer) return;
        
        teamsContainer.innerHTML = '';
        Object.keys(teamsData).forEach(teamKey => {
            const team = teamsData[teamKey];
            const teamCard = document.createElement('div');
            teamCard.className = 'info-card';
            teamCard.setAttribute('data-modal', team.id);
            
            teamCard.innerHTML = `
                <img src="Images/Teams/${team.miniLogo}" alt="${team.name}" class="card-mini-logo">
                <h3 class="card-title">${team.name}</h3>
                <div class="divider"></div>
                ${team.drivers.map(driver => `
                    <div class="info-row">
                        <div class="info-circle">${driver.number}</div>
                        <span class="info-name">${driver.name}</span>
                        <img src="Images/Flags/${driver.flag}" alt="Flag" title="${driver.state}" class="info-flag">
                    </div>
                `).join('')}
            `;
            
            teamCard.addEventListener('click', () => openModal(team.id));
            teamsContainer.appendChild(teamCard);
            
            // Генерация модального окна
            renderTeamModal(team);
        });
    }

    function renderTeamModal(team) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = team.id;
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="Images/Teams/${team.logo}" alt="${team.name}" class="modal-logo">
                <h2 class="modal-title">${team.namef}</h2>
                
				<div class="divider"></div>
				
                <div class="info-row-text">
                    <span class="info-label">База:</span>
                    <span class="info-value">${team.base}</span>
                </div>
                
                <div class="info-row-text">
                    <span class="info-label">Руководитель:</span>
                    <span class="info-value">${team.director}</span>
                </div>
                
				<div class="divider"></div>
				
                <div class="info-row-text">
                    <span class="info-label">Болид:</span>
                    <span class="info-value">${team.car}</span>
                </div>
                
                <div class="info-row-text">
                    <span class="info-label">Двигатель:</span>
                    <span class="info-value">${team.engine}</span>
                </div>
                
				<div class="divider"></div>
				
                <h3 style="margin: 20px 0 10px; color: #ff3333;">Пилоты</h3>
                ${team.drivers.map(driver => `
                    <div class="info-row">
                        <div class="info-circle">${driver.number}</div>
                        <span class="info-name">${driver.name}</span>
                        <img src="Images/Flags/${driver.flag}" alt="Flag" title="${driver.state}" class="info-flag">
                    </div>
                `).join('')}
            </div>
        `;
        
        modalsContainer.appendChild(modal);
        modal.querySelector('.close-modal').addEventListener('click', () => closeModal(modal));
    }

    function renderCalendar() {
    if (!calendarContainer) return;
    
    calendarContainer.innerHTML = '';
    Object.keys(tracksData).forEach(trackKey => {
        const track = tracksData[trackKey];
        const trackCard = document.createElement('div');
        trackCard.className = 'two-column-card';
        trackCard.setAttribute('data-modal', track.id);
        trackCard.setAttribute('data-date', track.date);
        
        const currentDate = new Date();
        const raceDate = new Date(track.date);
        const isFutureRace = raceDate > currentDate;
        const isToday = raceDate.toDateString() === currentDate.toDateString();
        
        // Определяем, есть ли спринт на этом Гран-при
        const hasSprint = track.hasSprint || false;
            
        trackCard.innerHTML = `
            <div class="card-left-part">
                <img src="Images/Tracks/${track.miniLogo}" alt="${track.name}" class="card-logo">
            </div>
            <div class="card-right-part">
                <div class="race-header">
                    <h3 class="card-title">${track.name}</h3>
                    ${hasSprint ? '<span class="sprint-badge">СПРИНТ</span>' : ''}
                </div>
                <div class="info-row">
                    <img src="Images/Tracks/Icon/location.webp" alt="Location" class="info-icon">
                    <span class="info-name">Расположение:</span>
                    <span class="info-value">${track.location}</span>
                </div>
                <div class="info-row">
                    <img src="Images/Tracks/Icon/Track.webp" alt="Length" class="info-icon">
                    <span class="info-name">Трасса:</span>
                    <span class="info-value">${track.trackName}</span>
                </div>
                <div class="info-row">
                    <img src="Images/Tracks/Icon/calendar.webp" alt="Date" class="info-icon">
                    <span class="info-name">Дата:</span>
                    <span class="info-value date-value">${formatDate(track.date)}</span>
                </div>
                ${isFutureRace ? `
                    <div class="countdown-container">
                        <div class="countdown-timer" data-date="${track.date}">
                            <div class="countdown-label">До гонки:</div>
                            <span class="countdown-days">00</span>
                            <span class="countdown">д</span>
                            <span class="countdown-hours">00</span>
                            <span class="countdown">ч</span>
                            <span class="countdown-minutes">00</span>
                            <span class="countdown">м</span>
                            <span class="countdown-seconds">00</span>
                            <span class="countdown">с</span>
                        </div>
                    </div>
                ` : `
                    <div class="race-action-container">
                        ${isToday ? (
                            track.streamLink ? 
                                `<a href="${track.streamLink}" class="stream-btn today-btn" target="_blank">Трансляция</a>` :
                                `<div class="no-stream-btn">Нет трансляции</div>`
                        ) : (
                            track.recordingLink && track.recordingLink !== '#' ? 
                                `<a href="${track.recordingLink}" class="stream-btn recording-btn" target="_blank">Запись</a>` :
                                `<div class="no-stream-btn">Нет записи</div>`
                        )}
                    </div>
                `}
            </div>
        `;
        
        trackCard.addEventListener('click', function(e) {
            const clickedElement = e.target;
            const isClickableElement = 
                clickedElement.classList.contains('stream-btn') ||
                clickedElement.classList.contains('today-btn') ||
                clickedElement.classList.contains('recording-btn') ||
                clickedElement.classList.contains('countdown-timer') ||
                clickedElement.classList.contains('countdown-label') ||
                clickedElement.closest('.race-action-container') ||
                clickedElement.closest('.countdown-container') ||
                clickedElement.classList.contains('sprint-badge');
            
            if (!isClickableElement) {
                openModal(track.id);
            }
        });
        
        calendarContainer.appendChild(trackCard);
        renderTrackModal(track);
    });
    
    checkCardsStatus();
    initCountdowns();
}

    function renderTrackModal(track) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = track.id;
        
        modal.innerHTML = `
            <div class="modal-two-column-content">
                <div class="modal-left-part">
                    <img src="Images/Tracks/${track.logo}" alt="${track.name}" class="modal-logo-large">
                </div>
                <div class="modal-right-part">
                    <span class="close-modal">&times;</span>
                    <h2 class="modal-title">${track.trackName}</h2>
					
                    <div class="divider"></div>
					
                    <div class="info-row">
                        <img src="Images/Tracks/Icon/location.webp" alt="Location" class="info-icon">
                        <span class="info-name">Место проведения:</span>
                        <span class="info-value">${track.location}</span>
                    </div>
                    
					<div class="divider"></div>
					
                    <div class="info-row">
                        <img src="Images/Tracks/Icon/track.webp" alt="Length" class="info-icon">
                        <span class="info-name">Длина трассы:</span>
                        <span class="info-value">${track.length}</span>
                    </div>
					
                    <div class="info-row">
                        <img src="Images/Tracks/Icon/track.webp" alt="Turns" class="info-icon">
                        <span class="info-name">Количество поворотов:</span>
                        <span class="info-value">${track.turns}</span>
                    </div>
                    
                    <div class="info-row">
                        <img src="Images/Tracks/Icon/track.webp" alt="Turns" class="info-icon">
                        <span class="info-name">Количество зон DRS:</span>
                        <span class="info-value">${track.drsZones}</span>
                    </div>
                    
                    <div class="info-row">
                        <img src="Images/Tracks/Icon/track.webp" alt="Direction" class="info-icon">
                        <span class="info-name">Направление движения:</span>
                        <span class="info-value">${track.direction}</span>
                    </div>
                    
					<div class="divider"></div>
					
                    <div class="info-row">
                        <img src="Images/Tracks/Icon/track.webp" alt="Record" class="info-icon">
                        <span class="info-name">Рекорд круга:</span>
                        <span class="info-value">${track.lapRecord}</span>
                    </div>
					
					<div class="divider"></div>
					
					<img src="Images/Tracks/Icon/Podium.webp" alt="Podium" class="info-icon">
					<span class="info-name">Подиум 2025:</span>
					<div class="podium-container">
					
						<div class="podium-place second-place">
							<div class="podium-step">
								<img src="Images/Tracks/Icon/podium2.webp" alt=" " class="trophy-img">
								<div class="trophy-base"></div>
							</div>
							<div class="podium-driver">
								<span class="podium-position">2</span>
								<span class="driver-name">${track.podium2}</span>
							</div>
						</div>
						
						<div class="podium-place first-place">
							<div class="podium-step">
								<img src="Images/Tracks/Icon/podium1.png" alt=" " class="trophy-img">
								<div class="trophy-base"></div>
							</div>
							<div class="podium-driver">
								<span class="podium-position">1</span>
								<span class="driver-name">${track.podium1}</span>
							</div>
						</div>
						
						<div class="podium-place third-place">
							<div class="podium-step">
								<img src="Images/Tracks/Icon/podium3.webp" alt=" " class="trophy-img">
								<div class="trophy-base"></div>
							</div>
							<div class="podium-driver">
								<span class="podium-position">3</span>
								<span class="driver-name">${track.podium3}</span>
							</div>
						</div>
					</div>
                </div>
            </div>
        `;
        
        modalsContainer.appendChild(modal);
        modal.querySelector('.close-modal').addEventListener('click', () => closeModal(modal));
    }

    // Функции для работы с датами
		function checkCardsStatus() {
			const currentDate = new Date();
			currentDate.setHours(0, 0, 0, 0);
			
			document.querySelectorAll('.two-column-card').forEach(card => {
				const dateStr = card.getAttribute('data-date');
				if (!dateStr) return;
				
				const [year, month, day] = dateStr.split('-').map(Number);
				const cardDate = new Date(year, month - 1, day);
				
				card.classList.remove('inactive', 'active', 'today');
				
				if (cardDate < currentDate) {
					card.classList.add('inactive');
					const countdown = card.querySelector('.countdown-container');
					if (countdown) countdown.remove();
				} else if (cardDate.getTime() === currentDate.getTime()) {
					card.classList.add('today');
					const countdown = card.querySelector('.countdown-container');
					if (countdown) {
						countdown.querySelector('.countdown-label').textContent = "Гонка сегодня!";
					}
				} else {
					card.classList.add('active');
				}
			});
		}

		function formatDate(dateStr) {
			const [year, month, day] = dateStr.split('-');
			return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`;
		}
		
		function initCountdowns() {
		const countdowns = document.querySelectorAll('.countdown-timer');
		
		countdowns.forEach(timer => {
			updateCountdown(timer); // Первое обновление
			setInterval(() => updateCountdown(timer), 1000); // Обновление каждую секунду
		});
	}

	function updateCountdown(timer) {
		const targetDate = new Date(timer.dataset.date);
		const now = new Date();
		const diff = targetDate - now;
		
		if (diff <= 0) {
			timer.innerHTML = "Гонка началась!";
			timer.closest('.countdown-container').querySelector('.countdown-label').textContent = "Статус:";
			return;
		}
		
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((diff % (1000 * 60)) / 1000);
		
		timer.querySelector('.countdown-days').textContent = days.toString().padStart(2, '0');
		timer.querySelector('.countdown-hours').textContent = hours.toString().padStart(2, '0');
		timer.querySelector('.countdown-minutes').textContent = minutes.toString().padStart(2, '0');
		timer.querySelector('.countdown-seconds').textContent = seconds.toString().padStart(2, '0');
	}
	
	function scrollToCurrentEvent() {
		const calendarContainer = document.getElementById('calendar-container');
		if (!calendarContainer) return;
		
		const cards = calendarContainer.querySelectorAll('.two-column-card');
		if (cards.length === 0) return;
		
		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		
		let targetCard = null;
		
		// Ищем первую карточку, которая либо сегодня, либо в будущем
		for (const card of cards) {
			const dateStr = card.getAttribute('data-date');
			if (!dateStr) continue;
			
			const [year, month, day] = dateStr.split('-').map(Number);
			const cardDate = new Date(year, month - 1, day);
			
			if (cardDate >= currentDate) {
				targetCard = card;
				break;
			}
		}
		
		// Если не нашли будущих событий, прокручиваем к последнему
		if (!targetCard) targetCard = cards[cards.length - 1];
		
		// Прокручиваем с анимацией
		if (targetCard) {
			setTimeout(() => {
				targetCard.scrollIntoView({
					behavior: 'smooth',
					block: 'center'
				});
				
				// Добавляем временную анимацию подсветки
				targetCard.style.boxShadow = '0 0 0 3px rgba(255, 255, 0)';
				targetCard.style.transition = 'box-shadow 0.5s ease';
				
				setTimeout(() => {
					targetCard.style.boxShadow = '';
				}, 1000);
			}, 300);
		}
	}
});
