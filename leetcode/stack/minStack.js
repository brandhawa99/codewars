
var MinStack = function() {
    this.stack = []; 
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length == 0){
        this.stack.push([val, val]); 
    }else{
        if(val < this.stack[this.stack.length - 1][1]){
            this.stack.push([val,val])
        }else{
            this.stack.push([val, this.stack[this.stack.length-1][1]]); 
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length > 0){
        let val = this.stack.pop(); 
        return val[0]; 
    }else{
        return null; 
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
        if(this.stack.length > 0){ 
        return this.stack[this.stack.length-1][0]; 
    }else{
        return null; 
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length > 0){
        return this.stack[this.stack.length -1][1]; 
    }else{
        return null; 
    }
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
