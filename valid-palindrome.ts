function isPalindrome(s: string): boolean {
    function isAlphanumeric(ch: string) {
        let cha = ch.charCodeAt(0);
        return (cha >= 65 && cha < 91) || (cha >= 97 && cha < 123) || (cha >= 48 && cha < 58);
    }
    s = s.toLowerCase();

    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        // console.log(s[l],s[r]);
        if (!isAlphanumeric(s[l])) {
            l++;
        } else if (!isAlphanumeric(s[r])) {
            r--;
        } else if (s[l] === s[r]) {
            l++;
            r--;
        } else {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));

