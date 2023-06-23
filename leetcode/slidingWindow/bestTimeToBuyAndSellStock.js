
/**
 * 
 * @param {numbers[]} prices 
 * @returns {number}
 */
var maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let maxProfit = 0;

  while (r < prices.length) {

    let buy = prices[l];
    let sell = prices[r];

    maxProfit = Math.max(maxProfit, sell - buy);

    if (sell < buy) {
      l = r;
      r++;
    } else {
      r++
    }

  }
  return maxProfit;
}