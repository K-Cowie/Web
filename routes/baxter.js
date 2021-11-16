const router = require("express").Router()

let baxter_controller = require('../controllers/baxter')



router.get('/', baxter_controller.get)



module.exports = router