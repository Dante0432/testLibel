const express = require("express")
const router = express.Router()
const apiController = require("./../controllers/apiController")

router.get("/users", apiController.getActiveUsers)
router.post("/login", apiController.login)

module.exports = router