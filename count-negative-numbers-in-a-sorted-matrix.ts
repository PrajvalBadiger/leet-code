function countNegatives(grid: number[][]): number {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = grid[i].length - 1; j >= 0; j--) {
            if (grid[i][j] >= 0) {
                break;
            }
            count++;
        }
    }

    return count;
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
console.log(countNegatives([[3,2],[1,0]]))
