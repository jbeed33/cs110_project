const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const app = express();
const port = 8080;
const UserRoutes = require("./routes/UserRoutes");
const AdminRoutes = require("./routes/AdminRoutes");
const AuthRoutes = require("./routes/AuthRoutes");
const bodyParser = require("body-parser");
const passportSetup = require("./config/passport-setup");
const session = require("express-session");

require("dotenv").config();

const AuthControl = require("./controllers/AuthController");

const uri = `mongodb+srv://joshua:${process.env.DB_PASSWORD}@cluster0.ibmwof6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//Middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//Middleware Routes
app.use("/api/user", UserRoutes); // Break up routes for seperate files.
app.use("/api/admin", AdminRoutes); // Break up routes for seperate files.
app.use("/api/auth", AuthRoutes); // Break up routes for seperate files.

//Test the authenticate middleware
app.get("/", AuthControl.authenticate, (req, res) => {
  const userId = req.userId || null;
  res.send(process.env.HELLO);
});

//redirect for google auth
app.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    res.send(req.user);
  }
);

app.listen(port, () => {
  connectToDB()
    .then(() => console.log("connected to Database..."))
    .then(() => console.log(`Listening on port ${port}`))
    .catch((e) => console.log("error occured:", e));
});

async function connectToDB() {
  // Connect the client to the server	(optional starting in v4.7)
  mongoose
    .connect(uri, {
      dbName: "cs110_project_db",
    })
    .catch((err) => console.error(err));
}
