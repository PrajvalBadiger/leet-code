#include <iostream>
#include <stack>
#include <vector>
using namespace std;
/**
 * Definition for singly-linked list.
 */
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
    vector<int> next_greater_element(vector<int> &nums) {
        stack<int> s;
        int n = nums.size();
        vector<int> res(n, 0);

        for (int i = n - 1; i >= 0; i--) {
            while (!s.empty() && nums[i] >= s.top()) {
                s.pop();
            }

            if (!s.empty()) {
                res[i] = s.top();
            }

            s.push(nums[i]);
        }

        return res;
    }

  public:
    vector<int> nextLargerNodes(ListNode *head) {
        ListNode *h = head;

        vector<int> nums;
        while (h->next != nullptr) {
            nums.push_back(h->val);
            h = h->next;
        }
        nums.push_back(h->val);
        for (auto e : nums) {
            cout << e << ", ";
        }
        cout << endl;
        return next_greater_element(nums);
    }
};
