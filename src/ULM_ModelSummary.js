'use strict';

if (typeof window !== 'undefined') {
    window.React = React;
}

var React = require('react');
var Paper = require('material-ui/Paper').default;

var ULM_ModelSummary = React.createClass({
    displayName: 'ULM_ModelSummary',


    getInitialState: function getInitialState() {
        return {};
    },

    getDefaultProps: function getDefaultProps() {
        return {
            headerPercent: 5,
            imageHeightPercent: 40,
            imageWidthPercent: 30,
            landscapeImageRatioWidth: 25,
            landscapeImageRatioHeight: 10,
            portraitImageRatioWidth: 5,
            portraitImageRatioHeight: 8
        };
    },

    setStylePropertiesSmallPortrait: function setStylePropertiesSmallPortrait() {
        var windowWidth = this.props.windowWidth;

        var panelWidth = windowWidth * 100 / 100;
        var headerHeight = panelWidth * this.props.headerPercent / this.props.imageWidthPercent;
        var imageHeight = panelWidth * this.props.imageHeightPercent / this.props.imageWidthPercent;
        var panelHeight = headerHeight + imageHeight;

        var headerHeightString = headerHeight.toString() + 'px';
        var imageHeightString = imageHeight.toString() + 'px';
        var panelHeightString = panelHeight.toString() + 'px';
        var panelWidthString = panelWidth.toString() + 'px';

        this.itemPaperStyle = { height: panelHeightString, width: '100%', marginBottom: headerHeightString, textAlign: 'center', verticalAlign: 'top', display: 'inline-block' };
        this.headerStyle = { width: panelWidthString, height: headerHeightString, lineHeight: headerHeightString, backgroundColor: '#000000', color: '#FFFFFF' };
        this.bodyStyle = { width: panelWidthString, height: imageHeightString, lineHeight: imageHeightString };
        this.imageStyle = { height: 'auto', maxHeight: imageHeightString, width: panelWidthString };
    },

    setStylePropertiesStandard: function setStylePropertiesStandard() {
        // Calculate the size of each panel and the spacing between each panel
        var windowWidth = this.props.windowWidth;

        var panelWidth = 30 * windowWidth / 100;
        var panelSpacing = 5 * windowWidth / 100 / 3;
        var headerHeight = this.props.headerPercent * windowWidth / 100;
        var imageHeight = this.props.imageHeightPercent * windowWidth / 100;
        var panelHeight = headerHeight + imageHeight;

        var panelWidthString = panelWidth.toString() + 'px';
        var panelSpacingString = panelSpacing.toString() + 'px';
        var headerHeightString = headerHeight.toString() + 'px';
        var imageHeightString = imageHeight.toString() + 'px';
        var panelHeightString = panelHeight.toString() + 'px';

        this.paperStyle = { height: panelHeightString, width: '100%', marginTop: headerHeightString, marginBottom: headerHeightString, textAlign: 'center', display: 'inline-block' };
        this.itemPaperStyle = { height: '100%', width: panelWidthString, textAlign: 'center', verticalAlign: 'top', display: 'inline-block' };
        this.spacerPaperStyle = { height: '100%', width: panelSpacingString, textAlign: 'center', verticalAlign: 'top', display: 'inline-block' };
        this.headerStyle = { width: panelWidthString, height: headerHeightString, lineHeight: headerHeightString, backgroundColor: '#000000', color: '#FFFFFF' };
        this.bodyStyle = { width: panelWidthString, height: imageHeightString, lineHeight: imageHeightString };
        this.imageStyle = { height: 'auto', maxHeight: imageHeightString, width: panelWidthString };
    },

    render: function render() {

        if (this.props.deviceSize === "small" && this.props.deviceOrient === 'portrait') {
            this.setStylePropertiesSmallPortrait();
            this.content1 = React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { style: this.headerStyle },
                    'MiniCat 310'
                ),
                React.createElement(
                    'div',
                    { style: this.bodyStyle },
                    ' ',
                    React.createElement('img', { style: this.imageStyle, src: './images/MiniCat310-Lake Cathie.jpg' })
                )
            );
            this.content2 = React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { style: this.headerStyle },
                    'MiniCat 420'
                ),
                React.createElement(
                    'div',
                    { style: this.bodyStyle },
                    ' ',
                    React.createElement('img', { style: this.imageStyle, src: './images/MiniCat310-Lake Cathie.jpg' })
                )
            );
            this.content3 = React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { style: this.headerStyle },
                    'MiniCat 460'
                ),
                React.createElement(
                    'div',
                    { style: this.bodyStyle },
                    ' ',
                    React.createElement('img', { style: this.imageStyle, src: './images/MiniCat310-Lake Cathie.jpg' })
                )
            );

            return React.createElement(
                'div',
                null,
                React.createElement(Paper, { children: this.content1, style: this.itemPaperStyle, zDepth: 0 }),
                React.createElement(Paper, { children: this.content2, style: this.itemPaperStyle, zDepth: 0 }),
                React.createElement(Paper, { children: this.content3, style: this.itemPaperStyle, zDepth: 0 }),
                React.createElement('div', { style: { 'clear': 'both' } })
            );
        } else /* large or huge screen */
            {
                this.setStylePropertiesStandard();
                this.content1 = React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { style: this.headerStyle },
                        'MiniCat 310'
                    ),
                    React.createElement(
                        'div',
                        { style: this.bodyStyle },
                        ' ',
                        React.createElement('img', { style: this.imageStyle, src: './images/MiniCat310-Lake Cathie.jpg' })
                    )
                );
                this.content2 = React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { style: this.headerStyle },
                        'MiniCat 420'
                    ),
                    React.createElement(
                        'div',
                        { style: this.bodyStyle },
                        ' ',
                        React.createElement('img', { style: this.imageStyle, src: './images/MiniCat310-Lake Cathie.jpg' })
                    )
                );
                this.content3 = React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { style: this.headerStyle },
                        'MiniCat 460'
                    ),
                    React.createElement(
                        'div',
                        { style: this.bodyStyle },
                        ' ',
                        React.createElement('img', { style: this.imageStyle, src: './images/MiniCat310-Lake Cathie.jpg' })
                    )
                );

                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        Paper,
                        { style: this.paperStyle, zDepth: 0 },
                        React.createElement(Paper, { children: this.content1, style: this.itemPaperStyle, zDepth: 0 }),
                        React.createElement(Paper, { style: this.spacerPaperStyle, zDepth: 0 }),
                        React.createElement(Paper, { children: this.content2, style: this.itemPaperStyle, zDepth: 0 }),
                        React.createElement(Paper, { style: this.spacerPaperStyle, zDepth: 0 }),
                        React.createElement(Paper, { children: this.content3, style: this.itemPaperStyle, zDepth: 0 })
                    ),
                    React.createElement('div', { style: { 'clear': 'both' } })
                );
            }
    }
});

module.exports = ULM_ModelSummary;