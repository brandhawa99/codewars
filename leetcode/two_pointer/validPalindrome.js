
/**
 * 
 * @param {string} s 
 * @returns {boolean} 
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "")
  s = s.toLowerCase();

  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true
}

// test cases 
// should return  true 
console.log(isPalindrome("A man, a plan, a canal: Panama"));
// should return false; 
console.log(isPalindrome("race a car"))
//should return true
console.log(isPalindrome(" ")); 
