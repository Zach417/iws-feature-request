var React = require('react');
var Style = require('./Style.jsx');

var NavItem = React.createClass({
  getInitialState: function () {
    return {
      isHovered: false,
    }
  },

  render: function () {
    var style = Style.navButton;
    if (this.state.isHovered === true) {
      style = Style.navButtonHovered;
    }

    return (
      <li
        style={style}
        onClick={this.props.onClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        Back
      </li>
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

module.exports = NavItem;
