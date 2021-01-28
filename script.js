'use strict';

// Variable definitions
let diceNum = 0;

// Select elements
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.querySelector('#score--1');
const diceElem = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
let dice = document.querySelector('.dice');

score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden');

// A function to generate a random number between 1 and 6 inclusive
function getDiceNum() {
  let x = Math.floor(Math.random() * 6) + 1;
  console.log(x);
  return x;
}

/*
When roll dice btn is clicked get a random dice number
and set the correct dice image src
*/
btnRoll.addEventListener('click', function () {
  diceNum = getDiceNum();

  switch (diceNum) {
    case 1:
      dice.src = 'dice-1.png';
      diceElem.classList.remove('hidden');
      break;
    case 2:
      dice.src = 'dice-2.png';
      diceElem.classList.remove('hidden');
      break;
    case 3:
      dice.src = 'dice-3.png';
      diceElem.classList.remove('hidden');
      break;
    case 4:
      dice.src = 'dice-4.png';
      diceElem.classList.remove('hidden');
      break;
    case 5:
      dice.src = 'dice-5.png';
      diceElem.classList.remove('hidden');
      break;
    case 6:
      dice.src = 'dice-6.png';
      diceElem.classList.remove('hidden');
      break;
  }
});
