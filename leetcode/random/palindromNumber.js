const isPalindrom = (x) =>{

  let num = x+""; 
  let [l,r,isPal] = [0, num.length -1, true];

  while(l < r){
    if(num[l] !== num[r]){
      isPal = false; 
      break; 
    }

    l++;
    r--; 
  }
  return isPal 
}