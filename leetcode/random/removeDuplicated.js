const removeDuplicates = (head) =>{
  let curr = head; 

  while(curr && curr.next){
    if(curr.val === curr.next.val){
      curr.next = curr.next.next; 
      continue
    }
    curr = curr.next; 
  }
}