const express = require("express");
const authmiddleware = require("../middlewares/AuthMiddlewares");
// const CartModel = require("./cart.model");
const CartModel = require("../Schemas/Cart.model");

const app = express.Router();
app.use(authmiddleware)
app.get("/", async (req, res) => {
  let cart = await CartModel.find();
  res.send(cart);
});

app.get("/", async (req, res) => {
  try {
    let id = req.params.id;
    let cart = await CartModel.find({ user: id }).populate([
      "userID",
      "productID",
    ]);
    res.send(cart);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/create", async (req, res) => {
  const { productID, quantity } = req.body;
  const userID = req.userID;
  let existingProduct = await CartModel.findOne({ userID, productID });
  if (existingProduct) {
    try {
      let updateProduct = await CartModel.findByIdAndUpdate(
        existingProduct._id,
        { $set: { quantity: existingProduct.quantity + 1 } }
      );
      res.send({ message: "item updated successfully" });
    } catch (error) {
      res.status(404).send(e.message);
    }
  } else {
    try {
      let data = await CartModel.create({ productID, quantity, userID });
      res.status(200).send("item created successfully");
    } catch (error) {
      res.status(401).send(error.message);
    }
  }
});

app.post("/update", async (req, res) => {
  const { type, productID } = req.body;
  const userID = req.headers.userID;
  const existingProduct = await CartModel.findOne({ userID, productID });
  try {
    if (type === "desc") {
      let updateProduct = await CartModel.findByIdAndUpdate(
        existingProduct._id,
        { $set: { quantity: existingProduct.quantity - 1 } }
      );
      res.send({ message: "item updated successfully" });
    } else {
      let updateProduct = await CartModel.findByIdAndUpdate(
        existingProduct._id,
        { $set: { quantity: existingProduct.quantity + 1 } }
      );
      res.send({ message: "item updated successfully updated" });
    }
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

app.post("/remove", async (req, res) => {
  const { productID } = req.body;
  const userID = req.headers.userid;
  const existingProduct = await CartModel.findOne({ userID, productID });
  if (existingProduct) {
    try {
      await CartModel.findByIdAndDelete(existingProduct._id);
      res.send({ message: "item deleted successfully" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  } else {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
