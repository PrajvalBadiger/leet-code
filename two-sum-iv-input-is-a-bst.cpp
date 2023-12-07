#include <bits/stdc++.h>
#include <unordered_map>
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

// Using set to keep track of target - curr
class Solution {
  public:
    bool findTarget(TreeNode *root, int k) {
        unordered_set<int> st;
        return find_diff_node(root, st, k);
    }

  private:
    bool find_diff_node(TreeNode *root, unordered_set<int> &st, int target) {

        if (root == nullptr) {
            return false;
        }

        int curr = root->val;
        int x = target - curr;

        if (st.find(x) != st.end()) {
            return true;
        }

        st.insert(curr);
        return find_diff_node(root->right, st, target) ||
               find_diff_node(root->left, st, target);
    }
};

int main() { return 0; }
