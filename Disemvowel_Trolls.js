function disemvowel(str) {
  let regex = /[aeiou]/ig 
  return str.replace(regex,'');
}
