// given an array of string find the longest common prefix

const longestCommonPrefix = (strs) => {

  let output = strs[0]; 

  for(let i = 1; i < strs.length; i++){
    let word = strs[i]; 
    let j = 0; 
    while(j < word.length){
      if(word[j] != output[j]){
        break; 
      }
      j++
    }
    output = output.slice(0,j); 
  }
}