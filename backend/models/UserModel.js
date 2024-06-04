const { Schema, mongoose } = require("mongoose");

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  grade: {
    type: String,
    enum: ["freshman", "sophomore", "junior", "senior", "graduate", "phd"],
    required: true,
  },
  type: {
    type: String,
    enum: ["tutor", "student", "both"],
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  options: {
    type: String,
    enum: ["remote", "in-person", "both"],
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxlength: 300,
  },
  subjectHelp: {
    type: String,
    required: true,
  },
  messageGroups: [],
});

module.exports = mongoose.model("user", userSchema, "users");
