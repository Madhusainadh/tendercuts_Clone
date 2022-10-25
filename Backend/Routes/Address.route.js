const { Router } = require("express")
const AddressModel = require("../Schemas/Address")
const Address = Router()
Address.post("/find", async (req, res) => {

    const { number } = req.body

    try {
        const data = await AddressModel.find({ number: number })

        if (data.length === 0) res.send({ isFound: false })
        else res.send({ isFound: true, data: data })

    } catch (error) {
        res.status(401).send(error.message)
    }
})
Address.post("/create", async (req, res) => {
    console.log(req.body);
    const {name, address, flatNumber, landmark, pincode, number } = req.body

    try {
        const add = await AddressModel.create({ address: address, flatNumber: flatNumber, landmark: landmark, pincode: pincode, number: number })
        res.send(add)
    } catch (error) {
        res.status(401).send(error.message)

    }
})
module.exports = Address