/**
 * 知识点：
 *  集合是类似数组的，只是值不能有重复
 *  Set的构造函数不一定是数组， 但一定要是个可迭代对象
 *  集合内部是用全等 === 来比较两个值是否相等的 如demo1
 *  Set类也实现了一个forEach方法
 *  集合也支持迭代 for/of 可扩展操作符...
 *  
*/

// demo1 
let s = new Set([1, 2, 3])
s.add('1')
console.log(s)
s.forEach(function(s){
  console.log(typeof s)
})