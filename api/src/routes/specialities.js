const { Router } = require("express");
const router = Router();
const { Specialities } = require("../db.js");
const { getAllSpecialities } = require("../controllers/index");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  try {
    const allSpecialities = await getAllSpecialities();

    await Specialities.bulkCreate(allSpecialities);

    console.log(allSpecialities, "soy get");

    res.status(200).send(allSpecialities);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
