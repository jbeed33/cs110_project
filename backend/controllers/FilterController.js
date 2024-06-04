const User = require("../models/UserModel");

async function filter(filters) {
  const users = await User.find(filters);
  return users;
}

async function recommendationFilter(id) {
  //get userId from auth (Possible step)
  //get userInfo
  const userInfo = await User.find({ userId: id });

  const userFilter = {
    type: user.type,
    school: user.school,
    options: user.options,
    field: user.subjectHelp,
  };

  //call filter on user personal data
  const recommendUsers = await filter({ userFilter });
}

module.exports = {
  filter,
  recommendationFilter,
};
