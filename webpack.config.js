const path = require('path')
const webpack = require('webpack')
const config = {
	entry: [
		// HMR
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
		path.resolve(__dirname, 'src/app/index.js')
	],
	output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'bundle.js',
			// HMR
			publicPath: '/build/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: { 
					presets: ['es2015','react'] 
				}
			}
			// {
			// 				test: /\.css$/,
			// 				loaders: ["style","css"],
			// 				include: path.resolve(__dirname, "src/css")
			// },
			// {
			// 				// ext : sass or scss
			// 				test: /\.s[c|a]ss$/,
			// 				loaders: ["style", "css", "sass"],
			// 				include: path.resolve(__dirname, "src/css")
			// }
		]
	},
	resolve: {
		// when import the modules which extension is one of below, we can skip the ext filename
		extensions: ['', '.js', '.json', '.jsx'] 
	},
	plugins: [
		// 3 plugins for HMR
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}

module.exports = config
