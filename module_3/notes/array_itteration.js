const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}



//                  Метод includes()
array.includes(element)

const planets = ["Earth", "Mars", "Venus"];

console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false



const fruits = ["apple", "banana", "orange"];

if (fruits.includes("banana")) {
  console.log("The array has an element banana");
} else {
  console.log("Array does not contain banana element");
}



//                    Цикл for...of
// Це гарна заміна циклу for, якщо не потрібен доступ до лічильника.
// Цикл for...of завжди перебирає масив від першого і до останнього елемента, задати умову припинення циклу не можна. Якщо необхідно закінчити виконання циклу передчасно, використовується вже знайомий оператор break.
for (const element of array) {
  // тіло циклу
}



const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}

