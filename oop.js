"use strict";
//ООП Объектно Ориентированное Программирование  

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function(){
		console.log('hello');
	}
};

const john = Object.create(soldier);

// const john = {
// 	health: 100,
// };

// john.__proto__= soldier;//__proto__ устаревший формат 

Object.setPrototypeOf(john, soldier); //идентичная john.__proto__= soldier; коду

// console.log(john.armor);

john.sayHello();