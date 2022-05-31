"use strict";
//обработчики событий

const btns = document.querySelectorAll('button'),
	overlay = document.querySelector('.overlay');

// btn.onclick = function () {
// 	alert('Click');
// };
//при таком синтаксисе повторение события выведет только последнее 
// btn.onclick = function () {
// 	alert('Second Click');
// };


//синтаксис при котором выведется оба события 
// btn.addEventListener('click', () => {
// 	alert('Click');
// });
// btn.addEventListener('click', () => {
// 	alert('Second Click');
// });

//событие наведение курсора на объект 
// btn.addEventListener('mouseenter', () => {
// 	console.log('hover');
// });
// btn.addEventListener('click', (e) => {
// 	console.log(e.target);
// 	e.target.remove();//удаление выбранного элемента 
// 	// console.log(e);
// });

// const deleteElement = (e) =>{
// 	// e.target.remove();
// 	console.log(e.target);
// };
// btn.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement);

// let i = 0;
// const deleteElement = (e) => {
// 	// e.target.remove();
// 	console.log(e.target);
// 	// console.log(e.type);
// 	i++;
// 	if (i == 1) {
// 		btn.removeEventListener('click', deleteElement);
// 	}
// };
// btn.addEventListener('click', deleteElement);


const deleteElement = (e) => {
	console.log(e.currentTarget);
	console.log(e.type);
};
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');
link.addEventListener('click', function (event) {
	event.preventDefault();
	console.log(event.target);
});
