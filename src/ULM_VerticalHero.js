'use strict';

if (typeof window !== 'undefined') {
    window.React = React;
}

var React = require('react');

var ULM_VerticalHero = React.createClass({
    displayName: 'ULM_VerticalHero',


    getInitialState: function getInitialState() {
        return {};
    },

    getDefaultProps: function getDefaultProps() {
        return {
            ratioWidth: 25,
            ratioHeight: 10,
            headerOrFooterSpacerHeight: 48
        };
    },

    setStyleProperties: function setStyleProperties() {
        /*  premise is that ideal aspect ratio to render the full image is 2000:800 = 2.5
            If the apect ratio is lower (less than 2.5) then we need to crop the left and right sides of the image
            If the aspect ratio is higher (more than 2.5) Then maintaim full width and crop top and bottom sides of the image
            
            
            
        */

        this.divStyle = { display: 'block' };

        /* Calculate scaled width of the image based on full height fill */
        var fullWidth = Math.round((window.innerHeight - this.props.headerOrFooterSpacerHeight) * this.props.ratioWidth / this.props.ratioHeight);
        /*If the full Width is larger than innerWidth of the window then crop edges by using a margin offset */
        if (fullWidth >= window.innerWidth) {
            var leftOffset = Math.round((fullWidth - window.innerWidth) / 2) * -1;
            var imageHeight = window.innerHeight - this.props.headerOrFooterSpacerHeight;
            var h = imageHeight.toString();
            var h = h + 'px';
            var p = fullWidth.toString();
            var p = p + 'px';
            var s = leftOffset.toString();
            var s = s + 'px';
            this.imageStyle = {
                display: 'block',
                width: p,
                height: h,
                overflow: 'hidden',
                marginLeft: s,
                top: '0px' };
        } else // the aspect ratio is lower than 2.5 therefore we need to scale the width of the image to the viewport and crop the bottom
            {
                this.imageStyle = {
                    display: 'block',
                    width: '100%',
                    height: 'auto' };
            }
    },

    render: function render() {

        this.setStyleProperties();

        return React.createElement(
            'div',
            { style: this.divStyle },
            React.createElement('img', { src: this.props.background, style: this.imageStyle })
        );
    }
});

module.exports = ULM_VerticalHero;