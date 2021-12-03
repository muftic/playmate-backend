const Pet = require("../models").pet;
const User = require("../models").user;
const { Router } = require("express");
const Photo = require("../models").photo;

const Like = require("../models").like;
const router = new Router();
const auth = require("../auth/middleware");

router.get("/pets", async (req, res) => {
  let pets = await Pet.findAll({ include: [Photo] });
  return res.status(200).send({ message: "Success!", pets });
});

router.get("/likes", async (req, res) => {
  let likes = await Like.findAll({});
  return res.status(200).send({ message: "Success!", likes });
});

/* 
include: [
      {
        model: Pet,
        as: `receiver`,
      },
    ],
*/

module.exports = router;
