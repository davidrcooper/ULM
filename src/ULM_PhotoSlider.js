'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

if (typeof window !== 'undefined') {
  window.React = React;
}

var React = require('react');
var ImageGallery = require('react-image-gallery').default;
var ULM_Loader = require('./ULM_Loader');

var imagesPortrait = [{
  original: './images/MiniCat310-Laura Dekker.jpg',
  thumbnail: './images/MiniCat310-Laura Dekker.jpg'
}, {
  original: './images/MiniCat460 - Thailand - Portrait.jpg',
  thumbnail: './images/MiniCat460 - Thailand - Portrait.jpg'
}, {
  original: './images/MiniCat460 - Portrait.jpg',
  thumbnail: './images/MiniCat460 - Portrait.jpg'
}, {
  original: './images/MiniCat310-Lake Cathie.jpg',
  thumbnail: './images/MiniCat310-Lake Cathie.jpg'
}];

var images = [{
  original: './images/HastingsShore_huge.jpg',
  thumbnail: './images/HastingsShore_huge.jpg'
}, {
  original: './images/HastingsSail_huge.jpg',
  thumbnail: './images/HastingsSail_huge.jpg'
}, {
  original: './images/460Thailand.jpg',
  thumbnail: './images/460Thailand.jpg'
}];

var imagesList = ["./images/HastingsShore.jpg", "./images/Putney.jpg", "./images/RhodesWinter.jpg"];

var PhotoSliderStyle = { height: 'auto',
  width: '100%',
  display: 'block' };

var ULM_PhotoSlider = React.createClass({
  displayName: 'ULM_PhotoSlider',


  getInitialState: function getInitialState() {
    return {};
  },

  renderSmallPortrait: function renderSmallPortrait() {
    var _React$createElement;

    return React.createElement(
      'div',
      { style: PhotoSliderStyle },
      React.createElement(ImageGallery, (_React$createElement = { items: imagesPortrait, autoPlay: true, showThumbnails: false }, _defineProperty(_React$createElement, 'autoPlay', true), _defineProperty(_React$createElement, 'slideInterval', 4000), _React$createElement))
    );
  },

  renderLargePortrait: function renderLargePortrait() {
    var _React$createElement2;

    return React.createElement(
      'div',
      { style: PhotoSliderStyle },
      React.createElement(ImageGallery, (_React$createElement2 = { items: imagesPortrait, autoPlay: true, showThumbnails: false }, _defineProperty(_React$createElement2, 'autoPlay', true), _defineProperty(_React$createElement2, 'slideInterval', 4000), _React$createElement2))
    );
  },

  renderSmallLandscape: function renderSmallLandscape() {
    var _React$createElement3;

    return React.createElement(
      'div',
      { style: PhotoSliderStyle },
      React.createElement(ImageGallery, (_React$createElement3 = { items: images, autoPlay: true, showThumbnails: false }, _defineProperty(_React$createElement3, 'autoPlay', true), _defineProperty(_React$createElement3, 'slideInterval', 4000), _React$createElement3))
    );
  },

  renderLargeLandscape: function renderLargeLandscape() {
    var _React$createElement4;

    return React.createElement(
      'div',
      { style: PhotoSliderStyle },
      React.createElement(ImageGallery, (_React$createElement4 = { items: images, autoPlay: true, showThumbnails: false }, _defineProperty(_React$createElement4, 'autoPlay', true), _defineProperty(_React$createElement4, 'slideInterval', 4000), _React$createElement4))
    );
  },

  render: function render() {

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

module.exports = ULM_PhotoSlider;