/*
 * 114. Flatten Binary Tree to Linked List
 */
#include <vector>
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
    void pre_order(TreeNode *root, vector<int> &path) {
        if (!root) {
            return;
        }

        path.push_back(root->val);
        pre_order(root->left, path);
        pre_order(root->right, path);
    }

  public:
    void flatten(TreeNode *root) {
        if (!root) {
            return;
        }

        vector<int> path;
        pre_order(root, path);

        TreeNode *curr = root;
        for (int i = 1; i < path.size(); i++) {
            curr->left = nullptr;
            curr->right = new TreeNode(path[i]);
            curr = curr->right;
        }
    }
};
