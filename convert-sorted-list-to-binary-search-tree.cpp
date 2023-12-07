#include <bits/stdc++.h>
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

/**
 * Definition for a binary tree node.
 */
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right)
        : val(x), left(left), right(right) {}
};

// 1. Convert the list to a vector
// 2. Convert the vector to BST
class Solution {
  public:
    TreeNode *sortedListToBST(ListNode *head) {
        if (!head)
            return nullptr;
        vector<int> nums;
        convertListToArray(head, nums);

        return sortedArrayToBST(nums);
    }

  private:
    void convertListToArray(ListNode *head, vector<int> &nums) {
        ListNode *curr = head;

        while (curr) {
            nums.push_back(curr->val);
            curr = curr->next;
        }
    }

    TreeNode *sortedArrayToBST(vector<int> &nums) {
        if (nums.size() == 0) {
            return nullptr;
        }
        return create_tree(nums, 0, nums.size() - 1);
    }

    TreeNode *create_tree(vector<int> &nums, int start, int end) {
        if (start > end)
            return nullptr;

        if (start == end) {
            return new TreeNode(nums[start]);
        }

        int mid = start + (end - start) / 2;
        TreeNode *newNode = new TreeNode(nums[mid]);

        newNode->left = create_tree(nums, start, mid - 1);
        newNode->right = create_tree(nums, mid + 1, end);

        return newNode;
    }
};
