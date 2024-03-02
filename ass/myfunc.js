// These will be all my function being added

/*
=== Function 1 ===
Press R key to roll dice 
*/

document.addEventListener("keydown", function (event) {
  // Works only with the r key
  if (event.key === "r") {
    if (playing) {
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
    }
  }
});
// === end ===

/*
=== Function 2 ===
Press h key to hold score
*/

document.addEventListener("keydown", function (event) {
  // Works only with the r key
  if (event.key === "h") {
    if (playing) {
      console.log("Hold Button");
      // 1. Add current score to active players score
      scores[activePlayer] += currentScore;
      console.log(`ScoreActivePlayer: ${scores[activePlayer]}`);
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      //2. Check score is altleast 100 >=100
      if (scores[activePlayer] >= 100) {
        playing = false;
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
    }
  }
});
