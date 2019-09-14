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



// app.post("/trainer", function(req, res) {
//   console.log( ` POST submit received, data:`, req.body );

//   User.create(req.body)
//     .then(function( resultData ) {

//       res.json( resultData );
//     })
//     .catch(function(err) {

//       res.json(err);
//     });
// });


app.get("/trainer", function(req, res) {

  db.trainer.find({})
    .then(function(dbtrainer) {

      res.json(dbtrainer);
    })
    .catch(function(err) {

      res.json(err);
    });
});


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

app.post("/api/trainee/id", function(req, res) {

  db.traineeId.create(req.body)
    .then(function(dbtrainer) {

      return db.users.findOneAndUpdate({}, { _id: (trainerId) }, { $push: {traineeRequest: [ _id: traineeId ]});
    });  db.users.update()
  
    .then(function(dbLibrary) {
     
      res.json(dbLibrary);
    })
    .catch(function(err) {
    
      res.json(err);
    });
});

app.get("/trainee-requests", function(req, res) {
  // Using our Library model, "find" every library in our db and populate them with any associated books
  db.traineeId.find({})
    // Specify that we want to populate the retrieved libraries with any associated books
    .populate("books")
    .then(function(dbtrainer) {
      // If any Libraries are found, send them to the client with any associated Books
      res.json(dbtrainer);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});



// Fridays Steps
// Expand API to include:
// /api/trainer/all — lists all the trainers
//  a) make a router on server.js
//  b) add code to make mongo call db.users.findAll( { type: “trainer” } );

// Expand user schema to include:
// Type: (“trainer” | “trainee”)
// traineeRequest: []. 
// traineeList: []

// Save the user info + type=“trianeee” and add to the trainer “traineeRequest”.
// /api/trainee/:id?:
//   a) db.users.update()
//       db.users.update( { _id: (trainerId) }, { $push: {ttraineeRequest: [ _id: traineeId ]
 
// /api/trainee-requests
//   List the trainee requesters for this trainer
//   db.users.find( { _id: ((trianerId)) } );
//   Could use populate to get the trainee 

// /api/trainee-accept
//    Either accept trainee and move from traineeRequest list to traineeList, or reject them, and remove from traineeRequest list.
