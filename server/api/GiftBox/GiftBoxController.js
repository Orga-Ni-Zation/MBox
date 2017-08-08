var GiftBoxModel = require('./GiftBoxModel.js');
const User = require('../User/UserModel');
const ProductModel = require('../Product/ProductModel');


module.exports = {

  list: function(req, res) {
    GiftBoxModel.find().then( GiftBoxs => {
      res.json(GiftBoxs);
    }).catch( err =>{
        res.status(500).json({
          message: 'Error when getting GiftBox.',
          error: err
        });
      });
  },


  show: function(req, res) {
    var id = req.params.id;
    GiftBoxModel.findOne({
      _id: id
    }, function(err, GiftBox) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting GiftBox.',
          error: err
        });
      }
      if (!GiftBox) {
        return res.status(404).json({
          message: 'No such GiftBox'
        });
      }
      return res.json(GiftBox);
    });
  },


  create: (req, res) => {
    console.log('imprimiendo req.body.userId' + req.body.userId);
    const userId = req.body.userId;
    console.log("error" + userId);
    User.findOne({
      _id: userId
    }, (err, user) => {
      const {
        interest,
        gender
      } = user;
      ProductModel.find({
        gender: gender,
        category: {
          $in: interest
        },
        priceCategory: ['low']
      }, (err, products) => {
        const randomProductLow = products[Math.floor(Math.random() * products.length)];
        console.log("hola amigo " + randomProductLow);
        const randomProductLowId = randomProductLow._id;
        console.log(randomProductLowId);
        ProductModel.find({
          gender: gender,
          category: {
            $in: interest
          },
          priceCategory: ['medium']
        }, (err, products) => {
          const randomProductMedium = products[Math.floor(Math.random() * products.length)];
          console.log(randomProductMedium);
          const randomProductMediumId = randomProductMedium._id;
          console.log(randomProductMediumId);
          ProductModel.find({
            gender: gender,
            category: {
              $in: interest
            },
            priceCategory: ['high']
          }, (err, products) => {
            const randomProductHigh = products[Math.floor(Math.random() * products.length)];
            console.log(randomProductHigh);
            const randomProductHighId = randomProductHigh._id;
            console.log(randomProductHighId);
            var giftBox = new GiftBoxModel({
              userId: req.body.userId,
              address: req.body.address,
              recieve: req.body.recieve,
              delivery: req.body.delivery,
              productsID: [randomProductLowId, randomProductMediumId, randomProductHighId]
            });
            giftBox.save(function(err, GiftBox) {
              if (err) {
                return res.status(500).json({
                  message: 'Error when creating GiftBox',
                  error: err
                });
              }

            });
            if (err) {
              return res.status(500).json({
                message: 'Error when getting Product by category.',
                error: err
              });
            }
            if (!products.length) {
              return res.status(404).json({
                message: 'No such Product'
              });
            }
          });
        });
      });
    });

  },


  update: function(req, res) {
    var id = req.params.id;
    GiftBoxModel.findOne({
      _id: id
    }, function(err, GiftBox) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting GiftBox',
          error: err
        });
      }
      if (!GiftBox) {
        return res.status(404).json({
          message: 'No such GiftBox'
        });
      }

      GiftBox.productID = req.body.productID ? req.body.productID : GiftBox.productID;

      GiftBox.save(function(err, GiftBox) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating GiftBox.',
            error: err
          });
        }

        return res.json(GiftBox);
      });
    });
  },


  remove: function(req, res) {
    var id = req.params.id;
    GiftBoxModel.findByIdAndRemove(id, function(err, GiftBox) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the GiftBox.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
