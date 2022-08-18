const { getAllDoctor } = require("../index.js");

const getBySpecialities = async (spec) => {
  let especialidad = spec.toLowerCase();
  let especialidades = await getAllDoctor();
  let filtroSpec = especialidades.filter(
    (p) => p.especialidades_id.toLowerCase() === especialidad
  );

  return filtroSpec;
};

module.exports = {
  getBySpecialities,
};
