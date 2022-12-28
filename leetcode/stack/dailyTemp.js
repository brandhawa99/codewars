/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let stack = []; 
    let res = new Array(T.length).fill(0);  
    for(let i = 0 ; i < T.length; i++){
        while(stack.length >0 && T[i] > stack[stack.length -1][0]){
           let val = stack.pop() 
           res[val[1]] = (i - val[1])
        }
        stack.push([T[i], i])

    }
    return res; 
};
