const { Router } = require("express");
const router = Router();
const { Prepaid_health } = require("../db.js");
const { getAllPrepaid } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  try {
    let allPrepaid = await getAllPrepaid();

    await Prepaid_health.bulkCreate(allPrepaid);

    res.status(200).send(allPrepaid);
  } catch (error) {
    next(error);
  }
});

module.exports = router;