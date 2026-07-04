// Находим все экраны сайта
const startMenu = document.getElementById('start-menu');
const buttonsMenu = document.getElementById('buttons-menu');
const textMenu = document.getElementById('text-menu');
const rulesMenu = document.getElementById('rules-menu');

// Находим кнопки переходов
const activateBtn = document.getElementById('activate-btn');
const btnWho = document.getElementById('btn-who');
const btnRules = document.getElementById('btn-rules');

// Находим кнопки "Назад"
const btnBackWho = document.getElementById('btn-back-who');
const btnBackRules = document.getElementById('btn-back-rules');

// 1. Нажатие на "АКТИВИРОВАТЬ" -> показывает меню с кнопками
activateBtn.addEventListener('click', () => {
    startMenu.classList.add('hidden');
    buttonsMenu.classList.remove('hidden');
});

// 2. Нажатие на "Кто такие ELITE?" -> показывает экран с текстом
btnWho.addEventListener('click', () => {
    buttonsMenu.classList.add('hidden');
    textMenu.classList.remove('hidden');
});

// 3. Нажатие на "Где взять устав..." -> показывает экран с уставом
btnRules.addEventListener('click', () => {
    buttonsMenu.classList.add('hidden');
    rulesMenu.classList.remove('hidden');
});

// 4. Нажатие на "Назад" на экране "Кто такие ELITE?" -> возвращает к кнопкам
btnBackWho.addEventListener('click', () => {
    textMenu.classList.add('hidden');
    buttonsMenu.classList.remove('hidden');
});

// 5. Нажатие на "Назад" на экране Устава -> возвращает к кнопкам
btnBackRules.addEventListener('click', () => {
    rulesMenu.classList.add('hidden');
    buttonsMenu.classList.remove('hidden');
});

