let express = require("express");
let router = express.Router();
const passport = require("passport");
const AuthController = require("../controllers/AuthController");

//authenticate with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

//sign out user
router.delete("/logout", AuthController.authenticate, (req, res) => {
  //delete the cookie
  res.clearCookie("connect.sid");
  res.send("User has been logged out.");
});

module.exports = router;
