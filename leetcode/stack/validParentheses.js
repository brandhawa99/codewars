
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {

    switch (s[i]) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        let val = stack.pop();
        if (val !== s[i]) {
          return false;
        }
    }
  }

  return stack.length ? false : true;
}
