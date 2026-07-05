// =============================================
// ГЛАВНАЯ СТРАНИЦА
// =============================================
function loadHomePage(container) {
    container.innerHTML = `
        <div class="page-content">
            <div style="text-align: center; padding: 40px 20px;">
                <h1 style="font-size: 3rem; color: var(--accent-red); margin-bottom: 20px; 
                           text-shadow: 0 0 20px rgba(225, 6, 0, 0.5);">
                    FORMULA 1
                </h1>
                <p style="font-size: 1.2rem; color: var(--text-secondary); max-width: 800px; 
                          margin: 0 auto 40px; line-height: 1.6;">
                    Добро пожаловать в мир скорости, технологий и страсти. 
                    Следите за чемпионатом мира Formula 1 - королевой автоспорта.
                </p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
                            gap: 20px; max-width: 1200px; margin: 0 auto;">
                    <div style="background: rgba(30, 30, 30, 0.7); padding: 30px; border-radius: 15px; 
                                border: 1px solid rgba(225, 6, 0, 0.2); backdrop-filter: blur(10px);">
                        <h3 style="color: var(--accent-red); margin-bottom: 15px;">🏁 Гонки</h3>
                        <p style="color: var(--text-secondary);">
                            Следите за расписанием гонок и результатами в реальном времени
                        </p>
                    </div>
                    
                    <div style="background: rgba(30, 30, 30, 0.7); padding: 30px; border-radius: 15px; 
                                border: 1px solid rgba(225, 6, 0, 0.2); backdrop-filter: blur(10px);">
                        <h3 style="color: var(--accent-red); margin-bottom: 15px;">👨‍🚀 Пилоты</h3>
                        <p style="color: var(--text-secondary);">
                            Узнайте больше о лучших гонщиках планеты
                        </p>
                    </div>
                    
                    <div style="background: rgba(30, 30, 30, 0.7); padding: 30px; border-radius: 15px; 
                                border: 1px solid rgba(225, 6, 0, 0.2); backdrop-filter: blur(10px);">
                        <h3 style="color: var(--accent-red); margin-bottom: 15px;">🏎️ Команды</h3>
                        <p style="color: var(--text-secondary);">
                            Исследуйте легендарные команды Formula 1
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    console.log('Главная страница загружена');
}