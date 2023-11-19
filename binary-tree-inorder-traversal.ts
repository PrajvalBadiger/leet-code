/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function walk(curr: TreeNode | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // pre

    // recurse
    walk(curr.left, path);
    path.push(curr.val);
    walk(curr.right, path);

    // post
    return path;
}

function inorderTraversal(root: TreeNode | null): number[] {
    return walk(root, [])
};
