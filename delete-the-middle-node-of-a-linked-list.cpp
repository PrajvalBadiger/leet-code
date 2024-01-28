/*
 * 2095. Delete the Middle Node of a Linked List
 * Use the tortoise and the hare algorithm to find the mid and delete it
 */
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
    ListNode *middleNode(ListNode *head) {
        ListNode *fast = head;
        ListNode *slow = head;
        // since we need to delete the mid node we need to keep track of the
        // previous node
        ListNode *prev = head;

        while (fast && fast->next) {
            prev = slow;
            slow = slow->next;
            fast = fast->next->next;
        }

        return prev;
    }

  public:
    ListNode *deleteMiddle(ListNode *head) {
        if (!head || !head->next) {
            return nullptr;
        }

        // use tortoise and the hare algorithm to find mid node
        ListNode *mid = middleNode(head);
        // delete the mid element
        mid->next = mid->next->next;

        return head;
    }
};
