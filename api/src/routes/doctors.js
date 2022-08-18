const { Router } = require("express");
const router = Router();
const { Doctor, Patient } = require("../db.js");
const { getAllDoctor } = require("../controllers/index");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const { name, last_name } = req.query;

  // console.log(req.query);

  try {
    const allDoctors = await getAllDoctor();
    let doctorsDb = await Doctor.findAll();

    // console.log(allDoctors);
    if (!doctorsDb.length) {
      await Doctor.bulkCreate(allDoctors);
      res.status(200).send(allDoctors);
    }

    if (name && last_name) {
      const nombre = await allDoctors.filter(
        (e) =>
          e.name.toLowerCase().includes(name.toLowerCase()) &&
          e.last_name.toLowerCase().includes(last_name.toLowerCase())
      );

      // console.log(nombre, "soy nombre");

      nombre.length
        ? res.status(200).send(nombre)
        : res.status(400).send("Not exist");
    } else if (name) {
      const nombre = await allDoctors.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      nombre.length
        ? res.status(200).send(nombre)
        : res.send("it is not exist this name");
    } else if (last_name) {
      const apellido = await allDoctors.filter((e) =>
        e.last_name.toLowerCase().includes(last_name.toLowerCase())
      );
      apellido.length
        ? res.status(200).send(apellido)
        : res.send("it is not exist this name");
    }
    res.status(200).send(allDoctors);
    // console.log(allDoctors, "soy allDoctors");
  } catch (error) {
    res
      .status(404)
      .send("Error en el catch de search Name and Last name", error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const allDoctors = await getAllDoctor();
    // console.log(allDoctors, "doctor id");

    const doctor = await allDoctors.find((e) => e.id === id);
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

module.exports = router;
