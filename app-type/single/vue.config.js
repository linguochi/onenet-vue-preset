// 如果在preset.js中，useConfigFiles===true且存在并包含 vue 字段，
// 会在项目根目录生成 vue.config.js 文件，用作整个项目的配置文件。
// 但是 如果在template中存在 vue.config.js 配置文件，render后的项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载.
const path = require('path');
const resolve = dir => {
  return path.join(__dirname, dir);
};

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const publicPath = process.env.VUE_APP_BUILD_MODE === 'production'
  ? '/andguard'
  : '/';

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  // 部署应用包时的基本 URL
  publicPath: publicPath,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要保存时就使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  configureWebpack: config => {
    config.output.globalObject = 'this';
  },
  chainWebpack: config => {

  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 利用style-resources-loader插件，给Vue单文件自动全局导入配置路径中的LESS变量和mixin函数。 这样在使用时不用每个文件都单独引入，就可以直接使用定义的Less变量。
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'less',
      'patterns': [
        './src/style/mixin.less',
        './src/style/theme.less'
      ]
    }
  },
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    proxy: {
      '/vmonitor': {
        target: 'https://www.andguard.com:8443',
        // target:'http://172.20.192.234:8080',
        changeOrigin: true,  //是否跨域
      }
    }
  }
};
