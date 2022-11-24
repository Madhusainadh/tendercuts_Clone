const express = require("express");
const authmiddleware = require("../middlewares/AuthMiddlewares");
// const CartModel = require("./cart.model");
const CartModel = require("../Schemas/Cart.model");

const app = express.Router();
app.use(authmiddleware);

app.get("/", async (req, res) => {
  let id = req.userID;
  
  try {
    let cart = await CartModel.find({ user: id }).populate(["user", "product"]);
    res.send(cart);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/create", async (req, res) => {
  const { product, quantity } = req.body;

  const user = req.userID;

  let existingProduct = await CartModel.findOne({ user, product });
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
      let data = await CartModel.create({ product, quantity, user });
      res.status(200).send("item created successfully");
    } catch (error) {
      res.status(401).send(error.message);
    }
  }
});



app.post("/update", async (req, res) => {
   
  const { type, product } = req.body;
   
  const user = req.userID;
  const existingProduct = await CartModel.findOne({ user, product });
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
  const { product } = req.body;
  const user = req.userID;
  const existingProduct = await CartModel.findOne({ user, product });
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
