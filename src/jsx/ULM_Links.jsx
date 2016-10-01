if (typeof window !== 'undefined') {
    window.React = React;
}


var React = require('react');
var ULM_PageHeader = require('./ULM_PageHeader');
var Paper = require ('material-ui/Paper').default;
var GridList = require ('material-ui/GridList').GridList;
var GridTile = require ('material-ui/GridList').GridTile;
var IconButton = require ('material-ui/IconButton').default;
var Subheader = require ('material-ui/Subheader').default;
var StarBorder = require ('material-ui/svg-icons/toggle/star-border').default;




var ULM_Links = React.createClass({

	getInitialState: function() {
	
		
				return {};
	},

setStyleProperties: function()
{
    /* Calculate scaled width of the image based on full height fill */
//    var fullWidth = Math.round(((window.innerHeight-(this.props.headerOrFooterSpacerHeight))*this.props.ratioWidth)/this.props.ratioHeight);
    /*If the full Width is larger than innerWidth of the window then crop edges by using a margin offset */
/*    if (fullWidth >= window.innerWidth)
    { */
        var paperHeight = window.innerHeight-(this.props.headerOrFooterSpacerHeight)-(this.props.headerOrFooterSpacerHeight);
        var h = paperHeight.toString();
        var h=h+'px';
        this.paperStyle={
        				   display:'inline-block',
        				   textAlign: 'center',
        				   width: 'auto',
        				   minHeight: h,
        				   margin:0}
/*
    }
    
    else // the aspect ratio is lower than 2.5 therefore we need to scale the width of the image to the viewport and crop the bottom
    {
        this.paperStyle={
        				   display:'block',
        				   width: '100%',
        				   height:'auto'}
    }*/
    
    this.tilesData = [
      {
        key: 1,
        img: 'images/minicat.jpg',
        title: 'MiniCat',
        author: 'none',
      },
      {
        key: 2,
        img: 'images/concordryde.jpg',
        title: 'Concord-Ryde',
        author: 'none',
      },
      {
        key: 3,
        img: 'images/minicatyoutube.jpg',
        title: 'MiniCat Youtube Channel',
        author: 'none',
      }

    ];

    if (this.props.deviceSize === "small")
    {
      if (this.props.deviceOrient==='portrait')
      {
          this.numCols = 1;
          this.headerJustify='center';
          this.headerIndent='0px';
      }
      else
      {
          this.numCols = 2;
          this.headerJustify='left';
          this.headerIndent='24px';
      }
    }
    else
    {
        this.headerJustify='left';
          this.headerIndent='24px';
        this.numCols = 4;
        if (this.tilesData.length<4)
        {
            for (var i=this.tilesData.length;i<4;i++)
            {
              this.tilesData.push({key: i+1,img: null,title: '',author: 'none'});
            }
        }
    }

    
    var itemWidth = window.innerWidth/this.numCols;
    var itemHeight = itemWidth;
    var moveLeft = 0;/*itemWidth/10;*/
    
    this.cellHeight = itemHeight;
    
    this.styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      
      gridList: {
        maxWidth: '100vw',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      
      gridItem: {
        width: itemWidth,
        height: itemHeight
      },
      
      image: {maxWidth: '80%', cursor: 'pointer'}

    };
    
    
    
},

  linkSelected: function(index)
  {
    switch(index)
    {
      case 1:
              window.location.assign("http://www.minicatamaran.eu");
              break;
      case 2:
              window.location.assign("http://www.concordrydesailing.org.au/");
              break;
      case 3:
              window.location.assign("https://www.youtube.com/channel/UCkuwjIsWuC4OoynrToJqx0Q");
              break;
      default:
              break;
    }

  },

 
  render: function () {
  
    this.setStyleProperties();
          
    var ULM_Links_Node = <div style={this.styles.root}>
                        <ULM_PageHeader text={'Links...'} justify={this.headerJustify} indent={this.headerIndent}/>
                        <GridList padding={0} cellHeight={this.cellHeight}  cols={this.numCols} style={this.styles.gridList}>
                        {this.tilesData.map((tile) => (
                        <GridTile style={this.styles.gridItem} key={tile.key}>
                        <img src={tile.img} style={this.styles.image} onTouchTap={this.linkSelected.bind(this,tile.key)}/>
                        </GridTile>))}</GridList></div>;
          
          
          if (this.props.deviceSize === "small")
          {
              var itemPaperStyle = {height: '500px', width: '90vw',margin: '1vw',textAlign: 'center',display: 'inline-block'};
              var paperStyle = {height: '100vh',width: 'auto',margin: 0,textAlign: 'center',display: 'inline-block'};
          }
          else /* large or huge screen */
          {
              var itemPaperStyle = {height: '100%', width: '30vw',margin: '1vw',textAlign: 'center',display: 'inline-block'};
              var paperStyle = {height: '100vh',width: 'auto',margin: 0,marginTop:-48, textAlign: 'center',display: 'inline-block'};
          }
 
          return (<Paper children={ULM_Links_Node} style={this.paperStyle} zDepth={0} rounded={false} />);
  }
});

module.exports=ULM_Links;































