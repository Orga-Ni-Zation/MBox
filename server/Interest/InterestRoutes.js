var express = require('express');
var router = express.Router();
var InterestController = require('./InterestController.js');

/*
 * GET
 */
router.get('/', InterestController.list);

/*
 * GET
 */
router.get('/:id', InterestController.show);

/*
 * POST
 */
router.post('/', InterestController.create);

/*
 * PUT
 */
router.put('/:id', InterestController.update);

/*
 * DELETE
 */
router.delete('/:id', InterestController.remove);

module.exports = router;
