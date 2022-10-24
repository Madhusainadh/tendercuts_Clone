const { Schema, model } = require("mongoose")
const userSchema = new Schema({
    phoneNumber: String,
}, {
    versionKey: false

})
const userModel = model("Users", userSchema)
module.exports = userModel