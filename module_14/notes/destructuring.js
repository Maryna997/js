const user = { 
	name: "Jacob", 
	age: 32 
};

console.log(user.name); // Jacob
console.log(user.age); // 32



const user = { 
	name: "Jacob", 
	age: 32 
};

const { name, age } = user;
console.log(name); // Jacob
console.log(age); // 32




const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const accessType = book.isPublic ? "pulbic" : "private";
const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;



const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, author, isPublic, rating } = book;

// Використовуємо
const accessType = isPublic ? "pulbic" : "private";
const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;




const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, bookTitle, coverImage, bookRating } = book;
console.log(title); // "The Last Kingdom"
console.log(bookTitle); // undefined
console.log(coverImage); // undefined
console.log(bookRating); // undefined




const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
const {
  title,
  author,
  coverImage = "<https://via.placeholder.com/640/480>"
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "<https://via.placeholder.com/640/480>"



//*               Перейменування змінної
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
console.log(title); // "The Last Kingdom"
console.log(bookAuthor); // "Bernard Cornwell"
console.log(isPublic); // true
console.log(bookRating); // 8.38



//*                 Значення за замовчуванням
const book = {
  title: "The Last Kingdom",
  coverImage:
    "<https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg>",
};

const {
  title,
  coverImage: bookCoverImage = "<https://via.placeholder.com/640/480>",
} = book;

console.log(title); // "The Last Kingdom"
console.log(bookCoverImage); // "<https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg>"




// *            Деструктуризація в циклах
for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}



for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}




// *             Деструктуризація параметрів
// Без деструктуризації об'єкта:
function printUserInfo(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
}

printUserInfo({ 
	name: "Alice", 
	age: 25, 
	hobby: "dancing" 
}); // Name: Alice, Age: 25, Hobby: dancing


// З деструктуризацією об'єкта в тілі функції:
function printUserInfo(user) {
const { name, age, hobby } = user
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo({ 
	name: "Alice", 
	age: 25, 
	hobby: "dancing" 
}); // Name: Alice, Age: 25, Hobby: dancing



// Із деструктуризацією об'єкта в місці оголошення параметрів:
function printUserInfo({ name, age, hobby }) {
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo({ 
	name: "Alice", 
	age: 25, 
	hobby: "dancing" 
}); // Name: Alice, Age: 25, Hobby: dancing





// *               Патерн «Об'єкт параметрів»
function doStuffWithBook(book) {
  // Робимо щось з властивостями об'єкта
  console.log(book.title);
  console.log(book.pages);
  // І так далі
}

// ✅ Все зрозуміло
doStuffWithBook({
  title: "The Last Kingdom",
  pages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});


function doStuffWithBook(book) {
  const { title, pages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(pages);
}


function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
  console.log(title);
  console.log(pages);
}



// *               Глибока деструктуризація
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, stats } = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }



const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views, likes },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(views); // 4827
console.log(likes); // 1308



const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308


