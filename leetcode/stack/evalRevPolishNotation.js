/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let map = {
        '+': function add(a,b){
                return a+b; 
            },
        '/': function divide(a,b){
            return  a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)
            },
        '-': function sub(a,b){
                return a-b 
            },
        '*': function multi(a,b){
                return a*b; 
            }
    }
    let stack = []
    while(tokens.length){
        let val = tokens.shift();
        if(map[val]){
            let func = map[val]; 
            let num2 = stack.pop(); 
            let num1 = stack.pop(); 

            let ans = func(num1, num2); 
                stack.push(ans)
            
        }else{
            stack.push(Number(val)); 
        }

    }
    return stack[0]; 
};
