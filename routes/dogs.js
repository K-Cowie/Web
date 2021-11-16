const router = require("express").Router()

let dogs_controller = require('../controllers/dogs')



router.get('/', dogs_controller.get)



module.exports = router