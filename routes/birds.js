const router = require("express").Router()

let birds_controller = require('../controllers/birds')



router.get('/', birds_controller.get)



module.exports = router