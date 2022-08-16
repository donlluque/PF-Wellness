const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const doctors = require("./doctors.js");
const patients = require("./patients.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", doctors);
router.use("/", patients);

module.exports = router;
