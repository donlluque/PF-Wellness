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
  const { general_area, prepaid_health } = req.query;
  // console.log(general_area, "areaaaaaaaaaaaaaa");
  try {
    if (general_area === "" && prepaid_health === "") {
      res.status(400).send("Faltan campos");
    } else if (general_area === "All" && prepaid_health === "All") {
      const allDoctors = await getAllDoctor();
      if (!allDoctors.length) {
        res.status(400).send("recargar db");
      } else {
        res.status(200).send(allDoctors);
      }
      // } else if (general_area !== "All" && specialities !== "All") {
      //   const especialidad = await getBySpecialities(specialities);
    } else if (general_area !== "All" && prepaid_health === "All") {
      const doctorsGA = await getByGeneralArea(general_area);
      if (!doctorsGA.length) {
        res.status(400).send("No hay doctores en esa area");
      } else {
        res.status(200).send(doctorsGA);
      }
    } else if (general_area === "All" && prepaid_health !== "All") {
      const doctorsPH = await getByPH(prepaid_health);
      if (!doctorsPH.length) {
        res.status(400).send("No hay doctores con esa obra social");
      } else {
        res.status(200).send(doctorsPH);
      }
    } else if (general_area !== "All" && prepaid_health !== "All") {
      const general = await getByGeneralArea(general_area);
      // console.log(general, "soy general");
      const mixFiltro = general.filter((e) =>
        e.prepaid_health.find(
          (e) => e.toLowerCase() === prepaid_health.toLowerCase()
        )
      );
      if (!mixFiltro.length) {
        res
          .status(400)
          .send(`No tenemos doctor en ${general_area} con ${prepaid_health}`);
      } else {
        console.log(mixFiltro, "soy mixFiltro");
        res.status(200).send(mixFiltro);
      }
    }
  } catch (error) {
    res.status(404).send("Error en el catch filters", error);
  }
});

module.exports = router;
