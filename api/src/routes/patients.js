const { Router } = require("express");
const router = Router();
const { Patient } = require("../db.js");
const { getAllPatient } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const { name, last_name } = req.query;
  try {
    let allPatient = await getAllPatient();
    const patientDb = await Patient.findAll();
    if (!patientDb.length) {
      await Patient.bulkCreate(allPatient);
    }

    if (name && last_name) {
      const nombre = await allPatient.filter(
        (e) =>
          e.name.toLowerCase().includes(name.toLowerCase()) &&
          e.last_name.toLowerCase().includes(last_name.toLowerCase())
      );

      // console.log(nombre, "soy nombre");

      nombre.length
        ? res.status(200).send(nombre)
        : res.status(400).send("Not exist");
    } else if (name) {
      const nombre = await allPatient.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      nombre.length
        ? res.status(200).send(nombre)
        : res.send("it is not exist this name");
    } else if (last_name) {
      const apellido = await allPatient.filter((e) =>
        e.last_name.toLowerCase().includes(last_name.toLowerCase())
      );
      apellido.length
        ? res.status(200).send(apellido)
        : res.send("it is not exist this name");
    } else {
      res.status(200).send(patientDb);
    }
  } catch (error) {
    res.status(404).send("Error en el catch getPetients", error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const allPatient = await Patient.findAll();
    const patient = await allPatient.find((e) => e.id == id);
    if (patient) {
      res.status(200).send(patient);
    } else res.status(400).send("The patient doesn't exist");
  } catch (error) {
    res.status(404).send("Error en el catch de patient dni", error);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    last_name,
    document,
    type_document,
    email,
    phone,
    nationality,
    direction,
    birthday,
    medical_history,
    picture,
  } = req.body;
  try {
    let perfiles = await Patient.findOne({ where: { id: id } });
    await perfiles.update({
      name,
      last_name,
      document,
      type_document,
      email,
      phone,
      nationality,
      direction,
      birthday,
      medical_history,
      picture,
    });
    res.status(200).send("se modifico");
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
