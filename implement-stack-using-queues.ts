class MyQueue<T> {
    public length: number
    private queue: T[]
    constructor() {
        this.queue = []
        this.length = 0
    }

    enqueue(item: T): void {
        this.queue.push(item)
        this.length++
    }

    dequeue(): T | undefined {
        if (this.queue.length === 0) {
            return undefined
        }

        let r = this.peek();
        this.queue.shift()
        this.length--
        return r
    }

    peek(): T | undefined {
        if (this.queue.length === 0) {
            return undefined
        }

        return this.queue[0]
    }

    is_empty(): boolean {
        return this.length === 0
    }
}

class MyStack {
    private queue_left: MyQueue<number>
    private queue_right: MyQueue<number>

    constructor() {
        this.queue_right = new MyQueue()
        this.queue_left = new MyQueue()
    }

    push(x: number): void {
        // queue_left -> queue_right
        while (!this.queue_left.is_empty()) {
            this.queue_right.enqueue(this.queue_left.dequeue()!)
        }

        // queue_left push x
        this.queue_left.enqueue(x)

        // queue_right -> queue_left
        while (!this.queue_right.is_empty()) {
            this.queue_left.enqueue(this.queue_right.dequeue()!)
        }
    }

    pop(): number {
        let r = this.queue_left.peek()!
        this.queue_left.dequeue()
        return r
    }

    top(): number {
        return this.queue_left.peek()!
    }

    empty(): boolean {
        return this.queue_left.is_empty()
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
