function maxProfit(prices: number[]): number {
    let min = prices[0]
    let max_profit = 0

    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        max_profit = Math.max(max_profit, prices[i] - min)
    }

    return max_profit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
