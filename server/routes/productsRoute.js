const router = require("express").Router();
const db = require("../models");
const productService = require("../services/productService");

router.get("/:id", (req, res) => {
  const id = req.params.id;

  productService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post("/:id/addRating", (req, res) => {
  const rating = req.body;
  const id = req.params.id;

  productService.addRating(id, rating).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post("/:id/addToCart", (req, res) => {
  const userId = 2;
  const productId = req.params.id;
  const cartRow = req.body;

  productService.addProductToCart(userId, productId, cartRow).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/", (req, res) => {
  productService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post("/", (req, res) => {
  const product = req.body;
  productService.create(product).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put("/", (req, res) => {
  const product = req.body;
  const id = product.id;

  productService.update(product, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete("/", (req, res) => {
  const id = req.body.id;
  productService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/:id/ratings", (req, res) => {
  const id = req.params.id;

  productService.getProductRatings(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
