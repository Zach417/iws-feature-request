var moment = require('moment');
var express = require('express');
var router = express.Router();
var Feature = require('../../models/feature');
var errors = require('../errors');
var utils = require('./utils');

router.get('/', function (req, res) {
  Feature.find(function (err, docs) {
    if (err) { return res.json(errors.unknown); }
    if (!docs) { return res.json([]); }
    res.json(docs);
  });
});

router.post('/', function (req, res) {
  var body = req.body;
  Feature.collection.insert(body, function (err, docs) {
    if (err) { return res.json(errors.unknown); }
    var verify = utils.verifyDoc(res, body);
    if (verify.success === false) { return res.json(verify); }
    utils.reorderPriorities(body.client, body, function () {
      res.json({success:true});
    });
  });
});

router.get('/:id', function (req, res) {
  var id = req.params.id;
  Feature.findOne({"_id":id}, function (err, doc) {
    if (err) { return res.json(errors.unknown); }
    if (!doc) { return res.json(errors.doesNotExist); }
    res.json(doc);
  });
});

router.put('/:id', function (req, res) {
  var id = req.params.id;
  var body = req.body;
  Feature.findById(id, function (err, doc) {
    if (err) { return res.json(errors.unknown); }
    if (!doc) { return res.json(errors.doesNotExist); }
    var verify = utils.verifyDoc(res, body);
    if (verify.success === false) { return res.json(verify); }
    utils.updateDoc(doc, body, function (json) {
      res.json(json);
    });
  });
});

router.delete('/:id', function (req, res) {
  var id = req.params.id;
  Feature.find({"_id":id}).remove(function (err) {
    if (err) { return res.json(errors.unknown); }
    return res.json({ success: true });
  });
});

module.exports = router;
