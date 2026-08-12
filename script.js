const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Verificar se o usuário já tem uma preferência salva
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = "☀️ Light Mode";
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = "🌙 Dark Mode";
    }
});
