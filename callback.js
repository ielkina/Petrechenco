"use strict";

function first() {
	//do something
	setTimeout(function () {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}


first();
second();

//2
//1

function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

function done() {
	console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);

