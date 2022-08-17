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

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const allDoctors = await getAllDoctor();
    // console.log(allDoctors, "doctor id");

    const doctor = await allDoctors.find((e) => e.id === id);
    if (doctor) {
      res.status(200).send(doctor);
    } else {
      res.status(400).send("the doctor is not enable");
    }

    // console.log(doctor);
  } catch (error) {
    res.status(404).send("Error en el catch de doctorID", error);
  }
});

module.exports = router;
