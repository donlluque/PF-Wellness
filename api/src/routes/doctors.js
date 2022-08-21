const { Router } = require("express");
const router = Router();
const { Doctor, Patient, Prepaid_health } = require("../db.js");
const { getAllDoctor } = require("../controllers/index");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const { name } = req.query;

  // console.log(req.query);

  try {
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
    
  } catch (error) {
    res
      .status(404)
      .send("Error en el catch de search Name and Last name", error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    // const doctor = await Doctor.findOne({
    //   where: { id },
    //   include: {
    //     model: Prepaid_health,
    //     throught: {
    //       attributes: [],
    //     },
    //   },
    // });
    const doctors = await getAllDoctor();
    const doctor = doctors.find(e => e.id == id);

    if (id) {
      res.status(200).send(doctor);
    } else {
      res.status(400).send("the doctor is not enable");
    }

    // console.log(doctor);
  } catch (error) {
    res.status(404).send("Error en el catch de doctorID", error);
  }
});

router.post("/", async (req, res, next) => {
  try {
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
    } = req.body;

    const dataPrepaidHealth = await Prepaid_health.findAll({
      where: { name: prepaid_health },
    });

    // console.log(dataPrepaidHealth);

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

    res.status(200).send(newDoctor);
  } catch (error) {}
});

module.exports = router;
