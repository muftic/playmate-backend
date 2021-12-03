const Pet = require("../models").pet;
const User = require("../models").user;
const { Router } = require("express");
const Like = require("../models").like;
const router = new Router();
const auth = require("../auth/middleware");

router.get("/pets", async (req, res) => {
  let pets = await Pet.findAll({});
  return res.status(200).send({ message: "Success!", pets });
});

router.get("/likes", async (req, res) => {
  let likes = await Like.findAll({});
  return res.status(200).send({ message: "Success!", likes });
});
/* 
router.post("/submissions", async (req, res) => {
  const { classification, imageUrl, score, userId, challengeId } = req.body;
  /*  let probabilities = classification.probs.map(function (prob, i) {
    if (prob.label === "soccer ball") {
      return prob.confidence;
    } */

module.exports = router;
