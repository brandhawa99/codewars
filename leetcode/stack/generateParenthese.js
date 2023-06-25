/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    /**
     * only add open parenthesis if open < n
     * only add closing parenthesis if closed < open 
     * valid IFF open === close == n 
     */

    let stack = [];
    let res = [];
    const backtracking = (open, close) => {
        if (open === close && open === n) {
            res.push(stack.join(""));
            return;
        }
        if (open < n) {
            stack.push("(");
            backtracking(open + 1, close);
            stack.pop();
        }
        if (close < open) {
            stack.push(")");
            backtracking(open, close + 1)
            stack.pop();
        }
    }
    backtracking(0, 0);
    return res;

};

generateParenthesis(3)
