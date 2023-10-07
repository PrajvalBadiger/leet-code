function generate(numRows: number): number[][] {
    let triangle: number[][] = [];

    for (let i = 0; i < numRows; i++) {
        triangle[i] = new Array(i + 1);
        triangle[i][0] = 1;
        triangle[i][triangle[i].length - 1] = 1;
        for (let j = 1; j < triangle[i].length - 1; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }

    return triangle;

};

console.log(generate(5));
