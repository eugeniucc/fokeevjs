// "use strict";

// function User(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// User.prototype.calcAge = function () {
//   return 2037 - this.age;
// };

// const ivan = new User("Ivan", "Avdeev", 2002);
// console.log(ivan);
// console.log(ivan.calcAge());

// const arr = [];
// console.log(arr);

// "use strict";

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   console.log(`${this.name} makes a noise.`);
// };

// const dog = new Animal("Dog");
// dog.speak;

// const animal = {
//   speak() {
//     console.log(`${this.name} make a noise`);
//   },
// };

// const dog = {
//   name: "Dog",
// };

// dog.__proto__ = animal;

// dog.speak();

// "use strict";

// function User(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// User.prototype.calcAge = function () {
//   return 2037 - this.age;
// };

// const ivan = new User("Ivan", "Avdeev", 2002);
// console.log(ivan);
// console.log(ivan.calcAge());

// const arr = [];
// console.log(arr);

// Array.prototype.uniq = function () {
//   return [...new Set(this)];
// };

// const arr1 = [2, 2, 3, 3, 4, 4, 4, 4];

// console.log(arr1.uniq());

// "use strict";

// function User(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// User.prototype.calcAge = function () {
//   return 2037 - this.age;
// };

// const ivan = new User("Ivan", "Avdeev", 2002);

// console.log(ivan);
// console.log(ivan.calcAge());

// class User1 {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   calcAge() {
//     return 2037 - this.age;
//   }
// }

// const anna = new User1("Anna", "Filimonova", 1995);
// console.log(anna);
// console.log(anna.calcAge());

// const user = {
//   firstName: "Dima",
//   secondName: "Petrov",
//   age: 30,
//   get birthYear() {
//     return new Date().getFullYear() - this.age;
//   },
// };

// console.log(user);

// const person = {
//   first: "John",
//   second: "Doe",

//   // getter для получения полного имени
//   get fullName() {
//     return `${this.first}, ${this.second}`;
//   },
// };

// console.log(person);

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   // getter для получения полного имени
//   get fullName() {
//     return `${this.firstName}, ${this.lastName}`;
//   }
//   // setter для установки имени
//   set fullName(name) {
//     const parts = name.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// }

// const person = new Person("john", "doe");
// console.log(person.fullName);

// person.fullName = "Jane Smith";
// console.log(person.firstName);
// console.log(person.lastName);

// "use strict";

// // console.log(Array.from(document.querySelectorAll("h1")));

// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }
//   static createTodays() {
//     return new this("Some article", new Date());
//   }
// }

// console.log(Article.createTodays());

// "use strict";

// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   calcBirth() {
//     return new Date().getFullYear() - this.age;
//   }
// }

// const anna = new User("Anna", "Filimonova", 30);
// console.log(anna.calcBirth());

// const newProto = {
//   calcBirth() {
//     console.log(2037 - this.age);
//   },
//   init(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
//   },
// };

// const ivan = Object.create(newProto);
// ivan.init("Ivan", 35);
// ivan.age = 35;
// console.log(ivan);
// ivan.calcBirth();
