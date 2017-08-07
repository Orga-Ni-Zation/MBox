var ProductModel = require('./ProductModel.js');


module.exports = {


    list: function (req, res) {
        ProductModel.find(function (err, Products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Product.',
                    error: err
                });
            }
            return res.json(Products);
        });
    },

    listbycategory: function (req, res) {
       var categorySearch = req.params.category;

      ProductModel.find({category: categorySearch}, function (err, product) {

        if (err) {
          return res.status(500).json({
            message: 'Error when getting Product by category.',
            error: err
          });
        }
        if (!product) {
          return res.status(404).json({
            message: 'No such Product'
          });
        }
        res.status(200).json(product);
      });
    },

    show: function (req, res) {
        var id = req.params.id;
        ProductModel.findOne({_id: id}, function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Product.',
                    error: err
                });
            }
            if (!Product) {
                return res.status(404).json({
                    message: 'No such Product'
                });
            }
            return res.json(Product);
        });
    },


    create: function (req, res) {

      var Product = new ProductModel({
			name : req.body.name,
			imageUrl : req.body.imageUrl,
			price : req.body.price,
      description: req.body.description,
      category: req.body.category,
      gender: req.body.gender,
      priceCategory: req.body.priceCategory,

        });
console.log(req.body);
        console.log(Product);

        Product.save(function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Product',
                    error: err
                });
            }
            return res.status(201).json(Product);
        });
    },


    update: function (req, res) {
        var id = req.params.id;
        ProductModel.findOne({_id: id}, function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Product',
                    error: err
                });
            }
            if (!Product) {
                return res.status(404).json({
                    message: 'No such Product'
                });
            }

            Product.name = req.body.name ? req.body.name : Product.name;
			Product.imageUrl = req.body.imageUrl ? req.body.imageUrl : Product.imageUrl;
			Product.price = req.body.price ? req.body.price : Product.price;
      Product.description = req.body.description ? req.body.description : Product.description;
      Product.gender = req.body.gender ? req.body.gender : Product.gender;
      Product.category = req.body.category ? req.body.category : Product.category;
      Product.priceCategory = req.body.priceCategory ? req.body.priceCategory : Product.priceCategory;

            Product.save(function (err, Product) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Product.',
                        error: err
                    });
                }

                return res.json(Product);
            });
        });
    },

    /**
     * ProductController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ProductModel.findByIdAndRemove(id, function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Product.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
