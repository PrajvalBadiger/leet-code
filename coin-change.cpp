/*
 * 322. Coin Change
 * dp problem - bottom up approach to solve the problem
 * sub problem - min coins needed to make up i$
 */
#include <vector>
using namespace std;

class Solution {
  public:
    int coinChange(vector<int> &coins, int amount) {
        // Bottom up approch
        vector<int> dp(
            amount + 1,
            amount + 1); // initialize with a value larger than target amount
        dp[0] = 0;       // 0 coins need to make 0$

        // amount to calculate
        for (int curr_amt = 0; curr_amt <= amount; curr_amt++) {
            // iterate over available dinominations
            for (int dinom = 0; dinom < coins.size(); dinom++) {
                if (coins[dinom] <= curr_amt) {
                    // take 1 coin of curr dinom and reduse the curr_amt by
                    // value of curr dinom
                    dp[curr_amt] =
                        min(dp[curr_amt], 1 + dp[curr_amt - coins[dinom]]);
                }
            }
        }

        // return -1 if we cannot make the amount with the given dinominations
        return dp[amount] > amount ? -1 : dp[amount];
    }
};

int main() { return 0; }
