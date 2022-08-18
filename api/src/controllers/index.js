const axios = require("axios");
const e = require("express");
const { Doctor } = require("../db");

const getAllDoctor = async () => {
  const doctors = await axios.get(
    "https://62fce4526e617f88dea06652.mockapi.io/doctor"
  );

  // console.log(doctors, "doctoooooooooooooooooooooors");

  const allDoctors = await doctors.data.map((e) => {
    return {
      id: e.id,
      name: e.name,
      medic_id: e.medic_id,
      general_area: e.general_area,
      especialidades_id: e.especialidades_id,
      activo: e.activo,
      phone: e.phone,
      email: e.email,
      birthday: e.birthday,
      document: e.document,
      type_document: e.type_document,
      prepaid_health: e.prepaid_health,
      picture: e.picture,
      description: e.description,
    };
  });

  // console.log(allDoctors, "allDoctors");

  return allDoctors;
};

const getAllSpecialities = async () => {
  const specialities = await axios.get(
    "https://62fce4526e617f88dea06652.mockapi.io/specialities"
  );

  const allSpecialities = await specialities.data.map((s) => {
    return {
      id: s.id,
      name: s.name,
    };
  });
  return allSpecialities;
};

const getAllPatient = async () => {
  const patient = await axios.get(
    "https://62fceb116e617f88dea10ecd.mockapi.io/patient/Patient"
  );

  const allPatient = await patient.data.map((p) => {
    return {
      id: p.id,
      name: p.name,
      last_name: p.lastname,
      document: p.document,
      type_document: p.type_document,
      email: p.email,
      phone: p.phone,
      nationality: p.nationality,
      direction: p.direction,
      prepaid_health: p.prepaid_health,
      birthday: p.birthday,
      medical_history: p.medical_history,
      picture: p.picture,
    };
  });
  return allPatient;
};

const getAllPrepaid = async () => {
  const prepaid = await axios.get(
    "https://62fce4526e617f88dea06652.mockapi.io/prepaid_health"
  );

  const allPrepaid = await prepaid.data.map((p) => {
    return {
      id: p.id,
      name: p.name,
      address: p.address,
      phone: p.phone,
      logo: p.logo,
    };
  });
  return allPrepaid;
};

module.exports = {
  getAllDoctor,
  getAllSpecialities,
  getAllPatient,
  getAllPrepaid,
};
