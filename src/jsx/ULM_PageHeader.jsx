if (typeof window !== 'undefined') {
    window.React = React;
}


var React = require('react');


var ULM_PageHeader = React.createClass({

	getInitialState: function() {return {};},

	getDefaultProps: function() {
    return {
      text: "EMPTY!",
      justify: 'center',
      indent: '0px'
    };
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
    
    this.style={
                width: '100%',
                marginLeft: this.props.indent,
                textAlign:this.getJustifyStyle()}
    
    
    return (<h1 style={this.style}>{this.props.text}</h1>);
  }
});

module.exports=ULM_PageHeader;































