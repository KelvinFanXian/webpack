# webpack-study
## 2-1 webpack究竟是什么
```
npm init
npm i webpack-cli -S-D
npm i webpack -S
npx webpack index.js
```

## 2-2	什么是模块打包工具
- ES Module 模块引入方式
`export default Header` `import Header from './header.js`
- CommonJS 模块引入规范
`module.exports = Header` `var Header = require(./header.js)`
- CMD
- AMD

## 2-3 Webpack的正确安装方式
https://nodejs.org/en/
```
npm install webpack webpack-cli -g #全局安装
webpack -v
npm uninstall webpack webpack-cli -g

npm install webpack webpack-cli -D #本地安装
webpack -v #command not found
npm webpack -v #全局webpack的版本
npx webpack -v #当前项目的webpack版本

# 新建一个项目用指定版本的webpack
npm webpack info #webpack版本列表
npm install webpack@4.16.5 webpack-cli -D
npx wbpack -v #4.16.5
```

## 2-4 使用webpack的配置文件
```
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    }
}
```
npx webpack
---
npm init #生成package.json

### 配置启动脚本
"scripts": {
    "bundle": "webpack"    
}
### 运行
npm run bundle

### 总结
```
webpack index.js
npx webpack index.js
npm run bundle -> webpack
```
