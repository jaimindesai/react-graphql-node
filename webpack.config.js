const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: [
          path.resolve(__dirname, "src")
        ],
        options: {
          emitWarning: true,
        },
    },
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
	  {
				test: /\.(graphql|gql)$/,
				exclude: /node_modules/,
				loader: ['graphql-tag/loader'],
	  },{
      test: /\.svg$/,
      use:  [{
          loader:  'url-loader',
          options: {
              limit: 65000,
              mimetype: 'image/svg+xml',
              name: 'fonts/[name].[ext]'
          }
      }]
  }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use:  [{loader: 'file-loader',options:{name:'fonts/[name].[ext]'}}]
  }, {
      test: /\.(gif|jpe?g|png|ico)$/,
      use:  [{loader: 'url-loader',options:{limit:10000,name:'public/images/[name].[ext]'}}]
  }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
};
