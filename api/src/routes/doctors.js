const { Router } = require("express");
const router = Router();
const { Doctor, Patient } = require("../db.js");
const { getAllDoctor } = require("../controllers/index");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  try {
    const allDoctors = await getAllDoctor();

    await Doctor.bulkCreate(allDoctors);

    // console.log(allDoctors, "soy get");

    res.status(200).send(allDoctors);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
