const { Router } = require("express");
const router = Router();
const { Patient, Prepaid_health } = require("../db.js");
const { getAllPatient } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const { name } = req.query;
  // try {
  const patientDb = await Patient.findAll({
    include: {
      model: Prepaid_health,
      throught: {
        attributes: [],
      },
    },
  });
  console.log("dbbbb00", patientDb);

  if (name) {
    const nombre = await patientDb.filter((e) =>
      e.fullName.toLowerCase().includes(name.toLowerCase())
    );
    console.log(nombre);
    nombre.length
      ? res.status(200).send(nombre)
      : res.status(400).send("Not exist");
  } else if (!patientDb.length) {
    res.status(200).send("No existe info en la base de datos");
  } else {
    res.status(200).send(patientDb);
  }
  /*} catch (error) {
    res.status(404).send("Error en el catch getPetients", error);
  }*/
});
/*
router.get("/", async (req, res, next) => {
  const { name } = req.query;
  const doctorsDb = await Doctor.findAll({
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

  if (name) {
    const nombre = await doctorsDb.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    nombre.length
      ? res.status(200).send(nombre)
      : res.status(400).send("Not exist");
  } else if (!doctorsDb.length) {
    res.status(400).send("No existe info en la Base de datos");
  } else {
    res.send(doctorsDb);
  }
});


*/
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
  console.log(id);
  const {
    name,
    last_name,
    document,
    // type_document,
    email,
    phone,
    nationality,
    direction,
    birthday,
    // medical_history,
    prepaid_health,
    picture,
  } = req.body;

  console.log("prepaid_health", prepaid_health);

  let perfiles = await Patient.findOne({
    where: { id: id },
  });

  const este = await perfiles.update({
    name,
    last_name,
    document,
    // type_document,
    email: perfiles.email,
    phone,
    nationality,
    direction,
    birthday,
    // medical_history,
    picture,
  });

  const dataPrepaidHealth = await Prepaid_health.findOne({
    where: { name: prepaid_health },
  });

  console.log(dataPrepaidHealth);

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
router.put("/active", async (req, res, next) => {
  const { patientId } = req.body;

  const patient = await Patient.findOne({ where: { id: patientId } });

  let state = null;

  if (patient.dataValues.activo) state = false;
  else state = true;
  await patient.update({ activo: state });
  res.send("cambiado");
});

router.put("/wellness", async (req, res) => {
  const { prepaid, patientId } = req.body;
  try {
    const patient = await Patient.findOne({
      where: { id: patientId },
      include: { model: Prepaid_health },
    });
    await patient.removePrepaid_health(patient.prepaid_healths[0]);

    const dataPrepaidHealth = await Prepaid_health.findOne({
      where: { name: prepaid },
    });
    await patient.addPrepaid_health(dataPrepaidHealth);
    const newPatient = await Patient.findOne({
      where: { id: patientId },
      include: { model: Prepaid_health },
    });
    res.send(newPatient);
  } catch (e) {
    res.status(400).send("No existe el paciente");
  }
});

module.exports = router;
