const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	module: {
	  rules: [
		{
		  test: /\.(js|jsx)$/,
		  exclude: /node_modules/,
		  use: ["babel-loader"]
		},
		{
			test: /\.html$/,			
			loader: "html-loader"
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}
	  ]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebPackPlugin({
	  		template: "./public/index.html",
	  		filename: "./index.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}