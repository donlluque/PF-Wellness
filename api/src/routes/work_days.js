const { Router } = require("express");
const router = Router();
const { Work_days } = require("../db.js");
const { getAllWorkDays } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const allWorkDays = await getAllWorkDays();

  const workDaysDb = await Work_days.findAll();
  try {
    if (!workDaysDb.length) {
      const workDaysDb = await Work_days.bulkCreate(allWorkDays);
      res.status(200).send(workDaysDb);
    } else {
      res.status(200).send(workDaysDb);
    }
  } catch (error) {}
});

module.exports = router;
