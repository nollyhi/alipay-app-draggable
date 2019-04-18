var path = require('path')
var webpack = require('webpack')

module.exports = {
  // entry: './src/main.js',    //本地调试配置
  
  entry:'./src/components/alipay-applet-draggable/index.js',        //打包配置
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    // filename: 'build.js',    //本地调试配置

    filename: 'alipayAppletDraggable.js',    //打包配置
    library:'alipayAppletDraggable',       //打包配置
    libraryTarget:'umd',     //打包配置
    umdNamedDefine:true      //打包配置
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]?[hash]'
      //   }
      // },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'file-loader',
        // options: {
        //   limit: 10000,
        //   name: utils.assetsPath('img/[name].[hash:7].[ext]')
        // }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        // options: {
        //   limit: 10000,
        //   name: utils.assetsPath('media/[name].[hash:7].[ext]')
        // }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        // options: {
        //   limit: 10000,
        //   name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        // }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@':'src',
      // 'bootstrap':'./node_modules/bootstrap/dist'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins:[
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
         jQuery: "jquery",
         $: "jquery",
         jquery: "jquery",
         "window.jQuery":"jquery"
    })
 ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
