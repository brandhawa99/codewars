
var postorderTraversal = function(root) {
  let res = []; 

  const dfs = (root) =>{
    if(root ==null){
      return ; 
    }

    dfs(root.left); 
    dfs(root.right); 
    res.push(root.val);
  }
  dfs(root);
  return res; 
}

postorderTraversal({val: 1, left:null, right:{val: 2, left: {val:3, left:null,right:null}, right:null}})