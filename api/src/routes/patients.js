const { Router } = require("express");
const router = Router();
const { Patient, Prepaid_health } = require("../db.js");
const { getAllPatient } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const { name, last_name } = req.query;
  try {
    let allPatient = await getAllPatient();

    const patientDb = await Patient.findAll({
      include: {
        model: Prepaid_health,
        throught: {
          attributes: [],
        },
      },
    });

    if (!patientDb.length || patientDb.length < 21) {
      const pacientes = await Patient.bulkCreate(allPatient);
      res.status(200).send(pacientes);
    } else {
      if (name && last_name) {
        const nombre = await allPatient.filter(
          (e) =>
            e.name.toLowerCase().includes(name.toLowerCase()) &&
            e.last_name.toLowerCase().includes(last_name.toLowerCase())
        );

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
    }
  } catch (error) {
    res.status(404).send("Error en el catch getPetients", error);
  }
});

router.get("/user", async (req, res, next) => {
  const { userName } = req.query;

  try {
    const user = await Patient.findOne({ where: { user_name: userName } });
    if (user) res.status(200).send(user);
    else res.status(404).send("Este usuario no se encuentra registrado");
  } catch (error) {}
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findOne({
      where: { id },
      include: {
        model: Prepaid_health,
        throught: {
          attributes: [],
        },
      },
    });

    // const pacientes = await getAllPatient();
    // const paciente = pacientes.find(e => e.id == id);

    if (patient) {
      res.status(200).send(patient);
    } else res.status(400).send("The patient doesn't exist");
  } catch (error) {
    console.log(error);
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
    prepaid_health,
    picture,
  } = req.body;

  let perfiles = await Patient.findOne({
    where: { id: id },
  });

  const este = await perfiles.update({
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

  const dataPrepaidHealth = await Prepaid_health.findOne({
    where: { name: prepaid_health },
  });

  //TRAER LOS DATOS DE LAS OBRAS SOCIALES PARA QUE SE PUEDA AÑADIR

  await este.addPrepaid_health(dataPrepaidHealth);

  let otro = await Patient.findOne({
    where: { id: id },
    include: {
      model: Prepaid_health,
      throught: {
        attributes: [],
      },
    },
  });
  if (otro.prepaid_healths.length > 1)
    await este.removePrepaid_health(otro.prepaid_healths);

  await otro.addPrepaid_health(dataPrepaidHealth);

  res.status(200).send(este);
});

router.post("/", async (req, res, next) => {
  const { name, last_name, email, user_name } = req.body;

  if (!email) res.status(400).send("Sorry, I need more data to post");

  try {
    let newPatient = await Patient.create({
      name,
      last_name,
      email,
      user_name,
    });

    res.status(200).json(newPatient);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
