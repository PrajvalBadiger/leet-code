/*
* 61. Rotate List
* Approach:
*   1. Create a circular list
*   2. Break the list at the point of rotation
*   3. Return new head
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
    ListNode *rotateRight(ListNode *head, int k) {
                if (!head || k == 0) return head;

        ListNode *temp = head;
        ListNode *prev = temp;

        // count no of node
        int n = 0;
        while (temp) {
            prev = temp;
            temp = temp->next;
            n++;
        }
        // create a circular linked list
        prev->next = head;
        temp = head;

        int n_rotation = k % n; // calculate no of rotations
        // traverse till point of rotation
        for (int i = 0; i < n - n_rotation; i++) {
            prev = temp;
            temp = temp->next;
        }
        // make the list a singular list at the point of rotation
        prev->next = nullptr;

        return temp;
    }
};
