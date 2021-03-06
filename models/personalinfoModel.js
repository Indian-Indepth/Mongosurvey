var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({

  name: {
    type: String,
    trim: true,
    required: "name is Required"
  },
  
  phoneNumber: {
    type: String,
    trim: true,
    required: "Password is Required"
  },

  height: {
    type: String,
    trim: true,
  },

  weight: {
    type: String,
    trim: true,
  },

  fitnessGoal: {
    type: String,
    trim: true
  },

  motivation: {
    type: String,
    trim: true
  },

  personalTraining: {
    type: String,
    trim: true
  },

  trainingExperience: {
    type: String,
    trim: true
  },

  trainerExpectation: {
    type: String,
    trim: true
  },

  currentExercise: {
    type: String,
    trim: true
  },

  physicalLimit: {
    type: String,
    trim: true
  },

  currentActivities: {
    type: String,
    trim: true
  },

  excerciseWeekly: {
    type: String,
    trim: true
  },

  tabaccoUse:{
    type: String,
    trim: true
  },

  alcoholUse: {
    type: String,
    trim: true
  },

  medsHealth: {
    type: String,
    trim: true
  }

});


var User = mongoose.model("User", UserSchema);

module.exports = User;
