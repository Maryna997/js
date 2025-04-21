const user = {
  username: "Victor",
  showName() {
		// ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
    console.log(this.username);
  },
};

user.showName();



function foo() {
  console.log(this);
}

foo(); // window



"use strict";

function foo() {
  console.log(this);
}

foo(); // undefined



const user = {
  username: "Poly",
  showThis() {
    console.log(this);
  }
};

user.showThis(); // {username: "Poly", showThis: ƒ}



"use strict";

function showThis() {
  console.log("this in showThis: ", this);
}

const user = {
  username: "Poly",
};

user.showContext = showThis;

// Викликаємо в контексті об'єкта
user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// Викликаємо в глобальному контексті
showThis(); // "this in showThis: undefined"


// *                  Метод call()
foo.call(thisArg, arg1, arg2, ...)
// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції


function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: "Mango",
	room: 27
};

const poly = {
  username: "Poly",
	room: 191
};

greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"



// *                  Метод apply()
foo.apply(thisArg, [arg1, arg2, ...])

function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: "Mango",
	room: 27
};

const poly = {
  username: "Poly",
	room: 191
};

greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"



// *           Метод bind() і втрата контексту
const boundFoo = foo.bind(thisArg, arg1, arg2, ...)

"use strict";

const customer = {
  username: "Jacob",
	sayHello() {
		console.log(`Hello, ${this.username}!`);
  }
};

customer.sayHello(); // "Hello, Jacob!"

const greet = customer.sayHello;

greet(); // TypeError: Cannot read properties of undefined (reading 'firstName')
// При виклику greet() контекст втрачено, функція викликається в глобальному контексті, тому значення this буде undefined

const greet = customer.sayHello.bind(customer);

greet(); // "Hello, Jacob!"



function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const user = {
  name: "Alice"
};

const greet = sayHello.bind(user);

greet("Hello");



// *             Метод bind() і колбеки
const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
	const username = callback();
	console.log(`Processing an application from ${username}`);
}

makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"



// *                 Стрілочні функції
const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis(); // this in showThis: window



const showThis = () => {
  console.log("this in showThis: ", this);
};

const user = {
  username: "Mango",
};

user.showContext = showThis;

user.showContext(); // this in showThis: window



"use strict";

const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis(); // this in showThis: window



const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}



// методи call, apply і bind не впливають на значення this у стрілках.
const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis.call({ username: "Mango" }); // this in showThis: window
showThis.apply({ username: "Mango" }); // this in showThis: window

const boundShowThis = showThis.bind({ username: "Mango" }); 
boundShowThis(); // this in showThis: window
