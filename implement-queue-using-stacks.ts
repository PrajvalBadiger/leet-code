class MyQueue {

    private in: number[]
    private out: number[]

    constructor() {
        this.in = []
        this.out = []
    }

    push(x: number): void {
        this.in.push(x)
    }

    pop(): number {
        this.peek() // move all the elements from in stack to out stack
        return this.out.pop()!
    }

    peek(): number {
        // move all the values from in stack to out stack
        if (this.out.length === 0) {
            while (this.in.length > 0) {
                this.out.push(this.in.pop()!)
            }
        }

        return this.out[this.out.length - 1]
    }

    empty(): boolean {
        return this.in.length === 0 && this.out.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
