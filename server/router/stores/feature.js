var moment = require('moment');
var express = require('express');
var router = express.Router();
var Feature = require('../../models/feature');

function isValidInt(n) {
  var i = Number(n);
  if (isNaN(parseFloat(i))) { return false; }
  if (isNaN(Number(n))) { return false; }
  if (isFinite(i) === false) { return false; }
  if (i % 1 != 0) { return false; }
  return true;
}

function verifyDoc(res, doc) {
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
  if (!doc.clientPriority || isValidInt(doc.clientPriority) === false) {
    return {
      success: false,
      message: "Client priority is not an integer.",
    };
  }
  return {
    success: true,
  }
}

router.get('/', function (req, res) {
  Feature.find(function (err, docs) {
    if (err) {
      return res.json({
        success:false,
        message:"An unknown error occurred"
      });
    }
    if (!docs) { return res.json([]); }
    res.json(docs);
  });
});

router.post('/', function (req, res) {
  var doc = req.body;
  Feature.collection.insert(doc, function (err, docs) {
    if (err) {
      return res.json({
        success:false,
        message:"An unknown error occurred"
      });
    }
    var verify = verifyDoc(res, body);
    if (verify.success === false) {
      return res.json(verify);
    }
    res.json({success:true});
  });
});

router.get('/:id', function (req, res) {
  var id = req.params.id;
  Feature.findOne({"_id":id}, function (err, doc) {
    if (err) {
      return res.json({
        success:false,
        message:"An unknown error occurred"
      });
    }
    if (!doc) {
      return res.json({
        success:false,
        message:"A document with that ID does not exist"
      });
    }
    res.json(doc);
  });
});

router.put('/:id', function (req, res) {
  var id = req.params.id;
  var body = req.body;
  Feature.findById(id, function (err, doc) {
    if (err) {
      return res.json({
        success:false,
        message:"An unknown error occurred"
      });
    }
    if (!doc) {
      return res.json({
        success:false,
        message:"A document with that ID does not exist"
      });
    }
    var verify = verifyDoc(res, body);
    if (verify.success === false) {
      return res.json(verify);
    }
    doc.title = body.title;
    doc.description = body.description;
    doc.client = body.client;
    doc.clientPriority = parseInt(body.clientPriority);
    doc.targetDate = moment(body.targetDate).utc();
    doc.ticketUrl = body.ticketUrl;
    doc.productArea = body.productArea;
    doc.save(function (err) {
      if (err) { return res.json({success:false}); }
      return res.json({success:true});
    });
  });
});

module.exports = router;
