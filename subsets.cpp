#include <bits/stdc++.h>

using namespace std;
class Solution {
  public:
    vector<vector<int>> subsets(vector<int> &nums) {
        vector<vector<int>> res;
        vector<int> curr;
        dfs(nums, curr, 0, res);

        return res;
    }

  private:
    void dfs(vector<int> nums, vector<int> curr, size_t currIdx,
             vector<vector<int>> &res) {
        if (currIdx >= nums.size()) {
            res.push_back(curr);
            return;
        }

        // include a num
        curr.push_back(nums[currIdx]);
        dfs(nums, curr, currIdx + 1, res);
        // exclude a num
        curr.pop_back();
        dfs(nums, curr, currIdx + 1, res);
    }
};

int main() {
    Solution *sol = new Solution();
    vector<int> nums = {1, 2, 2};
    vector<vector<int>> res;
    res = sol->subsets(nums);

    for (auto it : res) {
        cout << "[";
        for (auto elem : it) {
            cout << elem << ",";
        }
        cout << "], ";
    }
    cout << endl;
    return 0;
}
