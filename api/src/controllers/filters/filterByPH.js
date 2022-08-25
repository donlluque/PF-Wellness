const { getAllDoctor } = require("../index.js");

const getByPH = async (ph) => {
  let prepaidHealth = ph.toLowerCase();
  let doctors = await getAllDoctor();
  let obraSocial = doctors.filter((p) =>
    p.prepaid_healths.find((e) => e.name.toLowerCase() === prepaidHealth)
  );
  // console.log(obraSocial, "soy una obra social");
  return obraSocial;
};

module.exports = {
  getByPH,
};
