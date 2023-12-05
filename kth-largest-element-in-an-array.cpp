// Solution uses priority queue(Max Heap)
// 1. Insert all elements in priority_queue
// 2. then pop k - 1 elements
// 3. the top element is the kth largest

#include <bits/stdc++.h>
using namespace std;

class Solution {
  public:
    int findKthLargest(vector<int> &nums, int k) {
        priority_queue<int> pq;
        for (const int num : nums) {
            pq.push(num);
        }

        while (!pq.empty() && k-- > 1) {
            pq.pop();
        }
        return pq.top();
    }
};

int main() {
    Solution *sol = new Solution();

    vector<int> nums = {3, 2, 3, 1, 2, 4, 5, 5, 6};
    int k = 4;
    cout << sol->findKthLargest(nums, k) << endl;
    nums = {3, 2, 1, 5, 6, 4};
    k = 2;
    cout << sol->findKthLargest(nums, k) << endl;
    return 0;
}
