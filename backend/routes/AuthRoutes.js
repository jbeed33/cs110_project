let express = require("express");
let router = express.Router();
const passport = require("passport");

//authenticate with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

//callback route for google to redirect to

module.exports = router;
