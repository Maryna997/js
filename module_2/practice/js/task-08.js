// Напиши функцію countLetter(text, letter)
// яка отримує рядок text, і букву letter
// та повертає кількість разів скільки ця буква зустрічається в рядку

function countLetter(text, letter) {
    let counter = 0;

    for (let i = 0; i < text.length; i++) {
        const textLowerCase = text.toLowerCase();
        if (textLowerCase[i] === letter.toLowerCase()) {
            counter += 1;
        };
    }

    return counter;
};

console.log(countLetter('hello worldO', 'O'))
console.log(countLetter('javascript', 'j'));
console.log(countLetter('аааааа', 'а'));