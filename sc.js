let nums = [42, 'Alex', 'John', 18, 23, 100, 1];
let names = ['Tyler', 'Stark', 'Jake', 'Igor'];

for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === 'string') {
        names.push(nums[i]);
        nums.splice(i, 1);
        i--; // Уменьшаем индекс
    }
}

console.log("Массив nums после удаления имен", nums);
console.log("Массив names после добавления имен", names);


if (!names.includes('Constantin')) {
    names.push('Constantin');
}

console.log("Массив names после добавления 'Constantin'", names);












//2


const words = ["peach", "apple", "grape", "apricot", "kiwi", "orange", "banana", "ananas"];


const wordsStartingWithA = words.filter(word => word.toLowerCase().startsWith('a'));

console.log("Слова, начинающиеся на a", wordsStartingWithA);


const sortedWords = words.sort();

console.log("Отсортированный массив", sortedWords);


const longestWord = words.reduce((prev, current) => (prev.length > current.length) ? prev : current);

console.log("Самое длинное слово", longestWord);


const totalLength = words.reduce((total, word) => total + word.length, 0);

console.log("Общая длина всех строк", totalLength);


const Word2 = prompt("Введите новое слово");

if (Word2) {
    words.push(Word2);
    console.log("Массив после добавления нового слова", words);
} else {
    console.log("Вы отменили ввод нового слова");
}
