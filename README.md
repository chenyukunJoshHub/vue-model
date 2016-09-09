# vue-model

> A Vue.js project

## Build Setup

### pm2   pm2.config.json配置文件
### 进程加载器 在关机 或执行 npm run kill  之前, 打包程序一只在运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

#进程管理 pm2  "npm run kill && pm2 start pm2.config.json"
npm run start

#进程管理 pm2  "pm2 stop pm2.config.json && pm2 delete pm2.config.json",
npm run kill

#查看logs
pm2 logs
```

##目录结构
build --  webpack打包程序

config --  index.js   proxyTable 修改反代理

mockserver -- nodejs 模拟后端post接口  本地开发前调试

src -- vue文件 vuex + vux +  vue-router + 

static -- 不想被编译的文件放这里,群里朋友说的

pm2.config.json -- pm2进程管理

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
