/*
 * 148. Sort List
 * Merge sort - sort the list in place without any extra space (O(n)
 * space required for call stack)
 * tortoise and the hare algorithm - to find the middle node, fast & slow
 * pointer approach
 */

#include <iostream>
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
    ListNode *find_mid(ListNode *head) {
        ListNode *slow = head;
        // fast as head->next since we need the 1st middle in case of even nodes
        ListNode *fast = head->next;

        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }

        return slow;
    }

    // merge two sorted list
    ListNode *merge(ListNode *left, ListNode *right) {
        ListNode *res = new ListNode(-1);
        ListNode *h = res;

        while (left && right) {
            if (left->val < right->val) {
                h->next = left;
                h = left;
                left = left->next;
            } else {
                h->next = right;
                h = right;
                right = right->next;
            }
        }

        if (left)
            h->next = left;
        else
            h->next = right;

        return res->next;
    }

  public:
    ListNode *sortList(ListNode *head) {
        if (!head || !head->next)
            return head;

        // find mid node
        ListNode *mid = find_mid(head);
        ListNode *right = mid->next;
        ListNode *left = head;
        mid->next = nullptr;

        // sort left list and right lists
        left = sortList(left);
        right = sortList(right);

        // merge left and right lists
        return merge(left, right);
    }
};

int main() {
    // driver code
    return 0;
}
