class User {
  // Тіло класу
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}



class User {
  constructor() {
		console.log("constructor call")
  }
}

const mango = new User(); // "constructor call"
console.log(mango); // {}



class User {
  constructor(name, email) {
		console.log(name, email);
  }
}

const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
console.log(mango); // {}



class User {
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }



class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});

console.log(mango); 
// { name: "Mango", email: "mango@mail.com" }



class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const mango = new User({ 
	name: "Mango", 
	email: "mango@mail.com" 
});

console.log(mango.getEmail()); // "mango@mail.com"

mango.changeEmail("new@mail.com");

console.log(mango.getEmail()); // "new@mail.com"



class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}




class User {
  // Необов'язкове оголошення публічних властивостей
  name;
  // Обов'язкове оголошення приватних властивостей
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango.name); // "Mango"
console.log(mango.#email); // Виникне помилка, це приватна властивість



class User {
  name;
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Публічний метод для отримання електронної пошти
  getEmail() {
    return this.#email;
  }

  // Публічний метод для зміни електронної пошти
  changeEmail(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log('Invalid email format');
    }
  }

  // Приватний метод для валідації електронної пошти
  #validateEmail(email) {
    return email.includes('@');
  }
}

const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});

// Спробуємо змінити електронну пошту
mango.changeEmail('newmail.com'); // "Invalid email format"
mango.changeEmail('new@mail.com');
console.log(mango.getEmail()); // "new@mail.com"

// Прямий виклик приватного методу ззовні призведе до помилки
mango.#validateEmail('test'); // Помилка

