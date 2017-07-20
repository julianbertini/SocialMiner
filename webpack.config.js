var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/public/javascript/index.js',
	module: {
		rules: [
			{test: /\.(js)$/, use: 'babel-loader'},
			{test: /\.css$/, use: ['style-loader', 'css-loader']},
			{test: /\.pug$/, use: ['html-loader','pug-html-loader']}
		]
	},
	output: {
		path: path.resolve(__dirname, 'app', 'public','build'),
		filename: 'index_bundle.js'
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'app/index.pug'
	})]
}
