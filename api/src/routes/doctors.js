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
    let doctorsDb = await Doctor.findAll();
    // console.log(allDoctors);
    if (!doctorsDb.length) {
      await Doctor.bulkCreate(allDoctors);
    }
    // console.log(doctorsDb, "soy doctorsDb ");

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
  // console.log(id);
  try {
    const allDoctors = await getAllDoctor();
    // console.log(allDoctors, "doctor id");

    const doctor = await allDoctors.find((e) => e.id == id);

    if (doctor) {
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
    //Info traida por body desde el formuluario
    //Datos del doctor llenados en el Formulario
    const doctor = {
      id: "100",
      name: "Doctor Rodriguez",
      medic_id: "FO12AGEC90265146386015207816",
      general_area: "Terapia de dolor",
      especialidades_id: 47,
      activo: true,
      phone: "+54 9 351 205-4738",
      email: "rodriguez@gmail.com",
      birthday: "15/01/1998",
      document: 26526955,
      type_document: "DNI",
      picture:
        "https://hospitalprivado.com.ar/uploads/cache/profile_j_maria-kurpis-5166.jpg",
      description: "Horario de atención lunes, martes y viernes 10 a 16hs",
    };

    // Obra social del doctor seleccionadas en el formulario
    const prepaidHealth = [
      {
        id: "1",
        name: "osde",
      },
      {
        id: "2",
        name: "swiss medical",
      },
    ];

    const idsPrepaidHealth = prepaidHealth.map((type) => type.id);

    const dataPrepaidHealth = await Prepaid_health.findAll({
      where: { id: idsPrepaidHealth },
      attribute: ["name"],
    });

    const newDoctor = await Doctor.create(doctor);
    await newDoctor.addPrepaid_health(dataPrepaidHealth);

    res.status(200).send(newDoctor);
    // console.log(doctor);
  } catch (error) {
    res.status(404).send("Error en el catch de doctorID", error);
  }
});

//RUTA GET PARA LOS CREADOS DESDE EL POST, INCLUYENDO LOS DATOS DE LAS OBRAS SOCIALES
// router.get("/", async (req, res, next) => {
//   try {
//     const nuevo = await Doctor.findAll({
//       include: {
//         model: Prepaid_health,
//         throught: {
//           attributes: [],
//         },
//       },
//     });

//     res.status(200).send(nuevo);
//   } catch (error) {}
// });
module.exports = router;
