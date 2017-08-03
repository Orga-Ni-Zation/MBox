var FreightModel = require('./FreightModel.js');


module.exports = {

    list: function (req, res) {
        FreightModel.find(function (err, Freights) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Freight.',
                    error: err
                });
            }
            return res.json(Freights);
        });
    },


    show: function (req, res) {
        var id = req.params.id;
        FreightModel.findOne({_id: id}, function (err, Freight) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Freight.',
                    error: err
                });
            }
            if (!Freight) {
                return res.status(404).json({
                    message: 'No such Freight'
                });
            }
            return res.json(Freight);
        });
    },


    create: function (req, res) {
        var Freight = new FreightModel({
			userID : req.body.userID,
			giftBoxID : req.body.giftBoxID,
			receiverName : req.body.receiverName,
			address : req.body.address,
			date : req.body.date,
			membership : req.body.membership

        });

        Freight.save(function (err, Freight) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Freight',
                    error: err
                });
            }
            return res.status(201).json(Freight);
        });
    },


    update: function (req, res) {
        var id = req.params.id;
        FreightModel.findOne({_id: id}, function (err, Freight) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Freight',
                    error: err
                });
            }
            if (!Freight) {
                return res.status(404).json({
                    message: 'No such Freight'
                });
            }

            Freight.userID = req.body.userID ? req.body.userID : Freight.userID;
			Freight.giftBoxID = req.body.giftBoxID ? req.body.giftBoxID : Freight.giftBoxID;
			Freight.receiverName = req.body.receiverName ? req.body.receiverName : Freight.receiverName;
			Freight.address = req.body.address ? req.body.address : Freight.address;
			Freight.date = req.body.date ? req.body.date : Freight.date;
			Freight.membership = req.body.membership ? req.body.membership : Freight.membership;

            Freight.save(function (err, Freight) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Freight.',
                        error: err
                    });
                }

                return res.json(Freight);
            });
        });
    },

    
    remove: function (req, res) {
        var id = req.params.id;
        FreightModel.findByIdAndRemove(id, function (err, Freight) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Freight.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
