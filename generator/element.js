module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      "element-ui": "^2.4.5"
    },
  });
  api.render("../ui/element");
  api.injectImports("src/plugins/index.js", `import './element.js'`);
  api.onCreateComplete(() => {
  });
};
