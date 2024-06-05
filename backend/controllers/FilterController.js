const User = require("../models/UserModel");

async function filter(filters) {
  const users = await User.find(filters);
  return users;
}

async function recommendationFilter(userID) {
  console.log("user id: ", userID);
  const user = await User.findOne({ userId: userID });

  console.log(user);

  const filters = {
    field: user.subjectHelp,
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
