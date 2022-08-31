const { Router } = require("express");
const { Op } = require("sequelize");
const router = Router();
const {
  Doctor,
  Patient,
  Prepaid_health,
  Work_days,
  Absence,
  General_area,
  Review,
} = require("../db.js");
const { getAllDoctor } = require("../controllers/index");


// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const { name } = req.query;
  const doctorsDb = await Doctor.findAll({
    include: [
      {
        model: Prepaid_health,      
        attributes: ['id','name'],
      },
      {
        model: Work_days,
        throught: {
          attributes: [],
        },
      },
      {
        model: Absence,
        throught: {
          attributes: [],
        },
      },
      {
        model: General_area,
        throught: {
          attributes: [],
        },
        
      },
      {
        model: Review,
        throught: {
          attributes: [],
        },
      },
    ],
  });

  if (name) {
    const nombre = await doctorsDb.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    nombre.length
      ? res.status(200).send(nombre)
      : res.status(400).send("Not exist");
  } else if (!doctorsDb.length) {
    res.status(400).send("No existe info en la Base de datos");
  } else {
    res.send(doctorsDb);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findOne({
      where: { id },
      include: [
        {
          model: General_area,
          throught: {
            attributes: [],
          },
        },
        {
          model: Prepaid_health,      
          attributes: ['id','name'],

        },
        {
          model: Work_days,
          throught: {
            attributes: [],
          },
        },
        {
          model: Absence,
          throught: {
            attributes: [],
          },
        },
        {
          model: Review,
          throught: {
            attributes: [],
          },
        },
      ],
    });

    if (id) {
      res.status(200).send(doctor);
    } else {
      res.status(400).send("the doctor is not enable");
    }
  } catch (error) {
    res.status(404).send("Error en el catch de doctorID");
  }
});

router.post("/", async (req, res, next) => {
  const {
    name,
    medic_id,
    general_area,
    specialty,
    phone,
    email,
    birthday,
    document,
    prepaid_healths,
    hours_json,
    work_days,
  } = req.body;

  const doctor = await Doctor.findOne({
    where: { email },
  });

  if (!doctor) {
 

    const dataPrepaidHealth = await Prepaid_health.findAll({
      where: { name: prepaid_healths },
    });

    const dataWorkDays = await Work_days.findAll({
      where: {
        id: work_days,
      },
    });
    const dataGeneralArea = await General_area.findOne({
      where:{
        name: general_area
      }
    })
    const areaId = dataGeneralArea.dataValues.id
    console.log(areaId)
    const newDoctor = await Doctor.create({
      name,
      medic_id,
      specialty,
      phone,
      email,
      birthday,
      document,
      hours_json,
      areaId,
    });

    await newDoctor.addPrepaid_health(dataPrepaidHealth);
    await newDoctor.addWork_days(dataWorkDays);
    // await dataGeneralArea.addDoctor(newDoctor);

    res.status(200).send(newDoctor);
  } else {
    res.status(400).send("Ya existe un doctor con este email");
  }
});
router.put("/", async (req, res, next) => {
  const {
    id,
    name,
    medic_id,
    general_area,
    specialty,
    phone,
    email,
    birthday,
    document,
    prepaid_healths,
    hours_json,
    work_days,
  } = req.body;

  const modificar = await Doctor.findOne({
    where: { id },
  });
  const nuevoDoc = await modificar.update({
    name,
    medic_id,
    specialty,
    phone,
    email,
    birthday,
    document,
    hours_json,
  });
  // ver PUT para update areaId
  if(general_area){
    const dataGeneral_area= await General_area.findOne({
      where:{name:general_area}
    })
    
  }
  if (prepaid_healths) {
    const dataPrepaidHealth = await Prepaid_health.findAll({
      where: { name: prepaid_healths },
      
    });

    await nuevoDoc.setPrepaid_healths([]);
    await nuevoDoc.addPrepaid_healths(dataPrepaidHealth);
  }
  if (work_days) {
    const dataWorkDays = await Work_days.findAll({
      where: {
        id: work_days,
      },
    });
    await nuevoDoc.setWork_days([]);
    await nuevoDoc.addWork_days(dataWorkDays);
  }
  res.send(nuevoDoc);
});

// router.patch("/", async (req, res, next) => {
//   const { doctoId } = req.body

//   await D

// });

module.exports = router;
