
/**
 * use dequeue data structure 
 * while there are values in the dequeue create an array and get the length of the dequeue
 * have a for loop the is the length of the dequeue 
 * once all the values from that row have been added to dequeue arr the arr to the results array 
 * continue until the dequeue is empty; 

 */
const levelOrder = (root) => {

  let res = []; 
  let q = []; 

  if(root) q.push(root); 
  
  while(q.length){
    let arr = []; 
    let len = q.length; 

    for(let i = 0 ; i < len ; i++){
      //remove from start 
      let node = q.shift(); 
      arr.push(node.val); 

      if(node.left) q.push(node.left); 
      if(node.right) q.push(node.right); 
    }
    res.push(arr)
  }
  return res;   
}