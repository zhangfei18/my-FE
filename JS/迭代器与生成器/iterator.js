// 什么是迭代器？
// 什么是可迭代对象？任何具有专用迭代器方法的且该方法返回 迭代器对象 的对象
// 什么是迭代器对象？是指任何具有next()方法且该方法返回 迭代结果对象 的对象
// 什么是迭代结果对象？是指具有属性value和done属性的对象


// demo1
let list = [1, 2, 3, 4, 5]
let iter = list[Symbol.iterator]()
let head = iter.next().value
console.log('demo1=> head', head)
let tail = [...iter]
console.log('demo1=> tail', tail)

// demo2
class Range {
  constructor(from, to) {
    this.from = from
    this.to = to
  }
  has(x) {
    return typeof x === 'number' && this.from <= x && x <= this.to
  }
  [Symbol.iterator]() {
    let next = Math.ceil(this.from)
    let last = this.to
    return {
      next() {
        return next <= last ? { value: next++ } : { done: true }
      },
      // [Symbol.iterator]() {
      //   console.log('this=>', this)
      //   return this
      // }
    }
  }
}
let range = new Range(0, 10)
for (let x of range) {
  console.log('demo2=> x', x)
}

// demo3
function map(itetable, f) {
  let iterator = itetable[Symbol.iterator]()
  return {
    [Symbol.iterator]() {
      // console.log('demo3 => map -this', this)
      // 为什么要返回一个this对象呢？ 因为map函数执行完之后要返回一个可迭代对象(具有迭代器方法且该方法执行后返回迭代器对象(具有next方法且执行后返回迭代结果对象))
      return this
    },
    next() {
      let v = iterator.next()
      if (v.done) {
        return v
      } else {
        return { value: f(v.value) }
      }
    }
  }
}

// let m = [...map([1, 2, 3], (v) => { return v * 2 })]
// console.log('demo3 => map', m)
// let n = map([1, 2, 3], (v) => { return v * 2 })
// for (let v of n) {
//   console.log('demo3', v)
// }

// demo4
function words(s) {
  let r = /\s+|$/g
  r.lastIndex = s.match(/[^ ]/).index
  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      let start = r.lastIndex
      if (start < s.length) {
        let match = r.exec(s)
        console.log('demo4', match)
        if (match) {
          return {
            value: s.substring(start, match.index)
          }
        }
      }
      return { done: true }
    }
  }
}
console.log('demo4:', [...words('abc def ghi ')])

// demo5 - 迭代器的return()方法
function map2(itetable, f) {
  let iterator = itetable[Symbol.iterator]()
  return {
    [Symbol.iterator]() {
      // 为什么要返回一个this对象呢？ 因为map函数执行完之后要返回一个可迭代对象(具有迭代器方法且该方法执行后返回迭代器对象(具有next方法且执行后返回迭代结果对象))
      return this
    },
    next() {
      console.log('demo5： 调用next方法')
      let v = iterator.next()
      if (v.done) {
        return v
      } else {
        return { value: f(v.value) }
      }
    },
    return() {
      console.log('demo5: 调用return方法做一些收尾工作')
      return this
    }
  }
}
for (let v of map2([1, 2, 3], x => x)) {
  console.log('demo5: v', v)
  if (v >= 2) {
    break
  }
}

// demo6 - 如何让一个对象可迭代
function iteratorObject(obj) {
  obj[Symbol.iterator] = function () {
    let allCount = Object.keys(obj)
    let curCount = 0
    return {
      next() {
        if (curCount < allCount.length) {
          return {
            value: obj[allCount[curCount++]],
            done: false
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
  }
}
let obj = { a: 1, b: 2, c: 3 }
iteratorObject(obj)