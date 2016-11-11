var webpack = require('webpack');
var path = require('path');
const autoprefixer = require('autoprefixer');
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
					test: /\.(scss|css)$/,
					loader: ExtractTextPlugin.extract('style','css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
				}
      ]
  },
	sassLoader: { includePaths: [path.resolve(__dirname)]},
	postcss: [ autoprefixer ],
	plugins: [
		new ExtractTextPlugin("bundle.css", { allChunks: true })
	],
  resolve: {
    	extensions: ['', '.scss', '.js', '.json']
   }

};

module.exports = config;
