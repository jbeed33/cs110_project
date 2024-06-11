let express = require("express");
let router = express.Router();
let MessageController = require("../controllers/MessageController");
let UserController = require("../controllers/UserController");

const AuthController = require("../controllers/AuthController");

//create chat group
router.post(
  "/group/:receiverID",
  AuthController.authenticate,
  async (req, res) => {
    try {
      const sender = req.userId;
      const receiver = req.params.receiverID;
      console.log("create chat group called reciever: ", receiver);

      let confirmation = await MessageController.createGroup(sender, receiver);
      console.log(confirmation);
      if (confirmation != null) {
        //add group id to both userAccounts to keep track of.
        MessageController.addGroupIdToUserAccount(sender, confirmation._id);
        MessageController.addGroupIdToUserAccount(receiver, confirmation._id);

        res.status(201).json({ message: "Group successfully created" });
      } else {
        res
          .status(409)
          .json({ message: "Could not create group. Please try again" });
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "An error occurred. Please try again" + error });
    }
  }
);

//leave chat group
router.delete("/group", AuthController.authenticate, (req, res) => {});

//get chat blurbs that user is apart of
router.get("/group", AuthController.authenticate, async (req, res) => {
  let userId = req.userId;
  const user = await UserController.getUser(userId);
  const userGroups = user.messageGroups;

  try {
    let newUserGroupPromises = userGroups.map(async (groupId) => {
      let group = await MessageController.retrieveGroup(groupId);
      return group;
    });

    let newUserGroups = await Promise.all(newUserGroupPromises);

    let finalUserGroups = newUserGroups.map(async (group) => {
      //Text mate refers to the person in which the user is chatting with.
      const textMate = group.users.find((user) => {
        return userId != user;
      });

      let textMateUser = await UserController.getUser(textMate);

      textMateUser = {
        userId: textMateUser.userId,
        userImage: textMateUser.image || null,
        userName: textMateUser.userName,
      };

      const lastMsg = group.lastMessage;

      return {
        chatPartner: textMateUser,
        lastMessage: lastMsg,
        chatId: group._id,
      };
    });

    finalUserGroups = await Promise.all(finalUserGroups);

    res.status(200).json({ userGroups: finalUserGroups });
  } catch (error) {
    console.error("Error Occured", error);
  }
});

// retrieve all messages from chat group
router.get(
  "/messages/:groupId",
  AuthController.authenticate,
  async (req, res) => {
    try {
      const messages = await MessageController.retrieveMessagesOfGroup(
        req.params.groupId
      );
      res.status(200).json(messages);
    } catch (error) {
      console.error(
        "An error occurred when posting message. Please try again",
        error
      );
      return res.status(500).send("An error occurred. Please try again");
    }
  }
);

//create message on a chat group
router.post(
  "/messages/:groupId",
  AuthController.authenticate,
  async (req, res) => {
    try {
      console.log(req.userId);
      console.log("called createmessage route");
      const groupId = req.params.groupId;
      const sender = req.userId;

      const receiver = req.body.receiver;
      const message = req.body.message;

      let confirmation = await MessageController.addMessageToChatGroup(
        message,
        groupId,
        sender,
        receiver
      );
      console.log(confirmation);
      res.status(201).json(confirmation);
    } catch (error) {
      console.error(
        "An error occurred when posting message. Please try again",
        error
      );
      return res.status(500).send("An error occurred. Please try again");
    }
  }
);

module.exports = router;
