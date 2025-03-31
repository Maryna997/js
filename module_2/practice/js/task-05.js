// Напиши програму, яка обчислює та виводить суму всіх непарних чисел
// від 1 до n, де n - це число введене користувачем

// n = 10 => 1 + 3 + 5 + 7 + 9

// v1 ===
// function sumOfOdd(n) {
//     let counter = 0;

//     for (let i = 1; i <= n; i++) {
//         if (i % 2 !== 0) {
//             counter += i;
//         };
//     };

//     return counter;
// };

// v2 ===
function sumOfOdd(n) {
    let counter = 0;

    for (let i = 1; i <= n; i += 2) {
        counter += i;
    }

    return counter;
};

// v3 ===
// function sumOfOdd(n) {
//     const oddAmount = Math.floor((n + 1) / 2);
//     return oddAmount ** 2;
// };

console.log(sumOfOdd(5)) // 10 - аргумент функції
console.log(sumOfOdd(10))