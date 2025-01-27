const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'src/[name].[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.js'], 
    alias: {  
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@models': path.resolve(__dirname, 'src/models/'),
      '@views': path.resolve(__dirname, 'src/views/'),
      '@controllers': path.resolve(__dirname, 'src/controllers/')
    }
  },
  devServer: {
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 9090,
    open: true,
    hot: true,
    client: {
      logging: 'info',
      overlay: true,
      progress: true,
      webSocketTransport: 'ws'
    },
    webSocketServer: 'ws',
    static: { 
      directory: path.join(__dirname, 'public'),
      publicPath: '/public'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body',
      hash: true,
      title: 'HabitBloom'  
    }),
    new ESLintPlugin({
      extensions: ['js'],  
      exclude: 'node_modules',
      files: './src/'
    })
  ],
  optimization: {  
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};