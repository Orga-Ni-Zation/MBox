var express = require('express');
var router = express.Router();
var ProductController = require('./ProductController.js');


router.get('/', ProductController.list);
router.post('/new', ProductController.create);
router.get('/:id', ProductController.show);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.remove);

module.exports = router;
