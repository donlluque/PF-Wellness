const { Router } = require("express");
const { Op } = require("sequelize");
const router = Router();
const { Doctor, Patient, Prepaid_health, Work_days } = require("../db.js");
const { getAllDoctor } = require("../controllers/index");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const { name } = req.query;
  const doctorsDb = await Doctor.findAll({
    include: [
      {
        model: Prepaid_health,
        throught: {
          attributes: [],
        },
      },
      {
        model: Work_days,
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

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

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
          model: Work_days,
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
    res.status(404).send("Error en el catch de doctorID");
  }
});

router.post("/", async (req, res, next) => {
  const {
    name,
    medic_id,
    general_area,
    specialty,
    phone,
    email,
    birthday,
    document,
    prepaid_healths,
    hours_json,
    work_days,
  } = req.body;

  const doctor = await Doctor.findOne({
    where: { email },
  });

  if (!doctor) {
    const newDoctor = await Doctor.create({
      name,
      medic_id,
      general_area,
      specialty,
      phone,
      email,
      birthday,
      document,
      hours_json,
    });

    const dataPrepaidHealth = await Prepaid_health.findAll({
      where: { name: prepaid_healths },
    });

    const dataWorkDays = await Work_days.findAll({
      where: {
        id: work_days,
      },
    });

    await newDoctor.addPrepaid_health(dataPrepaidHealth);
    await newDoctor.addWork_days(dataWorkDays);

    res.status(200).send(newDoctor);
  } else {
    res.status(400).send("Ya existe un doctor con este email");
  }
});
router.put("/", async (req, res, next) => {
  const {
    id,
    name,
    medic_id,
    general_area,
    specialty,
    phone,
    email,
    birthday,
    document,
    prepaid_healths,
    hours_json,
    work_days,
  } = req.body;
  const modificar = await Doctor.findOne({
    where:{id}
  })
  const nuevo = await modificar.update({
    name,
    medic_id,
    general_area,
    specialty,
    phone,
    email,
    birthday,
    document,
    hours_json,
  })
  if(prepaid_healths){
    const dataPrepaidHealth = await Prepaid_health.findAll({
      where: { name: prepaid_healths },
    });
    await nuevo.addPrepaid_health(dataPrepaidHealth);
  }
  if(work_days){
    const dataWorkDays = await Work_days.findAll({
      where: {
        id: work_days,
      },
    });
    await nuevo.addWork_days(dataWorkDays);
  }
  res.send(nuevo)
})

module.exports = router;
