var React = require('react');
var ReactDOM = require('react-dom');
var ULM_Home = require('./ULM_Home');
var ULM_Links = require('./ULM_Links');

var getMuiTheme = require('material-ui/styles/getMuiTheme').default;
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
var RaisedButton = require('material-ui/RaisedButton').default;
var FlatButton = require('material-ui/FlatButton').default;
var Drawer = require('material-ui/Drawer').default;
var Menu = require ('material-ui/Menu').default;
var MenuItem =require('material-ui/MenuItem').default;

var DropDownMenu = require('material-ui/DropDownMenu').default;
var Popover = require ('material-ui/Popover').default;

var injectTapEventPlugin = require('react-tap-event-plugin');
var FontIcon = require('material-ui/FontIcon').default;
var ToolbarGroup = require('material-ui/Toolbar').default;
var ToolbarSeparator = require('material-ui/Toolbar').default;
var ToolbarTitle = require('material-ui/Toolbar').ToolbarTitle;
var Toolbar = require('material-ui/Toolbar').default;
var IconButton = require('material-ui/IconButton').default;
var NavMenu = require('material-ui/svg-icons/navigation/menu').default;
var NavCancel = require('material-ui/svg-icons/content/clear').default;
var IconCopyRight = require('material-ui/svg-icons/action/copyright').default;
var Paper = require ('material-ui/Paper').default;


var cyan500 = require ('material-ui/styles/colors').cyan500;

var getMuiTheme = require('material-ui/styles/getMuiTheme').default;

var Popover = require('material-ui/Popover').Popover;
var PopoverAnimationVertical = require('material-ui/Popover').PopoverAnimationVertical;




var AppBar = require ('material-ui/AppBar').default;

var deepOrange500 = require('material-ui/styles/colors').deepOrange500;
var white = require('material-ui/styles/colors').white;
var black = require('material-ui/styles/colors').black;

var ArrowDropRight = require('material-ui/svg-icons/navigation-arrow-drop-right').default;

var ArrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down').default;
var ActionHome = require('material-ui/svg-icons/action/home').default;

const style = {
    margin: 0,
    top: '20px',
    right: 'auto',
    bottom: 'auto',
    left: '20px',
    position: 'fixed',
    zIndex: 5
};

const flatButtonStyle = {
    margin: 0,
    height:'100%'
};



const dropDownMenuStyle = {
    margin: 0,
    height:'100%',
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
    width: 52,
    height: 52,
    padding: 8,
    marginTop: 'auto',
    marginBottom: 'auto'
   
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
  width: '100px',
  margin: 5,
  textAlign: 'center',
  display: 'inline-block',
};

const appPalette = {
primary1Color: white,
primary2Color: cyan500,
primary3Color: cyan500,
accent1Color: cyan500,
accent2Color: '#000000',
accent3Color: cyan500,
textColor : black,
secondaryTextColor: white};



const navCancelIconStyle = {
    width: 36,
    height: 36,
    color: white,
    fill: black
  };

const navCancelStyle = {
    width: 52,
    height: 52,
    padding: 8,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: black
  };

var myString = String.prototype.concat(String.fromCharCode(0x00A9)," Ultra Light Marine 2016");



    

