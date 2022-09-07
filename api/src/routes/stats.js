const { Router } = require("express");
const { Op } = require("sequelize");
const router = Router();
const {
  Doctor,
  Patient,
  Prepaid_health,
  Dates1,
  Absence,
  General_area,
  Review,
} = require("../db.js");

router.get("/", async (req, res, next) => {
  const doctors1 = await Doctor.count({
    where: {
      areaId: {
        [Op.eq]: 1,
      },
    },
  });

  const doctors2 = await Doctor.count({
    where: {
      areaId: {
        [Op.eq]: 2,
      },
    },
  });
  const doctors3 = await Doctor.count({
    where: {
      areaId: {
        [Op.eq]: 3,
      },
    },
  });
  const doctors4 = await Doctor.count({
    where: {
      areaId: {
        [Op.eq]: 4,
      },
    },
  });
  const doctors5 = await Doctor.count({
    where: {
      areaId: {
        [Op.eq]: 5,
      },
    },
  });
  const doctors6 = await Doctor.count({
    where: {
      areaId: {
        [Op.eq]: 6,
      },
    },
  });
  const doctors7 = await Doctor.count({
    where: {
      areaId: {
        [Op.eq]: 7,
      },
    },
  });

  let countGeneralArea = [
    doctors1,
    doctors2,
    doctors3,
    doctors4,
    doctors5,
    doctors6,
    doctors7,
  ];

  const patientDb = await Patient.findAll({
    include: {
      model: Prepaid_health,
      throught: {
        attributes: [],
      },
    },
  });

  const subscritos = patientDb.filter((el) => el.prepaid_healths[0].id == 8);
  const notSubscritos = patientDb.filter(
    (el) => el.prepaid_healths[0].id !== 8
  );

  let patints = [subscritos.length, notSubscritos.length];

  let monto = 0;
  const dates = await Dates1.findAll({ where: { monto: { [Op.gt]: 0 } } });

  dates.forEach((el) => {
    console.log(el.monto);
    monto += el.monto;
  });

  let stats = {
    doctorsCount: countGeneralArea,
    patientsCount: patints,
    monto,
  };

  res.status(200).send(stats);
});

module.exports = router;
