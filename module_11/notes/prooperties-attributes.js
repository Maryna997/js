// <a class="link" href="<https://goit.global>">GoIT</a>;
const link = document.querySelector(".link");
console.log(link.href); // "<https://goit.global>"
link.href = "[<https://neo.goit.global>](<https://neo.goit.global/>)";
console.log(link.href); // "[<https://neo.goit.global>](<https://neo.goit.global/>)"



// *                 Властивість textContent
// <p class="text">Username: <span class=”sub-text”>Mango</span></p>
const el = document.querySelector(".text")
const nested = document.querySelector(".sub-text")

console.log(el.textContent); // "Username: Mango"
console.log(nested.textContent); // "Mango"
el.textContent = "Username: Poly";



// *                    Властивість classList
// <a class="link is-active" href="<https://goit.global>">GoIT</a>
const link = document.querySelector(".link");
console.log(link.classList); 
// ["link", "is-active", length: 2, value: "link is-active"]

const hasActiveClass = link.classList.contains("is-active"); // true
const hasActiveClass = link.classList.contains("title"); // false

link.classList.add("special");
console.log(link.classList); 
// ["link", "is-active", "special", length: 3, value: "link is-active special"]

link.classList.remove("is-active");
console.log(link.classList); 
// ["link", "special", length: 2, value: "link special"]


// Метод classList.toggle(className) працює як перемикач:
// якщо клас className відсутній, то додає його в кінець списку класів
// і навпаки, якщо клас className присутній — видаляє його
link.classList.toggle("is-active");
console.log(link.classList); 
// ["link", "special", "is-active", length: 3, value: "link special is-active"]


link.classList.replace("special", "regular");
console.log(link.classList); 
// ["link", "regular", "is-active", length: 3, value: "link regular is-active"]



// *                    Властивість style
const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // inline styles object



// *                   Доступ до атрибутів 
// <img class="image" src="<https://picsum.photos/id/15/320/240>" alt="Rocks and waterfall" width="300" />
const image = document.querySelector(".image");
console.log(image.hasAttribute("src")); // true
console.log(image.hasAttribute("href")); // false

console.log(image.getAttribute("alt")); // "Rocks and waterfall"

image.setAttribute("alt", "Amazing nature");
console.log(image.getAttribute("alt")); // Amazing nature

image.removeAttribute("alt");
console.log(image.hasAttribute("alt")); // false




// *                   Власні атрибути
// <button type="button" data-action="save">Save text</button>
// <button type="button" data-action="close">Close editor</button>

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"


// Змінюємо значення data-action для кнопки saveBtn
saveBtn.dataset.action = "update";

// Додаємо новий data-атрибут data-role
saveBtn.dataset.role = "admin";

// Перевіримо нові значення
console.log(saveBtn.dataset.action); // "update"
console.log(saveBtn.dataset.role); // "admin"


// Видаляємо data-атрибут data-action
delete saveBtn.dataset.action;

// Перевіримо видалення
console.log(saveBtn.dataset.action); // undefined


const userBlock= document.querySelector('div[data-user-role="admin"]');

// Додаємо новий data-атрибут data-user-status
element.dataset.userStatus = "online";

console.log(element.dataset.userRole); // "admin"
console.log(element.dataset.userStatus); // "online"
