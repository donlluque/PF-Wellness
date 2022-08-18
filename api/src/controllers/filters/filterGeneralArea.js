const { getAllDoctor } = require("../index.js");

const getByGeneralArea = async (generalArea) => {
  let area = generalArea.toLowerCase();
  let especialidad = await getAllDoctor();
  let specialities = especialidad.filter(
    (s) => s.general_area.toLowerCase() === area
  );
  return specialities;
};

module.exports = {
  getByGeneralArea,
};
