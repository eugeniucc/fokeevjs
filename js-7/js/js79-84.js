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

const flight = "432FRE";
const passenger = {
  name: "Dmitrii",
  passport: 2323123123123,
};

function checkIn(flightNum, passID) {
  (flightNum = "111RRR"), (passID.name = "MR " + passID.name);
}

checkIn(flight, passenger);

console.log(flight, passenger.name);
