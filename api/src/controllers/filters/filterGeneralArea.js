const { getAllDoctor } = require("../index.js");

const getByGeneralArea = async (generalArea) => {
  let area = generalArea.toLowerCase();
  let especialidad = await getAllDoctor();
  console.log(especialidad);
  let specialities = especialidad.filter(
    (s) => s.general_area.name.toLowerCase() === area
  );
  console.log(specialities);
  return specialities;
};

module.exports = {
  getByGeneralArea,
};
