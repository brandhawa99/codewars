
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let top = 0;
  let bottom = matrix.length - 1;

  while (top <= bottom) {
    let mid = top + Math.floor((bottom - top) / 2);


    if (target < matrix[mid][0]) {
      bottom = mid - 1;
    } else if (target > matrix[mid][matrix[mid].length - 1]) {
      top = mid + 1;
    } else {
      let arr = matrix[mid];
      return binarySearch(arr, target)
    }
  }
  return false;

}

/**
 * 
 * @param {number[]} arr 
 * @param {number} target 
 * @returns {boolean}
 */
function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let midVal = arr[mid];
    if (target > midVal) {
      l = mid + 1;
    } else if (target < midVal) {
      r = mid - 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))