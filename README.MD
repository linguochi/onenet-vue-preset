# OneNET vue-preset
OneNET vue项目开发预设框架(模板)

框架的目的在于简化项目搭建过程，并提供团队内统一的目录结构与代码检测、格式化等方式。
因个人能力有限，框架目前不一定是最佳实践，有更好的方法，欢迎随时找我。

## install
注意windows用户要用系统自带的cmd命令行，否则选项无法使用；

如果你使用的是ssh方式的git 使用下面的命令： 
```
# 首先安装vue-cli 3.0
> npm install -g @vue/cli

> vue create --preset gitlab.onenet.com:linguochi/onenet-vue-preset --clone project-name
```


如果你使用的是http方式的git， 使用下面的命令

```
# 首先安装vue-cli 3.0
> npm install -g @vue/cli
> git clone http://gitlab.onenet.com/linguochi/onenet-vue-preset.git
> vue create --preset ./onenet-vue-preset project-name
```


## local dev

```
# 进入到 本项目所在目录
> vue create --preset ./onenet-vue-preset project-name
```

## 项目特性

- CSS 预编译语言：[less](http://lesscss.org/)

- 代码检测与格式化：[eslint](https://eslint.org/) 、 [prettier](https://prettier.io/)

- 移动 web 的适配方案：引入了 `postcss-pxtorem` 及 `lib-flexible`，可以自由地用 px 去开发

- 常用的 js 工具类

- `style-resources-loader` 可以为我们的样式文件（css、less、scss、sass、stylus）注入样式资源，统一管理资源文件，如常用的 **变量(variable)，混合函数(mixins)等**。

- Ajax: [axios](https://github.com/axios/axios)，做了一定的封装。

- 路由自动生成

- IconFont：使用阿里iconfont做图标字体；

## 下一步

- 国际化i18n
- 多页
- UI组件库更改为按需引入
- 各种统计脚本与监控脚本
- 常用的 Less 的 mixins 集合：[magicless](https://github.com/cklwblove/magicless)

## 目录介绍

```shell
src                                     # 源代码
├── App.vue                             # 单页挂载点入口
├── api                                 # 数据 API 层                       
│   ├── index.js                        # 数据 API 合并文件
│   └── user.js                         # 各个数据模块 API 定义
├── assets                              # 项目级公共资产文件 主要用来存第三方的资源 图片、样式文件、js等
│   ├── images
│   └── readme.md
├── components                          # 页面级公共组件
│   └── HelloWorld.vue
├── config.js                           # 项目配置文件
├── layouts                             # 布局
│   └── default.vue                     
├── libs                                # 封装库
│   └── axios.js
├── main.js                             # 项目启动入口
├── pages                               # 页面文件，此文件下的vue文件会自动生成路由
│   └── index.vue
├── plugins                             # 各种插件
│   ├── axios.js
│   ├── errorHandler.js
│   ├── iconfont
│   │   ├── IconFont.vue
│   │   ├── iconfont.js
│   │   └── index.js
│   ├── index.js
│   ├── loading.js
│   ├── loading.vue
│   └── vant.js
├── router.js                          # 路由定义
├── store                              # 状态管理
│   ├── index.js
│   ├── modules
│   │   └── demo.js
│   └── mutation-types.js
├── style
│   ├── global.less
│   ├── mixin.less
│   ├── reset.less
│   └── theme.less
└── utils                             # 工具函数
    ├── directives.js
    ├── filters.js
    └── index.js
```
