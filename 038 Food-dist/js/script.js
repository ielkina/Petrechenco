"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', "fade");
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', "fade");
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
});





// .header {
// }
// .header__left-block {
// }
// .header__logo {
// }
// .header__links {
// }
// .header__link {
// }
// .header__right-block {
// }
// .btn {
// }
// .btn_white {
// }
// .sidepanel {
// }
// .sidepanel__text {
// }
// .sidepanel__divider {
// }
// .sidepanel__icon {
// }
// .preview {
// }
// .bgc_blue {
// }
// .container {
// }
// .tabcontainer {
// }
// .tabcontent {
// }
// .tabcontent__descr {
// }
// .tabheader {
// }
// .tabheader__items {
// }
// .tabheader__item {
// }
// .tabheader__item_active {
// }
// .preview__life {
// }
// .divider {
// }
// .offer {
// }
// .bgc_y {
// }
// .offer__text {
// }
// .title {
// }
// .offer__descr {
// }
// .offer__action {
// }
// .btn_dark {
// }
// .offer__advantages {
// }
// .offer__advantages-text {
// }
// .offer__slider {
// }
// .offer__slider-counter {
// }
// .offer__slider-prev {
// }
// .offer__slider-next {
// }
// .offer__slider-wrapper {
// }
// .offer__slide {
// }
// .calculating {
// }
// .calculating__field {
// }
// .calculating__subtitle {
// }
// .calculating__choose {
// }
// .calculating__choose-item {
// }
// .calculating__choose-item_active {
// }
// .calculating__choose_medium {
// }
// .calculating__choose_big {
// }
// .calculating__divider {
// }
// .calculating__total {
// }
// .calculating__result {
// }
// .menu {
// }
// .menu__field {
// }
// .menu__item {
// }
// .menu__item-subtitle {
// }
// .menu__item-descr {
// }
// .menu__item-divider {
// }
// .menu__item-price {
// }
// .menu__item-cost {
// }
// .menu__item-total {
// }
// .order {
// }
// .order__form {
// }
// .order__input {
// }
// .btn_min {
// }
// .promotion {
// }
// .promotion__text {
// }
// .promotion__descr {
// }
// .promotion__timer {
// }
// .timer {
// }
// .timer__block {
// }
// .footer {
// }
// .social {
// }
// .subtitle {
// }
// .link {
// }
// .pepper {
// }
// .call {
// }
// .modal {
// }
// .modal__dialog {
// }
// .modal__content {
// }
// .modal__close {
// }
// .modal__title {
// }
// .modal__input {
// }