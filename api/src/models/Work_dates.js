const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "work_dates",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      day: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hourInitial: {
        type: DataTypes.STRING,
      },
      hourEnd: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
