/*
Chelsie Saunders
Date: October 10, 2014
Assignment: Duel2
 */

//self-executing function
(function(){                                        //I not sure why we do this. I imagine it gets this going as soon as the browser opens the js file

    console.log("FIGHT!!!");                        //This was so I could test to see if I linked up my Javascript to my HTML document.
//___________________________________Player Arrays______________________________________________________//

    var competitorOne = ["Ernie", 20, 100];         // Array for player one
    var competitorTwo = ["Bert", 30, 100];          // Array for player two (more damage points because I like Ernie better)

/*  OLD CODE
    var playerOneName = "Mr. Rogers";               //This variable is declared for the name of the first player
    var playerTwoName = "Captain Kangaroo";         //This variable is declared for the name of the second player

    //player damage
    var player1Damage = 20;                         // This variable is to quantify how much damage is done if hit during a round for player one
    var player2Damage = 20;                         // This variable is to quantify how much damage is done if hit during a round for player two

    //player health
    var playerOneHealth = 100;                      // This variable is how much health points player one has to start with
    var playerTwoHealth = 100;                      // This variable is how much health points player two has to start with
*/
    //initiate round
    var round=0;                                    // This variable is for the round that will be incremented for the for loop below

    function fight(){                                                                                   // This function is for the fight itself
//      console.log('in the fight function');                                                           // This console.log was to help me understand the order in which code is executed
        alert(competitorOne[0]+":"+competitorOne[2]+"  *START*  "+competitorTwo[0]+":"+competitorTwo[2]); // This is an alert to start the game. Changed for array

        for (var i = 0; i < 10; i++){                                                                   // This is a for loop sets up 10 rounds of fighting
            //console.log(i);                                                                           // This console.log helps me determine if my for loop is producing 10 rounds
            //random formula is - Math.floor(Math.random() * (max - min) + min);                        // This will create a random number so that the results of the fight are unpredictable
            var minDamage1 = competitorOne[1] * .5;                                                     // This variable declares the value for minimum damage for player one...I had change to accommodate the new array
            var minDamage2 = competitorTwo[1] * .5;                                                     // This variable declares the value for minimum damage for player two..I had change to accommodate the new array
            var f1 = Math.floor(Math.random()*(competitorOne[1]-minDamage1)+minDamage1);                // This formula creates a random number player one's damage
            var f2 = Math.floor(Math.random()*(competitorTwo[1]-minDamage2)+minDamage2);                // This formula creates a random number player two's damage
       //   console.log(f1);                                                                            // This console.log is to see if my formula worked for f1
       //   console.log(f2);                                                                            // This console.log is to see if my formula worked for f2
            //inflict damage
            competitorOne[2]-=f1;                                                                        // This subtracts the random number of damage points to player one's health ...Changed for array
            competitorTwo[2]-=f2;                                                                        // This subtracts the random number of damage points to player two's health ...Changed for array

            //console.log(competitorTwo[1]);                                                             // This tells me how much health player one has
            //console.log(competitorOne[1]);                                                             // This tells me how much health player two has

            console.log(competitorOne[0]+": "+competitorOne[2] + " " + competitorTwo[0]+":"+competitorTwo[2]);  // This console.logs the players health...Changed for array

            //check for victor
            var results = winnerCheck();                                                                 // This variable is a function call that captures the result of the winnerCheck function
            console.log(results);                                                                        // This logs the result or information returned by the winnerCheck function
            if (results==="no winner"){                                                                  // This if statement helps determine if there is a winner or if the rounds need to to continue
                round++;                                                                                 // This adds one to the round
                alert(competitorOne[0]+":"+competitorOne[2]+"  *ROUND "+round+" OVER"+"*  "+competitorTwo[0]+":"+competitorTwo[2]); //This alert post after every round that does not produce a winner// Changed for array

            } else{                                                                                     // Else will execute code if there is a winner or if everyone dies.
                alert(results);                                                                         // This gives the user the results
                break;                                                                                  // This puts an end to all this craziness. If a winner is determined before the ten rounds
                                                                                                        // are over this ends the rounds
            }                                                                                           // End of if else statement
        }                                                                                               // End of for loop
    }                                                                                                   // End of the fight function
//______________________________Start of winnerCheck function___//
    function winnerCheck(){                                     // This function will measure the players health and determine if there is a winner
        console.log("in winnerCheck function");                 // This lets me know that my winnerCheck function is running
        var result="no winner";                                 // This variable is for the result. it is set to 'no winner'
        if (competitorOne[2]<1 && competitorTwo[2]<1)           // This if statement will give the proper result after determining the winner ..Changed for array
        {                                                       // The first condition is to determine if the results of both players dropped below 1 health points during the same round.
            result = "You Both Die";                            // This result is if both players health points drop below 1 during the same round
        } else if(competitorOne[2]<1){                          // This else if condition determines if player one health drops below one first...Changed for array
            result =competitorTwo[0]+" WINS!!!";                // This is the result if player ones health drops below 1 first...Changed for array
        } else if (competitorTwo[2]<1){                         // This else if condition determines if player twos health drops below one first...Changed for array
            result = competitorOne[0]+" WINS!!!";               // This result occurs with player two's health drops below 1 first...Changed for array
        }                                                       // End of else if.
        return result;                                          // This returns the information computed by the winnerCheck function which determines the winner.
    }                                                           // End of winnerCheck function.

//____________________________End of winnerCheck function------//
    /*******  The program gets started below *******/
    console.log('program starts');      //This console log helps me determine the order which code is executed int the console.log.
    fight();                            //This calls the fight function. This is where the fight really begins.

})();                                   // End of self executing function.

