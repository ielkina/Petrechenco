"use strict";

//To String

//1)
console.log(typeof (String(null)));//string
console.log(typeof (String(5)));//string
console.log(String(null));//null

//2
console.log(typeof (String(5 + '')));//string

const num = 5;
console.log('https://vk.com/catalog/' + num);//https://vk.com/catalog/5

const fontSize = 26 + 'px';

//To Number
//1
console.log(typeof (Number(5)));//number

//2 унарный плюс
console.log(typeof (+'5'));//number

//3
console.log(typeof (parseInt('15px', 10)));//number

let ans = +prompt('hello', '');

//To boolean

// 0, '', null, undefined, NaN; всегда будет превращаться в false
//1
let switcher = null;

if (switcher) {
	console.log('Working...');
}
switcher = 1;
if (switcher) {
	console.log('working...');//working... true
}

//2
console.log(typeof (Boolean('4')));//boolean

//3
console.log(typeof (!!'44444'));//boolean


