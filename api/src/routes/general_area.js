const { Router } = require("express");
const router = Router();
const { General_area } = require("../db.js");



router.post("/", async (req, res, next) => {
 const {name , costConsult} = req.body
 const generalCreate = await General_area.create({
  name,costConsult
 })
 res.send(generalCreate)
})
module.exports = router;
