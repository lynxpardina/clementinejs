'use strict';

var Users = require('../models/users.js');

function ClickHandler () {

	this.getClicks = function (req, res) {
// console.log("req.user.github.id -- ClickHandler.Server : ",req.user.github.id);
		Users
			.findOne({ 'github.id': req.user.github.id }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }
// console.log("result.nbrClicks -- ClickHandler.Server : ",result.nbrClicks);
				res.json(result.nbrClicks);

			});
	};

	this.addClick = function (req, res) {
		Users
			.findOneAndUpdate({ 'github.id': req.user.github.id }, { $inc: { 'nbrClicks.clicks': 1 } })
			.exec(function (err, result) {
					if (err) { throw err; }
// console.log(result);
					res.json(result.nbrClicks);
				}
			);
	};

	this.resetClicks = function (req, res) {
		Users
			.findOneAndUpdate({ 'github.id': req.user.github.id }, { 'nbrClicks.clicks': 0 })
			.exec(function (err, result) {
					if (err) { throw err; }
// console.log(result);
					res.json(result.nbrClicks);
				}
			);
	};

}

module.exports = ClickHandler;
