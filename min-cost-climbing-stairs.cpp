/*
 * 746. Min Cost Climbing Stairs
 * dp problem - solve using bottom up approach
 */
#include <vector>
using namespace std;

class Solution {
  public:
    int minCostClimbingStairs(vector<int> &cost) {
        int n = cost.size();
        vector<int> dp(n + 1);

        dp[0] = cost[0];
        dp[1] = cost[1];
        for (int i = 2; i <= n; i++) {
            // start with either 0 or 1 and take 1 or 2 steps
            dp[i] = min(dp[i - 1], dp[i - 2]) + (i == n ? 0 : cost[i]);
        }

        return dp[n];
    }
};

int main() { return 0; }
