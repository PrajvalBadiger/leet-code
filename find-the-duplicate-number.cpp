#include <bits/stdc++.h>
using namespace std;

// This problem is similar to Linkedlist cycle.
// Solve it using Flyod's Algo
class Solution {
  public:
    int findDuplicate(vector<int> &nums) {
        int slow = nums[0];
        int fast = nums[nums[0]];

        // find the intersection
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }

        // find the start of the loop
        int slow2 = 0;
        while (slow != slow2) {
            slow = nums[slow];
            slow2 = nums[slow2];
        }

        return slow2;
    }
};

int main() {
    Solution *sol = new Solution();

    vector<int> nums = {1, 3, 4, 2, 2};
    cout << sol->findDuplicate(nums) << endl;

    return 0;
}
