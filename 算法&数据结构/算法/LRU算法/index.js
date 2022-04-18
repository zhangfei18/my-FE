/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map()
  this.max = capacity
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let cur = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, cur)
    return cur
  } else {
    return -1
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  } else if (this.cache.size >= this.max) {
    // this.cache.keys().next() 是想取到map结构的第一个元素
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)

};
