"use strict";

//Scores & aplayer
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

//Dices
const diceEl = document.querySelector(".dice");
const diceElBG = document.querySelector(".dice-background");

// Selecting buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//

// Starting considitions

// Reset course
score0El.textContent = 0;
score1El.textContent = 0;
//Hiding the dice
diceEl.classList.add("hidden");

// Dice Images
const diceImages = {
  1: "https://i.postimg.cc/Rhy7HBYk/image.png",
  2: "https://i.postimg.cc/23NqY8MS/image.png",
  3: "https://i.postimg.cc/TPvxfNRQ/image.png",
  4: "https://i.postimg.cc/wBgrwCxK/image.png",
  5: "https://i.postimg.cc/8kM0VkF8/image.png",
  6: "https://i.postimg.cc/DZVPCsPS/image.png",
};

// Current Score
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`Generated Random Number - ${dice}`);

  //2. Display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = diceImages[dice];
  diceElBG.style.backgroundImage = `url(${diceImages[dice]})`;

  //3. Search for rolled 1 , switch to next player
  if (dice != 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore;
  } else {
    // switch to next player
    switchPlayer();
  }
});

// Holding the score
btnHold.addEventListener("click", function () {
  console.log("Hold Button");
  // 1. Add current score to active players score
  scores[activePlayer] += currentScore;
  console.log(`ScoreActivePlayer: ${scores[activePlayer]}`);
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2. Check score is altleast 100 >=100
  if (scores[activePlayer] >= 100) {
    //  Finish game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add(`player--winner`);
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove(`player--active`);
  } else {
    switchPlayer();
  }

  // Switch to next player
});
