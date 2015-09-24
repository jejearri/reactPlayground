module.exports = {
  entry: ['./main.js', './test.jsx'],
  output: {
	path: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: [/\.jsx$/, /\.js$/], loader: 'jsx-loader?harmony' }
    ]
  }  
};
