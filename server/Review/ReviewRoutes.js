var express = require('express');
var router = express.Router();
var ReviewController = require('./ReviewController.js');

/*
 * GET
 */
router.get('/', ReviewController.list);

/*
 * GET
 */
router.get('/:id', ReviewController.show);

/*
 * POST
 */
router.post('/', ReviewController.create);

/*
 * PUT
 */
router.put('/:id', ReviewController.update);

/*
 * DELETE
 */
router.delete('/:id', ReviewController.remove);

module.exports = router;
