/**
 * GUESSING GAME:
 *
 * Created By: Chelsie Saunders
 * Date: October 16, 2014
 * 
 * GUESSING GAME
 */

//Game variables

(function (){
    var dom = {
    input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector('button')};

    var validateInput = function(){
        playersGuess = parseInt(dom.input.value);

        if(isNaN(playersGuess)){

        }
    };
 /*   Criteria:
    To obtain full credit on the assignment your submission should match the functionality of the demonstration.
        The following criteria must be adhered to as well as satisfying all items on this assignment's rubric.

    Open the HTML file associated with this assignment and take note of the elements that have an id attribute and also the button.
        Create a variable to store a random integer within the range 1-10.
    Create variables that reference the DOM(html) elements or 1 object literal.
        Create an .addEventListner event listener on the guess button to listen for a click event.
        When the guess button is clicked, evaluate your guess with the number the computer has chosen.
        Create a function to validate the users input:
        Validate that a number was entered -- AND
    Validate that the number entered is between 1 and 10
    If your guess is higher than the computer's number then display appropriate message in the HTML.
    If your guess is lower than the computer's number then display appropriate message in the HTML.
    If your guess is equal to the computer's number then display appropriate message and end the game.
    Tally all the wrong guesses and end the game after the 3rd incorrect guess and show appropriate game over message in the HTML.
        Deactivate the button by removing the event listener when the game is over.
        EXTRA CREDIT: Use a keyboard event for the ENTER button that also acts like clicking on the guess button.
*/


})();
