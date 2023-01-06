/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let stack = []; 
    let res = []; 
    const backtracking = (open , close) =>{
        console.log(stack); 
        if(open === close && open === n){
            res.push(stack.join("")); 
            return; 
        }
        if(open < n){
            stack.push("("); 
            backtracking(open + 1, close);
            stack.pop(); 
        }
        if(close < open){
            stack.push(")"); 
            backtracking(open, close + 1)
            stack.pop(); 
        }
    }
    backtracking(0,0); 
    return res; 

};
