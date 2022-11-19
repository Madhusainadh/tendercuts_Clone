const { Schema, model, default: mongoose } = require("mongoose");
const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "addresses",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "allprods",
      required: true,
    },
    quantity: { type: Number, default: 1 },
  },
  {
    versionKey: false,
  }
);
const cartModel = model("cartItem", cartSchema);
module.exports = cartModel;
