const { Schema, model } = require("mongoose")
const userSchema = new Schema({
    name: String,
    phoneNumber: Number,
    address: String,
},{
    versionKey:false

})
const userModel = model("Users", userSchema)
module.exports = userModel