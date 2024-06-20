// "use strict";

// const arr = [
//   "apple",
//   "orange",
//   "limon",
//   "watermelon",
//   "juce",
//   "tea",
//   "coctail",
// ];

// const fruitOne = arr[0];
// const fruitTwo = arr[1];
// const fruitThree = arr[2];

// let [fruitOne, fruitTwo, fruitThree] = arr;

// console.log(fruitOne, fruitTwo);

// [fruitOne, fruitTwo] = [fruitTwo, fruitOne];

// console.log(fruitOne, fruitTwo);

// function coctailMixer(fruit1, fruit2, drink) {
//   console.log(`Вы приготовили ${fruit1} + ${fruit2} = ${drink}`);
// }

// coctailMixer(...arr);

// "use strict";

// let apple = "smallApple";
// let limon = "smallLimon";

// const obj = {
//   fruits: {
//     apple: "apple",
//     orange: "orange",
//     limon: "limon",
//     watermelon: "watermelon",
//   },
//   drinks: {
//     juce: "juse",
//     tea: "tea",
//     coctail: "coctail",
//   },
// };

// function coctailMixer({ fruits: { apple, orange }, drinks: { juce } }) {
//   console.log(`Вы приготовили ${apple}, ${juce} и ${orange} ${juce}`);
// }

// coctailMixer(obj);

// "use strict";

// const obj = {
//   fruits: ["apple", "orange", "limon", "watermelon"],
//   drinks: ["juce", "tea", "coctail"],
//   food: {
//     soup: "borch",
//     pasta: "spaghetti",
//   },
// };

// let arr = [1, 2, 3, 4, 5, 6, 7];

// const [a, b, c, ...others] = arr;

// console.log(a, b, c, others);

// function calc(...numbers) {
//   let sum = 0;
//   for (const value of numbers) {
//     sum += value;
//   }
//   console.log(sum);
// }

// calc(1, 2, 3, 4, 5);

// "use strict";

// const names = [
//   "Дмитрий",
//   "Иван",
//   "Анастасия",
//   "Виктор",
//   "Игорь",
//   "Дмитрий",
//   "Иван",
//   "Анастасия",
// ];

// const result = new Set(names);
// console.log(...result);

// const name = "Dmitrii";
// const uniqLetter = new Set(name);
// console.log(uniqLetter);
// const resultLetter = Array.from(uniqLetter);
// console.log(resultLetter);

// const resultArr = Array.from(result);
// console.log(resultArr);

// "use strict";

// const hotel = new Map();
// hotel.set("categories", ["std", "eco", "suit", "lux"]);
// hotel.set(true, "Мы открыты");
// hotel.set(false, "Мы закрыты");
// hotel.set([2, 3], "Это массив");
// console.log(hotel);

"use strict";

const hotel = new Map([
  ["categories", ["std", "eco", "suit", "lux"]],
  [true, "Мы открыты"],
  [false, "Мы закрыты"],
]);

console.log(hotel);

const obj = {
  name: "John",
  lastName: "Travolta",
  age: 30,
};

for (const [key, value] of hotel) {
  console.log(`Ключ ${key}, value ${value}`);
}

// const mapFromObj = new Map(Object.entries(obj));
// console.log(mapFromObj);

// const setFromMap = new Set(hotel);
// console.log(setFromMap);

// const arrFromMap = Array.from(hotel);
// console.log(arrFromMap);

// const arrFromObj = Object.entries(obj);
// console.log(arrFromObj);

// const objFromarr = Object.fromEntries(arrFromObj);
// console.log(objFromarr);
