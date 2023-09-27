function isSeflDividing(num: number): boolean {
    let rem = 0;
    const origNum = num;

    while (num > 0) {
        rem = num % 10;

        // exclude numbers contianing 0
        if (rem === 0) {
            return false;
        }

        if (origNum % rem !== 0) {
            return false;
        }
        num = Math.floor(num / 10);
    }

    return true;
}

function selfDividingNumbers(left: number, right: number): number[] {
    let res: number[] = [];

    for (let idx = left; idx <= right; idx++) {
        if (isSeflDividing(idx)) {
            res.push(idx);
        }
    }

    return res;
};
