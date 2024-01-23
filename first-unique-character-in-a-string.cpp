#include <algorithm>
#include <climits>
#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

class Solution {

  public:
    int firstUniqChar(string s) {
        int n = s.length();
        unordered_map<char, pair<int, int>> mp;
        // get the freq of the chars with the index
        for (int i = 0; i < n; i++) {
            char ch = s[i];
            mp[ch].first++;
            mp[ch].second = i;
        }

        // check which char has least index with freq 1
        int ans = INT_MAX;
        for (const pair<char, pair<int, int>> freq : mp) {
            if (freq.second.first == 1) {
                ans = min(ans, freq.second.second);
            }
        }

        if (ans == INT_MAX)
            return -1;
        return ans;
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
