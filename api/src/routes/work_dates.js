const { Router } = require("express");
const router = Router();
const { Work_dates } = require("../db.js");
const { getAllPrepaid, getAllWorkDates } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  let allWorkDates = await getAllWorkDates();
  res.send(allWorkDates);
  const workDates = await Work_dates.findAll();
  if (!workDates.length) {
    await Work_dates.bulkCreate(allWorkDates);
  }
});

module.exports = router;
