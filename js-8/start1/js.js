"use strict";
/*
ЗАДАЧИ:

Создайте функцию calcAverageHumanAge которая будет принимать в себя массив с годами собак и будет делать с этими данными следующее:

1. Пересчитайте собачий возраст, в возраст человека по формуле: 
если возраст собаки меньше или равен 2 годам, то человеческий возраст = 2 * возраст собаки. Если собаке больше 2-х лет то человеческий возраст = 16 + собачий возраст * 4

2.Вычислите всех собак которым больше либо равно 18 человеческих лет.

3. Вычислите среднее значение возраста всех взрослых собак в пересчете на человеческие года.

4.Запустите функцию для двух массивов данных:

dogs1 = [5, 2, 4, 1, 15, 8, 3]
dogs2 = [16, 6, 10, 5, 6, 1, 4]

*/

// const dogs1 = [5, 2, 4, 1, 15, 8, 3];
// const dogs2 = [16, 6, 10, 5, 6, 1, 4];

// function calcAverageHumanAge(dogs) {
//   const humanAge = dogs.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAge.filter((age) => age >= 18);
//   const averageAge = adults.reduce((acc, val) => acc + val, 0) / adults.length;
//   console.log(`Возраст в человеческих годах: ${humanAge}`);
//   console.log(`Средний возраст всех взролсых собак : ${averageAge.toFixed(2)}`);
// }

// console.log(calcAverageHumanAge([...dogs1, ...dogs2]));
