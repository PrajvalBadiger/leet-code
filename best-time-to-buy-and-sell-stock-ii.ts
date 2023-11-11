function maxProfit(prices: number[]): number {
    let n = prices.length
    let max_profit = 0
    function solve(day: number, buy: number): number {
        if (day === n) {
            return 0;
        }
        if (buy === 1) {
            max_profit = Math.max(solve(day + 1, 0) - prices[day], solve(day + 1, 1))
        } else {
            max_profit = Math.max(solve(day + 1, 1) + prices[day], solve(day + 1, 0))
        }
        return max_profit
    }
    return solve(0, 1)
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
