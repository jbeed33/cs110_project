let express = require("express");
let userController = require("../controllers/UserController");

let router = express.Router();

router.get("/:id", async (req, res) => {
  let userId = req.params.id;
  console.log(userId);
  let user = await userController.getUser(userId);
  if (user === null) {
    return res
      .status(404)
      .json({ message: "could not find user. Please try again" });
  }
  return res.status(200).json(user);
});

router.delete("/:id", async (req, res) => {
  let userId = req.params.id;
  console.log(userId);
  let user = await userController.deleteUser(userId);
  if (user === null) {
    return res
      .status(404)
      .json({ message: "could not delete user. Please try again" });
  }
  return res.status(200).json(user);
});

router.put("/:id", async (req, res) => {
  console.log(req.body);
  result = await userController.updateUser(req.params.id, req.body);

  if (result === null || result === undefined) {
    return res.status(404).send("Could not update user. Please try again");
  }

  return res.status(200).send(result);
});

router.post("/", async (req, res) => {
  let newUser = req.body;
  // TO DO: Need to check if user already exsists id, will be passed by cookie
  let user = await userController.createUser(newUser);
  if (user === null) {
    return res
      .status(404)
      .json({ message: "Could not create user. Please try again" });
  }
  return res.status(200).json(user);
});

module.exports = router;
