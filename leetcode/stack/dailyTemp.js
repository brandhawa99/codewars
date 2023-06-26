/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    // keep track of values read
    let stack = [];
    // output array  
    let res = Array(T.length - 1).fill(0);

    // iterate through Temperatures array 
    // if stack has values less than current them update res array 
    // push current value to stack 
    for (let i = 0; i < T.length; i++) {
        while (stack.length && T[i] > stack[stack.length - 1].value) {
            let val = stack.pop();
            res[val.index] = i - val.index;
        }
        stack.push({ value: T[i], index: i })
    }
    return res;
};
