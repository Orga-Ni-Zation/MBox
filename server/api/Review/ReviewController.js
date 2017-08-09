const ReviewModel = require('./ReviewModel.js');
const upload = require ('../../config/multer');
module.exports = {

    list:  (req, res) => {
        ReviewModel.find(function (err, Reviews) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Review.',
                    error: err
                });
            }
            return res.json(Reviews);
        });
    },

    show: function (req, res) {
        var id = req.params.id;
        ReviewModel.findOne({_id: id},  (err, Review) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Review.',
                    error: err
                });
            }
            if (!Review) {
                return res.status(404).json({
                    message: 'No such Review'
                });
            }
            return res.json(Review);
        });
    },


    create: function (req, res) {
        var Review = new ReviewModel({
			title : req.body.title,
			review : req.body.review,
			stars : req.body.stars,
			userID : req.body.userID,
			giftBoxID : req.body.giftBoxID,
      specs: JSON.parse(req.body.specs) || [],
      imageUrlReview: `/uploads/${req.file.filename}` || '',
        });

        Review.save(function (err, Review) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Review',
                    error: err
                });
            }
            return res.status(201).json(Review);
        });
    },


    update: function (req, res) {
        var id = req.params.id;
        ReviewModel.findOne({_id: id}, function (err, Review) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Review',
                    error: err
                });
            }
            if (!Review) {
                return res.status(404).json({
                    message: 'No such Review'
                });
            }

      Review.title = req.body.title ? req.body.title : Review.title;
			Review.review = req.body.review ? req.body.review : Review.review;
			Review.stars = req.body.stars ? req.body.stars : Review.stars;
			Review.userID = req.body.userID ? req.body.userID : Review.userID;
			Review.giftBoxID = req.body.giftBoxID ? req.body.giftBoxID : Review.giftBoxID;

            Review.save(function (err, Review) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Review.',
                        error: err
                    });
                }

                return res.json(Review);
            });
        });
    },

    remove: function (req, res) {
        var id = req.params.id;
        ReviewModel.findByIdAndRemove(id, function (err, Review) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Review.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
