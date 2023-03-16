const router = require("express").Router();
const userService = require("../services/userService");

router.get("/:id", (req, res) => {});

router.get("/:userId/carts/:cartId", (req, res) => {
  const userId = req.params.userId;
  const cartId = req.params.cartId;

  userService.getProductsFromCart(userId, cartId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

//router.post();
// fortsätt här lektion 3 del 4 7 min in

router.get("/", (req, res) => {
  userService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post("/", (req, res) => {
  const user = req.body;
  userService.create(user).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put("/", (req, res) => {
  const user = req.body;
  const id = user.id;

  userService.update(user, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete("/", (req, res) => {
  const id = req.body.id;
  userService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});
module.exports = router;
