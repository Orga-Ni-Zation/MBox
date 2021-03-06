var path = require('path');

module.exports = function(app) {
  app.use('/user', require('../api/User/UserRoutes'));
  app.use('/product', require('../api/Product/ProductRoutes'));
  app.use('/giftbox', require('../api/GiftBox/GiftBoxRoutes'));
  app.use('/review', require('../api/Review/ReviewRoutes'));
  // recoge error 404 y redirect to Angular
  app.all('/*', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
  });
};
