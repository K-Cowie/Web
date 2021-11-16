const router = require("express").Router()

let about_controller = require('../controllers/about')



router.get('/', about_controller.get)



module.exports = router