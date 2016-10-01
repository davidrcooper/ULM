
var React = require('react');
var ReactDOM = require('react-dom');
var ULM_PhotoSlider = require('./ULM_PhotoSlider');
var getMuiTheme = require('material-ui/styles/getMuiTheme').default;
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
var RaisedButton = require('material-ui/RaisedButton').default;
var Drawer = require('material-ui/Drawer').default;
var MenuItem =require('material-ui/MenuItem').default;
var injectTapEventPlugin = require('react-tap-event-plugin');
var FontIcon = require('material-ui/FontIcon').default;
var ToolbarGroup = require('material-ui/Toolbar').default;
var Toolbar = require('material-ui/Toolbar').default;
var IconButton = require('material-ui/IconButton').default;
var NavMenu = require('material-ui/svg-icons/navigation/menu').default;
var Paper = require ('material-ui/Paper').default;


const style = {
    margin: 0,
    top: '20px',
    right: 'auto',
    bottom: 'auto',
    left: '20px',
    position: 'fixed',
    zIndex: 5
};

const iconStyles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 70,
    height: 70,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
    margin: 0,
    top: '0px',
    right: 'auto',
    bottom: 'auto',
    left: '0px',
    position: 'fixed',
    zIndex: 5      
  },
  large: {
    width: 80,
    height: 80,
    padding: 5,
    margin: 0,
    top: '0px',
    right: 'auto',
    bottom: 'auto',
    left: '5px',
    position: 'fixed',
    zIndex: 5
  },
};

const paperStyle = {
  height: 'auto',
  maxWidth: '100%',
  margin: 5,
  textAlign: 'center',
  display: 'inline-block',
};


var ULM_App = React.createClass({
    
    getInitialState: function(){
      
        
        return {
                  optionSelected: 'Home',
                  openStatus: false,
                  open: false
          
        };
      
    },
      

    handleToggle: function(){
      this.setState({open: !this.state.open});
    },

    handleClose: function(){
      this.setState({open: false});
    },

    handleChange: function(val){
      this.setState({val})
    },
    
    
    itemSelected: function(link){
      
        switch (link)
        {
            case 0:
                    this.setState({optionSelected: 'Home'});
                    this.setState({openStatus: false});
                    this.setState({open: false});
                    break;

            case 1:
                    this.setState({optionSelected: 'Sailing'});
                    this.setState({openStatus: false});
                    this.setState({open: false});
                    break;
                    
            case 2:
                    this.setState({optionSelected: 'MC310'});
                    this.setState({openStatus: false});
                    this.setState({open: false});
                    break;
                    
            case 3:
                    this.setState({optionSelected: 'MC420'});
                    this.setState({openStatus: false});
                    this.setState({open: false});
                    break;

            case 4:
                    this.setState({optionSelected: 'MC460'});
                    this.setState({openStatus: false});
                    this.setState({open: false});
                    break;

                    
            default:
                    this.setState({optionSelected: 'Home'});
                    this.setState({openStatus: false});
                    this.setState({open: false});
                    break;
        }
    },
    
    render: function(){
      
      var outerContainerStyle={background: '#FFFFFF',height: '100%'};
      var orgContainerStyle={backgroundColor: '#FFFFFF',height: 'auto', width: '100%', margin: '0px',padding: '0px',zIndex:0,position:'relative'};

      var containerStyle={backgroundColor: '#FFFFFF'};
      
      var menuItemStyle = {cursor:'pointer'}
      var imgStyle = {  maxWidth: '100%',
                        height: 'auto'
                      }
      

      return(<div id='outer-container' >
  
                             <MuiThemeProvider muiTheme={getMuiTheme()}>
                                  <div>
                                    <IconButton touch={true} onTouchTap={this.handleToggle}
                                          iconStyle={iconStyles.mediumIcon} style={iconStyles.medium}
                                          tooltip="Click to open menu" tooltipPosition="bottom-right">
                                          <NavMenu style={{maxWidth:'100%'}}/>
                                    </IconButton>
                                  
                                    <div id='ULM_Body'>
                                      {(this.state.optionSelected==='Home') && <ULM_PhotoSlider />}
                                      {(this.state.optionSelected==='Sailing') && <img src={'./images/ultralightsailing.png'}/>}
                                      {(this.state.optionSelected==='MC310') && <img src={'./images/MC310_full.png'}/>}
                                      {(this.state.optionSelected==='MC420') && <img src={'./images/MC420_full.png'}/>}
                                      {(this.state.optionSelected==='MC460') && <img src={'./images/MC460_full.png'}/>}
                                    </div>
                                  

                                    
                                    <Drawer
                                      docked={true}
                                      width={200}
                                      open={this.state.open}
                                    >
                                      <Paper style={paperStyle} zDepth={0}>
                                        <img id="logo" className="my-img" src={'./images/ULM-logo-flat.png'} style={{maxWidth:'100%'}}/>
                                      </Paper>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,0)}>Home</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,1)}>Ultra Light Sailing</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,2)}>MiniCat 310</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,3)}>MiniCat 420</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,4)}>MiniCat 460</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,5)}>Photos</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,6)}>Videos</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,7)}>Contact Us</MenuItem>
                                      
                                    </Drawer>
                                  </div>
                                  
                                  
                                  
                                  
                            </MuiThemeProvider>
                </div>
        );
    }
});


injectTapEventPlugin();

var myPage = ReactDOM.render(<ULM_App/>, document.getElementById('app'));
