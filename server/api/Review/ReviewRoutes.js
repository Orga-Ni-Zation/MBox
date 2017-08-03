var express = require('express');
var router = express.Router();
var ReviewController = require('./ReviewController.js');


router.get('/', ReviewController.list);
router.get('/:id', ReviewController.show);
router.post('/', ReviewController.create);
router.put('/:id', ReviewController.update);
router.delete('/:id', ReviewController.remove);

module.exports = router;
