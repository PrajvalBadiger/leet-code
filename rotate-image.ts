/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    // 1. take transpose of the matrix -> interchange rows and column
    for (let row = 0; row < matrix.length; row++) {
        for (let col = row; col < matrix.length; col++) {
            const temp = matrix[row][col]
            matrix[row][col] = matrix[col][row]
            matrix[col][row] = temp
        }
    }

    // 2. flip the matrix -> reverse each row
    for (let row = 0; row < matrix.length; row++) {
        let l = 0
        let r = matrix.length - 1
        while (l < r) {
            const temp = matrix[row][l]
            matrix[row][l] = matrix[row][r]
            matrix[row][r] = temp
            l++
            r--
        }
    }
    return
};

let m1 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
let m2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

rotate(m1)
rotate(m2)
console.log(m1, m2)
