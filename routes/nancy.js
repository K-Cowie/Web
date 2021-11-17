const router = require("express").Router()

let nancy_controller = require('../controllers/nancy')



router.get('/', nancy_controller.get)



module.exports = router