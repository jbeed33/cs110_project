const AuthModel = require("../models/AuthModel");

async function authenticate(req, res, next) {

    if (req.isAuthenticated()) {
      const authId = req.user;
      user = await AuthModel.findById(authId);

    
      // if authId is undefined, that means the user has not been through the authentication process.
    if (authId === undefined) { 
      return res
        .status(401)
        .send({ message: "authorization failed. Please try again." });
    }

    if (user) {
      req.userId = user.userId; //set on request object the userid
      req.role = user.role || null;
      return next(); // continue to next middleware or function
    } else {
      //The user id did not appear in the database.
      return res.redirect("http://localhost:3000/");
    }
  } else {
    return res.json({ msg: "Unauthorized" });
  }
}
}
module.exports = { authenticate };
