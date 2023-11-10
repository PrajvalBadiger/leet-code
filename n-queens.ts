function solveNQueens(n: number): string[][] {
    function is_valid(board: string[][], row: number, col: number, N: number): boolean {
        for (let i = row; i >= 0; i--) {
            if (board[i][col] === 'Q') return false;
        }

        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        for (let i = row, j = col; i >= 0 && j < N; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    }

    function solve(board: string[][], row: number, res: string[][]) {

        if (row === n) {
            let x = []
            for (const row of board) {
                x.push(row.join(""))
            }
            res.push(x)
            return
        }

        for (let i = 0; i < n; i++) {
            if (is_valid(board, row, i, n)) {
                board[row][i] = 'Q';
                solve(board, row + 1, res);
                board[row][i] = '.'
            }
        }
    }

    let res: string[][] = []
    let board: string[][] = Array(n);
    for (let i = 0; i < board.length; i++) {
        board[i] = Array(n).fill(".")
    }

    solve(board, 0, res);
    return res;
};

console.log(solveNQueens(4))
console.log(solveNQueens(1))
