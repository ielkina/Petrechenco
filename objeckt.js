"use strict";

const options = {
	name: 'test',
	with: 1024,
	heigh: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	//метод объекты
	makeTest: function () {
		console.log('Test');
	}
};

options.makeTest();//Test

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);//5

// console.log(options['colors']['border']);

// delete options.name;

// console.log(options);


//перебор объекта и объекта в объекте
// let counter = 0;//количество ключей/переменных в объекте
// for (let key in options) {
// 	if (typeof (options[key]) === "object") {
// 		for (let i in options[key]) {
// 			console.log(`свойства ${i} имеет значение ${options[key][i]}`);
// 			counter++;
// 		}
// 	} else {
// 		console.log(`свойства ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// }

// console.log(counter);
