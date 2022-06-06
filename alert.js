"use strict";

alert("hello");

// const result = confirm('are you here?');
// console.log(result);//true

// const answer = prompt('Вам есть 18?', '--');
// const answer = +prompt('Вам есть 18?', '--'); //number
// console.log(typeof (answer));//string

//вся информация полученная от пользователя будет в виде строк 

const answers = [];

answers[0]=prompt('Как ваше имя,', '');
answers[1]=prompt('Как ваша фамилия,', '');
answers[2]=prompt('Сколько вам лет,', '');

document.write(answers);



