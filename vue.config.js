
/**
 *  vue.config全局配置
 * 打包设置
//  */
module.exports = {
  transpileDependencies:["socket.io-client"],
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
    port: 8888, // 端口号，如果端口号被占用，会自动提升1
    host: 'localhost', // 主机名, 127.0.0.1 真机 0.0.0.0
    https: false, // 协议
    open: true, // 启动服务时自动打开浏览器
    proxy: { // 开发环境代理配置
      // '/dev-api': {
      [process.env.VUE_APP_BASE_API]: {
        // 目标服务器地址，代理访问 http://localhost:8001
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true, // 开启代理服务器
        pathRewrite: {
          // 将请求地址前缀 /dev-api 替换为空的
          // '^/dev-api': ''
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}
