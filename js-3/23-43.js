// "use strict";

// Function Declaration

// function calc(a, b, c) {
//   const result = a + b - c;
//   return a + b - c;
// }

// calc(10, 4, 7);

// Function Expression

// let result2 = function (a, b, c) {
//   return a + b - c;
// };

// console.log(result2(10, 4, 7));

// function myFn(a = "Ваше число ", b = 7 + 2) {
//   console.log(a + b);
// }
// myFn("Номер вашего билета ");

// Function CallBack

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else no();
// }

// ask(
//   "Вы согласны ?",
//   () => {
//     alert("Спасибо за согласие");
//   },
//   () => {
//     alert("Вы отменили выполнение");
//   }
// );

// function showOk() {
//   alert("Спасибо за согласие");
// }

// function showCancel() {
//   alert("Вы отменили выполнение");
// }

// ask("Вы согласны ?", showOk, showCancel);

// Function Arrow

// let sum = (a, b) => a + b;

// console.log(sum(5, 5));

// user.name = "Anna";
// console.log(user.name);

// user.sex = "female";
// console.log(user);

// delete user.sex;
// console.log(user);

// user["sex"] = "male";
// console.log(user);

// const propertyName = "newProperty";

// user[propertyName + " 2"] = "propertyValue ";
// console.log(user["newProperty 2"]);

// const answer = prompt("Напишите слово name или age :");

// alert(user[answer]);

// "use strict";

// const user = {
//   name: "John",
//   age: 30,
//   placeOfBirth: {
//     country: "Russia",
//     city: "Novgorod",
//   },
// };

// user.placeOfBirth.country = "USA";
// user.placeOfBirth["dateOfBirth"] = 1992;
// delete user.placeOfBirth["city"];
// console.log(user);

// "use strict";

// const firstName = "John";
// const lastName = "Travolta";

// const user = {
//   firstName,
//   lastName,
//   country: "USA",
//   birthYear: 1992,
//   calcAge() {
//     return 2023 - this.birthYear;
//   },
// };

// console.log(user.calcAge());

// "use strict";

// const firstName = "John";
// const lastName = "Travolta";

// function calcAge() {
//   return 2023 - this.birthYear;
// }

// const userFirst = {
//   firstName,
//   lastName,
//   country: "USA",
//   birthYear: 1992,
//   calcAge,
// };
// const userSecond = {
//   firstName,
//   lastName,
//   country: "USA",
//   birthYear: 2000,
//   calcAge,
// };

// console.log(userFirst.calcAge());
// console.log(userSecond.calcAge());

// "use strict";

// const userObject = {
//   fistname: "John",
//   age: 30,
// };

// console.log(userObject);

// const userArr = [
//   "John",
//   30,
//   20,
//   function () {
//     console.log("Hello world");
//   },
// ];
// userArr[3]();
// console.log(userArr);

// "use strict";

// const year = 2023,
//   birthYear = 1992;

// const userArr = ["John", 30, 20, year - birthYear];

// console.log(userArr.at(-1));

// userArr.push("male");
// userArr.unshift(10);
// userArr.pop();
// userArr.shift();

// const dataFromUserArr = userArr.splice(1, 2, 25);
// console.log(dataFromUserArr);

// "use strict";

// const userArr = ["John", 30, "male", "Moscow"];

// console.log(userArr.includes(30));

// console.log(userArr.indexOf("John"));

// "use strict";

// for (let index = 1; index < 10; index++) {
//   if (index <= 4 && index > 1) {
//     console.log(`Hello World, ${index} разa`);
//   } else {
//     console.log(`Hello World, ${index} раз`);
//   }
// }

// "use strict";

// const arr = [
//   "John",
//   "Travolta",
//   2023 - 1992,
//   "Moscow",
//   true,
//   ["Anna", "Peter", "Ivan"],
//   false,
// ];

// const arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   console.log(typeof arr[i]);
//   arr2.push(typeof arr[i]);
// }
// console.log(arr2);

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== "string") continue;
//   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") break;
//   console.log(arr[i]);
// }

// "use strict";

// let i = 0;

// do {
//   console.log(`Строка выводится в консоль ${i} раз`);
//   i++;
// } while (i <= 10);

// "use strict";

// let randNum = Math.floor(Math.random() * 10) + 1;

// while (randNum !== 10) {
//   console.log(`Вам выпало число ${randNum}`);
//   randNum = Math.floor(Math.random() * 10) + 1;
//   if (randNum === 1) {
//     console.log("Вы победили");
//   }
// }

"use strict";

const obj = {
  name: "John",
  age: 30,
};

const obj2 = obj;

obj.age = "Travolta";

const obj3 = {
  name: "Example",
};

const obj4 = Object.assign({}, obj3);
obj4.name = "Anna";

console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj4);
