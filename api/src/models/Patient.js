const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "patient",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue("name", value[0].toUpperCase() + value.slice(1));
        },
      },

      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue(
            "last_name",
            value[0].toUpperCase() + value.slice(1)
          );
        },
      },

      user_name: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("user_name", value.toLowerCase());
        },
      },

      document: {
        type: DataTypes.INTEGER,
      },

      type_document: {
        type: DataTypes.STRING,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue("email", value.toLowerCase());
        },
      },

      phone: {
        type: DataTypes.STRING,
      },

      nationality: {
        type: DataTypes.STRING,
      },

      direction: {
        type: DataTypes.TEXT,
      },

      birthday: {
        type: DataTypes.STRING,
      },

      medical_history: {
        type: DataTypes.TEXT,
      },

      picture: {
        type: DataTypes.STRING,
      },

      prepaid_health: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
