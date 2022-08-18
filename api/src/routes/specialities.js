const { Router } = require("express");
const router = Router();
const { Specialities } = require("../db.js");
const { getAllSpecialities } = require("../controllers/index");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  try {
    const allSpecialities = await getAllSpecialities();
    if (!allSpecialities) {
      await Specialities.bulkCreate(allSpecialities);
      res.status(200).send(allSpecialities);
    }
    console.log(allSpecialities, "soy allSpecialities");
    res.status(200).send(allSpecialities);
  } catch (error) {
    res.status(404).send("Error en el catch getSpecialities", error);
  }
});

module.exports = router;
