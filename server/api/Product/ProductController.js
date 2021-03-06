const ProductModel = require('./ProductModel.js');
const User = require('../User/UserModel');
const upload = require('../../config/multer');


module.exports = {


  list: (req, res) => {
    ProductModel.find().then(Products => {
      res.json(Products);
    }).catch(err => {
      res.status(500).json({
        message: 'Error when getting Products.',
        error: err
      });
    });
  },




  listbycategory: (req, res) => {
    var categorySearch = req.params.category;

    ProductModel.find({
      category: categorySearch
    }, (err, product) => {

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

  show: (req, res) => {
    var id = req.params.id;
    console.log(id);
    ProductModel.findOne({
      _id: id
    }, (err, Product) => {
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


  create: (req, res) => {
    let priceCategory;
    let lowCategory = 6;
    let mediumCategory = 10;
    let highCategory = 10;
    if(req.body.price < lowCategory){
      priceCategory = 'low';
    }else if (req.body.price < mediumCategory) {
      priceCategory = 'medium';
    }else if (req.body.price >= highCategory) {
      priceCategory = 'high';
    }
    let category = req.body.category;
    category = category.split(",");
    console.log('estoy imprimiendo category'+ category);
  console.log(priceCategory);
    const Product = new ProductModel({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: category,
      gender: req.body.gender,
      priceCategory: priceCategory,
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


  update: (req, res) => {
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
