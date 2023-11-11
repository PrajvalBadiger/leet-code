function maxProfit(prices: number[]): number {

    let dp: number[][][] = Array.from({ length: prices.length }, () =>
        Array.from({ length: 2 }, () =>
            Array.from({ length: 3 }, () => -1)
        ))

    function solve(day: number, can_buy: number, t: number): number {
        if (t === 0) return 0
        if (day === prices.length) return 0
        if (dp[day][can_buy][t] !== -1) return dp[day][can_buy][t];
        if (can_buy) {
            return dp[day][can_buy][t] = Math.max(solve(day + 1, 0, t) - prices[day], solve(day + 1, 1, t))
        } else {
            return dp[day][can_buy][t] = Math.max(solve(day + 1, 1, t - 1) + prices[day], solve(day + 1, 0, t))
        }
    }
    return solve(0, 1, 2)
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([7, 6, 4, 3, 1]))
