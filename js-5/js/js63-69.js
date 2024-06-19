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

