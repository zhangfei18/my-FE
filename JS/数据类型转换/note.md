### 数据类型转换
- 所有的数据类型转换都逃不出显示转换和隐式转换
- 转换为number=>
  - 显式：Number() parseInt() parseFloat()
  - 隐式：数学运算符 - * /
    - 例外：+号运算符有一侧是字符串或者对象的时候是会优先转换为字符串

- 转换为字符串
  - 显式：String() toString()
  - 隐式：+号

- 转换为布尔
  - 显示：Boolean
  - 隐式：判断体/循环体
  
- == 比较类型转换规则
  - 1.字符串 == 对象 => 字符串
  - 2.null == undefined
  - 3.null / undefined不和任何值相等
  - 4.剩余都会转换为数字

- 对象转换为基本数据类型
  - 先回调用valueOf方法, 看是否返回基本数据类型, 是返回, 不是执行第二步
  - 调用toString方法, 看是否返回基本数据类型, 是返回, 不是报错

测试题
```javascript
  parseInt('') => NaN
  Number('') => 0
  isNaN('') => false 会发生隐式转换-先转换成数字
  parseInt(null) => NaN 会发生隐式转换-先转换成字符串
  Number(null) 0
  isNaN(null) flase
  Number('12px') NaN
  isNaN('12px') true
  parseFloat('1.6px') + parseInt('1.2px') + typeof parseInt(null) =>  '2.6number'
  isNaN(Number(!!Number(parseInt('0.8')))) => false
  typeof !parseInt(null) + !isNaN(null) => booleantrue
```

```js
let result = 10 + false + undefined + [] + 'Tencent' + null + true + {} => 'NaNnulltrue[object Object]'
```

- 特殊case
  - {} + 0 => 0 (这种情况是会把{}当做一个代码块了, 代码块是不是参与运算的, )
  - ({}) + 0 '' => '[object Object]0'
  - 0 + {} 会参与运算
  - +{}