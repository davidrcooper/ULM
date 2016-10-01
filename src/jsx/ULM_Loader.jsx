var React=require('react');
var ImageLoader = require('react-imageloader');
var Loader = require('react-loader');


var ULM_Loader = React.createClass({

    getDefaultProps: function() {
    return {
      displayFirstImageASAP: false
    };
    },

	getInitialState: function() {

		imageCounter = 0;
		numberImages = this.props.imagesArray.length;
		
		PhotoSliderStyle ={width:'100%',
						   height:'auto',
						   display:'block'}

		
		
		return {
				 displayFirstImageLoaded: false,
				 loaded: false
        };
    },

	incrementImageCounter: function(){
	
		
		imageCounter++;
		if (this.props.displayFirstImageASAP === true)
			this.setState({displayFirstImageLoaded:true});
		if (imageCounter >= numberImages)
			this.setState({loaded:true});
	},
	
	render: function () {

		return (
				<div className="ulm_loader">
							
					{this.props.imagesArray[0] !== undefined && <ImageLoader src={this.props.imagesArray[0]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[1] !== undefined && <ImageLoader src={this.props.imagesArray[1]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[2] !== undefined && <ImageLoader src={this.props.imagesArray[2]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[3] !== undefined && <ImageLoader src={this.props.imagesArray[3]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[4] !== undefined && <ImageLoader src={this.props.imagesArray[4]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[5] !== undefined && <ImageLoader src={this.props.imagesArray[5]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[6] !== undefined && <ImageLoader src={this.props.imagesArray[6]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[7] !== undefined && <ImageLoader src={this.props.imagesArray[7]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[8] !== undefined && <ImageLoader src={this.props.imagesArray[8]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[9] !== undefined && <ImageLoader src={this.props.imagesArray[9]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[10] !== undefined && <ImageLoader src={this.props.imagesArray[10]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[11] !== undefined && <ImageLoader src={this.props.imagesArray[11]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[12] !== undefined && <ImageLoader src={this.props.imagesArray[12]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[13] !== undefined && <ImageLoader src={this.props.imagesArray[13]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[14] !== undefined && <ImageLoader src={this.props.imagesArray[14]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[15] !== undefined && <ImageLoader src={this.props.imagesArray[15]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[16] !== undefined && <ImageLoader src={this.props.imagesArray[16]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[17] !== undefined && <ImageLoader src={this.props.imagesArray[17]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[18] !== undefined && <ImageLoader src={this.props.imagesArray[18]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					{this.props.imagesArray[19] !== undefined && <ImageLoader src={this.props.imagesArray[19]} onLoad={this.incrementImageCounter} style={{'display':'none'}}> </ImageLoader>}
					
					{this.state.displayFirstImageLoaded === false && this.state.loaded === false && <div style={{'width':'100%','height':'20vw'}}>
							<Loader loaded={this.state.loaded} top="10vw" left="50%" scale={1.00} ></Loader>
					</div>
					}
					
					{this.state.displayFirstImageLoaded === true && this.state.loaded === false && <div style={{'width':'100%','height':'auto'}}>
							<img src={this.props.imagesArray[0]} style={PhotoSliderStyle} />
					</div>
					}
					
					{this.state.loaded === true && <div>
							{this.props.children}
					</div>
					}

				</div>
		);
	}
	
});

module.exports=ULM_Loader;