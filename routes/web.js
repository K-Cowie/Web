const router = require("express").Router()

let web_controller = require('../controllers/web')



router.get('/', web_controller.get)



module.exports = router