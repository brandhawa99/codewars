
const invertTree = (root) => {

  if (root === null) {
    return null
  }

  let temp = root.left;

  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;

}

let v = { val: 1, left: { val: 1, left: null, right: null }, right: { val: 2, left: null, right: null } }
invertTree(v)