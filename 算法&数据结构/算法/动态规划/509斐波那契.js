/**第一遍 */

function feibo(n) {
  let dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
console.log(feibo(5))
function feibo_2(n) {
  if (n <= 1) {
    return n
  }
  let dp1 = 0
  let dp2 = 1
  for (let i = 2; i <= n; i++) {
    [dp1, dp2] = [dp2, dp2 + dp1]
  }
  return dp2
}
console.log(feibo_2(5))

function feibo_3(n) {
  if (n <= 1) return n
  return feibo_3(n - 1) + feibo_3(n - 2)
}
console.log('feibo_3', feibo_3(5))