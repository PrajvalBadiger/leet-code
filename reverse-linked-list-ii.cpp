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
    ListNode *reverseBetween(ListNode *head, int left, int right) {
        int diff = right - left + 1;

        // split the list until left
        ListNode *newHead = head;
        ListNode *prevNewHead = nullptr;

        while (left-- > 1 && newHead != nullptr) {
            prevNewHead = newHead;
            newHead = newHead->next;
        }

        // reverse the list from left to right
        ListNode *prev = nullptr;
        ListNode *curr = newHead;
        ListNode *next = newHead;

        while (diff-- != 0 && curr != nullptr) {
            next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }

        // combine the lists
        if (prevNewHead != nullptr) {
            if (prev != nullptr) {
                prevNewHead->next = prev;
            } else {
                prevNewHead->next = NULL;
            }
        } else {
            head = prev;
        }
        newHead->next = curr;

        return head;
    }
};

int main() { return 0; }
