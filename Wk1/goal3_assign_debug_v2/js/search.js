/*
Chelsie Saunders
PWA1-01 Online
October 5, 2014
 */

// Create privatized scope using a self-executing function
(function(){                                                        // this opens a self executing function. It looks correct.
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),            // this var's name is not camelCased correctly. It should still run but is not best practice. It is an unused variable as well.
		searchInput = document.forms[0].search,                     // I believe this variable gets the value that is typed into the search box.
		currentSearch = ''                                          // this variable lets me know that the current search is empty but is and input for a string
	;                                                               // this ends the list of variables.
	
	// Validates search query
	var validqte =/*=*/ function(query){                            // this is an anonymous functions. it should only have one '='.
		
		// Trim whitespace from start and end of search query       // these while loops are for validation
		while(query.charAt(0) = " "){                               // this while loop condition asks if the input is left blank. It needs more equal signs
			query = query.substring(1, query.length);               // this will return the entire string
		};                                                          // end of while loop
		while(query.charAt(query.length-1) === ""){                 // this while loop condition is asking if the string is empty
			query = query.substring(0, query.length-1);             // returns the string for index 0 to the entire length of the string minus one
		;                                                           // while loop needs a curly brace. This is where this is suppose to end.
		
		// Check search length, must have 3 characters
		if(query.length < 3){                                       // this if condition asks if the query length is less than three characters
			alert("Your search query is too small, try again.");    // this alert runs if the query is less than three characters. I had to fix it to keep my comments organizes. I could not help myself
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();                                    // highlights the input field
			return;                                                 // the if statement stops
		};                                                          // this ends the if statement. does not require semi-colon
		
		search(query);                                              // this is suppose to be a function call. The function is below the call. It is an anonymous function so the call needs to be places after the function itself.
	};                                                              // this is the end of the validate function
	
	// Finds search matches
	var search = function(query)                                    //This begins the search function. It needs an opening curly brace.
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");
		
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qitem = queryArray[ii].tolowercase();
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){
					results.push(db[i]);
				};
			;
		;
		
		results.sort();
		
		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();                                   //End of self executing funtion.