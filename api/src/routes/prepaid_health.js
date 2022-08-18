const { Router } = require("express");
const router = Router();
const { Prepaid_health } = require("../db.js");
const { getAllPrepaid } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  try {
    let allPrepaid = await getAllPrepaid();
    const PrepaidHealthDb = await Prepaid_health.findAll();
    if (!PrepaidHealthDb.length) {
      await Prepaid_health.bulkCreate(allPrepaid);
      res.status(200).send(allPrepaid);
    } else {
      res.status(200).send(allPrepaid);
    }
  } catch (error) {
    res.status(404).send("Error en el catch getAllPrepaid", error);
  }
});

module.exports = router;
