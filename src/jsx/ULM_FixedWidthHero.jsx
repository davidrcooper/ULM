if (typeof window !== 'undefined') {
    window.React = React;
}

var React = require('react');


					  

var ULM_FixedWidthHero = React.createClass({

	getInitialState: function() {
				return {};
	},

  renderSmallPortrait: function(){
    return(<div style={this.smallPortraitDivStyle}>
  			         <img src={this.props.background} style={this.smallPortraitStyle}/>
                 </div>);
  },

  renderLargePortrait: function(){
    return(<div style={this.smallPortraitDivStyle}>
  			         <img src={this.props.background} style={this.smallPortraitStyle}/>
                 </div>);
  },

  renderSmallLandscape: function(){
    return(<div style={this.smallPortraitDivStyle}>
  			         <img src={this.props.background} style={this.smallPortraitStyle}/>
                 </div>);
  },
  
  renderLargeLandscape: function(){
    return(<div style={this.smallPortraitDivStyle}>
  			         <img src={this.props.background} style={this.smallPortraitStyle}/>
                 </div>);
  },

setStyleProperties: function()
{

    
    if (window.innerWidth < 400)
    {
        var w = 400-window.innerWidth;
        var indent = Math.round(w/2)*-1;
        var s= indent.toString();
        var s=s+'px';
      
        this.smallPortraitDivStyle={display: 'block',overflow:'hidden'}
        this.smallPortraitStyle ={
        				   display:'block',
        				   width: '400px',
        				   height:'auto',
        				   marginLeft:s,
        				   top:'0px'
        				   
        }
    }
    else
    {
        this.smallPortraitDivStyle={display: 'block'}
        this.smallPortraitStyle ={height:'auto',
        				   width:'100%',
        				   display:'block'}
    }
},


  render: function () {

    /* Establish if the minimum viewport width threshold has occured and change the css style accordingly */



    this.setStyleProperties();
 
    if (this.props.deviceSize=='small')
    {
      if (this.props.deviceOrient==='portrait')
      {
    	  return (this.renderSmallPortrait());
      }
      else
      {
    	  return (this.renderSmallLandscape());
      }
    }
    else
    {
      if (this.props.deviceOrient==='portrait')
      {
    	  return (this.renderLargePortrait());
      }
      else
      {
    	  return (this.renderLargeLandscape());
      }
    }
  }
});

module.exports=ULM_FixedWidthHero;































