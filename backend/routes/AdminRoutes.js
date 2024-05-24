let express = require("express");
let userController = require("../controllers/UserController");
let adminController = require("../controllers/AdminController");

let router = express.Router();

//Admin can get all users.
router.get("/", async (req, res) => {
  // TO DO: cookies will be used for authentication

  let user = await adminController.getAllUsers();
  if (user === null) {
    return res
      .status(404)
      .json({ message: "could not retrieve any users. Please try again" });
  }
  return res.status(200).json(user);
});

//Admin can delete a user.
router.delete("/:userId", async (req, res) => {
  let userId = req.params.userId;
  console.log(userId);
  let user = await userController.deleteUser(userId);
  if (user === null) {
    return res
      .status(404)
      .json({ message: "could not delete user. Please try again" });
  }
  return res.status(200).json(user);
});

//Admin can edit a user.
router.put("/:userId", async (req, res) => {
  let userId = req.params.userId;
  result = await userController.updateUser(userId, req.body);
  if (result === null || result === undefined) {
    return res.status(404).send("Could not update user. Please try again");
  }

  return res.status(200).send(result);
});

module.exports = router;
