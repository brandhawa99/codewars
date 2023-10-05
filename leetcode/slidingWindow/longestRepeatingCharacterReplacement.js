
/**
 * Returns the largest string possible with k character replacements
 * The length of the string subtracted by the must repeated character in the map must be < k
 *  otherwise we subtract the oldest element in he map
 * @param {string} s 
 * @param {number} k 
 * @returns {number}
 */
const characterReplacement = (s, k) => {
  let res = 0;
  let map = new Map();
  let ptr = 0;

  for (let i = 0; i < s.length; i++) {
    let len = i - ptr + 1;
    map.set(s[i], 1 + (map.get(s[i]) || 0));

    if ((len - Math.max(...map.values())) > k) {
      map.set(s[ptr], map.get(s[i]) - 1)
      ptr++
    }
    len = i - ptr + 1
    res = Math.max(res, len);
  }
  return res;
}



console.log(characterReplacement("ABBB", 2));
