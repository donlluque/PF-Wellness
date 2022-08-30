const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "absence",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      extended: {
        type: DataTypes.JSON,
      },
      totalDay: {
        type: DataTypes.JSON,
      },
      notTotalDay: {
        type: DataTypes.JSON,
      },
    },
    { timestamps: false }
  );
};
