/*
Chelsie Saunders
Date: October 3, 2014
Assignment: Goal1: Assignment: Duel1
 */

//self-executing function
(function(){                                        //I not sure why we do this. I imagine it gets this going as soon as the browser opens the js file

    console.log("FIGHT!!!");                        //This was so I could test to see if I linked up my Javascript to my HTML document.
//___________________________________VARIABLES______________________________________________________//
    //player name
    var playerOneName = "Mr. Rogers";               //This variable is declared for the first player
    var playerTwoName = "Captain Kangaroo";         //This variable is declared for the second player

    //player damage
    var player1Damage = 20;                         // This variable is to quantify how much damage is done if hit during a round for player one
    var player2Damage = 20;                         // This variable is to quantify how much damage is done if hit during a round for player two

    //player health
    var playerOneHealth = 100;                      // This variable is how much health points player one has to start with
    var playerTwoHealth = 100;                      // This variable is how much health points player two has to start with

    //initiate round
    var round=0;                                    // This variable is for the round that will be incremented for the for loop below

    function fight(){                                                                                   // This function is for the fight itself
//      console.log('in the fight function');                                                           // this console.log was to help me understand the order in which code is executed
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);       // This is an alert to start the game. It states
        for (var i = 0; i < 10; i++){                                                                   // this is a for loop sets up 10 rounds of fighting
            //console.log(i);                                                                           // this console.log helps me determine if my for loop is producing 10 rounds
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;                                                        // this variable declares the value for minimum damage for player one
            var minDamage2 = player2Damage * .5;                                                        // this variable declares the value for minimum damage for player two
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);                   // this formula creates a random number player one's damage
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);                   // this formula creates a random number player two's damage

       //   console.log(f1);                                                                            // this console.log is to see if my formula worked for f1
       //   console.log(f2);                                                                            // this console.log is to see if my formula worked for f2
            //inflict damage
            playerOneHealth-=f1;                                                                        // this subtracts the random number of damage points to player one's health
            playerTwoHealth-=f2;                                                                        // this subtracts the random number of damage points to player two's health

            //console.log(playerOneHealth);                                                             // this tells me how much health player one has
            //console.log(playerTwoHealth);                                                             // this tells me how much health player two has

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);  // This console.logs the players health

            //check for victor
            var results = winnerCheck();                                                                 // this variable is a function call that captures the result of the winnerCheck function
            console.log(results);                                                                        // this logs the result or information returned by the winnerCheck function
            if (results==="no winner")                                                                   // this if statement helps determine if there is a winner or if the rounds need to to continue
            {
                round++;                                                                                // this adds one to the round
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); //this alert post after every round that does not produce a winner

            } else{                                                                                     // else will execute code if there is a winner or if everyone dies.
                alert(results);                                                                         // gives the user the results
                break;                                                                                  // this puts an end to all this craziness
            }                                                                                           // end of if else statement

        }                                                                                               // end of for loop
    }                                                                                                   // end of the fight function

    function winnerCheck(){                                     // this function will measure the players health and determine if there is a winner
        console.log("in winnerCheck function");                 // this lets me know that my winnerCheck function is running
        var result="no winner";                                 // this variable is for the result. it is set to 'no winner'
        if (playerOneHealth<1 && playerTwoHealth<1)             // this if statement will give the proper result after determining the winner
        {                                                       // the first condition is to determine if the results of both players dropped below 1 health points during the same round.
            result = "You Both Die";                            // this result is if both players health points drop below 1 during the same round
        } else if(playerOneHealth<1){                           // this else if condition determines if player one health drops below one first
            result =playerTwoName+" WINS!!!";                   // this is the result if player ones health drops below 1 first
        } else if (playerTwoHealth<1)                           // this else if condition deterimines if player twos health drops below one first
        {
            result = playerOneName+" WINS!!!";                  // this result occurs with player two's health drops below 1 first
        }                                                       // end of else if
        return result;                                          // this returns the information computed by the winnerCheck function which determines the winner
    }                                                           // end of winnerCheck function

    /*******  The program gets started below *******/
    console.log('program starts');       //this console log helps me determine the order which code is executed int the console.log
    fight();                            //This calls the fight function. This is where the fight really begins.

})();                                   // End of self executing function

