<!-- ## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks. -->

## HTML
1) HTML section for content (rules)
2) User input
3) Submit Button
4) Divs
5) Reset Button

## State
Total Wins: number starting at 0
Target Number: randomly generated number
Remaining Guesses: number starting at 4

## Events
-[submit button] Compare userInput number against the target number
    - if smaller
        - return 'too small' in feedback
        - decrement remaining guesses
            - display reset button if remaining guesses = 0
    - if larger
        - return 'too large' in feedback
        - decrement remaining guesses
            - display reset button if remaining guesses = 0
    - if same number
        - return congrats message
        - increment total wins
        - reveal reset button
- [reset button] resets the game
    - asigns different target number
    - resets remaining guesses