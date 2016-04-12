var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var ButtonPrimary = require('../../Button/Index.jsx').Primary;
var ButtonSecondary = require('../../Button/Index.jsx').Secondary;
var FeatureStore = require('../../../stores/FeatureStore');

var LoggerActions = React.createClass({
  render: function () {
    return (
      <div style={Style.container} className="container-fluid">
        <div style={Style.row} className="row">
          <div style={Style.buttonContainer} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ButtonPrimary label={"Submit"} onClick={this.handleClick_Save} />
            <span style={{marginLeft:"10px"}} />
            <ButtonSecondary label={"Cancel"} onClick={this.handleClick_Cancel} />
          </div>
        </div>
      </div>
    )
  },

  handleClick_Save: function () {
    if (!this.props.feature._id) {
      FeatureStore.insert(this.props.feature, function () {
        console.log("inserted!");
      });
    } else {
      FeatureStore.update(this.props.feature, function () {
        console.log("updated!");
      });
    }
  },

  handleClick_Cancel: function () {
    browserHistory.push("/");
  },
});

module.exports = LoggerActions;
