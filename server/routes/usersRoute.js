const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

const constraints = {
  email: {
    length: {
      minimum: 4,
      maximum: 50,
      tooShort: "^Email-adressen måste vara minst %{count} tecken lång",
      tooLong: "^Email-adressen får max vara %{count} tecken lång",
    },
    email: {
      message: "Du måste ange en giltlig email-adress",
    },
  },
};

router.get("/", (req, res) => {
  db.user.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(user, constraints);

  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.user.create(user).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(user, constraints);
  const id = user.id;
  if (invalidData || !id) {
    res.status(400).json(invalidData || "Id är obligatoriskt");
  } else {
    db.user
      .update(user, {
        where: { id: user.id },
      })
      .then((result) => {
        res.send(result);
      });
  }
});

router.delete("/", (req, res) => {
  const email = req.body.email;
  db.user
    .destroy({
      where: { id: req.body.id },
    })
    .then(() => {
      res.json(`Användaren med e-post ${email} togs bort.`);
    });
});
module.exports = router;
