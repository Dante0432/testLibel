const express = require("express")
const router = express.Router()
const apiController = require("./../controllers/apiController")

router.get("/users", apiController.getActiveUsers)
router.post("/login", apiController.login)
router.post("/createUser", apiController.createUser)

module.exports = router