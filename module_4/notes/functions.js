//                Псевдомасив arguments

function sum(a, b) {
  console.log(arguments);
  return a + b;
}

sum(2, 5);



function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120



function foo() {
  // У змінній args буде повноцінний масив з усіх аргументів
  const args = Array.from(arguments);
	return args.join("-");
}

foo(1, 2, 3); // Поверне "1-2-3"




//               Параметри за замовчуванням

function greet(username = "Guest") {
  console.log(`Hello, ${username}!`);
}

greet("Jacob"); // "Hello, Jacob!"
greet();        // "Hello, Guest!"



function count(from, to, step = 1) {
  console.log(`from: ${from}, to: ${to}, step: ${step}`);

  for (let i = from; i <= to; i += step) {
  // ... 
  }
}

count(1, 15, 4); // "from: 1, to: 15, step: 4"
count(1, 15); // "from: 1, to: 15, step: 1"



//                function expression

function multiply(x, y, z) {
  console.log(x * y * z);
}

const multiply = function (x, y, z) {
  console.log(x * y * z);
};


// Різниця в тому, що функціональний вираз (function expression) не можна викликати до місця його створення, тільки після, тому що це буквально оголошення const змінної.
// ❌ Помилка! Не працює виклик до оголошення
multiply(1, 2, 3);

const multiply = function (x, y, z) {
  console.log(x * y * z);
};

// ✅ Працює виклик після оголошення
multiply(4, 5, 6);


// A оголошення функції (function declaration) можна викликати до місця її створення в коді.
// ✅ Працює виклик перед оголошенням
multiply(1, 2, 3);

function multiply(x, y, z) {
  console.log(x * y * z);
}

// ✅ Працює виклик після оголошення
multiply(4, 5, 6);




//               Область видимості (scope)

const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  console.log(globalValue); // 10
}

for (let i = 0; i < 5; i+=1) {
  console.log(globalValue); // 10

  if (i === 2) {
    console.log(globalValue); // 10
  }
}


// Змінні, оголошені всередині інструкційif, for, функцій та інших блоків коду, що огорнуті фігурними дужками {}, перебувають у блоковій області видимості та доступні тільки всередині цього блоку коду або вкладених у нього.
function foo() {
  const a = 20;
  console.log(a); // 20

  for (let i = 0; i < 5; i+=1) {
    console.log(a); // 20

    if (i === 2) {
      console.log(a); // 20
    }
  }
}

// ❌ Помилка! Змінна a не доступна в цій області видимості
console.log(a);

for (let i = 0; i < 3; i+=1) {
  // ❌ Помилка! Змінна a не доступна в цій області видимості
  console.log(a);
}




for (let i = 0; i < 5; i+=1) {
  const a = 20;
  console.log(a); // 20

  if (i === 2) {
    const b = 30;
    console.log(a); // 20
    console.log(b); // 30
  }

  if (i === 3) {
    console.log(a); // 20

    // ❌ Помилка! Змінна b не доступна в цій області видимості
    console.log(b);
  }
}




{
const name="Mango"
console.log(name) // "Mango"
}
console.log(name) // значення глобальної змінної name. Помилки в консолі не буде




//               Стек викликів (call stack)

function fnA() {
  console.log("Log inside fnA function before calling fnB");
  fnB();
  console.log("Log inside fnA function after fnB call");
}

function fnB() {
  console.log("Log inside fnB function");
}

console.log("Log before calling fnA");
fnA();
console.log("Log after calling fnA");

// "Log before calling fnA"
// "Log inside fnA function before calling fnB"
// "Log inside fnB function"
// "Log inside fnA function after fnB call"
// "Log after calling fnA"



function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();
