var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var Button = require('./Button.jsx');
var Logger = require('../Logger/Index.jsx');
var Finder = require('../Finder/Index.jsx');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <div style={Style.container} className="container-fluid">
          <div style={Style.row} className="row-fluid">
            <div style={Style.component} className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 style={Style.title}>Feature Request Tracker</h1>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <Button label={"📥 Log a feature"} onClick={this.handleClick_Logger} />
              </div>
              <div style={{marginTop:"10px"}} className="hidden-lg hidden-md col-sm-12 col-xs-12" />
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <Button label={"🔍 Find a feature"} onClick={this.handleClick_Finder} />
              </div>
            </div>
          </div>
        </div>
        <div style={Style.containerAlt} className="container-fluid">
          <div style={Style.row} className="row-fluid">
            <Logger />
          </div>
        </div>
        <div style={Style.container} className="container-fluid">
          <div style={Style.row} className="row-fluid">
            <Finder />
          </div>
        </div>
      </div>
    )
  },

  handleClick_Logger: function () {
    browserHistory.push("/log");
  },

  handleClick_Finder: function () {
    browserHistory.push("/find");
  },
});

module.exports = Home;
