/**第一遍 */
var coinChange = function (coins, amount) {
  // 确定dp数组及下标含义 dp[n] 表示总金额是n时, 需要的硬币的最小数量
  // 递推公式 dp[n] = dp[n - coins[i]] + 1
  // dp[0] = 0
  // 确定遍历顺序
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
    }
  }
};

