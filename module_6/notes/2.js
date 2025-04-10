const obj = {
	method(value) {
		console.log(`I'm a method with ${value}!`);
	}
};

obj.method(5); // "I'm a method with 5!"
obj.method(10); // "I'm a method with 10!"




// ✅ Логічно й синтаксично згруповані сутності
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Це метод об'єкта
  getBooks() {
    return "Returning all books";
  },
  // Це метод об'єкта
  addBook(bookName) {
		return `Adding book ${bookName}`;
  },
};

// Виклики методів
bookShelf.getBooks(); // поверне "Returning all books"
bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"






const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    console.log(this);
  },
};

bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}



const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    return this.books;
  }
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]




const bookShelf = {
  books: ["The Last Kingdom"],
};

bookShelf.books.push("The Mist");
console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]



const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  }
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]




const bookShelf = {
  books: [
		{ title: "The Last Kingdom", rating: 8 }, 
		{ title: "The Mist", rating: 6 }
	],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  }
};

bookShelf.addBook({ title: "Dream Guardian", rating: 9 });




const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getAvarageRating() {
    let totalRating = 0;

    for (const book of this.books) {
      totalRating += book.rating;
    }

    return totalRating / this.books.length;
  },
};

bookShelf.getAvarageRating(); // 7





const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
	changeRating(bookName, newRating) {
		for(const book of this.books) {
			if(book.title === bookName) {
				book.rating = newRating;
			}
		}
	}
};

changeRating("The Mist", 9);
changeRating("The Last Kingdom", 4);
