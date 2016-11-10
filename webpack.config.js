var webpack = require('webpack');
var path = require('path');

var config = {
	devtool: 'eval-source-map',
    entry:[
        './src/index.js',
  	],
    output:{
    	path: path.join(__dirname, 'dist'),
    	filename: 'bundle.js',
      publicPath: "/"
    },
     module: {
	    loaders: [
      {
	      exclude: /node_modules/,
	      loader: 'babel',
	    }
      ]
  	},
	plugins: [
	],
  	resolve: {
    	extensions: ['', '.js', '.jsx']
   }

};

module.exports = config;
