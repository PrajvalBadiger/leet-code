/**
 Do not return anything, modify board in-place instead.
 */

function is_valid(board: string[][], row: number, col: number, c: string): boolean {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === c) {
            return false
        }

        if (board[row][i] === c) {
            return false
        }

        if (board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + Math.floor(i % 3)] === c) {
            return false
        }
    }

    return true
}

function solve(board: string[][]): boolean {

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {

            if (board[row][col] == '.') {
                for (let c = '1'.charCodeAt(0); c <= '9'.charCodeAt(0); c++) {

                    let ch = String.fromCharCode(c)
                    if (is_valid(board, row, col, ch)) {
                        board[row][col] = ch

                        if (solve(board) === true) {
                            return true
                        } else {
                            board[row][col] = '.'
                        }
                    }
                }
                return false
            }
        }
    }

    return true
}

function solveSudoku(board: string[][]): void {
    solve(board)
};
