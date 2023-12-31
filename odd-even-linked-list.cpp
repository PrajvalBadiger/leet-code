#include <bits/stdc++.h>
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
    ListNode *oddEvenList(ListNode *head) {
        if (!head)
            return nullptr;

        ListNode *even = head;
        ListNode *odd = head->next;
        ListNode *oddHead = odd;

        while (odd && odd->next) {
            even->next = odd->next;
            even = even->next;

            odd->next = even->next;
            odd = odd->next;
        }
        even->next = oddHead;

        return head;
    }
};

int main() {
    Solution sol = Solution();
    return 0;
}
