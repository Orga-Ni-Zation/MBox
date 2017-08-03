var express = require('express');
var router = express.Router();
var InterestController = require('./InterestController.js');

router.get('/', InterestController.list);

router.get('/:id', InterestController.show);

router.post('/', InterestController.create);

router.put('/:id', InterestController.update);

router.delete('/:id', InterestController.remove);

module.exports = router;
