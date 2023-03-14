const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

const constraints = {
  price: {
    numericality: {
      float: true,
      message: "Must be a double.",
    },
  },
  title: {
    length: {
      minimum: 1,
      maximum: 50,
      tooShort: "^Titlen för produkten måste vara minst %{count} tecken lång",
      tooLong: "^Titlen får max vara %{count} tecken lång",
    },
  },
  imgUrl: {
    message: "felaktig sökväg",
  },
};

router.get("/", (req, res) => {
  db.product.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const product = req.body;
  const invalidData = validate(product, constraints);

  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.product.create(product).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const product = req.body;
  // const invalidData = validate(product, constraints);
  const id = product.id;
  // if (invalidData || !id) {
  //   res.status(400).json(invalidData || "Id är obligatoriskt");
  // } else {
  db.product
    .update(product, {
      where: { id: product.id },
    })
    .then((result) => {
      res.send(result);
    });
  // }
});

router.delete("/", (req, res) => {
  const id = req.body.id;
  db.product
    .destroy({
      where: { id: id },
    })
    .then(() => {
      res.json(`Produken med id ${id}togs bort.`);
    });
});

module.exports = router;
