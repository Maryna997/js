//                     Цикл while

while (condition) {
  statement // код, тіло циклу
}



let count = 0;

while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}



let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}




//                     Цикл do…while

// Під час використання циклу do...while код у тілі циклу виконується принаймні один раз, навіть якщо умова не виконується з самого початку.

do {
   statement // код, який буде виконуватися
} while (condition);

// Блок коду всередині do виконується в перший раз незалежно від виконання умови.
// Потім, після кожної ітерації, перевіряється умова. Якщо умова оцінюється як true, цикл продовжує виконуватися; якщо — як false, цикл завершується.

let count = 0;

do {
	console.log(`Count: ${count}`);
	count += 1;
} while (count < 5);

// У прикладі код усередині циклу do виконається один раз, навіть якщо count більше або дорівнює 5.
// Після цього умову буде перевірено, і якщо count менше 5, цикл продовжить виконуватися.



//                       Цикл for

// На відміну від циклів while і do…while, цикл for має змінну-лічильник. Змінна-лічильник оголошується за допомогою ключового слова let (оголошення через const видасть помилку). На кожній ітерації після виконання коду з тіла циклу вона змінює своє значення від заданого початкового до кінцевого з певним кроком.

for (initialization; condition; afterthought) {
  statement // Тіло циклу
}


// Ініціалізація — виконується один раз перед початком циклу. Тут оголошується змінна-лічильник і вказується її початкове значення.
// Умова — це вираз, який оцінюється перед кожною ітерацією (повторенням) циклу. Якщо умова перетворюється на**true**, то виконується тіло циклу. Якщо умова перетворюється на false, то цикл завершується.
// Пост-вираз — це вираз, який виконується в кінці кожної ітерації циклу, перед перевіркою умови. Використовується для оновлення значення змінної-лічильника.
// Тіло циклу — це блок коду, який буде виконуватися на кожній ітерації циклу, якщо умова перетворюється на true.



for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}


for (let i = 20; i >= 0; i -= 5) {
  console.log(i);
}


//                  Інкремент і декремент

// Інкремент (++) і декремент (--) — це операції, які відповідно збільшують або зменшують значення числової змінної на одиницю і одразу ж зберігають оновлене значення у цій змінній. Існують два види інкременту та декременту: префіксний і постфіксний.

//                        Інкремент

let x = 5;
const y = ++x;
console.log(x); // 6
console.log(y); // 6

let x = 5;
const y = x++;
console.log(x); // 6
console.log(y); // 5

//                         Декремент

let x = 5;
const y = --x;
console.log(x); // 4
console.log(y); // 4

let x = 5;
const y = x--;
console.log(x); // 4
console.log(y); // 5


for (let i = 0; i <= 5; i++) {
  console.log(i);
}



//                   Оператор break

for (let i = 0; i < 10; i+=1) {
  console.log(i);

  if (i === 5) {
    console.log('Met the number 5, interrupt the execution of the cycle');
    break;
  }
}

console.log('Log after cycle');


// Оператор break не припиняє виконання функції, а тільки перериває цикл.

function findNumberFromFive(max, target) {
	console.log("Log in the body of the function before the cycle");

  for (let i = 5; i <= max; i += 1) {
    console.log("Current counter value i:", i);

    if (i === target) {
      console.log(`Found the number ${target}, interrupt the cycle`);
			break;
    }
  }

  console.log("Log in body function after cycle");
}

findNumberFromFive(10, 6);
console.log("Log after exiting function");


// Оператор return перериває виконання одразу циклу і функції і дозволяє повернути результат у зовнішній код.

function findNumberFromFive(max, target) {
	console.log("Log in the body of the function before the cycle");

	for (let i = 5; i <= max; i += 1) {
	    console.log("Current counter value i:", i);
	
	    if (i === target) {
	      console.log(`Found the number ${target}, we make a return, interrupting the loop and function`);
				return i;
	    }
	  }

  // Цей console.log не виконується
  console.log("Log in body function after cycle");
}

const result = findNumberFromFive(10, 6);
console.log("Log after exiting function");
console.log(`Result of function execution ${result}`);
