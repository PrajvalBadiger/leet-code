function fib(n: number): number {

    function solve(n: number, dp: number[]): number {
        if (n === 1 || n === 0) return n
        if (dp[n] !== -1) return dp[n]
        return dp[n] = solve(n - 1, dp) + solve(n - 2, dp)
    }

    let dp: number[] = Array(n + 1).fill(-1)
    return solve(n, dp)
};

console.log(fib(6))
console.log(fib(3))
console.log(fib(2))
