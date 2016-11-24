var webpack = require("webpack");
const createVendorChunk = require('webpack-create-vendor-chunk');

module.exports = {
     entry: {
       app:"./src/js/app.js",
       app2:"./src/js/app2.js"
      
     },
     output: {
         path: './bin',
         filename:"[name].bundle.js",
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     },
     resolve: {
       extensions: ['', '.js', '.es6']
     },
     plugins: [
       /*
       new webpack.optimize.CommonsChunkPlugin({
         name: "vendor",
         filename: "vendor.min.js",
         minChunks: Infinity
       })
        */
        createVendorChunk({
          name:"vendor.min.js"
        }),

        createVendorChunk({
          name:"common.min.js",
          chunks:["common"]
        }),

      ]
 };
