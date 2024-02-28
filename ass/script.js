"use strict";

//Scores
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

//Dices
const diceEl = document.querySelector(".dice");

// Selecting buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting considitions

// Reset course
score0El.textContent = 0;
score1El.textContent = 0;
//Hiding the dice
diceEl.classList.add("hidden");

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  //2. Display the dice
  //3. Search for rolled 1 , switch to next player
});
