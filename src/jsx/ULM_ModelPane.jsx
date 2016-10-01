if (typeof window !== 'undefined') {
    window.React = React;
}


var React = require('react');


var ULM_ModelPane = React.createClass({

	getInitialState: function() {return {};},

	getDefaultProps: function() {
    return {
      textHeader: "EMPTY!",
      textFooter: "EMPTY!"};
	},
 
  getJustifyStyle: function(){
  
    switch(this.props.justify)
    {
      case 'left':
                    return('left');
                    break;
                    
      case 'right' :
                    return('right');
                    break;


      case 'center':
      default:
                    return('center');
                    break;
    }
  },
 
  render: function () {
    
    this.imageStyle={
                width: 'auto',
                height: '100%',
                overflow: 'hidden'
    }
    this.headerStyle={width:'auto', height: '40px',lineHeight:'40px'}
    this.footerStyle={width:'auto', height: '40px',lineHeight:'40px'}
    
    return (<div>
              <h1 style={this.headerStyle}>{this.props.textHeader}</h1>
              <img style={this.imageStyle} src="./images/MiniCat310-Lake Cathie.jpg"/>
              <h1 style={this.footerStyle}>{this.props.textFooter}</h1>
            </div>);
  }
});

module.exports=ULM_ModelPane;































