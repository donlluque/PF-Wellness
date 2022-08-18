const { DataTypes } = require("sequelize");
const { Doctor } = require("./Doctor");
const { Patient } = require("./Patient");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dates",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      hora_final: {
        type: DataTypes.STRING,
      },

      hora_inicial: {
        type: DataTypes.STRING,
      },

      date: {
        type: DataTypes.STRING,
      },

      doctorId: {
        type: DataTypes.INTEGER,
        references: {
          model: Doctor,
          key: "id",
        },
      },

      patientId: {
        type: DataTypes.INTEGER,
        references: {
          model: Patient, // 'Movies' would also work
          key: "id",
        },
      },

      history_id: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
