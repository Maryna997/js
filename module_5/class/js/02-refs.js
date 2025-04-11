/*
 * Об'єкти
 *
 * - Тип даних за посиланням
 */

const user = {
  firstName: 'Oleksii',
  lastName: 'Repin',
};

const userCopy = user;

console.log('user:', user);
console.log('userCopy:', userCopy);

userCopy.age = 30;

console.log('user:', user);
console.log('userCopy:', userCopy);