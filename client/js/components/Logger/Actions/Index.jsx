var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var ButtonPrimary = require('../../Button/Index.jsx').Primary;
var ButtonSecondary = require('../../Button/Index.jsx').Secondary;
var ButtonDanger = require('../../Button/Index.jsx').Danger;
var FeatureActions = require('../../../actions/FeatureActions');

var LoggerActions = React.createClass({
  render: function () {
    if (!this.props.feature._id) {
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
    }
    return (
      <div style={Style.container} className="container-fluid">
        <div style={Style.row} className="row">
          <div style={Style.buttonContainer} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ButtonPrimary label={"Submit"} onClick={this.handleClick_Save} />
            <span style={{marginLeft:"10px"}} />
            <ButtonSecondary label={"Cancel"} onClick={this.handleClick_Cancel} />
            <span style={{marginLeft:"10px"}} />
            <ButtonDanger label={"Delete"} onClick={this.handleClick_Delete} />
          </div>
        </div>
      </div>
    )
  },

  handleClick_Save: function () {
    if (!this.props.feature._id) {
      FeatureActions.create(this.props.feature, function (res) {
        if (res.success === false) {
          this.props.onError(res.message);
        } else {
          this.props.onSuccess();
        }
      }.bind(this));
    } else {
      FeatureActions.update(this.props.feature, function (res) {
        if (res.success === false) {
          this.props.onError(res.message);
        } else {
          this.props.onSuccess();
        }
      }.bind(this));
    }
  },

  handleClick_Cancel: function () {
    browserHistory.push("/");
  },

  handleClick_Delete: function () {
    FeatureActions.destroy(this.props.feature, function (res) {
      if (res.success === false) {
        this.props.onError(res.message);
      } else {
        this.props.onSuccess();
      }
    }.bind(this));
  },
});

module.exports = LoggerActions;
