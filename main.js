"use strict";

let targetNumber = randomInteger(1, 100);

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function tryToGuess() {
  let userNumber = +prompt("Угадай число от 1 до 100");
  if (!isNumber(userNumber)) {
    alert("введите число!");
    tryToGuess();
  } else if (userNumber > targetNumber) {
    alert("Загаданное число меньше, попробуйте снова!");
    tryToGuess();
  } else if (userNumber < targetNumber) {
    alert("Загаданное число больше, попробуйте снова!");
    tryToGuess();
  } else if (userNumber == targetNumber) {
    alert("Вы угодали!");
    tryToGuess();
  }
}

console.log(targetNumber);
tryToGuess();
