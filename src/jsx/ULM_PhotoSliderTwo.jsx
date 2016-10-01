if (typeof window !== 'undefined') {
    window.React = React;
}

var React = require('react');
/*var ImageGallery = require('react-image-gallery').default;*/
var ImageGallery = require('./ImageGallery').default;  /* modify the source to manage the header overlay */
var ULM_Loader = require('./ULM_Loader');


var imagesPortrait = [
    {
  	original: './images/MiniCat310-Laura Dekker.jpg',
  	thumbnail: './images/MiniCat310-Laura Dekker.jpg'
    },
    
    {
  	original: './images/MiniCat460 - Thailand - Portrait.jpg',
  	thumbnail: './images/MiniCat460 - Thailand - Portrait.jpg'
    },
    
    
    {
  	original: './images/MiniCat460 - Portrait.jpg',
  	thumbnail: './images/MiniCat460 - Portrait.jpg'
    },
  
    
    {
  	original: './images/MiniCat310-Lake Cathie.jpg',
  	thumbnail: './images/MiniCat310-Lake Cathie.jpg'
    },
  
  ];


 var images = [
/*    {
  	original: './images/HastingsShore_huge.jpg',
  	thumbnail: './images/HastingsShore_huge.jpg'
    }, */
    
    {
  	original: './images/HastingsSail_huge.jpg',
  	thumbnail: './images/HastingsSail_huge.jpg'
    },
    {
  	original: './images/460Thailand.jpg',
  	thumbnail: './images/460Thailand.jpg'
    },
  ];

var imagesList = ["./images/HastingsShore.jpg"
			 ,"./images/Putney.jpg"
			 ,"./images/RhodesWinter.jpg"];
						 


var PhotoSliderTwoDivStyle ={height:'auto',
				   width:'100%',
				   display:'block'}
						   
var PhotoSliderTwoImgStyle ={height:'auto',
				   width:'100%',
				   display:'block'}
 

var ULM_PhotoSliderTwo = React.createClass({

	getInitialState: function() {
				return {};
	},
	
	
	getDefaultProps: function() {
    return {
      ratioWidth: 25,
      ratioHeight: 10,
      headerOrFooterSpacerHeight: 48
    };
	},


setStyleProperties: function()
{
    
      this.PhotoSliderTwoDivStyle={display: 'block'}
    

      this.imageStyle={
        				   display:'block'}
},

  renderSmallPortrait: function(){
    return(<div style={this.PhotoSliderTwoDivStyle}>
  			         <ImageGallery style={this.imageStyle} topMargin={-48} items={imagesPortrait} autoPlay={true} showThumbnails={false} showNav={false} slideInterval={4000} ></ImageGallery>
                 </div>);
  },

  renderLargePortrait: function(){
    return(<div style={this.PhotoSliderTwoDivStyle}>
  			         <ImageGallery style={this.imageStyle} topMargin={-56} items={imagesPortrait} autoPlay={true} showThumbnails={false} showNav={false} slideInterval={4000} ></ImageGallery>
                 </div>);
  },

  renderSmallLandscape: function(){
    return(<div style={this.PhotoSliderTwoDivStyle}>
  			         <ImageGallery style={this.imageStyle} topMargin={-48} items={images} autoPlay={true} showThumbnails={false} showNav={false} slideInterval={4000} ></ImageGallery>
                 </div>);
  },
  
  renderLargeLandscape: function(){
    return(<div style={this.PhotoSliderTwoDivStyle}>
  			         <ImageGallery style={this.imageStyle} topMargin={-56} items={images} autoPlay={true} showThumbnails={false} showNav={false} slideInterval={4000} ></ImageGallery>
                 </div>);
  },

  render: function () {
 
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

module.exports=ULM_PhotoSliderTwo;































