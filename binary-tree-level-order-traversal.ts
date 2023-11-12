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

function levelOrder(root: TreeNode | null): number[][] {
    const q: (TreeNode | null)[] = [root];
    const res: number[][] = []

    while (q.length) {
        let qlen = q.length
        let level = []
        for (let i = 0; i < qlen; i++) {

            let curr = q.shift()
            if (!curr) continue

            level.push(curr.val)

            q.push(curr.left)
            q.push(curr.right)
        }
        if (level.length) res.push(level)
    }

    return res
};
