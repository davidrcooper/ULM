if (typeof window !== 'undefined') {
    window.React = React;
}

var React = require('react');
var ReactDOM = require('react-dom');
var ULM_App = require('./ULM_App');
var injectTapEventPlugin = require('react-tap-event-plugin');

var sizeWindow="small";
var widthWindow=getWindowWidth();
var orientationWindow = getDeviceOrientation();



function effectiveDeviceWidth(){
	
	var deviceWidth;
	
	if ('orientation' in window)
	{
		deviceWidth = window.orientation === 0 ? window.screen.width : window.screen.height;
		
		if (navigator.userAgent.indexOf('Android') >= 0 && window.devicePixelRatio)
		{
		/*	deviceWidth = deviceWidth / window.devicePixelRatio;   /* is this required any more with latest mobile browsers? */
		    deviceWidth = deviceWidth;
		}
	}
	else
	{
		deviceWidth = window.screen.width;
	}
	

	
	return deviceWidth;
}

function getDeviceOrientation()
{

	if ('orientation' in window)
	{
        var ua = navigator.userAgent.toLowerCase();
        
        var isAndroid = ua.indexOf("android") > -1; // Detect Android devices
        if (isAndroid) //window.orientation is different for iOS and Android
        {
          if (window.orientation === 0 || window.orientation === 180)
            { //Landscape Mode
              return ("portrait");
            }
            else
            {
              return ("landscape");
            }
        }
        else
        {
          if (window.orientation === 90 || window.orientation === -90)
            { //Landscape Mode
              return ("landscape");
            }
            else
            {
              return ("portrait");
            }
        }
	}
	else
	{
	  if ((100*window.innerWidth / window.innerHeight) < 100)
	    return ("portrait");
	  else
	    return ("landscape");
	}
}

function getWindowsize()
{
		var wMobile = effectiveDeviceWidth();
		var wPC = window.innerWidth;
		
		var w = wMobile < wPC ? wMobile : wPC;
	
		if (w < 801) /* 960 */ /*600*/
			return("small");
		else
			if (w < 1160) /*960*/
				return("large");
			else
				return("huge");
}

function getWindowWidth()
{
		var wMobile = effectiveDeviceWidth();
		var wPC = window.innerWidth;
		
		return (wMobile < wPC ? wMobile : wPC);
}


window.onresize = function(){
		sizeWindow = getWindowsize();
        widthWindow = getWindowWidth();
        orientationWindow = getDeviceOrientation();
        var ContainerStyle = {
                width: '100%',
                marginLeft:'auto',
                marginRight: 'auto',
                bottom:'0px',
                height:'100%'
                }
		myContainer = ReactDOM.render(<ULM_App myNewProp={0} deviceOrient={orientationWindow} deviceSize={sizeWindow} windowWidth={widthWindow}  style={ContainerStyle} />, document.getElementById('app'));
	//	window.scrollTo(0,0);
}

window.onorientationchange = function()
{
  	sizeWindow = getWindowsize();
    widthWindow = getWindowWidth();
    orientationWindow = getDeviceOrientation();
    var ContainerStyle = {
                width: '100%',
                marginLeft:'auto',
                marginRight: 'auto',
                bottom:'0px',
                height:'100%'
                }
    myContainer = ReactDOM.render(<ULM_App myNewProp={0} deviceOrient={orientationWindow} deviceSize={sizeWindow} windowWidth={widthWindow}  style={ContainerStyle} />, document.getElementById('app'));
}

var ContainerStyle = {
        width: '100%',
        marginLeft:'auto',
        marginRight: 'auto',
        bottom:'0px',
        height:'100%'
        }
                                      
                                      
sizeWindow = getWindowsize();
widthWindow = getWindowWidth();
orientationWindow = getDeviceOrientation();
injectTapEventPlugin();
var myContainer = ReactDOM.render(<ULM_App myNewProp={0} deviceOrient={orientationWindow} deviceSize={sizeWindow} windowWidth={widthWindow} style={ContainerStyle} />, document.getElementById('app'));
	




