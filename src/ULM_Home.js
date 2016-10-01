'use strict';

if (typeof window !== 'undefined') {
    window.React = React;
}

var React = require('react');
var ULM_PageHeader = require('./ULM_PageHeader');
var ULM_ModelSummary = require('./ULM_ModelSummary');

var ULM_PhotoSlider = require('./ULM_PhotoSliderTwo');
var ULM_FixedWidthHero = require('./ULM_FixedWidthHero');
var ULM_VerticalHero = require('./ULM_VerticalHero');
var Paper = require('material-ui/Paper').default;

var ULM_Home = React.createClass({
    displayName: 'ULM_Home',


    getInitialState: function getInitialState() {

        return {};
    },

    /*
    
               <Paper style={paperStyle} zDepth={0}>
                    <Paper style={itemPaperStyle} zDepth={1} />
                    <Paper style={itemPaperStyle} zDepth={1} />
                    <Paper style={itemPaperStyle} zDepth={1} />
               </Paper>
    
    */
    /* SMALL PORTRAIT          */
    /* LARGE PORTRAIT         */
    /* background = {'./images/minicatslide_huge.jpg'} */
    renderPageSmallPortrait: function renderPageSmallPortrait() {

        var itemPaperStyle = { height: '500px', width: '90vw', margin: '1vw', textAlign: 'center', display: 'inline-block' };
        var paperStyle = { height: 'auto', width: '100%', margin: 0, textAlign: 'center', display: 'inline-block' };

        /*            <ULM_VerticalHero background = {'./images/MiniCat460 - Thailand - Portrait.jpg'} ratioWidth={5} ratioHeight={8} headerOrFooterSpacerHeight={36}/> */

        return React.createElement(
            'div',
            null,
            React.createElement(ULM_PhotoSlider, { deviceSize: this.props.deviceSize, windowWidth: this.props.widthWindow, deviceOrient: this.props.deviceOrient }),
            React.createElement(ULM_FixedWidthHero, { background: './images/MiniCat-narrow.svg', deviceSize: this.props.deviceSize, windowWidth: this.props.widthWindow, deviceOrient: this.props.deviceOrient }),
            React.createElement(ULM_ModelSummary, { deviceSize: this.props.deviceSize, windowWidth: this.props.windowWidth, deviceOrient: this.props.deviceOrient })
        );
    },

    renderPageLargePortrait: function renderPageLargePortrait() {

        var itemPaperStyle = { height: '100%', width: '30vw', margin: '1vw', textAlign: 'center', display: 'inline-block', border: 'solid 1px' };
        var paperStyle = { height: '500px', width: '100%', margin: 0, textAlign: 'center', display: 'inline-block' };

        /*           <ULM_VerticalHero background = {'./images/460Thailand.jpg'} ratioWidth={25} ratioHeight={10} headerOrFooterSpacerHeight={48}/>*/

        return React.createElement(
            'div',
            null,
            React.createElement(ULM_PhotoSlider, { deviceSize: this.props.deviceSize, windowWidth: this.props.widthWindow, deviceOrient: this.props.deviceOrient }),
            React.createElement(ULM_FixedWidthHero, { background: './images/MiniCat-wide.svg', deviceSize: this.props.deviceSize, windowWidth: this.props.widthWindow, deviceOrient: this.props.deviceOrient }),
            React.createElement(ULM_ModelSummary, { deviceSize: this.props.deviceSize, windowWidth: this.props.windowWidth, deviceOrient: this.props.deviceOrient })
        );
    },

    renderPageLargeLandscape: function renderPageLargeLandscape() {

        var itemPaperStyle = { height: '100%', width: '30vw', margin: '1vw', textAlign: 'center', display: 'inline-block', border: 'solid 1px' };
        var paperStyle = { height: '500px', width: '100%', margin: 0, textAlign: 'center', display: 'inline-block' };

        /*            <ULM_VerticalHero background = {'./images/460Thailand.jpg'} ratioWidth={25} ratioHeight={10} headerOrFooterSpacerHeight={48}/> */

        return React.createElement(
            'div',
            null,
            React.createElement(ULM_PhotoSlider, { deviceSize: this.props.deviceSize, windowWidth: this.props.widthWindow, deviceOrient: this.props.deviceOrient }),
            React.createElement(ULM_FixedWidthHero, { background: './images/MiniCat-wide.svg', deviceSize: this.props.deviceSize, windowWidth: this.props.widthWindow, deviceOrient: this.props.deviceOrient }),
            React.createElement(ULM_ModelSummary, { deviceSize: this.props.deviceSize, windowWidth: this.props.windowWidth, deviceOrient: this.props.deviceOrient })
        );
    },

    renderPageSmallLandscape: function renderPageSmallLandscape() {

        var itemPaperStyle = { height: '500px', width: '90vw', margin: '1vw', textAlign: 'center', display: 'inline-block' };
        var paperStyle = { height: 'auto', width: '100%', margin: 0, textAlign: 'center', display: 'inline-block' };

        /*           <ULM_VerticalHero background = {'./images/460Thailand.jpg'} ratioWidth={25} ratioHeight={10} headerOrFooterSpacerHeight={36}/>*/

        return React.createElement(
            'div',
            null,
            React.createElement(ULM_PhotoSlider, { deviceSize: this.props.deviceSize, windowWidth: this.props.windowWidth, deviceOrient: this.props.deviceOrient }),
            React.createElement(ULM_FixedWidthHero, { background: './images/MiniCat-wide.svg', deviceSize: this.props.deviceSize, windowWidth: this.props.widthWindow, deviceOrient: this.props.deviceOrient }),
            React.createElement(ULM_ModelSummary, { deviceSize: this.props.deviceSize, windowWidth: this.props.windowWidth, deviceOrient: this.props.deviceOrient })
        );
    },

    render: function render() {
        if (this.props.deviceSize === "small") {
            if (this.props.deviceOrient === 'portrait') {
                return this.renderPageSmallPortrait();
            } else {
                return this.renderPageSmallLandscape();
            }
        } else /* large or huge screen */
            {
                if (this.props.deviceOrient === 'portrait') {
                    return this.renderPageLargePortrait();
                } else {
                    return this.renderPageLargeLandscape();
                }
            }
    }
});

module.exports = ULM_Home;