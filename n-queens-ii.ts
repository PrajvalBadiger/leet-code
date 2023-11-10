function totalNQueens(n: number): number {
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

    let res: number = 0;
    function solve(board: string[][], row: number) {

        if (row === n) {
            res += 1;
            return
        }

        for (let i = 0; i < n; i++) {
            if (is_valid(board, row, i, n)) {
                board[row][i] = 'Q';
                solve(board, row + 1);
                board[row][i] = '.'
            }
        }
    }

    let board: string[][] = Array(n);
    for (let i = 0; i < board.length; i++) {
        board[i] = Array(n).fill(".")
    }

    solve(board, 0);
    return res;
};

console.log(totalNQueens(4))
console.log(totalNQueens(1))
