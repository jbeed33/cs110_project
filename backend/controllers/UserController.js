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
  const update = { updatedUser };

  const doc = await User.findOneAndUpdate(filter, update, {
    new: true,
  });
}

async function createUser(user) {
  console.log(user);
  if (user === null) {
    return null;
  }
  try {
    await User.create({
      userId: user.userId,
      userName: user.userName,
      grade: user.grade,
      type: user.type,
      school: user.school,
      options: user.options,
      field: user.field,
      description: user.description,
    });
    return "User Created";
  } catch (e) {
    return null;
  }
}

module.exports = {
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
