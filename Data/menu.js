document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { label: 'Главная', id: 'main', isDefault: true },
        { label: 'Календарь', id: 'calendar' },
        { label: 'Результаты', id: 'results' },
        { label: 'Статистика', id: 'stats' },
        { label: 'Команды', id: 'teams' },
        { label: 'Пилоты', id: 'drivers' }
    ];

    const body = document.body;

    const navMenu = document.createElement('div');
    navMenu.className = 'main-menu';

    const logo = document.createElement('img');
    logo.src = 'Images/logo.png';
    logo.alt = 'F1 Logo';
    logo.className = 'menu-logo';
    logo.title = 'На главную';

    const seasonDiv = document.createElement('div');
    seasonDiv.className = 'season-title';
    const currentYear = new Date().getFullYear();
    seasonDiv.innerHTML = `Сезон <span>${currentYear}</span>`;

    const divider = document.createElement('hr');
    divider.className = 'menu-divider';

    const nav = document.createElement('nav');
    nav.className = 'menu-nav';

    const navLogo = document.createElement('img');
    navLogo.src = 'Images/logo.png';
    navLogo.alt = 'F1 Logo';
    navLogo.className = 'menu-nav-logo';
    navLogo.title = 'На главную';

    nav.appendChild(navLogo);

    menuItems.filter(item => !item.isDefault).forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'menu-item';
        btn.dataset.tab = item.id;
        btn.textContent = item.label;
        nav.appendChild(btn);
    });

    const burgerBtn = document.createElement('button');
    burgerBtn.className = 'burger-btn';
    burgerBtn.setAttribute('aria-label', 'Меню');
    burgerBtn.innerHTML = '<span></span><span></span><span></span>';

    const contentArea = document.createElement('div');
    contentArea.className = 'content-area';
    contentArea.id = 'dataContainer';

    navMenu.appendChild(logo);
    navMenu.appendChild(seasonDiv);
    navMenu.appendChild(divider);
    navMenu.appendChild(nav);
    navMenu.appendChild(burgerBtn);

    body.insertBefore(contentArea, body.firstChild);
    body.insertBefore(navMenu, body.firstChild);

    const allMenuButtons = document.querySelectorAll('.menu-item');
    const dataContainer = document.getElementById('dataContainer');

    function loadTabContent(tabId) {
        dataContainer.innerHTML = '';

        const title = document.createElement('h2');

        switch (tabId) {
            case 'main':
                title.textContent = '🏁 Добро пожаловать в мир Formula 1!';
                if (typeof initMainPage === 'function') initMainPage(dataContainer);
                break;
            case 'calendar':
                title.textContent = '📅 Календарь сезона';
                if (typeof initCalendarPage === 'function') initCalendarPage(dataContainer);
                break;
            case 'results':
                title.textContent = '🏆 Результаты гонок';
                if (typeof initResultsPage === 'function') initResultsPage(dataContainer);
                break;
            case 'stats':
                title.textContent = '📊 Статистика';
                if (typeof initStatsPage === 'function') initStatsPage(dataContainer);
                break;
            case 'teams':
                title.textContent = '🏎️ Команды';
                if (typeof initTeamsPage === 'function') initTeamsPage(dataContainer);
                break;
            case 'drivers':
                title.textContent = '👨‍🚀 Пилоты';
                if (typeof initDriversPage === 'function') initDriversPage(dataContainer);
                break;
        }

        if (dataContainer.children.length === 0) {
            dataContainer.appendChild(title);
            const desc = document.createElement('p');
            desc.style.color = '#b0b0b0';
            desc.textContent = 'Контент для этой вкладки скоро появится.';
            dataContainer.appendChild(desc);
        }

        sessionStorage.setItem('activeF1Tab', tabId);
    }

    function setActiveButton(tabId) {
        allMenuButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });
    }

    function closeNavIfOpen() {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            burgerBtn.classList.remove('open');
            body.style.overflow = '';
        }
    }

    function navigateTo(tabId) {
        setActiveButton(tabId);
        loadTabContent(tabId);
        closeNavIfOpen();
    }

    allMenuButtons.forEach(button => {
        button.addEventListener('click', e => navigateTo(e.target.dataset.tab));
    });

    logo.addEventListener('click', () => navigateTo('main'));
    navLogo.addEventListener('click', () => navigateTo('main'));

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('open');
        nav.classList.toggle('open');
        body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    const savedTab = sessionStorage.getItem('activeF1Tab');
    const validTabs = menuItems.map(item => item.id);
    const initialTab = (savedTab && validTabs.includes(savedTab)) ? savedTab : 'main';

    setActiveButton(initialTab);
    loadTabContent(initialTab);

    window.scrollTo({ top: 0, behavior: 'instant' });
});