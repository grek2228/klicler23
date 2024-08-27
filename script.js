let coins = localStorage.getItem('coins') ? parseInt(localStorage.getItem('coins')) : 0;
let clickValue = localStorage.getItem('clickValue') ? parseInt(localStorage.getItem('clickValue')) : 1;

document.getElementById('coins').innerText = coins;

document.getElementById('apple').addEventListener('click', () => {
    coins += clickValue;
    document.getElementById('coins').innerText = coins;
    localStorage.setItem('coins', coins); // Сохраняем монеты
});

document.getElementById('shopButton').addEventListener('click', () => {
    document.getElementById('shop').classList.toggle('hidden');
});

document.getElementById('closeShop').addEventListener('click', () => {
    document.getElementById('shop').classList.add('hidden');
});

// Улучшение 1
document.getElementById('upgrade1').addEventListener('click', () => {
    if (coins >= 50) {
        coins -= 50;
        clickValue += 1;
        document.getElementById('coins').innerText = coins;
        localStorage.setItem('coins', coins); // Сохраняем монеты
        localStorage.setItem('clickValue', clickValue); // Сохраняем значение клика
        alert("Вы купили улучшение +1 клик!");
    } else {
        alert("Недостаточно монет!");
    }
});

// Улучшение 2
document.getElementById('upgrade2').addEventListener('click', () => {
    if (coins >= 100) {
        coins -= 100;
        clickValue += 2;
        document.getElementById('coins').innerText = coins;
        localStorage.setItem('coins', coins); // Сохраняем монеты
        localStorage.setItem('clickValue', clickValue); // Сохраняем значение клика
        alert("Вы купили улучшение +2 клика!");
    } else {
        alert("Недостаточно монет!");
    }
});

// Улучшение 3
document.getElementById('upgrade3').addEventListener('click', () => {
    if (coins >= 1000) {
        coins -= 1000;
        clickValue += 20;
        document.getElementById('coins').innerText = coins;
        localStorage.setItem('coins', coins); // Сохраняем монеты
        localStorage.setItem('clickValue', clickValue); // Сохраняем значение клика
        alert("Вы купили улучшение +20 кликов!");
    } else {
        alert("Недостаточно монет!");
    }
});
