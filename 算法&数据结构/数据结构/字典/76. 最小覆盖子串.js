

function minWindow(s, t) {
  let needMap = new Map()
  let l = 0
  let r = 0
  for (let i of t) {
    let hasCount = needMap.get(i) || 0
    needMap.set(i, ++hasCount)
  }
  let needSize = needMap.size
  let res = ''
  while (r < s.length) {
    let c = s[r]
    if (needMap.has(c)) {
      needMap.set(c, needMap.get(c) - 1)
      if (needMap.get(c) === 0) needSize--
    }
    // 此时l - r 之间的子串已经完全包含t了
    while (needSize === 0) {
      let newS = s.substring(l, r + 1)
      if (newS.length < res.length || !res) {
        res = newS
      }
      let c2 = s[l]
      if (needMap.has(c2)) {
        needMap.set(c2, needMap.get(c2) + 1)
        if (needMap.get(c2) === 1) {
          needSize++
        }
      }
      l++
    }
    r++
  }
  console.log(res)
}
minWindow("ADOBECODEBANC", "ABC")