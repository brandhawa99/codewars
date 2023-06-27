

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {

  let stack = [];
  let max = -1;

  for (let i = 0; i < heights.length; i++) {

    let start = i // stores index of last height greater than the current height 
    while (stack.length && heights[i] < stack[stack.length - 1].height) {
      let top = stack.pop();
      let val = (i - top.index) * top.height
      max = Math.max(max, val);
      start = top.index
    }

    stack.push({ height: heights[i], index: start })
  }

  while (stack.length) {
    let top = stack.pop();
    max = Math.max((heights.length - top.index) * top.height, max)
  }

  return max


};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
