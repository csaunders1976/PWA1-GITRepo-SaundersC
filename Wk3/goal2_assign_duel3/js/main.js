/*
Chelsie Saunders
Date: October 10, 2014
Assignment: Duel2
 */

//self-executing function
(function(){                                                    //This gets the ball rolling
    //console.log("Eat the Cookies!!!");                        //This was so I could test to see if I linked up my Javascript to my HTML document.

    // Grab all the needed elements in the the DOM
    var ernie_txt = document.querySelector("#Ernie");           // I got the text for Ernie
    var bert_txt = document.querySelector("#Bert");             // I got the text for Bert
    var round_txt = document.querySelector("h5");               // I got the text for the Round
    var button = document.getElementById("fight_btn");          // I got the button

    button.addEventListener("click", eatCookies, false);          //click the button and the cookie eating begins!

//___________________________________Player Objects______________________________________________________//

var competitors =[                          //Created objects for players
    {
    name:"Ernie",                           // Player one gets a name
    damage: 20,                             // Player one's potential damage
    health: 100                             // Player one's cookies
    },                                      // end of object[0]
    {
    name: "Bert",                           // Player two gets a name
    damage: 20,                             // Player two's potential damage
    health: 100                             // Player two's cookies
    }                                       // end of object[2]
];                                          // end of object

    //initiate round
    var round=1;                                    // This variable is for the round that will be incremented for the for loop below

    round_txt.innerHTML = "Click \'Eat Cookies\' button to start!";                 //text for initial instructions
    ernie_txt.innerHTML = competitors[0].name + ": " + competitors[0].health;       //prints Ernies info
    bert_txt.innerHTML = competitors[1].name + ": " + competitors[1].health;        //prints Berts info

function onClick() {                                                                //starts the eatCookies function when the button is clicked
    eatCookies()
}
    function eatCookies(){                                                          // This function is for the cookie consumption itself

        ernie_txt.innerHTML = competitors[0].name + competitors[0].health;          // prints Ernie's name and health
        ernie_txt.innerHTML = competitors[1].name + competitors[1].health;          // prints Ernie's name and health

            var f1 = Math.floor(Math.random() * competitors[0].damage + competitors[0].damage * .5);                // This formula creates a random number for Ernies damage
            var f2 = Math.floor(Math.random() * competitors[1].damage + competitors[1].damage * .5);                // This formula creates a random number for Berts damage
       //   console.log(f1);                                                        // This console.log is to see if my formula worked for f1
       //   console.log(f2);                                                        // This console.log is to see if my formula worked for f2
            //inflict damage
            competitors[0].health-=f1;                                              // This subtracts the random number of damage points to Ernie's health
            competitors[1].health-=f2;                                              // This subtracts the random number of damage points to Bert's health

            console.log(competitors[0].health, competitors[1].health);              // logs health of each player
            //check for victor
            var results = winnerCheck();                                            // This variable is a function call that captures the result of the winnerCheck function
            console.log(results);                                                   // logs results

            round_txt.innerHTML = 'Round #' + round + " Results:";                  // This logs the result or information returned by the winnerCheck function
            round++;
            if (results==="no winner"){                                             // This if statement helps determine if there is a winner or if the rounds need to to continue

                ernie_txt.innerHTML = competitors[0].name + ":  " + competitors[0].health;  //This prints Ernie's health is there is no winner
                bert_txt.innerHTML = competitors[1].name + ":  " + competitors[1].health;   //This prints Berts health is there is no winner

            } else{                                                                 // Else will execute code if there is a winner or if Ernie and Bert share the cookies.
                ernie_txt.innerHTML = results;
                bert_txt.innerHTML = "";

                button.removeEventListener("click", eatCookies, false);             // The button changes to Done and no longer runs the program

                document.querySelector('.buttonblue').innerHTML = 'DONE!!!';        // grabs the buttons text and sets it to DONE!

        }                                                                                               // End of for if else
    }                                                                                                   // End of the eatCookies function
//______________________________Start of winnerCheck function___//
    function winnerCheck(){                                     // This function will measure the players health and determine if there is a winner
        console.log("in winnerCheck function");                 // This lets me know that my winnerCheck function is running
        var result="no winner";                                 // This variable is for the result. it is set to 'no winner'
        if (competitors[0].health < 1 && competitors[1].health < 1)           // This if statement will give the proper result after determining the winner
        {                                                       // The first condition is to determine if the results of both players dropped below 1 health points during the same round.
            result = "Everyone got cookies!";                   // This result is if both players health points drop below 1 during the same round. For my game the cookies are  shared ;)
        } else if(competitors[0].health < 1){                          // This else if condition determines if player one health drops below one first...Changed for array
            result = competitors[1].name +" WINS!!!";                // This is the result if player ones health drops below 1 first...Changed for array
        } else if (competitors[1].health < 1){                         // This else if condition determines if player twos health drops below one first...Changed for array
            result = competitors[0].name +" WINS!!!";               // This result occurs with player two's health drops below 1 first...Changed for array
        }                                                       // End of else if.
        return result;                                          // This returns the information computed by the winnerCheck function which determines the winner.
    }                                                           // End of winnerCheck function.

//____________________________End of winnerCheck function------//
    /*******  The program gets started below *******/
    console.log('program starts');      //This console log helps me determine the order which code is executed int the console.log.

})();                                   // End of self executing function.

