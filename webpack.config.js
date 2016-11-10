var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
		    },
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract('css?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
				}
      ]
  },
	sassLoader: {
		includePaths: [path.resolve(__dirname)]
	},
	plugins: [
		new ExtractTextPlugin("bundle.css", { allChunks: true })
	],
  resolve: {
    	extensions: ['', '.js', '.jsx']
   }

};

module.exports = config;
