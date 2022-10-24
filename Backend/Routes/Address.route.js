const { Router } = require("express")
const AddressModel = require("../Schemas/Address")
const userModel = require("../Schemas/User.model")
const Address = Router()
Address.post("/find", async (req, res) => {
    const { id } = req.body
    try {
        const data = await AddressModel.find({ numberID: id })
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})
Address.post("/create", async (req, res) => {
    const { address, flatNumber, landmark, pincode, numberID } = req.body
   
    try {
        const add = await AddressModel.create({ address: address, flatNumber: flatNumber, landmark: landmark, pincode: pincode, numberID: numberID })
        res.send(add)
    } catch (error) {
        res.status(401).send(error.message)

    }
})
module.exports = Address