

// 这道题很显然是 需要遍历整棵树, 且递归函数不需要返回值
var pathSum = function (root, targetSum) {
    if (root === null) {
        return []
    }
    let ret = []
    let path = []
    let sum = 0
    path.push(root.val)
    sum += root.val
    dfs(root, sum)
    function dfs(node, sum) {
        if (node.left === null && node.right === null) {
            if (sum === targetSum) {
                ret.push(path.slice(0))
            }
            return
        }

        if (node.left) {
            sum += node.left.val
            path.push(node.left.val)
            dfs(node.left, sum)
            sum -= node.left.val
            path.pop()
        }
        if (node.right) {
            sum += node.right.val
            path.push(node.right.val)
            dfs(node.right, sum)
            sum -= node.right.val
            path.pop()
        }

    }
    return ret
};