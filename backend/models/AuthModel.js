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
});

module.exports = mongoose.model("AuthModel", authSchema, "auth");
