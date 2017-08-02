var GiftBoxModel = require('./GiftBoxModel.js');

/**
 * GiftBoxController.js
 *
 * @description :: Server-side logic for managing GiftBoxs.
 */
module.exports = {

    /**
     * GiftBoxController.list()
     */
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

    /**
     * GiftBoxController.show()
     */
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

    /**
     * GiftBoxController.create()
     */
    create: function (req, res) {
        var GiftBox = new GiftBoxModel({
			productID : req.body.productID

        });

        GiftBox.save(function (err, GiftBox) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating GiftBox',
                    error: err
                });
            }
            return res.status(201).json(GiftBox);
        });
    },

    /**
     * GiftBoxController.update()
     */
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

    /**
     * GiftBoxController.remove()
     */
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
