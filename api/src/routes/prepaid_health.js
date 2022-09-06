const { Router } = require("express");
const router = Router();
const { Prepaid_health } = require("../db.js");
const { getAllPrepaid } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const { name } = req.query;
  try {
    let allPrepaid = await getAllPrepaid();

    const PrepaidHealthDb = await Prepaid_health.findAll();
    if (!PrepaidHealthDb.length) {
      await Prepaid_health.bulkCreate(allPrepaid);
    }

    if (name) {
      const nombre = await allPrepaid.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      nombre.length
        ? res.status(200).send(nombre)
        : res.status(400).send("Not exist");
    } else {
      res.status(200).send(allPrepaid);
    }
  } catch (error) {
    res.status(404).send("Error en el catch getAllPrepaid", error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const allPrepaid = await getAllPrepaid();
    // console.log(allDoctors, "doctor id");

    const prepaid = await allPrepaid.find((e) => e.id === id);
    if (prepaid) {
      res.status(200).send(prepaid);
    } else {
      res.status(400).send("the prepaid is not enable");
    }

    // console.log(doctor);
  } catch (error) {
    res.status(404).send("Error en el catch de prepaidID", error);
  }
});

router.put("/", async (req, res, next) => {

  const{id,name,address,phone,logo,percentage}=req.body
  const modificar= await Prepaid_health.findOne({
    where:{
      id:id
    }
  })

  const nuevo = await modificar.update({name,address,phone,logo,percentage})
  res.send(nuevo)
})


router.post("/", async (req, res, next) => {
  const { name, address, phone, logo, percentage } = req.body;
  const prepaidCreate = await Prepaid_health.create({
    name,
    address,
    phone,
    logo,
    percentage,
  });
  res.send(prepaidCreate);
});
module.exports = router;
