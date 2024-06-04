let express = require("express");
let userController = require("../controllers/UserController");
let adminController = require("../controllers/AdminController");

let router = express.Router();

const AuthController = require("../controllers/AuthController");

// Admin can get all users.
router.get("/", AuthController.authenticate, async (req, res) => {
  try {
    // TO DO: cookies will be used for authentication
    let user = await adminController.getAllUsers();
    if (user === null) {
      return res
        .status(404)
        .json({ message: "Could not retrieve any users. Please try again" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again" });
  }
});

// Admin can delete a user.
router.delete("/:userId", AuthController.authenticate, async (req, res) => {
  try {
    let userId = req.params.userId;
    console.log(userId);
    let user = await userController.deleteUser(userId);
    if (user === null) {
      return res
        .status(404)
        .json({ message: "Could not delete user. Please try again" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again" });
  }
});

// Admin can edit a user.
router.put("/:userId", AuthController.authenticate, async (req, res) => {
  try {
    let userId = req.params.userId;
    let result = await userController.updateUser(userId, req.body);
    console.log(userId);
    console.log(result);
    if (result === null || result === undefined) {
      return res.status(404).send("Could not update user. Please try again");
    }
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred. Please try again");
  }
});

module.exports = router;
