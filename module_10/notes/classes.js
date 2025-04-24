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



// *                 Геттери і сеттери
class User {
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({ 
	name: "Mango", 
	email: "mango@mail.com" 
});

console.log(mango.email); // mango@mail.com

mango.email = "mango@supermail.com";

console.log(mango.email); // mango@supermail.com


set email(newEmail) {
  if(newEmail === "") {
    console.log("Помилка! Пошта не може бути порожнім рядком!");
    return;
  }

  this.#email = newEmail;
}



// *               Статичні властивості
// Властивості, що доступні тільки класові, але не його екземплярам — це статичні властивості. Вони корисні для зберігання інформації, що стосується класу.


class MyClass {
	static myProp = "value";
}

console.log(MyClass.myProp); // "value"

const inst = new MyClass();
console.log(inst.myProp); // undefined


class User {
  static roles = {
    admin: "admin",
    editor: "editor",
		basic: "basic"
  };

  #email;
  #role;

  constructor(params) { 
    this.#email = params.email; 
    this.#role = params.role || User.roles.basic; 
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@mail.com",
  role: User.roles.admin,
});

console.log(mango.role); // "admin"
mango.role = User.roles.editor;
console.log(mango.role); // "editor"



// *                Статичні методи
// Під час їх виклику ключове слово this посилається на сам клас. Це означає, що статичний метод може отримати доступ до статичних властивостей класу, але не до властивостей екземпляра.
class MyClass {
  static myMethod() {
    console.log("A static method");
  }
}

MyClass.myMethod(); // "A static method"



class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor(params) {
    this.#email = params.email;
    User.#takenEmails.push(params.email);
  }
}

const mango = new User({ email: "mango@mail.com" });

console.log(User.isEmailTaken("poly@mail.com")); // false
console.log(User.isEmailTaken("mango@mail.com")); // true



// *              Наслідування класів
class Parent {}

class Child extends Parent {
  // ...
}


class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
	// Тіло класу ContentEditor
}

const editor = new ContentEditor("mango@mail.com");
console.log(editor); // { #email: "mango@mail.com" }
console.log(editor.email); // "mango@mail.com"



// *          Конструктор дочірнього класу
class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor(params) {
    // Виклик конструктора батьківського класу User
    super(params.email); 

    this.posts = params.posts;
  }
}

const editor = new ContentEditor({ 
	email: "mango@mail.com", 
	posts: [] 
});
console.log(editor); // { #email: "mango@mail.com", posts: [] }
console.log(editor.email); // "mango@mail.com"



// *             Методи дочірнього класу
// Уявімо, що вище є оголошення класу User

class ContentEditor extends User {
  constructor(params) {
    super(params.email);
    this.posts = params.posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ 
	email: "mango@mail.com", 
	posts: [] 
});

console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }

editor.addPost("post-1");
editor.addPost("post-2");
console.log(editor.posts); // ['post-1', 'post-2']
