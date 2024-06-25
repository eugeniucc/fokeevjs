"use strict";

const ul = document.querySelector("ul");

const qeAll = document.querySelectorAll("li");

const getElemByAll = document.getElementsByTagName("li");

console.log(qeAll);
console.log(getElemByAll);

const newLi = document.createElement("li");
newLi.innerText = "New elem 4";
ul.appendChild(newLi);

for (let index = 0; index < getElemByAll.length; index++) {
  getElemByAll[index].style.color = "green";
}
