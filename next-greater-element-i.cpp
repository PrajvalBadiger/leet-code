/* 496. Next Greater Element I
 * revisit to solve using monotonic stack
 */
#include <iostream>
#include <vector>
using namespace std;

class Solution {
  public:
    vector<int> nextGreaterElement(vector<int> &nums1, vector<int> &nums2) {
        int n = nums1.size();
        int m = nums2.size();
        vector<int> res(n, -1);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (nums1[i] == nums2[j]) {
                    int k = j + 1;
                    while (k < m) {
                        if (nums1[i] < nums2[k]) {
                            res[i] = nums2[k];
                            break;
                        }
                        k++;
                    }
                    break;
                }
            }
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
