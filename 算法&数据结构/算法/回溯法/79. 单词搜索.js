/**第一遍 */

var exist = function (board, word) {
  if (!board.length) {
    return false
  }
  if (!word.length) {
    return true
  }
  let row = board.length
  let col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let ret = find(i, j, 0) // 0表示当前遍历到word的中第一个字母
      if (ret) return true
    }
  }
  // 没找到
  return false
  function find(i, j, cur) {
    // 处理边界
    if (i < 0 || i >= row) {
      return false
    }
    if (j < 0 || j >= col) {
      return false
    }
    let letter = board[i][j]
    if (letter !== word[cur]) {
      return false
    }
    if (cur === word.length - 1) {
      return true
    }
    // 决定往下走了再置空
    board[i][j] = null
    let ret = find(i + 1, j, cur + 1) || find(i - 1, j, cur + 1) || find(i, j + 1, cur + 1) || find(i, j - 1, cur + 1)
    board[i][j] = letter
    return ret
  }
}

