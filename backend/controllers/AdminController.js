const User = require("../models/UserModel");

async function getAllUsers() {
  const users = await User.find({});
  console.log(users);

  if (users === null) {
    return null;
  } else {
    return users;
  }
}

module.exports = {
  getAllUsers,
};
