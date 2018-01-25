var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
    addquote: function (req, res) {
        console.log("in controller", req.body);
        Quote.create({
            text: req.body.text,
            madeBy: req.body.madeBy,
            likes: req.body.likes
        }, function (err, quote) {
            if (err) {
                console.log(err);
            } else {
                Quote.find({}, function (err, quotes) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json(quotes);
                    }
                });
            }
        });
    },

    findall: function (req, res) {
        Quote.find({}, function (err, quotes) {
            if (err) {
                console.log(err);
            } else {
                res.json(quotes);
            }
        });
    },
    like: function (req, res) {
        Quote.findById(req.body.id, function (err, quote) {
            quote.likes += 1;
            quote.save({
                new: true
            }, function (err) {
                if (err) {
                    console.log('err');
                } else {
                    Quote.find({}, function (err, quotes) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("updated quotes in controller", quotes);
                            res.json(quotes);
                        }
                    });
                }
            });

        });
    },
    deleted: function (req, res) {
        Quote.findByIdAndRemove(req.body.id, function (err, quote) {
            if (err) {
                console.log('err');
            }
            Quote.find({}, function (err, quotes) {
                if (err) {
                    console.log(err);
                }
                res.json(quotes);
            });

        });
    }
};