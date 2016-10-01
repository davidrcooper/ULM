'use strict';

if (typeof window !== 'undefined') {
  window.React = React;
}

var React = require('react');

var ULM_FixedWidthHero = React.createClass({
  displayName: 'ULM_FixedWidthHero',


  getInitialState: function getInitialState() {
    return {};
  },

  renderSmallPortrait: function renderSmallPortrait() {
    return React.createElement(
      'div',
      { style: this.smallPortraitDivStyle },
      React.createElement('img', { src: this.props.background, style: this.smallPortraitStyle })
    );
  },

  renderLargePortrait: function renderLargePortrait() {
    return React.createElement(
      'div',
      { style: this.smallPortraitDivStyle },
      React.createElement('img', { src: this.props.background, style: this.smallPortraitStyle })
    );
  },

  renderSmallLandscape: function renderSmallLandscape() {
    return React.createElement(
      'div',
      { style: this.smallPortraitDivStyle },
      React.createElement('img', { src: this.props.background, style: this.smallPortraitStyle })
    );
  },

  renderLargeLandscape: function renderLargeLandscape() {
    return React.createElement(
      'div',
      { style: this.smallPortraitDivStyle },
      React.createElement('img', { src: this.props.background, style: this.smallPortraitStyle })
    );
  },

  setStyleProperties: function setStyleProperties() {

    if (window.innerWidth < 400) {
      var w = 400 - window.innerWidth;
      var indent = Math.round(w / 2) * -1;
      var s = indent.toString();
      var s = s + 'px';

      this.smallPortraitDivStyle = { display: 'block', overflow: 'hidden' };
      this.smallPortraitStyle = {
        display: 'block',
        width: '400px',
        height: 'auto',
        marginLeft: s,
        top: '0px'

      };
    } else {
      this.smallPortraitDivStyle = { display: 'block' };
      this.smallPortraitStyle = { height: 'auto',
        width: '100%',
        display: 'block' };
    }
  },

  render: function render() {

    /* Establish if the minimum viewport width threshold has occured and change the css style accordingly */

    this.setStyleProperties();

    if (this.props.deviceSize == 'small') {
      if (this.props.deviceOrient === 'portrait') {
        return this.renderSmallPortrait();
      } else {
        return this.renderSmallLandscape();
      }
    } else {
      if (this.props.deviceOrient === 'portrait') {
        return this.renderLargePortrait();
      } else {
        return this.renderLargeLandscape();
      }
    }
  }
});

module.exports = ULM_FixedWidthHero;