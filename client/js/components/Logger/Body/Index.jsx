var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');
var Label = require('../../Form/Index.jsx').Label;
var Input = require('../../Form/Index.jsx').Input;
var TextArea = require('../../Form/Index.jsx').TextArea;

var LoggerBody = React.createClass({
  componentWillMount: function () {
    this.feature = this.props.feature;
  },

  render: function () {
    return (
      <div style={Style.container} className="container-fluid">
        <div style={Style.row} className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <Label isRequired={true} label={"Title"} />
            <Input
              type={"text"}
              value={this.props.feature.title}
              onChange={this.handleChange_Title} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <Label isRequired={true} label={"Target Date"} />
            <Input
              type={"text"}
              value={this.props.feature.targetDate}
              onChange={this.handleChange_TargetDate} />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Label isRequired={false} label={"Description"} />
            <TextArea
              type={"text"}
              value={this.props.feature.description}
              onChange={this.handleChange_Description} />
          </div>
        </div>
      </div>
    )
  },

  handleChange_Title: function (event) {
    this.feature.title = event.target.value;
    this.props.onChange(this.feature);
  },

  handleChange_TargetDate: function (event) {
    this.feature.targetDate = event.target.value;
    this.props.onChange(this.feature);
  },

  handleChange_Description: function (event) {
    this.feature.description = event.target.value;
    this.props.onChange(this.feature);
  },
});

module.exports = LoggerBody;
