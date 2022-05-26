"use strict";

const arr = [0, 1, 92, 3, 46, 8];
arr. sort(compareNum); //метод sort внутри себя имеет метод быстрой сортировки
console.log(arr);

function compareNum(a, b) {
	return a -b;
}
arr[99] = 0;

console.log(arr.length); //length состоит из последнего индекса +1
console.log(arr); //[ 0, 1, 2, 3, 6, 8, <93 empty items>, 0 ]

arr.forEach(function(item, i, arr) { 
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

arr.pop();//метод удаляющий последний элемент массива
arr.push(10); //добавляет элемент в конец массива

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for (let value of arr) {
	console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
// console.log(products);
console.log(products.join('; '));
