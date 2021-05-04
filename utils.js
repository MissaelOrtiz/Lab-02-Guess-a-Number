export function compareGuess(userGuess, targetNumber) {
    if (userGuess < targetNumber) {
        return -1;
    } else if (userGuess > targetNumber) {
        return +1;
    } else if (userGuess === targetNumber) {
        return 0;
    }
}