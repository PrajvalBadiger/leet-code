/*
 * 1290. Convert Binary Number in a Linked List to Integer
 */

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
  public:
    int getDecimalValue(ListNode *head) {
        if (!head->next) {
            return head->val;
        }

        vector<int> num;
        int mul = 1;
        int ans = 0;

        // list to array
        while (head) {
            num.push_back(head->val);
            head = head->next;
        }

        // arr to number
        for (int i = num.size() - 1; i >= 0; i--) {
            ans += num[i] * mul;
            mul *= 2;
        }

        return ans;
    }
};
