function uniqueMorseRepresentations(words: string[]): number {
    const ASCII_A = 97;
    const morse_code = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    let morse_words: string[] = [];

    words.forEach(word => {
        let morse_word: string = "";

        for (let idx = 0; idx < word.length; idx++) {
            let morse_idx = word.charCodeAt(idx) - ASCII_A;
            morse_word += morse_code[morse_idx];
        }

        morse_words.push(morse_word);
    });

    const res = new Set(morse_words);

    return res.size;
};
