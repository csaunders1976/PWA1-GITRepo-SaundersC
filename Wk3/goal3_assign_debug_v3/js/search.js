/*
 Chelsie Saunders
 PWA1-01 Online
 Debug Week #3
 October 16, 2014
 */
// Create privatized scope using a self-executing function
(function(){
    // this opens a self executing function. It looks correct.
// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
    var resultsDiv = document.getElementById("results"),                        // Changed to proper camel-case
        searchInput = document.forms[0].search,                                 // I believe this variable gets the value that is typed into the search box.
        currentSearch = ''                                                      // this variable lets me know that the current search is empty but is and input for a string
        ;                                                                       // this ends the list of variables.
// Validates search query
    var validate = function(query){                                             // this is an anonymous functions. I fixed the spelling
// Trim whitespace from start and end of search query                           // these while loops are for validation
        while(query.charAt(0) === " "){                                         // this while loop condition asks if the input is left blank.
            query = query.substring(1, query.length);                           // this will return the entire string. Changed camel-case on subString to substring
        };                                                                       // end of while loop
        while(query.charAt(query.length-1) === "") {                            // this while loop condition is asking if the string is empty
            query = query.substring(0, query.length - 1);                       // returns the string for index 0 to the entire length of the string minus one. Changed camel-case on subString to substring
        };                                                                       // while loop  end.
// Check search length, must have 3 characters
        if(query.length < 3){                                               // this if condition asks if the query length is less than three characters
            alert("Your search query is too small, try again.");            // this alert runs if the query is less than three characters.
// (DO NOT FIX THE LINE DIRECTLY BELOW)
            searchInput.focus();                                            // highlights the input field
            return;                                                         // the if statement stops
        }                                                                   // this ends the if statement.
        search(query); // this is suppose to be a function call. The function is below the call. It is an anonymous function so the call needs to be places after the function itself.
    };                                                                      // this is the end of the validate function
// Finds search matches
    var search = function(query){                                           // This begins the search function.
// split the user's search query string into an array
        var queryArray = query.split(" ");                                      // turns the search into an array
// array to store matched results from database.js
        var results = [];                                                       // variable for the information in the database
// loop through each index of db array
        for(var i=0, j=db.length; i<j; i++) {                                    // for loop to go through all items in the database
// each db[i] is a single video item, each title ends with a pipe "|"
// save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');                                // variable to hold the title end of the video
            var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd);          // variable to hold the title of the video and make lower case.
// loop through the user's search query words
// save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {                  // for loop loops through all characters in the users query
                var qItem = queryArray[ii].toLowerCase();                       // variable to store query in array and in all lower case. The syntax for toLowerCase was incorrect. I fixed it
// is the keyword anywhere in the video title?
// If a match is found, push full db[i] into results array
                var compare = dbItem.indexOf(qItem);                            // variable to compare database item to query item
                if (compare !== -1) {                                           // if condition has an extra =//I was wrong.. this is fine
                    results.push(db[i]);                                        // puts the results in the db array
                };                                                               // End of if statement. Is semi-colon necessary?
            };                                                                   // End of for loop
        }; // End of for loop

        results.sort();                                                 // sorts the items in the results array and returns them
// Check that matches were found, and run output functions
        if(results.length === 0){                                         // if condition asks if there is no match. Corrected the assignment operator to a ===
            noMatch();
            // function cal for noMatch...it is an anonymous function so there is a problem
        }else{ // 'else' there is a match
            showMatches(results);                                       // since there is a match showMatches(results); function is called
        };                                                               // end of if statement
    };                                                                   // end of search function
// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
    var noMatch = function(){                                           // noMatch function is anonymous. It needs to change because it is called before
        var html = ''+ // var for what will be printed on doc if there is not match
                '<p>No Results found.</p>'+                             // html paragraph that will be added to document if there is no match
                '<p style="font-size:10px;">Try searching for "JavaScript". Just an idea.</p>' // an gentle suggestion that will be printed if there is not match
            ;                                                           // end of html variable
        resultsDiv.innerHTML = html;                                    // noMatch function return
    };                                                                   // end of noMatch function
// Put matches into page as paragraphs with anchors
    var showMatches = function(results){                                // this anonymous function gives the results of a matched search
// THE NEXT 4 LINES ARE CORRECT.
        var html = '<p>Results</p>', // html variable will give the value of what will be printed out in the document if there is matches
            title,                                                      // title variable has not been given a value
            url                                                         // url variable has not been given a value
            ;                                                           // end of variables
// loop through all the results search() function
//
        for(var i=0, j=results.length; i<j; i++){                       // for loop goes through all the results

// title of video ends with pipe
// pull the title's string using index numbers
            titleEnd = results[i].indexOf('|');                         // global variable... may cause future problems. Should probably declared outside of the function
            title = results[i].substring(0, titleEnd);                  // variable to return results array
// pull the video url after the title
            url = results[i].substring(results[i].indexOf('|')+1, results[i].length); //variable that concatenates the url of the result
// make the video link - THE NEXT LINE IS CORRECT.
            html += '<p><a href=' + url + '>' + title + '</a></p>';     // concatenation of the result print out
        }                                                               // end of for loop
        resultsDiv.innerHTML = html;                                    //THIS LINE IS CORRECT.
    }; // end of showMatches function
// The onsubmit event will be reviewed in upcoming Course Material.
// THE LINE DIRECTLY BELOW IS CORRECT
    document.forms[0].onsubmit = function() {                           // function
        var query = searchInput.value;                                  // event call onsubmit
        validate(query); // call validate function with query as its parameter. I corrected the spelling of the function
// return false is needed for most events - this will be reviewed in upcoming course material
// THE LINE DIRECTLY BELOW IS CORRECT
        return false; //ends function
    };
})(); //End of self executing function.