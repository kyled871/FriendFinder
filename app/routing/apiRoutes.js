const path = require("path");
const friendsData = require("../data/friends.js")

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.send(friendsData)
    });

    app.post("api/friends", function(req, res) {
        res.send('friends post');
    })

    
}