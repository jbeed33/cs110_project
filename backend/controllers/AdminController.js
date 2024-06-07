const User = require("../models/UserModel");

async function getAllUsers(role) {
  if (role === "Admin") {
    const users = await User.find({});
    console.log(users);

    if (users === null) {
      return null;
    } else {
      return users;
    }
  } else {
    return null;
  }
}

module.exports = {
  getAllUsers,
};
