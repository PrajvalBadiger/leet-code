// Calculate no. of 5's present in the number
// If n=5 ... there will be 1(5)
// If n=10 ... there will be 2(5)
// If n=15 ... there will be 3(5)
// If n=25 ... there will be 5(5) + 1 (5)

#include <bits/stdc++.h>
using namespace std;

class Solution {
  public:
    int trailingZeroes(int n) {
        int res = 0;
        while (n != 0) {
            res += n / 5;
            n = n / 5;
        }
        return res;
    }
};

int main() { return 0; }
