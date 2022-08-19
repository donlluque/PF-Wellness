const { Router } = require("express");
const router = Router();
const { Dates, Doctor, Patient, Prepaid_health } = require("../db.js");

router.post("/", async (req, res, next) => {
  try {
    const doctorId = "100"; //dato enviado desde el front
    const patientId = "1"; //dato enviado desde el front

    const doctor = await Doctor.findOne({
      where: {
        id: doctorId,
      },
    });
    const patient = await Patient.findOne({
      where: {
        id: patientId,
      },
    });

    const date = await doctor.addPatient(patient);

    const dateUpdate = await Dates.findOne({
      where: {
        id: date[0].id,
      },
    });

    dateUpdate.hora_inicial = "10:00";
    dateUpdate.hora_final = "10:15";
    dateUpdate.date = "17-08-2022";
    dateUpdate.save();

    res.status(200).send(dateUpdate);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const nuevo = await Doctor.findAll({
      include: [
        {
          model: Prepaid_health,
          throught: {
            attributes: [],
          },
        },
        {
          model: Patient,
          throught: {
            attributes: [],
          },
        },
      ],
    });

    const dates = await Dates.findAll();

    res.send(nuevo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
