


function solveNQueens(n) {
  // 初始化棋盘
  let checkerboard = new Array(n).fill([]).map(() => {
    return new Array(n).fill('.')
  })
  // console.log(checkerboard)
  let ret = []
  // row表示当前行数
  backtracking(checkerboard, 0)
  return ret
  function backtracking(checkerboard, row) {
    // 终止条件
    if (row === n) {
      ret.push(resoveCurRet(checkerboard))
      return
    }
    // 单层逻辑
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, checkerboard)) {
        // 可以填充
        checkerboard[row][col] = 'Q'
        backtracking(checkerboard, row + 1)
        checkerboard[row][col] = '.'
      } else {
        // 不可以填充继续循环
      }
    }
  }
  function resoveCurRet(checkerboard) {
    let ret = checkerboard.map((item) => {
      return item instanceof Array && item.join('')
    })
    return ret
  }
  function isValid(row, col, checkerboard) {
    // 判断行
    for (let i = row - 1; i >= 0; i--) {
      if (checkerboard[i][col] === 'Q') {
        return false
      }
    }
    // 判断列
    for (let i = col - 1; i >= 0; i--) {
      if (checkerboard[row][i] === 'Q') {
        return false
      }
    }
    // 判断左上
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (checkerboard[i][j] === 'Q') {
        return false
      }
    }
    // 判断右上
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (checkerboard[i][j] === 'Q') {
        return false
      }
    }
    return true
  }
}
let ret = solveNQueens(4)
console.log(ret)