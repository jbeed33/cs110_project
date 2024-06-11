const User = require("../models/UserModel");

async function filter(filters, userID) {
  //making sure we do not return the current user
  filters.userId = { $ne: userID };

  const users = await User.find(filters);
  return users;
}

async function recommendationFilter(userID) {
  try {
    console.log("Recommendation system called");
    console.log("user id: ", userID);
    const user = await User.findOne({ userId: userID });

    console.log(user);

    const filters = {
      userId: { $ne: user.userId },
      type: ["both", "student", "tutor"],
    };

    const users = await User.find(filters);

    return sortUsersByScore(user, users);
  } catch (error) {
    console.log(error);
  }
}

// Define the weights for each criterion

// Function to calculate the match score between two users
async function scoringFunction(userA, userB) {
  const weights = {
    grade: 0.4,
    school: 0.6,
    options: 0.5,
    field: 1.0,
    subjectHelp: 2.5,
  };

  let score = 0;

  // Check grade match
  if (userA.grade === userB.grade) {
    score += weights.grade;
  }

  // Check school match
  if (userA.school === userB.school) {
    score += weights.school;
  }

  // Check options match
  if (
    userA.options !== userB.options ||
    userA.options === "both" ||
    userB.options === "both"
  ) {
    score += weights.options;
  }

  // Check field match
  if (userA.field === userB.field) {
    score += weights.field;
  }

  // Check subjectHelp match
  if (userA.subjectHelp === userB.field) {
    score += weights.subjectHelp;
  }

  if (userB.userName === "Joseph") {
    console.log("Joseph final score: ", score);
  }
  if (userB.userName === "Karen Wilson") {
    console.log("Karen Wilson final score: ", score);
  }

  return score;
}

async function sortUsersByScore(user, users) {
  // Calculate scores for each user asynchronously

  const scoredUsers = await Promise.all(
    users.map(async (scoredUser) => {
      const score = await scoringFunction(user, scoredUser);
      return {
        userId: scoredUser.userId,
        userName: scoredUser.userName,
        grade: scoredUser.grade,
        type: scoredUser.type,
        school: scoredUser.school,
        options: scoredUser.options,
        field: scoredUser.field,
        description: scoredUser.description,
        subjectHelp: scoredUser.subjectHelp,
        score,
      };
    })
  );

  //Sort users by score in descending order
  scoredUsers.sort((a, b) => b.score - a.score);

  console.log("Ranked scores:");
  console.log(
    "Scored users ... :",
    scoredUsers.forEach((user) => {
      console.log("user: ", user.userName);
      console.log("score: ", user.score);
      console.log(" ");
    })
  );

  return await scoredUsers;
}

module.exports = {
  filter,
  recommendationFilter,
};
