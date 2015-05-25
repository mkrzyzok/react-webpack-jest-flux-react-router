 var webpack = require('webpack');
 var path = require('path');


 var bower_dir = path.join(__dirname, 'bower_components');
 var node_modules_dir = path.join(__dirname, 'node_modules');

 var config = {
   addVendor: function (name, path) {
     this.resolve.alias[name] = path;
     this.module.noParse.push(path);
   },
   context: __dirname,
   entry: {
     app: process.env.NODE_ENV === 'production' ? ['./app/app.js'] : ['webpack/hot/dev-server', './app/app.js']
   },
   output: {
     publicPath: '/',
     path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? './dist/' : './build'),
     filename: 'bundle.js'
   },
   resolve: {
     alias: {}
   },
   module: {
     noParse: [],
     loaders: [{
       test: /\.js$/,
       loaders: ['jsx-loader', 'babel'],
       exclude: [bower_dir, node_modules_dir]
     }, {
        test: /\.sass$/,
        // Passing indentedSyntax query param to node-sass
        loader: "style!css!sass?indentedSyntax"
      }]
   },
   plugins: [
     new webpack.optimize.CommonsChunkPlugin('app', null, false),
     new webpack.HotModuleReplacementPlugin()
   ]
 };

 config.addVendor('react', path.resolve(bower_dir, 'react/react.min.js'));

 module.exports = config;
