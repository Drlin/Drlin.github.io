var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.join(__dirname, './', 'dist/js'),
		filename: 'bundle.js',
		publicPath: './dist/js'
	},
	devtool: 'inline-source-map',
	devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    port: 8989,
    publicPath: './dist/js',
    hot: true
  },
	module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname +'./src',
       	query: {
          presets: ['es2017', 'env', 'stage-0', 'es2015']
				}
      },{
      	test: /\.(css|scss)$/,
      	use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ]
      }
    ]
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: '../../index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true
			}
		})
	]
}