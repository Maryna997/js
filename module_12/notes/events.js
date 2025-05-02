// *                Метод addEventListener() 
element.addEventListener(event, handler, options)

// <button class="my-button">Next</button>
const button = document.querySelector(".my-button");

button.addEventListener("click", () => {
  console.log("The button was pressed and now the next image will appear");
});



const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("The button was pressed and now the next image will appear");
};

button.addEventListener("click", handleClick);




// *               Метод removeEventListener()
element.removeEventListener(event, handler, options)



// *                    Об'єкт події
const handleClick = event => {
  console.log(event);
};

button.addEventListener("click", handleClick);



// *                    Події клавіатури
document.addEventListener("keydown", event => {
  console.log("Keydown: ", event);
});

document.addEventListener("keyup", event => {
  console.log("Keyup: ", event);
});



// *                  Властивості key і code
// Властивість об’єкта події key повертає символ, згенерований натисканням клавіші на клавіатурі. Ця властивість враховує:
// стан клавіш-модифікаторів, наприклад Shift
// поточну мову
// Властивість об’єкта події code повертає код фізичної клавіші на клавіатурі й не залежить від мови та стану клавіш - модифікаторів.
    
    
document.addEventListener("keydown", event => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});



// *                  Клавіші-модифікатори
document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
    console.log("«Ctrl + s» or «Command + s» combo");
  }
});

