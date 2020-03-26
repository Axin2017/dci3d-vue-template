# 整体概述

## 框架说明
此框架是建立在vuejs基础上，使用 `@vue/cli v3.6.3` 脚手架建立的vue项目
项目中集成了ajax请求封装，vue全家桶（vue,vuex,vue-router），一些基本的工具函数，rem自适应，eslint自定义规则，vuepress文档编辑，公共组件等一些常用的模块

## 代码结构
开发过程中，请按照如下约定将项目各个模块分别放置于固定的结构
```
docs                --开发文档
public              --不经webpack打包的静态资源
src                 --源代码
  api                 --网络请求
  assets              --静态资源
  components          --跨项目公共组件
  plugins             --vue插件
  router              --路由
  styles              --公共样式文件
  utils               --工具方法
  views               --视图
    components          --视图公共组件
    home                --具体视图
      components          --具体视图的公共组件
  vuex                --数据/状态管理
  App.vue             --系统根组件
  main.js             --系统入口
.eslintrc.js        --eslint规则配置
```
::: tip 为什么要保持项目结构清晰
保持项目代码结构清晰，有利于我们对代码整体的阅读，把握，维护。有助于项目中模块的独立，移植，职能清晰。
:::

## 项目中使用到的工具
| 模块        | 使用的工具           | 使用方式  |
| ------------- |:-------------:| -----:|
| 常用工具函数      | lodash |  |
| 分辨率适配     | postcss-plugin-px2rem      |    |
| 网络请求 | axios      |     |
| 文档编写工具 | VuePress      |     |
| css预编译 | scss      |     |
| 代码检测工具 | eslint      |     |
| ui框架 | element-ui      |     |
| 路由进度调 | nprogress      |     |
| 图片大图浏览 | v-viewer      |     |
| vue数字变化器 | vue-count-to      |     |
| 导出pdf工具 |  jspdf     |     |
| arcgis地图 |  esri-loader     |     |
| html转换成canvas |  html2canvas     |     |