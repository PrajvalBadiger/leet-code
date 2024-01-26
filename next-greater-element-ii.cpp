/* 496. Next Greater Element I
 * Solution uses monotonic stack to find the next Greater Element
 * of each of the elements in nums and modulo operator (%) for circular behavior
 */
#include <iostream>
#include <stack>
#include <vector>
using namespace std;

class Solution {
  public:
    vector<int> nextGreaterElements(vector<int> &nums) {
        stack<int> s;
        int n = nums.size();
        vector<int> res(n, -1);

        // iterate from 2n -1 to 0 to find circular next greater and % to wrap
        // around
        for (int i = 2 * n - 1; i > 0; i--) {
            while (!s.empty() && (nums[i % n] >= s.top())) {
                s.pop();
            }

            if (!s.empty()) {
                res[i % n] = s.top();
            }

            s.push(nums[i % n]);
        }

        return res;
    }
};

int main() {
    // driver code
    Solution sol;
    vector<int> nums;
    vector<int> res;

    nums = {1, 2, 1};
    res = sol.nextGreaterElements(nums);
    for (auto r : res) {
        cout << r << ", ";
    }
    cout << endl;

    nums = {1, 2, 3, 4, 3};
    res = sol.nextGreaterElements(nums);
    for (auto r : res) {
        cout << r << ", ";
    }
    cout << endl;
    return 0;
}
