const { Router } = require("express");
const router = Router();
const { Doctor, Patient } = require("../db.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  try {
    res.status(200).send("La ruta funciona OK");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
