const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  user: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },

  name: {
    type: String,
    required: true,
    unique: false,
  },

  date: {
    type: String,
    trim: true,
    required: true,
    unique: false,
  },

  isCompleted: {
    type: String,
    required: true,
    unique: false,
  },
});


const Task = mongoose.model("Task", taskSchema);

module.exports = Task ;
