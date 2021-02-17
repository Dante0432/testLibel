const express = require("express")
const router = express.Router()
const apiController = require("./../controllers/apiController")
const { verifyToken } = require("../utils/miscellany")

router.get("/users", verifyToken, apiController.getActiveUsers)
router.post("/login", apiController.login)
router.post("/createUser", apiController.createUser)

module.exports = router