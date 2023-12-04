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
    bool isSymmetric(TreeNode *root) {
        if (!root)
            return true;
        return walk(root->left, root->right);
    }

  private:
    bool walk(TreeNode *leftNode, TreeNode *rightNode) {
        if (!leftNode && !rightNode)
            return true;
        if (!leftNode || !rightNode)
            return false;

        return (leftNode->val == rightNode->val) &&
               walk(leftNode->left, rightNode->right) &&
               walk(leftNode->right, rightNode->left);
    }
};
