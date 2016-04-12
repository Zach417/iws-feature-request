var React = require('react');
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
            <ul style={Style.nav} id="banner-nav">
              <NavItem label={"Back"} onClick={this.handleClick_Back} />
            </ul>
          </div>
        </div>
      </div>
    )
  },

  handleClick_Logo: function () {
    window.location.href = "http://www.britecore.com/";
  },

  handleClick_Back: function () {
    window.location.href = "http://www.britecore.com/";
  },
});

module.exports = Header;
