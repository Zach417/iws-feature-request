var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Style = require('./Style.jsx');

var Home = React.createClass({
  getInitialState: function () {
    return {
      isHovered: false,
    }
  },

  render: function () {
    var style = Style.button;
    if (this.state.isHovered === true) {
      style = Style.buttonHovered;
    }
    return (
        <div
          style={style}
          onClick={this.props.onClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          {this.props.label}
        </div>
    )
  },

  handleMouseEnter: function () {
    this.setState({
      isHovered: true,
    });
  },

  handleMouseLeave: function () {
    this.setState({
      isHovered: false,
    });
  },
});

module.exports = Home;
