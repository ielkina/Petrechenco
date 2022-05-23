"use strict";


let num = 20; //глобальная переменная. видна во всем коде.
function showFirstMessage(text, arg, arg1) {
	console.log(text);
	// let num = 20; //локальная переменная. видна только внутри функции  
	// num = 10; //использование глобальной переменной внутри функции 
	let num = 10;
	//при отсутствии локальной переменной будет искать аргументы вне функции.
	//на уровень выше. Это называется замыканием функции. 
	//например let num = 20;
	console.log(num);//обращение к переменной внутри функции.
}

showFirstMessage("Hello World!");
console.log(num);

// function calc(a, b) {
// 	return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret() {
	let num = 50;
	//
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

// function declaration существует до объявления кода.
//синтаксис функции вначале могут быть объявленные аргументы ну а потом написана 
//функция 


//function expression  выполняется после объявления функции
const logger = function () {
	console.log("hello!");
};
logger(); //"Hello!"

//стрелочная функция 
const calc = a => a + b;
const calc = (a, b) => a + b;
const calc = (a, b) => { return a + b };
const calc = (a, b) => {
	console.log("1");
	return a + b;
};
