var GiftBoxModel = require('./GiftBoxModel.js');
const User = require('../User/UserModel');
const ProductModel = require('../Product/ProductModel');


module.exports = {

    list: function (req, res) {
        GiftBoxModel.find(function (err, GiftBoxs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting GiftBox.',
                    error: err
                });
            }
            return res.json(GiftBoxs);
        });
    },


    show: function (req, res) {
        var id = req.params.id;
        GiftBoxModel.findOne({_id: id}, function (err, GiftBox) {
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
        console.log('imprimiendo req.bode.userId' + req.body.userId);
         const userId = req.body.userId;
         console.log(userId);
         User.findOne({_id: userId}, (err, user) => {
           const {interest, gender} = user;
          //  getProductRandom(interest,gender);
          //  getProductRandom(interest,gender);
          //  getProductRandom(interest,gender);

          ProductModel.find({
            gender : gender,
            category: { $in: interest },
            priceCategory: ['low']
          },  (err, products) => {
               const randomProductLow = products[Math.floor(Math.random()*products.length)];
               console.log(randomProductLow);
               const randomProductLowId = randomProductLow._id;
               console.log(randomProductLowId);

               var giftBox = new GiftBoxModel({
                    userId: req.body.userId,
                    address: req.body.address,
                    recieve: req.body.recieve,
                    delivery: req.body.delivery,
                    products: [randomProductLowId]
               });
               giftBox.save(function (err, GiftBox) {
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
            // const randomProductMedium = products[Math.floor(Math.random()*product.length)];
            // const randomProductHigh = products[Math.floor(Math.random()*product.length)];
          });
        });

    },


    update: function (req, res) {
        var id = req.params.id;
        GiftBoxModel.findOne({_id: id}, function (err, GiftBox) {
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

            GiftBox.save(function (err, GiftBox) {
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


    remove: function (req, res) {
        var id = req.params.id;
        GiftBoxModel.findByIdAndRemove(id, function (err, GiftBox) {
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


function getProductRandom(interest,gender){
ProductModel.find({
  gender : gender,
  category: { $in: interest },
  priceCategory: ['low']
},  (err, products) => {
     const randomProductLow = products[Math.floor(Math.random()*products.length)];
     console.log(randomProductLow);
     const randomProductLowId = randomProductLow._id;
     console.log(randomProductLowId);

   });
//    ProductModel.find({
//      gender : gender,
//      category: { $in: interest },
//      priceCategory: ['medium']
//    },  (err, products) => {
//         const randomProductMedium = products[Math.floor(Math.random()*products.length)];
//         console.log(randomProductLow);
//         const randomProductMediumId = randomProductMedium._id;
//         console.log(randomProductMediumId);
//       });
//       ProductModel.find({
//         gender : gender,
//         category: { $in: interest },
//         priceCategory: ['high']
//       },  (err, products) => {
//            const randomProductHigh = products[Math.floor(Math.random()*products.length)];
//            console.log(randomProductHigh);
//            const randomProductHighId = randomProductHigh._id;
//            console.log(randomProductHighId);
//
//          });
}
//
//
