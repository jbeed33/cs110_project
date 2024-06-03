const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const app = express();
const port = 8080;
const MongoStore = require("connect-mongo");
const cors = require("cors");
const UserRoutes = require("./routes/UserRoutes");
const AdminRoutes = require("./routes/AdminRoutes");
const AuthRoutes = require("./routes/AuthRoutes");
const ChatRoutes = require("./routes/ChatRoutes");

const FilterRoutes = require("./routes/FilterRoutes");
const bodyParser = require("body-parser");
const passportSetup = require("./config/passport-setup");
const session = require("express-session");

require("dotenv").config();

const AuthControl = require("./controllers/AuthController");

const uri = `mongodb+srv://joshua:${process.env.DB_PASSWORD}@cluster0.ibmwof6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//Middleware

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    store: MongoStore.create({
      mongoUrl: uri,
      collectionName: "sessions",
      dbName: "cs110_project_db",
    }),
  })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//Middleware Routes
app.use("/api/user", UserRoutes); // Break up routes for seperate files.
app.use("/api/admin", AdminRoutes); // Break up routes for seperate files.
app.use("/api/filter", FilterRoutes); // Break up routes for seperate files.
app.use("/api/auth", AuthRoutes); // Break up routes for seperate files.
app.use("/api/chat", ChatRoutes); // Break up routes for seperate files.

//Test the authenticate middleware
app.get("/", (req, res) => {
  const userId = req.session || null;
  res.send("This is the userId: " + JSON.stringify(userId));
});

app.get("/test", (req, res) => {
  const userId = req.session || null;
  res.send("This is the userId: " + JSON.stringify(userId));
});

//redirect for google auth
app.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    // TO DO: should redirect to the signup page or the dashboard depending on if the user is already a user or not.
    console.log("Called redirect");
    console.log(req.user.id);
    console.log(req.session);
    console.log("user authencation: ", req.isAuthenticated());
    if (req.newUser === true) {
      res.redirect("http://localhost:3000/signup");
    } else if (req.newUser) {
      res.redirect("http://localhost:3000/dashboard");
    } else {
      res.redirect("http://localhost:3000");
    }
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
