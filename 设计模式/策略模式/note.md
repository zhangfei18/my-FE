### 使用-适用
- 通过封装将一些互不影响的算法或者程序保存起来，当外界使用的时候只需要表明自己要使用哪个算法，我们直接返回给调用者即可

### 例子
- 比如vue源码中的mergeOptions中就是用了策略模式
- 再者axios源码中的用于对不同的header进行不同的合并策略的时候，也使用了策略模式，下面将其代码放在下面：
```javascript
  const strats = Object.create(null)
  const fromVal2Keys = ['url', 'params', 'data']
  fromVal2Keys.forEach(key => {
    strats[key] = fromVal2Strat
  })
  const deepMergeKeys = ['headers', 'auth']
  deepMergeKeys.forEach(key => {
    strats[key] = deepMergeStrat
  })
```