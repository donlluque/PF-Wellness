const { DataTypes } = require("sequelize");
const { Doctor } = require("./Doctor");
const { Patient } = require("./Patient");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dates1",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      date: {
        type: DataTypes.STRING,
      },

      history_id: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
