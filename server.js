// node
const path  = require("path")

// webpack relate
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require("webpack-hot-middleware")
const webpackConfig = require('./webpack.config.js')
const webpack = require('webpack')
// express
const express = require('express')
const app = express()

// console color
const chalk = require('chalk')

//app.use('/build',express.static(__dirname + '/build/'))
// HMR
var compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  noInfo: true,
  filename: 'bundle.js',
  publicPath: '/build/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 
const build_console = (msg) => {
	var title = chalk.white.bgGreen(' Saved ')
	if(msg == 'webpack building...') 
		title = chalk.white.bgBlue(' Check ')

	console.log( title + ' ' + msg )
}

app.use(webpackHotMiddleware(compiler, {
  log: build_console,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));


// handler for the /user/:id path, which renders a special page
var renderIndex = (req, res, next) => {
	try{
		res.sendFile(path.join(__dirname+'/src/app/index.html'))
	}
	catch(err){
		console.log(err)
		res.render(err.message)
	}
	next()
}

const logMiddleware = (req, res, next) => {
	var title = chalk.white.bgYellow(' Visit ')
	console.log( title + ' ' + req.headers['user-agent'] + req.headers['if-modified-since'])
}
app.get('/', renderIndex, logMiddleware )

//-----------------------------------------
const server = app.listen(3000, () => {
		const host = server.address().address
		const port = server.address().port
		console.log('NODE_ENV = '+process.env.NODE_ENV)
		console.log('[HTTP Listening] http://%s:%s', host, port)
	}
)
