// 如果在preset.js中，useConfigFiles===true且存在并包含 vue 字段，
// 会在项目根目录生成 vue.config.js 文件，用作整个项目的配置文件。
// 但是 如果在template中存在 vue.config.js 配置文件，render后的项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载.


module.exports = {
  publicPath: process.env.VUE_APP_BUILD_MODE === 'PROD' ? 'http://cdn_static_root/' : '.',
  filenameHashing: true,
  productionSourceMap: false,
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'less',
      'patterns': [
        './src/style/mixin.less',
        './src/style/theme.less'
      ]
    }
  }
};
