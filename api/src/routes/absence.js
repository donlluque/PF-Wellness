const { Router } = require("express");

const router = Router();
const { Doctor, Absence } = require("../db.js");

router.post("/", async (req, res, next) => {
  // try {

  const { extended, totalDay, notTotalDay, doctorId } = req.body;
  const doctor = await Doctor.findOne({ where: { id: doctorId } });

  const absence = await Absence.create({ extended, totalDay, notTotalDay });
  await doctor.addAbsence(absence);
  res.send("enviar");

  // } catch (error) {
  //   console.log(error);
  // }
});

router.delete("/", async (req, res, next) => {
  // try {

  const { absenceId } = req.body;
  await Absence.destroy({ where: { id: absenceId } });

  res.send("enviar");

  // } catch (error) {
  //   console.log(error);
  // }
});

router.get("/", async (req, res, next) => {
  // try {

  const absence = await Absence.findAll({ include: { model: Doctor } });

  res.send(absence);

  // } catch (error) {
  //   console.log(error);
  // }
});

module.exports = router;
