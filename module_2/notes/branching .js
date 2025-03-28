let price = 0;
const subscription = "pro";

if (subscription === "pro") {
  price = 100;
}

console.log(price); // 100


let price = 0;
const subscription = "free";

if (subscription === "pro") {
  price = 100;
}

console.log(price); // 0



if (condition) {
  // код, який виконується, якщо умова істинна
} else {
	// код, який виконується, якщо умова хибна
}


const grade = 85;

if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}




if (condition_1) {
  // код, який виконується, якщо умова (condition_1) істинна
} else if (condition_2) {
  // код, який виконується, якщо умова (condition_2) істинна
} else if (condition_3) {
  // код, який виконується, якщо умова (condition_3) істинна
} else {
	// код, який виконується, якщо всі умови хибні
}


const grade = 85;

if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}




// --------------------------------------------------Тернарний оператор----------------------------------------------------------
// <condition> ? <expression if condition is true> : <expression if condition is false>
 
let type;
const age = 20;

if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}

console.log(type); // 'adult'
    
const age = 20;
const type = age >= 18 ? 'adult' : 'child';
console.log(type); // 'adult'


    
const a = 5;
const b = 10;
let biggerNumber;

if (a > b) {
  biggerNumber = a;
} else {
  biggerNumber = b;
}

console.log(biggerNumber); // 10


const a = 5;
const b = 10;
const biggerNumber = a > b ? a : b;

console.log(biggerNumber); // 10




//                                                          Оператор switch
switch (expression) {
  case value1:
    // код, що виконується, якщо вираз (expression) дорівнює value1
    break;
  case value2:
    // код, що виконується, якщо вираз (expression) дорівнює value2
    break;
  // ...
  default:
    // код, що виконується, якщо вираз (expression) не відповідає жодному значенню
}



const fruit = 'apple';

switch (fruit) {
  case 'apple':
    console.log('Apple selected');
    break;
  case 'banana':
    console.log('Banana selected');
    break;
  case 'orange':
    console.log('Orange selected');
    break;
  default:
    console.log('The fruit is unknown');
}



const day = 3;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('This is a working day');
    break;
  case 6:
  case 7:
    console.log('It is a day off');
    break;
  default:
    console.log('Invalid');
}



// Глобальна змінна
const value = "I'm a global variable";

if (true) {
	// Можна звернутися до глобальної змінної
  console.log(value); // "I'm a global variable"
}

// Можна звернутися до глобальної змінної
console.log(value); // "I'm a global variable"


if (true) {
  // Локальна змінна
	const value = "I'm a local variable";
  console.log(value); // "I'm a local variable"
}

// Помилка: локальну змінну не видно за межами блоку
console.log(value); // ReferenceError: value is not defined




const globalVar = "Global";

console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// Немає доступу до aVar, bVar і cVar

if(true) {
	const aVar = "A";
	console.log(globalVar); // Доступ до globalVariable з блоку A
  console.log(aVar); // Доступ до aVar з блоку A
	// Немає доступу до bVar і cVar

	if(true) {
		const bVar = "B";
		console.log(globalVar); // Доступ до globalVariable з блоку B
	  console.log(aVar); // Доступ до aVar з блоку B
	  console.log(bVar); // Доступ до bVar з блоку B
		// Немає доступу до cVar
	}
}

console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar

if(true) {
	const cVar = "C";
  console.log(globalVariable); // Доступ до globalVar з блоку C
  console.log(cVar); // Доступ до cVar з блоку C
	// Немає доступу до aVar і bVar
}

console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar
