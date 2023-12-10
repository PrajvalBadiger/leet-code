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
  public:
    // 1. in-order traversal to sort the tree and store into a array
    // 2. create a new tree picking mid element of the array as parent
    TreeNode *balanceBST(TreeNode *root) {
        vector<int> path;
        dfs(root, path); // in order traversal
        return create_tree(path, 0, path.size() - 1);
    }

  private:
    // in order traversal
    void dfs(TreeNode *curr, vector<int> &path) {
        if (!curr) {
            return;
        }

        dfs(curr->left, path);
        path.push_back(curr->val);
        dfs(curr->right, path);
    }

    // Create a BST from a sorted array
    TreeNode *create_tree(vector<int> &nums, int start, int end) {
        if (start > end)
            return NULL;

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

int main() { return 0; }
