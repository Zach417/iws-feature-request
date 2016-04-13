var React = require('react');
var Style = require('./Style.jsx');
var Header = require('./Header/Index.jsx');
var Body = require('./Body/Index.jsx');

var Finder = React.createClass({
  render: function () {
    return (
      <div style={Style.component} className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
        <Header />
        <Body />
      </div>
    )
  },
});

module.exports = Finder;
