"use strict";

class Card {
  constructor(src, alt, price, oldPrice, type, descr, parent) {
    this.src = src;
    this.alt = alt;
    this.price = price;
    this.oldPrice = oldPrice;
    this.type = type;
    this.descr = descr;
    this.parent = parent;
    this.sale = Math.floor(100 - (this.price / this.oldPrice) * 100);
  }

  render() {
    document.querySelector(this.parent).insertAdjacentHTML(
      "beforeend",
      ` 
    <div class="card">
          <img class="card__img" src="${this.src}" alt="${this.alt}" />
          <div class="card__sale">${this.sale}%</div> <!-- Добавлен знак процента -->
          <div class="card__price">
            ${this.price} <span class="card__old-price"> <s>${this.oldPrice}</s> </span>
          </div>
          <div class="card__type">${this.type}</div> <!-- Добавлено "this." -->
          <div class="card__descr">${this.descr}</div> <!-- Добавлено "this." -->
        </div>
      `
    );
  }
}

document.querySelector(".btn").addEventListener("click", function () {
  for (let index = 0; index < 3; index++) {
    let copyOfCard = new Card(
      `img/tv-${index + 1}.png`,
      "tv",
      18800,
      28500,
      "Старая коллекция",
      "Лучший телевизор",
      ".cards"
    ).render();
  }
});

// let copyOfCard = new Card(
//   "img/tv-2.png",
//   "tv",
//   18800,
//   28500,
//   "Старая коллекция",
//   "Лучший телевизор",
//   ".cards"
// );

// copyOfCard.render();
