const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const doctors = require("./doctors.js");
const patients = require("./patients.js");
const prepaid_health = require("./prepaid_health.js");
const filtro = require("./filter.js");
const dates = require("./dates.js");
const checkUser = require("./checkuser");
const work_days = require("./work_days.js");
const hours_working = require("./hours_working.js");
const pagos_unicos = require("./mercado_pago.js");
const pagos_asociados = require("./mercado_asociados.js");
const general_area = require("./general_area.js");


const review = require("./review.js");

const absence = require("./absence.js");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/doctors", doctors);
router.use("/patients", patients);
router.use("/prepaid_health", prepaid_health);
router.use("/work_days", work_days);
router.use("/hours_working", hours_working);
router.use("/absence", absence);
router.use("/filter", filtro);
router.use("/dates", dates);
router.use("/checkuser", checkUser);
router.use("/pagos", pagos_unicos);
router.use("/asociados", pagos_asociados);
router.use("/review", review);
router.use("/general_area", general_area);
module.exports = router;
