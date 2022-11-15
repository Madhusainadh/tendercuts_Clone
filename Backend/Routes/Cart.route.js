const express = require("express");
// const Carts = require("./cart.model");
const Carts = require("../Schemas/Cart.model")

const app = express.Router();

app.get("/", async (req, res) => {
  let cart = await Carts.find();
  res.send(cart);
});


app.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let cart = await Carts.find({ user: id });
    res.send(cart);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/", async (req, res) => {
  try {
    await Carts.create(req.body);
    return res.status(200).send("Product Added to the cart!");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// app.post("/cart", async (req, res) => {
//     const { userID, prodID } = req.body
//     try {
//         console.log(req.body)
//         const cartItem = await cartModel.create({ user: userID, product: prodID })
//         res.send(cartItem)
//     } catch (error) {
//         res.status(401).send("unauthorized requiest")
//     }
// })
app.patch("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await Carts.findByIdAndUpdate({ _id: id }, { ...req.body });
    res.send("Updated!");
  } catch (e) {
    res.status(500).send(e);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let cart = await Carts.findByIdAndDelete(id);
    if (!cart) {
      res.send("Product not found!");
    }
    res.send("Deleted Successfully!");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = app;
