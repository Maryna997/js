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


