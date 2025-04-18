/*
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

//~ Два і більше параметрів

// const greetUser = (firstName, lastName) => {
//   console.log(`Welcome ${firstName} ${lastName}`);
// };

// greetUser('Oleksii', 'Repin');

//~ Один параметр

// const greetUserByFirstName = firstName => {
//   console.log(`Welcome ${firstName}`);
// };

// greetUserByFirstName('Oleksii');

//~ Без параметрів

// const greetAnonymusUser = () => {
//   console.log(`Welcome anonumys`);
// };

// greetAnonymusUser();

//~ arguments

// const sum = (...args) => {
//   console.log('args:', args);

//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(10, 20, 30));

//~ Неявне повернення

// const sum = (numA, numB) => numA + numB;

// console.log(sum(10, 20));

//~ Неявне повернення обʼєкта

// const addId = user => ({ id: Date.now(), ...user });

// console.log(addId({ firstName: 'Oleksii', lastName: 'Repin' }));

/*
TODO: Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// const createProduct = (partialProduct, callback) => {
//   const product = {
//     id: Date.now(),
//     ...partialProduct,
//   };

//   callback(product);
// };

// const logProduct = product => console.log(product);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
TODO: Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

//~ Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value * 2;
//   })
// );

//~ Скорочена версія
// console.log(each([64, 49, 36, 25, 16], value => value * 2));

//~ Повна версія
// console.log([64, 49, 36, 25, 16]);
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value - 10;
//   })
// );

//~ Скорочена версія
// console.log([64, 49, 36, 25, 16]);
// console.log(each([64, 49, 36, 25, 16], value => value - 10));

//~ Повна версія
// console.log([64, 49, 36, 25, 16]);
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return Math.sqrt(value);
//   })
// );

//~ Скорочена версія
// console.log([64, 49, 36, 25, 16]);
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));