const { Router } = require("express");
const router = Router();
const {
  Patient,
  Prepaid_health,
  Doctor,
  Work_days,
  Absence,
  General_area,
  Review,
} = require("../db.js");

router.post("/", async (req, res, next) => {
  // try {
  const { given_name, email, family_name, nickname, picture } = req.body;
  // console.log(req.body, "ruta back checkuser");

  const patient = await Patient.findOne({
    where: { email: email },
    include: {
      model: Prepaid_health,
    },
  });

  const doctor = await Doctor.findOne({
    where: { email: email },
    include: [
      {
        model: Prepaid_health,
        attributes: ["id", "name"],
      },
      {
        model: Work_days,
        throught: {
          attributes: [],
        },
      },
      {
        model: Absence,
        throught: {
          attributes: [],
        },
      },
      {
        model: General_area,
        throught: {
          attributes: [],
        },
      },
      {
        model: Review,
        throught: {
          attributes: [],
        },
      },
    ],
  });

  console.log(patient, "soy patient");
  if (!email) res.status(400).send("Sorry, I need more data to post");
  if (doctor) {
    return res.status(200).send(doctor);
  } else if (patient) {
    return res.status(200).send(patient);
  } else if (!given_name) {
    let newPatient = await Patient.create({
      email,
      picture: picture,
      user_name: nickname,
    });
    return res.status(200).send(newPatient);
  } else {
    const newPatient = await Patient.findOrCreate({
      where: { email: email },
      defaults: {
        name: given_name,
        last_name: family_name,
        email,
        user_name: nickname,
        picture: picture,
      },
    });
    console.log(newPatient, "soy newPatient");
    return res.status(200).send(newPatient);
  }
  // } catch (error) {
  //   console.log(error);
  // }
});

module.exports = router;
