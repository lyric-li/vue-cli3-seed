# vue-cli3-seed

> Vue Cli3 种子项目

## Build Setup
```
# Project setup
yarn install

# Compiles and hot-reloads for development
yarn run serve

# Compiles and minifies for production
yarn run build

# Compiles and minifies for production beta
yarn run build:beta

# Compiles and minifies for production release
yarn run build:release

# Build docker image
yarn run docker

# Lints and fixes files
yarn run lint

# Run your unit tests
yarn run test:unit

# Run your end-to-end tests
yarn run test:e2e
```

## 目录规范

### API

统一管理模块的 url 请求地址， 如：`src/api/xxx.js`


### 图标

- 引入方式

  将 xxx.svg 图标放入 `src/icons/svg` 目录下

- 使用方式

  ```
  <svg-icon class="xxx"/>
  ```

### 状态管理

- 全局

  管理全局状态，存放在 `src/store` 下

- 模块

  管理模块状态，存放在 `src/store/modules` 下，其中 `index.js` 作为模块统一处理文件，请勿修改

### 其它

- 工具类

  存放在 `src/utils` 下


## 开发规范

代码格式、命名规范等，以 `ESLint Standard` 规范为基础标准

- 字符串统一用 `''`
- 判断相等统一用 `===`


## 技术栈

### 基础框架

- [vue](https://cn.vuejs.org/)
- [vue-router](https://router.vuejs.org/zh/)
- [vuex](https://vuex.vuejs.org/zh/)

### 第三方插件

- [element](http://element-cn.eleme.io/#/zh-CN)
- [axios](https://github.com/axios/axios)
- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
- [amfe-flexible](https://github.com/amfe/lib-flexible)
