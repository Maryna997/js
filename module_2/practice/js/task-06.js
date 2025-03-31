// Напиши функцію printMultiplicationTable(number),
// яка виводить таблицю множення для заданого числа від 1 до 10

// 5 X 1 = 5
// 5 X 2 = 10
// 5 X 3 = 15
// ...
// 5 X 10 = 50

function printMultiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} X ${i} = ${n * i}`);
    };
};

printMultiplicationTable(10);