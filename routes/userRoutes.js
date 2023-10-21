const express = require('express')
const userModel = require('../models/usermodel')



const router = express.Router()

//login
router.post('/login', async (req, res) =>{
    try {
    const {email, password} = req.body
    const user = await userModel.findOne({email, password})
    if (!user) {
        return res.status(404, 'user not found')
    }
    res.status(200, user)
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
})

//register

router.post("/register",async (req, res) =>{
    try {
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).json({
            success: true,
            newUser
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
})

module.exports = router