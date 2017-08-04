var express = require('express');
var router = express.Router();
var GiftBoxController = require('./GiftBoxController.js');


router.get('/', GiftBoxController.list);
router.get('/:id', GiftBoxController.show);
router.post('/new', GiftBoxController.create);
router.put('/:id', GiftBoxController.update);
router.delete('/:id', GiftBoxController.remove);

module.exports = router;
