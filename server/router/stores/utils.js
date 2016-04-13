var moment = require('moment');
var Feature = require('../../models/feature');

module.exports = {
  isValidInt: function (n) {
    var i = Number(n);
    if (isNaN(parseFloat(i))) { return false; }
    if (isNaN(Number(n))) { return false; }
    if (isFinite(i) === false) { return false; }
    if (i % 1 != 0) { return false; }
    return true;
  },

  verifyDoc: function (res, doc) {
    if (!doc.title) {
      return {
        success: false,
        message: "Feature must have a title.",
      };
    }
    if (!doc.targetDate) {
      return {
        success: false,
        message: "Feature must have a target date.",
      };
    }
    if (moment(doc.targetDate, "M/D/YYYY", true).isValid() === false) {
      return {
        success: false,
        message: "Target date is not in a recognizable date format. Try MM/DD/YYYY.",
      };
    }
    if (doc.clientPriority && this.isValidInt(doc.clientPriority) === false) {
      return {
        success: false,
        message: "Client priority is not an integer.",
      };
    }
    return {
      success: true,
    }
  },

  updateDoc: function (doc, body, callback) {
    doc.title = body.title;
    doc.description = body.description;
    doc.client = body.client;
    doc.clientPriority = parseInt(body.clientPriority);
    doc.targetDate = moment(body.targetDate).utc();
    doc.ticketUrl = body.ticketUrl;
    doc.productArea = body.productArea;
    doc.save(function (err) {
      if (err) { return callback({success:false}); }
      this.reorderPriorities(doc.client, doc, function () {
        return callback({success:true});
      });
    }.bind(this));
  },

  reorderPriorities: function (client, insertedFeature, callback) {
    if (!client) { return; }
    if (!insertedFeature || !insertedFeature.clientPriority) { return; }

    Feature.find({"client":client}, function (err, features) {
      if (!features) { return; }
      var filteredFeatures = [];
      var featuresSaved = 0;

      features
        .map(function (feature) {
          if (!feature.clientPriority) { return; }
          if (feature._id.toString() == insertedFeature._id.toString()) {
            return filteredFeatures.push(feature);
          }
          if (feature.clientPriority >= insertedFeature.clientPriority) {
            feature.clientPriority++;
          }
          filteredFeatures.push(feature);
        });

      filteredFeatures
        .sort(function (a,b) {
          return a.clientPriority - b.clientPriority;
        })
        .map(function (feature, i) {
          feature.clientPriority = i + 1;
          feature.save(function (err) {
            featuresSaved++;
            if (featuresSaved === filteredFeatures.length) {
              callback();
            }
          });
        });
    });
  },
}
