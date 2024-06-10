const User = require("../models/UserModel");

async function getUser(userId) {
  const user = await User.findOne({ userId });
  console.log(user);

  if (user === null) {
    return null;
  } else {
    return user;
  }
}

async function deleteUser(userId) {
  const res = await User.deleteOne({ userId });
  console.log(res);

  if (res === null) {
    return null;
  } else {
    return res;
  }
}

async function updateUser(userId, updatedUser) {
  const filter = { userId };

  const user = await User.findOneAndUpdate(filter, updatedUser, {
    new: true,
  });

  console.log(user);

  if (user) {
    return user;
  } else {
    return null;
  }
}

async function createUser(user, userID) {
  console.log(user);
  if (user === null) {
    return null;
  }
  try {
    await User.create({
      userId: userID,
      userName: user.userName,
      grade: user.grade,
      type: user.type,
      school: user.school,
      options: user.options,
      field: user.field,
      description: user.description,
      subjectHelp: user.subjectHelp,
    });
    return "User Created";
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getGroupIds(userId) {
  if (userId) {
    let foundUser = await User.findOne({ userId: userId });
    return foundUser;
  } else {
    return null;
  }
}

module.exports = {
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
