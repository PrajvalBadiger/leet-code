#include <bits/stdc++.h>
using namespace std;

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

class Solution {
  public:
    TreeNode *searchBST(TreeNode *root, int val) {
        if (!root)
            return nullptr;

        // found the value
        if (root->val == val)
            return root;

        if (root->val < val) {
            // search right subtree
            return searchBST(root->right, val);
        } else {
            // search left subtree
            return searchBST(root->left, val);
        }

        // end of the tree
        return nullptr;
    }
};

int main() { return 0; }
