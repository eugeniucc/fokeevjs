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

// "use strict";

// function Employee(firstName, lastName, age, post) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.post = post;
// }

// Employee.prototype.calcBirth = function () {
//   console.log(new Date().getFullYear() - this.age);
// };

// const cashier = new Employee("Ivan", "Avdeev", 26, "Cashier");

// function Manager(firstName, lastName, age, post) {
//   Employee.call(this, firstName, lastName, age, post);
//   this.password = this.password;
// }

// Manager.prototype = Object.create(Employee.prototype);

// Manager.prototype.sayHello = function () {
//   console.log("Привет я метод менеджера!");
// };

// const manager = new Manager("Irina", "Cravt", 33, "Manager", "Password");

// "use strict";

// class Employee {
//   constructor(firstName, lastName, age, post) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.post = post;
//   }
//   calcBirth() {
//     console.log(new Date().getFullYear() - this.age);
//   }
// }

// class Manager extends Employee {
//   constructor(firstName, lastName, age, post, password) {
//     super(firstName, lastName, age, post);
//     this.password = password;
//   }
// }

// const manager = new Manager("Irina", "Cravt", 33, "Manager", "Password");
// console.log(manager);

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
//   { id: 4, name: "David" },
// ];

// function findUserById(users, idNumber) {
//   const result = users.find((e) => e.id === idNumber);
//   if (result) {
//     return console.log(result);
//   } else {
//     return console.log("Такого пользователя не существует");
//   }
// }

// findUserById(users, 2);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// функция конструктор
// const alice = new Person("Alice", 30);
// console.log(alice);

// prototype
// Person.prototype.greet = function () {
//   console.log(`Hello my name is ${this.name}`);
// };

// const bob = new Person("Bob", 30);
// bob.greet();
// // __proto__

// console.log(bob.__proto__ === Person.prototype);

// сеттеры set

// const obj = {
//   _name: "",
//   set name(value) {
//     this._name = value.trim().toUpperCase();
//   },
//   get name() {
//     return this._name;
//   },
// };

// obj.name = " Alice ";
// console.log(obj.name); // ALICE

// статические методы

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   static create(name, age) {
//     return new Person(name, age);
//   }
// }

// const charlie = new Person("Charlie", 35);

// console.log(charlie);

// Object create метод который создает новый обьект с указанным прототипом

// const personProto = {
//   greet() {
//     console.log(`Hello my names is ${this.name}`);
//   },
// };

// const alice = Object.create(personProto);
// alice.name = "Alice";
// console.log(alice);

// "use strict";

// class Account {
//   movements = [];
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     console.log("Вы создали аккаунт Иван");
//   }
//   sayHi() {
//     console.log("Hello World");
//   }
// }

// const ivan = new Account("Ivan", "Rub", 1111);
// console.log(ivan);

"use strict";

class Account {
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }
  sayHi() {
    console.log("Вы создали аккаунт Иван");
  }
  changePin(password) {
    this.#pin = password;
    return this;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  getMov() {
    console.log(this.#movements);
  }
}

const Ivan = new Account("Ivan", "Rub", 1111);
Ivan.deposit(300).deposit(200).withdraw(100).getMov();
