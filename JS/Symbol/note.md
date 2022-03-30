## Symbol
1. 用来解决属性名冲突的问题
2. 私有属性

### coding 
1. 题目： 如何让一个对象可遍历
```js
const obj = {
  count: 0
}
for(let item of obj){
  console.log(item)
}
```

2. JSON.stringfy()会忽略symbol？ 除了这个还会忽略什么呢？
3. 如果对象有循环引用，可以使用JSON.stringfy来处理吗？
4. 是stringfy会报错还是parse报错？
5. 实现一个深拷贝
```js

```