/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let stack = [];
    let res = Array(T.length - 1).fill(0);

    for (let i = 0; i < T.length; i++) {
        while (stack.length && T[i] > stack[stack.length - 1].value) {
            let val = stack.pop();
            res[val.index] = i - val.index;
        }
        stack.push({ value: T[i], index: i })
    }
    return res;
};
