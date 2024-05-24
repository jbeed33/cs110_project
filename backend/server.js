const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const UserRoutes = require("./routes/UserRoutes");
const AdminRoutes = require("./routes/AdminRoutes");
const FilterRoutes = require("./routes/FilterRoutes");
const bodyParser = require("body-parser");
const uri =
  "mongodb+srv://joshua:beed1234@cluster0.ibmwof6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//Middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Middleware Routes
app.use("/api/user", UserRoutes); // Break up routes for seperate files.
app.use("/api/admin", AdminRoutes); // Break up routes for seperate files.
app.use("/api/filter", FilterRoutes); // Break up routes for seperate files.

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
