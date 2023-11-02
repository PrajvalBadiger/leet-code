function fact(n: number): number {
    if (n <= 1) {
        return 1
    }
    return n * fact(n - 1)
}

function uniquePaths(m: number, n: number): number {
    /*
     * total no of moves that has to be made to reach end point is (m - 1) + (n - 1) = (m + n - 2)
     * we need to take nCr where n = (m + n - 2) and r = n or r = m
     * nCr = (m + n - 2)! / ((n - 1)! * (m - 1)!)
     */
    return fact(m + n - 2) / (fact(n - 1) * fact(m - 1));
};
