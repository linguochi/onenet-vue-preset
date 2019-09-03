/**
 * generator 入口文件
 * @param api  一个 GeneratorAPI 实例 参考：https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli/lib/GeneratorAPI.js
 * @param options  prompts.js问询后得到的结果
 * @param rootOptions  整个 preset
 */
module.exports = (api, options, rootOptions) => {
    const utils = require('./utils')(api);
  
    // 命令
    api.extendPackage({
      scripts: {
        'lint:fix': 'vue-cli-service lint --fix',
        'build:dev': 'vue-cli-service build --mode dev',
        'build:test': 'vue-cli-service build --mode test',
      }
    });
  
    api.extendPackage({
      eslintConfig: {
        rules: {
          'indent': ['error', 2],
          // 关闭 prettier 里面的eslint选项
          'prettier/prettier': 'off',
          // 以下的选项来自 https://github.com/AlloyTeam/eslint-config-alloy/blob/master/vue.js
          /**
           * 支持在模版中使用 eslint-disable-next-line 等注释
           * @category Enabling Correct ESLint Parsing
           */
          'vue/comment-directive': 'error',
          /**
           * 定义了的 jsx element 必须使用
           * @category Enabling Correct ESLint Parsing
           */
          'vue/jsx-uses-vars': 'error',
          /**
           * 计算属性禁止包含异步方法
           * @category Error Prevention
           */
          'vue/no-async-in-computed-properties': 'error',
          /**
           * 禁止重复的二级键名
           * @category Error Prevention
           */
          'vue/no-dupe-keys': 'off',
          /**
           * 禁止出现重复的属性
           * @category Error Prevention
           */
          'vue/no-duplicate-attributes': 'error',
          /**
           * 禁止出现语法错误
           * @category Error Prevention
           */
          'vue/no-parsing-error': 'error',
          /**
           * 禁止覆盖保留字
           * @category Error Prevention
           */
          'vue/no-reserved-keys': 'error',
          /**
           * 组件的 data 属性的值必须是一个函数
           * @category Error Prevention
           */
          'vue/no-shared-component-data': 'off',
          /**
           * 禁止在计算属性中对属性修改
           * @category Error Prevention
           */
          'vue/no-side-effects-in-computed-properties': 'off',
          /**
           * 禁止 <template> 使用 key 属性
           * @category Error Prevention
           */
          'vue/no-template-key': 'off',
          /**
           * 禁止在 <textarea> 中出现 {{message}}
           * @category Error Prevention
           */
          'vue/no-textarea-mustache': 'error',
          /**
           * 禁止定义在 components 中的组件未使用
           * @category Error Prevention
           */
          'vue/no-unused-components': 'error',
          /**
           * 禁止模版中定义的变量未使用
           * @category Error Prevention
           */
          'vue/no-unused-vars': 'error',
          /**
           * 禁止在同一个元素上使用 v-if 和 v-for 指令
           * @category Error Prevention
           */
          'vue/no-use-v-if-with-v-for': 'error',
          /**
           * <component> 必须有 v-bind:is
           * @category Error Prevention
           */
          'vue/require-component-is': 'error',
          /**
           * props 的取值必须是构造函数
           * @category Error Prevention
           * @fixable
           */
          'vue/require-prop-type-constructor': 'error',
          /**
           * render 函数必须有返回值
           * @category Error Prevention
           */
          'vue/require-render-return': 'error',
          /**
           * v-for 指令的元素必须有 v-bind:key
           * @category Error Prevention
           */
          'vue/require-v-for-key': 'error',
          /**
           * prop 的默认值必须匹配它的类型
           * @category Error Prevention
           */
          'vue/require-valid-default-prop': 'off',
          /**
           * 计算属性必须有返回值
           * @category Error Prevention
           */
          'vue/return-in-computed-property': 'error',
          /**
           * 当一个节点上出现两个 v-on:click 时，其中一个必须为 exact
           * @category Error Prevention
           */
          'vue/use-v-on-exact': 'error',
          /**
           * template 的根节点必须合法
           * @category Error Prevention
           */
          'vue/valid-template-root': 'error',
          /**
           * v-bind 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-bind': 'error',
          /**
           * v-cloak 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-cloak': 'error',
          /**
           * v-else 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-else': 'error',
          /**
           * v-else-if 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-else-if': 'error',
          /**
           * v-for 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-for': 'error',
          /**
           * v-html 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-html': 'error',
          /**
           * v-if 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-if': 'error',
          /**
           * v-model 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-model': 'error',
          /**
           * v-on 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-on': 'error',
          /**
           * v-once 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-once': 'error',
          /**
           * v-pre 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-pre': 'error',
          /**
           * v-show 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-show': 'error',
          /**
           * v-text 指令必须合法
           * @category Error Prevention
           */
          'vue/valid-v-text': 'error',
          /**
           * 限制自定义组件的属性风格
           * @category Improving Readability
           * @fixable
           */
          'vue/attribute-hyphenation': 'off',
          /**
           * 模版中开始标签的反尖括号必须换行
           * @category Improving Readability
           * @fixable
           */
          'vue/html-closing-bracket-newline': 'error',
          /**
           * 模版中开始标签的反尖括号前禁止有空格，自闭和标签前必须有空格
           * @category Improving Readability
           * @fixable
           */
          'vue/html-closing-bracket-spacing': 'error',
          /**
           * html 的结束标签必须符合规定
           * @category Improving Readability
           * @reason 有的标签不必严格符合规定，如 <br> 或 <br/> 都应该是合法的
           * @fixable
           */
          'vue/html-end-tags': 'off',
          /**
           * 模版中使用 4 个空格缩进
           * @category Improving Readability
           * @fixable
           */
          'vue/html-indent': ['error', 2],
          /**
           * html 属性值必须用双引号括起来
           * @category Improving Readability
           */
          'vue/html-quotes': 'error',
          /**
           * 没有内容时，组件必须自闭和
           * @category Improving Readability
           * @fixable
           */
          'vue/html-self-closing': 'off',
          /**
           * 限制每行允许的最多属性数量
           * @category Improving Readability
           */
          'vue/max-attributes-per-line': 'off',
          /**
           * 多行内容或多行标签时，内容前必须换行
           * @category Improving Readability
           * @fixable
           */
          'vue/multiline-html-element-content-newline': 'error',
          /**
           * 模版内 mustache 大括号内前后禁止有空格
           * @category Improving Readability
           * @fixable
           */
          'vue/mustache-interpolation-spacing': ['error', 'never'],
          /**
           * 限制组件的 name 属性的值的风格
           * @category Improving Readability
           * @fixable
           */
          'vue/name-property-casing': 'off',
          /**
           * 禁止出现连续空格
           * @category Improving Readability
           * @fixable
           */
          'vue/no-multi-spaces': 'error',
          /**
           * 属性的等号前后禁止有空格
           * @category Improving Readability
           * @fixable
           */
          'vue/no-spaces-around-equal-signs-in-attribute': 'error',
          /**
           * 模版中的变量名禁止与前一个作用域重名
           * @category Improving Readability
           */
          'vue/no-template-shadow': 'off',
          /**
           * props 必须用驼峰式
           * @category Improving Readability
           * @fixable
           */
          'vue/prop-name-casing': 'off',
          /**
           * props 如果不是 required 的字段，必须有默认值
           * @category Improving Readability
           */
          'vue/require-default-prop': 'error',
          /**
           * prop 必须有类型限制
           * @category Improving Readability
           */
          'vue/require-prop-types': 'off',
          /**
           * 单行标签内容必须换行
           * @category Improving Readability
           * @fixable
           */
          'vue/singleline-html-element-content-newline': 'off',
          /**
           * 限制 v-bind 的风格
           * @category Improving Readability
           * @fixable
           */
          'vue/v-bind-style': 'off',
          /**
           * 限制 v-on 的风格
           * @category Improving Readability
           * @fixable
           */
          'vue/v-on-style': 'off',
          /**
           * 标签属性必须按规则排序
           * @category Minimizing Arbitrary Choices and Cognitive Overhead
           * @fixable
           */
          'vue/attributes-order': 'error',
          /**
           * 禁用 v-html
           * @category Minimizing Arbitrary Choices and Cognitive Overhead
           */
          'vue/no-v-html': 'off',
          /**
           * 组件的属性必须为一定的顺序
           * @category Minimizing Arbitrary Choices and Cognitive Overhead
           */
          'vue/order-in-components': 'error',
          /**
           * 禁止在模版中用 this
           * @category Minimizing Arbitrary Choices and Cognitive Overhead
           */
          'vue/this-in-template': 'error',
          /**
           * 数组的括号内的前后禁止有空格
           * @category Uncategorized
           * @fixable
           */
          'vue/array-bracket-spacing': ['error', 'never'],
          /**
           * 箭头函数的箭头前后必须有空格
           * @category Uncategorized
           * @fixable
           */
          'vue/arrow-spacing': [
            'error',
            {
              before: true,
              after: true
            }
          ],
          /**
           * 代码块如果在一行内，那么大括号内的首尾必须有空格
           * @category Uncategorized
           * @fixable
           */
          'vue/block-spacing': ['error', 'always'],
          /**
           * if 与 else 的大括号风格必须一致
           * @category Uncategorized
           * @reason else 代码块可能前面需要有一行注释
           * @fixable
           */
          'vue/brace-style': 'off',
          /**
           * 变量名必须是 camelcase 风格的
           * @category Uncategorized
           * @reason 很多 api 或文件名都不是 camelcase
           */
          'vue/camelcase': 'off',
          /**
           * 对象的最后一个属性末尾必须有逗号
           * @category Uncategorized
           * @fixable
           */
          'vue/comma-dangle': 'off',
          /**
           * 约束自定义标签的命名规则
           * @category Uncategorized
           * @fixable
           */
          'vue/component-name-in-template-casing': 'off',
          /**
           * 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
           * @category Uncategorized
           * @fixable
           */
          'vue/eqeqeq': [
            'error',
            'always',
            {
              null: 'ignore'
            }
          ],
          /**
           * 对象字面量中冒号前面禁止有空格，后面必须有空格
           * @category Uncategorized
           * @fixable
           */
          'vue/key-spacing': [
            'error',
            {
              beforeColon: false,
              afterColon: true,
              mode: 'strict'
            }
          ],
          /**
           * 组件名称必须和文件名一致
           * @category Uncategorized
           */
          'vue/match-component-file-name': 'off',
          /**
           * 禁止给布尔值 props 添加默认值
           * @category Uncategorized
           * @fixable
           */
          'vue/no-boolean-default': 'off',
          /**
           * 禁止使用特定的语法
           * @category Uncategorized
           * @reason 它用于限制某个具体的语法不能使用
           */
          'vue/no-restricted-syntax': 'off',
          /**
           * 对象字面量只有一行时，大括号内的首尾必须有空格
           * @category Uncategorized
           * @fixable
           */
          'vue/object-curly-spacing': [
            'error',
            'always',
            {
              arraysInObjects: true,
              objectsInObjects: false
            }
          ],
          /**
           * 禁止手动 export default
           * @category Uncategorized
           */
          'vue/require-direct-export': 'error',
          /**
           * 一个缩进必须用四个空格替代
           * @category Uncategorized
           */
          'vue/script-indent': [
            'error',
            2,
            {
              switchCase: 1
            }
          ],
          /**
           * 操作符左右必须有空格
           * @category Uncategorized
           * @fixable
           */
          'vue/space-infix-ops': 'error',
          /**
           * new, typeof 等后面必须有空格，++, -- 等禁止有空格
           * @category Uncategorized
           * @fixable
           */
          'vue/space-unary-ops': [
            'error',
            {
              words: true,
              nonwords: false
            }
          ],
          /**
           * 禁止在 v-on 的值中调用函数
           * @category Uncategorized
           * @fixable
           */
          'vue/v-on-function-call': 'error'
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
    }
    api.onCreateComplete(() => {
      utils.successTip();
    });
  };
  