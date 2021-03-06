"use strict";
window.addEventListener("DOMContentLoaded", () => {
  //Tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //Timer
  const deadline = "2022-09-11"; //тут указывается дата окончания таймера
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(".timer", deadline);

  //modal для одной кнопки(связаться с нами)
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }
  modalTrigger.forEach((btn) => {
    //вызов всех модальных которое привязанно к нескольким элементам
    btn.addEventListener("click", openModal);
  });
  // modalTrigger.addEventListener('click', () => {
  //   modal.classList.add('show'); //показывает  мод окно
  //   modal.classList.remove('hide');
  //   // modal.classList.toggle('show'); //запуск мод окна с помощью тогл
  //   document.body.style.overflow = 'hidden'; //фиксирует страницу при открытии модального окна
  // });
  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    // modal.classList.toggle('show');
    document.body.style.overflow = ""; //отменяет фиксацию
  }
  // modalCloseBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
  //вызов модального окна через определенное время
  const modalTimerId = setTimeout(openModal, 50000);
  //вызов модального окна через прокрутку страницы
  function showModalByScroll() {
    if (window.pageYoffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);
  //Использование классов для карточек
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAN();
    }
    changeToUAN() {
      this.price = +this.price * this.transfer;
    }
    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add();
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = `
        <div class="menu__item">
          <img src=${this.src} alt=${this.alt} />
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">
          ${this.descr}
          </div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
        </div>
      `;
      this.parent.append(element);
    }
  }
  // const div = new MenuCard();
  // div.render();
  //или
  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container",
    "menu__item",
    "big"
  ).render();

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container",
    "menu__item",
    "big"
  ).render();

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container",
    "menu__item",
    "big"
  ).render();

  //forms отправка формы на сервер
  const forms = document.querySelectorAll("form"); //получение всех форм на странице
  const massage = {
    loading: "img/form/spinner.svg",
    success: "Спасибо! Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так...",
  };
  forms.forEach((item) => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img"); //создание тега сообщения
      statusMessage.src = massage.loading; //добавление статуса сообщения
      statusMessage.style.cssText = `
      display: block;
      margin: 0 auto;
      `; //показ текста статуса сообщения
      // form.append(statusMessage); //добавление сообщения на страницу
      form.insertAdjacentElement("afterend", statusMessage);

      // const request = new XMLHttpRequest();
      // request.open("POST", "server.php");

      // request.setRequestHeader();
      const formData = new FormData(form);

      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      // const json = JSON.stringify(object);

      // request.send(json); //отправка в формате json
      fetch("server.php", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(object),
      })
        .then((data) => data.text())
        .then((data) => {
          console.log(data);
          showThanksModal(massage.success);
          // form.reset();
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });

      // request.send(formData); //отправка в консоль

      // request.addEventListener("load", () => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     showThanksModal(massage.success);
      //     form.reset();
      //     statusMessage.remove();
      //   } else {
      //     showThanksModal(massage.failure);
      //   }
      // });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hide");
    openModal();
    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
    <div class="modal__content">
    <div class="modal__close" data-close>&times;</div>
    <div class="modal__title">${message}</div>
    </div>`;

    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal();
    }, 4000);
  }

  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: JSON.stringify({mane: 'Alex'}),
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // })
  //   .then(response => response.json())
  //   .then(json => console.log(json))
});
