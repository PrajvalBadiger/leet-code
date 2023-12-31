#include <iostream>
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
    void in_order(TreeNode *root, int &k, int &ans) {
        if (root == NULL) {
            return;
        }

        in_order(root->left, k, ans);
        k--;
        if (k == 0)
            ans = root->val;
        in_order(root->right, k, ans);
    }

  public:
    int kthSmallest(TreeNode *root, int k) {
        int ans = 0;
        in_order(root, k, ans);
        return ans;
    }
};
