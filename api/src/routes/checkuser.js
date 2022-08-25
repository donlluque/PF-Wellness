const { Router } = require("express");
const router = Router();
const { Patient } = require("../db.js");

router.post("/", async (req, res, next) => {
  const { given_name, email, family_name, nickname } = req.body;
  console.log(req.body, "ruta back checkuser");

  const patient = await Patient.findOne({
    where: { email: email },
  });

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
      return res.status(200).send(newPatient);
    }
  } catch (error) {
    console.log('soy error',error);
  }
});

module.exports = router;
