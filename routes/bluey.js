const router = require("express").Router()

let bluey_controller = require('../controllers/bluey')



router.get('/', bluey_controller.get)



module.exports = router