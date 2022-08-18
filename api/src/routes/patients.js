const { Router } = require("express");
const router = Router();
const { Patient } = require("../db.js");
const { getAllPatient } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  try {
    let allPatient = await getAllPatient();
    const patientDb = await Patient.findAll();
    if (!patientDb.length) {
      await Patient.bulkCreate(allPatient);
      res.status(200).send(allPatient);
    } else {
      res.status(200).send(allPatient);
    }
  } catch (error) {
    res.status(404).send("Error en el catch getPetients", error);
  }
});

module.exports = router;
