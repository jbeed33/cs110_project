const User = require("../models/UserModel");

async function filter(filters) {
  const users = await User.find(filters);
  return users;
}

module.exports = {
  filter,
};

// async function recommendationFilter(filters){
//     const filters = req.query;
//     const users = await User.find(filters);
//     res.json(users);
// }
