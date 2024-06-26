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

function hover(e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest("nav").querySelectorAll(".nav__link");
    const logo = link.closest("nav").querySelector(".nav__logo");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
}

nav.addEventListener("mouseover", hover.bind(0.5));

nav.addEventListener("mouseout", hover.bind(1));

// ПОЯВЛЕНИЕ МЕНЮ ПОСЛЕ ПРОКРУТКИ

// const coord = section1.getBoundingClientRect();
// const navContainer = document.querySelector(".nav");

// window.addEventListener("scroll", function () {
//   if (this.window.scrollY > coord.top) {
//     navContainer.classList.add("sticky");
//   } else {
//     navContainer.classList.remove("sticky");
//   }
// });

const coord = section1.getBoundingClientRect();
const navContainer = document.querySelector(".nav");

function callBack(entries) {
  if (!entries[0].isIntersecting) {
    navContainer.classList.add("sticky");
  } else {
    navContainer.classList.remove("sticky");
  }
}

const options = {
  root: null,
  treshhold: 0,
};

const observer = new IntersectionObserver(callBack, options);
observer.observe(section1);

// ВСПЛЫТИЕ СЕКЦИЙ

// const allSections = document.querySelectorAll(".section");

// function revealSection(entries, observe) {
//   if (entries[0].isIntersecting) {
//     entries[0].target.classList.remove("section--hidden");
//     observe.unobserve(entries[0].target);
//   }
// }

// const sectionsObserver = new IntersectionObserver(revealSection, {
//   treshhold: 0.15,
// });

// allSections.forEach(function (section) {
//   sectionsObserver.observe(section);
//   section.classList.add("section--hidden");
// });

// ЛЕНИВАЯ ЗАГРУЗКА ИЗОБРАЖЕНИЯ

const images = document.querySelectorAll("img[data-src]");

function loadImg(entries, observer) {
  if (!entries[0].isIntersecting) {
    return;
  }

  entries[0].target.src = entries[0].target.dataset.src;

  entries[0].target.addEventListener("load", function () {
    entries[0].target.classList.remove("lazy-img");
  });

  observer.unobserve(entries[0].target);
}

const imgObserver = new IntersectionObserver(loadImg, { treshhold: 0.15 });

images.forEach((img) => {
  imgObserver.observe(img);
});

// СЛАЙДЕР

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlides = slides.length;

function createDots() {
  slides.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <button class="dots__dot" data-slide="${i}"></button>
      `
    );
  });
}

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    goToSlide(slide - 1);
  }
});

function goToSlide(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
}

function activateDots(slide) {
  document.querySelectorAll(".dots__dot").forEach(function (dot) {
    dot.classList.remove("dots__dot--active");
  });
  document
    .querySelector(`.dots__dot(data-slide${slide})`)
    .classList.add("dots__dot--active");
}

goToSlide(0);

function nextSlide() {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
}

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    prevSlide();
  }
  if (e.key === "ArrowRight") {
    nextSlide();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("страница загрузалась");
});
