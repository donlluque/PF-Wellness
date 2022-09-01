const { Router } = require("express");
const router = Router();
const { Review, Doctor } = require("../db.js");

router.post("/", async (req, res, next) => {
  const { name, review, rating, doctors } = req.body;
  try {
    const doctor = await Doctor.findOne({
      where: { id: doctors },
    });

    let newReview = await Review.create({
      name,
      review,
      rating,
    });
    await newReview.addDoctor(doctor);
    res.status(200).json(newReview);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {

    const { doctorId } = req.query;
    const reviewDB = await Review.findAll(
      
    );
  
    if (doctorId) {
      const iddoc = await reviewDB.filter((e) =>e.doctorId==doctorId
        )
      ;
      iddoc.length
        ? res.status(200).send(iddoc)
        : res.status(400).send("Not exist");
    } else if (!reviewDB.length) {
      res.status(400).send("No existe info en la Base de datos");
    } else {
      res.send(reviewDB);
    }
  });

// router.get("/:doctorId", async (req, res, next) => {
//     const { doctorId } = req.params;

//     try {
//       const review = await Review.findAll({
//         where: { doctorId },
//       });

//       if (doctorId) {
//         res.status(200).send(review);
//       } else {
//         res.status(400).send("the doctor is not enable");
//       }
//     } catch (error) {
//       res.status(404).send("Error en el catch de doctorID");
//     }
//   });

module.exports = router;
