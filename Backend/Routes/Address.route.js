const { Router } = require("express");
const AddressModel = require("../Schemas/Address");
const Address = Router();
Address.post("/find", async (req, res) => {
  const { number } = req.body;

  try {
    const data = await AddressModel.find({ number: number });

    if (data.length === 0) res.send({ isFound: false });
    else res.send({ isFound: true, data: data });
  } catch (error) {
    res.status(401).send(error.message);
  }
});
Address.post("/create", async (req, res) => {
  try {
    const add = await AddressModel.create(req.body);
    res.send(add);
  } catch (error) {
    res.status(401).send(error.message);
  }
});
Address.post("/create/multiple", async (req, res) => {
  try {
    const add = await AddressModel.create(req.body);
    res.send(add);
  } catch (error) {
    res.status(401).send(error.message);
  }
});
module.exports = Address;
