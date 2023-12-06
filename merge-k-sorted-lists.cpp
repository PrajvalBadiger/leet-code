// Solution:
// 1. sort the elements using min-Heap/priority_queue
// 2. construct the resultant list by poping out elements from the
// priority_queue

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
    ListNode *mergeKLists(vector<ListNode *> &lists) {
        ListNode *res = new ListNode(-1);
        ListNode *res_bkp = res;
        priority_queue<int> pq;

        // Sort using priority_queue
        for (ListNode *list : lists) {
            while (list) {
                pq.push(-1 * list->val);
                list = list->next;
            }
        }

        // construct the resultant list
        while (!pq.empty()) {
            ListNode *newNode = new ListNode(-1 * pq.top());
            pq.pop();
            res->next = newNode;
            res = res->next;
        }

        return res_bkp->next;
    }
};

int main() { return 0; }
