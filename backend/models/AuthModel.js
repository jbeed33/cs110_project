const { Schema, mongoose } = require("mongoose");

const authSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("AuthModel", authSchema, "auth");
