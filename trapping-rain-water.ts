function trap(height: number[]): number {
    let sum = 0;

    //  for each element take min(max on left and max on right) - current height
    for (let i = 1; i < height.length - 1; i++) {
        let rain_trap = Math.min(Math.max(...height.slice(0, i)), Math.max(...height.slice(i + 1, height.length))) - height[i];
        if (rain_trap > 0) sum += rain_trap;
    }

    return sum;
};

// two pointer
function trap2(height: number[]): number {
    let sum = 0;

    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l];
    let rightMax = height[r];

    while(l < r) {
        // whichever is the least of leftMax and rightMax, calculate water traped for that index
        if (leftMax < rightMax) {
            l++;
            leftMax = Math.max(leftMax, height[l]);
            sum += leftMax - height[l]
        } else {
            r--;
            rightMax = Math.max(rightMax, height[r]);
            sum += rightMax - height[r]
        }

    }

    return sum;
};

console.log(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap2([4, 2, 0, 3, 2, 5]))
