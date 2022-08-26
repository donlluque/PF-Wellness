const { Router } = require("express");
const router = Router();
const {
  Dates1,
  turno,
  Patient,
  Doctor,
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
    });

    console.log(hoursWorking);

    const turno = await Dates1.create({
      date,
    });

    await turno.addDoctor(doctor);
    await turno.addPatient(patient);
    await turno.addHours_working(hoursWorking);

    res.send(turno);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const dates = await Dates1.findAll({
      include: [
        {
          model: Doctor,
          throught: {
            attributes: [],
          },
        },
        {
          model: Hours_working,
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

    res.send(dates);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
