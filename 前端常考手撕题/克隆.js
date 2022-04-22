// 浅克隆
// ...
// Object.assign
// 循环赋值

// 深克隆
// JSON.stringfy/JSON.parse【只适用于只有number string boolean null 普通数组 普通对象的情况】 先整体变成字符串再转成对象,  浏览器会重新开辟空间


function cloneDeep(obj) {
  let type = typeof obj
  if (obj == null) {
    return obj
  }
  if (type !== 'object') {
    return obj
  }
  let constructor = obj.constructor
  if (/^RegExp|Date$/.test(type)) {
    return new constructor.name(obj)
  }
  // 到这只有对象和数组了
  let ret = new constructor.name
  for (let key in obj) {
    if (!Object.prototype.hasOwnProperty(key)) break
    ret[key] = cloneDeep(obj[key])
  }
}