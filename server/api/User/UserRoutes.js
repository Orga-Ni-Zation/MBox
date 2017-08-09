const express = require('express');
var controller = require('./auth.controller');
const upload = require('../../config/multer');


var router = express.Router();

router.get('/' , controller.listUser);
router.post('/signup', upload.single('file'), controller.signUp);
router.post('/login', controller.logIn);
router.get('/loggedin' , controller.logStill);
router.post('/logout', controller.logOut);
router.get('/private', controller.private);
router.put('/:id/edit', controller.editUser);
router.delete('/:id/delete', controller.removeUser);


module.exports = router;

function ensureLoginOrJsonError(error = "Unauthorized") {
  return (req, res, next) => req.isAuthenticated() ? next() : res.status(403).json({ error: error});
}
