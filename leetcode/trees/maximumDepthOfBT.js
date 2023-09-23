
/**
 * 
 * @param {TreeNode} root 
 * @returns {number} 
 */
const maxDepth = (root) => {
  if (root == null) {
    return 0;
  }
  //take larger value and add one
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}