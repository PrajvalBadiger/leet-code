class MyCalendarTwo {
    private map: Map<number, number> = new Map();
    // private double_bookings: number[][] = [];
    constructor() {

    }

    book(start: number, end: number): boolean {
        this.map.set(start, this.map.get(start) ? this.map.get(start)! + 1 : 1);
        this.map.set(end, this.map.get(end) ? this.map.get(end)! - 1 : -1);

        // since map in javascript/typescript is not sorted by key we have to sort it first
        let sorted = Array.from(this.map).sort((a, b) => a[0] - b[0]);
        this.map = new Map(sorted);

        let sum = 0;
        for (const [_, value] of this.map.entries()) {
            sum += value;
            if (sum >= 3) {
                if (this.map.has(start)) {
                    this.map.set(start, this.map.get(start)! - 1);
                }

                if (this.map.has(end)) {
                    this.map.set(end, this.map.get(end)! + 1);
                }

                return false;
            }
        }

        return true;
    }

}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
