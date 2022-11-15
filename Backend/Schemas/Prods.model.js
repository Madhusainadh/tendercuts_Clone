const { Schema, model } = require("mongoose")
const prodSchema = new Schema({
    details: String,
    image: String,
    weight: String,
    Serves: String,
    price: Number,
    mrp: Number,
    stoke: Number,
    youtube: String,
    type: String,
    id: Number

}, {
    versionKey: false
})
const ProdModel = model("allprods", prodSchema)
module.exports = ProdModel
