# webpack 是一个模块打包工具，并不是一个 js 翻译工具

# 看英文文档 webpackjs.org.com

# 核心概念

## loader: 方便 webapck 处理非 js 模块资源

# 使用 babel 转换 es6 以及更高版本语法

·转换语法
使用 babel-loader + @babel/core + @babel/preset-env （可以直接参考 babel 官网-‘设置’-‘webpack 起步’）, 具体使用方法如下：targets 表示一个浏览器最小支持版本的对象，即对象中的版本如果支持就不用转换了

```javascript
{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              useBuiltIns: false,
              "targets": {
                "edge": "17",
                "firefox": "60",
                "chrome": "67",
                "safari": "11.1",
                "node": true
              },
            }]],
          }
        }
}
```

当然，上面的 targets 配置也可使用 .browserslistrc 配置起到相同的作用

```javascript
{
  "targets": "> 0.25%, not dead"
}
```

·转换高级 API - polyfill

1. 第一种方法是在@babel/preset-env 配置参数中直接使用 useBuiltIns: 'usage', 使用方式如下，此时可将我们使用到的高级 API 转换

```javascript
  {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ ['@babel/preset-env', {
            useBuiltIns: 'usage'
          }]],
        }
      }
    }
```

2.第二种方法：之前有人说道需要 pollify 需要在我们的代码中安装@babel/polyfill, 且在源代码文件的顶部引入 import "@babel/polyfill"; 此时在配合上面第一种 useBuiltIns: 'usage'方法，达到按需 polyfill 的效果，但是我自己试着，直接使用第一种方法就 OK！

3.第三种方法：(上面的方法适用于业务开发中)， 如果我们写的是类库之类的，就需要第三种方法了, 即 @babel/plugin-transform-runtime ， 使用配置如下：即 plugins，
注意：我们需要根据该插件的配置参数 corejs 的值，安装不同的包， 即 2 => @babel/runtime-corejs2 | 3 => @babel/runtime-corejs3

```javascript
{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              useBuiltIns: false,
              "targets": {
                "edge": "17",
                "firefox": "60",
                "chrome": "67",
                "safari": "11.1",
                "node": true
              },
            }]],
            plugins: [['@babel/plugin-transform-runtime', {
              corejs: 3
            }]]
          }
        }
      }
```

# treeshaking 的使用

开启： optimization.usedExports optimization.sideEffects: 数组，代表希望关闭 treeshaking 的引入

# 代码分割 code splitting

1 第一种方法
同步引入，需要配置 optimization
2 第二种方法
异步引入 import('lodash'), 自动 split 使用方法如下：

```javascript
function getComponent() {
  return import("lodash").then(({ default: _ }) => {
    let ele = document.createElement("div");
    ele.innerHTML = _join("fei", "zhang");
    return ele;
  });
}
getComponent().then((ele) => {
  document.body.appendChild(ele);
});
```
SplitChunksPlugin 配置参数讲解 
```javascript
  splitChunks: {
      chunks: 'async', // async只分割异步引入，
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: false
        default: false
      }
  }
  splitChunks: {
      chunks: 'all', // 同步异步引入都会打包，会走到下面的cacheGroups分组中，进行详细配置参数分割
      minSize: 30000,// 大于30kb才会分割
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vender.js' // 如果不配置该参数，抽离出来的代码的名字会是：venders~[入口文件名字].js
        },
        default: { // 如果引入的文件在上面的vendors组没有匹配成功，就会走到这个defaut组
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
    
```
# 懒加载
当我们在代码中使用import()语法时，webpack会将其抽离成单独的js文件，便很好的方便了vue异步组件的编写

# 代码分析工具 https://v4.webpack.js.org/ -> GUIDES -> Code Splitting -> Bundle Analysis

# prefetching + preloading https://v4.webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules
应用： 比如我们的页面中有一个需要用户点击后才会有的弹窗，但是这个弹窗又不需要在页面展现时弹出，如果我们此时还把相关的代码一起打包到首屏的代码中去，这样不仅会影响首屏的展示速度而且也相当于浪费了宽带，此时我们有第一种的优化方法，就是将这部分代码通过webpack的Code Splitting抽离到一个单独的js文件，但是这样又会有另外一个问题，那就是，当我们需要展示这个弹窗的时候就会需要先去加载资源然后再去执行代码展示，此时给用户就有一种比较慢的感觉，所以进一步的优化措施就是使用webpack的 prefetching！

# css代码分割 - minicssExtractWebpackPlugin(注意该插件不支持HMR，所以一般只用在生产环境)

# shimming的作用：
  当我们使用一些通用的模块的时候有的可能不想在每个木块里面使用import导入语句进行导入，此时我们可以使用如下的代码：
  ```javascript
   new webpack.ProvidePlugin({
      _: 'lodash',
    }),
  ```
  我们在使用webpack打包的时候在某一个模块内部直接使用this的时候，这时候的this指向的可能不是window，而是webpack内部的变量，此时我们就可以使用imports-loader, 如下面所示的代码：
  ```javascript
  use: 'imports-loader?this=>window'
  ```

# 环境变量 --env.production 默认是true


# 如何编写一个loader
  loader其实就是一个函数，但是不能写箭头函数，当然可以借助loader-util用于解析配置中传递给loader的参数

# 如何编写一个plugin
  plugin是一个类， 如下：
  ```javascript
  class ZfPlugin{
    constructor(){}
    apply(compiler){
      compiler.hooks.emit.tabAsync('ZfPlugin', (compilation) => {

      })
    }
  }
  ```
  如上面代码所示， 如果我们想看下compiler和compilation上究竟有哪些变量呢，那么我们可以使用debug模式,在package.json中配置一条命令：
  ```javascript
  "debug": "node --inspect --inspect-brk node_modules/webpack/bin/webpack.js"
  ```

# 如果配置打包一个库
### 和业务代码配置的区别
- output增加一个属性 libraryTarget: 'umd' => 支持amd esM commonjs引入使用
- output增加一个属性 library: '库的名字' => 支持全局变量使用
- externals => 在我们的库里面使用了别人的库，但是我们最后不想将第三方库打包到自己的库代码里面去，我们想让用户在引入我们的这个库之前自己引入这个第三方库，此时我们可以使用externals: ['lodash']

# PWA
- 配置一个script: 'start': 'http-server dist'
- 使用插件：workbox-webpack-plugin

# ts库的打包配置
- 安装ts-loader
- 需要创建tsconfig.json文件
- 使用第三方包需要安装对应的类型文件

# eslint在webpack中的使用
- 安装eslint eslint --init
- 安装编辑器eslint插件配合高亮显示
- 安装eslint-loader

# webpack打包速度的优化
1. 升级node的
2. 在尽可能少的模块上应用loader 例如loader配置中的exclude和include
3. plugin尽可能少且可靠
4. resolve参数合理配置
```javascript
  {
    extensions: ['.js', '.jsx'],
    mainFiles: ['index', 'child'],
    alias: {
      '@': path.resolve(__dirname, '../src')
      'zf': path.resolve(__dirname, '../src/child')
    }
  }
```
5. 使用dllPlugin提高打包速度
6. 多进程
7. 合理使用sourceMap