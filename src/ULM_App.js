'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ULM_Home = require('./ULM_Home');
var ULM_Links = require('./ULM_Links');

var getMuiTheme = require('material-ui/styles/getMuiTheme').default;
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
var RaisedButton = require('material-ui/RaisedButton').default;
var FlatButton = require('material-ui/FlatButton').default;
var Drawer = require('material-ui/Drawer').default;
var Menu = require('material-ui/Menu').default;
var MenuItem = require('material-ui/MenuItem').default;

var DropDownMenu = require('material-ui/DropDownMenu').default;
var Popover = require('material-ui/Popover').default;

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
var Paper = require('material-ui/Paper').default;

var cyan500 = require('material-ui/styles/colors').cyan500;

var getMuiTheme = require('material-ui/styles/getMuiTheme').default;

var Popover = require('material-ui/Popover').Popover;
var PopoverAnimationVertical = require('material-ui/Popover').PopoverAnimationVertical;

var AppBar = require('material-ui/AppBar').default;

var deepOrange500 = require('material-ui/styles/colors').deepOrange500;
var white = require('material-ui/styles/colors').white;
var black = require('material-ui/styles/colors').black;

var ArrowDropRight = require('material-ui/svg-icons/navigation-arrow-drop-right').default;

var ArrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down').default;
var ActionHome = require('material-ui/svg-icons/action/home').default;

var style = {
  margin: 0,
  top: '20px',
  right: 'auto',
  bottom: 'auto',
  left: '20px',
  position: 'fixed',
  zIndex: 5
};

var flatButtonStyle = {
  margin: 0,
  height: '100%'
};

var dropDownMenuStyle = {
  margin: 0,
  height: '100%'
};

var iconStyles = {
  smallIcon: {
    width: 36,
    height: 36
  },
  mediumIcon: {
    width: 48,
    height: 48
  },
  largeIcon: {
    width: 70,
    height: 70
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
  }
};

var paperStyle = {
  height: 'auto',
  width: '100px',
  margin: 5,
  textAlign: 'center',
  display: 'inline-block'
};

var appPalette = {
  primary1Color: white,
  primary2Color: cyan500,
  primary3Color: cyan500,
  accent1Color: cyan500,
  accent2Color: '#000000',
  accent3Color: cyan500,
  textColor: black,
  secondaryTextColor: white };

var navCancelIconStyle = {
  width: 36,
  height: 36,
  color: white,
  fill: black
};

var navCancelStyle = {
  width: 52,
  height: 52,
  padding: 8,
  marginTop: 'auto',
  marginBottom: 'auto',
  color: black
};

var myString = String.prototype.concat(String.fromCharCode(0x00A9), " Ultra Light Marine 2016");

