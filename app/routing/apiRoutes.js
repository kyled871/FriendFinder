const path = require("path");
const friendsData = require("../data/friends.js")

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData)
    });

    app.post("/api/friends", function(req, res) {

        let newFriend = req.body
        let scoresArr = [];
        
        // takes newFriends scores and puts them into their own array
        for (let i = 0; i < newFriend.scores.length; i++) {
            
            scoresArr.push(parseInt(newFriend.scores[i]));
            
        };
        
        newFriend.scores = scoresArr;

        let comparisonArr = [];
        console.log(friendsData)

        for (let i = 0; i < friendsData.length; i++) {
            let currentComparison = 0;

            for (let j = 0; j < newFriend.scores.length; j++) {
    
                // Math.abs returns absolute value (no zeros)
                currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j])
    
            };
            
            comparisonArr.push(currentComparison);

        }



        // lower number is a better match
        let bestMatchPosition = 0;
        for (let i = 1; i < comparisonArr.length; i++) {

            if (comparisonArr[i] <= comparisonArr[bestMatchPosition]) {
                bestMatchPosition = i;
            }
        }

        // the match is the friend with the most matches
        let match = friendsData[bestMatchPosition];

        // reply with json obj of best match
        res.json(match);

        // adds new friend to api friends data array for later use
        friendsData.push(newFriend);
    });

    
}