/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    // Step 1: Create a frequency map
    const charFrequency = new Map();
    for (const char of s) {
        //charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
        if (charFrequency.has(char)) {
            charFrequency.set(char, charFrequency.get(char) + 1);
        } else {
            charFrequency.set(char, 1);
        }

    }

    // Step 2: Sort characters based on frequencies
    const sortedChars = [...s];
    sortedChars.sort((a, b) => {
        const freqA = charFrequency.get(a);
        const freqB = charFrequency.get(b);
        if (freqA === freqB) {
            return b.localeCompare(a); // Sort alphabetically for equal frequencies
        }
        return freqB - freqA; // Sort by frequency in decreasing order
    });

    // Step 3: Build the sorted string
    return sortedChars.join('');
};
