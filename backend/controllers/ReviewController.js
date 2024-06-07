const Review = require("../models/ReviewModel");
const UserController = require("../controllers/UserController");

async function createReview(senderId, review, senderName) {
  if (senderId && review && senderName) {
    return await new Review(senderId, review, senderName);
  } else {
    return null;
  }
}

async function addReview(senderId, reviewMsg, receiverId) {
  if (senderId && reviewMsg && receiverId) {
    //Getter sender user name
    const foundSender = await UserController.getUser(senderId);
    const review = await createReview(
      senderId,
      reviewMsg,
      foundSender.userName
    );

    if (review === null) {
      return null;
    }

    let updatedUser = await UserController.updateUser(receiverId, {
      $push: { reviews: review },
    });
    return updatedUser;
  } else {
    return null;
  }
}

async function getAllReviews(userID) {
  if (userID) {
    const user = await UserController.getUser(userID);

    if (user) {
      return user.reviews;
    }

    return null;
  } else {
    return null;
  }
}

module.exports = {
  addReview,
  getAllReviews,
};
