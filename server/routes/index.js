var path = require('path');

module.exports = function(app) {
  app.use('/user', require('../api/User/UserRoutes'));
  app.use('/interest', require('../api/Interest/InterestRoutes'));
  app.use('/product', require('../api/Product/ProductRoutes'));
  app.use('/freight', require('../api/Freight/FreightRoutes'));
  app.use('/giftbox', require('../api/GiftBox/GiftBoxRoutes'));
  app.use('/review', require('../api/Review/ReviewRoutes'));
  // recoge error 404 y redirect to Angular
  app.all('/*', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
  });
};
