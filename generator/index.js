/**
 * generator 入口文件
 * @param api  一个 GeneratorAPI 实例 参考：https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli/lib/GeneratorAPI.js
 * @param options  prompts.js问询后得到的结果
 * @param rootOptions  整个 preset
 */
module.exports = (api, options, rootOptions) => {
  const utils = require('./utils')(api);
  const path = require('path');
  // 命令
  api.extendPackage({
    scripts: {
      'dev': 'vue-cli-service serve',
      'lint:fix': 'vue-cli-service lint --fix',
      'build:dev': 'vue-cli-service build --mode dev',
      'build:test': 'vue-cli-service build --mode test',
    }
  });

  api.extendPackage({
    eslintConfig: {
      rules: {
        // vue 检测选项可以参考 https://github.com/AlloyTeam/eslint-config-alloy/blob/master/vue.js
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-use-v-if-with-v-for': 'warn',
        'no-unused-vars': 'off',
        'no-undef': 'off',
      }
    }
  });

  // commitizen - 协助开发者提交标准的 git message
  // api.extendPackage({
  //   devDependencies: {
  //     'commitizen': '^3.0.2',
  //     'cz-conventional-changelog': '^2.1.0'
  //   }
  // });
  //
  // api.extendPackage({
  //   config: {
  //     'commitizen': {
  //       'path': './node_modules/cz-conventional-changelog'
  //     }
  //   }
  // });
  //
  // // commitlint - 校验 git 提交信息格式
  // api.extendPackage({
  //   devDependencies: {
  //     '@commitlint/cli': '^7.2.1',
  //     '@commitlint/config-conventional': '^7.1.2'
  //   }
  // });
  //
  // api.extendPackage({
  //   gitHooks: {
  //     'commit-msg': 'commitlint -e'
  //   }
  // });
  //
  // api.extendPackage({
  //   commitlint: {
  //     'extends': ['@commitlint/config-conventional']
  //   }
  // });

  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
    .filter(path => path.startsWith('src/') || path.startsWith('public/'))
    .forEach(path => delete files[path]);
  });

  // application 应用类型为 mobile
  if (options.application === 'mobile') {
    api.extendPackage({
      dependencies: {
        'lib-flexible': '^0.3.2'
      },
      devDependencies: {
        'postcss-pxtorem': '^4.0.1'
      },
      postcss: {
        plugins: {
          'postcss-pxtorem': {
            rootValue: 37.5,
            unitPrecision: 5,
            propList: ['height', 'width', 'padding', 'margin', 'top', 'left', 'right', 'bottom'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 1
          }
        }
      }
    });
  }
  api.render('../template'); // 使用 EJS 渲染 ../template 中的文件
  api.extendPackage({
    dependencies: {
      axios: '^0.18.0',
      nprogress: '^0.2.0',
      'normalize.css': '^8.0.1'
    }
  });
  if (options['ui-framework'] === 'element-ui') {
    require('./element.js')(api, options);
  } else if (options['ui-framework'] === 'iview') {
    require('./iview.js')(api, options);
  } else if (options['ui-framework'] === 'antDesign') {
    require('./antdesign.js')(api, options);
  } else if (options['ui-framework'] === 'vant') {
    require('./vant.js')(api, options);
  }
  if (options['multiPage']) {
    api.render('../app-type/multi');
  } else {
    api.render('../app-type/single');
  }
  api.onCreateComplete(() => {
    utils.successTip();
  });
};
