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
    let dir = true
    while (q.length) {
        let qlen = q.length
        let level = Array(qlen)
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            if (!curr) {
                continue
            }

            // left to right or right to left
            let idx = dir ? i : qlen - 1 - i

            level[idx] = curr.val
            if (curr.left) {
                q.push(curr.left)
            }
            if (curr.right) {
                q.push(curr.right)
            }
        }
        dir = dir ? false : true

        if (level.length) {
            res.push(level)
        }
    }

    return res
};
