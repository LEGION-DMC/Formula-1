// Кнопка подписки
document.getElementById('cta-button').addEventListener('click', () => {
    const email = prompt('Введите ваш email для подписки на новости F1:');
    if (email) {
        alert(`Спасибо! На адрес ${email} будут приходить новости.`);
    }
});

// Темная тема (дополнительно)
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '<i class="fas fa-moon"></i> Темная тема';
themeToggle.classList.add('theme-toggle');
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Светлая тема';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Темная тема';
        localStorage.setItem('theme', 'light');
    }
});

// Проверка сохраненной темы
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Светлая тема';
}

// Стиль для кнопки темы
const style = document.createElement('style');
style.textContent = `
.theme-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 0.5rem 1rem;
    background: var(--f1-red);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 100;
}
`;
document.head.appendChild(style);
