/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let res: ListNode | null = new ListNode();
    let res_bkp = res;

    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            res.next = list1;
            list1 = list1.next;
        } else {
            res.next = list2;
            list2 = list2!.next;
        }
        if (res != null)
            res = res.next;
    }

    if (list1 === null) {
        res.next = list2;
    }
    if (list2 === null) {
        res.next = list1;
    }

    return res_bkp.next;
};
