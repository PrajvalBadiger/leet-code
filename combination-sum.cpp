#include <bits/stdc++.h>
#include <vector>
using namespace std;

class Solution {
  public:
    Solution() {}

    vector<vector<int>> combinationSum(vector<int> &candidates, int target) {
        vector<vector<int>> res;
        vector<int> curr;
        dfs(candidates, target, curr, 0, 0, res);
        return res;
    }

  private:
    void dfs(vector<int> &candidates, int target, vector<int> curr, int total,
             int currIdx, vector<vector<int>> &res) {
        if (total > target) {
            return;
        }
        if (total == target) {
            res.push_back(curr);
            return;
        }

        for (size_t i = currIdx; i < candidates.size(); i++) {
            // take a number
            curr.push_back(candidates[i]);
            total += candidates[i];
            dfs(candidates, target, curr, total, i, res);
            // not take a number
            curr.pop_back();
            total -= candidates[i];
        }
    }
};

int main() {
    vector<int> candidates = {2, 3, 6, 7};
    Solution *sol = new Solution();

    vector<vector<int>> res;

    res = sol->combinationSum(candidates, 7);

    for (auto arr : res) {
        for (auto val : arr) {
            cout << val << " ";
        }
        cout << endl;
    }
    return 0;
}
