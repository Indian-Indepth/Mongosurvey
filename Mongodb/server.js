var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyparser = require('body-parser');

var PORT = 3000;
var User = require("./models/trainersurvey.js");

var app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
// for hte form data, use bodyparser
app.use( bodyparser.json() );
app.use( bodyparser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect("mongodb://localhost/trainerdb", { useNewUrlParser: true });

// simulate posting data

var testData = {
  name: "Sheleeza Dunno",
  phoneNumber: "416-999-9999",
  profilePic: "https://www.shadyladiestours.com/wp-content/uploads/2017/07/profile-pic-placeholder.jpg",
  specialize: "kettle bell and yoga",
  recentSuccess: "a client who lost 200lbs",
  experience: "5 years",
  personality: "my training style is energentic and fun",
  testimonial: "all good ones",
  workoutPlan: "a few different ones based on weight",
  trainerExpectation: "to want to leave my house",
}


User.create(testData)
.then(function( resultData ) {
  console.log( `successfully inserted data`, resultData );
  process.exit(1);
  //res.json( resultData );
})
.catch(function(err) {
  console.log(` oh shit, that didntwork out. try later n`);
  //res.json(err);
});



// app.post("/train", function(req, res) {
//   console.log( ` POST submit received, data:`, req.body );

//   User.create(req.body)
//     .then(function( resultData ) {

//       res.json( resultData );
//     })
//     .catch(function(err) {

//       res.json(err);
//     });
// });


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
