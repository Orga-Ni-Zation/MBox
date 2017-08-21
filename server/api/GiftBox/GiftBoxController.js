const GiftBoxModel = require('./GiftBoxModel.js');
const User = require('../User/UserModel');
const ProductModel = require('../Product/ProductModel');


module.exports = {

  list: function(req, res) {
    GiftBoxModel.find().then(GiftBoxs => {
      res.json(GiftBoxs);
    }).catch(err => {
      res.status(500).json({
        message: 'Error when getting GiftBox.',
        error: err
      });
    });
  },

    listbyUser: function(req, res) {
      console.log(req.params.id);
      var userSearch = req.params.id;

      GiftBoxModel.find({
        userId: userSearch
      }, function(err, GiftBox) {

        if (err) {
          return res.status(500).json({
            message: 'Error when getting Product by category.',
            error: err
          });
        }
        if (!GiftBox) {
          return res.status(404).json({
            message: 'No such Product'
          });
        }
        res.status(200).json(GiftBox);
      });
    },



  show: function(req, res) {
    var id = req.params.id;
    console.log('estoy imprimiendo id' + id);
    GiftBoxModel.find({
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
    console.log('imprimiendo req.body.userId => ' + req.body.userId);
    const {
      userId
    } = req.body;
    console.log("UserID => " + userId);
    User.findOne({
      _id: userId
    }, (err, user) => {
      const {
        interests,
        gender
      } = user;

      if (user.gender && user.interests) {
        ProductModel.find({
          gender: gender,
          category: {
            $in: interests
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
              $in: interests
            },
            priceCategory: ['medium']
          }, (err, products) => {
            const randomProductMedium = products[Math.floor(Math.random() * products.length)];
            console.log(randomProductMedium);
            const randomProductMediumId = randomProductMedium._id;
            console.log(randomProductMediumId);
            ProductModel.find({
              gender: gender,
              category: { $in: interests },
              priceCategory: ['high']
            }, (err, products) => {
              const randomProductHigh = products[Math.floor(Math.random() * products.length)];
              console.log(randomProductHigh);
              const randomProductHighId = randomProductHigh._id;
              console.log(randomProductHighId);
              let giftBox = new GiftBoxModel({
                userId: req.body.userId,
                address: req.body.address,
                recieve: req.body.recieve,
                delivery: req.body.delivery,
                status: req.body.status,
                productsID: [randomProductLowId, randomProductMediumId, randomProductHighId]
              });
              giftBox.save()
                .then(res => res.json())
                .catch(err => res.json(err));

            });
          });
        });
      }else{
        console.log("don't have the product");
      }
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
      GiftBox.status = req.body.status ? req.body.status : GiftBox.status;


      GiftBox.save((err, GiftBox) => {
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
