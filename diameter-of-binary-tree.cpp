#include <bits/stdc++.h>
#include <utility>
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
    int diameterOfBinaryTree(TreeNode *root) {
        int ans = 0;
        find_diameter(root, ans);
        return ans;
    }

  private:
    int find_diameter(TreeNode *root, int &ans) {
        if (!root)
            return 0;

        int left = find_diameter(root->left, ans);
        int right = find_diameter(root->right, ans);

        ans = max(ans, left + right);

        return 1 + max(left, right);
    }
};

int main() { return 0; }
