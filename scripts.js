// Загрузка контента при выборе вкладки
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = e.target.getAttribute('data-tab');
        loadTabContent(tabName);
    });
});

// Возврат на главную при клике на логотип
document.getElementById('logoLink').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('content').innerHTML = `
        <div id="mainPage">
            <h1>Formula 1</h1>
            <p>Чемпионат Formula 1 2025</p>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокрутка вверх
});

// Функция загрузки контента
function loadTabContent(tabName) {
    const content = document.getElementById('content');
    
    // Здесь будет загрузка данных из .js файлов
    switch (tabName) {
		case 'teams':
			renderTeams();
			window.scrollTo({ top: 0, behavior: 'smooth' });
			break;
		case 'drivers':
			renderDrivers();
			window.scrollTo({ top: 0, behavior: 'smooth' });
			break;
        case 'calendar':
			renderCalendar();
			break;
        case 'results':
            renderResults();
			window.scrollTo({ top: 0, behavior: 'smooth' });
			break;
        case 'glossary':
			renderGlossary(glossaryTerms);
			window.scrollTo({ top: 0, behavior: 'smooth' });
			break;
    }
}

// Кнопка прокрутки вверх
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Бургер-меню для мобильных устройств
const burgerBtn = document.getElementById('burgerBtn');
const menu = document.querySelector('.menu');

if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

// Закрытие меню при клике на пункт
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        menu.classList.remove('active');
    });
});
