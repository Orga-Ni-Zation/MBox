var express = require('express');
var router = express.Router();
var FreightController = require('./FreightController.js');

/*
 * GET
 */
router.get('/', FreightController.list);

/*
 * GET
 */
router.get('/:id', FreightController.show);

/*
 * POST
 */
router.post('/', FreightController.create);

/*
 * PUT
 */
router.put('/:id', FreightController.update);

/*
 * DELETE
 */
router.delete('/:id', FreightController.remove);

module.exports = router;
