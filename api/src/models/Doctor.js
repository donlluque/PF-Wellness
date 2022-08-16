const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "doctor",
    {
      id: {
        type: DataTypes.INTEGER,
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

      medic_id: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      general_area: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      especialidades_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      birthday: {
        type: DataTypes.DATE,
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

      prepaid_health: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
