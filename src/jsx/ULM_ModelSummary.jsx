if (typeof window !== 'undefined') {
    window.React = React;
}


var React = require('react');
var Paper = require ('material-ui/Paper').default;


var ULM_ModelSummary = React.createClass({

	getInitialState: function() {return {};},

	getDefaultProps: function() {
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
 
  setStylePropertiesSmallPortrait: function()
  {
      var windowWidth =  this.props.windowWidth;

      var panelWidth = (windowWidth*100)/100;
      var headerHeight = (panelWidth*this.props.headerPercent)/this.props.imageWidthPercent;
      var imageHeight = (panelWidth*this.props.imageHeightPercent)/this.props.imageWidthPercent;
      var panelHeight = headerHeight+imageHeight;

      var headerHeightString = (headerHeight.toString())+'px';
      var imageHeightString = (imageHeight.toString())+'px';
      var panelHeightString = (panelHeight.toString())+'px';
      var panelWidthString = (panelWidth.toString())+'px';
      
      this.itemPaperStyle = {height: panelHeightString, width: '100%',marginBottom: headerHeightString,textAlign: 'center',verticalAlign: 'top',display: 'inline-block'};
      this.headerStyle={width:panelWidthString, height: headerHeightString,lineHeight:headerHeightString,backgroundColor: '#000000',color:'#FFFFFF'};
      this.bodyStyle={width:panelWidthString, height: imageHeightString,lineHeight:imageHeightString};
      this.imageStyle={height: 'auto', maxHeight: imageHeightString,width: panelWidthString};
      
  },
  
  
  setStylePropertiesStandard: function()
  {
      // Calculate the size of each panel and the spacing between each panel
      var windowWidth =  this.props.windowWidth;

      var panelWidth = (30*windowWidth)/100;
      var panelSpacing = ((5*windowWidth)/100)/3;
      var headerHeight = (this.props.headerPercent*windowWidth)/100;
      var imageHeight = (this.props.imageHeightPercent*windowWidth)/100;
      var panelHeight = headerHeight+imageHeight;
    
      var panelWidthString = (panelWidth.toString())+'px';
      var panelSpacingString = (panelSpacing.toString())+'px';
      var headerHeightString = (headerHeight.toString())+'px';
      var imageHeightString = (imageHeight.toString())+'px';
      var panelHeightString = (panelHeight.toString())+'px';
              
      this.paperStyle = {height: panelHeightString,width: '100%',marginTop: headerHeightString,marginBottom: headerHeightString,textAlign: 'center',display: 'inline-block'};
      this.itemPaperStyle = {height: '100%', width: panelWidthString,textAlign: 'center',verticalAlign: 'top',display: 'inline-block'};
      this.spacerPaperStyle= {height: '100%', width: panelSpacingString,textAlign: 'center',verticalAlign: 'top',display: 'inline-block'};
      this.headerStyle={width:panelWidthString, height: headerHeightString,lineHeight:headerHeightString,backgroundColor: '#000000',color:'#FFFFFF'};
      this.bodyStyle={width:panelWidthString, height: imageHeightString,lineHeight:imageHeightString};
      this.imageStyle={height: 'auto', maxHeight: imageHeightString,width: panelWidthString};
      

  },
 
  render: function () {
    

    if ((this.props.deviceSize === "small") && (this.props.deviceOrient==='portrait'))
    {
            this.setStylePropertiesSmallPortrait();
            this.content1=<div><div style={this.headerStyle}>MiniCat 310</div><div style={this.bodyStyle}> <img style={this.imageStyle} src='./images/MiniCat310-Lake Cathie.jpg'/></div></div>;
            this.content2=<div><div style={this.headerStyle}>MiniCat 420</div><div style={this.bodyStyle}> <img style={this.imageStyle} src='./images/MiniCat310-Lake Cathie.jpg'/></div></div>;
            this.content3=<div><div style={this.headerStyle}>MiniCat 460</div><div style={this.bodyStyle}> <img style={this.imageStyle} src='./images/MiniCat310-Lake Cathie.jpg'/></div></div>;

            return (<div>

                        <Paper children={this.content1} style={this.itemPaperStyle} zDepth={0} />
                        <Paper children={this.content2} style={this.itemPaperStyle} zDepth={0} />
                        <Paper children={this.content3} style={this.itemPaperStyle} zDepth={0} />
                        
                    <div style={{'clear':'both'}}/>
                    </div>);

        

    }
    else /* large or huge screen */
    {
            this.setStylePropertiesStandard();
            this.content1=<div><div style={this.headerStyle}>MiniCat 310</div><div style={this.bodyStyle}> <img style={this.imageStyle} src='./images/MiniCat310-Lake Cathie.jpg'/></div></div>;
            this.content2=<div><div style={this.headerStyle}>MiniCat 420</div><div style={this.bodyStyle}> <img style={this.imageStyle} src='./images/MiniCat310-Lake Cathie.jpg'/></div></div>;
            this.content3=<div><div style={this.headerStyle}>MiniCat 460</div><div style={this.bodyStyle}> <img style={this.imageStyle} src='./images/MiniCat310-Lake Cathie.jpg'/></div></div>;
            
            return (<div>
                    <Paper style={this.paperStyle} zDepth={0}>
                        
                        <Paper children={this.content1} style={this.itemPaperStyle} zDepth={0} />
                        <Paper style={this.spacerPaperStyle} zDepth={0} />
                        <Paper children={this.content2} style={this.itemPaperStyle} zDepth={0} />
                        <Paper style={this.spacerPaperStyle} zDepth={0} />
                        <Paper children={this.content3} style={this.itemPaperStyle} zDepth={0} />
                        
                    </Paper>
                    <div style={{'clear':'both'}}/>
                    </div>);
      }

    
 
  }
});

module.exports=ULM_ModelSummary;































