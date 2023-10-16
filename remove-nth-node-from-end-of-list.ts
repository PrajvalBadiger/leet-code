/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // list with one element
    if (!head?.next && n === 1) {
        return null;
    } else if (!head?.next && n > 1) {
        return head
    }

    let curr = head;
    let count = 0;
    // count number of element in the list
    while (curr?.next) {
        count++;
        curr = curr.next;
    }
    count++;
    curr = head;

    // traverse until curr.next is the target element
    for(let i = 1; i < (count - n) && curr; i++) {
        curr = curr.next;
    }

    // target element is the head, delete head
    if (count - n === 0) {
        return head!.next;
    }

    // delete the target element
    if(curr?.next) {
        curr.next = curr.next.next;
    }

    return head;
};

