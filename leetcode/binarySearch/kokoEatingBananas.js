/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let [l, r] = [1, Math.max(...piles)];
    let k = r;
    while (l < r) {
        let min = Math.floor((l + r) / 2);
        let total = 0;
        for (let i = 0; i < piles.length; i++) {
            total += Math.ceil((piles[i] / min));
            if (total > h) {
                break;
            }
        }
        if (total <= h) {
            r = min;
            k = Math.min(k, min);
        } else {
            l = min + 1;
        }

    }
    return k
};
