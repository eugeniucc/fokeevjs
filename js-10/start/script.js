"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// console.log(window);

const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScroll.addEventListener("click", function () {
  // window.scrollTo({
  //   left: section1.getBoundingClientRect().left + window.pageXOffset,
  //   top: section1.getBoundingClientRect().top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  section1.scrollIntoView({ behavior: "smooth" });
});

// console.log(btnScroll.getBoundingClientRect());

// ОСТАНОВКА СОБЫТИЯ

// const h1 = document.querySelector("h1");

// function alertH1() {
//   alert("Hello");
// }

// h1.addEventListener("mouseenter", alertH1);

// setTimeout(function () {
//   h1.removeEventListener("mouseenter", alertH1);
// }, 4000);

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
}

// const nav = document.querySelector(".nav");
// const navLinks = document.querySelector(".nav__links");
// const link = document.querySelector(".nav__link");

// nav.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target);
//   console.log(e.currentTarget);
// });
// navLinks.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });
// link.addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// РАБОТА ТАБОВ

const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) {
    return;
  }
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

const nav = document.querySelector(".nav");

nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest("nav").querySelectorAll(".nav__link");
    const logo = link.closest("nav").querySelector(".nav__logo");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = 0.5;
      }
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest("nav").querySelectorAll(".nav__link");
    const logo = link.closest("nav").querySelector(".nav__logo");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = 1;
      }
    });
    logo.style.opacity = 1;
  }
});
