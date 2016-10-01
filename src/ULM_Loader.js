'use strict';

var React = require('react');
var ImageLoader = require('react-imageloader');
var Loader = require('react-loader');

var ULM_Loader = React.createClass({
		displayName: 'ULM_Loader',


		getDefaultProps: function getDefaultProps() {
				return {
						displayFirstImageASAP: false
				};
		},

		getInitialState: function getInitialState() {

				imageCounter = 0;
				numberImages = this.props.imagesArray.length;

				PhotoSliderStyle = { width: '100%',
						height: 'auto',
						display: 'block' };

				return {
						displayFirstImageLoaded: false,
						loaded: false
				};
		},

		incrementImageCounter: function incrementImageCounter() {

				imageCounter++;
				if (this.props.displayFirstImageASAP === true) this.setState({ displayFirstImageLoaded: true });
				if (imageCounter >= numberImages) this.setState({ loaded: true });
		},

		render: function render() {

				return React.createElement(
						'div',
						{ className: 'ulm_loader' },
						this.props.imagesArray[0] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[0], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[1] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[1], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[2] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[2], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[3] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[3], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[4] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[4], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[5] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[5], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[6] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[6], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[7] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[7], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[8] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[8], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[9] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[9], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[10] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[10], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[11] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[11], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[12] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[12], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[13] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[13], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[14] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[14], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[15] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[15], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[16] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[16], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[17] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[17], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[18] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[18], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.props.imagesArray[19] !== undefined && React.createElement(
								ImageLoader,
								{ src: this.props.imagesArray[19], onLoad: this.incrementImageCounter, style: { 'display': 'none' } },
								' '
						),
						this.state.displayFirstImageLoaded === false && this.state.loaded === false && React.createElement(
								'div',
								{ style: { 'width': '100%', 'height': '20vw' } },
								React.createElement(Loader, { loaded: this.state.loaded, top: '10vw', left: '50%', scale: 1.00 })
						),
						this.state.displayFirstImageLoaded === true && this.state.loaded === false && React.createElement(
								'div',
								{ style: { 'width': '100%', 'height': 'auto' } },
								React.createElement('img', { src: this.props.imagesArray[0], style: PhotoSliderStyle })
						),
						this.state.loaded === true && React.createElement(
								'div',
								null,
								this.props.children
						)
				);
		}

});

module.exports = ULM_Loader;