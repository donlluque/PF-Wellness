const { Router } = require("express");
const router = Router();
const { Work_days } = require("../db.js");
const { getAllWorkDays } = require("../controllers/index.js");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const allWorkDays = await getAllWorkDays();

  const workDaysDb = await Work_days.findAll();
  const ordenado = workDaysDb.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  try {
    if (!workDaysDb.length) {
      const workDaysDb = await Work_days.bulkCreate(allWorkDays);
      res.status(200).send(workDaysDb);
    } else {
      res.status(200).send(ordenado);
    }
  } catch (error) {}
});

router.put("/", async (req, res, next) => {
  const{id,day}=req.body
  const modificar= await Work_days.findOne({
    where:{
      id:id
    }
  })

  const nuevo = await modificar.update({day})
  res.send(nuevo)
})

module.exports = router;
