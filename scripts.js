// Анимация кнопки
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Подпишитесь на рассылку, чтобы получать новости F1!');
});

// Темная тема (опционально)
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌙 Темная тема';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.right = '20px';
themeToggle.style.padding = '0.5rem';
themeToggle.style.background = '#333';
themeToggle.style.color = 'white';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '5px';
themeToggle.style.cursor = 'pointer';

document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️ Светлая тема';
        document.body.style.backgroundColor = '#111';
        document.body.style.color = '#eee';
    } else {
        themeToggle.textContent = '🌙 Темная тема';
        document.body.style.backgroundColor = '#f4f4f4';
        document.body.style.color = '#333';
    }
});
