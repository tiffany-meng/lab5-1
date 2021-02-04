var data = require("../data.json");

exports.addFriend = function(request, response) { 
  console.log("hello");
	var name = request.query.name;
  var description = request.query.description;
  var newFriend = {
    "name": name,
    "description": description,
    "imageUrl": "https://loremflickr.com/320/240/people"
  }
  console.log(newFriend);
  data.friends.push(newFriend);
 }
