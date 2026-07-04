// Находим элементы на странице
const activateBtn = document.getElementById('activate-btn');
const startMenu = document.getElementById('start-menu');
const nextMenu = document.getElementById('next-menu');

// Обрабатываем клик по кнопке
activateBtn.addEventListener('click', () => {
    startMenu.classList.add('hidden'); // Скрываем первое меню
    nextMenu.classList.remove('hidden'); // Показываем второе меню
});
