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

2.第二种方法：之前有人说道需要 pollify 需要在我们的代码中安装@babel/polyfill, 且在源代码文件的顶部引入 import "@babel/polyfill"; 此时在配合上面第一种 useBuiltIns: 'usage'方法，达到按需 polyfill 的效果，但是我自己试着，直接使用第一种方法就OK！

3.第三种方法：(上面的方法适用于业务开发中)， 如果我们写的是类库之类的，就需要第三种方法了, 即 @babel/plugin-transform-runtime ， 使用配置如下：即 plugins， 
注意：我们需要根据该插件的配置参数corejs的值，安装不同的包， 即 2 => @babel/runtime-corejs2 | 3 => @babel/runtime-corejs3
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
