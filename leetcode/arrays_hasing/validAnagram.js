// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  //if the two strings are not the same length we know they are not anagrams.
  if (s.length !== t.length) {
    return false;
  }
  //create a map to hold the values from the strings
  let map = new Map();
  //go through the first array of characters and add its characters to the map and increment if they exist
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  //go through the second array of characters
  for (let char of t) {
    //if the char does not exist in the map return false;
    if (!map.get(char)) {
      return false;
    } else {
      //otherwise decrement the value of the char
      map.set(char, map.get(char) - 1);
    }
  }
  return true;
};
