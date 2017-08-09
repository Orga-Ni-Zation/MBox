const express = require('express');
const router = express.Router();
const ProductController = require('./ProductController.js');
const upload = require('../../config/multer');


router.get('/', ProductController.list);
router.get('/category/:category', ProductController.listbycategory);
router.post('/new', upload.single('file'), ProductController.create);
router.get('/:id', ProductController.show);
router.put('/:id/edit', ProductController.update);
router.delete('/:id/delete', ProductController.remove);

module.exports = router;
