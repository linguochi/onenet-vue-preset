/**
 * generator 入口文件
 * @param api  一个 GeneratorAPI 实例 参考：https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli/lib/GeneratorAPI.js
 * @param options  prompts.js问询后得到的结果
 * @param rootOptions  整个 preset
 */
module.exports = (api, options, rootOptions) => {
  const utils = require('./utils')(api);
  api.render('../template'); // 使用 EJS 渲染 ../template 中的文件
  api.extendPackage({
    dependencies: {
      axios: '^0.18.0',
      nprogress: '^0.2.0',
      'normalize.css': '^8.0.1'
    },
    vue: {
      css: {
        sourceMap: true
      },
      pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: ['./src/style/mixin.less', './src/style/theme.less']
        }
      }
    }
  });
  if (options['ui-framework'] === 'element-ui') {
    require('./element.js')(api, options);
  } else if (options['ui-framework'] === 'iview') {
    require('./iview.js')(api, options);
  }
  api.onCreateComplete(() => {
    utils.deleteFile('./src/store.js'); // 删除原有的store文件
    utils.deleteDir('./src/views');
  });
};
