/*
 * Метод find
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */

// const numbers = [5, 15, 10, 20, 25];
// const firstEvenNumber = numbers.find(el => el % 2 === 0);

// console.log('numbers: ', numbers);
// console.log('firstEvenNumber: ', firstEvenNumber);

/*
 ~ -----------------------------
 */
// const allCars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
//   { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//   { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//   { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//   { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
// ];

// console.table(allCars);

/*
TODO: Шукаємо автомобіль за моделлю
 */

// const getCarByModel = (cars, model) => {
//   model = model.toLowerCase();

//   const car = cars.find(el => el.model.toLowerCase() === model);

//   return car ?? `${model} не знайдено`;
// };

// console.log(getCarByModel(allCars, 'F-150'));
// console.log(getCarByModel(allCars, 'CX-9'));
// console.log(getCarByModel(allCars, 'Cayenne'));