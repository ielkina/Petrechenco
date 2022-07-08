'use strict';
document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
		]
	};
	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		addInput = document.querySelector('.adding__input'),
		checkbox = document.querySelector('[type="checkbox"]');

	addForm.addEventListener('submit', (event) => {
		event.preventDefault();
		let newFilm = addInput.value;
		const favorite = checkbox.checked;

		if (newFilm) {
			if (newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 22)}...`;
			}
			if (favorite) {
				console.log("Добавляем любимый фильм");
			}
			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);
			createMovieList(movieDB.movies, movieList);
		}
		event.target.reset();
	});

	//удаление рекламных блоков 
	// adv.forEach(item => {
	// 	item.remove();
	// });
	//или
	// adv.forEach(function (item) {
	// 	item.remove();
	// });
	//функция по удалению рекламы
	const deleteAdv = (arr) => {
		arr.forEach(item => {
			item.remove();
		});
	};
	//функция
	const makeChanges = () => {
		//замена жанра фильма
		genre.textContent = 'Драма';
		//замена постера 
		poster.style.backgroundImage = 'url("img/bg.jpg")';
		//очищение списка с фильмами
	};

	const sortArr = (arr) => {
		arr.sort();
	};

	//сортировка фильмов по алфавиту
	movieDB.movies.sort();

	function createMovieList(films, parent) {
		parent.innerHTML = "";
		sortArr(films);
		//получение элементом образом innerHTML
		// console.log(poster.innerHTML);

		//сортировка по алфавите и добавление порядкового номера фильма на страницу
		films.forEach((film, i) => {
			parent.innerHTML += `
		<li class="promo__interactive-item">${i + 1} ${film}
			<div class="delete"></div>
		</li>
		`;
		});

		//удаление из списка нажатием на корзину 
		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				//формировка нумерации  после удаления 
				createMovieList(films, parent);
			});
		});
	}
	deleteAdv(adv);
	makeChanges();
	createMovieList(movieDB.movies, movieList);
});
// a = a+1;
// a += 1;
