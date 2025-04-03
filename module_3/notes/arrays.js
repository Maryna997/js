const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
const numbers = [1, 2, 3, 4, 5]; // масив чисел
const mixed = ['apple', 10, true]; // масив з елементами різних типів


arrayName[index]
// Між іменем змінної, яка зберігає масив, і квадратними дужками не повинно бути пробілу.

const planets = ['Earth', 'Mars', 'Venus'];
console.log(planets[0]); // 'Earth'
console.log(planets[1]); // 'Mars'
console.log(planets[2]); // 'Venus'



const planets = ['Earth', 'Mars', 'Venus'];
const firstElement = planets[0];
console.log(firstElement); // 'Earth'



const planets = ['Earth', 'Mars', 'Venus'];
console.log(planets[3]); // undefined
console.log(planets[999]); // undefined



const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
planets[0] = 'Jupiter';
planets[2] = 'Neptune';
console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']



const planets = ['Earth', 'Mars', 'Venus'];
console.log(planets.length); // 3



const planets = ['Earth', 'Mars', 'Venus'];

if(planets.length >= 3) {
	console.log("3 or more elements");
} else {
	console.log("3 or less elements");
}




const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
console.log(planets[lastElementIndex]); // "Venus"



let a = 5;

let b = a;
console.log(a); // 5
console.log(b); // 5
// Присвоєння за значенням, у пам'яті буде створено ще
// одну ячейку, в яку буде скопійовано значення 5

// Змінимо значення a
a = 10;
console.log(a); // 10
console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія


const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]

a[1] = "Jacob";
console.log(a); // ["Mango", "Jacob"]
console.log(b); // ["Mango", "Jacob"]

b[0] = "Ajax";
console.log(a); // ["Ajax", "Jacob"]
console.log(b); // ["Ajax", "Jacob"]



const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false
console.log([] === []); // false
//  У прикладах масиви містять однакові значення, але оператор === поверне false, тому що він перевіряє рівність посилань на масиви, а не самих елементів усередині масивів.



const array = [1, true, "Poly"];
console.log(String(array));// "1,true,Poly"
console.log(array + "5"); // "1,true,Poly5"


console.log(Number([])); // 0
console.log(Number([1])); // 1
console.log(Number([1, 2, 3])); // NaN



// При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.
const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true

if(emptyArray) {
	console.log("if is in progress")
} else {
	console.log("else is not performed")
}

if(nonEmptyArray) {
	console.log("if is in progress")
} else {
	console.log("else is not performed")
}
