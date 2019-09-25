module.exports = (api, options, rootOptions) => {
  const utils = require('./utils')(api);
  api.extendPackage({
    dependencies: {
      'vant': '^2.2.3'
    }
  });
  api.render('../ui/vant');
  api.injectImports('src/plugins/index.js', `import './vant.js'`);
  api.injectImports("src/plugins/index.js", `import loading from './loading'`);
  api.onCreateComplete(() => {
  });
};
