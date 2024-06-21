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

// "use strict";

// const airpline = "TAP Air Portugal";

// console.log(airpline.toLocaleLowerCase());
// console.log(airpline.toLocaleUpperCase());
// console.log(airpline.trim());

// const priceRub = "2906p";
// const priceUsd = priceRub.slice(0, -1) / 72 + priceRub.replace("p", "$");
// console.log(priceUsd);

// const str = "Привет свет";
// const correctStr = str.replace("свет", "мир");
// console.log(correctStr);

// const flight = "s7ADR320";
// console.log(flight.includes("7AD"));
// console.log(flight.startsWith("s7"));
// console.log(flight.endsWith("s"));

// "use strict";

// const newNames = "dmitrii maria ivan igor vika";
// const arrFromStr = newNames.split(" ");
// console.log(arrFromStr);
// const strFromArr = arrFromStr.join(" ");
// console.log(strFromArr);

// function capitalName(strNames) {
//   const arrNames = strNames.split(" ");

//   const newUpperNames = [];

//   for (const n of arrNames) {
//     newUpperNames.push(n[0].toUpperCase() + n.slice([1]));
//   }
//   console.log(newUpperNames);
// }

// capitalName(newNames);

// "use strict";

// const cardNumber = "6543";

// console.log(cardNumber.padEnd(16, "*"));

// "use strict";
// const hello = "hello world";
// console.log(hello + " " + hello.repeat(2));

