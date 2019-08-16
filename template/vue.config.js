const fs = require('fs');
const path = require('path');

// 如果在preset.js中，useConfigFiles===true且存在并包含 vue 字段，
// 会在项目根目录生成 vue.config.js 文件，用作整个项目的配置文件。
// 但是 如果在template中存在 vue.config.js 配置文件，render后的项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载.

/**
 * 生成多页面配置
 * @param {string} pagesDir 多页面文件夹相对路径
 */
const generatePagesConfig = ({ pagesDir, customConfig = {} }) => {
  // 多页面文件夹目录
  const PAGES_DIR = path.resolve(__dirname, pagesDir);
  let pagesConfig = {};

  // 读取多页面目录生成 vue.config.js 中的 pages 配置
  if (!fs.existsSync(PAGES_DIR)) {
    throw Error('vue.config.js pages 配置路径不存在');
  }

  fs.readdirSync(PAGES_DIR)
  .filter(pageDir => !pageDir.startsWith('.'))
  .reduce((pagesConfig, fileName) => {
    pagesConfig[fileName] = {
      // page 的入口
      entry: path.resolve(PAGES_DIR, fileName, 'index.js'),
      template: path.resolve(PAGES_DIR, fileName, 'index.html'),
      // 在 dist/index.html 的输出
      filename: `${fileName}.html`
    };
    return pagesConfig;
  }, pagesConfig);

  return {
    ...pagesConfig,
    ...customConfig
  };
};


module.exports = {
  publicPath: process.env.VUE_APP_BUILD_MODE === 'PROD' ? 'http://cdn_static_root/' : '.',
  filenameHashing: true,
  productionSourceMap: false,
  pages: generatePagesConfig({ pagesDir: './src/pages/' }),
};
