const { Schema, model} = require("mongoose")
const AddressSchema = new Schema({
    address: String,
    flatNumber: String,
    landmark: String,
    pincode: String,
    number:String 
    }, {
    versionKey: false
})
const AddressModel = model("addresses", AddressSchema)
module.exports = AddressModel