let express = require("express");
let filterController = require("../controllers/FilterController");
const AuthController = require("../controllers/AuthController");

let router = express.Router();

router.get("/", AuthController.authenticate, async (req, res) => {
  //Must have filters added to use this route.
  if (Object.keys(req.query).length === 0) {
    const users = await filterController.recommendationFilter(req.userId);
    return res.json(users);
  }

  try {
    const filters = req.query;
    console.log(filters);
    const users = await filterController.filter(filters);
    return res.json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
