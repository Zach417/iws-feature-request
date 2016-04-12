var ButtonPrimary = require('./ButtonPrimary/Index.jsx');
var ButtonSecondary = require('./ButtonSecondary/Index.jsx');

var ButtonDefault = ButtonSecondary;
ButtonDefault.Primary = ButtonPrimary;
ButtonDefault.Secondary = ButtonSecondary;

module.exports = ButtonDefault;
