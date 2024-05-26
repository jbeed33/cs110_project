let express = require("express");
let filterController = require("../controllers/FilterController");

let router = express.Router();

router.get("/", async (req, res) => {
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
