var React = require('react');
var Style = require('./Style.jsx');

var LoggerHeader = React.createClass({
  render: function () {
    return (
      <div style={Style.container} className="container-fluid">
        <div style={Style.row} className="row">
          <div style={Style.component} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 style={Style.title}>Log a feature</h1>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LoggerHeader;