var ULM_App = React.createClass({
  displayName: 'ULM_App',


  getInitialState: function getInitialState() {

    return {
      optionSelected: 'Home',
      pageActive: 'Home',
      openMenuMiniCat: false,
      openMenuGallery: false,
      drawerOpen: false

    };
  },

  handleToggle: function handleToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  },

  handleGoPageTop: function handleGoPageTop() {
    window.scrollTo(0, 0);
  },

  handleGoPageHome: function handleGoPageHome() {
    this.itemSelected(0);
    window.scrollTo(0, 0);
  },

  handleClose: function handleClose() {
    this.setState({ drawerOpen: false });
  },

  handleChange: function handleChange(val) {
    this.setState({ val: val });
  },

  openMiniCatMenu: function openMiniCatMenu(event) {

    this.setState({
      openMenuMiniCat: true,
      openMenuGallery: false,
      anchorElMenuMiniCat: event.currentTarget
    });
  },

  handleRequestCloseMiniCatMenu: function handleRequestCloseMiniCatMenu() {
    this.setState({
      openMenuMiniCat: false
    });
  },

  toggleMiniCatMenu: function toggleMiniCatMenu(event) {
    if (this.state.openMenuMiniCat) {
      this.setState({ openMenuMiniCat: false });
    } else {
      this.setState({
        openMenuMiniCat: true,
        openMenuGallery: false,
        anchorElMenuMiniCat: event.currentTarget });
    }
  },

  openGalleryMenu: function openGalleryMenu(event) {

    this.setState({
      openMenuMiniCat: false,
      openMenuGallery: true,
      anchorElMenuGallery: event.currentTarget
    });
  },

  handleRequestCloseGalleryMenu: function handleRequestCloseGalleryMenu() {
    this.setState({
      openMenuGallery: false
    });
  },

  toggleGalleryMenu: function toggleGalleryMenu(event) {
    if (this.state.openMenuGallery) {
      this.setState({ openMenuGallery: false });
    } else {
      this.setState({
        openMenuMiniCat: false,
        openMenuGallery: true,
        anchorElMenuGallery: event.currentTarget });
    }
  },

  closeDrawer: function closeDrawer() {
    this.setState({ drawerOpen: false });
  },

  itemSelected: function itemSelected(link) {

    switch (link) {
      case 0:
        this.setState({ optionSelected: 'Home' });
        this.setState({ pageActive: 'Home' });
        this.setState({ drawerOpen: false });
        this.setState({ openMenuMiniCat: false });
        this.setState({ openMenuGallery: false });
        break;

      case 1:
        this.setState({ optionSelected: 'Sailing' });
        this.setState({ pageActive: 'Sailing' });
        this.setState({ drawerOpen: false });
        break;

      case 2:
        this.setState({ optionSelected: 'MC310' });
        this.setState({ pageActive: 'MC310' });
        this.setState({ drawerOpen: false });
        break;

      case 3:
        this.setState({ optionSelected: 'MC420' });
        this.setState({ pageActive: 'MC420' });
        this.setState({ drawerOpen: false });
        break;

      case 4:
        this.setState({ optionSelected: 'MC460' });
        this.setState({ pageActive: 'MC460' });
        this.setState({ drawerOpen: false });
        break;

      case 6:
        this.setState({ optionSelected: 'Links' });
        this.setState({ pageActive: 'Links' });
        this.setState({ drawerOpen: false });
        this.setState({ openMenuMiniCat: false });
        break;

      default:
        this.setState({ optionSelected: 'Home' });
        this.setState({ pageActive: 'Home' });
        this.setState({ drawerOpen: false });
        this.setState({ openMenuMiniCat: false });
        this.setState({ openMenuGallery: false });
        break;
    }
  },

  renderPageSmallPortrait: function renderPageSmallPortrait() {

    var myTheme = getMuiTheme({ palette: appPalette, toolbar: { height: 48 } });
    var logoStyle = { display: 'block', maxHeight: '40px', width: 'auto', marginTop: '4px' };
    var buttonTextStyle = { fontWeight: 600, fontSize: 12, color: white };
    var drawerWidth = this.props.windowWidth / 1.5;
    var toolBarStyle = { zIndex: '4', position: 'relative' };
    var w = this.props.windowWidth;
    var dpr = window.devicePixelRatio;

    return React.createElement(
      'div',
      { id: 'outer-container', style: { overflow: 'hidden' } },
      React.createElement(
        MuiThemeProvider,
        { muiTheme: myTheme },
        React.createElement(
          'div',
          null,
          React.createElement(
            Toolbar,
            { noGutter: true, style: toolBarStyle },
            React.createElement(
              ToolbarGroup,
              { firstChild: true },
              React.createElement('img', { id: 'logo', className: 'my-img', src: './images/ULM-logo-flat.png', style: logoStyle })
            ),
            React.createElement(
              ToolbarGroup,
              null,
              React.createElement(
                IconButton,
                { touch: true, onTouchTap: this.handleToggle,
                  iconStyle: iconStyles.smallIcon, style: iconStyles.small },
                React.createElement(NavMenu, { color: '#FFFFFF', style: { maxWidth: '100%' } })
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'ULM_Body' },
            this.state.optionSelected === 'Home' && React.createElement(ULM_Home, { deviceSize: this.props.deviceSize, windowWidth: this.props.windowWidth, deviceOrient: this.props.deviceOrient }),
            this.state.optionSelected === 'Sailing' && React.createElement('img', { src: './images/ultralightsailing.png' }),
            this.state.optionSelected === 'MC310' && React.createElement('img', { src: './images/MC310_full.png' }),
            this.state.optionSelected === 'MC420' && React.createElement('img', { src: './images/MC420_full.png' }),
            this.state.optionSelected === 'MC460' && React.createElement('img', { src: './images/MC460_full.png' }),
            this.state.optionSelected === 'Links' && React.createElement(ULM_Links, { deviceSize: this.props.deviceSize, windowWidth: this.props.windowWidth, deviceOrient: this.props.deviceOrient, headerOrFooterSpacerHeight: 48 })
          ),
          React.createElement(
            Toolbar,
            { noGutter: true, style: { 'position': 'relative' } },
            React.createElement(
              ToolbarGroup,
              { firstChild: true },
              React.createElement(
                IconButton,
                { touch: true, onTouchTap: this.handleGoPageHome,
                  iconStyle: iconStyles.smallIcon, style: iconStyles.small },
                React.createElement(ActionHome, { color: '#FFFFFF', style: { maxWidth: '100%' } })
              )
            ),
            React.createElement(
              ToolbarGroup,
              { float: 'right' },
              React.createElement(ToolbarTitle, { text: myString, style: { color: white, fontFamily: 'Roboto, sans-serif', fontSize: 12 } })
            )
          ),
          React.createElement(
            Drawer,
            {
              docked: true,
              openSecondary: true,
              width: drawerWidth,
              open: this.state.drawerOpen },
            React.createElement(AppBar, { iconElementRight: React.createElement(
                IconButton,
                { onTouchTap: this.handleToggle, iconStyle: navCancelIconStyle, style: iconStyles.small },
                React.createElement(NavCancel, { color: '#000000', style: ({ fill: '#000000' }, { maxWidth: '100%' }) })
              ) }),
            React.createElement(
              MenuItem,
              { onTouchTap: this.itemSelected.bind(this, 0) },
              w.toString(),
              ' ',
              dpr.toString()
            ),
            React.createElement(
              MenuItem,
              { onTouchTap: this.itemSelected.bind(this, 2) },
              'MiniCat 310'
            ),
            React.createElement(
              MenuItem,
              { onTouchTap: this.itemSelected.bind(this, 3) },
              'MiniCat 420'
            ),
            React.createElement(
              MenuItem,
              { onTouchTap: this.itemSelected.bind(this, 4) },
              'MiniCat 460'
            ),
            React.createElement(
              MenuItem,
              { onTouchTap: this.itemSelected.bind(this, 5) },
              'Photos'
            ),
            React.createElement(
              MenuItem,
              { onTouchTap: this.itemSelected.bind(this, 6) },
              'Videos'
            ),
            React.createElement(
              MenuItem,
              { onTouchTap: this.itemSelected.bind(this, 6) },
              'Links'
            ),
            React.createElement(
              MenuItem,
              { onTouchTap: this.itemSelected.bind(this, 8) },
              'Contact'
            )
          )
        )
      )
    );
  },

  renderPageLargePortrait: function renderPageLargePortrait() {

    var myTheme = getMuiTheme({ palette: appPalette, toolbar: { height: 56 } });
    var logoStyle = { display: 'block', maxHeight: '40px', width: 'auto', marginTop: '4px' };
    var buttonTextStyle = { fontWeight: 600, fontSize: 14, color: white };

    /* huge */ /*
               {
               var myTheme = getMuiTheme({palette: appPalette,   toolbar: {height: 56,},});
               var logoStyle = {display:'block',maxHeight:'48px',width:'auto',marginTop:'4px'}
               var  buttonTextStyle = { fontWeight: 600, fontSize:16 ,color : white};
               } */

    var outerContainerStyle = { background: '#FFFFFF', height: '100%' };
    var orgContainerStyle = { backgroundColor: '#FFFFFF', height: 'auto', width: '100%', margin: '0px', padding: '0px', zIndex: 0, position: 'relative' };
    var containerStyle = { backgroundColor: '#FFFFFF' };
    var menuItemStyle = { cursor: 'pointer' };
    var toolBarStyle = { zIndex: '9999', position: 'relative' };
    var drawerWidth = this.props.windowWidth / 1.5;

    var w = this.props.windowWidth;
    var dpr = window.devicePixelRatio;

    return React.createElement(
      'div',
      { id: 'outer-container', style: { overflow: 'hidden' } },
      React.createElement(
        MuiThemeProvider,
        { muiTheme: myTheme },
        React.createElement(
          'div',
          null,
          React.createElement(
            Toolbar,
            { noGutter: true, style: toolBarStyle },
            React.createElement(
              ToolbarGroup,
              { firstChild: true },
              React.createElement('img', { id: 'logo', className: 'my-img', src: './images/ULM-logo-flat.png', style: logoStyle })
            ),
            React.createElement(
              ToolbarGroup,
              null,
              React.createElement(FlatButton, { label: 'Home', primary: true, style: flatButtonStyle, onTouchTap: this.itemSelected.bind(this, 0), labelStyle: buttonTextStyle }),
              React.createElement(FlatButton, { label: 'MiniCat', primary: true, style: flatButtonStyle, onTouchTap: this.toggleMiniCatMenu, labelStyle: buttonTextStyle }),
              React.createElement(
                Popover,
                {
                  open: this.state.openMenuMiniCat,
                  anchorEl: this.state.anchorElMenuMiniCat,
                  anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                  targetOrigin: { horizontal: 'left', vertical: 'top' },
                  onRequestClose: this.handleRequestCloseMiniCatMenu,
                  animation: PopoverAnimationVertical },
                React.createElement(
                  Menu,
                  null,
                  React.createElement(MenuItem, { primaryText: 'MiniCat 310' }),
                  React.createElement(MenuItem, { primaryText: 'MiniCat 420' }),
                  React.createElement(MenuItem, { primaryText: 'MiniCat 460' })
                )
              ),
              React.createElement(FlatButton, { label: 'Gallery', primary: true, style: flatButtonStyle, onTouchTap: this.toggleGalleryMenu, labelStyle: buttonTextStyle }),
              React.createElement(
                Popover,
                {
                  open: this.state.openMenuGallery,
                  anchorEl: this.state.anchorElMenuGallery,
                  anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                  targetOrigin: { horizontal: 'left', vertical: 'top' },
                  onRequestClose: this.handleRequestCloseGalleryMenu,
                  animation: PopoverAnimationVertical },
                React.createElement(
                  Menu,
                  null,
                  React.createElement(MenuItem, { primaryText: 'Photos' }),
                  React.createElement(MenuItem, { primaryText: 'Videos' })
                )
              ),
              React.createElement(FlatButton, { label: 'Links', primary: true, style: flatButtonStyle, onTouchTap: this.itemSelected.bind(this, 6), labelStyle: buttonTextStyle }),
              React.createElement(FlatButton, { label: 'Contact', primary: true, style: flatButtonStyle, onTouchTap: this.itemSelected.bind(this, 5), labelStyle: buttonTextStyle })
            )
          ),
          React.createElement(
            'div',
            { id: 'ULM_Body' },
            this.state.optionSelected === 'Home' && React.createElement(ULM_Home, { deviceSize: this.props.deviceSize, windowWidth: this.props.windowWidth, deviceOrient: this.props.deviceOrient }),
            this.state.optionSelected === 'MC310' && React.createElement('img', { src: './images/MC310_full.png' }),
            this.state.optionSelected === 'MC420' && React.createElement('img', { src: './images/MC420_full.png' }),
            this.state.optionSelected === 'MC460' && React.createElement('img', { src: './images/MC460_full.png' }),
            this.state.optionSelected === 'Links' && React.createElement(ULM_Links, { deviceSize: this.props.deviceSize, windowWidth: this.props.windowWidth, deviceOrient: this.props.deviceOrient, headerOrFooterSpacerHeight: 56 })
          ),
          React.createElement(
            Toolbar,
            { noGutter: true },
            React.createElement(
              ToolbarGroup,
              { firstChild: true },
              React.createElement(
                IconButton,
                { touch: true, onTouchTap: this.handleGoPageHome,
                  iconStyle: iconStyles.smallIcon, style: iconStyles.small },
                React.createElement(ActionHome, { color: '#FFFFFF', style: { maxWidth: '100%' } })
              )
            ),
            React.createElement(
              ToolbarGroup,
              { float: 'right' },
              React.createElement(ToolbarTitle, { text: myString, style: { color: white, fontFamily: 'Roboto, sans-serif', fontSize: 14 } })
            )
          )
        )
      )
    );
  },

  render: function render() {

    if (this.props.deviceSize === "small") {
      return this.renderPageSmallPortrait();
    } else /* large or huge screen */
      {
        return this.renderPageLargePortrait();
      }
  }
});

module.exports = ULM_App;