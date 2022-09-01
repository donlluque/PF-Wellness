const { Router } = require("express");
const router = Router();
const { Review , Doctor} = require("../db.js");

router.post("/", async (req, res, next) => {
    const {name,review,rating,doctorId}= req.body
    try {
  
      
        let newReview = await Review.create({
            name,
            review,
            rating,
          });
        if(doctorId){
          const doctor = await Doctor.findOne({
            where: { id : doctorId },
          });
          await newReview.addDoctor(doctor)
        }
      
          res.status(200).json(newReview);
        
    } catch (error) {
        next(error)
    }

})

router.get("/", async (req, res, next) => {
    const { doctorId } = req.query;
    try {
      const reviewDB = await Review.findAll({
        include: [
          {
            model: Doctor,      
            attributes: ['id','name'],
          },]
      });
    
      if (doctorId) {
       
        const conDoc = await reviewDB.filter((e) => e.dataValues.doctors[0]
        //   )
        );
      
        const iddoc= await conDoc.filter((e)=>e.dataValues.doctors[0].dataValues.id==doctorId)
        
        iddoc.length
          ? res.status(200).send(iddoc)
          : res.status(400).send("Not exist");
      } else if (!reviewDB.length) {
        res.status(400).send("No existe info en la Base de datos");
      } else {
        res.send(reviewDB);
      }
    } catch (error) {
      res.status(400).send('Ocurrio un error al buscar las reviews',error)
    }
    
  });

module.exports = router;