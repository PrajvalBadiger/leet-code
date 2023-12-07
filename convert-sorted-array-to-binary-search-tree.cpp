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

// Divide and Conquer method:
// 1. find mid element in the array
// 2. recursively call the function on left sub array and right sub array
// 3. return NULL if start > end, because start has to be less than end
// 4. if start and end are same then return the node with mid element

class Solution {
  public:
    TreeNode *sortedArrayToBST(vector<int> &nums) {
        if (nums.size() == 0) {
            return NULL;
        }
        return create_tree(nums, 0, nums.size() - 1);
    }

  private:
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

int main() {

    Solution *sol = new Solution();
    vector<int> nums = {-10, -3, 0, 5, 9};

    TreeNode *root = sol->sortedArrayToBST(nums);

    return 0;
}
