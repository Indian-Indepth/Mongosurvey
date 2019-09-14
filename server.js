var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyparser = require('body-parser');

var PORT = 3000;
var User = require("./models/personalinfoModel.js.js.js");

var app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
// for hte form data, use bodyparser
app.use( bodyparser.json() );
app.use( bodyparser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect("mongodb://localhost/userdb", { useNewUrlParser: true });

// simulate posting data

// var testData = {
//   name: "Sheleeza Dunno",
//   phoneNumber: "416-999-9999",
//   profilePic: "https://www.shadyladiestours.com/wp-content/uploads/2017/07/profile-pic-placeholder.jpg",
//   height: "5'9",
//   weight: "60kg",
//   fitnessGoal: "Tone Muscles",
//   motivation: "Lack of Equipment",
//   personalTraining: "false",
//   trainingExperience: "i haven't left the couch. like donuts",
//   trainerExpectation: "to want to leave my house",
//   currentExercise: "false",
//   physicalLimit: "false",
//   currentActivities: "Hiking and swimming",
//   excerciseWeekly: "Moderate (1-5hr)",
//   tabaccoUse: "None",
//   alcoholUse: "High (More than 5 a week)",
//   medsHealth: "Vitamins and coffee"
// }


// User.create(testData)
// .then(function( resultData ) {
//   console.log( `successfully inserted data`, resultData );
//   process.exit(1);
//   //res.json( resultData );
// })
// .catch(function(err) {
//   console.log(` oh shit, that didntwork out. try later n`);
//   //res.json(err);
// });



app.post("/submit", function(req, res) {
  console.log( ` POST submit received, data:`, req.body );

  User.create(req.body)
    .then(function( resultData ) {

      res.json( resultData );
    })
    .catch(function(err) {

      res.json(err);
    });
});


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
