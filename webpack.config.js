var path = require('path')

var config = {
	entry: [path.resolve(__dirname, 'src/app/index.js')],
	output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'bundle.js'
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
	}
}

module.exports = config
