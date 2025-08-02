// Массив терминов
const glossaryTerms = [
    { title: "DRS",
        text: "Система снижения лобового сопротивления, позволяющая открывать заднее антикрыло на прямых.",
        fullText: "DRS (Drag Reduction System) — система, позволяющая пилоту открыть заднее антикрыло на определённых участках трассы для увеличения скорости на прямых. Используется только при соблюдении условий (разница в 1 секунду с впереди идущим автомобилем).",
        tag: "Технологии", tagColor: "#FF5252"},
    { title: "Подвеска",
        text: "Система, соединяющая колёса с кузовом автомобиля.",
        fullText: "Подвеска в Formula 1 — сложная система амортизации, влияющая на управляемость и сцепление с трассой. Бывает push-rod и pull-rod.",
        tag: "Конструкция", tagColor: "#4CAF50"},
    { title: "Пит-стоп",
        text: "Остановка в боксах для смены колёс и ремонта.",
        fullText: "Пит-стоп — ключевой элемент гонки, где команда меняет колёса (иногда носовой обтекатель) за 2-3 секунды. Рекорд — 1.82 сек (Red Bull, 2019).",
        tag: "Гонка", tagColor: "#2196F3"},
];

function renderGlossary(terms) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="glossary">
            <div class="search-bar">
                <input type="text" id="searchInput" placeholder="Поиск">
            </div>
            <div class="tags-filter" id="tagsFilter"></div>
            <div class="terms-grid" id="termsGrid"></div>
        </div>
    `;

    const searchInput = document.getElementById('searchInput');
    const tagsFilter = document.getElementById('tagsFilter');
    const termsGrid = document.getElementById('termsGrid');

    // Отображение тегов для фильтрации
	const allTags = ["Все", ...new Set(terms.map(term => term.tag))]; // Добавили "Все"
	tagsFilter.innerHTML = allTags.map(tag => `
		<button class="tag" data-tag="${tag === 'Все' ? '' : tag}">${tag}</button>
	`).join('');

	// Фильтр по тегам (обновлённый)
	document.querySelectorAll('.tag').forEach(tagBtn => {
		tagBtn.addEventListener('click', () => {
			document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
			tagBtn.classList.add('active');
			const selectedTag = tagBtn.getAttribute('data-tag');
			const filteredTerms = selectedTag ? 
				glossaryTerms.filter(term => term.tag === selectedTag) : 
				glossaryTerms; // Если тег пустой (кнопка "Все"), показываем все термины
			updateTermsGrid(filteredTerms);
		});
	});

    // Отображение терминов
    updateTermsGrid(terms);

    // Поиск по заголовку
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTerms = glossaryTerms.filter(term => 
            term.title.toLowerCase().includes(searchTerm)
        );
        updateTermsGrid(filteredTerms);
    });

    // Фильтр по тегам
    document.querySelectorAll('.tag').forEach(tagBtn => {
        tagBtn.addEventListener('click', () => {
            document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
            tagBtn.classList.add('active');
            const selectedTag = tagBtn.getAttribute('data-tag');
            const filteredTerms = selectedTag ? 
                glossaryTerms.filter(term => term.tag === selectedTag) : 
                glossaryTerms;
            updateTermsGrid(filteredTerms);
        });
    });

    // Функция обновления сетки терминов
    function updateTermsGrid(terms) {
        termsGrid.innerHTML = terms.map(term => `
            <div class="term-card" data-title="${term.title}">
                <span class="term-tag" style="background-color: ${term.tagColor}">${term.tag}</span>
                <h3>${term.title}</h3>
                <p>${term.text}</p>
            </div>
        `).join('');

        // Открытие модального окна при клике на карточку
        document.querySelectorAll('.term-card').forEach(card => {
            card.addEventListener('click', () => {
                const termTitle = card.getAttribute('data-title');
                const term = glossaryTerms.find(t => t.title === termTitle);
                openModal(term);
            });
        });
    }

    // Модальное окно
    function openModal(term) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content-termin">
                <span class="term-tag" style="background-color: ${term.tagColor}">${term.tag}</span>
                <h3>${term.title}</h3>
                <p>${term.fullText}</p>
            </div>
        `;
        document.body.appendChild(modal);

        // Закрытие при клике вне окна
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
}

if (window.location.hash === '#glossary') {
    renderGlossary(glossaryTerms);
}