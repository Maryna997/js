function multiply(a, b) {
	console.log(a, b)
}

multiply(1, 2); // 1 2
multiply(1, 2, 3); // 1 2
multiply(1, 2, 3, 4); // 1 2




function multiply() {
	console.log(arguments)
}

multiply(1, 2); // псевдомасив [1, 2]
multiply(1, 2, 3); // псевдомасив [1, 2, 3]
multiply(1, 2, 3, 4); // псевдомасив [1, 2, 3, 4]



function multiply(...args) {
  console.log(args);
}

multiply(1, 2); // [1, 2]
multiply(1, 2, 3); // [1, 2, 3]
multiply(1, 2, 3, 4); // [1, 2, 3, 4]



// Можна покласти перші кілька параметрів у змінні, а решту — зібрати в масив
function multiply(first, second, ...args) {
  console.log(first, second, args);
}

multiply(1, 2); // 1 2
multiply(1, 2, 3); // 1 2 [3] 
multiply(1, 2, 3, 4); // 1 2 [3, 4]



//  оператор розпилення ...spread
const temps = [14, -4, 25, 8, 11];

console.log(...temps); // 14 -4 25 8 11  набір окремих чисел 

// ✅ Передамо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25




const temps = [14, -4, 25, 8, 11];

// Це точна, але незалежна копія масиву temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]




const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]




const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }




const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }




const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
