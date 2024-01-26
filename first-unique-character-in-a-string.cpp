#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

class Solution {

  public:
    int firstUniqChar(string s) {
        int n = s.length();
        unordered_map<char, int> freq;
        // get the freq of the chars with the index
        for (int i = 0; i < n; i++) {
            freq[s[i]]++;
        }

        // check which char has least index with freq 1
        for (int i = 0; i < n; i++) {
            if (freq[s[i]] == 1) {
                return i;
            }
        }
        return -1;
    }
};

int main() {
    // driver
    Solution sol;
    string s = "loveleetcode";
    cout << sol.firstUniqChar(s) << endl;
    s = "lleecc";
    cout << sol.firstUniqChar(s) << endl;
    return 0;
}
