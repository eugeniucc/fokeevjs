const firstName = prompt("Write first name"),
  secondName = prompt("Write second name");

const randNum = Math.floor(Math.random() * 100);

if (
  randNum < 33 &&
  firstName != null &&
  secondName != null &&
  firstName != "" &&
  secondName != ""
) {
  alert(
    `Результат совместимости ${firstName} и ${secondName} равен ${randNum} вам нужно поискать человека с другим именем`
  );
} else if (
  randNum >= 33 &&
  randNum < 66 &&
  firstName != null &&
  secondName != null &&
  firstName != "" &&
  secondName != ""
) {
  alert(
    `Результат совместимости ${firstName} и ${secondName} равен ${randNum} cовместимость хорошая, но могла быть и лучше`
  );
} else if (
  randNum >= 66 &&
  firstName != null &&
  secondName != null &&
  firstName != "" &&
  secondName != ""
) {
  alert(
    `Результат совместимости ${firstName} и ${secondName} равен ${randNum} cовместимость отличная`
  );
} else {
  alert("Попробуйте еще раз!");
}