var ULM_Container = React.createClass({
    
    getInitialState: function(){
      
        
        return {
                  optionSelected: 'Home',
                  openStatus: false,
                  openMenuMiniCat: false,
                  openMenuGallery: false,
                  open: false
          
        };
      
    },
      

    handleToggle: function(){
      this.setState({open: !this.state.open});
    },
    
    handleGoPageTop: function (){
      window.scrollTo(0,0);
    },

    handleClose: function(){
      this.setState({open: false});
    },

    handleChange: function(val){
      this.setState({val})
    },
    
    openMiniCatMenu: function(event){
      
        this.setState({
            openMenuMiniCat: true,
            anchorElMenuMiniCat: event.currentTarget,
            });
    },
    
    handleRequestCloseMiniCatMenu: function(){
            this.setState({
            openMenuMiniCat: false,
            });
    },
    
    openGalleryMenu: function(event){
      
        this.setState({
            openMenuGallery: true,
            anchorElMenuGallery: event.currentTarget,
            });
    },
    
    handleRequestCloseGalleryMenu: function(){
            this.setState({
            openMenuGallery: false,
            });
    },
    
    closeDrawer: function(){
        this.setState({open:false});
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

            case 6:
                    this.setState({optionSelected: 'Links'});
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
    
    if (this.props.deviceSize === "small")
    {
        var myTheme = getMuiTheme({palette: appPalette,   toolbar: {height: 48,},});
        var logoStyle = {display:'block',maxHeight:'40px',width:'auto',marginTop:'4px'}
        var  buttonTextStyle = { fontWeight: 600, fontSize:12 ,color : white };
    }

    else if (this.props.deviceSize === "large")
    {
        var myTheme = getMuiTheme({palette: appPalette,   toolbar: {height: 48,},});
        var logoStyle = {display:'block',maxHeight:'40px',width:'auto',marginTop:'4px'}
        var  buttonTextStyle = { fontWeight: 600, fontSize:14 ,color : white };
    }
    else /* huge */
    {
        var myTheme = getMuiTheme({palette: appPalette,   toolbar: {height: 56,},});
        var logoStyle = {display:'block',maxHeight:'48px',width:'auto',marginTop:'4px'}
        var  buttonTextStyle = { fontWeight: 600, fontSize:16 ,color : white};
    }
            
        
      var outerContainerStyle={background: '#FFFFFF',height: '100%'};
      var orgContainerStyle={backgroundColor: '#FFFFFF',height: 'auto', width: '100%', margin: '0px',padding: '0px',zIndex:0,position:'relative'};

      var containerStyle={backgroundColor: '#FFFFFF'};
      
      var menuItemStyle = {cursor:'pointer'}
      
      var drawerWidth = this.props.windowWidth / 1.5;

      var w = this.props.windowWidth;
      var dpr = window.devicePixelRatio;
      
        
      
      if (this.props.deviceSize === "small")
      {
      
            return(<div id='outer-container' style={{overflow:'hidden'}}>
  
                             <MuiThemeProvider muiTheme={myTheme}>
                                  <div>

                                         <Toolbar noGutter={true}>
                                            <ToolbarGroup firstChild={true}>
                                                
                                                <img id="logo" className="my-img" src={'./images/ULM-logo-flat.png'} style={logoStyle}/>
                                            </ToolbarGroup>
                                            <ToolbarGroup>
                   
                                               <IconButton touch={true} onTouchTap={this.handleToggle}
                                                                      iconStyle={iconStyles.smallIcon} style={iconStyles.small}>
                                                                      <NavMenu color={'#FFFFFF'}style={{maxWidth:'100%'}}/>
                                                </IconButton>
                   
                                            </ToolbarGroup>
                   
                                          </Toolbar>
                   
                   

                                  
                                    <div id='ULM_Body'>
                                      {(this.state.optionSelected==='Home') && <ULM_Home deviceSize={this.props.deviceSize} windowWidth= {this.props.widthWindow} deviceOrient={this.props.deviceOrient}/>}
                                      {(this.state.optionSelected==='Sailing') && <img src={'./images/ultralightsailing.png'}/>}
                                      {(this.state.optionSelected==='MC310') && <img src={'./images/MC310_full.png'}/>}
                                      {(this.state.optionSelected==='MC420') && <img src={'./images/MC420_full.png'}/>}
                                      {(this.state.optionSelected==='MC460') && <img src={'./images/MC460_full.png'}/>}
                                      

                                    <Toolbar noGutter={true}>
                                            <ToolbarGroup firstChild={true}>
                                                
                                               <IconButton touch={true} onTouchTap={this.handleGoPageTop}
                                                                      iconStyle={iconStyles.smallIcon} style={iconStyles.small}>
                                                                      <ActionHome color={'#FFFFFF'}style={{maxWidth:'100%'}}/>
                                                </IconButton>
                   
                                                
                                            </ToolbarGroup>
                                            <ToolbarGroup float={'right'}>
                                                    <ToolbarTitle text={myString} style={{color:white,fontFamily: 'Roboto, sans-serif',fontSize:12}}/>
                        
                                            </ToolbarGroup>
                                    </Toolbar>
                                      
                                      
                                      
                                    </div>
                                  

                                    
                                    <Drawer
                                      docked={true}
                                      openSecondary={true}
                                      width={drawerWidth}
                                      open={this.state.open}
                                    >
                                      <AppBar iconElementRight={<IconButton onTouchTap={this.handleToggle} iconStyle={navCancelIconStyle} style={iconStyles.small}><NavCancel color={'#000000'} style={{fill:'#000000'},{maxWidth:'100%'}}/></IconButton>}/>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,0)}>{w.toString()} {dpr.toString()}</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,2)}>MiniCat 310</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,3)}>MiniCat 420</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,4)}>MiniCat 460</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,5)}>Photos</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,6)}>Videos</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,7)}>Links</MenuItem>
                                      <MenuItem onTouchTap={this.itemSelected.bind(this,8)}>Contact</MenuItem>
                                      
                                    </Drawer>
                                    

                                    
                                    
                                    
                                  </div>
                                  
                                  
                                  
                                  
                            </MuiThemeProvider>
                </div>
                );
      
      }
      else /* large or huge screen */
      {
          
            return(<div id='outer-container' style={{overflow:'hidden'}}>
  
                              <MuiThemeProvider muiTheme={myTheme}>
                                  <div>

                                         <Toolbar noGutter={true}>
                                            <ToolbarGroup firstChild={true}>
                                                
                                                <img id="logo" className="my-img" src={'./images/ULM-logo-flat.png'} style={logoStyle}/>
                                                
                                            </ToolbarGroup>
                                            <ToolbarGroup>
                                                    <FlatButton label="Home" primary={true} style={flatButtonStyle} onTouchTap={this.itemSelected.bind(this,0)}  labelStyle = {buttonTextStyle}/>
                                                    <FlatButton label="MiniCat" primary={true} style={flatButtonStyle} onTouchTap={this.openMiniCatMenu} labelStyle = {buttonTextStyle}/>
                                                    
                                                          <Popover
                                                              open={this.state.openMenuMiniCat}
                                                              anchorEl={this.state.anchorElMenuMiniCat}
                                                              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                                              targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                                              onRequestClose={this.handleRequestCloseMiniCatMenu}
                                                              animation={PopoverAnimationVertical}>
                                                              <Menu>
                                                                <MenuItem primaryText="MiniCat 310" />
                                                                <MenuItem primaryText="MiniCat 420" />
                                                                <MenuItem primaryText="MiniCat 460" />
                                                              </Menu>
                                                          </Popover>
                   
                                                    <FlatButton label="Gallery" primary={true} style={flatButtonStyle} onTouchTap={this.openGalleryMenu} labelStyle = {buttonTextStyle}/>
                   
                                                          <Popover
                                                              open={this.state.openMenuGallery}
                                                              anchorEl={this.state.anchorElMenuGallery}
                                                              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                                              targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                                              onRequestClose={this.handleRequestCloseGalleryMenu}
                                                              animation={PopoverAnimationVertical}>
                                                              <Menu>
                                                                <MenuItem primaryText="Photos" />
                                                                <MenuItem primaryText="Videos" />
                                                              </Menu>
                                                          </Popover>
                   
                                                    <FlatButton label="Links" primary={true} style={flatButtonStyle} onTouchTap={this.itemSelected.bind(this,6)} labelStyle = {buttonTextStyle}/>
                                                    <FlatButton label="Contact" primary={true} style={flatButtonStyle} labelStyle = {buttonTextStyle}/>
                                            </ToolbarGroup>
                                          </Toolbar>
    
    
                                    <div id='ULM_Body'>
                                      {(this.state.optionSelected==='Home') && <ULM_Home deviceSize={this.props.deviceSize} windowWidth={this.props.widthWindow} deviceOrient={this.props.deviceOrient}/>}
                                      
                                      {(this.state.optionSelected==='MC310') && <img src={'./images/MC310_full.png'}/>}
                                      {(this.state.optionSelected==='MC420') && <img src={'./images/MC420_full.png'}/>}
                                      {(this.state.optionSelected==='MC460') && <img src={'./images/MC460_full.png'}/>}
                                      {(this.state.optionSelected==='Links') && <ULM_Links deviceSize={this.props.deviceSize} windowWidth={this.props.widthWindow} deviceOrient={this.props.deviceOrient}/>}
                                    </div>

                                    <Toolbar noGutter={true}>
                                            <ToolbarGroup firstChild={true}>
                                                
                                               <IconButton touch={true} onTouchTap={this.handleGoPageTop}
                                                                      iconStyle={iconStyles.smallIcon} style={iconStyles.small}>
                                                                      <ActionHome color={'#FFFFFF'}style={{maxWidth:'100%'}}/>
                                                </IconButton>
                   
                                                
                                            </ToolbarGroup>
                                            <ToolbarGroup float={'right'}>
                                                    <ToolbarTitle text={myString} style={{color:white,fontFamily: 'Roboto, sans-serif',fontSize:14}}/>
                                            </ToolbarGroup>
                                    </Toolbar>

                                  

                                    

                                  </div>
                                  
                                  
                                  
                                  
                            </MuiThemeProvider>
                </div>
            );
      }
      
    }
});


module.exports=ULM_Container;