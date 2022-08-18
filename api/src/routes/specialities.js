const { Router } = require("express");
const router = Router();
const { Specialities } = require("../db.js");
const { getAllSpecialities } = require("../controllers/index");

// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get("/", async (req, res, next) => {
  const {name} = req.query
  console.log(name)
  try {
    const allSpecialities = await getAllSpecialities();
    const specialitiesDb = await Specialities.findAll();
    if (!specialitiesDb.length) {
      await Specialities.bulkCreate(allSpecialities);
      res.status(200).send(allSpecialities);
    } 

    if(name){
      const nombre = await allSpecialities.filter((e)=> 
        e.name.toLowerCase().includes(name.toLowerCase())
      )
      console.log(nombre)
      if(nombre){
        res.status(200).send(nombre)
      }
      else{
        res.status(400).send("The speciality doesn't exist")
      }
    }
    // console.log(allSpecialities, "soy allSpecialities");
 else {
      res.status(200).send(allSpecialities);
    }

  } catch (error) {
    res.status(404).send("Error en el catch getSpecialities", error);
  }
});
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const allSpecialities = await getAllSpecialities();
   

    const specialities = await allSpecialities.find((e) => e.id === id);
    if (specialities) {
      res.status(200).send(specialities);
    } else {
      res.status(400).send("the specialitie is not enable");
    }

    
  } catch (error) {
    res.status(404).send("Error en el catch de specialitiesID", error);
  }
});

module.exports = router;
