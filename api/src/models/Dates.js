const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "doctor",
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
      },

      hora_final: {
        type: DataTypes.TIME,
        allowNull: false,
      },

      hora_final: {
        type: DataTypes.TIME,
        allowNull: false,
      },

      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      doctor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      history_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
