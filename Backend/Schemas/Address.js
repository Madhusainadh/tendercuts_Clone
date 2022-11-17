const { Schema, model } = require("mongoose")
const AddressSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: String,
    flatNumber: String,
    landmark: String,
    pincode: String,
    number: String
}, {
    versionKey: false
})
const AddressModel = model("addresses", AddressSchema)
module.exports = AddressModel