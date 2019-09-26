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
