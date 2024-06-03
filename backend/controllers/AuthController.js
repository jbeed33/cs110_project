const AuthModel = require("../models/AuthModel");

async function authenticate(req, res, next) {
  console.log("user authentication: ", req.isAuthenticated());
  if (req.isAuthenticated()) {
    const authId = req.user;
    user = await AuthModel.findById(authId);

    if (user) {
      req.userId = user.userId; //set on request object the userid
      return next(); // continue to next middleware or function
    } else {
      //The user id did not appear in the database.
      return res.redirect("http://localhost:3000/login");
    }
  } else {
    return res.send("Unauthenticated");
  }
}

module.exports = { authenticate };
