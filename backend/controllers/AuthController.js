const AuthModel = require("../models/AuthModel");

async function authenticate(req, res, next) {
  const authId = req.user?.id;
  const userFirstTime = req.user?.firstTime;

  // if authId is undefined, that means the user has not been through the authentication process.
  if (authId === undefined) {
    return res
      .status(401)
      .send({ message: "authorization failed. Please try again." });
  }

  user = await AuthModel.findById(authId);

  if (user) {
    req.userId = user.userId; //set on request object the userid
    req.newUser = userFirstTime;
    next(); // continue to next middleware or function
  } else {
    //The user id did not appear in the database.
    return res
      .status(401)
      .send({ message: "authorization failed. Please try again." });
  }
}

module.exports = { authenticate };
