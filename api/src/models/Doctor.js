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
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      medic_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      general_area: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      specialty: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      birthday: {
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
        defaultValue: "DNI",
      },

      picture: {
        type: DataTypes.STRING,
        //allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        //allowNull: false,
      },
      hours_json: {
        type: DataTypes.JSON,
      },
    },
    { timestamps: false }
  );
};
