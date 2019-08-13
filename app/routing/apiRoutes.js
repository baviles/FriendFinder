var friends = require("../data/friends.js");

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


    var userData = req.body;
    var userScores = userData.scores;

    var userName = userData.name;
    var userPhoto = userData.photo

    var totalDifferences = 0;

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

