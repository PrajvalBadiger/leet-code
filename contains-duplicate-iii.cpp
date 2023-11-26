#include <bits/stdc++.h>
#include <vector>
using namespace std;

class Solution {
  public:
    bool containsNearbyAlmostDuplicate(vector<int> &nums, int indexDiff,
                                       int valueDiff) {
        vector<pair<int, int>> nums_index(nums.size());

        for (size_t i = 0; i < nums_index.size(); i++) {
            nums_index[i].first = nums[i];
            nums_index[i].second = i;
        }

        sort(nums_index.begin(), nums_index.end());

        for (size_t i = 0; i < nums.size(); i++) {
            for (size_t j = i + 1; j < nums.size(); j++) {
                if (nums_index[i].first + valueDiff >= nums_index[j].first) {
                    if (abs(nums_index[i].second - nums_index[j].second) <=
                        indexDiff) {
                        return true;
                    }
                } else {
                    // sorting help here, when the ith and jth values sum
                    // is not <= valueDiff, then we can skip rest of the
                    // array since it will be always greater for rest of
                    // the elements
                    break;
                }
            }
        }
        return false;
    }
};

int main() {
    Solution sol = Solution();
    vector<int> nums = {1, 2, 3, 1};

    cout << sol.containsNearbyAlmostDuplicate(nums, 3, 0) << endl;

    return 0;
}
