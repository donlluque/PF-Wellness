const { Router } = require("express");
const router = Router();
const { Hours_working } = require("../db.js");
const { getAllHoursWorking } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const allHoursWorking = await getAllHoursWorking();
  const hoursWorkkingDb = await Hours_working.findAll();

  try {
    if (!hoursWorkkingDb.length) {
      const hoursWorking = await Hours_working.bulkCreate(allHoursWorking);
      res.status(200).send(hoursWorking);
    } else {
      res.status(200).send(hoursWorkkingDb);
    }
    res.send(info);
  } catch (error) {}
});

module.exports = router;
