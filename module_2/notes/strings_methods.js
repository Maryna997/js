objectName.property
objectName.method()


const message = "JavaScript is awesome";
console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"


//                     Метод slice()

str.slice(startIndex, endIndex)
// str — вихідний рядок, з якого робитиметься копія.
// startIndex — індекс, з якого починається копіювання елементів рядка.
// endIndex — індекс, до якого (не включаючи) йде копіювання елементів рядка.


const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'



// Параметр endIndex є необов'язковим.
// Якщо endIndex не вказаний, витягуються всі елементи до кінця рядка.

const fullName = "Jacob Mercer";
console.log(fullName.slice(1)); // 'acob Mercer'
console.log(fullName.slice(3)); // 'ob Mercer'


// Якщо викликати метод slice() без аргументів, він створює точну копію рядка і повертає її.
const fullName = "Jacob Mercer";
console.log(fullName.slice()); // 'Jacob Mercer'



const fullName = "Jacob Mercer";
const firstName = fullName.slice(0, 5);
const lastName = fullName.slice(6);

console.log(fullName); // "Jacob Mercer"
console.log(firstName); // "Jacob"
console.log(lastName); // "Mercer"


//           Методи toLowerCase() і toUpperCase()

const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message); // "Welcome to Bahamas!"


const message = "Welcome to Bahamas!";
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"



const brandName = 'samsung';
const userInput = 'saMsUng';
const lowercaseInput = userInput.toLowerCase();

console.log(brandName); // 'samsung'
console.log(userInput); // 'saMsUng'
console.log(userInput === brandName); // false
console.log(lowercaseInput); // 'samsung'
console.log(lowercaseInput === brandName); // true




//                      Метод includes()

str.includes(substring)

const username = 'Jacob Mercer';

console.log(username.includes('Jacob')); // true
console.log(username.includes('John')); // false
console.log(username.includes('Mercer')); // true
console.log(username.includes('Doe')); // false


const username = 'Jacob Mercer';

console.log(username.includes('Jacob')); // true
console.log(username.includes('jacob')); // false
console.log(username.includes('Mercer')); // true
console.log(username.includes('mercer')); // false



const message = "Please buy our stuff!";
const hasSpam = message.includes("buy");

if (hasSpam) {
  console.log("Warning: This message contains forbidden words.");
} else {
  console.log("You can safely open this message.");
}



//             Методи startsWith() і endsWith()
str.startsWith(substr)

const str = "Hello, world!";

console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false (метод чутливий до регістру)


str.endsWith(substr)

const str = "Hello, world!";

console.log(str.endsWith("world!")); // true
console.log(str.endsWith("World!")); // false (метод чутливий до регістру)


//                 Метод indexOf()

str.indexOf(substr)

const message = "Welcome to Bahamas!";
const index = message.indexOf("to");
console.log(index); // 8


const message = "Welcome to Bahamas!";
const index = message.indexOf("hello");
console.log(index); // -1




//                   Метод trim()
// Метод trim() використовується для видалення початкових і кінцевих пробілів із рядка.

str.trim()

const input = " JavaScript is awesome!    ";
const trimmedInput = input.trim();
console.log(trimmedInput); // "JavaScript is awesome!"
console.log(input); // " JavaScript is awesome!    "


const input = " JavaScript is awesome!    ";
const trimmedInput = input.trim();
console.log(trimmedInput); // "JavaScript is awesome!"
console.log(input); // " JavaScript is awesome!    "
// Метод trim() не змінює вихідний рядок, а повертає новий рядок без початкових і кінцевих пробілів.