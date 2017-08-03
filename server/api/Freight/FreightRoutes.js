var express = require('express');
var router = express.Router();
var FreightController = require('./FreightController.js');


router.get('/', FreightController.list);

router.get('/:id', FreightController.show);

router.post('/', FreightController.create);

router.put('/:id', FreightController.update);

router.delete('/:id', FreightController.remove);

module.exports = router;
