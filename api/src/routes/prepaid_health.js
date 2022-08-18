const { Router } = require("express");
const router = Router();
const { Prepaid_health } = require("../db.js");
const { getAllPrepaid } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const {name}= req.query
  try {
    let allPrepaid = await getAllPrepaid();
    if(!allPrepaid){
      
      await Prepaid_health.bulkCreate(allPrepaid);
      
      res.status(200).send(allPrepaid);

    }
    if (name){
      const nombre = await allPrepaid.filter(
        (e) =>
          e.name.toLowerCase().includes(name.toLowerCase())
      )
      nombre.length
        ? res.status(200).send(nombre)
        : res.status(400).send("Not exist");
    }
    

    else res.status(200).send(allPrepaid);
  } catch (error) {
    res.status(404).send("Error en el catch getAllPrepaid", error)
  }
});

router.get("/:id", async (req, res, next) => {
  const {id}=req.params;
  console.log(id)
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
module.exports = router;