const { Router } = require("express");
const router = Router();
const { Patient } = require("../db.js");
const { getAllPatient } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  try {
    let allPatient = await getAllPatient();

    await Patient.bulkCreate(allPatient);

    res.status(200).send(allPatient);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
