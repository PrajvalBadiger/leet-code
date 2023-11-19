/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function walk(curr: TreeNode | null): number {
    if (!curr) {
        return 0;
    }

    // pre
    // recurse
    let left_depth = walk(curr.left)
    let right_depth = walk(curr.right)

    // post
    return 1 + Math.max(left_depth, right_depth);
}

function maxDepth(root: TreeNode | null): number {
    return walk(root)
};
