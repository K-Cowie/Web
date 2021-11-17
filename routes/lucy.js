const router = require("express").Router()

let lucy_controller = require('../controllers/lucy')



router.get('/', lucy_controller.get)



module.exports = router