const express = require("express")
const { default: mongoose } = require("mongoose")
const Address = require("./Routes/Address.route")
const AddressModel = require("./Schemas/Address")
const cartModel = require("./Schemas/Cart.model")
const ProdModel = require("./Schemas/Prods.model")
const userModel = require("./Schemas/User.model")
const app = express()
app.use(express.json())
app.post("/users", async (req, res) => {
    const { phoneNumber } = req.body
    try {
        const user = await userModel.create({ phoneNumber: phoneNumber })
        res.send(user)
    } catch (error) {
        res.status(401).send("Something wrong")
    }
})
app.use("/address",Address)
app.get("/allProds", async (req, res) => {
    try {
        const allprods = await ProdModel.find()
        res.send(allprods)
    } catch (error) {
        res.status(401).send("request invalid")
    }
})
app.post("/cart", async (req, res) => {
    const { userID, prodID } = req.body
    try {
        const cartItem = await cartModel.create({ user: userID, product: prodID })
        res.send(cartItem)
    } catch (error) {
        res.status(401).send("unauthorized requiest")
    }
})
mongoose.connect("mongodb+srv://tendercuts:tendercuts@cluster0.hyunvkz.mongodb.net/TenderCutsMain").then(() => app.listen(8080, () => console.log("server satrted"))).catch(er => console.log(er))
