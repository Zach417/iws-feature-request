var StoreTemplate = require('./Template');
var AppService = require('../services/AppService');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/FeatureConstants.js');

var Store = new StoreTemplate(AppService.features);

AppDispatcher.register(function(action) {
	switch(action.actionType) {

		case Constants.FEATURE_CREATE:
			Store.insert(action.doc, function(data) {
				Store.emitChange();
        action.callback(data);
			});
			break;

		case Constants.FEATURE_UPDATE:
			Store.update(action.doc, function(data) {
				Store.emitChange();
        action.callback(data);
			});
			break;

		case Constants.FEATURE_DESTROY:
			Store.delete(action.doc, function(data) {
				Store.emitChange();
        action.callback(data);
			});
			break;
	}
});

module.exports = Store;
