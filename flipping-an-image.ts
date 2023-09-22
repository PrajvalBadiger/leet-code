function flipAndInvertImage(image: number[][]): number[][] {

    for (let row = 0; row < image.length; row++) {
        image[row].reverse();
        for (let col = 0; col < image[row].length; col++) {
            image[row][col] = (image[row][col] === 0) ? 1 : 0;
        }
    }

    return image;
};
