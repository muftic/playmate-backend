const Pet = require("../models").pet;
const User = require("../models").user;
const { Router } = require("express");
const Photo = require("../models").photo;

const Like = require("../models").like;
const router = new Router();
const auth = require("../auth/middleware");

router.get("/pet/:id", async (req, res) => {
  const { id } = req.params;
  let pet = await Pet.findByPk(id);
  let receivedLikes = await Like.findAll({ where: { receiverId: id } });
  return res.status(200).send({ message: "Success!", receivedLikes });
});

router.get("/pets", async (req, res) => {
  console.log("dentro del enpoint /pets");
  let pets = await Pet.findAll({ include: [Photo] });
  return res.status(200).send({ message: "Success!", pets });
});

router.post("/pets", async (req, res) => {
  const { name, imageUrl, gender, age, species } = req.body;

  if (!name || !imageUrl || !gender || !age || species) {
    return res.status(400).send({ message: "Bad request" });
  }

  const pet = await Pet.create({
    name: name,
    imageUrl: imageUrl,
    gender: gender,
    age: age,
    species: species,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: req.user.id,
  });

  return res.status(201).send({ message: "Success!", pet });
});

router.get("/likes", async (req, res) => {
  let likes = await Like.findAll({});
  return res.status(200).send({ message: "Success!", likes });
});

router.post("/likes", async (req, res) => {
  const { giverId, receiverId, type } = req.body;
  console.log("A VER Moria!", giverId, receiverId, type);

  if (!giverId || !receiverId || !type) {
    return res.status(400).send({ message: "Bad request" });
  }

  const like = await Like.create({
    giverId: giverId,
    receiverId: receiverId,
    type: type,
  });

  return res.status(201).send({ message: "Success!", like });
});

router.post("/photos", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send({ message: "Bad request" });
  }
  const photo = await Photo.create({
    url: url,

    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return res.status(201).send({ message: "Success!", photo });
});
/* router.delete("/photos", async (req, res) => {
  let deleted = await Photo.findAll({});
  return res.status(200).send({ message: "Success!", likes });
}); */

router.patch("/myProfile/", auth, async (req, res) => {
  const { id } = req.user.id;

  const user = await User.findByPk(id);

  if (u === null) {
    return res.status(404).send({ message: "Artwork not found" });
  }

  const { location } = req.body;

  await user.update({ location: location });

  res.status(200).send({ message: "Success!", user });
});

module.exports = router;
