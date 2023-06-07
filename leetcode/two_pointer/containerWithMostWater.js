

var maxHeight = function (height) {
  let area = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    let lh = height[l];
    let rh = height[r];
    area = Math.max(area, Math.min(lh, rh) * (r - l));
    if (lh < rh) {
      l++
    } else {
      r--;
    }
  }
  return area;
}