
## 项目结构

```
│
├─build                             /* webpack的配置目录 */
│     ├─config.js                   /* 公共常量，用于配置文件 */
│     ├─utils.js                    /* 工具函数，用于配置文件 */
│     ├─webpack.base.conf.js        /* 公共配置文件 */
│     ├─webpack.dev.conf.js         /* 开发环境配置文件 */
│     └─webpack.prod.conf.js        /* 生产环境配置文件 */
│
├──mock                             /* mock数据 */
│
├──src                              /* 项目源码 */
│    │
│    ├─api                          /* 所有后端接口 */
│    │  ├──index.js
│    │  └──product.js
│    │
│    ├─assets                       /* 公共的静态文件 */
│    │  ├─fonts
│    │  ├─img
│    │  └─style
│    │
│    ├─utils                        /* 业务无关的工具函数 */
│    │
│    ├─common                       /* 业务相关的公共函数 */
│    │      config.js
│    │      http.js
│    │
│    ├─components                   /* 公共组件, 如Dialog、Loading等 */
│    │  └─navbar
│    │
│    ├─pages                        /*  页面
│    │  │
│    │  ├─index/                        每个页面一个文件夹，当前页面的样式、图片、子组件都存放在自已的文件夹下。
│    │  │                               为了项目结构清晰，一级目录以模块划分，二级目录则为页面目录。
│    │  ├─my/                       */
│    │  │  └─order/
│    │  │
│    │  ├─product/
│    │  │   └─list/
│    │  │
│    │  └─main.js                   /* 入口函数 */
│    │
│    ├─router                       /* 路由配置 */
│    │  └─ index.js
│    │
│    └─store                        /* 状态管理 */
│       ├─ user.js
│       ├─ product.js
│       └─ index.js
│
├─── .babelrc                       /* babel配置 */
├─── .editorconfig                  /* 开发工具配置 */
├─── index.html                     /* 公共模板文件 */
├─── package.json                   /* 包描述文件 */
└─── postcss.config.js              /* postcss相关插件配置 */
```



## 技术栈
- ES6+
- React16
- React-Router
- MobX
- Axios
- Webpack4
- Babel7




## 安装插件

```js
npm install
or
yarn install
```



## 开发&打包

```js
//启动开发环境预览
npm start

//构建生产文件
npm run build
```


## mock数据

[https://www.npmjs.com/package/mock123](https://www.npmjs.com/package/mock123 "mock服务")
