var InterestModel = require('./InterestModel.js');


module.exports = {


  list: function(req, res) {
    InterestModel.find(function(err, Interests) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Interest.',
          error: err
        });
      }
      return res.json(Interests);
    });
  },


  show: function(req, res) {
    var id = req.params.id;
    InterestModel.findOne({
      _id: id
    }, function(err, Interest) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Interest.',
          error: err
        });
      }
      if (!Interest) {
        return res.status(404).json({
          message: 'No such Interest'
        });
      }
      return res.json(Interest);
    });
  },


  create: function(req, res) {
    var Interest = new InterestModel({
      interests: req.body.interests,
      userID: req.body.userID

    });
    console.log(Interest);
    Interest.save(function(err, Interest) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Interest',
          error: err
        });
      }
      return res.status(201).json(Interest);
    });
  },


  update: function(req, res) {
    var id = req.params.id;
    InterestModel.findOne({
      _id: id
    }, function(err, Interest) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Interest',
          error: err
        });
      }
      if (!Interest) {
        return res.status(404).json({
          message: 'No such Interest'
        });
      }

      Interest.interests = req.body.interests ? req.body.interests : Interest.interests;
      Interest.userID = req.body.userID ? req.body.userID : Interest.userID;

      Interest.save(function(err, Interest) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Interest.',
            error: err
          });
        }

        return res.json(Interest);
      });
    });
  },


  remove: function(req, res) {
    var id = req.params.id;
    InterestModel.findByIdAndRemove(id, function(err, Interest) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Interest.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};