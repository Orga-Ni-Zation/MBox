var express = require('express');
var router = express.Router();
var GiftBoxController = require('./GiftBoxController.js');

/*
 * GET
 */
router.get('/', GiftBoxController.list);

/*
 * GET
 */
router.get('/:id', GiftBoxController.show);

/*
 * POST
 */
router.post('/', GiftBoxController.create);

/*
 * PUT
 */
router.put('/:id', GiftBoxController.update);

/*
 * DELETE
 */
router.delete('/:id', GiftBoxController.remove);

module.exports = router;
