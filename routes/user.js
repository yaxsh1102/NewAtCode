const express = require("express")
const router = express.Router()

const { signup , login , add , get} = require("../controllers/auth")

router.post("/login" , login)

router.post("/signup" , signup)
router.post("/add" , add)
router.post("/get" , get)




module.exports = router