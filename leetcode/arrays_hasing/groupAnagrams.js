/**
 * 49. Group Anagrams
 * Given an array of string group anagrams in any order
 *
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // initialize a map to store your keys and values;
  let res = new Map();
  // itereate through the words in strs array
  for (let i = 0; i < strs.length; i++) {
    // intilaze an array of length 26 with the value 0
    let key = new Array(26).fill(0);
    let word = strs[i];
    // go through the characters of the current word
    for (let j = 0; j < word.length; j++) {
      // increment the current letter value in the key array
      key[word.charCodeAt(j) - "a".charCodeAt(0)] += 1;
    }
    // if the key exists push the current word to its array
    // else add the key and makes it value an array with the current word
    map[key] ? map[key].push(word) : (map[key] = [word]);
  }
  // return all the the volues in the map
  return Object.values(map);
};
