#include <iostream>
#include <vector>
using namespace std;

class Solution {
    int sum(vector<int> nums, int n, vector<int> &dp) {
        if (n <= 0)
            return 0;
        if (dp[n] != -1)
            return dp[n];
        return dp[n] = max(sum(nums, n - 1, dp),                // not take
                           nums[n - 1] + sum(nums, n - 2, dp)); // take
    }

  public:
    int rob(vector<int> &nums) {
        vector<int> dp(nums.size() + 1, -1);
        return sum(nums, nums.size(), dp);
    }
};

int main() {
    Solution sol;
    vector<int> nums;
    int res;

    nums = {1, 2, 3, 1};
    res = sol.rob(nums);
    cout << res << endl;

    nums = {7, 2, 3, 9, 2};
    res = sol.rob(nums);
    cout << res << endl;

    return 0;
}
