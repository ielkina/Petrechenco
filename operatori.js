"use strict";

// console.log('arr' + "-object");
// console.log(4 + "-object");
// console.log(4 + +"-object");
// console.log(4 + +"5");
// console.log(4 + "5");

let incr = 10,
	decr = 10;

// incr++;
// decr--;
// ++incr;
// --decr;
// console.log(incr++); //постфиксная
// console.log(decr--);
console.log(++incr); // префиксная
console.log(--decr);

console.log(5 % 2); //1

console.log(2 * 4 == 8); //true
console.log(2 * 4 == "8"); //true
console.log(2 * 4 === "8"); //false строгое сравнение
console.log(2 + 2 * 2 === 8); //false строгое сравнение
console.log(2 + 2 * 2 != 8); //true
console.log(2 + 2 * 2 != "6"); //false сравнение по значению 
console.log(2 + 2 * 2 !== "6"); //true сравнение по типу 



&&
||

const isChecked = true,
	isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose);








