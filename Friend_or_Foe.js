function friend(friends){
  //your code here
  
  let filtered = friends.filter(friend =>{
    if(friend.length === 4){
      return true;
    }
    return false;
  })
  return filtered 
}
