const { Router } = require("express");
const router = Router();
const {
  Dates,
  Doctor,
  Patient,
  Prepaid_health,
  Hours_working,
} = require("../db.js");

router.post("/", async (req, res, next) => {
  const { date, idHour, idMedico } = req.body;
  try {
    const doctorId = idMedico; //dato enviado desde el front
    const patientId = "7"; //dato enviado desde el front

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

    const hoursWorking = await Hours_working.findOne({
      where: {
        id: idHour,
      },
      attributes: ["hour"],
    });

    console.log(hoursWorking);
    var dates = [];

    dates = await doctor.addPatient(patient);

    if (!dates) {
      await doctor.removePatient(patient);
      dateUpdate = await doctor.addPatient(patient);
      nuevoUpdate = await Dates.findOne({
        where: {
          id: dateUpdate[0].dataValues.id,
        },
      });
      nuevoUpdate.update({
        hora_inicial: hoursWorking,
        date,
      });

      res.send(dateUpdate);
    } else {
      dateUpdate = await Dates.findOne({
        where: {
          id: dates[0].dataValues.id,
        },
      });

      dateUpdate.update({
        hora_inicial: hoursWorking,
        date,
      });

      res.send(dateUpdate);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const dates = await Dates.findAll();

    res.send(dates);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
