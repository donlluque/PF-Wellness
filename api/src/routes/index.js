const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const doctors = require("./doctors.js");
const patients = require("./patients.js");
const specialities = require("./specialities.js");
const prepaid_health = require("./prepaid_health.js");
const filtro = require("./filter.js");
const dates = require("./dates.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/doctors", doctors);
router.use("/patients", patients);
router.use("/specialities", specialities);
router.use("/prepaid_health", prepaid_health);
router.use("/filter", filtro);
router.use("/dates", dates);

module.exports = router;
