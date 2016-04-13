var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/FeatureConstants.js');

var Actions = {
	update: function(doc, callback) {
		AppDispatcher.dispatch({
			actionType: Constants.FEATURE_UPDATE,
			doc: doc,
			callback: callback,
		});
	},
	create: function(doc, callback) {
		AppDispatcher.dispatch({
			actionType: Constants.FEATURE_CREATE,
			doc: doc,
			callback: callback,
		});
	},
	destroy: function(doc, callback) {
		AppDispatcher.dispatch({
			actionType: Constants.FEATURE_DESTROY,
			doc: doc,
			callback: callback,
		});
	},
};

module.exports = Actions;
