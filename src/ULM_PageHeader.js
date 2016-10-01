'use strict';

if (typeof window !== 'undefined') {
  window.React = React;
}

var React = require('react');

var ULM_PageHeader = React.createClass({
  displayName: 'ULM_PageHeader',


  getInitialState: function getInitialState() {
    return {};
  },

  getDefaultProps: function getDefaultProps() {
    return {
      text: "EMPTY!",
      justify: 'center',
      indent: '0px'
    };
  },

  getJustifyStyle: function getJustifyStyle() {

    switch (this.props.justify) {
      case 'left':
        return 'left';
        break;

      case 'right':
        return 'right';
        break;

      case 'center':
      default:
        return 'center';
        break;
    }
  },

  render: function render() {

    this.style = {
      width: '100%',
      marginLeft: this.props.indent,
      textAlign: this.getJustifyStyle() };

    return React.createElement(
      'h1',
      { style: this.style },
      this.props.text
    );
  }
});

module.exports = ULM_PageHeader;