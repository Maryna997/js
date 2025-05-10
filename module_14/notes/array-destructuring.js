const color = [200, 255, 100];
const [ red, green, blue ] = color;

console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"




const color = [200, 100, 255];
const [ red, green, blue, alfa = 0.3 ] = color;

console.log(rgba(${red}, ${green}, ${blue}, ${alfa})); // “rgba(200, 255, 100, 0.3)"




// *              Часткова деструктуризація
const color = [200, 255, 100];

const [ red, ...otherColors ] = color;

console.log(red); // 200
console.log(otherColors); // [255, 100]


const user = {
	name: "Jacob",
	age: 32,
	email: "j.cob@mail.com",
	isOnline: true
};

const { name, isOnline, ...otherProps } = user;

console.log(name); // "Jacob"
console.log(isOnline); // true
console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}



// *                   Пропуск значень
const rgb = [200, 100, 255];
const [, , blue] = rgb;
console.log(`Blue: ${blue}`); // "Blue: 255"



// *               Деструктуризація параметрів
// Без деструктуризації:
function printFruits(fruits) {
  console.log(fruits[0], fruits[1], fruits[2]);
}

printFruits(["apple", "banana", "orange"]); // "apple banana orange"


// Із деструктуризацією в місці оголошення параметрів:
function printFruits([firstFruit, secondFruit, thirdFruit]) {
  console.log(firstFruit, secondFruit, thirdFruit);
}

printFruits(["apple", "banana", "orange"]); // "apple banana orange"
  .
