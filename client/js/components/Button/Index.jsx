var ButtonPrimary = require('./ButtonPrimary/Index.jsx');
var ButtonSecondary = require('./ButtonSecondary/Index.jsx');
var ButtonDanger = require('./ButtonDanger/Index.jsx');

var ButtonDefault = ButtonSecondary;
ButtonDefault.Primary = ButtonPrimary;
ButtonDefault.Secondary = ButtonSecondary;
ButtonDefault.Danger = ButtonDanger;

module.exports = ButtonDefault;
