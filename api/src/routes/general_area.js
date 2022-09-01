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
router.put("/", async (req, res, next) => {
  const {id,name, costConsult} = req.body
  try {
    const general_area=await General_area.findOne({where:{id}})
    const general_areaUp= await general_area.update({name,costConsult})
    res.send(general_areaUp)
  } catch (error) {
    res.status(400).send('Error al modificar el area general')
  }
})
module.exports = router;
