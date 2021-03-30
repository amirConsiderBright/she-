const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  publicPath: './',
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  configureWebpack: config => {

    let plugins = [];

    if (process.env.NODE_ENV === 'production') {
      plugins.push(
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
          threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
          deleteOriginalAssets: false // 是否删除原文件
        })
      )
    }

    return {
      plugins: plugins
    };

  },
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = "个人简历";
        return args;
      })
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        }
      }
    }
  }
}
