const User = require("../models/UserModel");

async function filter(filters, userID) {
  //making sure we do not return the current user
  filters.userId = { $ne: userID };

  const users = await User.find(filters);
  return users;
}

async function recommendationFilter(userID) {
  console.log("user id: ", userID);
  const user = await User.find({ userId: userID });

  console.log(user);

  const filters = {
    field: user.subjectHelp,
    userId: { $ne: user.userId },
    type: ["both", "student", "tutor"],
  };

  const users = await User.find(filters);
  console.log(users);
  return users;
}

module.exports = {
  filter,
  recommendationFilter,
};
