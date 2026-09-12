const express = require("express");
// Ensure path matches your models directory and filename casing (e.g., ../models/Customer or ../models/customer)
const Customer = require("../Models/customer");

const router = express.Router();

// GET all customers
router.get("/", async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new customer
router.post("/", async (req, res) => {
    try {
        const customer = new Customer(req.body);
        const savedCustomer = await customer.save();

        res.status(201).json(savedCustomer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;