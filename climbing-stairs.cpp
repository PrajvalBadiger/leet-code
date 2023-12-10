#include <vector>
using namespace std;

class Solution {
  public:
    int climbStairs(int n) {
        vector<int> dp(n, -1);
        return calculate_steps(n, 0, dp);
    }

  private:
    int calculate_steps(int n, int step, vector<int> &dp) {
        if (step == n)
            return 1;

        if (step > n)
            return 0;

        if (dp[step] != -1)
            return dp[step];

        return dp[step] = calculate_steps(n, step + 1, dp) +
                          calculate_steps(n, step + 2, dp);
    }
};
int main() { return 0; }
