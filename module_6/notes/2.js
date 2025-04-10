const obj = {
	method(value) {
		console.log(`I'm a method with ${value}!`);
	}
};

obj.method(5); // "I'm a method with 5!"
obj.method(10); // "I'm a method with 10!"
