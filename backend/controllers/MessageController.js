const Message = require("../models/MessageModel");
const GroupModel = require("../models/GroupModel");
const UserController = require("../controllers/UserController");

async function createMessage(sender, receiver, message) {
  if (sender && receiver && message) {
    return await new Message(sender, receiver, message);
  } else {
    return null;
  }
}

async function createGroup(sender, receiver) {
  if (sender && receiver) {
    const existingChat = await GroupModel.findOne({
      users: { $all: [sender, receiver] },
    });

    console.log("ExistingChat: ", existingChat);

    if (existingChat) {
      return null;
    }

    return await GroupModel.create({ users: [sender, receiver] });
  } else {
    return null;
  }
}

async function addGroupIdToUserAccount(userId, groupId) {
  if (groupId) {
    UserController.updateUser(userId, { $push: { messageGroups: groupId } });
  } else {
    return null;
  }
}

async function addMessageToChatGroup(message, groupId, sender, receiver) {
  const msg = new Message(sender, receiver, message);
  if (message && groupId) {
    return await GroupModel.findOneAndUpdate(
      { _id: groupId },
      {
        $push: { messages: msg },
        lastMessage: { message: msg.message, publishDate: msg.timeStamp },
      },
      {
        new: true,
      }
    );
  } else {
    return null;
  }
}

async function retrieveMessagesOfGroup(groupId) {
  console.log("called retrieve message");
  if (groupId) {
    let groupMessages = await GroupModel.findById(groupId);
    return groupMessages.messages;
  } else {
    return null;
  }
}

async function retrieveGroup(groupId) {
  console.log("Group id: ", groupId);
  console.log("called retrieve Group");
  if (groupId) {
    let group = await GroupModel.findById(groupId);
    return group;
  } else {
    return null;
  }
}

module.exports = {
  createGroup,
  addGroupIdToUserAccount,
  addMessageToChatGroup,
  retrieveMessagesOfGroup,
  retrieveGroup,
};
