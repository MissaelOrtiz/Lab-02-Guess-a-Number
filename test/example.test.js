// IMPORT MODULES under test here:
import { compareGuess } from '../utils.js';

const test = QUnit.test;

test('should compare a smaller userInput number to a higher guessTarget number and return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareGuess(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should compare a larger userInput number to a smaller guessTarget number and return +1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = +1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareGuess(5, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should compare a userInput number to a matching guessTarget number and return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareGuess(3, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
