const express = require('express');
const router = express.Router();
const GiftBoxController = require('./GiftBoxController.js');

router.get('/', GiftBoxController.list);
router.get('/:id', GiftBoxController.show);
router.post('/new', GiftBoxController.create);
router.put('/:id/edit', GiftBoxController.update);
router.get('/user/:id/', GiftBoxController.listbyUser);
router.delete('/:id', GiftBoxController.remove);

module.exports = router;
