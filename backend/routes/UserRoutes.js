let express = require("express");
const userController = require("../controllers/UserController");
const authController = require("../controllers/AuthController");
const AuthController = require("../controllers/AuthController");
const ReviewController = require("../controllers/ReviewController");

let router = express.Router();

//Get User
router.get("/", AuthController.authenticate, async (req, res) => {
  try {
    let userId = req.userId;
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

//Remove User
router.delete("/", AuthController.authenticate, async (req, res) => {
  try {
    let userId = req.userId;
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

//update User Profile
router.put("/", AuthController.authenticate, async (req, res) => {
  try {
    console.log(req.body);
    let result = await userController.updateUser(req.userId, req.body);
    if (result === null || result === undefined) {
      return res.status(404).send("Could not update user. Please try again");
    }
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred. Please try again");
  }
});

//Creating new user
router.post("/", AuthController.authenticate, async (req, res) => {
  try {
    const newUser = req.body;
    const userID = req.userId;

    // TO DO: Need to check if user already exists, id will be passed by cookie
    let user = await userController.createUser(newUser, userID);
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

//Get all reviews for user
router.get(
  "/reviews/:receiverId",
  AuthController.authenticate,
  async (req, res) => {
    try {
      const receiverID = req.params.receiverId;
      const reviews = await ReviewController.getAllReviews(receiverID);
      if (reviews) {
        res.status(200).json({ reviews: reviews });
      } else {
        return res
          .status(500)
          .json({ message: "Could not get reviews. Please try again" });
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "An error occurred. Please try again" });
    }
  }
);

//Post a review for a user
router.post(
  "/reviews/:receiverId",
  AuthController.authenticate,
  async (req, res) => {
    try {
      const sender = req.userId;
      const review = req.body.review;
      console.log(review);
      const receiver = req.params.receiverId;

      const confirmation = await ReviewController.addReview(
        sender,
        review,
        receiver
      );

      if (confirmation) {
        res.status(201).json({ message: "Review added" });
      } else {
        return res
          .status(500)
          .json({ message: "Could not add review. Please try again" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: " Error occurred. Could not add review. Please try again",
      });
    }
  }
);
module.exports = router;
