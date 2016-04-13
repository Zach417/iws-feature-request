var React = require('react');
var moment = require('moment');
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var Header = require('./Header/Index.jsx');
var Body = require('./Body/Index.jsx');
var Actions = require('./Actions/Index.jsx');
var FeatureStore = require('../../stores/FeatureStore');

var Logger = React.createClass({
  getInitialState: function () {
    return {
      feature: '',
    }
  },

  componentWillMount: function () {
    if (!this.props.params || !this.props.params.id) {
      return this.setState({
        feature: {}
      });
    }
    FeatureStore.getOne(this.props.params.id, function (doc) {
      if (doc.targetDate) {
        doc.targetDate = moment(doc.targetDate).format("MM/DD/YYYY");
      }
      this.setState({
        feature: doc,
      });
    }.bind(this));
  },

  render: function () {
    return (
      <div style={Style.component} className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
        <Header />
        <Body
          feature={this.state.feature}
          onChange={this.handleChange_Feature} />
        <Actions
          feature={this.state.feature}
          onSuccess={this.handleSuccess}
          onError={this.handleError} />
        {this.getErrorMessage()}
      </div>
    )
  },

  getErrorMessage: function () {
    if (this.state.errorMessage) {
      return (
        <div style={Style.container} className="container-fluid">
          <div style={Style.row} className="row">
            <div style={Style.component} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p style={Style.error}>{this.state.errorMessage}</p>
            </div>
          </div>
        </div>
      )
    }
  },

  handleChange_Feature: function (feature) {
    this.setState({
      feature: feature,
    });
  },

  handleSuccess: function () {
    browserHistory.push("/");
  },

  handleError: function (message) {
    this.setState({
      features: this.state.features,
      errorMessage: message,
    });
  }
});

module.exports = Logger;
