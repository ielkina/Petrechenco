"use strict";
// 040 Работа с датами

//месяцы считаются с нуля 
//учитывает часовые пояса 
// const now = new Date('2022-06-10');
// // new Date.parse('2022-06-10');
// console.log(now.setHours());
// console.log(now);

// console.log(now.getFullYear()); //текущий год
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date();
alert(`Цикл отработал за ${end - start} миллисекунд`);