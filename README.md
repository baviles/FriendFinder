# FriendFinder

# Demo

https://freind-finders-app.herokuapp.com/


# Description

Friend Finder implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

# Code Explanation

	
  •	Our server.js file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and     also the routes, which we have externalized
	
  •	There are 2 separate HTML files (home.html and survey.html) that serve as the front-end portion of our code; they           determine what the user sees (the homepage and the survey, which will also show the resulting best match)
	
  •	Our 2 routing files (htmlRoutes.js and apiRoutes.js) determine the back-end logic (based on the request being made, the     response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is         accessed, and the API routes send back existing content in our server-side data or add new friends.
  
  
 # Technologies Used
	
  •	JavaScript
	
  •	jQuery
	
  •	node.js
	
  •	Express.js
	
  •	HTML
	
  •	Bootstrap
