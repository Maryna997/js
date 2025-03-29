console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true


console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true



console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true



// Запам’ятай 6 випадків, які приводяться до false:
// 1. 0
// 2. ""
// 3. Nan
// 4. null
// 5. underfined
// 6. false


//                   expression1 && expression2
// Оператор “І” зліва направо перевіряє почергово обидва операнди на істинність та повертає або значення останнього істинного (тільки правого) операнда, або першого хибного (лівого чи правого), на якому він запнувся.



// У наступних прикладах обидва операнди перетворюються на true. Обчислення відбуваються зліва направо, тому результатом буде значення правого операнда.
console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"

console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"

console.log(3 && true); // true
console.log(true && 3); // 3



// А ось у цьому прикладі один із операндів буде приведений до false, отже, результатом буде хибний операнд.
console.log("hello" && 0); // 0
console.log(0 && "hello"); // 0

console.log(3 && false); // false
console.log(false && 3); // false

console.log(0 && ""); // 0
console.log("" && 0); // ""



const a = 20;
console.log(a > 10 && a < 30); // true && true -> true

const b = 50;
console.log(b > 10 && b < 30); // true && false -> false
console.log(b > 80 && b < 120); // false && true -> false



const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

if(screenWidth <= sm) {
	console.log("Mobile screen");
} else if(screenWidth > sm && screenWidth <= md) {
	console.log("Tablet screen");
} else if(screenWidth > md && screenWidth <= lg) {
	console.log("Desktop screen");
} else {
	console.log("Godzilla screen");
}




//                  expression1 || expression2
// Якщо хоча б один із операндів можна перетворити на true, результатом логічного «АБО» буде цей операнд.

console.log(true || false); // true
console.log(false || true); // true

console.log(5 || false); // 5
console.log(false || 5); // 5

console.log("hello" || 0); // "hello"
console.log(0 || "hello"); // "hello"


// Як тільки логічний оператор “АБО” знайшов операнд, який перетворюється на true, він зупиняється та повертає його значення. Якщо до істини було перетворено перший операнд, то другий навіть не буде оцінюватися
console.log(5 || 3); // 5
console.log(3 || 5); // 3

console.log("mango" || "poly"); // "mango"
console.log("poly" || "mango"); // "poly"


// Якщо всі операнди перетворюються на false, результатом буде значення крайнього правого операнда.
console.log(0 || false); // false
console.log(false || 0); // 0

console.log(null || ""); // ""
console.log("" || null); // null



// Оператор "АБО" замикається на вірному операнді і повертає значення операнда, на якому запнувся, або значення крайнього правого операнда. Якщо лівий операнд був перетворений на true, правий операнд не обчислюється.

const a = 5;
console.log(a < 10 || a > 30); // true || false -> true

const b = 50;
console.log(b < 10 || b > 30); // false || true -> true

const c = 20;
console.log(c - 20 || c * 2); // 0 || 40 -> 40



const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

if(screenWidth <= sm || screenWidth > md) {
	console.log("Mobile or Desktop screen");
  // у консолі буде пусто, оскільки жодна з умов не перетворилась на true
}



//                    !expression
// Логічне «НІ» (!) — це унарний оператор — він виконує операцію над одним операндом праворуч.

console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true
console.log(!null); // !null -> !false -> true




const isBlocked = false;
const canChat = !isBlocked; // !false -> true

if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
}


const isBlocked = true;
const canChat = !isBlocked; // !true -> false

if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
}



const isOnline = true;
const isBlocked = false;
const canChat = isOnline && !isBlocked; 
// true && !false -> true && true -> true

if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
}
