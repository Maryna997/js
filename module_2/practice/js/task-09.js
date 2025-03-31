// Напиши функцію countWords(text), яка отримує рядок text
// і повертає кількість слів у ньому. Словами вважаються групи символів,
// розділені одним або декількома пробілами.

// v1
function countWords(text) {
    let counter = 0;
    let isWord = false;

    const textTrim = text.trim();

    for (let i = 0; i < textTrim.length; i++) {
        if (textTrim[i] !== ' ') {
            if (!isWord) {
                isWord = true;
                counter += 1;
            }
        } else {
            isWord = false;
        }
    }

    return counter;
}

// v2
// function countWords(text) {
//     const textSplit = text.split(' ');
//     const filterWord = textSplit.filter(item => item !== '');
//     return filterWord.length;
// }


console.log(countWords(' мене звати      Микола'));
console.log(countWords('вирішуємо завдання з ментором'));
console.log(countWords('один два три чотири'));
console.log(countWords('слово'));
console.log(countWords('word'));
