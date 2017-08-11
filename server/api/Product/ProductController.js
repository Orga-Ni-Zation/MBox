const ProductModel = require('./ProductModel.js');
const User = require('../User/UserModel');
const upload = require('../../config/multer');


module.exports = {


  list: function(req, res) {
    ProductModel.find().then(Products => {
      res.json(Products);
    }).catch(err => {
      res.status(500).json({
        message: 'Error when getting Products.',
        error: err
      });
    });
  },




  listbycategory: function(req, res) {
    var categorySearch = req.params.category;

    ProductModel.find({
      category: categorySearch
    }, function(err, product) {

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

  show: function(req, res) {
    var id = req.params.id;
    console.log(id);
    ProductModel.findOne({
      _id: id
    }, function(err, Product) {
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


  create: function(req, res) {
    const Product = new ProductModel({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      gender: req.body.gender,
      priceCategory: req.body.priceCategory,
      imageUrl: `/uploads/${req.file.filename}` || '',
      imageName: req.file.orginalname,
    });
    console.log(req.body.description);
    console.log(req.body);
  

    Product.save((err, Product)=> {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Product',
          error: err
        });
      }
      return res.status(201).json(Product);
    });
  },


  update: function(req, res) {
    var id = req.params.id;
    ProductModel.findOne({
      _id: id
    }, function(err, Product) {
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

      Product.save(function(err, Product) {
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


  remove: function(req, res) {
    var id = req.params.id;
    ProductModel.findByIdAndRemove(id, function(err, Product) {
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
