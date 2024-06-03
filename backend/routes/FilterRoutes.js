let express = require("express");
let filterController = require("../controllers/FilterController");

let router = express.Router();

router.get("/", async (req, res) => {
  //Must have filters added to use this route.
  if (Object.keys(req.query).length === 0) {
    return res
      .status(200)
      .send({ message: "Please add a filter to use this route." });
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
