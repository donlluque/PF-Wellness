const { Router } = require("express");
const router = Router();
const { General_area } = require("../db.js");

router.post("/", async (req, res, next) => {
  const { name, costConsult } = req.body;
  const generalCreate = await General_area.create({
    name,
    costConsult,
  });
  res.send(generalCreate);
});

router.get("/", async (req, res) => {
  const areas = await General_area.findAll();
  res.status(200).send(areas);
});
module.exports = router;
