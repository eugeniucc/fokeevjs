// "use strict";

// const bookings = [];

// function createBooking(
//   flightNum,
//   numPassengers = 1,
//   price = 100 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking("343GRT");

"use strict";

// const flight = "432FRE";
// const passenger = {
//   name: "Dmitrii",
//   passport: 2323123123123,
// };

// function checkIn(flightNum, passID) {
//   (flightNum = "111RRR"), (passID.name = "MR " + passID.name);

//   if ((passID.passID = 2323123123123)) {
//     console.log("Вы успешно прошли регистрацию");
//   } else {
//     console.log("Регистрация не удалась");
//   }
// }

// function newPassport(persone) {
//   persone.passID = Math.trunc(Math.random() * 10000000);
// }

// checkIn(flight, passenger);

// console.log(flight, passenger.name);

// "use strict";

// function oneWord(str) {
//   return str.replaceAll(" ", " ").toLowerCase();
// }

// console.log(oneWord(" ывывыВВВВ ыфвфыв ФЫВФЫВ ывфыВВВ"));

// function upperFirstLetter(str) {
//   const trimmedStr = str.trim();
//   return trimmedStr.charAt(0).toUpperCase() + trimmedStr.slice(1);
// }

// console.log(upperFirstLetter("sdad SS SDsddsd Asasdasd"));

// "use strict";

// function hello(hiStr) {
//   return function (name) {
//     console.log(`${hiStr} ${name}`);
//   };
// }

// const greeter = hello("Hi");
// greeter("dima");

// hello("Здравствуйте")("Дмитрий");

// "use strict";

// function person(greetStr) {
//   console.log(greetStr + " " + this.firstName + " " + this.lastName);
// }

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
//   person: person,
// };

// person.call(person2, "Добрый вечер");

"use strict";

const s7 = {
  airline: "s7",
  iCode: "S7",
  booking: [],
  book: function (flightNum, name) {
    console.log(
      `${name} забронировал место на самолет компании ${this.airline}, номер рейста ${this.iCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iCode}${flightNum}`, name });
  },
};

s7.book(2131, "Dima");

const turkish = {
  airline: "tr",
  iCode: "TR",
  booking: [],
};

// s7.book.call(turkish, 1122, "Ivan");

const bookTr = s7.book.bind(turkish);

bookTr(111111, "Vika");

turkish.planes = 300;
turkish.buyplanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".btn")
  .addEventListener("click", turkish.buyplanes.bind(turkish));
