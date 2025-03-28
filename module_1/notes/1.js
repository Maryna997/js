'use strict';
// Код у суворому режимі


const age = 20;
console.log(age); // 20

const username = "Mango";
console.log(username); // "Mango"


// Для оголошення змінної, якій згодом можна задати нове значення, використовується ключове слово let. 
// Якщо змінна оголошена як const, перевизначити її значення неможливо.  
let username = "Mango";
console.log(username); // "Mango"

username = "Poly";
console.log(username); // "Poly"


let username;
console.log(username); // undefined

username = "Mango";
console.log(username); // "Mango"



const age = 20;
const salary = 3710.84;
// Ціла та дробова частини числа розділяються крапкою.



const quantity = 17;
console.log(typeof quantity); // виведе "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // виведе "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // виведе "boolean"

let username;
console.log(typeof username); // виведе "undefined"

let status = null;
console.log(typeof status); // виведе "object"


let age = 25;
age = age + 1;
console.log(age); // 26

let age = 25;
age += 1;
console.log(age); // 26



const message = "Mango " + "is" + " happy";
console.log(message); // "Mango is happy"
// !Рядки "Mango " і " happy" містять пробіли, щоб текст повідомлення був читабельним!

const age = 24;
const message = "Poly is " + age + " years old!";



console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"

console.log(String(5)); // "5"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

console.log("5" + 3); // "53"
console.log("5" + true); // "5true"
console.log("5" + false); // "5false"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"




const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"

const guestName = "Mango";
const roomNumber = 207;
const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!"




const productName = "Repair droid";

// Якщо у змінній зберігається рядок
console.log(productName.length); // 12

// Якщо рядковий літерал
console.log("Repair droid".length); // 12



const product = "Repair droid";
console.log(product[0]); // 'R'
console.log(product[5]); // 'r'
console.log(product[11]); // 'd'



const product = "Repair droid";
const lastElementIndex = product.length - 1;
console.log(product[lastElementIndex]); // 'd'

const product = "Repair droid";
console.log(product[product.length - 1]); // 'd'



let product = "Droid";
console.log(product); // "Droid"

product = "DrOid";
console.log(product); // "DrOid"




const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false



console.log(5 == 5); // true
console.log(5 == 3); // false
console.log(5 != 3); // true
console.log(5 != 5); // false

// Погано, бо виконується неявне приведення рядків і булевого значення до числа
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false


// Добре, приведення типів не виконується
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true



console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0



console.log(Number(undefined)); // NaN
console.log(Number("Jacob")); // NaN
console.log(Number("25px")); // NaN



console.log("5" * 2); // 10
console.log("10" - 5); // 5
console.log(5 + true); // 6
console.log(5 - true); // 4



console.log("10" > 5); // true
console.log(10 > "5"); // true
console.log(5 > true); // true
console.log(5 < true); // false
console.log("5" < true); // false




console.log(Number.parseInt("5")); // 5 
console.log(Number.parseInt("5.5")); // 5 
console.log(Number.parseInt("5cm")); // 5 
console.log(Number.parseInt("12qwe74")); // 12 
console.log(Number.parseInt("12.46qwe79")); // 12 
console.log(Number.parseInt("cm5")); // NaN 
console.log(Number.parseInt("")); // NaN 
console.log(Number.parseInt("qweqwe")); // NaN


console.log(Number.parseFloat("5")); // 5
console.log(Number.parseFloat("5.5")); // 5.5
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("5cm")); // 5
console.log(Number.parseFloat("5.5cm")); // 5.5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("cm5")); // NaN
console.log(Number.parseFloat("")); // NaN
console.log(Number.parseFloat("qweqwe")); // NaN




// Math.floor(num): повертає найближче ціле число, яке є меншим або дорівнює вказаному числу num. Наприклад:
console.log(Math.floor(1.3)); // 1
console.log(Math.floor(1.7)); // 1

// Math.ceil(num): повертає найближче ціле число, яке є більшим, або дорівнює зазначеному числу num. Наприклад:
console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(1.7)); // 2

// Math.round(num): повертає значення числа після округлення до найближчого цілого. Округлення відбувається за математичними правилами, якщо десяткова частина числа менша 0.5, то округлення буде в меншу сторону, якщо 0.5 і більше — то в більшу.
console.log(Math.round(1.3)); // 1
console.log(Math.round(1.7)); // 2

console.log(Math.max(20, 10, 50, 40)); // 50

console.log(Math.min(20, 10, 50, 40)); // 10

console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294




console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.1 * 10 + 0.2 * 10); // 3
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((5).toFixed(2));  //  ”5.00”
console.log((8.762195).toFixed(4));  //  “8.7622”



// Оголошення функції multiply
function doStuff() {
  // Тіло функції
  console.log('Log inside multiply function');
}

// Виклики функції multiply
doStuff(); // 'Log inside multiply function'
doStuff(); // 'Log inside multiply function'
doStuff(); // 'Log inside multiply function'




// Оголошення параметрів x, y, z
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

// Передача аргументів
multiply(2, 3, 5); // "Result: 30"
multiply(4, 8, 12); // "Result: 384"
multiply(17, 6, 25); // "Result: 2550"



function multiply(x, y, z) {
  return x * y * z;
}

const result = multiply(2, 3, 5);
console.log(result); // 30

// Якщо в тілі функції відсутній оператор return або він не вказує на конкретне значення, функція поверне спеціальне значення undefined.
function multiply(x, y, z) {
	const product = x * y * z;
}

const result = multiply(2, 3, 5);
console.log(result); // undefined




function multiply(x, y, z) {
  console.log('The code before return is executed as usual');

  return x * y * z;

  console.log('This code is never executed because it is after return');
}

console.log(multiply(2, 3, 5)); // 30




function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

console.log("Log before multiply execution");
multiply(2, 3, 5); // "Result: 30"
console.log("Log after multiply execution");




// Глобальна змінна
const value = "I'm a global variable";

function foo() {
// Можна звернутися до глобальної змінної
	console.log(value); // "I'm a global variable"
}

foo();
// Можна звернутися до глобальної змінної
console.log(value); 
// "I'm a global variable"




function foo() {
	// Локальна змінна
	const value = "I'm a local variable";
	// Можна звернутися до локальної змінної
	console.log(value); // "I'm a local variable"
}

foo();
  console.log(value); // ReferenceError: value is not defined
                      // Помилка: локальну змінну не видно за межами  функції

