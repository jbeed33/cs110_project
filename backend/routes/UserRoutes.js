let express = require("express");
let userController = require("../controllers/UserController");

let router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    let userId = req.params.id;
    console.log(userId);
    let user = await userController.getUser(userId);
    if (user === null) {
      return res
        .status(404)
        .json({ message: "Could not find user. Please try again" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let userId = req.params.id;
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

router.put("/:id", async (req, res) => {
  try {
    console.log(req.body);
    let result = await userController.updateUser(req.params.id, req.body);
    if (result === null || result === undefined) {
      return res.status(404).send("Could not update user. Please try again");
    }
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred. Please try again");
  }
});

router.post("/", async (req, res) => {
  try {
    let newUser = req.body;
    // TO DO: Need to check if user already exists, id will be passed by cookie
    let user = await userController.createUser(newUser);
    if (user === null) {
      return res
        .status(404)
        .json({ message: "Could not create user. Please try again" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again" });
  }
});

module.exports = router;
