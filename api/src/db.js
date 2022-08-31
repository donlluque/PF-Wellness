require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,

        { logging: false, native: false }
      );

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/wellness`,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// );

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const {
  Doctor,
  Patient,
  Dates1,
  Prepaid_health,
  Work_days,
  Hours_working,
  General_area,
  Absence,
  Review,
} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// Patient.belongsToMany(Doctor, { through: Dates1 });
// Doctor.belongsToMany(Patient, { through: Dates1 });
Doctor.belongsToMany(Review, { through: "Review_Doctor", timestamps: false });
Review.belongsToMany(Doctor, { through: "Review_Doctor", timestamps: false });

// General_area.hasMany(Doctor, {
//   foreignKey: "Doctor_General_Area",
//   timestamps: false,
// });
General_area.hasMany(Doctor, {
  foreignKey: 'areaId'
});
Doctor.belongsTo(General_area, {foreignKey: 'areaId'});

Doctor.belongsToMany(Absence, {
  through: "Doctor_Absence",
  timestamps: false,
});
Absence.belongsToMany(Doctor, {
  through: "Doctor_Absence",
  timestamps: false,
});

Doctor.belongsToMany(Prepaid_health, {
  through: "Doctor_Prepaid_Health",
  timestamps: false,
});
Prepaid_health.belongsToMany(Doctor, {
  through: "Doctor_Prepaid_Health",
  timestamps: false,
});

Dates1.belongsToMany(Doctor, { through: "Doctor_Dates1", timestamps: false });
Doctor.belongsToMany(Dates1, { through: "Doctor_Dates1", timestamps: false });

Dates1.belongsToMany(Patient, { through: "Patient_Dates1", timestamps: false });
Patient.belongsToMany(Dates1, { through: "Patient_Dates1", timestamps: false });

Dates1.belongsToMany(Hours_working, {
  through: "Hours_Working_Dates1",
  timestamps: false,
});
Hours_working.belongsToMany(Dates1, {
  through: "Hours_Working_Dates1",
  timestamps: false,
});

Patient.belongsToMany(Prepaid_health, {
  through: "Patient_Prepaid_Health",
  timestamps: false,
});
Prepaid_health.belongsToMany(Patient, {
  through: "Patient_Prepaid_Health",
  timestamps: false,
});

Doctor.belongsToMany(Work_days, {
  through: "Doctor_Work_Days",
  timestamps: false,
});
Work_days.belongsToMany(Doctor, {
  through: "Doctor_Work_Days",
  timestamps: false,
});

// Doctor.belongsToMany(Patient, { through: "doctorPatient", timestamps: false });
// Patient.belongsToMany(Doctor, { through: "doctorPatient", timestamps: false });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
