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
