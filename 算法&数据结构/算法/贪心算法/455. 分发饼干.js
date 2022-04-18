/**第一遍 */

var findContentChildren = function (g, s) {
  g.sort((a, b) => { return a - b })
  s.sort((a, b) => { return a - b })
  let ret = 0
  let curSIndex = s.length - 1
  for (let index = g.length - 1; index >= 0; index--) {
    const element = g[index];
    if (s[curSIndex] > element) {
      ret++
      curSIndex--
    }
  }
  return ret
};