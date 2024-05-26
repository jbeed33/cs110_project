require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const AuthModel = require("../models/AuthModel");
const { v4: uuidv4 } = require("uuid");

passport.serializeUser((user, done) => {
  console.log("serialized user");
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log("deserializing user");
  try {
    let user = await AuthModel.findById(id);
    if (!user) {
      return done(null, false); // User not found
    }
    done(null, user); // User found
  } catch (err) {
    done(err); // Error occurred
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      //TO DO: Need to verify its a student account

      //check to see if user already exists
      let user = await AuthModel.findOne({ googleId: profile.id });
      if (user) {
        console.log("user already exists: ", user);
        done(null, user);
      } else {
        //create new user in database
        let newUser = await AuthModel.create({
          googleId: profile.id,
          userId: uuidv4(),
        });
        done(null, newUser);
      }
      console.log("Profile: ", profile);
    }
  )
);
