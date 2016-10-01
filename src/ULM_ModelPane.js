'use strict';

if (typeof window !== 'undefined') {
  window.React = React;
}

var React = require('react');

var ULM_ModelPane = React.createClass({
  displayName: 'ULM_ModelPane',


  getInitialState: function getInitialState() {
    return {};
  },

  getDefaultProps: function getDefaultProps() {
    return {
      textHeader: "EMPTY!",
      textFooter: "EMPTY!" };
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

    this.imageStyle = {
      width: 'auto',
      height: '100%',
      overflow: 'hidden'
    };
    this.headerStyle = { width: 'auto', height: '40px', lineHeight: '40px' };
    this.footerStyle = { width: 'auto', height: '40px', lineHeight: '40px' };

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { style: this.headerStyle },
        this.props.textHeader
      ),
      React.createElement('img', { style: this.imageStyle, src: './images/MiniCat310-Lake Cathie.jpg' }),
      React.createElement(
        'h1',
        { style: this.footerStyle },
        this.props.textFooter
      )
    );
  }
});

module.exports = ULM_ModelPane;