const express = require("express");
const mongoose = require("mongoose");
const usermodel = require("../Model/usermodel");
const router = express.Router();
const bcrypt = require('bcrypt');
const secret = "BOOK";
router.use(express.urlencoded({ extended: false }));
router.use(express.json());


router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usermodel.findOne({ email });
        if (user) {
            return res.status(409).json({
                status: "Failed",
                message: "User Already Exists!"
            })
        }

        bcrypt.hash(password, 10, async function (err, hash) {
            // Store hash in your password DB.
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: err.message

                })
            }
            const data = await usermodel.create({
                email,
                password: hash
            })
            return res.status(201).json({
                status: "Success",
                message: "Registration is done successfully",
                data
            })

        })
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = router;


