const { Router } = require("express");
const { Op } = require("sequelize");
const router = Router();
const { Doctor, Patient, Prepaid_health, Work_dates } = require("../db.js");
const { getAllDoctor } = require("../controllers/index");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const { name } = req.query;

  // console.log(req.query);

  const allDoctors = await getAllDoctor();

  const doctorsDb = await Doctor.findAll({
    include: {
      model: Prepaid_health,
      throught: {
        attributes: [],
      },
    },
  });

  if (!doctorsDb.length) {
    await Doctor.bulkCreate(allDoctors);
  }
  if (name) {
    const nombre = await allDoctors.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );

    nombre.length
      ? res.status(200).send(nombre)
      : res.status(400).send("Not exist");
  } else {
    res.status(200).send(allDoctors);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const doctor = await Doctor.findOne({
      where: { id },
      include: [
        {
          model: Prepaid_health,
          throught: {
            attributes: [],
          },
        },
        {
          model: Work_dates,
          throught: {
            attributes: [],
          },
        },
      ],
    });

    if (id) {
      res.status(200).send(doctor);
    } else {
      res.status(400).send("the doctor is not enable");
    }
  } catch (error) {
    res.status(404).send("Error en el catch de doctorID", error);
  }
});

router.post("/", async (req, res, next) => {
  const {
    name,
    medic_id,
    general_area,
    especialidades_id,
    phone,
    email,
    birthday,
    document,
    type_document,
    prepaid_health,
    picture,
    description,
    work_date,
  } = req.body;

  const dataPrepaidHealth = await Prepaid_health.findAll({
    where: { name: prepaid_health },
  });

  const dataWorkDates = await Work_dates.findAll({
    where: {
      id: work_date,
    },
  });

  const newDoctor = await Doctor.create({
    name,
    medic_id,
    general_area,
    especialidades_id,
    phone,
    email,
    birthday,
    document,
    type_document,
    picture,
    description,
  });

  await newDoctor.addPrepaid_health(dataPrepaidHealth);
  await newDoctor.addWork_dates(dataWorkDates);

  res.status(200).send(dataWorkDates);
});

module.exports = router;
