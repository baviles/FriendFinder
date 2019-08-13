var friends = require("../data/friends.js");

// routing apiRoutes w/ app.get and app.post functions
module.exports = function(app) {
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){

    var bestMatch = {
        name : "",
        photo : "",
        friendDifference: 1000

    };

    // take the result of the users survey POST and parse it
    var userData = req.body;
    var userScores = userData.scores;

// To take the results of the user's name and photo, other than the survey questions, to post and parse it
    var userName = userData.name;
    var userPhoto = userData.photo

    var totalDifferences = 0;

    // loop through the friends data array of objects to get each friends scores
    for (var i = 0; i < friends.length - 1; i++) {
        console.log(friends[i].name);
        totalDifferences = 0;

        for (var j = 0; j < 10; j++ ){
            totalDifferences += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            if (totalDifferences <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifferences;
            }
        }
        
    }

    friends.push(userData);

    res.json(bestMatch);
        
    });

};

