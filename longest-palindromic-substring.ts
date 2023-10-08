function isPalindrome(s: string, l: number, r: number): boolean {
    r = r - 1;
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}

function longestPalindrome(s: string): string {
    let len = 0;
    let res = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 2; j <= s.length; j++) {
            if (isPalindrome(s, i, j)) {
                const substring = s.substring(i, j);
                if (len < substring.length) {
                    res = substring;
                    len = substring.length;
                }
            }
        }
    }

    // skip checking for single char as single char are always a Palindrome
    // if there are no Palindrome strings return the first char
    if (res === "") {
        return s[0];
    }

    return res;
};

function longestPalindrome2(s: string): string {
    let res = "";
    let resLen = 0;

    for (let i = 0; i < s.length; i++) {
        // odd case
        let l = i;
        let r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > resLen) {
                res = s.slice(l, r + 1);
                resLen = r - l + 1;
            }
            l -= 1;
            r += 1;
        }

        // even case
        l = i;
        r = i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > resLen) {
                res = s.slice(l, r + 1);
                resLen = r - l + 1;
            }
            l -= 1;
            r += 1;
        }
    }
    return res
}

console.log(longestPalindrome2("babad"));
console.log(longestPalindrome2("cbbd"));
console.log(longestPalindrome2("kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv"));

