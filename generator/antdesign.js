module.exports = (api, options, rootOptions) => {
  const utils = require('./utils')(api);
  api.extendPackage({
    dependencies: {
      'ant-design-vue': '^1.3.17-beta.1'
    }
  });
  api.render('../ui/antdesign');
  api.injectImports('src/plugins/index.js', `import './antdesign.js'`);
  api.onCreateComplete(() => {
  });
};
