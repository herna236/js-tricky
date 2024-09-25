

function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100); // Random number between 0 and 99
    let attempts = 0;
    let gameOver = false;

    return function(guess) {
        if (gameOver) {
            return "The game is over, you already won!";
        }

        attempts++; // Increment attempts on each guess

        if (guess < secretNumber) {
            return `${guess} is too low!`;
        } else if (guess > secretNumber) {
            return `${guess} is too high!`;
        //guess === secretNumber
        } else {
            gameOver = true; // Set gameOver to true on a correct guess
            return `You win! You found ${secretNumber} in ${attempts} guesses.`;
        }
    };
}

// Example usage:
// let game = guessingGame();
// console.log(game(50)); // "50 is too low!"
// console.log(game(90)); // "90 is too high!"
// console.log(game(70)); // "You win! You found 70 in 3 guesses."
// console.log(game(70)); // "The game is over, you already won!"


module.exports = { guessingGame };
