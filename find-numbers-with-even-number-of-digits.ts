function findNumbers(nums: number[]): number {
    let count: number = 0;

    nums.forEach(num => {
        let digits = 0;
        while (num !== 0) {
            digits++;
            num = Math.floor(num / 10);
        }

        if (digits % 2 == 0) {
            count++;
        }
    });

    return count;
};
