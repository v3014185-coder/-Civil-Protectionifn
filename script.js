// Экраны
const startMenu = document.getElementById('start-menu');
const buttonsMenu = document.getElementById('buttons-menu');
const textMenu = document.getElementById('text-menu');
const rulesMenu = document.getElementById('rules-menu');

// Кнопки переходов
const activateBtn = document.getElementById('activate-btn');
const btnWho = document.getElementById('btn-who');
const btnRules = document.getElementById('btn-rules');

// Кнопки "Назад"
const btnBackWho = document.getElementById('btn-back-who');
const btnBackRules = document.getElementById('btn-back-rules');

// 1. АКТИВИРОВАТЬ -> открывает главное меню
activateBtn.addEventListener('click', () => {
    startMenu.classList.add('hidden');
    buttonsMenu.classList.remove('hidden');
});

// 2. Кнопка "Кто такие ELITE?" -> открывает первый текст
btnWho.addEventListener('click', () => {
    buttonsMenu.classList.add('hidden');
    textMenu.classList.remove('hidden');
});

// 3. Кнопка "Где взять устав..." -> открывает экран с уставом и ссылкой
btnRules.addEventListener('click', () => {
    buttonsMenu.classList.add('hidden');
    rulesMenu.classList.remove('hidden');
});

// 4. Кнопка "Назад" из меню "Кто такие" -> возвращает в главное меню
btnBackWho.addEventListener('click', () => {
    textMenu.classList.add('hidden');
    buttonsMenu.github.io / buttonsMenu.classList.remove('hidden');
});

// 5. Кнопка "Назад" из меню Устава -> возвращает в главное меню
btnBackRules.addEventListener('click', () => {
    rulesMenu.classList.add('hidden');
    buttonsMenu.classList.remove('hidden');
});
