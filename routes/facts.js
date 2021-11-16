const router = require("express").Router()

let facts_controller = require('../controllers/facts')



router.get('/', facts_controller.get)



module.exports = router