function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])
    let merged: number[][] = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > merged[merged.length - 1][1]) { // curr starts after prev ends
            merged.push(intervals[i]);
        } else { // else the intervals intersect and merge them
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1])
        }
    }

    return merged
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log(merge([[1, 4], [4, 5]]))
