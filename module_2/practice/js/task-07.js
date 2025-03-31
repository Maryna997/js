// Напиши функцію findMaxNumber, яка отримує три числа як аргументи
// і повертає найбільше

// v1 ===
function findMaxNumber(a, b, c) {
    let max = a;

    if(b >= a) {
        max = b;
    };
    
    if(c >= b) {
        max = c;
    };

    return max;
}

// v2 ===
// function findMaxNumber(a, b, c) {
//     return Math.max(a, b, c);
// }

console.log(findMaxNumber(10, 4, 3))
console.log(findMaxNumber(6, 9, 3))
console.log(findMaxNumber(-10, -3, -4))
console.log(findMaxNumber(9, 9, 1))