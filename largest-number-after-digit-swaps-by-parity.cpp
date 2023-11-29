#include <bits/stdc++.h>
#include <queue>
using namespace std;

class Solution {
  public:
    int largestInteger(int num) {
        int n = num;
        priority_queue<int> odd;
        priority_queue<int> even;

        // 1. push the elements to odd/even priority_queue based on parity.
        int d = 0;
        while (n != 0) {
            d = n % 10;
            if (d % 2 == 0) {
                even.push(d * -1);
            } else {
                odd.push(d * -1);
            }
            n /= 10;
        }

        // 2. form the result based on parity of original number
        n = num;
        int res = 0;
        long long mul = 1;
        while (n != 0) {
            if ((n % 10) % 2 == 0) {
                res = res + even.top() * -1 * mul;
                even.pop();
            } else {
                res = res + odd.top() * -1 * mul;
                odd.pop();
            }
            n /= 10;
            mul *= 10;
        }

        return res;
    }
};

int main() {
    Solution *sol = new Solution();
    int res = sol->largestInteger(1234);
    cout << res << endl;

    res = sol->largestInteger(65875);
    cout << res << endl;

    return 0;
}
