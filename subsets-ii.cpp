#include <algorithm>
#include <bits/stdc++.h>
#include <cstddef>
#include <vector>
using namespace std;
class Solution {
  public:
    vector<vector<int>> subsetsWithDup(vector<int> &nums) {
        set<vector<int>> res_set;
        vector<int> curr;
        sort(nums.begin(), nums.end());
        dfs(nums, curr, 0, res_set);

        vector<vector<int>> res;

        for (auto it : res_set) {
            res.push_back(it);
        }
        return res;
    }

  private:
    void dfs(vector<int> nums, vector<int> curr, size_t currIdx,
             set<vector<int>> &res_set) {
        if (currIdx >= nums.size()) {
            res_set.insert(curr);
            return;
        }

        // include a num
        curr.push_back(nums[currIdx]);
        dfs(nums, curr, currIdx + 1, res_set);
        // exclude a num
        curr.pop_back();
        dfs(nums, curr, currIdx + 1, res_set);
    }
};

int main() {
    Solution *sol = new Solution();
    vector<int> nums = {1, 2, 2};
    vector<vector<int>> res;
    res = sol->subsetsWithDup(nums);

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
