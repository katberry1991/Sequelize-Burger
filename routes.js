module.exports = function(app){

		// Our model controllers (rather than routes)
		var application = require('./routes/application');
		var burger = require('./routes/burger');

		app.use('/', application)
		app.use('/burgers', burger);
		//other routes..
}