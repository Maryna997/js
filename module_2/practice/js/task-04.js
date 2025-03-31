// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

const login = prompt('Login:');

// V1 =================
// if (login === 'admin') {
//     const password = prompt('password:');

//     if (password && password === '123456') {
//         alert('Добрий день!');
//     } else if (typeof password === 'object') {
//         alert('Скасовано');
//     } else {
//         alert('Невірний пароль!');
//     };
// } else if (typeof login === 'object') {
//     alert('Скасовано');
// } else {
//     alert('Я вас не знаю');
// };


// v2 =================
function auth(login) {
    if (login === 'admin') {
        const password = prompt('password:');

        if (password && password === '123456') {
            return 'Добрий день!';
        }

        return typeof password === 'object' ? 'Скасовано' : 'Невірний пароль!';
    };

    return typeof login === 'object' ? 'Скасовано' : 'Я вас не знаю';
};

const result = auth(login);

alert(result);


