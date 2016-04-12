var StoreTemplate = require('./Template');
var AppService = require('../services/AppService');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/FeatureConstants.js');

var FeatureStore = new StoreTemplate(AppService.features);

module.exports = FeatureStore;
