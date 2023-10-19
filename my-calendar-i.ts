class MyCalendar {
    private bookings: number[][] = [];

    constructor() {

    }

    book(start: number, end: number): boolean {
        if (this.bookings.length === 0) this.bookings.push([start, end]);
        else {
            for (const [st, en] of this.bookings) {
                if (st < end && start < en) {
                    return false;
                }
            }
            this.bookings.push([start, end]);
        }
        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
