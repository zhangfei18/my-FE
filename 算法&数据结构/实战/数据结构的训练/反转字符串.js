/*
反转字符串中的单词
e.g. "This is a good example" => "example good a id This" 
*/ 

/*
  分析：
  复杂度分析： On
  定位问题：遍历 倒序输出
  数据操作： 采用栈数据结构
  编码
*/

function reverseString(){
  let str = "This is a good example"
  let buffer = str.split(' ').reverse()
  return buffer.join(' ')
}
console.log(reverseString())