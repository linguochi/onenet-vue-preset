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

- 常用的 Less 的 mixins 集合：[magicless](https://github.com/cklwblove/magicless)

- `style-resources-loader` 可以为我们的样式文件（css、less、scss、sass、stylus）注入样式资源，统一管理资源文件，如常用的 **变量(variable)，混合函数(mixins)等**。

- Ajax: [axios](https://github.com/axios/axios)，做了一定的封装。

- IconFont：使用阿里iconfont做图标字体；

## 目录介绍
