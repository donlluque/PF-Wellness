const { Router } = require("express");
const router = Router();
const {
  Dates1,
  turno,
  Patient,
  Doctor,
  Prepaid_health,
  Hours_working,
  Work_days,
} = require("../db.js");

router.post("/", async (req, res, next) => {
  const { date, idHour, idDoctor } = req.body;
  try {
    const doctorId = idDoctor; //dato enviado desde el front
    const patientId = "9"; //dato enviado desde el front

    const doctor = await Doctor.findOne({
      where: {
        id: doctorId,
      },
    });

    // console.log("doctor")
    const patient = await Patient.findOne({
      where: {
        id: patientId,
      },
      include: {
        model: Prepaid_health,
        throught: {
          attributes: [],
        },
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

    res.send(doctor);
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
          include: [
            {
              model: Prepaid_health,
            },
            {
              model: Work_days,
            },
          ],
          throught: {
            attributes: [],
          },
        },
        {
          model: Hours_working,

          attributes: { exclude: ["id"] },
        },
        {
          model: Patient,
          include: {
            model: Prepaid_health,
          },
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
