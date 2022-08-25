const axios = require("axios");
const express = require("express");
const {
  Doctor,
  Prepaid_health,
  Work_days,
  Hours_working,
  Patient,
} = require("../db");

const getAllDoctor = async () => {
  const doctorsDb = await Doctor.findAll({
    include: [
      {
        model: Prepaid_health,
        throught: {
          attributes: [],
        },
      },
      {
        model: Work_days,
        throught: {
          attributes: [],
        },
      },
    ],
  });
  return doctorsDb;
};

const getAllPatient = async () => {
  const patient = await Patient.findAll({
    include: {
      model: Prepaid_health,
      throught: {
        attributes: [],
      },
    },
  });

  // const patient = await axios.get(
  //   "https://62fceb116e617f88dea10ecd.mockapi.io/patient/Patient"
  // );

  // const allPatient = await patient.data.map((p) => {
  //   return {
  //     id: p.id,
  //     name: p.name,
  //     last_name: p.lastname,
  //     document: p.document,
  //     user_name: p.user_name,
  //     type_document: p.type_document,
  //     email: p.email,
  //     phone: p.phone,
  //     prepaid_health: p.prepaid_health,
  //     nationality: p.nationality,
  //     direction: p.direction,
  //     birthday: p.birthday,
  //     medical_history: p.medical_history,
  //     picture: p.picture,
  //   };
  // });
  return patient;
};

const getAllPrepaid = async () => {
  const prepaidHelath = await Prepaid_health.findAll();
  // const prepaid = await axios.get(
  //   "https://62fce4526e617f88dea06652.mockapi.io/prepaid_health"
  // );

  // const allPrepaid = await prepaid.data.map((p) => {
  //   return {
  //     id: p.id,
  //     name: p.name,
  //     address: p.address,
  //     phone: p.phone,
  //     logo: p.logo,
  //   };
  // });
  return prepaidHelath;
};

const getAllWorkDays = async () => {
  const allWorkDates = await Work_days.findAll();

  // const workDates = await axios.get(
  //   "https://62fcea066e617f88dea0f5c0.mockapi.io/work_days"
  // );

  // const allWorkDates = await workDates.data.map((p) => {
  //   return {
  //     day: p.day,
  //   };
  // });
  return allWorkDates;
};

const getAllHoursWorking = async () => {
  const allHoursDates = await Hours_working.findAll();
  // const workDates = await axios.get(
  //   "https://62fcea066e617f88dea0f5c0.mockapi.io/hours_working"
  // );

  // const allWorkDates = await workDates.data.map((p) => {
  //   return {
  //     hour: p.hour,
  //   };
  // });
  return allHoursDates;
};

module.exports = {
  getAllDoctor,
  getAllPatient,
  getAllPrepaid,
  getAllWorkDays,
  getAllHoursWorking,
};
