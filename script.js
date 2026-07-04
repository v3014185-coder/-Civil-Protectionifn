// Находим все экраны сайта
const startMenu = document.getElementById('start-menu');
const buttonsMenu = document.getElementById('buttons-menu');
const textMenu = document.getElementById('text-menu');
const rulesMenu = document.getElementById('rules-menu');
const jobsMenu = document.getElementById('jobs-menu');

// Находим кнопки перехода
const activateBtn = document.getElementById('activate-btn');
const btnWho = document.getElementById('btn-who');
const btnRules = document.getElementById('btn-rules');
const btnJobs = document.getElementById('btn-jobs');

// Находим кнопки "Назад"
const btnBackWho = document.getElementById('btn-back-who');
const btnBackRules = document.getElementById('btn-back-rules');
const btnBackJobs = document.getElementById('btn-back-jobs');

// 1. АКТИВИРОВАТЬ -> открывает главное меню
activateBtn.addEventListener('click', () => {
    startMenu.classList.add('hidden');
    buttonsMenu.classList.remove('hidden');
});

// 2. Кнопка "Кто такие ELITE?" -> открывает текст
btnWho.addEventListener('click', () => {
    buttonsMenu.classList.add('hidden');
    textMenu.classList.remove('hidden');
});

// 3. Кнопка "Где взять устав..." -> открывает устав
btnRules.addEventListener('click', () => {
    buttonsMenu.classList.add('hidden');
    rulesMenu.classList.remove('hidden');
});

// 4. Кнопка "Вакансии" -> открывает экран вакансий
btnJobs.addEventListener('click', () => {
    buttonsMenu.classList.add('hidden');
    jobsMenu.classList.remove('hidden');
});

// Нажатия на кнопки "Назад"
btnBackWho.addEventListener('click', () => {
    textMenu.classList.add('hidden');
    buttonsMenu.classList.remove('hidden');
});

btnBackRules.addEventListener('click', () => {
    rulesMenu.classList.add('hidden');
    buttonsMenu.classList.remove('hidden');
});

btnBackJobs.addEventListener('click', () => {
    jobsMenu.classList.add('hidden');
    buttonsMenu.classList.remove('hidden');
});


