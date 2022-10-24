const { Schema, model, default: mongoose } = require("mongoose")
const cartSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "carts", required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "allprods", required: true }
}, {
    versionKey: false
})
const cartModel = model("carts", cartSchema)
module.exports = cartModel