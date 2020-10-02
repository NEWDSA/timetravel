
/**
 *  vue.config全局配置
 * 打包设置
//  */
module.exports = {
  // 公共路径(必须有的)
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
  lintOnSave: false,
  // 我用的only，打包后小些
  // compiler: false,//有
  productionSourceMap: false,
  devServer: {
    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8068 // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
  }
}
