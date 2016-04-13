var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var NavItem = require('./NavItem.jsx');

var Header = React.createClass({
  render: function () {
    return (
    	<div style={Style.container} className="container-fluid">
        <div className="row-fluid">
          <div style={Style.component} className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <img
              style={Style.logo}
              onClick={this.handleClick_Logo}
              src="http://www.britecore.com/static/images/britecore-logo.png" />
            <ul style={Style.nav} className="hidden-xs">
              <NavItem label={"log"} onClick={this.handleClick_Log} />
              <NavItem label={"find"} onClick={this.handleClick_Find} />
            </ul>
          </div>
        </div>
      </div>
    )
  },

  handleClick_Logo: function () {
    browserHistory.push("/");
  },

  handleClick_Log: function () {
    browserHistory.push("/log");
  },

  handleClick_Find: function () {
    browserHistory.push("/find");
  },
});

module.exports = Header;
