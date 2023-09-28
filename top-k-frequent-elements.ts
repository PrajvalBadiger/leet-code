function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map<number, number>();
    nums.forEach(num => {
        if (map.has(num)) {
            let count = map.get(num)!;
            map.set(num, count + 1);
        } else {
            map.set(num, 1);
        }
    });

    const mapToArr = Array.from(map);
    mapToArr.sort((a, b) => b[1] - a[1]);

    return mapToArr.slice(0, k).map(x => x[0]);
};
