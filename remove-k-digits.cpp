/* 403. Remove k digits
 * This problem can be solved using monotonically increasing stack
 * that is top element is always greater.
 */
#include <iostream>
#include <string>
using namespace std;

class Solution {
  public:
    string removeKdigits(string num, int k) {
        /* using a string as a stack
         * res.back() -> top element
         * res.push_back(ch) -> push(ch)
         * res.pop_back(ch) -> pop(ch)
         */
        string res = "";

        // push into a monotonic increasing stack
        for (auto ch : num) {
            while (res.length() && k && res.back() > ch) {
                k--;
                res.pop_back();
            }

            // don't push '0' in the begining
            if (res.length() || ch != '0') {
                res.push_back(ch);
            }
        }

        // if still k > 0
        while (res.length() && k) {
            k--;
            res.pop_back();
        }

        return res.length() ? res : "0";
    }
};

int main() {
    // driver code
    Solution sol;
    string num;
    int k;
    string res;

    num = "1432219";
    k = 3;
    res = sol.removeKdigits(num, k);
    cout << res << endl;

    num = "10";
    k = 2;
    res = sol.removeKdigits(num, k);
    cout << res << endl;

    return 0;
}
