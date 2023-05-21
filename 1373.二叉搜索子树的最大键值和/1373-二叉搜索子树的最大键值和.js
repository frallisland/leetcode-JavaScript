/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function (root) {
  let maxSum = 0;
  /* 返回一个对象，其中属性
  isBST 返回以 root 为根的二叉树是不是 BST 如果是的话则为true 否则为false
  min 返回以 root 为根的这棵 BST 的最小值
  max 返回以 root 为根的这棵 BST 的最大值
  sum 返回以 root 为根的这棵 BST 所有节点之和 
  */
  let dfs = (root) => {
    // base case
    if (root == null) {
      return {
        isBST: true,
        min: Infinity,
        max: -Infinity,
        sum: 0,
      };
    }
    // 递归计算左右子树
    let left = dfs(root.left);
    let right = dfs(root.right);
    if (
      left.isBST &&
      right.isBST &&
      root.val > left.max &&
      root.val < right.min
    ) {
      // 计算以 root 为根的这棵 BST 所有节点之和
      let sum = left.sum + right.sum + root.val;
      maxSum = Math.max(sum, maxSum);
      return {
        // 以root为根的二叉树是BST
        isBST: true,
        // 计算以 root 为根的这棵 BST 的最小值
        min: Math.min(left.min, root.val),
        // 计算以 root 为根的这棵 BST 的最大值
        max: Math.max(right.max, root.val),

        sum,
      };
    } else {
      // 以 root 为根的二叉树不是 BST
      return {
        isBST: false,
      };
    }
  };
  dfs(root);
  return maxSum;
};
