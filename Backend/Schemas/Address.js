const { Schema, model, default: mongoose } = require("mongoose")
const AddressSchema = new Schema({
    address: String,
    flatNumber: String,
    landmark: String,
    pincode: String,
    numberID: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },

}, {
    versionKey: false
})
const AddressModel = model("addresses", AddressSchema)
module.exports = AddressModel