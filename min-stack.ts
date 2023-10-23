class MinStack {
    private stack: number[] = [];
    private min_stack: number[] = [];
    private top_ptr = -1;

    constructor() {

    }

    push(val: number): void {
        if (this.top_ptr === -1) {
            this.top_ptr++;
            this.stack[this.top_ptr] = val;
            this.min_stack[this.top_ptr] = val;
        } else {
            let min = this.min_stack[this.top_ptr];
            this.top_ptr++;
            this.stack[this.top_ptr] = val;
            this.min_stack[this.top_ptr] = Math.min(min, val);

        }
    }

    pop(): void {
        this.top_ptr--;
    }

    top(): number {
        return this.stack[this.top_ptr];
    }

    getMin(): number {
        return this.min_stack[this.top_ptr];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
