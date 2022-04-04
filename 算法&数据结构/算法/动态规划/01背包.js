function testweightbagproblem(wight, value, size) {
  const len = wight.length,
    dp = Array.from({ length: len + 1 }).map(
      () => Array(size + 1).fill(0)
    );

  for (let i = 1; i <= len; i++) {// 遍历物品
    for (let j = 0; j <= size; j++) {// 遍历背包容量
      if (wight[i - 1] <= j) { // 放当前物品
        dp[i][j] = math.max( // 不放当前物品
          dp[i - 1][j],
          value[i - 1] + dp[i - 1][j - wight[i - 1]]
        )
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  //   console.table(dp);

  return dp[len][size];
}

testweightbagproblem([1, 3, 4], [15, 20, 30,], 4)