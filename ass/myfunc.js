// These will be all my function being added

/*
=== Function 1 ===
Press R key to roll dice 
*/

document.addEventListener("keydown", function (event) {
  if (event.key === "r") {
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
      current0El.textContent = currentScore; // Change Later
    } else {
      // switch to next player
    }
  }
});

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       // 1. Generating a random dice roll
//       const dice = Math.trunc(Math.random() * 6) + 1;
//       console.log(`Generated Random Number - ${dice}`);

//       //2. Display the dice
//       diceEl.classList.remove("hidden");
//       diceEl.src = diceImages[dice];

//       //3. Search for rolled 1 , switch to next player
//     }
//   });
