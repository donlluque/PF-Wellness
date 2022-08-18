const { Router } = require("express");
const router = Router();
const { Doctor, Patient } = require("../db.js");
const { getAllDoctor } = require("../controllers/index.js");
const {
  getByGeneralArea,
} = require("../controllers/filters/filterGeneralArea.js");
const { getByPH } = require("../controllers/filters/filterByPH.js");
// const {
//   getBySpecialities,
// } = require("../controllers/filters/filterBySpecialities.js");

router.get("/", async (req, res) => {
  const { general_area, prepaid_health, specialities } = req.query;
  // console.log(general_area, "areaaaaaaaaaaaaaa");
  try {
    if (general_area === "" && prepaid_health === "") {
      res.status(400).send("Faltan campos");
    } else if (general_area === "All" && prepaid_health === "All") {
      const allDoctors = await getAllDoctor();
      res.status(200).send(allDoctors);
    } else if (general_area === "All" && prepaid_health === "All") {
      const allDoctors = await getAllDoctor();
      res.status(200).send(allDoctors);
      // } else if (general_area !== "All" && specialities !== "All") {
      //   const especialidad = await getBySpecialities(specialities);
      res.status(200).send(especialidad);
    } else if (general_area !== "All" && prepaid_health === "All") {
      const doctorsGA = await getByGeneralArea(general_area);
      res.status(200).send(doctorsGA);
    } else if (general_area === "All" && prepaid_health !== "All") {
      const doctorsPH = await getByPH(prepaid_health);
      res.status(200).send(doctorsPH);
    } else if (general_area !== "All" && prepaid_health !== "All") {
      const general = await getByGeneralArea(general_area);
      // console.log(general, "soy general");
      const mixFiltro = general.filter((e) =>
        e.prepaid_health.find(
          (e) => e.toLowerCase() === prepaid_health.toLowerCase()
        )
      );
      // console.log(mixFiltro, "soy mixFiltro");
      res.status(200).send(mixFiltro);
    }
  } catch (error) {
    res.status(404).send("Error en el catch filters", error);
  }
});

module.exports = router;
