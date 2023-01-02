/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let [l, r] = [1, Math.max(...piles)]; 
    let res = r; 
    while(l < r){
        let k  = Math.floor((l+r)/2); 
        let total = 0 ;
        for(let i = 0 ; i < piles.length; i++){
            total += Math.ceil((piles[i]/k)); 
        }
        if(total <= h){
            // no + 1 cuz js things
            r = k; 
            res = Math.min(res, k); 
        }else{
            l = k + 1; 
        }

    }
    return res; 
};
