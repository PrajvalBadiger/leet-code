#include <algorithm>
#include <bits/stdc++.h>
#include <unordered_map>
#include <vector>
using namespace std;

/**
 * Definition for singly-linked list.
 */
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
  public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode *currA = headA;
        ListNode *currB = headB;
        int countA = 0;
        int countB = 0;

        // get the length of each linkedList
        while (currA->next) {
            countA++;
            currA = currA->next;
        }
        countA++;
        while (currB->next) {
            countB++;
            currB = currB->next;
        }
        countB++;

        // No Intersection
        if (currA->val != currB->val)
            return nullptr;

        currA = headA;
        currB = headB;

        // align both the linkedLists
        if (countA > countB) {
            while (countA != countB && currA) {
                countA--;
                currA = currA->next;
            }
        } else {
            while (countA != countB && currB) {
                countB--;
                currB = currB->next;
            }
        }

        // move until the Intersection
        while (currA && currB) {
            // Intersection found
            if (currA == currB && currA->val == currB->val) {
                return currA;
            }
            currA = currA->next;
            currB = currB->next;
        }

        return nullptr;
    }
};

int main() { return 0; }
