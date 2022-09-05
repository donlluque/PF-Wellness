const { Router } = require("express");
const router = Router();
const { Review, Doctor } = require("../db.js");

router.post("/", async (req, res, next) => {
  const { name, review, rating, doctors } = req.body;
  console.log(doctors, "dotor");
  try {
    let newReview = await Review.create({
      name,
      review,
      rating,
    });
    if (doctors) {
      const doctor = await Doctor.findOne({
        where: { id: doctors },
      });
      await newReview.addDoctor(doctor);
    }

    res.status(200).json(newReview);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const { doctors } = req.query;
  console.log(doctors, "hola");
  try {
    const reviewDB = await Review.findAll({
      include: [
        {
          model: Doctor,
          attributes: ["id", "name"],
        },
      ],
    });

    console.log(reviewDB[0], "chau");

    if (doctors) {
      const conDoc = await reviewDB.filter(
        (e) => e.dataValues.doctors[0]
        //   )
      );

      console.log(conDoc, "hoola");

      const iddoc = await conDoc.filter(
        (e) => e.dataValues.doctors[0].dataValues.id == doctors
      );

      console.log(iddoc, "hoola");

      iddoc.length
        ? res.status(200).send(iddoc)
        : res.status(400).send("Not exist");
    } else if (!reviewDB.length) {
      res.status(400).send("No existe info en la Base de datos");
    } else {
      res.send(reviewDB);
    }
  } catch (error) {
    res.status(400).send("Ocurrio un error al buscar las reviews", error);
  }
});

module.exports = router;
