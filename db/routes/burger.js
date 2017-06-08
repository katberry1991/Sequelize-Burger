var express = require('express');
var router  = express.Router();

var burgers_controller = require('../controllers/burgers_controller');

router.post("/create", burgers_controller.create);

router.put("/update", burgers_controller.update);

module.exports = router;