var webpack = require('webpack');

module.exports = {
	entry: {
		'react-reading-time': [
			'webpack-dev-server/client?http://localhost:8881/',
			'webpack/hot/only-dev-server',
			'./example/react-reading-time.jsx'
		]
	},
	output: {
		path: __dirname,
		filename: "[name].js",
		publicPath: 'http://localhost:8881/',
		chunkFilename: '[id].chunk.js',
		sourceMapFilename: '[name].map'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.es6'],
		modulesDirectories: ['node_modules']
	},
	module: {
		loaders: [			
				 {
					  loader: "babel-loader",

					  // Skip any files outside of your project's `src` directory
					  include: [
						path.resolve(__dirname, "src"),
					  ],

					  // Only run `.js` and `.jsx` files through Babel
					  test: /\.jsx?$/,

					  // Options to configure babel with
					  query: {
						plugins: ['transform-runtime'],
						presets: ['es2015', 'stage-0', 'react'],
					  }
					},
				{ test: /\.jsx$|\.es6$|\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
				{ test: /\.scss$|\.css$/, loader: 'style-loader!style!css!sass' }			
		]			
	},	
	plugins: [
		new webpack.NoErrorsPlugin()
	],	
	clearBeforeBuild: true,
	devtool: "eval-source-map"
};
