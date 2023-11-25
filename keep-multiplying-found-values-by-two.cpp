#include <algorithm>
#include <bits/stdc++.h>
#include <vector>
using namespace std;

class Solution {
  public:
    int findFinalValue(vector<int> &nums, int original) {
        sort(nums.begin(), nums.end());

        for (auto elem : nums) {
            cout << elem << " ";
            if (elem == original) {
                original *= 2;
            }
        }
        cout << endl;

        return original;
    }
};

int main() {
    int res = 0;

    Solution *sol = new Solution();

    vector<int> nums = {5, 3, 6, 1, 12};
    res = sol->findFinalValue(nums, 3);
    cout << res << endl;

    nums = {2, 7, 9};
    res = sol->findFinalValue(nums, 4);
    cout << res << endl;

    return 0;
}
