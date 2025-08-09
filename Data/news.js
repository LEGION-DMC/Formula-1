const newsData = [
    { id: "news1",
        title: "Уход Хорнера сравним с исчезновением динозавра",
        date: "2025-08-09",
        category: "Команда",
        image: "news1.jpg",
        summary: "Уволенный из Red Bull Racing Кристиан Хорнер – личность противоречивая, и отношение к нему у бывших коллег могло быть кардинально противоположным.",
        content: "Тото Вольфф: «В каком-то смысле я скучаю по Кристиану, ведь мы с ним боролись на протяжении 12 лет. Часто он вел себя как дурак, и я открыто говорил ему об этом. Знаете, Хорнер был противоречивым руководителем команды, но в то же время одним их главных героев в нашем актёрском составе. Его карьерные достижения и рекорды на трассе говорят сами за себя. В каком-то смысле уход Хорнера сравним с исчезновением одного из старых динозавров. Среди руководителей команд таких осталось немного, поэтому я чувствую себя немного одиноко»."
    },
    { id: "news2",
        title: "Алекс Данн в списке кандидатов на место в Cadillac",
        date: "2025-08-09",
        category: "Команда",
        image: "news2.jpg",
        summary: "Алекс Данн пополнил список кандидатов на место в Cadillac на следующий сезон.",
        content: "Американская команда пока официально не объявила состав пилотов на 2026-й, но считается, что контракт с Валттери Боттасом – вопрос решённый, и сторонам осталось только согласовать мелкие детали и подписать бумаги. Руководитель команды Грэм Лоундон давал понять, что в напарники к опытному гонщику в Cadillac могут пригласить молодого пилота. Считается, что наибольшие шансы на контракт у резервного гонщика Aston Martin Фелипе Друговича, однако теперь ирландская пресса пишет об интересе Cadilliac к Алексу Данну, впрочем, не приводя никаких подробностей. В 2025-м ирландец Данн выступает в Формуле 2. В этом сезоне на его счету две победы, шесть подиумов, два поула и два лучших круга. На Гран При Австрии Алекс садился за руль McLaren в первой тренировке."
    },
    { id: "news3",
        title: "Дожди размыли трассу в Зандфорте",
        date: "2025-07-22",
        category: "Трасса",
        image: "news3.jpg",
        summary: "Система отвода воды на трассе в голландском Зандфорте не выдержала продолжавшихся несколько дней ливней.",
        content: "Система отвода воды на трассе в голландском Зандфорте не выдержала продолжавшихся несколько дней ливней. Трассу подмыло, на опубликованных пресс-службой фотографиях видны текущие по асфальту ручьи. Затопило и подъездные пути, так что автодром пришлось временно закрыть. Восстановительные работы ведутся и уже сегодня трасса должна быть открыта – Академия Формулы 1 проведёт двухдневные тесты."
    },
    { id: "news100",
        title: "Заголовок",
        date: "2025-01-01",
        category: "Категория",
        image: "australia-gp.avif",
        summary: "Описание",
        content: "Подробности"
    },
];

function renderNews() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="news-container">
            <div class="news-grid" id="newsGrid"></div>
        </div>
    `;

    const newsGrid = document.getElementById('newsGrid');
    
    // Сортируем новости по дате (новые сначала)
    const sortedNews = [...newsData].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );

    sortedNews.forEach(newsItem => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.setAttribute('data-news', newsItem.id);

        newsCard.innerHTML = `
            <div class="news-image">
                <img src="Images/News/${newsItem.image}" alt="${newsItem.title}">
                <span class="news-category">${newsItem.category}</span>
            </div>
            <div class="news-content">
                <div class="news-header">
                    <h3 class="news-title">${newsItem.title}</h3>
					<div class="glos-divider"></div>
                    <span class="news-date">${formatDate(newsItem.date)}</span>
					<div class="glos-divider"></div>
                </div>
                <p class="news-summary">${newsItem.summary}</p>
                <button class="news-read-more">Подробнее</button>
            </div>
        `;

        newsCard.addEventListener('click', () => openNewsModal(newsItem));
        newsGrid.appendChild(newsCard);
    });
}

function formatDate(dateStr) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateStr).toLocaleDateString('ru-RU', options);
}

function openNewsModal(newsItem) {
    const modal = document.createElement('div');
    modal.className = 'news-modal';
    modal.innerHTML = `
        <div class="news-modal-content">
            <div class="news-modal-image">
                <img src="Images/News/${newsItem.image}" alt="${newsItem.title}">
                <span class="news-modal-category">${newsItem.category}</span>
            </div>
            <div class="news-modal-body">
                <h2 class="news-modal-title">${newsItem.title}</h2>
				<div class="glos-divider"></div>
                <span class="news-modal-date">${formatDate(newsItem.date)}</span>
				<div class="glos-divider"></div>
                <div class="news-modal-text">
                    <p>${newsItem.content}</p>
                </div>
            </div>
        </div>
        <button class="news-close-modal">&times;</button>
    `;
    
    document.body.appendChild(modal);
    
    // Закрытие модального окна
    modal.querySelector('.news-close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Инициализация при загрузке вкладки
if (window.location.hash === '#news') {
    renderNews();
}