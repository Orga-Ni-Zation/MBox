var express = require('express');
var router = express.Router();
var ProductController = require('./ProductController.js');


router.get('/', ProductController.list);
router.get('/category/:category', ProductController.listbycategory);
router.post('/new', ProductController.create);
router.get('/:id', ProductController.show);
router.put('/:id/edit', ProductController.update);
router.delete('/:id/delete', ProductController.remove);

module.exports = router;
