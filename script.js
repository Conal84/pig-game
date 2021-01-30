'use strict';

// Select elements
const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.querySelector('#score--1');
const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const currentScore0Elem = document.querySelector('#current--0');
const currentScore1Elem = document.querySelector('#current--1');

// Variable declarations
let diceNum, currentScore, activePlayer, scores, inPlay;

// Game initialisation
const init = function () {
  diceNum = 0;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  inPlay = true;

  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  currentScore0Elem.textContent = 0;
  currentScore1Elem.textContent = 0;

  diceElem.classList.add('hidden');
  player0Elem.classList.remove('player--winner');
  player1Elem.classList.remove('player--winner');
  player0Elem.classList.add('player--active');
  player1Elem.classList.remove('player--active');
};

init();

// A function to generate a random number between 1 and 6 inclusive
function getDiceNum() {
  let x = Math.floor(Math.random() * 6) + 1;
  console.log(x);
  return x;
}

// A function to switch the active player
function switchPlay() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Elem.classList.toggle('player--active');
  player1Elem.classList.toggle('player--active');
}

/*
When roll dice btn is clicked get a random dice number
and set the correct dice image src
*/
btnRoll.addEventListener('click', function () {
  if (inPlay) {
    diceNum = getDiceNum();
    dice.src = `dice-${diceNum}.png`;
    diceElem.classList.remove('hidden');

    // If 1 not rolled add dice num to score
    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // set score to 0 and swicth the active player
      currentScore = 0;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      switchPlay();
    }
  }
});

// When hold is clicked update the total score and switch play
btnHold.addEventListener('click', function () {
  if (inPlay) {
    // Add currentScore to score and update score element
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // Player wins
      inPlay = false;
      diceElem.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlay();
    }
  }
});

// Reset the game
btnNew.addEventListener('click', init);
