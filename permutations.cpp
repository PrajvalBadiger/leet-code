#include <bits/stdc++.h>
#include <vector>
using namespace std;

class Solution {
  public:
    vector<vector<int>> permute(vector<int> &nums) {
        vector<vector<int>> res;

        dfs(nums, 0, res);

        return res;
    }

  private:
    void dfs(vector<int> nums, int start, vector<vector<int>> &res) {
        if (start == nums.size()) {
            res.push_back(nums);
            return;
        }
        for (int i = start; i < nums.size(); i++) {
            swap(nums[i], nums[start]);
            dfs(nums, start + 1, res);
            swap(nums[i], nums[start]);
        }
    }
};

int main() {
    vector<int> nums = {1, 2, 3};
    vector<vector<int>> res;
    Solution *sol = new Solution();

    res = sol->permute(nums);

    for (auto arr : res) {
        for (auto val : arr) {
            cout << val << " ";
        }
        cout << endl;
    }
    return 0;
}
