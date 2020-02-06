var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here

	var qNAme = request.query.name;
	var qDesc = request.query.description;

	var newFriend = {
		"name": qName,
		"description": qDesc,
		"imageURL": "https://lorempixel.com/400/400/profile"
	}

	console.log(newFriend);
	data.friends.push(newFriend);

	response.render('index', data);
 }