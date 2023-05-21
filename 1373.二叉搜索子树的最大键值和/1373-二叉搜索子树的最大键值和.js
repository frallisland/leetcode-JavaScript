/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function (root) {
  let maxSum = 0;
  /* ����һ��������������
  isBST ������ root Ϊ���Ķ������ǲ��� BST ����ǵĻ���Ϊtrue ����Ϊfalse
  min ������ root Ϊ������� BST ����Сֵ
  max ������ root Ϊ������� BST �����ֵ
  sum ������ root Ϊ������� BST ���нڵ�֮�� 
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
    // �ݹ������������
    let left = dfs(root.left);
    let right = dfs(root.right);
    if (
      left.isBST &&
      right.isBST &&
      root.val > left.max &&
      root.val < right.min
    ) {
      // ������ root Ϊ������� BST ���нڵ�֮��
      let sum = left.sum + right.sum + root.val;
      maxSum = Math.max(sum, maxSum);
      return {
        // ��rootΪ���Ķ�������BST
        isBST: true,
        // ������ root Ϊ������� BST ����Сֵ
        min: Math.min(left.min, root.val),
        // ������ root Ϊ������� BST �����ֵ
        max: Math.max(right.max, root.val),

        sum,
      };
    } else {
      // �� root Ϊ���Ķ��������� BST
      return {
        isBST: false,
      };
    }
  };
  dfs(root);
  return maxSum;
};
