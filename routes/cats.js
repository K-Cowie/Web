const router = require("express").Router()

let cats_controller = require('../controllers/cats')



router.get('/', cats_controller.get)



module.exports = router