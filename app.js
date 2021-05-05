// import functions and grab DOM elements
import { compareGuess } from './utils.js';
const guessesRemainingDisplay = document.getElementById('guesses-remaining');
const totalWinsDisplay = document.getElementById('total-wins');
const totalPlaysDisplay = document.getElementById('total-plays');
const userGuessInput = document.getElementById('user-guess');
const submitGuessButton = document.getElementById('submit-guess');
const resetGameButton = document.getElementById('reset');
const feedbackDisplay = document.getElementById('feedback');

// initialize state
let totalWins = 0;
let totalPlays = 0;
let guessesRemaining = 4;
let targetNumber = Math.ceil(Math.random() * 20);

// set event listeners to update state and DOM
submitGuessButton.addEventListener('click', () => {
    if (compareGuess(Number(userGuessInput.value), Number(targetNumber)) === +1) {
        guessesRemaining--;
        guessesRemainingDisplay.textContent = `${guessesRemaining} Guesses Remaining`;
        feedbackDisplay.textContent = 'Too high!';
    } else if (compareGuess(Number(userGuessInput.value), Number(targetNumber)) === -1) {
        guessesRemaining--;
        guessesRemainingDisplay.textContent = `${guessesRemaining} Guesses Remaining`;
        feedbackDisplay.textContent = 'Too low!';
    } else if (compareGuess(Number(userGuessInput.value), Number(targetNumber)) === 0) {
        feedbackDisplay.textContent = 'You did it!';
        totalWins++;
        totalWinsDisplay.textContent = totalWins;
        totalPlays++;
        totalPlaysDisplay.textContent = totalPlays;
        resetGameButton.classList.toggle('hide');
        userGuessInput.classList.toggle('hide');
        submitGuessButton.classList.toggle('hide');
    } if (guessesRemaining === 0) {
        resetGameButton.classList.toggle('hide');
        userGuessInput.classList.toggle('hide');
        submitGuessButton.classList.toggle('hide');
        totalPlays++;
        totalPlaysDisplay.textContent = totalPlays;
        feedbackDisplay.textContent = 'Oh NO! The world blew up, but you can try again!';
    }
});

resetGameButton.addEventListener('click', () => {
    resetGameButton.classList.toggle('hide');
    userGuessInput.classList.toggle('hide');
    submitGuessButton.classList.toggle('hide');
    guessesRemaining = 4;
    targetNumber = Math.ceil(Math.random() * 20);
})