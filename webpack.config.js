var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
	test: [path.resolve(__dirname, 'dev1/main.js'), path.resolve(__dirname, 'dev1/index.html')]
  },
  output: {
	path: path.resolve(__dirname, "build"),
	filename: '[name].js'
  },
  module: {
    loaders: [
      { test: [/\.jsx?$/, /\.js?$/], exclude: /(node_modules)/, loader: 'babel' },
	  {test: /\.html$/, loader: 'file?name=[name].[ext]'},
	  {test: /\.scss$/, loader: 'style!css!sass'},
      // **IMPORTANT** This is needed so that each bootstrap js file required by
      // bootstrap-webpack has access to the jQuery object
      //{ test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
	  { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
	  
    ],
  },
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ],
  resolve: {
    extensions: ['', '.js', '.jsx'] 
  }  
};
