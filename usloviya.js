"use strict";

if (4 == 9) {
	console.log('ok!');
} else {
	console.log('error');
}

const num = 50;

if (num < 49) {
	console.log('error');
} else if (num > 100) {
	console.log('to much');
} else {
	console.log('ok');
}
//тирнарным оператором называется потому что в его выполнение участвуют три аргумента
(num === 50) ? console.log('ok') : console.log('error');
//бинарный оператор
4 + 4

	//унарный оператор
	+ '4';

const nuM = '40';
//конструкция switch всегда идет на строгое сравнение и/или соответствие
switch (nuM) {
	case '49':
		console.log('not true');
		break;
	case '100':
		console.log('not true');
		break;
	case 40:
		console.log('true');
		break;
	default:
		console.log('not this time');
}



