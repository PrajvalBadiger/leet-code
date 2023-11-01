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
function backtrack(node: TreeNode | null, path: string, result: string[]) {
    if (!node?.left && !node?.right) {
        result.push(path + node?.val)
        return
    }

    const curr_path = path + node.val + "->"
    if (node.left) backtrack(node.left, curr_path, result)
    if (node.right) backtrack(node.right, curr_path, result)

}
function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = []
    if (root) {
        backtrack(root, "", result)
    }

    return result
};
