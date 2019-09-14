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

  specialize: {
    type: String,
    trim: true,
  },

  training: {
    type: String,
    trim: true,
  },

  recentSuccess: {
    type: String,
    trim: true
  },

  experience: {
    type: String,
    trim: true
  },

  personality: {
    type: String,
    trim: true
  },

  testimonial: {
    type: String,
    trim: true
  },

 workoutPlan: {
    type: String,
    trim: true
  },


});


var User = mongoose.model("User", UserSchema);

module.exports = User;