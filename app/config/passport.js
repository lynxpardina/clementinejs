'use strict';

var GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/users');
var configAuth = require('./auth');

module.exports = function (passport) {

	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});

	passport.use(new GitHubStrategy({
		clientID: configAuth.githubAuth.clientID,
		clientSecret: configAuth.githubAuth.clientSecret,
		callbackURL: configAuth.githubAuth.callbackURL
	},
	function (token, refreshToken, profile, done) {
		process.nextTick(function () {
// console.log("profile -- passport:", profile.id, profile.username);
			User.findOne({ 'github.id': profile.id }, function (err, user) {
				if (err) {
					console.log("error busqueda id base datos -- passport");
					return done(err);
				}

				if (user) {
					// console.log("existe usuario -- passport");
					return done(null, user);
				} else {
					var newUser = new User();
console.log("añadiendo nuevo usuario -- passport");
					newUser.github.id = profile.id;
					newUser.github.username = profile.username;
					newUser.github.displayName = profile.displayName;
					newUser.github.publicRepos = profile._json.public_repos;
					newUser.nbrClicks.clicks = 0;

					newUser.save(function (err) {
						if (err) {
							console.log("Error guardando usuario nuevo -- passport");
							throw err;
						}
console.log("usuario guardado, en teoria -- passport ", newUser);
						return done(null, newUser);
					});
				}
			});
		});
	}));
};
