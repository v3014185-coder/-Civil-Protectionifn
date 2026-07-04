// Экраны
const startMenu = document.getElementById('start-menu');
const buttonsMenu = document.getElementById('buttons-menu');
const textMenu = document.getElementById('text-menu');

// Кнопки
const activateBtn = document.getElementById('activate-btn');
const btnWho = document.getElementById('btn-who');
const btnBack = document.getElementById('btn-back');

// 1. Нажатие на "АКТИВИРОВАТЬ" -> открывает меню с тремя кнопками
activateBtn.addEventListener('click', () => {
    startMenu.classList.add('hidden');
    buttonsMenu.classList.remove('hidden');
});

// 2. Нажатие на первую кнопку "Кто такие ELITE?" -> открывает текст
btnWho.addEventListener('click', () => {
    buttonsMenu.classList.add('hidden');
    textMenu.classList.remove('hidden');
});

// 3. Нажатие на кнопку "НАЗАД" -> возвращает из текста к трем кнопкам
btnBack.addEventListener('click', () => {
    textMenu.classList.add('hidden');
    buttonsMenu.classList.remove('hidden');
});
