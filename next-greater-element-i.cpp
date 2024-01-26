/* 496. Next Greater Element I
 * Solution uses monotonic stack to find the next Greater Element
 * of each of the elements in nums2 and stores this in a map
 */
#include <iostream>
#include <stack>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
  public:
    vector<int> nextGreaterElement(vector<int> &nums1, vector<int> &nums2) {
        int n = nums1.size();
        int m = nums2.size();

        vector<int> res(n);
        unordered_map<int, int> next_greater;
        stack<int> s;

        // find the next greater element for all elements in nums2
        for (int i = m - 1; i >= 0; i--) {
            while (!s.empty() && s.top() < nums2[i]) {
                s.pop();
            }

            next_greater[nums2[i]] = s.empty() ? -1 : s.top();
            s.push(nums2[i]);
        }

        for (int i = 0; i < n; i++) {
            res[i] = next_greater[nums1[i]];
        }

        return res;
    }
};

int main() {
    // driver code
    Solution sol;
    vector<int> nums1;
    vector<int> nums2;
    vector<int> res;

    nums1 = {4, 1, 2};
    nums2 = {1, 3, 4, 2};
    res = sol.nextGreaterElement(nums1, nums2);
    for (auto r : res) {
        cout << r << ", ";
    }
    cout << endl;

    nums1 = {2, 4};
    nums2 = {1, 2, 3, 4};
    res = sol.nextGreaterElement(nums1, nums2);
    for (auto r : res) {
        cout << r << ", ";
    }
    cout << endl;
    return 0;
}
