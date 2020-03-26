# 环境与配置
框架开发中主要使用到的环境以及配置

## 框架开发环境

### 脚手架版本
```
@vue/cli v3.6.3
```

### 开发环境
```
vscode 最新版
nodejs v10.1.0
npm v6.0.1
```


## 配置

### eslint配置
eslint是前端开发中比较流行的代码规范自动检查工具，通过预先设置一些规则，它可以帮助你在编码过程中自动检测出不符合规则的代码，从而减少错误，增加代码的规范和可读性，提升团队协作的效率

#### 配置文件
eslint配置文件为项目根目录下的`.eslintrc.js`，该文件返回一个对象，eslint在代码更新的时候，会自动根据该配置进行代码检测

#### 全局变量配置
`globals`属性为全局变量配置，此属性的值为一个对象。

当在html页面中通过script标记引入了第三方插件， 调用的时候通常都是通过全局变量的方式调用的。此时eslint会报错，未申明变量。在eslint中配置该选项即可解决这个问题

该属性的值为一个对象，其中，对象的key即为全局变量的名字,值为boolean，表示是否为全局对象。

eg:
```
globals: {
  $: true
} 
```

#### 代码检测规则配置
eslint的代码规则很多，配置的时候请查阅参考文档 [eslint rules配置](https://eslint.org/docs/rules/)

eg:
```
rules: {
  'comma-dangle': 2, //是否允许对象中出现结尾逗号
}
```

### postcss配置
postcss是一个用 JavaScript 工具和插件转换 CSS 代码的工具，他能够对代码中的css进行浏览器前缀补全，翻译高版本的css特性，css模块化等操作。同时本身也提供多种插件

#### 配置文件
postcss的配置文件为项目根目录下的`postcss.config.js`

#### postcss-plugin-px2rem 配置
postcss-plugin-px2rem是一款自动将css代码中px转换为rem单位的postcss插件

##### 开关
在环境变量配置文件`.env.development`与`.env.production`中，有一个变量控制着是否在开发模式以及生产模式中启动转换为rem的开关`VUE_APP_PXTOREM_ON`。可以更改这个变量来设置为`true`是否开启此功能。

##### 设计图宽度配置
在环境变量配置文件`.env.development`与`.env.production`中，有一个设置设计图宽度的变量`VUE_APP_DISIGN_WIDTH`。此变量的作用是设置设计图本身的宽度，如`1920`，单位默认是px。设置此单位后，我们就可以
不管当前我们开发的分辨率，客户端的分辨率，直接按照设计图的宽度去设置即可。

##### 根字体默认字号设置
在环境变量配置文件`.env.development`与`.env.production`中，有一个设置根字体默认字号的变量`VUE_APP_ROOT_VALUE`。此变量的作用是设置当分辨率等于图纸设计的宽度的时候，如设置图纸为`1920`，客户端分辨率是
`1920*1080`,此时的根字体大小，单位默认是px。设置100px的作用主要是方便换算。

##### 引入事件处理混入文件
单单设置好上面的一些变量是不够的。`postcss-plugin-px2rem`插件只提供px-rem换算，不提供html根元素设置字体的功能。因此我们需要自己手动给html元素设置`font-size`，并且监听`window.resize`事件来动态更改

`App.vue`
```
import resizeMixin from '@/mixins/resize'
export default {
  name: 'App',
  mixins: [resizeMixin],
  components: {
  },
  created() {
    this.setHtmlFontSize()
  }
}
</script>
```

##### 监听浏览器大小改变事件
在引入事件处理混入之后，每当`window.resize`事件执行的时候，会执行<code>this.$store.commit('global/setHtmlFontSize',newFontSize)</code>，在应用其他任何地方当也需要监听`window.resize`事件时，直接监听此变量即可。