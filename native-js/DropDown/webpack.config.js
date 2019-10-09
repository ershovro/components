const 
   webpack = require('webpack'),
   NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
   mode: NODE_ENV,
   context: __dirname + '/frontend',
   entry: './app.js',
   output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'bundle.js',
      library: '[name]'
   },
   devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : 'none',
   watch: NODE_ENV === 'development',
   watchOptions: {
      ignored: /node_modules/
   },
   module: {
      rules: [{
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
      }]
   }
};