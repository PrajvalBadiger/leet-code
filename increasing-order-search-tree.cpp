#include <vector>
using namespace std;
/**
 * Definition for a binary tree nodeVal.
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
    TreeNode *increasingBST(TreeNode *root) {
        vector<int> path;
        TreeNode *newRoot = new TreeNode(-1);

        dfs(root, path);

        root = newRoot;
        for (int nodeVal : path) {
            TreeNode *newNode = new TreeNode(nodeVal);
            newRoot->right = newNode;
            newRoot = newRoot->right;
        }

        return root->right;
    }

  private:
    // in order traversal
    void dfs(TreeNode *root, vector<int> &path) {
        if (!root)
            return;

        dfs(root->left, path);
        path.push_back(root->val);
        dfs(root->right, path);
    }
};

int main() { return 0; }
