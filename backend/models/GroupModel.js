const mongoose = require("mongoose");

const lastMessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
});

// Define the main schema
const groupSchema = new mongoose.Schema({
  users: [
    {
      type: String,
    },
  ],
  lastMessage: {
    type: lastMessageSchema,
  },
  messages: [],
});

// Create the model
module.exports = mongoose.model("groupModel", groupSchema, "groups");
