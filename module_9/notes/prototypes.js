Object.create(obj)

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: "Mango", [[Prototype]]: animal }
console.log(dog.name); // "Mango"
console.log(dog.legs); // 4



objA.isPrototypeOf(objB)


const customer = {
	username: "Jacob"
};

const animal = { 
	legs: 4 
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: "Mango", [[Prototype]]: animal }

console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.isPrototypeOf(animal)); // false
console.log(customer.isPrototypeOf(dog)); // false


obj.hasOwnProperty(key)
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false



const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = "Mango";

for (const key in dog) {
  console.log(key); // "name" "legs"
}

for (const key in dog) {
	if(dog.hasOwnProperty(key)) {
		console.log(key); // "name"
	}
}



const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = "Mango";

console.log(Object.keys(dog)); // ["name"]
console.log(Object.values(dog)); // ["Mango"]

for(const key of Object.keys(dog)) {
	console.log(key); // "name"
}



const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

console.log(objA.hasOwnProperty("a")); // true
console.log(objA.a); // "objA prop"

console.log(objA.hasOwnProperty("b")); // false
console.log(objA.b); // "objB prop"

console.log(objA.hasOwnProperty("c")); // false
console.log(objA.c); // "objC prop"

console.log(objA.hasOwnProperty("x")); // false
console.log(objA.x); // undefined



const objB = {
	b: "objB prop"
};

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA);
