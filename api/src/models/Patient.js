const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "patient",
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      document: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      type_document: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },

      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      direction: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      prepaid_health: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      birthday: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      medical_history: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
