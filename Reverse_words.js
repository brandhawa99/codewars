function reverseWords(str) {
  let words = str.split(" ");
  let reversed = []
  for(let i =0 ; i<words.length; i++){
    let reverse = ""
    for(let j = words[i].length; j>=0; j--){
      reverse+= words[i].charAt(j);; 
    }
    reversed.push(reverse);
    reverse = ""
  }
  return reversed.join(" ");
}
