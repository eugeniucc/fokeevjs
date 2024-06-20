// "use strict";

// const airpline = new String("TAP Air Portugal");
// const plane = "A430";

// console.log(typeof airpline);

// console.log(airpline[0]);
// console.log(airpline.length);
// console.log(airpline.indexOf("A"));
// console.log(airpline.slice(4, 7));
// console.log(airpline.slice(airpline.lastIndexOf(" ")));

// const checkSeat = function (seat) {
//   const s = seat[0];
//   if (s == "A") console.log("Ваше место у окна");
//   else console.log("Ваше место не у окна");
// };

// checkSeat(plane);

"use strict";

const airpline = "TAP Air Portugal";

// console.log(airpline.toLocaleLowerCase());
// console.log(airpline.toLocaleUpperCase());
// console.log(airpline.trim());

// const priceRub = "2906p";
// const priceUsd = priceRub.slice(0, -1) / 72 + priceRub.replace("p", "$");
// console.log(priceUsd);

// const str = "Привет свет";
// const correctStr = str.replace("свет", "мир");
// console.log(correctStr);

const flight = "s7ADR320";
console.log(flight.includes("7AD"));
console.log(flight.startsWith("s7"));
console.log(flight.endsWith("s"));
