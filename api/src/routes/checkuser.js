const { Router } = require("express");
const router = Router();
const { Patient } = require("../db.js");

router.post("/", async (req, res, next) => {
  const { given_name, email, family_name, nickname } = req.body;
  console.log(req.body, "ruta back checkuser");
  res.send("hola");

  const patient = await Patient.findOne({
    where: { email: email },
  });

  let paciente = { given_name, email, family_name, nickname };
  console.log(paciente, "soy paciente");
  console.log(patient, "soy patient");

  try {
    if (!email) res.status(400).send("Sorry, I need more data to post");

    if (patient) {
      return res.status(200).send("hola");
    } else {
      const newPatient = await Patient.findOrCreate({
        where: { email: email },
        defaults: {
          name: given_name,
          last_name: family_name,
          email,
          user_name: nickname,
        },
      });
      console.log(newPatient, "soy newPatient");
      return res.status(200).send(newPatient);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
