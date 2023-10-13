function searchMatrix(matrix: number[][], target: number): boolean {
    const row = matrix.length;
    const col = matrix[0].length;
    let start = 0;
    let end = (row * col) - 1;
    let mid: number;

    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);

        let elem = matrix[Math.floor(mid / col)][mid % col];
        if (elem === target) {
            return true;
        }
        // search end sub-array
        if (target > elem) {
            start = mid + 1;
        }
        // search start sub-array
        if (target < elem) {
            end = mid - 1;
        }
    }
    return false;
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));
