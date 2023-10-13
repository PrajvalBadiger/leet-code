function shipWithinDays(weights: number[], days: number): number {
    let l = Math.max(...weights);
    // let r = 0;
    // weights.map(x => r += x);
    let r: number = weights.reduce((a, c) => a + c, 0);
    let res = r;

    const canShip = (cap: number): boolean => {
        let ships = 1; // start with 1 ship
        let currCap = cap;
        weights.forEach(w => {
            // if weight is greater than capacity, increase no of ships(/days)
            if ((currCap - w) < 0) {
                ships++; // increase no of ships if we cann't fit in all the weights
                currCap = cap
            }
            currCap -= w;
        });

        // if the no of ships is less than of equal to days then return true (possible to ship)
        return ships <= days;
    }

    // Binary search over possible capacity [max_weight, sum_of_weights]
    while (l <= r) {
        // calculate mid
        let cap = l + Math.floor((r - l) / 2);

        // check if we can ship with this capacity, if check in [l, cap - 1]
        if (canShip(cap)) {
            res = Math.min(res, cap);
            r = cap - 1;
        } else { // [cap + 1, l]
            l = cap + 1;
        }
    }

    return res;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
