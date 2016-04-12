var express = require('express');
var router = express.Router();
var Feature = require('../../models/feature');

router.get('/', function (req, res) {
  Feature.find(function (err, docs) {
    if (err) { return res.json({success:false}); }
    if (!docs) { return res.json([]); }
    res.json(docs);
  });
});

router.post('/', function (req, res) {
  var doc = req.body;
  console.log(doc);
  Feature.collection.insert(doc, function (err, docs) {
    if (err) { return res.json({success:false}); }
    res.json({success:true});
  });
});

router.get('/:id', function (req, res) {
  var id = req.params.id;
  Feature.findOne({"_id":id}, function (err, doc) {
    if (err) { return res.json({success:false}); }
    if (!doc) { return res.json({}); }
    res.json(doc);
  });
});

router.put('/:id', function (req, res) {
  var id = req.params.id;
  var body = req.body;
  Feature.findById(id, function (err, doc) {
    if (err) { return res.json({success:false}); }
    if (!doc) { return res.json({success:false}); }
    doc.title = body.title;
    doc.description = body.description;
    doc.client = body.client;
    doc.targetDate = body.targetDate;
    doc.ticketUrl = body.ticketUrl;
    doc.productArea = body.productArea;
    doc.save(function (err) {
      if (err) { return res.json({success:false}); }
      return res.json({success:true});
    });
  });
});

module.exports = router;
