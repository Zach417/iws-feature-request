var React = require('react');
var Style = require('./Style.jsx');
var Header = require('./Header/Index.jsx');
var Body = require('./Body/Index.jsx');
var Actions = require('./Actions/Index.jsx');

var Logger = React.createClass({
  getInitialState: function () {
    return {
      feature: '',
    }
  },

  componentWillMount: function () {
    if (!this.props.feature) {
      this.setState({
        feature: {}
      });
    }
  },

  render: function () {
    return (
      <div style={Style.component} className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
        <Header />
        <Body
          feature={this.state.feature}
          onChange={this.handleChange_Feature} />
        <Actions feature={this.state.feature} />
      </div>
    )
  },

  handleChange_Feature: function (feature) {
    this.setState({
      feature: feature,
    });
  },
});

module.exports = Logger;
