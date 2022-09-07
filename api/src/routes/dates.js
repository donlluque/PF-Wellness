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
  General_area,
} = require("../db.js");

router.post("/", async (req, res, next) => {
  const { date, idHour, idDoctor, idPatient, monto } = req.body;
  console.log(date, idHour, idDoctor, idPatient, monto);
  try {
    const doctor = await Doctor.findOne({
      where: {
        id: idDoctor,
      },
      include: {
        model: General_area,
        throught: {
          attributes: [],
        },
      },
    });

    const patient = await Patient.findOne({
      where: {
        id: idPatient,
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

    const turno = await Dates1.create({
      date,
      monto,
    });

    await turno.addDoctor(doctor);
    console.log("soy turno dsp", turno);
    await turno.addPatient(patient);
    await turno.addHours_working(hoursWorking);
    const t = await Dates1.findAll({
      include: [
        { model: Doctor },
        { model: Patient },
        { model: Hours_working },
      ],
    });

    res.send(t);
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
            { model: General_area },
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

router.delete("/", async (req, res, next) => {
  // try {

  const { dateId } = req.body;

  await Dates1.destroy({ where: { id: dateId } });
  res.send("enviar");
  // } catch (error) {
  //   next(error);
  // }
});

module.exports = router;
