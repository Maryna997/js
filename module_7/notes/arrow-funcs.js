// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

// Те саме стрілочною функцією
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

// Якщо параметр один, його можна оголошувати без круглих дужок.
const add = a => {
  return a + 5;
};

// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.
const greet = () => {
  console.log("Hello!");
};



const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

const add = (a, b, c) => a + b + c;




// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// Після
const arrowAdd = (a, b, c) => a + b + c;



const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]



const numbers = [5, 10, 15, 20, 25];

// Звичайна анонімна функція
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// Стрілочна анонімна функція
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});



const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Index ${index}, value ${number}`);
};

numbers.forEach(logMessage);
